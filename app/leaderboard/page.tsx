import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Mock data for leaderboard
const users = [
  {
    id: 1,
    name: "Alex Johnson",
    username: "alexj",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 1250,
    hackathons: 8,
    badges: 12,
    rank: 1,
  },
  {
    id: 2,
    name: "Sarah Chen",
    username: "sarahc",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 1180,
    hackathons: 7,
    badges: 10,
    rank: 2,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    username: "michaelr",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 1050,
    hackathons: 6,
    badges: 9,
    rank: 3,
  },
  {
    id: 4,
    name: "Emily Wong",
    username: "emilyw",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 980,
    hackathons: 5,
    badges: 8,
    rank: 4,
  },
  {
    id: 5,
    name: "David Kim",
    username: "davidk",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 920,
    hackathons: 6,
    badges: 7,
    rank: 5,
  },
  {
    id: 6,
    name: "Jessica Taylor",
    username: "jessicat",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 880,
    hackathons: 4,
    badges: 6,
    rank: 6,
  },
  {
    id: 7,
    name: "Ryan Patel",
    username: "ryanp",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 850,
    hackathons: 5,
    badges: 7,
    rank: 7,
  },
  {
    id: 8,
    name: "Olivia Martinez",
    username: "oliviam",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 820,
    hackathons: 4,
    badges: 5,
    rank: 8,
  },
  {
    id: 9,
    name: "James Wilson",
    username: "jamesw",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 790,
    hackathons: 4,
    badges: 6,
    rank: 9,
  },
  {
    id: 10,
    name: "Sophia Lee",
    username: "sophial",
    avatar: "/placeholder.svg?height=100&width=100",
    points: 760,
    hackathons: 3,
    badges: 5,
    rank: 10,
  },
]

export default function LeaderboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Leaderboard</h1>
              <p className="text-xl text-muted-foreground">
                See who's leading the pack in our hackathon community. Compete, earn points, and climb the ranks!
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-64 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search users..." className="pl-10" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="filter-all"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <label htmlFor="filter-all" className="ml-2 text-sm">
                        All Time
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="filter-month"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="filter-month" className="ml-2 text-sm">
                        This Month
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="filter-week"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="filter-week" className="ml-2 text-sm">
                        This Week
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="category-all"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                      <label htmlFor="category-all" className="ml-2 text-sm">
                        All Categories
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="category-web"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="category-web" className="ml-2 text-sm">
                        Web Development
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="category-ai"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="category-ai" className="ml-2 text-sm">
                        AI/ML
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="category-blockchain"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="category-blockchain" className="ml-2 text-sm">
                        Blockchain
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>

              <div className="flex-1">
                <Tabs defaultValue="global" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="global">Global</TabsTrigger>
                    <TabsTrigger value="friends">Friends</TabsTrigger>
                    <TabsTrigger value="country">Country</TabsTrigger>
                  </TabsList>

                  <TabsContent value="global" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Global Leaderboard</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {/* Top 3 Users */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {users.slice(1, 3).map((user) => (
                              <Card key={user.id} className="bg-muted/50">
                                <CardContent className="pt-6">
                                  <div className="flex flex-col items-center text-center">
                                    <div className="relative">
                                      <Avatar className="h-20 w-20 mb-4">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                      </Avatar>
                                      <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                        {user.rank}
                                      </div>
                                    </div>
                                    <h3 className="font-bold text-lg">{user.name}</h3>
                                    <p className="text-muted-foreground text-sm">@{user.username}</p>
                                    <p className="font-bold text-xl mt-2">{user.points} pts</p>
                                    <div className="flex gap-2 mt-2">
                                      <Badge variant="outline">{user.hackathons} Hackathons</Badge>
                                      <Badge variant="outline">{user.badges} Badges</Badge>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}

                            {/* First place - center and larger */}
                            <Card className="bg-primary/10 border-primary md:order-first">
                              <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center">
                                  <div className="relative">
                                    <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                                      <AvatarImage src={users[0].avatar} alt={users[0].name} />
                                      <AvatarFallback>{users[0].name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                      {users[0].rank}
                                    </div>
                                  </div>
                                  <h3 className="font-bold text-xl">{users[0].name}</h3>
                                  <p className="text-muted-foreground text-sm">@{users[0].username}</p>
                                  <p className="font-bold text-2xl mt-2">{users[0].points} pts</p>
                                  <div className="flex gap-2 mt-2">
                                    <Badge>{users[0].hackathons} Hackathons</Badge>
                                    <Badge>{users[0].badges} Badges</Badge>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Leaderboard Table */}
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-3 px-4">Rank</th>
                                  <th className="text-left py-3 px-4">User</th>
                                  <th className="text-right py-3 px-4">Points</th>
                                  <th className="text-right py-3 px-4 hidden md:table-cell">Hackathons</th>
                                  <th className="text-right py-3 px-4 hidden md:table-cell">Badges</th>
                                </tr>
                              </thead>
                              <tbody>
                                {users.map((user) => (
                                  <tr key={user.id} className="border-b hover:bg-muted/50">
                                    <td className="py-3 px-4 font-medium">{user.rank}</td>
                                    <td className="py-3 px-4">
                                      <div className="flex items-center gap-3">
                                        <Avatar className="h-8 w-8">
                                          <AvatarImage src={user.avatar} alt={user.name} />
                                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <div className="font-medium">{user.name}</div>
                                          <div className="text-sm text-muted-foreground">@{user.username}</div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="py-3 px-4 text-right font-bold">{user.points}</td>
                                    <td className="py-3 px-4 text-right hidden md:table-cell">{user.hackathons}</td>
                                    <td className="py-3 px-4 text-right hidden md:table-cell">{user.badges}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="friends">
                    <Card>
                      <CardHeader>
                        <CardTitle>Friends Leaderboard</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-center py-12">
                          <div className="text-center">
                            <p className="text-muted-foreground mb-4">
                              Connect with friends to see how you rank against them!
                            </p>
                            <Button>Find Friends</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="country">
                    <Card>
                      <CardHeader>
                        <CardTitle>Country Leaderboard</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-center py-12">
                          <div className="text-center">
                            <p className="text-muted-foreground mb-4">
                              Set your country in your profile to see country-specific rankings!
                            </p>
                            <Button>Update Profile</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

