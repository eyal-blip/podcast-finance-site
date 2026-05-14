'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#podcast', label: 'פודקאסט' },
  { href: '#articles', label: 'מאמרים' },
  { href: '#posts', label: 'פוסטים' },
  { href: '#magazine', label: 'מגזין' },
  { href: '#telegram', label: 'טלגראם' },
  { href: '#about', label: 'אודות' },
  { href: '#contact', label: 'צור קשר' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F0F0F]/95 backdrop-blur-md border-b border-[#2A2A2A] shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#C9A84C' }}>
              <span className="text-xs font-bold" style={{ color: '#C9A84C' }}>PF</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-white">פודקאסט פיננסים</div>
              <div className="text-xs" style={{ color: '#C9A84C' }}>podcast.finance</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-md transition-colors duration-150 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/PodcastFinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: '#C9A84C' }}
            >
              ← הצטרף לטלגראם
            </a>
            <a
              href="#contact"
              className="btn-gold text-sm px-4 py-2"
            >
              פגישת ייעוץ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white"
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
        <div className="lg:hidden bg-[#141414] border-t border-[#2A2A2A]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#2A2A2A] mt-3 flex flex-col gap-2">
              <a
                href="https://t.me/PodcastFinance"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm font-medium text-center rounded-md border"
                style={{ color: '#C9A84C', borderColor: '#C9A84C' }}
              >
                הצטרף לטלגראם
              </a>
              <a href="#contact" className="btn-gold text-sm text-center" onClick={() => setMobileOpen(false)}>
                פגישת ייעוץ
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
