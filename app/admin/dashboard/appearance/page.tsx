"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Palette, Check, Image, Layout, Type } from "lucide-react"

export default function AppearancePage() {
  const { toast } = useToast()
  const [primaryColor, setPrimaryColor] = useState("#1E90FF")
  const [logoUrl, setLogoUrl] = useState("/placeholder.svg?height=60&width=120&text=Logo")
  const [heroImage, setHeroImage] = useState("/placeholder.svg?height=600&width=800")
  const [fontFamily, setFontFamily] = useState("Poppins")
  const [buttonStyle, setButtonStyle] = useState("rounded")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleSaveChanges = () => {
    // In a real app, this would save to a database or API
    toast({
      title: "Changes Saved",
      description: "Your appearance settings have been updated.",
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Appearance</h1>
        <p className="text-muted-foreground">Customize the look and feel of your hackathon platform</p>
      </div>

      <Tabs defaultValue="theme" className="space-y-4">
        <TabsList>
          <TabsTrigger value="theme" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Theme</span>
          </TabsTrigger>
          <TabsTrigger value="layout" className="flex items-center gap-2">
            <Layout className="h-4 w-4" />
            <span>Layout</span>
          </TabsTrigger>
          <TabsTrigger value="typography" className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            <span>Typography</span>
          </TabsTrigger>
          <TabsTrigger value="images" className="flex items-center gap-2">
            <Image className="h-4 w-4" />
            <span>Images</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="theme" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>Customize colors and theme options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="primary-color"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-20 h-10 p-1"
                  />
                  <Input value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} className="flex-1" />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Color Presets</Label>
                <div className="flex flex-wrap gap-3">
                  {["#1E90FF", "#6C63FF", "#FF5757", "#00C896", "#FFB800", "#9C27B0"].map((color) => (
                    <button
                      key={color}
                      className="w-10 h-10 rounded-full border flex items-center justify-center"
                      style={{ backgroundColor: color }}
                      onClick={() => setPrimaryColor(color)}
                    >
                      {color === primaryColor && <Check className="h-5 w-5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Theme Mode</Label>
                <div className="flex gap-4">
                  <div
                    className={`border rounded-md p-4 flex-1 cursor-pointer ${!isDarkMode ? "border-primary" : ""}`}
                    onClick={() => setIsDarkMode(false)}
                  >
                    <div className="h-20 bg-white border rounded-md mb-2 flex items-center justify-center">
                      <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Light Mode</span>
                      {!isDarkMode && <Check className="h-4 w-4 text-primary" />}
                    </div>
                  </div>
                  <div
                    className={`border rounded-md p-4 flex-1 cursor-pointer ${isDarkMode ? "border-primary" : ""}`}
                    onClick={() => setIsDarkMode(true)}
                  >
                    <div className="h-20 bg-gray-800 border rounded-md mb-2 flex items-center justify-center">
                      <div className="w-3/4 h-4 bg-gray-600 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Dark Mode</span>
                      {isDarkMode && <Check className="h-4 w-4 text-primary" />}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="button-style">Button Style</Label>
                <select
                  id="button-style"
                  className="w-full px-3 py-2 border rounded-md"
                  value={buttonStyle}
                  onChange={(e) => setButtonStyle(e.target.value)}
                >
                  <option value="rounded">Rounded</option>
                  <option value="pill">Pill</option>
                  <option value="square">Square</option>
                </select>
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveChanges}>Save Theme Settings</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Theme Preview</CardTitle>
              <CardDescription>See how your theme will look</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={`border rounded-lg p-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white"}`}>
                <h3 className="text-xl font-bold mb-4" style={{ color: primaryColor }}>
                  Hackathon Hub
                </h3>
                <p className="mb-4">This is a preview of your theme settings.</p>
                <div className="space-y-2">
                  <button
                    className="px-4 py-2 text-white"
                    style={{
                      backgroundColor: primaryColor,
                      borderRadius: buttonStyle === "rounded" ? "0.375rem" : buttonStyle === "pill" ? "9999px" : "0",
                    }}
                  >
                    Primary Button
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Layout Settings</CardTitle>
              <CardDescription>Configure the layout of your platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Navigation Style</Label>
                <div className="flex gap-4">
                  <div className="border rounded-md p-4 flex-1 cursor-pointer border-primary">
                    <div className="h-20 bg-gray-100 border rounded-md mb-2 flex flex-col">
                      <div className="h-6 bg-gray-200 w-full"></div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Horizontal</span>
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="border rounded-md p-4 flex-1 cursor-pointer">
                    <div className="h-20 bg-gray-100 border rounded-md mb-2 flex">
                      <div className="w-1/4 bg-gray-200"></div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Sidebar</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Homepage Layout</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border rounded-md p-4 cursor-pointer border-primary">
                    <div className="h-20 bg-gray-100 border rounded-md mb-2 flex flex-col">
                      <div className="h-10 bg-gray-200 w-full"></div>
                      <div className="flex-1 grid grid-cols-3 gap-1 p-1">
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                        <div className="bg-gray-200"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Grid</span>
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="border rounded-md p-4 cursor-pointer">
                    <div className="h-20 bg-gray-100 border rounded-md mb-2 flex flex-col">
                      <div className="h-10 bg-gray-200 w-full"></div>
                      <div className="flex-1 flex flex-col gap-1 p-1">
                        <div className="bg-gray-200 h-3"></div>
                        <div className="bg-gray-200 h-3"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>List</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Container Width</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Narrow</span>
                  <input type="range" min="1" max="3" value="2" className="flex-1" />
                  <span className="text-sm">Wide</span>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveChanges}>Save Layout Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Typography Settings</CardTitle>
              <CardDescription>Configure fonts and text styles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="font-family">Primary Font</Label>
                <select
                  id="font-family"
                  className="w-full px-3 py-2 border rounded-md"
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                >
                  <option value="Poppins">Poppins</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Inter">Inter</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Open Sans">Open Sans</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Heading Size</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Smaller</span>
                  <input type="range" min="1" max="3" value="2" className="flex-1" />
                  <span className="text-sm">Larger</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Body Text Size</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Smaller</span>
                  <input type="range" min="1" max="3" value="2" className="flex-1" />
                  <span className="text-sm">Larger</span>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveChanges}>Save Typography Settings</Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily }}>
                  Typography Preview
                </h3>
                <h4 className="text-xl font-semibold mb-4" style={{ fontFamily }}>
                  This is how your text will look
                </h4>
                <p className="mb-4" style={{ fontFamily }}>
                  This is a sample paragraph showing how your body text will appear on the platform. The font family is
                  set to {fontFamily}.
                </p>
                <button
                  className="px-4 py-2 text-white"
                  style={{
                    backgroundColor: primaryColor,
                    fontFamily,
                    borderRadius: buttonStyle === "rounded" ? "0.375rem" : buttonStyle === "pill" ? "9999px" : "0",
                  }}
                >
                  Sample Button
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Image Settings</CardTitle>
              <CardDescription>Configure logos and images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="logo-url">Logo URL</Label>
                <div className="flex gap-4 items-start">
                  <div className="w-24 h-24 border rounded flex items-center justify-center overflow-hidden">
                    <img src={logoUrl || "/placeholder.svg"} alt="Logo" className="max-w-full max-h-full" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Input id="logo-url" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} />
                    <Button variant="outline" size="sm">
                      Upload New Logo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hero-image">Hero Image URL</Label>
                <div className="flex gap-4 items-start">
                  <div className="w-40 h-24 border rounded flex items-center justify-center overflow-hidden">
                    <img
                      src={heroImage || "/placeholder.svg"}
                      alt="Hero"
                      className="max-w-full max-h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Input id="hero-image" value={heroImage} onChange={(e) => setHeroImage(e.target.value)} />
                    <Button variant="outline" size="sm">
                      Upload New Hero Image
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 border rounded flex items-center justify-center overflow-hidden">
                    <img src="/placeholder.svg?height=32&width=32" alt="Favicon" className="max-w-full max-h-full" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Button variant="outline" size="sm">
                      Upload New Favicon
                    </Button>
                    <p className="text-xs text-muted-foreground">Recommended size: 32x32px</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button onClick={handleSaveChanges}>Save Image Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

