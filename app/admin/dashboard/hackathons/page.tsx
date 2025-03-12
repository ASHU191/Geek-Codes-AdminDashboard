"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoreHorizontal, Search, PlusCircle, Filter, Calendar, Edit, Trash2, Eye, Clock, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Mock hackathon data
const mockHackathons = [
  {
    id: "ai-innovation-challenge",
    title: "AI Innovation Challenge",
    description: "Solve real-world AI problems using Python, TensorFlow, and OpenCV",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "2023-12-15",
    endDate: "2023-12-17",
    duration: "48 hours",
    teamSize: "1-4",
    difficulty: "Intermediate",
    category: "AI/ML",
    status: "Upcoming",
    registrations: 25,
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    id: "mern-stack-hackathon",
    title: "MERN Stack Hackathon",
    description: "Build a full-stack MERN app with real-time features",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "2023-11-10",
    endDate: "2023-11-13",
    duration: "72 hours",
    teamSize: "1-3",
    difficulty: "Intermediate",
    category: "Web Development",
    status: "Active",
    registrations: 42,
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: "full-stack-challenge",
    title: "Full-Stack Challenge",
    description: "Develop a scalable full-stack app using Next.js and Firebase",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "2023-12-20",
    endDate: "2023-12-22",
    duration: "48 hours",
    teamSize: "1-4",
    difficulty: "Intermediate",
    category: "Web Development",
    status: "Upcoming",
    registrations: 18,
    technologies: ["Next.js", "Firebase", "React", "TypeScript"],
  },
  {
    id: "dotnet-mvc-enterprise-hackathon",
    title: ".NET MVC Enterprise Hackathon",
    description: "Build an enterprise-grade app using .NET MVC and SQL Server",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "2023-10-15",
    endDate: "2023-10-18",
    duration: "72 hours",
    teamSize: "2-5",
    difficulty: "Advanced",
    category: "Enterprise",
    status: "Completed",
    registrations: 35,
    technologies: [".NET", "C#", "SQL Server", "MVC"],
  },
  {
    id: "blockchain-hackathon",
    title: "Blockchain Hackathon",
    description: "Create and deploy smart contracts on Ethereum using Solidity",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "2023-12-05",
    endDate: "2023-12-08",
    duration: "72 hours",
    teamSize: "1-3",
    difficulty: "Advanced",
    category: "Blockchain",
    status: "Upcoming",
    registrations: 12,
    technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat"],
  },
]

