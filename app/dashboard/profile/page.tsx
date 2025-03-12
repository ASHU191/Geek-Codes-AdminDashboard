"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { localAuth, localData } from "@/lib/local-storage"
import { useToast } from "@/hooks/use-toast"

export default function ProfilePage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    location: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    skills: [] as string[],
  })
  const [newSkill, setNewSkill] = useState("")

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return

      try {
        const userData = localData.getUserData(user.uid)

        if (userData) {
          setProfileData({
            name: userData.name || user.displayName || "",
            bio: userData.bio || "",
            location: userData.location || "",
            website: userData.website || "",
            github: userData.github || "",
            linkedin: userData.linkedin || "",
            twitter: userData.twitter || "",
            skills: userData.skills || [],
          })
        } else {
          // Set default values from auth user
          setProfileData({
            name: user.displayName || "",
            bio: "",
            location: "",
            website: "",
            github: "",
            linkedin: "",
            twitter: "",
            skills: [],
          })
        }
      } catch (error) {
        console.error("Error fetching user profile:", error)
        toast({
          title: "Error",
          description: "Failed to load profile data",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [user, toast])

  const handleSaveProfile = async () => {
    if (!user) return

    setSaving(true)
    try {
      // Update local storage data
      localData.updateUserData(user.uid, {
        name: profileData.name,
        bio: profileData.bio,
        location: profileData.location,
        website: profileData.website,
        github: profileData.github,
        linkedin: profileData.linkedin,
        twitter: profileData.twitter,
        skills: profileData.skills,
      })

      // Update Auth profile
      await localAuth.updateProfile(user, {
        displayName: profileData.name,
      })

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated",
      })
    } catch (error) {
      console.error("Error updating profile:", error)
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleAddSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()],
      })
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter((s) => s !== skill),
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and profile information</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="badges">Badges & Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your profile information visible to other users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user?.photoURL || undefined} alt={profileData.name} />
                      <AvatarFallback className="text-2xl">
                        {profileData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="City, Country"
                        value={profileData.location}
                        onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      placeholder="https://yourwebsite.com"
                      value={profileData.website}
                      onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="github">GitHub</Label>
                      <Input
                        id="github"
                        placeholder="username"
                        value={profileData.github}
                        onChange={(e) => setProfileData({ ...profileData, github: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        placeholder="username"
                        value={profileData.linkedin}
                        onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        placeholder="username"
                        value={profileData.twitter}
                        onChange={(e) => setProfileData({ ...profileData, twitter: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveProfile} disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Add your technical skills and expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill (e.g., JavaScript, Python, React)"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleAddSkill()
                      }
                    }}
                  />
                  <Button onClick={handleAddSkill}>Add</Button>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {profileData.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                      <button
                        className="ml-2 text-muted-foreground hover:text-foreground"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  {profileData.skills.length === 0 && (
                    <p className="text-sm text-muted-foreground">No skills added yet</p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveProfile} disabled={saving}>
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" value={user?.email || ""} disabled />
                <p className="text-sm text-muted-foreground">Your email address is used for login and notifications</p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="flex gap-2">
                  <Input id="password" type="password" value="••••••••" disabled />
                  <Button variant="outline">Change Password</Button>
                </div>
              </div>

              <div className="grid gap-2 pt-4">
                <h3 className="text-lg font-medium">Danger Zone</h3>
                <p className="text-sm text-muted-foreground">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="badges">
          <Card>
            <CardHeader>
              <CardTitle>Badges & Achievements</CardTitle>
              <CardDescription>View your earned badges and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="font-medium text-center">First Hackathon</h3>
                  <p className="text-xs text-muted-foreground text-center">Completed your first hackathon</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-medium text-center">AI Explorer</h3>
                  <p className="text-xs text-muted-foreground text-center">Completed an AI hackathon</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="font-medium text-center">Team Player</h3>
                  <p className="text-xs text-muted-foreground text-center">Joined a team for a hackathon</p>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg opacity-50">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
                    <span className="text-2xl">🥇</span>
                  </div>
                  <h3 className="font-medium text-center">Winner</h3>
                  <p className="text-xs text-muted-foreground text-center">Won a hackathon (Locked)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

