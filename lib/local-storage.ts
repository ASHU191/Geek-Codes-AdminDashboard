// Local storage utility functions for authentication and data storage

// User type definition
export interface LocalUser {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
  createdAt: string
  isAdmin?: boolean
}

// User data type definition
export interface UserData {
  name: string
  email: string
  bio?: string
  location?: string
  website?: string
  github?: string
  linkedin?: string
  twitter?: string
  skills: string[]
  hackathons: string[]
  teams: string[]
  badges: string[]
  createdAt: string
  updatedAt?: string
}

// Hackathon participation type
export interface UserHackathon {
  userId: string
  hackathonId: string
  progress: number
  status: "registered" | "in-progress" | "completed"
  teamId?: string
  rank?: number
  joinedAt: string
}

// Local storage keys
const USERS_KEY = "hackathon_hub_users"
const CURRENT_USER_KEY = "hackathon_hub_current_user"
const USER_DATA_KEY = "hackathon_hub_user_data"
const USER_HACKATHONS_KEY = "hackathon_hub_user_hackathons"

// Authentication functions
export const localAuth = {
  // Register a new user
  register: async (email: string, password: string, name?: string): Promise<LocalUser> => {
    const users = getUsers()

    // Check if user already exists
    if (users.find((user) => user.email === email)) {
      throw new Error("User already exists with this email")
    }

    // Create new user
    const newUser: LocalUser = {
      uid: generateId(),
      email,
      displayName: name || email.split("@")[0],
      createdAt: new Date().toISOString(),
    }

    // Store password (in real app, this would be hashed)
    localStorage.setItem(`${USERS_KEY}_${newUser.uid}_password`, password)

    // Add user to users list
    users.push(newUser)
    localStorage.setItem(USERS_KEY, JSON.stringify(users))

    // Create user data
    const userData: UserData = {
      name: newUser.displayName || "",
      email: newUser.email,
      skills: [],
      hackathons: [],
      teams: [],
      badges: [],
      createdAt: newUser.createdAt,
    }

    // Store user data
    setUserData(newUser.uid, userData)

    // Set as current user
    setCurrentUser(newUser)

    return newUser
  },

  // Login user
  login: async (email: string, password: string): Promise<LocalUser> => {
    const users = getUsers()
    const user = users.find((user) => user.email === email)

    if (!user) {
      throw new Error("User not found")
    }

    const storedPassword = localStorage.getItem(`${USERS_KEY}_${user.uid}_password`)

    if (password !== storedPassword) {
      throw new Error("Invalid password")
    }

    // Set as current user
    setCurrentUser(user)

    return user
  },

  // Logout user
  logout: async (): Promise<void> => {
    localStorage.removeItem(CURRENT_USER_KEY)
  },

  // Get current user
  getCurrentUser: (): LocalUser | null => {
    const userJson = localStorage.getItem(CURRENT_USER_KEY)
    return userJson ? JSON.parse(userJson) : null
  },

  // Update user profile
  updateProfile: async (user: LocalUser, updates: { displayName?: string; photoURL?: string }): Promise<void> => {
    const users = getUsers()
    const userIndex = users.findIndex((u) => u.uid === user.uid)

    if (userIndex === -1) {
      throw new Error("User not found")
    }

    const updatedUser = {
      ...users[userIndex],
      ...updates,
    }

    users[userIndex] = updatedUser
    localStorage.setItem(USERS_KEY, JSON.stringify(users))

    // Update current user if it's the same user
    const currentUser = localAuth.getCurrentUser()
    if (currentUser && currentUser.uid === user.uid) {
      setCurrentUser(updatedUser)
    }
  },

  // Check if user is admin
  isAdmin: (user: LocalUser | null): boolean => {
    return !!user?.isAdmin
  },

  // Admin login function
  adminLogin: async (email: string, password: string): Promise<LocalUser> => {
    // Check if credentials match admin credentials
    if (email === "admin@gmail.com" && password === "123") {
      // Create admin user if it doesn't exist
      const users = getUsers()
      let adminUser = users.find((user) => user.email === email)

      if (!adminUser) {
        adminUser = {
          uid: "admin-" + generateId(),
          email: "admin@gmail.com",
          displayName: "Admin",
          createdAt: new Date().toISOString(),
          isAdmin: true,
        }

        // Store admin user
        users.push(adminUser)
        localStorage.setItem(USERS_KEY, JSON.stringify(users))

        // Store password (in real app, this would be hashed)
        localStorage.setItem(`${USERS_KEY}_${adminUser.uid}_password`, password)
      } else {
        // Ensure the user has admin privileges
        adminUser.isAdmin = true

        // Update the user in the users array
        const userIndex = users.findIndex((u) => u.uid === adminUser!.uid)
        if (userIndex !== -1) {
          users[userIndex] = adminUser
          localStorage.setItem(USERS_KEY, JSON.stringify(users))
        }
      }

      // Set as current user
      setCurrentUser(adminUser)

      return adminUser
    }

    throw new Error("Invalid admin credentials")
  },
}

