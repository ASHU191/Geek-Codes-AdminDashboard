import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about Hackathon Hub, participating in hackathons, and more.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="general" className="space-y-8">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="participation">Participation</TabsTrigger>
                <TabsTrigger value="teams">Teams</TabsTrigger>
                <TabsTrigger value="submissions">Submissions</TabsTrigger>
                <TabsTrigger value="prizes">Prizes & Judging</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>General Questions</CardTitle>
                    <CardDescription>Basic information about Hackathon Hub and our platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>What is Hackathon Hub?</AccordionTrigger>
                        <AccordionContent>
                          Hackathon Hub is a platform that hosts and organizes hackathons for developers of all skill
                          levels. We provide a space for developers to learn new technologies, collaborate with others,
                          and showcase their skills through competitive coding challenges.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Is Hackathon Hub free to use?</AccordionTrigger>
                        <AccordionContent>
                          Yes, creating an account and participating in most hackathons on Hackathon Hub is completely
                          free. Some hackathons may have premium features or tiers available for a fee, but the core
                          participation is always free.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Who can participate in hackathons?</AccordionTrigger>
                        <AccordionContent>
                          Anyone can participate in our hackathons! We welcome developers of all skill levels, from
                          beginners to experts. Each hackathon has its own set of requirements and prerequisites, which
                          are clearly mentioned on the hackathon page.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>How do I create an account?</AccordionTrigger>
                        <AccordionContent>
                          You can create an account by clicking on the "Sign Up" button in the top right corner of the
                          website. You can sign up using your email, or through your Google or GitHub accounts for a
                          quicker registration process.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Can I organize my own hackathon on Hackathon Hub?</AccordionTrigger>
                        <AccordionContent>
                          Yes! We offer tools for organizations and individuals to host their own hackathons on our
                          platform. Please contact us through the Contact page for more information on organizing a
                          hackathon.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="participation" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Participation Questions</CardTitle>
                    <CardDescription>Information about participating in hackathons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>How do I register for a hackathon?</AccordionTrigger>
                        <AccordionContent>
                          To register for a hackathon, browse the available hackathons on our platform and click on the
                          one you're interested in. On the hackathon page, click the "Register" button and follow the
                          instructions to complete your registration.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>What are the technical requirements for participating?</AccordionTrigger>
                        <AccordionContent>
                          The technical requirements vary by hackathon. Generally, you'll need a computer with internet
                          access and the necessary development tools for the hackathon's focus area (e.g., specific
                          programming languages, frameworks, or software). Detailed requirements are listed on each
                          hackathon's page.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Can I participate in multiple hackathons simultaneously?</AccordionTrigger>
                        <AccordionContent>
                          Yes, you can register for and participate in multiple hackathons at the same time. However, we
                          recommend considering the time commitment required for each hackathon to ensure you can fully
                          engage with each one.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>What if I'm a beginner? Can I still participate?</AccordionTrigger>
                        <AccordionContent>
                          We have hackathons designed specifically for beginners, and many of our hackathons welcome
                          participants of all skill levels. Look for hackathons labeled as "Beginner-Friendly" or check
                          the difficulty level mentioned on the hackathon page.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>Can I use existing code or projects?</AccordionTrigger>
                        <AccordionContent>
                          This depends on the specific rules of each hackathon. Some hackathons require all code to be
                          written during the event, while others allow the use of existing libraries, frameworks, or
                          even your own previous work. Always check the rules section of the hackathon you're
                          participating in.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="teams" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Questions</CardTitle>
                    <CardDescription>Information about forming and managing teams</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Do I need to have a team to participate?</AccordionTrigger>
                        <AccordionContent>
                          No, you can participate as an individual in most hackathons. However, some hackathons may
                          require team participation. If you're looking to join a team, you can use our team formation
                          feature to find teammates.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>How do I create or join a team?</AccordionTrigger>
                        <AccordionContent>
                          After registering for a hackathon, you can create a team by going to the "Teams" section of
                          your dashboard and clicking "Create Team." To join an existing team, you can browse available
                          teams or accept an invitation from a team leader.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Is there a limit to team size?</AccordionTrigger>
                        <AccordionContent>
                          Yes, each hackathon has its own team size limit, which is specified on the hackathon page.
                          Most hackathons allow teams of 2-5 members, but this can vary.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Can I change teams during a hackathon?</AccordionTrigger>
                        <AccordionContent>
                          In most cases, team formation is finalized before the hackathon begins, and changes are not
                          allowed during the event. However, this policy can vary by hackathon, so please check the
                          specific rules of the event you're participating in.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>How do team submissions work?</AccordionTrigger>
                        <AccordionContent>
                          For team submissions, the team leader typically submits the project on behalf of the entire
                          team. All team members will be credited for the submission, and any prizes won will be shared
                          among the team according to the hackathon's prize distribution policy.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="submissions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Submission Questions</CardTitle>
                    <CardDescription>Information about submitting your hackathon projects</CardDescription>
                  </CardHeader>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

