'use client'

interface Issue {
  slug: string
  label: string
  num: string
  year: string
  season: string
  cover: string
}

export function MagazineCover({ issue }: { issue: Issue }) {
  return (
    <div className="relative w-full h-full bg-[#1C1814] overflow-hidden">
      <img
        src={issue.cover}
        alt={`מגזין ${issue.label}`}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement
          target.style.display = 'none'
          const fallback = target.nextElementSibling as HTMLElement
          if (fallback) fallback.style.display = 'flex'
        }}
      />
      {/* Fallback cover design */}
      <div
        className="absolute inset-0 items-center justify-center text-center px-4"
        style={{ display: 'none', background: 'linear-gradient(160deg, #1C1814 0%, #2E2416 60%, #1C1814 100%)' }}
      >
        <div>
          <div className="text-xs font-semibold tracking-widest mb-2 opacity-70" style={{ color: '#C9A84C' }}>
            מגזין הבנקאות הפרטית
          </div>
          <div
            className="text-4xl font-black leading-none"
            style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            {issue.num}
          </div>
          <div className="text-2xl font-bold text-white mt-1">{issue.year}</div>
          <div className="text-xs mt-3 opacity-50" style={{ color: '#C9A84C' }}>{issue.season}</div>
        </div>
      </div>
    </div>
  )
}
