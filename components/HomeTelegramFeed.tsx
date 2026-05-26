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

function MiniCard({ p }: { p: Post }) {
  const url = p.url || p.linkUrl || p.postUrl || '#'
  const date = p.dateISO ? new Date(p.dateISO).toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric' }) : ''
  const title = p.title || ''
  const text = p.text || ''
  const display = title || text

  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="flex flex-col p-2 group transition-colors overflow-hidden"
      style={{ borderBottom: '1px solid #BACEC4', borderLeft: '1px solid #BACEC4', background: '#EBF5EE' }}>

      {/* Source + date */}
      <div className="flex items-center justify-between mb-1 flex-shrink-0">
        <span className="text-[8px] font-bold truncate" style={{ color: '#2AABEE' }}>
          {p.site || 'PodcastFinance'}
        </span>
        {date && <time className="text-[8px] flex-shrink-0" style={{ color: '#62806A' }}>{date}</time>}
      </div>

      {/* Title — bold */}
      {title && (
        <p className="text-[10px] font-bold leading-snug mb-1 group-hover:text-[#2A5C3A] transition-colors flex-shrink-0"
          style={{ color: '#1B3A28', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>
          {title}
        </p>
      )}

      {/* Text body — fills space */}
      {text && (
        <p className="text-[9px] leading-relaxed flex-1 overflow-hidden"
          style={{ color: '#3A6050', display: '-webkit-box', WebkitLineClamp: title ? 5 : 8, WebkitBoxOrient: 'vertical' as const }}>
          {text}
        </p>
      )}

      {/* If no title, show display text large */}
      {!title && !text && (
        <p className="text-[9px] leading-relaxed flex-1" style={{ color: '#62806A' }}>
          {display}
        </p>
      )}
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
    <div className="grid grid-cols-3 h-full" style={{ gridTemplateRows: 'repeat(3, 1fr)' }}>
      {Array(9).fill(null).map((_, i) => (
        <div key={i} className="animate-pulse" style={{ background: '#E4F0E8', borderBottom: '1px solid #BACEC4', borderLeft: '1px solid #BACEC4' }} />
      ))}
    </div>
  )

  if (!posts.length) return (
    <div className="flex flex-col items-center justify-center h-full gap-3 p-6" style={{ background: '#EBF5EE' }}>
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
