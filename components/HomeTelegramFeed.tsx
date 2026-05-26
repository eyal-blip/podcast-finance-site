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

export default function HomeTelegramFeed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/.netlify/functions/telegram-feed?limit=6&_ts=' + Date.now())
      .then(r => r.json())
      .then(j => { setPosts((j.items || j || []).slice(0, 6)); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="flex flex-col gap-1.5 p-3">
      {Array(6).fill(null).map((_, i) => (
        <div key={i} className="animate-pulse h-8 rounded" style={{ background: 'rgba(134,140,149,0.1)' }} />
      ))}
    </div>
  )

  if (!posts.length) return (
    <div className="flex items-center justify-center h-full">
      <a href="https://t.me/PodcastFinance" target="_blank" rel="noopener noreferrer"
        className="text-xs text-[#2AABEE]">עברו לטלגראם ישירות ←</a>
    </div>
  )

  return (
    <div className="flex flex-col divide-y divide-[#DDD5C0] overflow-hidden h-full">
      {posts.map((p, i) => {
        const url = p.url || p.linkUrl || p.postUrl || '#'
        const date = p.dateISO ? new Date(p.dateISO).toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric' }) : ''
        const text = p.title || p.text || ''
        return (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer"
            className="flex items-start gap-2 px-3 py-2 hover:bg-[#F0F4FF] transition-colors group flex-1 min-h-0">
            <span className="text-[10px] text-[#2AABEE] mt-0.5 flex-shrink-0 font-bold">✈</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#1E3651] font-medium leading-tight line-clamp-2 group-hover:text-[#2AABEE] transition-colors">
                {text}
              </p>
              {date && <span className="text-[10px] text-[#8C7B65]">{p.site || 'PodcastFinance'} · {date}</span>}
            </div>
          </a>
        )
      })}
    </div>
  )
}
