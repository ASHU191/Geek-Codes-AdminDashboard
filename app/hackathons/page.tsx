import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const hackathons = [
  {
    id: "ai-innovation-challenge",
    title: "AI Innovation Challenge",
    description: "Solve real-world AI problems using Python, TensorFlow, and OpenCV",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "Monthly",
    duration: "48 hours",
    teamSize: "1-4",
    difficulty: "Intermediate",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    id: "mern-stack-hackathon",
    title: "MERN Stack Hackathon",
    description: "Build a full-stack MERN app with real-time features",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "Bi-weekly",
    duration: "72 hours",
    teamSize: "1-3",
    difficulty: "Intermediate",
    category: "Web Development",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: "full-stack-challenge",
    title: "Full-Stack Challenge",
    description: "Develop a scalable full-stack app using Next.js and Firebase",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "Monthly",
    duration: "48 hours",
    teamSize: "1-4",
    difficulty: "Intermediate",
    category: "Web Development",
    technologies: ["Next.js", "Firebase", "React", "TypeScript"],
  },
  {
    id: "dotnet-mvc-enterprise-hackathon",
    title: ".NET MVC Enterprise Hackathon",
    description: "Build an enterprise-grade app using .NET MVC and SQL Server",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "Monthly",
    duration: "72 hours",
    teamSize: "2-5",
    difficulty: "Advanced",
    category: "Enterprise",
    technologies: [".NET", "C#", "SQL Server", "MVC"],
  },
  {
    id: "blockchain-hackathon",
    title: "Blockchain Hackathon",
    description: "Create and deploy smart contracts on Ethereum using Solidity",
    image: "/placeholder.svg?height=200&width=400",
    startDate: "Quarterly",
    duration: "72 hours",
    teamSize: "1-3",
    difficulty: "Advanced",
    category: "Blockchain",
    technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat"],
  },
]

export default function HackathonsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Hackathons</h1>
              <p className="text-xl text-muted-foreground">
                Browse our upcoming and ongoing hackathons. Find the perfect challenge to showcase your skills and learn
                new technologies.
              </p>
            </div>
          </div>
        </section>

        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Filters</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="search" className="text-sm font-medium">
                      Search
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="search" placeholder="Search hackathons..." className="pl-10" />
                    </div>
                  </div>

                  <Accordion type="multiple" defaultValue={["category", "difficulty", "duration", "technologies"]}>
                    <AccordionItem value="category">
                      <AccordionTrigger className="text-sm font-medium py-2">Category</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {["All", "Web Development", "AI/ML", "Blockchain", "Mobile", "Enterprise"].map((category) => (
                            <div key={category} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`category-${category}`}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <label htmlFor={`category-${category}`} className="ml-2 text-sm">
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="difficulty">
                      <AccordionTrigger className="text-sm font-medium py-2">Difficulty</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                            <div key={level} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`difficulty-${level}`}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <label htmlFor={`difficulty-${level}`} className="ml-2 text-sm">
                                {level}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="duration">
                      <AccordionTrigger className="text-sm font-medium py-2">Duration</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {["All", "24 Hours", "48 Hours", "72 Hours", "1 Week"].map((duration) => (
                            <div key={duration} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`duration-${duration}`}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <label htmlFor={`duration-${duration}`} className="ml-2 text-sm">
                                {duration}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="technologies">
                      <AccordionTrigger className="text-sm font-medium py-2">Technologies</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {[
                            "JavaScript",
                            "Python",
                            "React",
                            "Node.js",
                            "Next.js",
                            "Firebase",
                            "MongoDB",
                            "TypeScript",
                            "Solidity",
                            ".NET",
                          ].map((tech) => (
                            <div key={tech} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`tech-${tech}`}
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <label htmlFor={`tech-${tech}`} className="ml-2 text-sm">
                                {tech}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="pt-4">
                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hackathons List */}
            <div className="md:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">All Hackathons</h2>
                  <p className="text-muted-foreground">Showing {hackathons.length} hackathons</p>
                </div>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="duration-asc">Duration (Shortest)</SelectItem>
                    <SelectItem value="duration-desc">Duration (Longest)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hackathons.map((hackathon) => (
                  <HackathonCard
                    key={hackathon.id}
                    title={hackathon.title}
                    description={hackathon.description}
                    image={hackathon.image}
                    startDate={hackathon.startDate}
                    duration={hackathon.duration}
                    teamSize={hackathon.teamSize}
                    difficulty={hackathon.difficulty}
                    category={hackathon.category}
                    technologies={hackathon.technologies}
                    href={`/hackathons/${hackathon.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

function HackathonCard({
  title,
  description,
  image,
  startDate,
  duration,
  teamSize,
  difficulty,
  category,
  technologies,
  href,
}: {
  title: string
  description: string
  image: string
  startDate: string
  duration: string
  teamSize: string
  difficulty: string
  category: string
  technologies: string[]
  href: string
}) {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {difficulty}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 flex-grow">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          <span>Starts: {startDate}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          <span>Duration: {duration}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-2 h-4 w-4" />
          <span>Team Size: {teamSize}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-3">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={href}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

