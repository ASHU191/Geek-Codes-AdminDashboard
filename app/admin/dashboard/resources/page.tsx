"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

// Mock data for resources
const mockTutorials = [
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
]

const mockTools = [
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
]

export default function ResourcesManagementPage() {
  const { toast } = useToast()
  const [tutorials, setTutorials] = useState(mockTutorials)
  const [tools, setTools] = useState(mockTools)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddResourceOpen, setIsAddResourceOpen] = useState(false)
  const [isEditResourceOpen, setIsEditResourceOpen] = useState(false)
  const [isDeleteResourceOpen, setIsDeleteResourceOpen] = useState(false)
  const [currentResource, setCurrentResource] = useState<any>(null)
  const [resourceType, setResourceType] = useState("tutorial")
  const [newResource, setNewResource] = useState({
    title: "",
    description: "",
    category: "Web Development",
    level: "Beginner",
    duration: "1 hour",
    author: "",
    link: "",
    image: "/placeholder.svg?height=200&width=400",
  })
  
  const filteredTutorials = tutorials.filter(tutorial => 
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutorial.category.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const filteredTools = tools.filter(tool => 
    tool.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const handleAddResource = () => {
    const id = Math.random().toString(36).substring(2, 9)
    
    if (resourceType === "tutorial") {
      const tutorialToAdd = {
        ...newResource,
        id: Number.parseInt(id),
      }
      
      setTutorials([...tutorials, tutorialToAdd])
      toast({
        title: "Tutorial Added",
        description: `${tutorialToAdd.title} has been added successfully.`,
      })
    } else if (resourceType === "tool") {
      const toolToAdd = {
        id: Number.parseInt(id),
        title: newResource.title,
        description: newResource.description,
        category: newResource.category,
        link: newResource.link,
      }
      
      setTools([...tools, toolToAdd])
      toast({
        title: "Tool Added",
        description: `${toolToAdd.title} has been added successfully.`,
      })
    }
    
    setNewResource({
      title: "",
      description: "",
      category: "Web Development",
      level: "Beginner",
      duration: "1 hour",
      author: "",
      link: "",
      image: "/placeholder.svg?height=200&width=400",
    })
    setIsAddResourceOpen(false)
  }
  
  const handleEditResource = () => {
    if (!currentResource) return
    
    if (resourceType === "tutorial") {
      const updatedTutorials = tutorials.map(tutorial => 
        tutorial.id === currentResource.id ? currentResource : tutorial
      )
      
      setTutorials(updatedTutorials)
      toast({
        title: "Tutorial Updated",
        description: `${currentResource.title} has been updated successfully.`,
      })
    } else if (resourceType === "tool") {
      const updatedTools = tools.map(tool => 
        tool.id === currentResource.id ? currentResource : tool
      )
      
      setTools(updatedTools)
      toast({
        title: "Tool Updated",
        description: `${currentResource.title} has been updated successfully.`,
      })
    }
    
    setIsEditResourceOpen(false)
  }
  
  const handleDeleteResource = () => {
    if (!currentResource) return
    
    if (resourceType === "tutorial") {
      const updatedTutorials = tutorials

