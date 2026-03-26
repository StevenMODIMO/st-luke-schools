import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flame Academy — Excellence in Education',
  description: 'A premier multi-level school offering primary, secondary, and senior secondary education grounded in academic excellence and strong values.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body bg-cream text-charcoal-900 antialiased">
        {children}
      </body>
    </html>
  )
}
