"use client"

// SuggestedUsers component that displays user suggestions
import { useState } from "react"
import Image from "next/image"
import { QrCode, Search } from "lucide-react"

export default function SuggestedUsers({ users, currentUser, onFollow }) {
  // State for search input
  const [searchQuery, setSearchQuery] = useState("")
  // State to track if search is active
  const [searchActive, setSearchActive] = useState(false)

  // Filter users based on search query
  const filteredUsers = searchQuery
    ? users.filter(
        (user) =>
          user.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.name?.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : users

  return (
    <div className="flex flex-col gap-6">
      {/* Current user info */}
      <div className="flex items-center gap-2">
        <Image
          src={currentUser.avatar || "/placeholder.svg"}
          alt={currentUser.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-medium">{currentUser.id}</span>
          <span className="text-gray-500 text-sm">{currentUser.name}</span>
        </div>
        <button className="ml-auto text-blue-500 text-sm">Switch</button>
      </div>

      {/* Search input */}
      <div className={`relative ${searchActive ? "mb-4" : ""}`}>
        <div
          className={`flex items-center bg-gray-800 rounded-full px-3 py-2 ${
            searchActive ? "ring-2 ring-blue-500" : ""
          }`}
        >
          <Search size={16} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search users"
            className="bg-transparent border-none outline-none w-full text-sm text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
        </div>
      </div>

      {/* Suggested users section */}
      <div>
        <div className="flex justify-between mb-3">
          <span className="text-gray-500 font-medium">Suggested for you</span>
          <button className="text-sm font-medium">See All</button>
        </div>

        {/* List of suggested users */}
        <div className="flex flex-col gap-3">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center gap-2">
                <Image
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{user.id}</span>
                  <span className="text-gray-500 text-sm">Follows you</span>
                </div>
                <button
                  className={`ml-auto text-sm px-3 py-1 rounded-md transition-colors ${
                    user.following
                      ? "text-white bg-transparent border border-gray-700 hover:bg-gray-800"
                      : "text-white bg-gray-800 hover:bg-gray-700"
                  }`}
                  onClick={() => onFollow(user.id)}
                >
                  {user.following ? "Following" : "Follow"}
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-4">No users found matching "{searchQuery}"</div>
          )}
        </div>
      </div>

      {/* Download app section with QR code */}
      <div className="mt-6">
        <p className="text-gray-500 mb-3">Download mobile app</p>
        <div className="bg-gray-900 p-4 rounded-md flex justify-center">
          <QrCode size={120} />
        </div>
      </div>

      {/* Footer links */}
      <div className="mt-6 text-xs text-gray-500">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="#" className="hover:underline">
            About
          </a>{" "}
          •
          <a href="#" className="hover:underline">
            Help
          </a>{" "}
          •
          <a href="#" className="hover:underline">
            Press
          </a>{" "}
          •
          <a href="#" className="hover:underline">
            API
          </a>{" "}
          •
          <a href="#" className="hover:underline">
            Jobs
          </a>{" "}
          •
          <a href="#" className="hover:underline">
            Privacy
          </a>{" "}
          •
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
        <div className="mt-2">
          <p>© 2023 Meta</p>
        </div>
      </div>
    </div>
  )
}

