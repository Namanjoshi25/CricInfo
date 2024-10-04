"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
/* import { ModeToggle } from "./ModeToggle"
 */
export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-neutral-900 text-neutral-50 shadow-md dark:bg-neutral-50 dark:text-neutral-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">SportScore</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/scores" className="hover:underline">Live Scores</Link></li>
              <li><Link href="/news" className="hover:underline">News</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
       {/*      <ModeToggle /> */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="px-4 py-2 space-y-2">
            <li><Link href="/" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/scores" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Live Scores</Link></li>
            <li><Link href="/news" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>News</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}