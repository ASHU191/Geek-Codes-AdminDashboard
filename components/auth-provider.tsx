"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { localAuth, type LocalUser } from "@/lib/local-storage"

type AuthContextType = {
  user: LocalUser | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<LocalUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Local storage authentication
    const checkUser = () => {
      const currentUser = localAuth.getCurrentUser()
      setUser(currentUser)
      setLoading(false)
    }

    checkUser()

    // Listen for storage events (for multi-tab support)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "hackathon_hub_current_user") {
        checkUser()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}

