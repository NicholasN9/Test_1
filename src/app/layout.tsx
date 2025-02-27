import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './providers'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SocialSync - Anime Content Manager',
  description: 'Professional anime content management and scheduling platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${notoSansJP.className} dark:bg-gray-900 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 min-h-screen`}>
        <ThemeProvider>
          <div className="relative">
            {/* Decorative background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full rotate-12 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 rounded-full transform scale-150"></div>
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-900 dark:to-blue-900 rounded-full blur-3xl"></div>
            </div>
            <Navigation />
            <div className="pt-16 relative z-10">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
