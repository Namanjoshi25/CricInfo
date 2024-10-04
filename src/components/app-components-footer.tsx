"'use client'"

import Link from "'next/link'"

export function FooterComponent() {
  return (
    <footer className="bg-neutral-900 text-neutral-50 mt-8 dark:bg-neutral-50 dark:text-neutral-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Real-Time Sports Platform provides up-to-date scores and news for sports enthusiasts worldwide.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="/scores" className="text-sm hover:underline">Live Scores</Link></li>
              <li><Link href="/news" className="text-sm hover:underline">News</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Email: info@sportsplatform.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Real-Time Sports Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}