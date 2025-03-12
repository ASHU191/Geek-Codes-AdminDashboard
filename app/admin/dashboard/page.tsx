"use client"

import { Badge } from "@/components/ui/badge"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, Award, BookOpen, BarChart, TrendingUp, Calendar } from "lucide-react"

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalHackathons: 5,
    activeHackathons: 2,
    totalResources: 15,
    newUsersToday: 3,
    newUsersThisWeek: 12,
    newUsersThisMonth: 45,
  })

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we'll simulate it with local storage data
    const users = JSON.parse(localStorage.getItem("hackathon_hub_users") || "[]")
    setStats((prev) => ({
      ...prev,
      totalUsers: users.length,
    }))
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the admin dashboard. Here's an overview of your platform.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">+{stats.newUsersThisWeek} from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hackathons</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalHackathons}</div>
            <p className="text-xs text-muted-foreground">{stats.activeHackathons} currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resources</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalResources}</div>
            <p className="text-xs text-muted-foreground">Across all categories</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">User Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{stats.newUsersThisMonth}</div>
            <p className="text-xs text-muted-foreground">New users this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* User Growth Chart */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>New user registrations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end gap-2">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const height = Math.floor(Math.random() * 70) + 30
                    return (
                      <div key={i} className="relative flex-1 flex flex-col items-center">
                        <div className="w-full bg-primary/10 rounded-t-sm" style={{ height: `${height}%` }}>
                          <div
                            className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-500"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                        <span className="text-xs mt-2">{`M${i + 1}`}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
                <CardDescription>Platform performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>User Engagement</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hackathon Completion</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Resource Utilization</span>
                    <span>82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Team Formation</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Hackathons */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Hackathons</CardTitle>
              <CardDescription>Scheduled hackathons for the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI Innovation Challenge</h3>
                      <p className="text-sm text-muted-foreground">Starts in 3 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>25 Registrations</Badge>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Full-Stack Challenge</h3>
                      <p className="text-sm text-muted-foreground">Starts in 10 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>18 Registrations</Badge>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Blockchain Hackathon</h3>
                      <p className="text-sm text-muted-foreground">Starts in 15 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>12 Registrations</Badge>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
              <CardDescription>Detailed metrics and performance data</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <BarChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Detailed analytics are being compiled. Check back soon for comprehensive insights into platform
                  performance, user engagement, and hackathon metrics.
                </p>
                <Button>Generate Report</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions and events on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="relative mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="absolute top-2 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">New User Registration</p>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">John Doe</span> created a new account
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="absolute top-2 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Hackathon Registration</p>
                      <span className="text-xs text-muted-foreground">5 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Sarah Chen</span> registered for{" "}
                      <span className="font-medium">AI Innovation Challenge</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="absolute top-2 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Team Created</p>
                      <span className="text-xs text-muted-foreground">8 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Michael Rodriguez</span> created a new team{" "}
                      <span className="font-medium">CodeCrafters</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div className="absolute top-2 bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Resource Added</p>
                      <span className="text-xs text-muted-foreground">12 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Admin</span> added a new tutorial{" "}
                      <span className="font-medium">Getting Started with React</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Hackathon Completed</p>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">MERN Stack Hackathon</span> has been completed with 15 submissions
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

