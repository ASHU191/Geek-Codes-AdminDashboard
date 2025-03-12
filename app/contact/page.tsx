import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Have questions or feedback? We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  You can also reach out to us using the following contact details.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium">Our Address</h3>
                          <p className="text-muted-foreground mt-1">
                            123 Developer Street
                            <br />
                            Silicon Valley
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium">Email Us</h3>
                          <p className="text-muted-foreground mt-1">
                            <a href="mailto:support@hackathonhub.com" className="hover:text-primary">
                              support@hackathonhub.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium">Call Us</h3>
                          <p className="text-muted-foreground mt-1">
                            <a href="tel:+11234567890" className="hover:text-primary">
                              +1-123-456-7890
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-6 w-6 text-primary shrink-0 mt-0.5 flex items-center justify-center">
                          <span className="text-lg">@</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Social Media</h3>
                          <div className="flex space-x-4 mt-2">
                            <a href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                              <Twitter className="h-5 w-5" />
                              <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://github.com" className="text-muted-foreground hover:text-primary">
                              <Github className="h-5 w-5" />
                              <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                              <Linkedin className="h-5 w-5" />
                              <span className="sr-only">LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-4">Find answers to common questions about Hackathon Hub</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I register for a hackathon?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To register for a hackathon, create an account on our platform, browse available hackathons, and
                    click the "Register" button on the hackathon page you're interested in.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I participate as an individual?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can participate as an individual or as part of a team. Each hackathon has its own team size
                    requirements, which are clearly mentioned on the hackathon page.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are the hackathons free to join?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most of our hackathons are free to join. Some may have premium features available for a fee, but the
                    core participation is always free.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How are submissions judged?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Submissions are judged by a panel of industry experts based on criteria such as innovation,
                    technical complexity, design, and practical application. Detailed judging criteria are provided for
                    each hackathon.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link href="/faqs">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

