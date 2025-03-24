"use client"

// Sidebar component that contains navigation links
import { useState } from "react"
import { Home, Search, PlusSquare, Heart, User, Menu, LogOut } from "lucide-react"
import Image from "next/image"

export default function Sidebar({ currentUser }) {
  // State to track active navigation item
  const [activeItem, setActiveItem] = useState("home")

  // State to control menu dropdown
  const [menuOpen, setMenuOpen] = useState(false)

  // Array of navigation items with their icons and labels
  const navItems = [
    { id: "home", icon: <Home size={24} />, label: "Home", href: "#" },
    { id: "search", icon: <Search size={24} />, label: "Search", href: "#" },
    { id: "create", icon: <PlusSquare size={24} />, label: "Create", href: "#" },
    { id: "activity", icon: <Heart size={24} />, label: "Activity", href: "#" },
    { id: "profile", icon: <User size={24} />, label: "Profile", href: "#" },
  ]

  // Handle navigation item click
  const handleNavClick = (itemId) => {
    setActiveItem(itemId)
    // Close menu if it's open
    if (menuOpen) setMenuOpen(false)
  }

  // Toggle menu dropdown
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="w-20 md:w-60 p-4 flex flex-col h-screen sticky top-0">
      {/* Logo at the top */}
      <div className="flex justify-center md:justify-start py-4">
        <div className="w-10 h-10 relative">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Threads Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Navigation links */}
      <nav className="mt-8 flex-1">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`flex items-center gap-4 p-2 rounded-md transition-colors ${
                  activeItem === item.id ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-900 hover:text-white"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* More button at the bottom */}
      <div className="mt-auto pb-4 relative">
        <button
          className={`flex items-center gap-4 p-2 rounded-md w-full transition-colors ${
            menuOpen ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-900 hover:text-white"
          }`}
          onClick={toggleMenu}
        >
          <Menu size={24} />
          <span className="hidden md:inline">More</span>
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-full bg-gray-900 rounded-md shadow-lg overflow-hidden">
            <button className="flex items-center gap-4 p-3 w-full text-left hover:bg-gray-800 text-gray-300">
              <LogOut size={20} />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

