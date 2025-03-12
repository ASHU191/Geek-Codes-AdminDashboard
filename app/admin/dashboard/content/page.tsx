"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Home, MessageSquare, HelpCircle, Info, Save, Plus, Trash2 } from "lucide-react"

export default function ContentPage() {
  const { toast } = useToast()
  const [homeContent, setHomeContent] = useState({
    heroTitle: "Code. Compete. Conquer!",
    heroSubtitle:
      "Join our community of developers and participate in exciting hackathons to showcase your skills, learn new technologies, and win amazing prizes.",
    featuredTitle: "Featured Hackathons",
    featuredSubtitle: "Discover our most popular hackathons and challenges",
    whyChooseTitle: "Why Choose Hackathon Hub?",
    whyChooseSubtitle: "We provide the best platform for developers to learn, compete, and grow their skills",
    testimonialsTitle: "What Our Participants Say",
    testimonialsSubtitle: "Hear from developers who have participated in our hackathons",
    ctaTitle: "Ready to Start Your Hackathon Journey?",
    ctaSubtitle: "Join our community today and participate in exciting hackathons to showcase your skills",
  })

  const [faqItems, setFaqItems] = useState([
    {
      question: "How do I register for a hackathon?",
      answer:
        'To register for a hackathon, create an account on our platform, browse available hackathons, and click the "Register" button on the hackathon page you\'re interested in.',
    },
    {
      question: "Can I participate as an individual?",
      answer:
        "Yes, you can participate as an individual or as part of a team. Each hackathon has its own team size requirements, which are clearly mentioned on the hackathon page.",
    },
    {
      question: "Are the hackathons free to join?",
      answer:
        "Most of our hackathons are free to join. Some may have premium features available for a fee, but the core participation is always free.",
    },
    {
      question: "How are submissions judged?",
      answer:
        "Submissions are judged by a panel of industry experts based on criteria such as innovation, technical complexity, design, and practical application. Detailed judging criteria are provided for each hackathon.",
    },
  ])

  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: "",
  })

  const [aboutContent, setAboutContent] = useState({
    mainTitle: "About Hackathon Hub",
    mainSubtitle: "Learn about our mission, our team, and how we're empowering developers through hackathons.",
    storyTitle: "Our Story",
    storyContent:
      "Hackathon Hub was founded in 2022 by a group of passionate developers who believed in the power of hackathons to foster innovation, learning, and community building.\n\nWhat started as a small platform for hosting local hackathons has grown into a global community of developers, designers, and innovators who come together to solve problems, learn new technologies, and build amazing projects.\n\nOur mission is to democratize access to hackathons, making them accessible to developers of all skill levels, from beginners to experts, and from all corners of the world.",
  })

  const handleSaveHomeContent = () => {
    toast({
      title: "Home Content Saved",
      description: "Your home page content has been updated successfully.",
    })
  }

  const handleSaveFaqs = () => {
    toast({
      title: "FAQs Saved",
      description: "Your FAQ content has been updated successfully.",
    })
  }

  const handleAddFaq = () => {
    if (newFaq.question.trim() === "" || newFaq.answer.trim() === "") {
      toast({
        title: "Error",
        description: "Both question and answer are required.",
        variant: "destructive",
      })
      return
    }

    setFaqItems([...faqItems, newFaq])
    setNewFaq({
      question: "",
      answer: "",
    })

    toast({
      title: "FAQ Added",
      description: "Your new FAQ has been added successfully.",
    })
  }

  const handleDeleteFaq = (index: number) => {
    const updatedFaqs = [...faqItems]
    updatedFaqs.splice(index, 1)
    setFaqItems(updatedFaqs)

    toast({
      title: "FAQ Deleted",
      description: "The FAQ has been removed successfully.",
    })
  }

  const handleSaveAboutContent = () => {
    toast({
      title: "About Content Saved",
      description: "Your about page content has been updated successfully.",
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
        <p className="text-muted-foreground">Edit and manage the content displayed on your platform</p>
      </div>

      <Tabs defaultValue="home" className="space-y-4">
        <TabsList>
          <TabsTrigger value="home" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Home Page</span>
          </TabsTrigger>
          <TabsTrigger value="faqs" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <span>FAQs</span>
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>About</span>
          </TabsTrigger>
          <TabsTrigger value="contact" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Contact</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Home Page Content</CardTitle>
              <CardDescription>Edit the content displayed on the home page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Hero Section</h3>
                <div className="space-y-2">
                  <Label htmlFor="hero-title">Hero Title</Label>
                  <Input
                    id="hero-title"
                    value={homeContent.heroTitle}
                    onChange={(e) => setHomeContent({ ...homeContent, heroTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                  <Textarea
                    id="hero-subtitle"
                    value={homeContent.heroSubtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, heroSubtitle: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Featured Hackathons Section</h3>
                <div className="space-y-2">
                  <Label htmlFor="featured-title">Section Title</Label>
                  <Input
                    id="featured-title"
                    value={homeContent.featuredTitle}
                    onChange={(e) => setHomeContent({ ...homeContent, featuredTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="featured-subtitle">Section Subtitle</Label>
                  <Input
                    id="featured-subtitle"
                    value={homeContent.featuredSubtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, featuredSubtitle: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Why Choose Us Section</h3>
                <div className="space-y-2">
                  <Label htmlFor="why-choose-title">Section Title</Label>
                  <Input
                    id="why-choose-title"
                    value={homeContent.whyChooseTitle}
                    onChange={(e) => setHomeContent({ ...homeContent, whyChooseTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="why-choose-subtitle">Section Subtitle</Label>
                  <Input
                    id="why-choose-subtitle"
                    value={homeContent.whyChooseSubtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, whyChooseSubtitle: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Testimonials Section</h3>
                <div className="space-y-2">
                  <Label htmlFor="testimonials-title">Section Title</Label>
                  <Input
                    id="testimonials-title"
                    value={homeContent.testimonialsTitle}
                    onChange={(e) => setHomeContent({ ...homeContent, testimonialsTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testimonials-subtitle">Section Subtitle</Label>
                  <Input
                    id="testimonials-subtitle"
                    value={homeContent.testimonialsSubtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, testimonialsSubtitle: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">CTA Section</h3>
                <div className="space-y-2">
                  <Label htmlFor="cta-title">CTA Title</Label>
                  <Input
                    id="cta-title"
                    value={homeContent.ctaTitle}
                    onChange={(e) => setHomeContent({ ...homeContent, ctaTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cta-subtitle">CTA Subtitle</Label>
                  <Input
                    id="cta-subtitle"
                    value={homeContent.ctaSubtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, ctaSubtitle: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveHomeContent} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Home Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>FAQs Management</CardTitle>
              <CardDescription>Add, edit, or remove frequently asked questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border rounded-md p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium">FAQ #{index + 1}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteFaq(index)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`question-${index}`}>Question</Label>
                      <Input
                        id={`question-${index}`}
                        value={faq.question}
                        onChange={(e) => {
                          const updatedFaqs = [...faqItems]
                          updatedFaqs[index].question = e.target.value
                          setFaqItems(updatedFaqs)
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`answer-${index}`}>Answer</Label>
                      <Textarea
                        id={`answer-${index}`}
                        value={faq.answer}
                        onChange={(e) => {
                          const updatedFaqs = [...faqItems]
                          updatedFaqs[index].answer = e.target.value
                          setFaqItems(updatedFaqs)
                        }}
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border rounded-md p-4 space-y-4">
                <h3 className="text-lg font-medium">Add New FAQ</h3>
                <div className="space-y-2">
                  <Label htmlFor="new-question">Question</Label>
                  <Input
                    id="new-question"
                    value={newFaq.question}
                    onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                    placeholder="Enter a new question"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-answer">Answer</Label>
                  <Textarea
                    id="new-answer"
                    value={newFaq.answer}
                    onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                    placeholder="Enter the answer"
                    rows={3}
                  />
                </div>
                <Button onClick={handleAddFaq} className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add FAQ
                </Button>
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveFaqs} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save All FAQs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Page Content</CardTitle>
              <CardDescription>Edit the content displayed on the about page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Main Section</h3>
                <div className="space-y-2">
                  <Label htmlFor="about-title">Page Title</Label>
                  <Input
                    id="about-title"
                    value={aboutContent.mainTitle}
                    onChange={(e) => setAboutContent({ ...aboutContent, mainTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="about-subtitle">Page Subtitle</Label>
                  <Input
                    id="about-subtitle"
                    value={aboutContent.mainSubtitle}
                    onChange={(e) => setAboutContent({ ...aboutContent, mainSubtitle: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Our Story Section</h3>
                <div className="space-y-2">
                  <Label htmlFor="story-title">Section Title</Label>
                  <Input
                    id="story-title"
                    value={aboutContent.storyTitle}
                    onChange={(e) => setAboutContent({ ...aboutContent, storyTitle: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="story-content">Content</Label>
                  <Textarea
                    id="story-content"
                    value={aboutContent.storyContent}
                    onChange={(e) => setAboutContent({ ...aboutContent, storyContent: e.target.value })}
                    rows={6}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveAboutContent} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save About Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Page Content</CardTitle>
              <CardDescription>Edit the content displayed on the contact page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Contact Information</h3>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input id="contact-email" defaultValue="support@hackathonhub.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" defaultValue="+1-123-456-7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-address">Address</Label>
                  <Textarea
                    id="contact-address"
                    defaultValue="123 Developer Street
Silicon Valley"
                    rows={3}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Social Media Links</h3>
                <div className="space-y-2">
                  <Label htmlFor="social-twitter">Twitter</Label>
                  <Input id="social-twitter" defaultValue="https://twitter.com/hackathonhub" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="social-github">GitHub</Label>
                  <Input id="social-github" defaultValue="https://github.com/hackathonhub" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="social-linkedin">LinkedIn</Label>
                  <Input id="social-linkedin" defaultValue="https://linkedin.com/company/hackathonhub" />
                </div>
              </div>

              <div className="pt-4">
                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Contact Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

