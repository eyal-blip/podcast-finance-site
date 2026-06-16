'use client'

import { useEffect, useState } from 'react'
import { posts } from '@/lib/posts'

type BoxKey = 'posts' | 'telegram' | 'family' | 'map'

const BOXES: { key: BoxKey; v: string; l: string }[] = [
  { key: 'posts', v: '144+', l: 'פוסטים מקוריים' },
  { key: 'telegram', v: 'מתעדכן', l: 'ערוץ מאמרים שוטף' },
  { key: 'family', v: 'Family', l: 'Office לבעלי הון' },
  { key: 'map', v: 'בלעדי', l: 'פיננסים פנסיוני נט' },
]

const LEADERS = [
  { name: 'ד"ר איתי גלילי', role: 'מנכ"ל', initials: 'אג' },
  { name: 'מיכל יוזפסון', role: 'מנהלת השקעות ראשית', initials: 'מי' },
]

type TgItem = { title?: string; text?: string; url?: string; image?: string | null; dateISO?: string }

function PanelShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-black mb-4" style={{ color: '#1B3A28' }}>{title}</p>
      {children}
    </div>
  )
}

function PostsPanel() {
  const recent = posts.slice(0, 4)
  return (
    <PanelShell title="פוסטים אחרונים">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {recent.map(p => (
          <div key={p.title} className="bg-white rounded-xl p-4 border text-right flex flex-col" style={{ borderColor: '#BACEC4' }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(134,140,149,0.12)', color: '#4A7A5A' }}>{p.category}</span>
              <span className="text-[10px]" style={{ color: '#62806A' }}>{p.date}</span>
            </div>
            <h4 className="font-bold text-xs leading-snug mb-1" style={{ color: '#1B3A28' }}>{p.title}</h4>
            <p className="text-[11px] leading-relaxed flex-1" style={{ color: '#62806A' }}>{p.excerpt}</p>
            <span className="text-[11px] font-medium mt-2" style={{ color: '#28402E' }}>{p.author}</span>
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

function TelegramPanel() {
  const [items, setItems] = useState<TgItem[] | null>(null)
  useEffect(() => {
    let alive = true
    fetch('/.netlify/functions/telegram-feed?limit=8')
      .then(r => r.json())
      .then(d => { if (alive) setItems(Array.isArray(d.items) ? d.items.slice(0, 4) : []) })
      .catch(() => { if (alive) setItems([]) })
    return () => { alive = false }
  }, [])

  return (
    <PanelShell title="עדכונים אחרונים מהערוץ">
      {items === null ? (
        <p className="text-sm text-center py-6" style={{ color: '#62806A' }}>טוען עדכונים…</p>
      ) : items.length === 0 ? (
        <p className="text-sm text-center py-6" style={{ color: '#62806A' }}>
          לעדכונים השוטפים: <a href="https://t.me/PodcastFinance" target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: '#2AABEE' }}>ערוץ הטלגרם ←</a>
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#BACEC4' }}>
              {it.image && (
                <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.image} alt={it.title || ''} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              <div className="p-3 flex flex-col flex-1">
                {it.dateISO && <span className="text-[10px] mb-1" style={{ color: '#62806A' }}>{new Date(it.dateISO).toLocaleDateString('he-IL')}</span>}
                <h4 className="font-bold text-xs leading-snug" style={{ color: '#1B3A28' }}>{it.title || 'עדכון'}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </PanelShell>
  )
}

function FamilyPanel() {
  return (
    <PanelShell title="המובילים — פיננסים ניהול הון פרטי">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {LEADERS.map(p => (
          <div key={p.name} className="bg-white rounded-xl p-4 border flex items-center gap-3" style={{ borderColor: '#BACEC4' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm" style={{ background: '#EAF3ED', color: '#1B3A28' }}>{p.initials}</div>
            <div>
              <div className="font-black text-sm" style={{ color: '#1B3A28' }}>{p.name}</div>
              <div className="text-xs" style={{ color: '#62806A' }}>{p.role}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs leading-relaxed mt-3" style={{ color: '#62806A' }}>
        Family Office ויועצי השקעות בכירים, ניסיון של עשרות שנים בשווקי ההון הישראלי והגלובלי — אותה רמת ייעוץ שמקבלים בעלי הון גדולים.
      </p>
    </PanelShell>
  )
}

function MapPanel() {
  return (
    <PanelShell title="המפה הפנסיונית — פיננסים פנסיוני נט">
      <div className="rounded-xl overflow-hidden border bg-white" style={{ borderColor: '#BACEC4' }}>
        <iframe
          src="https://gemel-net.netlify.app/map"
          title="המפה הפנסיונית"
          className="w-full"
          style={{ height: 440, border: 'none' }}
          loading="lazy"
        />
      </div>
      <p className="text-center mt-3">
        <a href="https://gemel-net.netlify.app/map" target="_blank" rel="noopener noreferrer" className="text-xs font-bold" style={{ color: '#4A7A5A' }}>
          פתיחת המפה המלאה ←
        </a>
      </p>
    </PanelShell>
  )
}

export default function TrustStrip() {
  const [active, setActive] = useState<BoxKey | null>(null)

  return (
    <section className="py-10 border-t border-b" style={{ background: '#fff', borderColor: '#BACEC4' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-sm font-bold mb-6" style={{ color: '#1B3A28' }}>
          פיננסים — ניהול הון פרטי · ניסיון של עשרות שנים בשווקי ההון
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {BOXES.map(b => {
            const isOpen = active === b.key
            return (
              <button
                key={b.key}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setActive(isOpen ? null : b.key)}
                className="text-center p-4 rounded-xl transition-all duration-150 border"
                style={{
                  background: isOpen ? '#fff' : '#EAF3ED',
                  borderColor: isOpen ? '#5A9A72' : 'transparent',
                  boxShadow: isOpen ? '0 2px 10px rgba(90,154,114,0.18)' : 'none',
                }}
              >
                <div className="text-lg font-black" style={{ color: '#1B3A28' }}>{b.v}</div>
                <div className="text-xs" style={{ color: '#62806A' }}>{b.l}</div>
                <div className="text-[10px] font-semibold mt-1" style={{ color: isOpen ? '#5A9A72' : '#9CB3A4' }}>
                  {isOpen ? 'סגירה ↑' : 'לחצו להרחבה ↓'}
                </div>
              </button>
            )
          })}
        </div>

        {active && (
          <div className="mt-5 rounded-2xl p-4 sm:p-6" style={{ background: '#F4F8F5', border: '1px solid #BACEC4' }}>
            {active === 'posts' && <PostsPanel />}
            {active === 'telegram' && <TelegramPanel />}
            {active === 'family' && <FamilyPanel />}
            {active === 'map' && <MapPanel />}
          </div>
        )}
      </div>
    </section>
  )
}
