'use client'

import { useEffect, useState } from 'react'

interface Post {
  url?: string
  linkUrl?: string
  postUrl?: string
  site?: string
  dateISO?: string
  title?: string
  text?: string
  image?: string | null
}

function isYouTube(url: string) {
  return /youtube\.com|youtu\.be/i.test(url || '')
}

function PostCard({ p }: { p: Post }) {
  const url = p.url || p.linkUrl || p.postUrl || '#'
  const date = p.dateISO ? new Date(p.dateISO).toLocaleDateString('he-IL') : ''
  const isYT = isYouTube(url)

  return (
    <article className="bg-white flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{ border: '1px solid #DDD5C0', borderRadius: '2px' }}>

      {/* Image */}
      {p.image && (
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="block relative overflow-hidden flex-shrink-0"
          style={{ aspectRatio: '16/7' }}>
          <img
            src={p.image}
            alt={p.title || ''}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          {isYT && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.6)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <polygon points="5,3 13,8 5,13" />
                </svg>
              </div>
            </div>
          )}
        </a>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        {/* Source + date */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium truncate max-w-[60%]" style={{ color: '#C9A84C' }}>
            {p.site || 'PodcastFinance'}
          </span>
          {date && <time className="text-[#1C1814]/40">{date}</time>}
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'rgba(201,168,76,0.2)' }} />

        {/* Title */}
        {p.title && (
          <h3 className="font-bold text-sm leading-snug" style={{ color: '#1C1814' }}>
            <a href={url} target="_blank" rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity">
              {p.title}
            </a>
          </h3>
        )}

        {/* Text */}
        {p.text && (
          <p className="text-xs leading-relaxed flex-1 line-clamp-3" style={{ color: 'rgba(28,24,20,0.6)' }}>
            {p.text}
          </p>
        )}

        {/* Link */}
        <a href={url} target="_blank" rel="noopener noreferrer"
          className="mt-auto self-start text-xs tracking-widest pb-0.5 transition-colors"
          style={{ color: '#C9A84C', borderBottom: '1px solid rgba(201,168,76,0.3)' }}>
          {isYT ? 'לצפייה ביוטיוב ←' : 'לעדכון בטלגראם ←'}
        </a>
      </div>
    </article>
  )
}

export default function TelegramPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/.netlify/functions/telegram-feed?limit=18&_ts=' + Date.now())
      .then(r => r.json())
      .then(j => {
        const items = j.items || j || []
        setPosts(items)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      {/* Header */}
      <div className="bg-[#1C1814] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest mb-4 uppercase" style={{ color: '#2AABEE' }}>
            ערוץ טלגראם
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            פודקאסט <span style={{ color: '#2AABEE' }}>פיננסים</span>
          </h1>
          <div className="w-12 h-px mx-auto mb-6" style={{ background: '#2AABEE' }} />
          <p className="text-[#B0A090] text-sm max-w-xl mx-auto leading-relaxed mb-6">
            סקירות שווקים, ניתוחי השקעות ותובנות פיננסיות — ישירות מערוץ הטלגראם
          </p>
          <a
            href="https://t.me/PodcastFinance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white transition-all hover:opacity-90"
            style={{ background: '#2AABEE' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
            </svg>
            הצטרף — @PodcastFinance
          </a>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(6).fill(null).map((_, i) => (
              <div key={i} className="animate-pulse bg-white h-52" style={{ border: '1px solid #DDD5C0' }} />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-sm py-8" style={{ color: 'rgba(28,24,20,0.4)' }}>
            לא ניתן לטעון עדכונים כרגע —{' '}
            <a href="https://t.me/PodcastFinance" target="_blank" rel="noopener noreferrer" style={{ color: '#2AABEE' }}>
              עברו לטלגראם ישירות
            </a>
          </p>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((p, i) => (
              <PostCard key={i} p={p} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://t.me/PodcastFinance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
            style={{ background: '#2AABEE' }}
          >
            לכל העדכונים בטלגראם ←
          </a>
        </div>
      </div>
    </div>
  )
}
