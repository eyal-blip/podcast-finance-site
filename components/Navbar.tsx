'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/podcast', label: 'פודקאסט YouTube' },
  { href: '/telegram', label: 'ערוץ טלגראם' },
  { href: '/articles', label: 'מאמרים' },
  { href: '/posts', label: 'פוסטים' },
  { href: '/magazine', label: 'מגזין' },
  { href: '/about', label: 'אודות' },
  { href: '/contact', label: 'צור קשר' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F3E8]/95 backdrop-blur-md border-b border-[#DDD5C0] shadow-sm'
          : 'bg-[#F8F3E8]/90 backdrop-blur-sm border-b border-[#DDD5C0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="leading-tight">
              <div className="text-sm font-bold text-[#1E3651]">פודקאסט פיננסים</div>
              <div className="text-xs font-medium" style={{ color: '#868C95' }}>podcast.finance</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                  pathname === link.href
                    ? 'text-[#6A7280] bg-[#868C95]/10'
                    : 'text-[#5A4F3F] hover:text-[#1E3651] hover:bg-[#868C95]/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/PodcastFinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: '#6A7280' }}
            >
              ← הצטרף לטלגראם
            </a>
            <Link href="/contact" className="btn-gold text-sm px-4 py-2">
              פגישת ייעוץ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-[#5A4F3F] hover:text-[#1E3651]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="תפריט"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F8F3E8] border-t border-[#DDD5C0]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href ? 'text-[#6A7280] bg-[#868C95]/10' : 'text-[#5A4F3F]'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#DDD5C0] mt-3 flex flex-col gap-2">
              <a
                href="https://t.me/PodcastFinance"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm font-medium text-center rounded-md border-2"
                style={{ color: '#6A7280', borderColor: '#868C95' }}
              >
                הצטרף לטלגראם
              </a>
              <Link href="/contact" className="btn-gold text-sm text-center" onClick={() => setMobileOpen(false)}>
                פגישת ייעוץ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
