'use client'

import { useState } from 'react'

export default function HomeMapEmbed() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="relative flex-1 overflow-hidden" style={{ minHeight: 0 }}>
      <iframe
        src="https://gemel-net.netlify.app/map"
        title="מפת המוצרים הפנסיוניים"
        className="absolute left-0 right-0 w-full border-0"
        style={{
          top: showFilters ? '0px' : '-290px',
          height: showFilters ? '100%' : 'calc(100% + 290px)',
          transition: 'top 0.35s ease, height 0.35s ease',
        }}
        loading="lazy"
      />

      {/* Toggle pill — bottom-center */}
      <button
        onClick={() => setShowFilters(v => !v)}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold text-white transition-all hover:opacity-90 active:scale-95"
        style={{ background: 'rgba(27,58,40,0.85)', backdropFilter: 'blur(4px)', border: '1px solid rgba(90,160,110,0.4)' }}
      >
        {showFilters ? (
          <>מסנני מפה <span>↑</span></>
        ) : (
          <>מסנני מפה <span>↓</span></>
        )}
      </button>
    </div>
  )
}
