import "./globals.css"

export const metadata = {
  title: "Threads Clone",
  description: "A clone of the Threads social media platform",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}



import './globals.css'