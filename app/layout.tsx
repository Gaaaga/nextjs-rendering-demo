import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next.js Rendering Patterns Demo",
  description: "A demo of SSR, SSG, and RSC in Next.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-4xl mx-auto">{children}</div>
      </body>
    </html>
  )
}
