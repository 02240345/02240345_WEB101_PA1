"use client"

// Post component that displays a single post
import { useState } from "react"
import { Heart, MessageCircle, Repeat, Send, MoreHorizontal } from "lucide-react"
import Image from "next/image"

export default function Post({ post, onLike }) {
  // State for dropdown menu
  const [menuOpen, setMenuOpen] = useState(false)
  // State for reply input
  const [replyText, setReplyText] = useState("")
  // State to track if reply section is open
  const [replyOpen, setReplyOpen] = useState(false)

  // Format numbers for display (e.g., 32000 -> 32K)
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K"
    }
    return num
  }

  // Toggle dropdown menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Handle reply submission
  const handleReply = (e) => {
    e.preventDefault()
    if (replyText.trim()) {
      // In a real app, this would send the reply to a server
      console.log(`Replying to ${post.user.id}: ${replyText}`)
      setReplyText("")
      setReplyOpen(false)
    }
  }

  return (
    <div className="p-4 border-b border-gray-800">
      {/* Post header with user info */}
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <Image
              src={post.user.avatar || "/placeholder.svg"}
              alt={post.user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-medium">{post.user.id}</span>
              {post.user.verified && <span className="text-blue-500">•</span>}
            </div>
            <div className="text-gray-500 text-sm">{post.timestamp}</div>
          </div>
        </div>
        <div className="relative">
          <button className="text-gray-500 hover:text-gray-300 p-1" onClick={toggleMenu}>
            <MoreHorizontal size={20} />
          </button>

          {/* Dropdown menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-gray-900 rounded-md shadow-lg z-10">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  Copy link
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                  Mute user
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-800">
                  Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Post content */}
      <div className="mt-2 mb-3">
        {post.content && <p className="whitespace-pre-line">{post.content}</p>}
        {post.image && (
          <div className="mt-3 rounded-md overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Post image"
              width={600}
              height={300}
              className="w-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Post actions (like, comment, etc.) */}
      <div className="flex gap-4 mt-2">
        <button className={`${post.liked ? "text-red-500" : "text-gray-500 hover:text-red-500"}`} onClick={onLike}>
          <Heart size={20} fill={post.liked ? "currentColor" : "none"} />
        </button>
        <button className="text-gray-500 hover:text-blue-500" onClick={() => setReplyOpen(!replyOpen)}>
          <MessageCircle size={20} />
        </button>
        <button className="text-gray-500 hover:text-green-500">
          <Repeat size={20} />
        </button>
        <button className="text-gray-500 hover:text-blue-500">
          <Send size={20} />
        </button>
      </div>

      {/* Post stats (likes, replies) */}
      <div className="mt-2 text-sm text-gray-500">
        {post.replies > 0 && <span className="mr-3">{formatNumber(post.replies)} replies</span>}
        {post.likes > 0 && <span>{formatNumber(post.likes)} likes</span>}
      </div>

      {/* Reply section */}
      {replyOpen && (
        <div className="mt-3 pt-3 border-t border-gray-800">
          <form onSubmit={handleReply} className="flex gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Your avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
            <input
              type="text"
              className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-sm outline-none"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className={`px-4 py-2 rounded-full text-sm ${
                replyText.trim() ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-400"
              }`}
              disabled={!replyText.trim()}
            >
              Reply
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

