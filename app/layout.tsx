import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/sidebar/sidebar'
import GlobalStyleProvider from './providers/GlobalStylesProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mitodu',
  description: 'Mitodu task manager',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyleProvider>
          <Sidebar />
          {children}
        </GlobalStyleProvider>
      </body>
    </html>
  )
}
