'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

// Landing pages (/lp/*) render distraction-free: no nav, no footer, no top padding.
// All other routes get the full site chrome.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const bare = pathname?.startsWith('/lp')

  if (bare) return <main>{children}</main>

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  )
}
