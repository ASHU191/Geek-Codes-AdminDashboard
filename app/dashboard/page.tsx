"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/components/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, Activity, BarChart } from "lucide-react"
import { localData } from "@/lib/local-storage"

export default function DashboardPage() {
  const { user } = useAuth()
  const [userHackathons, setUserHackathons] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return

      try {
        // Get user hackathons from local storage
        const hackathons = localData.getUserHackathons(user.uid)

        // If no hackathons found, use mock data for demo
        if (hackathons.length === 0) {
          setUserHackathons([
            {
              id: "ai-innovation-challenge",
              title: "AI Innovation Challenge",
              progress: 75,
              startDate: "2023-06-15",
              endDate: "2023-06-17",
              status: "in-progress",
              teamSize: 3,
              rank: 5,
            },
            {
              id: "mern-stack-hackathon",
              title: "MERN Stack Hackathon",
              progress: 100,
              startDate: "2023-05-10",
              endDate: "2023-05-13",
              status: "completed",
              teamSize: 2,
              rank: 2,
            },
          ])
        } else {
          // Map the actual hackathons data to the format needed for display
          setUserHackathons(
            hackathons.map((h) => ({
              id: h.hackathonId,
              title: h.hackathonId
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "),
              progress: h.progress,
              startDate: new Date().toISOString().split("T")[0], // Placeholder
              endDate: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split("T")[0], // Placeholder
              status: h.status,
              teamSize: 3, // Placeholder
              rank: Math.floor(Math.random() * 10) + 1, // Placeholder
            })),
          )
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [user])

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
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.displayName || "Developer"}! Here's an overview of your hackathon journey.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hackathons Joined</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userHackathons.length}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Teams Formed</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leaderboard Rank</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#42</div>
            <p className="text-xs text-muted-foreground">+12 positions from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Hackathons */}
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Hackathons</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          {userHackathons
            .filter((h) => h.status === "in-progress")
            .map((hackathon) => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          {userHackathons.filter((h) => h.status === "in-progress").length === 0 && (
            <Card>
              <CardHeader>
                <CardTitle>No Active Hackathons</CardTitle>
                <CardDescription>You don't have any active hackathons at the moment.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="/hackathons">Browse Hackathons</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          {userHackathons
            .filter((h) => h.status === "completed")
            .map((hackathon) => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>No Upcoming Hackathons</CardTitle>
              <CardDescription>You haven't registered for any upcoming hackathons yet.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a href="/hackathons">Browse Hackathons</a>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Completed Module 3 in AI Innovation Challenge</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Earned "AI Explorer" Badge</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Joined Team "CodeCrafters" for MERN Stack Hackathon</p>
                <p className="text-xs text-muted-foreground">1 week ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Registered for AI Innovation Challenge</p>
                <p className="text-xs text-muted-foreground">2 weeks ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function HackathonCard({ hackathon }: { hackathon: any }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{hackathon.title}</CardTitle>
            <CardDescription>
              {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
            </CardDescription>
          </div>
          <Badge variant={hackathon.status === "completed" ? "secondary" : "default"}>
            {hackathon.status === "in-progress" ? "In Progress" : "Completed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{hackathon.progress}%</span>
          </div>
          <Progress value={hackathon.progress} className="h-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>Team Size: {hackathon.teamSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-muted-foreground" />
            <span>Current Rank: #{hackathon.rank}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" size="sm" asChild>
            <a href={`/dashboard/hackathons/${hackathon.id}`}>View Details</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

