import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CreatorConnect - Sponsorship Platform',
  description: 'Connect content creators with companies for sponsorships and brand deals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 