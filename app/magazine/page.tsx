import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מגזין הבנקאות הפרטית | podcast.finance',
  description: 'מגזין רבעוני ללקוחות בנקאות פרטית של כל הבנקים — ללא תשלום',
}

export default function MagazinePage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      {/* Header */}
      <div className="bg-[#1E3651] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest mb-4 uppercase" style={{ color: '#868C95' }}>
            בנקאות פרטית
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">מגזין הבנקאות הפרטית</h1>
          <div className="w-12 h-px mx-auto mb-6" style={{ background: '#868C95' }} />
          <p className="text-[#B0A090] text-sm max-w-xl mx-auto leading-relaxed">
            מגזין רבעוני המופץ ללקוחות הבנקאות הפרטית של כל הבנקים —
            תכנים פיננסיים אקטואליים, מדורי תרבות, פנאי ואיכות חיים.
          </p>
        </div>
      </div>

      {/* Magazine embed */}
      <div style={{ padding: 0, background: '#f5f0e8' }}>
        <div style={{ width: '100%', height: '90vh', minHeight: '680px' }}>
          <iframe
            src="https://finansim-magazin.vercel.app"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
            allowFullScreen
            loading="lazy"
            title="מגזין הבנקאות הפרטית — כל הגיליונות"
          />
        </div>
      </div>
    </div>
  )
}
