# Threads Social Media Clone

This project is a recreation of the Threads social media platform interface using Next.js and React. It's built as a responsive web application that mimics the core UI elements and functionality of the Threads platform.

## Component Structure

The application is organized into the following components:

1. **Layout** (`app/layout.js`): The root layout that applies global styles and metadata.

2. **Home Page** (`app/page.js`): The main page component that serves as the container for all other components and manages the application state.

3. **Sidebar** (`components/sidebar.js`): The navigation sidebar with links to different sections of the app.

4. **Feed** (`components/feed.js`): Displays the main content area with posts and the header.

5. **Post** (`components/post.js`): Renders individual post items with user information, content, and interaction buttons.

6. **SuggestedUsers** (`components/suggested-users.js`): Shows suggested user accounts to follow and app download information.

## Features Implemented

- Dark mode UI matching the Threads interface
- Responsive design that adapts to different screen sizes
- Interactive elements with state management:
  - Like/unlike posts
  - Follow/unfollow users
  - Create new posts
  - Reply to posts
  - Search for users
  - Navigation with active state
  - Dropdown menus
- Mock data for posts and user suggestions
- Post display with user information, content, and engagement metrics
- Suggested users section with follow/following state

## Data Structure

The application uses React's useState to manage the following data:

- Posts: Array of post objects containing user information, content, engagement metrics
- Suggested Users: Array of user objects with following status
- Current User: Object with the logged-in user's information
- UI States: Various states for managing dropdowns, active elements, and form inputs

## Responsive Design

The interface is responsive and adapts to different screen sizes:
- Mobile: Simplified sidebar with icons only
- Desktop: Full sidebar with text labels and suggested users section

## Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS for styling
- Lucide React for icons

## Interactive Features

- **Like Posts**: Click the heart icon to like/unlike posts
- **Follow Users**: Click the Follow/Following button to follow/unfollow users
- **Create Posts**: Type in the "Start a thread..." input and click Post
- **Reply to Posts**: Click the comment icon to open the reply form
- **Search Users**: Use the search input in the suggested users section
- **Navigation**: Click on sidebar items to navigate between sections
- **Dropdown Menus**: Click on the "More" button or post menu (three dots) to see options

## Future Improvements

- Add authentication functionality
- Implement real-time updates for likes and comments
- Add user profile pages
- Implement image upload functionality
- Add dark/light mode toggle

