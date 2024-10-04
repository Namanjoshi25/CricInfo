"'use client'"

import "'./globals.css'"
import { Inter } from "'next/font/google'"
import Header from "'./components/Header'"
import Footer from "'./components/Footer'"

const inter = Inter({ subsets: ["'latin'"] })

export const metadata = {
  title: "'Real-Time Sports Platform'",
  description: "'Get live scores and latest sports news'",
}

export function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}