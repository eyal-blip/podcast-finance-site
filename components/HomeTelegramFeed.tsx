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

function MiniCard({ p }: { p: Post }) {
  const url = p.url || p.linkUrl || p.postUrl || '#'
  const date = p.dateISO ? new Date(p.dateISO).toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric' }) : ''
  const isYT = isYouTube(url)
  const title = p.title || ''
  const text = p.text || ''

  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="flex flex-col overflow-hidden hover:bg-[#EBF4EE] transition-colors group"
      style={{ borderBottom: '1px solid #BACEC4' }}>
      {p.image && (
        <div className="relative flex-shrink-0 overflow-hidden" style={{ aspectRatio: '16/5' }}>
          <img src={p.image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          {isYT && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.6)' }}>
                <svg width="8" height="8" viewBox="0 0 16 16" fill="white"><polygon points="5,3 13,8 5,13" /></svg>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="p-2 flex flex-col gap-1 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-medium truncate" style={{ color: '#2AABEE' }}>
            {p.site || 'PodcastFinance'}
          </span>
          {date && <time className="text-[9px]" style={{ color: '#62806A' }}>{date}</time>}
        </div>
        {title && (
          <p className="text-[11px] font-bold leading-snug line-clamp-2 group-hover:text-[#2A5C3A] transition-colors" style={{ color: '#1B3A28' }}>
            {title}
          </p>
        )}
        {!title && text && (
          <p className="text-[10px] leading-snug line-clamp-3" style={{ color: '#28402E' }}>
            {text}
          </p>
        )}
        {title && text && (
          <p className="text-[9px] leading-snug line-clamp-2" style={{ color: '#62806A' }}>
            {text}
          </p>
        )}
      </div>
    </a>
  )
}

export default function HomeTelegramFeed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/.netlify/functions/telegram-feed?limit=9&_ts=' + Date.now())
      .then(r => r.json())
      .then(j => { setPosts((j.items || j || []).slice(0, 9)); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="grid grid-cols-3 gap-px p-0 h-full">
      {Array(9).fill(null).map((_, i) => (
        <div key={i} className="animate-pulse bg-[#EAF3ED]" style={{ minHeight: '60px' }} />
      ))}
    </div>
  )

  if (!posts.length) return (
    <div className="flex flex-col items-center justify-center h-full gap-3 p-6">
      <span className="text-2xl" style={{ color: '#2AABEE' }}>✈</span>
      <p className="text-sm text-center" style={{ color: '#62806A' }}>לא ניתן לטעון עדכונים</p>
      <a href="https://t.me/PodcastFinance" target="_blank" rel="noopener noreferrer"
        className="text-xs font-semibold" style={{ color: '#2AABEE' }}>
        עברו לטלגראם ישירות ←
      </a>
    </div>
  )

  return (
    <div className="grid grid-cols-3 overflow-hidden h-full" style={{ gridTemplateRows: 'repeat(3, 1fr)' }}>
      {posts.map((p, i) => <MiniCard key={i} p={p} />)}
    </div>
  )
}
