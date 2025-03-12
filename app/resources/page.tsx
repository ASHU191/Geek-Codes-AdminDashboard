import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Code, Video, FileText, Download, ExternalLink } from "lucide-react"

// Mock data for resources
const tutorials = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React and build your first component",
    image: "/placeholder.svg?height=200&width=400",
    category: "Web Development",
    level: "Beginner",
    duration: "1 hour",
    author: "Alex Johnson",
    link: "#",
  },
  {
    id: 2,
    title: "Building a Full-Stack App with Next.js",
    description: "Create a complete web application with Next.js, API routes, and database integration",
    image: "/placeholder.svg?height=200&width=400",
    category: "Web Development",
    level: "Intermediate",
    duration: "3 hours",
    author: "Sarah Chen",
    link: "#",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning with Python",
    description: "Get started with machine learning concepts and implement your first ML model",
    image: "/placeholder.svg?height=200&width=400",
    category: "AI/ML",
    level: "Beginner",
    duration: "2 hours",
    author: "Michael Rodriguez",
    link: "#",
  },
  {
    id: 4,
    title: "Blockchain Development with Solidity",
    description: "Learn how to create smart contracts and build decentralized applications",
    image: "/placeholder.svg?height=200&width=400",
    category: "Blockchain",
    level: "Intermediate",
    duration: "4 hours",
    author: "Emily Wong",
    link: "#",
  },
]

const tools = [
  {
    id: 1,
    title: "VS Code",
    description: "A lightweight but powerful source code editor",
    category: "Development Environment",
    link: "https://code.visualstudio.com/",
  },
  {
    id: 2,
    title: "GitHub",
    description: "Platform for version control and collaboration",
    category: "Version Control",
    link: "https://github.com/",
  },
  {
    id: 3,
    title: "Figma",
    description: "Design, prototype, and collaborate all in the browser",
    category: "Design",
    link: "https://www.figma.com/",
  },
  {
    id: 4,
    title: "Vercel",
    description: "Platform for frontend frameworks and static sites",
    category: "Deployment",
    link: "https://vercel.com/",
  },
  {
    id: 5,
    title: "MongoDB Atlas",
    description: "Cloud database service for modern applications",
    category: "Database",
    link: "https://www.mongodb.com/cloud/atlas",
  },
  {
    id: 6,
    title: "Postman",
    description: "API platform for building and using APIs",
    category: "API Testing",
    link: "https://www.postman.com/",
  },
]

const templates = [
  {
    id: 1,
    title: "Next.js Starter Template",
    description: "A starter template for Next.js projects with TypeScript, Tailwind CSS, and more",
    category: "Web Development",
    downloads: 1250,
    link: "#",
  },
  {
    id: 2,
    title: "React Dashboard Template",
    description: "A responsive dashboard template built with React and Tailwind CSS",
    category: "Web Development",
    downloads: 980,
    link: "#",
  },
  {
    id: 3,
    title: "ML Project Boilerplate",
    description: "A boilerplate for machine learning projects with Python, Jupyter, and scikit-learn",
    category: "AI/ML",
    downloads: 750,
    link: "#",
  },
  {
    id: 4,
    title: "Blockchain DApp Starter",
    description: "A starter template for building decentralized applications with Ethereum",
    category: "Blockchain",
    downloads: 620,
    link: "#",
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Resources</h1>
              <p className="text-xl text-muted-foreground">
                Explore our collection of tutorials, tools, and templates to help you succeed in your hackathon journey.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search for tutorials, tools, templates..." className="pl-10 h-12 text-base" />
              </div>
            </div>
          </div>
        </section>

        {/* Resources Content */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="tutorials" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="mb-4">
                  <TabsTrigger value="tutorials" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Tutorials</span>
                  </TabsTrigger>
                  <TabsTrigger value="tools" className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    <span>Tools</span>
                  </TabsTrigger>
                  <TabsTrigger value="templates" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Templates</span>
                  </TabsTrigger>
                  <TabsTrigger value="videos" className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    <span>Videos</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Tutorials Tab */}
              <TabsContent value="tutorials">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Tutorials & Guides</h2>
                    <div className="flex gap-2">
                      <select className="px-3 py-1 border rounded-md text-sm">
                        <option>All Categories</option>
                        <option>Web Development</option>
                        <option>AI/ML</option>
                        <option>Blockchain</option>
                        <option>Mobile Development</option>
                      </select>
                      <select className="px-3 py-1 border rounded-md text-sm">
                        <option>All Levels</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tutorials.map((tutorial) => (
                      <Card key={tutorial.id} className="overflow-hidden flex flex-col h-full">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={tutorial.image || "/placeholder.svg"}
                            alt={tutorial.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                              {tutorial.level}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                              <CardDescription className="line-clamp-2">{tutorial.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2 flex-grow">
                          <div className="flex items-center justify-between text-sm">
                            <Badge variant="outline">{tutorial.category}</Badge>
                            <span className="text-muted-foreground">{tutorial.duration}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">By {tutorial.author}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" asChild>
                            <Link href={tutorial.link}>View Tutorial</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline">Load More Tutorials</Button>
                  </div>
                </div>
              </TabsContent>

              {/* Tools Tab */}
              <TabsContent value="tools">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Recommended Tools</h2>
                    <select className="px-3 py-1 border rounded-md text-sm">
                      <option>All Categories</option>
                      <option>Development Environment</option>
                      <option>Version Control</option>
                      <option>Design</option>
                      <option>Deployment</option>
                      <option>Database</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool) => (
                      <Card key={tool.id} className="flex flex-col h-full">
                        <CardHeader>
                          <CardTitle>{tool.title}</CardTitle>
                          <CardDescription>{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <Badge variant="outline">{tool.category}</Badge>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <a href={tool.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Templates Tab */}
              <TabsContent value="templates">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Starter Templates</h2>
                    <select className="px-3 py-1 border rounded-md text-sm">
                      <option>All Categories</option>
                      <option>Web Development</option>
                      <option>AI/ML</option>
                      <option>Blockchain</option>
                      <option>Mobile Development</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {templates.map((template) => (
                      <Card key={template.id} className="flex flex-col h-full">
                        <CardHeader>
                          <CardTitle>{template.title}</CardTitle>
                          <CardDescription>{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex justify-between items-center">
                            <Badge variant="outline">{template.category}</Badge>
                            <span className="text-sm text-muted-foreground">{template.downloads} downloads</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" asChild>
                            <Link href={template.link}>
                              <Download className="mr-2 h-4 w-4" /> Download Template
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline">View All Templates</Button>
                  </div>
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos">
                <div className="flex items-center justify-center py-12">
                  <div className="text-center max-w-md">
                    <Video className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-bold mb-2">Video Tutorials Coming Soon</h3>
                    <p className="text-muted-foreground mb-6">
                      We're working on creating video tutorials to help you learn new skills and technologies. Check
                      back soon!
                    </p>
                    <Button variant="outline">Subscribe for Updates</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight">Want to Contribute?</h2>
              <p className="mt-4 text-primary-foreground/80">
                Share your knowledge with the community by contributing tutorials, tools, or templates.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contribute">Contribute Resources</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

