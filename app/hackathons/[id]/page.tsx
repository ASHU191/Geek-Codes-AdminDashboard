import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Users, CheckCircle, Play, FileText } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

// This would normally come from a database or API
const hackathons = {
  "ai-innovation-challenge": {
    title: "AI Innovation Challenge",
    description: "Solve real-world AI problems using Python, TensorFlow, and OpenCV",
    longDescription:
      "Join our AI Innovation Challenge and put your machine learning skills to the test! This hackathon focuses on solving real-world problems using artificial intelligence and computer vision. You'll work with Python, TensorFlow, and OpenCV to build innovative solutions that can make a difference.",
    image: "/placeholder.svg?height=400&width=800",
    startDate: "Monthly",
    duration: "48 hours",
    teamSize: "1-4",
    difficulty: "Intermediate",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    prerequisites: ["Python and ML knowledge"],
    instructors: [
      {
        name: "Dr. Sarah Chen",
        role: "AI Research Scientist",
        company: "TechAI",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Michael Wong",
        role: "ML Engineer",
        company: "DataVision",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    modules: [
      {
        title: "Problem Statement",
        description: "Understanding the challenge and requirements",
      },
      {
        title: "Data Preprocessing",
        description: "Cleaning and preparing data for model training",
      },
      {
        title: "Model Training",
        description: "Building and training your AI models",
      },
      {
        title: "Evaluation Criteria",
        description: "How your solution will be judged",
      },
    ],
    testimonials: [
      {
        name: "Alex Johnson",
        role: "Data Scientist",
        company: "AI Solutions",
        image: "/placeholder.svg?height=100&width=100",
        testimonial:
          "The AI Innovation Challenge pushed me to think outside the box. I learned so much about practical applications of computer vision in just 48 hours.",
      },
    ],
  },
  "mern-stack-hackathon": {
    title: "MERN Stack Hackathon",
    description: "Build a full-stack MERN app with real-time features",
    longDescription:
      "The MERN Stack Hackathon challenges you to build a complete web application using MongoDB, Express, React, and Node.js. You'll create a full-stack solution with real-time features, authentication, and database integration. This is your chance to showcase your web development skills!",
    image: "/placeholder.svg?height=400&width=800",
    startDate: "Bi-weekly",
    duration: "72 hours",
    teamSize: "1-3",
    difficulty: "Intermediate",
    category: "Web Development",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    prerequisites: ["JavaScript and basic React knowledge"],
    instructors: [
      {
        name: "James Wilson",
        role: "Senior Full Stack Developer",
        company: "WebStack",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    modules: [
      {
        title: "Backend Setup",
        description: "Setting up Node.js and Express server",
      },
      {
        title: "Frontend Development",
        description: "Building the React frontend",
      },
      {
        title: "Database Integration",
        description: "Connecting to MongoDB and creating schemas",
      },
      {
        title: "Authentication and Deployment",
        description: "Implementing user auth and deploying your app",
      },
    ],
    testimonials: [
      {
        name: "Emily Rodriguez",
        role: "Web Developer",
        company: "TechStart",
        image: "/placeholder.svg?height=100&width=100",
        testimonial:
          "The MERN Stack Hackathon was an amazing experience. I improved my full-stack skills and made connections with other developers that led to job opportunities.",
      },
    ],
  },
  // Other hackathons would be defined similarly
}

export default function HackathonPage({ params }: { params: { id: string } }) {
  const hackathon = hackathons[params.id as keyof typeof hackathons]

  if (!hackathon) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container py-12">
          <h1 className="text-3xl font-bold">Hackathon not found</h1>
          <p className="mt-4">The hackathon you're looking for doesn't exist or has been removed.</p>
          <Button className="mt-6" asChild>
            <Link href="/hackathons">Back to Hackathons</Link>
          </Button>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-64 md:h-80 bg-muted overflow-hidden">
            <img
              src={hackathon.image || "/placeholder.svg"}
              alt={hackathon.title}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container relative -mt-24 md:-mt-32">
            <Card className="border shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>{hackathon.category}</Badge>
                      <Badge variant="outline">{hackathon.difficulty}</Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold">{hackathon.title}</CardTitle>
                    <CardDescription className="text-base mt-1">{hackathon.description}</CardDescription>
                  </div>
                  <Button size="lg" className="md:self-start">
                    Register Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Start Date</div>
                      <div className="text-sm text-muted-foreground">{hackathon.startDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Duration</div>
                      <div className="text-sm text-muted-foreground">{hackathon.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Team Size</div>
                      <div className="text-sm text-muted-foreground">{hackathon.teamSize}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="container py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8 w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="modules">Modules</TabsTrigger>
              <TabsTrigger value="instructors">Instructors</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About This Hackathon</h2>
                    <p className="text-muted-foreground">{hackathon.longDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                    <ul className="space-y-2">
                      {hackathon.modules.map((module, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium">{module.title}</div>
                            <div className="text-sm text-muted-foreground">{module.description}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Hackathon Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Prerequisites</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {hackathon.prerequisites.map((prereq, index) => (
                            <li key={index}>{prereq}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-1">Certification</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive a digital badge and certificate upon successful completion
                        </p>
                      </div>

                      <Separator className="my-4" />

                      <div className="space-y-4">
                        <Button className="w-full" asChild>
                          <Link href="#">
                            <Play className="mr-2 h-4 w-4" /> Watch Intro Video
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="#">
                            <FileText className="mr-2 h-4 w-4" /> Download Resources
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="modules">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Hackathon Modules</h2>
                <div className="grid gap-6">
                  {hackathon.modules.map((module, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <span className="text-lg font-bold text-primary">{index + 1}</span>
                          </div>
                          <div>
                            <CardTitle>{module.title}</CardTitle>
                            <CardDescription className="mt-1">{module.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructors">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Meet Your Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hackathon.instructors.map((instructor, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <Avatar className="h-14 w-14">
                            <AvatarImage src={instructor.image} alt={instructor.name} />
                            <AvatarFallback>
                              {instructor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{instructor.name}</CardTitle>
                            <CardDescription>
                              {instructor.role}, {instructor.company}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="testimonials">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Participant Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hackathon.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <CardDescription>
                              {testimonial.role}, {testimonial.company}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">How do I register for this hackathon?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        You can register by clicking the "Register Now" button at the top of this page. You'll need to
                        create an account if you don't already have one, and then follow the registration steps.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Can I participate as an individual?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Yes, you can participate as an individual or as part of a team. The team size limit is{" "}
                        {hackathon.teamSize} members.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">What happens after I complete the hackathon?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        After completing the hackathon, your submission will be reviewed by our judges. Winners will be
                        announced within a week, and all participants will receive a digital certificate of
                        participation.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Is there a fee to participate?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        This hackathon is free to participate in. Some hackathons may have premium features available
                        for a fee, but the core participation is always free.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join This Hackathon?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Register now to secure your spot and start preparing for the challenge. Join hundreds of developers and
              showcase your skills!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#">Register Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                Contact Organizers
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