export default function HackathonsPage() {
  const [hackathons, setHackathons] = useState(mockHackathons)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddHackathonOpen, setIsAddHackathonOpen] = useState(false)
  const [isEditHackathonOpen, setIsEditHackathonOpen] = useState(false)
  const [isDeleteHackathonOpen, setIsDeleteHackathonOpen] = useState(false)
  const [currentHackathon, setCurrentHackathon] = useState<any>(null)
  const [newHackathon, setNewHackathon] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    duration: "48 hours",
    teamSize: "1-4",
    difficulty: "Intermediate",
    category: "Web Development",
    technologies: [],
  })
  const { toast } = useToast()

  const filteredHackathons = hackathons.filter(
    (hackathon) =>
      hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const upcomingHackathons = filteredHackathons.filter((h) => h.status === "Upcoming")
  const activeHackathons = filteredHackathons.filter((h) => h.status === "Active")
  const completedHackathons = filteredHackathons.filter((h) => h.status === "Completed")

  const handleAddHackathon = () => {
    const id = newHackathon.title.toLowerCase().replace(/\s+/g, "-")

    const hackathonToAdd = {
      ...newHackathon,
      id,
      image: "/placeholder.svg?height=200&width=400",
      status: "Upcoming",
      registrations: 0,
      technologies: newHackathon.technologies || [],
    }

    setHackathons([...hackathons, hackathonToAdd])
    setNewHackathon({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      duration: "48 hours",
      teamSize: "1-4",
      difficulty: "Intermediate",
      category: "Web Development",
      technologies: [],
    })
    setIsAddHackathonOpen(false)

    toast({
      title: "Hackathon Added",
      description: `${hackathonToAdd.title} has been added successfully.`,
    })
  }

  const handleEditHackathon = () => {
    if (!currentHackathon) return

    const updatedHackathons = hackathons.map((hackathon) =>
      hackathon.id === currentHackathon.id ? currentHackathon : hackathon,
    )

    setHackathons(updatedHackathons)
    setIsEditHackathonOpen(false)

    toast({
      title: "Hackathon Updated",
      description: `${currentHackathon.title} has been updated.`,
    })
  }

  const handleDeleteHackathon = () => {
    if (!currentHackathon) return

    const updatedHackathons = hackathons.filter((hackathon) => hackathon.id !== currentHackathon.id)
    setHackathons(updatedHackathons)
    setIsDeleteHackathonOpen(false)

    toast({
      title: "Hackathon Deleted",
      description: `${currentHackathon.title} has been removed.`,
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hackathons</h1>
          <p className="text-muted-foreground">Manage hackathons, challenges, and competitions</p>
        </div>
        <Dialog open={isAddHackathonOpen} onOpenChange={setIsAddHackathonOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              <span>Add Hackathon</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Hackathon</DialogTitle>
              <DialogDescription>Create a new hackathon or challenge for your community.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto">
              <div className="space-y-2">
                <Label htmlFor="title">Hackathon Title</Label>
                <Input
                  id="title"
                  value={newHackathon.title}
                  onChange={(e) => setNewHackathon({ ...newHackathon, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={newHackathon.description}
                  onChange={(e) => setNewHackathon({ ...newHackathon, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={newHackathon.startDate}
                    onChange={(e) => setNewHackathon({ ...newHackathon, startDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={newHackathon.endDate}
                    onChange={(e) => setNewHackathon({ ...newHackathon, endDate: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <select
                    id="duration"
                    className="w-full px-3 py-2 border rounded-md"
                    value={newHackathon.duration}
                    onChange={(e) => setNewHackathon({ ...newHackathon, duration: e.target.value })}
                  >
                    <option value="24 hours">24 hours</option>
                    <option value="48 hours">48 hours</option>
                    <option value="72 hours">72 hours</option>
                    <option value="1 week">1 week</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Team Size</Label>
                  <select
                    id="teamSize"
                    className="w-full px-3 py-2 border rounded-md"
                    value={newHackathon.teamSize}
                    onChange={(e) => setNewHackathon({ ...newHackathon, teamSize: e.target.value })}
                  >
                    <option value="1">Individual Only</option>
                    <option value="1-2">1-2 members</option>
                    <option value="1-3">1-3 members</option>
                    <option value="1-4">1-4 members</option>
                    <option value="2-5">2-5 members</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <select
                    id="difficulty"
                    className="w-full px-3 py-2 border rounded-md"
                    value={newHackathon.difficulty}
                    onChange={(e) => setNewHackathon({ ...newHackathon, difficulty: e.target.value })}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border rounded-md"
                    value={newHackathon.category}
                    onChange={(e) => setNewHackathon({ ...newHackathon, category: e.target.value })}
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="IoT">IoT</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="technologies">Technologies (comma separated)</Label>
                <Input
                  id="technologies"
                  placeholder="React, Node.js, MongoDB, etc."
                  onChange={(e) =>
                    setNewHackathon({
                      ...newHackathon,
                      technologies: e.target.value
                        .split(",")
                        .map((tech) => tech.trim())
                        .filter(Boolean),
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddHackathonOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddHackathon}>Add Hackathon</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search hackathons..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Hackathons</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>All Hackathons</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              <CardDescription>Showing {filteredHackathons.length} hackathons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Hackathon</th>
                      <th className="text-left py-3 px-4">Category</th>
                      <th className="text-left py-3 px-4">Dates</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Registrations</th>
                      <th className="text-right py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHackathons.map((hackathon) => (
                      <tr key={hackathon.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="font-medium">{hackathon.title}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{hackathon.category}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-col">
                            <span className="text-sm">{hackathon.startDate}</span>
                            <span className="text-xs text-muted-foreground">to {hackathon.endDate}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge
                            variant={
                              hackathon.status === "Active"
                                ? "default"
                                : hackathon.status === "Upcoming"
                                  ? "outline"
                                  : "secondary"
                            }
                          >
                            {hackathon.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">{hackathon.registrations}</td>
                        <td className="py-3 px-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  setCurrentHackathon(hackathon)
                                  setIsEditHackathonOpen(true)
                                }}
                              >
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => {
                                  setCurrentHackathon(hackathon)
                                  setIsDeleteHackathonOpen(true)
                                }}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Hackathons</CardTitle>
              <CardDescription>Hackathons that are scheduled to start in the future</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingHackathons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingHackathons.map((hackathon) => (
                    <Card key={hackathon.id} className="overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={hackathon.image || "/placeholder.svg"}
                          alt={hackathon.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            {hackathon.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">{hackathon.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{hackathon.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Starts: {hackathon.startDate}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>Duration: {hackathon.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-2 h-4 w-4" />
                          <span>Team Size: {hackathon.teamSize}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {hackathon.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No upcoming hackathons found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Hackathons</CardTitle>
              <CardDescription>Hackathons that are currently in progress</CardDescription>
            </CardHeader>
            <CardContent>
              {activeHackathons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeHackathons.map((hackathon) => (
                    <Card key={hackathon.id} className="overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={hackathon.image || "/placeholder.svg"}
                          alt={hackathon.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary text-primary-foreground">Active</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">{hackathon.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{hackathon.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>Ends: {hackathon.endDate}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-2 h-4 w-4" />
                          <span>Registrations: {hackathon.registrations}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No active hackathons found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Hackathons</CardTitle>
              <CardDescription>Past hackathons that have been completed</CardDescription>
            </CardHeader>
            <CardContent>
              {completedHackathons.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Hackathon</th>
                        <th className="text-left py-3 px-4">Category</th>
                        <th className="text-left py-3 px-4">Dates</th>
                        <th className="text-left py-3 px-4">Participants</th>
                        <th className="text-left py-3 px-4">Submissions</th>
                        <th className="text-right py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {completedHackathons.map((hackathon) => (
                        <tr key={hackathon.id} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">{hackathon.title}</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">{hackathon.category}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-col">
                              <span className="text-sm">{hackathon.startDate}</span>
                              <span className="text-xs text-muted-foreground">to {hackathon.endDate}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">{hackathon.registrations}</td>
                          <td className="py-3 px-4">{Math.floor(hackathon.registrations * 0.8)}</td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="outline" size="sm">
                              View Results
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No completed hackathons found</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit Hackathon Dialog */}
      <Dialog open={isEditHackathonOpen} onOpenChange={setIsEditHackathonOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Hackathon</DialogTitle>
            <DialogDescription>Update hackathon details and settings.</DialogDescription>
          </DialogHeader>
          {currentHackathon && (
            <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Hackathon Title</Label>
                <Input
                  id="edit-title"
                  value={currentHackathon.title}
                  onChange={(e) => setCurrentHackathon({ ...currentHackathon, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  rows={3}
                  value={currentHackathon.description}
                  onChange={(e) => setCurrentHackathon({ ...currentHackathon, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-startDate">Start Date</Label>
                  <Input
                    id="edit-startDate"
                    type="date"
                    value={currentHackathon.startDate}
                    onChange={(e) => setCurrentHackathon({ ...currentHackathon, startDate: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-endDate">End Date</Label>
                  <Input
                    id="edit-endDate"
                    type="date"
                    value={currentHackathon.endDate}
                    onChange={(e) => setCurrentHackathon({ ...currentHackathon, endDate: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-status">Status</Label>
                  <select
                    id="edit-status"
                    className="w-full px-3 py-2 border rounded-md"
                    value={currentHackathon.status}
                    onChange={(e) => setCurrentHackathon({ ...currentHackathon, status: e.target.value })}
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-category">Category</Label>
                  <select
                    id="edit-category"
                    className="w-full px-3 py-2 border rounded-md"
                    value={currentHackathon.category}
                    onChange={(e) => setCurrentHackathon({ ...currentHackathon, category: e.target.value })}
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="IoT">IoT</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditHackathonOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditHackathon}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Hackathon Dialog */}
      <Dialog open={isDeleteHackathonOpen} onOpenChange={setIsDeleteHackathonOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Hackathon</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this hackathon? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {currentHackathon && (
            <div className="py-4">
              <p>
                You are about to delete <span className="font-bold">{currentHackathon.title}</span>.
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteHackathonOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteHackathon}>
              Delete Hackathon
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

