"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Settings, Bell, Shield, Save, RefreshCw, Database, Lock } from "lucide-react"

export default function SettingsPage() {
  const { toast } = useToast()
  const [siteName, setSiteName] = useState("Hackathon Hub")
  const [siteUrl, setSiteUrl] = useState("https://hackathonhub.com")
  const [adminEmail, setAdminEmail] = useState("admin@gmail.com")

  const [notificationSettings, setNotificationSettings] = useState({
    newUsers: true,
    newHackathons: true,
    hackathonRegistrations: true,
    hackathonCompletions: true,
    systemAlerts: true,
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordExpiry: false,
    loginAttempts: true,
    ipRestriction: false,
  })

  const handleSaveGeneralSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your general settings have been updated successfully.",
    })
  }

  const handleSaveNotificationSettings = () => {
    toast({
      title: "Notification Settings Saved",
      description: "Your notification preferences have been updated.",
    })
  }

  const handleSaveSecuritySettings = () => {
    toast({
      title: "Security Settings Saved",
      description: "Your security settings have been updated.",
    })
  }

  const handleClearCache = () => {
    toast({
      title: "Cache Cleared",
      description: "The system cache has been cleared successfully.",
    })
  }

  const handleBackupData = () => {
    toast({
      title: "Backup Started",
      description: "Your data backup has been initiated. You will be notified when it's complete.",
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure system settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>General</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span>System</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic site settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-url">Site URL</Label>
                <Input id="site-url" value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select id="timezone" className="w-full px-3 py-2 border rounded-md">
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                  <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                  <option value="Europe/Paris">Central European Time (CET)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <select id="date-format" className="w-full px-3 py-2 border rounded-md">
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  <option value="MMMM D, YYYY">MMMM D, YYYY</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode" className="text-base">
                    Maintenance Mode
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    When enabled, the site will display a maintenance message to visitors
                  </p>
                </div>
                <Switch id="maintenance-mode" />
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveGeneralSettings} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save General Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure email and system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-new-users" className="text-base">
                      New User Registrations
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when new users register</p>
                  </div>
                  <Switch
                    id="notify-new-users"
                    checked={notificationSettings.newUsers}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, newUsers: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-new-hackathons" className="text-base">
                      New Hackathons
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when new hackathons are created
                    </p>
                  </div>
                  <Switch
                    id="notify-new-hackathons"
                    checked={notificationSettings.newHackathons}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, newHackathons: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-registrations" className="text-base">
                      Hackathon Registrations
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when users register for hackathons
                    </p>
                  </div>
                  <Switch
                    id="notify-registrations"
                    checked={notificationSettings.hackathonRegistrations}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, hackathonRegistrations: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-completions" className="text-base">
                      Hackathon Completions
                    </Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when hackathons are completed</p>
                  </div>
                  <Switch
                    id="notify-completions"
                    checked={notificationSettings.hackathonCompletions}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, hackathonCompletions: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notify-system" className="text-base">
                      System Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about system events and issues
                    </p>
                  </div>
                  <Switch
                    id="notify-system"
                    checked={notificationSettings.systemAlerts}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, systemAlerts: checked })
                    }
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Settings</h3>
                <div className="space-y-2">
                  <Label htmlFor="email-from">From Email</Label>
                  <Input id="email-from" defaultValue="noreply@hackathonhub.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-name">From Name</Label>
                  <Input id="email-name" defaultValue="Hackathon Hub" />
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveNotificationSettings} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Notification Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security and authentication options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor" className="text-base">
                      Two-Factor Authentication
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Require two-factor authentication for admin accounts
                    </p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={securitySettings.twoFactorAuth}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="password-expiry" className="text-base">
                      Password Expiry
                    </Label>
                    <p className="text-sm text-muted-foreground">Force password reset every 90 days</p>
                  </div>
                  <Switch
                    id="password-expiry"
                    checked={securitySettings.passwordExpiry}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, passwordExpiry: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="login-attempts" className="text-base">
                      Login Attempt Limits
                    </Label>
                    <p className="text-sm text-muted-foreground">Lock accounts after 5 failed login attempts</p>
                  </div>
                  <Switch
                    id="login-attempts"
                    checked={securitySettings.loginAttempts}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, loginAttempts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ip-restriction" className="text-base">
                      IP Restriction
                    </Label>
                    <p className="text-sm text-muted-foreground">Restrict admin access to specific IP addresses</p>
                  </div>
                  <Switch
                    id="ip-restriction"
                    checked={securitySettings.ipRestriction}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, ipRestriction: checked })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-password">Change Admin Password</Label>
                <Input id="admin-password" type="password" placeholder="Enter new password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm new password" />
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveSecuritySettings} className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Save Security Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Maintenance</CardTitle>
              <CardDescription>Manage system operations and maintenance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-md p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-medium">Clear Cache</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Clear the system cache to resolve performance issues or after making significant changes.
                  </p>
                  <Button onClick={handleClearCache} variant="outline">
                    Clear Cache
                  </Button>
                </div>

                <div className="border rounded-md p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Database className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-medium">Backup Data</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Create a backup of all system data including users, hackathons, and settings.
                  </p>
                  <Button onClick={handleBackupData} variant="outline">
                    Backup Now
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">System Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Version</p>
                    <p className="text-sm text-muted-foreground">1.0.0</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Last Updated</p>
                    <p className="text-sm text-muted-foreground">March 12, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Database Size</p>
                    <p className="text-sm text-muted-foreground">24.5 MB</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Total Users</p>
                    <p className="text-sm text-muted-foreground">125</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">System Logs</h3>
                <div className="border rounded-md p-4 bg-muted/50 h-40 overflow-y-auto">
                  <pre className="text-xs text-muted-foreground">
                    [2025-03-12 11:30:15] System started [2025-03-12 11:32:20] User login: admin@gmail.com [2025-03-12
                    11:35:42] New hackathon created: AI Innovation Challenge [2025-03-12 11:40:18] User registration:
                    john@example.com [2025-03-12 11:45:33] Hackathon updated: MERN Stack Hackathon
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

