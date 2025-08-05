import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AutoMerge Pro - AI-Powered GitHub PR Automation',
  description: 'Automatically review, approve, and merge pull requests with intelligent risk scoring and customizable rules.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}