// Data functions
export const localData = {
  // Get user data
  getUserData: (userId: string): UserData | null => {
    return getUserData(userId)
  },

  // Update user data
  updateUserData: (userId: string, data: Partial<UserData>): void => {
    const userData = getUserData(userId)

    if (!userData) {
      throw new Error("User data not found")
    }

    const updatedData = {
      ...userData,
      ...data,
      updatedAt: new Date().toISOString(),
    }

    setUserData(userId, updatedData)
  },

  // Get user hackathons
  getUserHackathons: (userId: string): UserHackathon[] => {
    const hackathonsJson = localStorage.getItem(USER_HACKATHONS_KEY)
    const hackathons: UserHackathon[] = hackathonsJson ? JSON.parse(hackathonsJson) : []

    return hackathons.filter((h) => h.userId === userId)
  },

  // Add user to hackathon
  addUserToHackathon: (userId: string, hackathonId: string): void => {
    const hackathonsJson = localStorage.getItem(USER_HACKATHONS_KEY)
    const hackathons: UserHackathon[] = hackathonsJson ? JSON.parse(hackathonsJson) : []

    // Check if already registered
    if (hackathons.some((h) => h.userId === userId && h.hackathonId === hackathonId)) {
      return
    }

    const newHackathon: UserHackathon = {
      userId,
      hackathonId,
      progress: 0,
      status: "registered",
      joinedAt: new Date().toISOString(),
    }

    hackathons.push(newHackathon)
    localStorage.setItem(USER_HACKATHONS_KEY, JSON.stringify(hackathons))

    // Update user data
    const userData = getUserData(userId)
    if (userData) {
      userData.hackathons.push(hackathonId)
      setUserData(userId, userData)
    }
  },

  // Update hackathon progress
  updateHackathonProgress: (
    userId: string,
    hackathonId: string,
    progress: number,
    status?: "in-progress" | "completed",
  ): void => {
    const hackathonsJson = localStorage.getItem(USER_HACKATHONS_KEY)
    const hackathons: UserHackathon[] = hackathonsJson ? JSON.parse(hackathonsJson) : []

    const index = hackathons.findIndex((h) => h.userId === userId && h.hackathonId === hackathonId)

    if (index === -1) {
      return
    }

    hackathons[index] = {
      ...hackathons[index],
      progress,
      status: status || hackathons[index].status,
    }

    localStorage.setItem(USER_HACKATHONS_KEY, JSON.stringify(hackathons))
  },
}

// Helper functions
function getUsers(): LocalUser[] {
  const usersJson = localStorage.getItem(USERS_KEY)
  return usersJson ? JSON.parse(usersJson) : []
}

function setCurrentUser(user: LocalUser): void {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
}

function getUserData(userId: string): UserData | null {
  const userDataJson = localStorage.getItem(`${USER_DATA_KEY}_${userId}`)
  return userDataJson ? JSON.parse(userDataJson) : null
}

function setUserData(userId: string, data: UserData): void {
  localStorage.setItem(`${USER_DATA_KEY}_${userId}`, JSON.stringify(data))
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

