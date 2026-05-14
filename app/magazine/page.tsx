import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'מגזין הבנקאות הפרטית | podcast.finance',
  description: 'מגזין רבעוני ללקוחות בנקאות פרטית של כל הבנקים — ללא תשלום',
}

const issues = [
  { label: 'ינואר 2026', season: 'חורף 2026', href: 'https://finansim-magazin.vercel.app/issue/01-2026', isCurrent: true, description: 'תכנים פיננסיים, סקירת שווקים לשנת 2026, מדורי תרבות ואיכות חיים.' },
  { label: 'ספטמבר 2025', season: 'סתיו 2025', href: 'https://nihulhon.co.il/magazines/', isCurrent: false, description: 'סקירת שוק ההון הישראלי, נדל"ן והשקעות אלטרנטיביות.' },
  { label: 'יוני 2025', season: 'קיץ 2025', href: 'https://nihulhon.co.il/magazines/', isCurrent: false, description: 'ניהול הון בעידן הריבית הגבוהה, תכנון פרישה ועוד.' },
  { label: 'מרץ 2025', season: 'אביב 2025', href: 'https://nihulhon.co.il/magazines/', isCurrent: false, description: 'בנקאות פרטית גלובלית, חשבונות השקעה בחו"ל ועוד.' },
  { label: 'ינואר 2025', season: 'חורף 2025', href: 'https://nihulhon.co.il/magazines/', isCurrent: false, description: 'סקירת 2024, תחזיות לשנת 2025 ואסטרטגיות השקעה.' },
  { label: 'ספטמבר 2024', season: 'סתיו 2024', href: 'https://nihulhon.co.il/magazines/', isCurrent: false, description: 'ניהול סיכונים בתקופת אי-ודאות, קרנות גידור ועוד.' },
]

export default function MagazinePage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      {/* Header */}
      <div className="bg-[#1C1814] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#E2C97E', background: 'rgba(201,168,76,0.08)' }}>
            ◆ מגזין רבעוני
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            מגזין{' '}
            <span style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              הבנקאות הפרטית
            </span>
          </h1>
          <p className="text-[#B0A090] text-lg max-w-xl mx-auto">
            מגזין רבעוני ללקוחות בנקאות פרטית של כל הבנקים — תכנים פיננסיים, תרבות ואיכות חיים. ללא תשלום.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Current Issue — Featured */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1814] mb-6 flex items-center gap-2">
            <span style={{ color: '#C9A84C' }}>◆</span> הגיליון האחרון
          </h2>
          <div className="card-ivory rounded-2xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="h-64 md:h-auto flex items-center justify-center relative"
                style={{ background: 'linear-gradient(135deg, #1C1814 0%, #2A2018 100%)', minHeight: '280px' }}
              >
                <div className="text-center px-8">
                  <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C9A84C' }}>
                    מגזין הבנקאות הפרטית
                  </div>
                  <div
                    className="text-5xl font-black mb-2"
                    style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    ינואר
                  </div>
                  <div className="text-3xl font-bold text-white">2026</div>
                  <div className="mt-4 text-xs text-[#8C7B65]">חורף 2026</div>
                </div>
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 text-xs font-bold rounded-full"
                  style={{ background: 'rgba(201,168,76,0.2)', color: '#E2C97E' }}
                >
                  גיליון נוכחי
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#1C1814] mb-3">גיליון ינואר 2026</h3>
                  <p className="text-[#5A4F3F] leading-relaxed mb-6">
                    תכנים פיננסיים אקטואליים, סקירת שוקי ההון לשנת 2026, ניתוחי השקעות, מדורי תרבות, פנאי ואיכות חיים — לקוחות הבנקאות הפרטית של כל הבנקים.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['סקירת שווקים לשנת 2026', 'ניהול עושר בעידן הסיכונים', 'מגזין תרבות ופנאי', 'ניתוחי השקעות אקטואליים'].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#5A4F3F]">
                        <span style={{ color: '#C9A84C' }}>◈</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://finansim-magazin.vercel.app/issue/01-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-base px-8 py-3 justify-center"
                >
                  לצפייה בגיליון ←
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Archive */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-[#1C1814] mb-6 flex items-center gap-2">
            <span style={{ color: '#C9A84C' }}>◇</span> ארכיון הגיליונות
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue) => (
              <a
                key={issue.label}
                href={issue.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-ivory rounded-xl group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
              >
                <div
                  className="h-36 flex items-center justify-center relative"
                  style={{ background: 'linear-gradient(135deg, #1C1814 0%, #2A2018 100%)' }}
                >
                  <div className="text-center">
                    <div
                      className="text-2xl font-black"
                      style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    >
                      {issue.label}
                    </div>
                    <div className="text-xs text-[#8C7B65] mt-1">{issue.season}</div>
                  </div>
                  {issue.isCurrent && (
                    <div className="absolute top-2 right-2 px-2 py-0.5 text-xs font-bold rounded" style={{ background: 'rgba(201,168,76,0.3)', color: '#E2C97E' }}>
                      נוכחי
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#5A4F3F] leading-relaxed mb-3 line-clamp-2">{issue.description}</p>
                  <span className="text-xs font-medium" style={{ color: '#C9A84C' }}>לצפייה ←</span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://nihulhon.co.il/magazines/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-sm px-8 py-3">
              לכל הגיליונות ←
            </a>
          </div>
        </div>

        {/* Subscribe */}
        <div
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(255,251,240,0.8) 100%)', border: '1px solid rgba(201,168,76,0.3)' }}
        >
          <div className="text-3xl mb-4" style={{ color: '#C9A84C' }}>◆</div>
          <h3 className="text-2xl font-bold text-[#1C1814] mb-3">הרשמה למגזין — חינם</h3>
          <p className="text-[#5A4F3F] mb-6 max-w-lg mx-auto">
            ללקוחות בנקאות פרטית של כל הבנקים — ארבעה גיליונות בשנה, ישירות לתיבת הדואר שלך.
          </p>
          <a
            href="https://nihulhon.co.il/magazines/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-10 py-4 inline-flex justify-center"
          >
            הרשמה למגזין ←
          </a>
        </div>
      </div>
    </div>
  )
}
