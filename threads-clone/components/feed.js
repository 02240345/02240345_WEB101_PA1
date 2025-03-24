"use client"

// Feed component that displays posts
import { useState } from "react"
import Post from "./post"
import Image from "next/image"

export default function Feed({ posts, currentUser, onLike, onAddPost }) {
  // State for new post content
  const [newPostContent, setNewPostContent] = useState("")
  // State to track if the post input is focused
  const [inputFocused, setInputFocused] = useState(false)

  // Handle post submission
  const handleSubmitPost = () => {
    if (newPostContent.trim()) {
      onAddPost(newPostContent)
      setNewPostContent("")
      setInputFocused(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Header with user info and post button */}
      <div className="sticky top-0 bg-black z-10 p-4 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={currentUser.avatar || "/placeholder.svg"}
            alt={currentUser.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>{currentUser.id}</span>
        </div>
        <button
          className={`px-4 py-1 rounded-full transition-colors ${
            newPostContent.trim() ? "bg-blue-500 text-white" : "text-blue-500"
          }`}
          onClick={handleSubmitPost}
          disabled={!newPostContent.trim()}
        >
          Post
        </button>
      </div>

      {/* Start a thread input */}
      <div className={`p-4 border-b border-gray-800 ${inputFocused ? "bg-gray-900" : ""}`}>
        <div className="flex gap-3">
          <Image
            src={currentUser.avatar || "/placeholder.svg"}
            alt={currentUser.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex-1">
            <textarea
              className="w-full bg-transparent border-none outline-none resize-none text-white placeholder-gray-500"
              placeholder="Start a thread..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => !newPostContent && setInputFocused(false)}
              rows={inputFocused ? 3 : 1}
            />
            {inputFocused && (
              <div className="flex justify-end mt-2">
                <button
                  className="text-sm text-gray-400 mr-2"
                  onClick={() => {
                    setNewPostContent("")
                    setInputFocused(false)
                  }}
                >
                  Cancel
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm ${
                    newPostContent.trim() ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-400"
                  }`}
                  onClick={handleSubmitPost}
                  disabled={!newPostContent.trim()}
                >
                  Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Display all posts */}
      <div className="flex flex-col">
        {posts.map((post) => (
          <Post key={post.id} post={post} onLike={() => onLike(post.id)} />
        ))}
      </div>
    </div>
  )
}

