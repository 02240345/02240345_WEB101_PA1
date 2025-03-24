// Main page component that serves as the entry point for our application
"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Feed from "@/components/feed"
import SuggestedUsers from "@/components/suggested-users"

export default function Home() {
  // State to store mock data for our application
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        id: "Sonam Zangmo",
        name: "Sonam Zangmo",
        verified: true,
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "thug life.",
      likes: 32000,
      liked: false,
      replies: 2342,
      timestamp: "2h",
    },
    {
      id: 2,
      user: {
        id: "inside_bhutan_",
        name: "inside_bhutan",
        verified: true,
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "",
      image: "/placeholder.svg?height=300&width=600",
      likes: 1200,
      liked: false,
      replies: 640,
      timestamp: "12h",
    },
    {
      id: 3,
      user: {
        id: "BBS",
        name: "BBS",
        verified: true,
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        'The cut-off point for Class 10 students is coming back next year. The minimum score is yet to be decided, but it will only impact next year’s class ten students. Only those who secure the minimum score will get admission to class 11 in government schools. The decision has received mixed reactions.',
      likes: 5000,
      liked: false,
      replies: 72,
      timestamp: "1d",
    },
  ])

  // State for suggested users
  const [suggestedUsers, setSuggestedUsers] = useState([
    {
      id: "Tshering Bidha",
      name: "tshering",
      avatar: "/placeholder.svg?height=40&width=40",
      following: true,
    },
    {
      id: "Namgay",
      name: "Namgay",
      avatar: "/placeholder.svg?height=40&width=40",
      following: false,
    },
    {
      id: "Pokchum",
      name: "Pokchum",
      avatar: "/placeholder.svg?height=40&width=40",
      following: false,
    },
    {
      id: "Karma Menlam",
      name: "Karma Menlam",
      avatar: "/placeholder.svg?height=40&width=40",
      following: false,
    },
    {
      id: "Nimchu Pem",
      name: "Nimchu",
      avatar: "/placeholder.svg?height=40&width=40",
      following: false,
    },
  ])

  // Current user data
  const currentUser = {
    id: "K_Choeying24",
    name: "Karma Choeying",
    avatar: "/placeholder.svg?height=40&width=40",
  }

  // Function to handle liking a post
  const handleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          // Toggle like status and update count
          const newLiked = !post.liked
          const likeDelta = newLiked ? 1 : -1
          return {
            ...post,
            liked: newLiked,
            likes: post.likes + likeDelta,
          }
        }
        return post
      }),
    )
  }

  // Function to handle following a user
  const handleFollow = (userId) => {
    setSuggestedUsers(
      suggestedUsers.map((user) => {
        if (user.id === userId) {
          // Toggle following status
          return {
            ...user,
            following: !user.following,
          }
        }
        return user
      }),
    )
  }

  // Function to add a new post
  const handleAddPost = (content) => {
    const newPost = {
      id: Date.now(), // Use timestamp as unique ID
      user: currentUser,
      content,
      likes: 0,
      liked: false,
      replies: 0,
      timestamp: "Just now",
    }

    setPosts([newPost, ...posts])
  }

  return (
    <main className="flex min-h-screen bg-black text-white">
      {/* Left sidebar with navigation */}
      <Sidebar currentUser={currentUser} />

      {/* Main content area with posts */}
      <div className="flex-1 border-l border-r border-gray-800 max-w-2xl">
        <Feed posts={posts} currentUser={currentUser} onLike={handleLike} onAddPost={handleAddPost} />
      </div>

      {/* Right sidebar with suggested users */}
      <div className="hidden lg:block w-80 p-4">
        <SuggestedUsers users={suggestedUsers} currentUser={currentUser} onFollow={handleFollow} />
      </div>
    </main>
  )
}

