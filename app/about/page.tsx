import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'אודות | podcast.finance',
  description: 'פיננסים ניהול הון פרטי — Family Office וייעוץ השקעות מתקדם',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      <div className="bg-[#1E3651] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm" style={{ borderColor: 'rgba(134,140,149,0.4)', color: '#A8AEB8', background: 'rgba(134,140,149,0.08)' }}>
            ◇ אודות
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span style={{ background: 'linear-gradient(135deg, #868C95 0%, #A8AEB8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              פיננסים
            </span>{' '}ניהול הון פרטי
          </h1>
          <p className="text-[#B0A090] text-lg">Family Office | ייעוץ השקעות | ייעוץ פנסיוני</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder for about text */}
        <div className="card-ivory rounded-2xl p-10 shadow-sm text-center">
          <div className="text-5xl mb-6" style={{ color: '#868C95' }}>◇</div>
          <h2 className="text-2xl font-bold text-[#1E3651] mb-4">טקסט אודות בקרוב</h2>
          <p className="text-[#5A4F3F] leading-relaxed mb-8 max-w-xl mx-auto">
            עמוד האודות ייבנה עם התוכן שתספק. בינתיים, ניתן לקרוא אודות החברה באתר הראשי.
          </p>
          <a
            href="https://nihulhon.co.il/about"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-8 py-3 inline-flex justify-center"
          >
            לאתר הראשי — nihulhon.co.il ←
          </a>
        </div>
      </div>
    </div>
  )
}
