'use client'

import { useEffect, useState } from 'react'

interface Video {
  videoId?: string
  title?: string
  text?: string
  url?: string
  image?: string | null
  dateISO?: string
  site?: string
}

function VideoCard({ v }: { v: Video }) {
  const url = v.url || '#'
  const date = v.dateISO ? new Date(v.dateISO).toLocaleDateString('he-IL') : ''

  return (
    <article
      className="bg-white flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{ border: '1px solid #DDD5C0', borderRadius: '2px' }}
    >
      {/* Thumbnail */}
      {v.image && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden flex-shrink-0"
          style={{ aspectRatio: '16/9' }}
        >
          <img
            src={v.image}
            alt={v.title || ''}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(0,0,0,0.6)' }}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="white">
                <polygon points="5,3 13,8 5,13" />
              </svg>
            </div>
          </div>
        </a>
      )}

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        {/* Source + date */}
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium truncate max-w-[60%]" style={{ color: '#C9A84C' }}>
            {v.site || 'פיננסים YouTube'}
          </span>
          {date && <time style={{ color: 'rgba(28,24,20,0.4)' }}>{date}</time>}
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'rgba(201,168,76,0.2)' }} />

        {/* Title */}
        {v.title && (
          <h3 className="font-bold text-sm leading-snug" style={{ color: '#1C1814' }}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              {v.title}
            </a>
          </h3>
        )}

        {/* Description */}
        {v.text && (
          <p
            className="text-xs leading-relaxed flex-1 line-clamp-3"
            style={{ color: 'rgba(28,24,20,0.6)' }}
          >
            {v.text}
          </p>
        )}

        {/* Link */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto self-start text-xs tracking-widest pb-0.5 transition-colors"
          style={{ color: '#C9A84C', borderBottom: '1px solid rgba(201,168,76,0.3)' }}
        >
          לצפייה ביוטיוב ←
        </a>
      </div>
    </article>
  )
}

export default function PodcastPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/.netlify/functions/youtube-feed?limit=20&_ts=' + Date.now())
      .then(r => r.json())
      .then(j => {
        setVideos(j.items || [])
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
          <p className="text-xs tracking-widest mb-4 uppercase" style={{ color: '#C9A84C' }}>
            ערוץ YouTube
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">פודקאסט פיננסים</h1>
          <div className="w-12 h-px mx-auto mb-6" style={{ background: '#C9A84C' }} />
          <p className="text-[#B0A090] text-sm max-w-xl mx-auto leading-relaxed mb-6">
            סקירות שווקים, ניתוחי השקעות ותובנות פיננסיות — זמינים לצפייה ולהאזנה
          </p>
          <a
            href="https://www.youtube.com/@financeinst"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', color: '#1C1814' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            הרשמה לערוץ — @financeinst
          </a>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(6).fill(null).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-white h-64"
                style={{ border: '1px solid #DDD5C0' }}
              />
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-sm py-8" style={{ color: 'rgba(28,24,20,0.4)' }}>
            לא ניתן לטעון סרטונים כרגע —{' '}
            <a
              href="https://www.youtube.com/@financeinst"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#C9A84C' }}
            >
              עברו לערוץ ישירות
            </a>
          </p>
        )}

        {!loading && !error && videos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((v, i) => (
              <VideoCard key={v.videoId || i} v={v} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@financeinst"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', color: '#1C1814' }}
          >
            לכל הסרטונים בערוץ YouTube ←
          </a>
        </div>
      </div>
    </div>
  )
}
