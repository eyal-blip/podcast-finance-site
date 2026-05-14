import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מגזין הבנקאות הפרטית | podcast.finance',
  description: 'מגזין רבעוני ללקוחות בנקאות פרטית של כל הבנקים — ללא תשלום',
}

const issues = [
  {
    slug: '01-2026',
    label: 'ינואר 2026',
    num: '01',
    year: '2026',
    season: 'חורף 2026',
    href: 'https://finansim-magazin.vercel.app/issue/01-2026',
    cover: 'https://finansim-magazin.vercel.app/covers/01-2026.jpg',
    isCurrent: true,
    description: 'סקירת שוקי ההון לשנת 2026, ניהול עושר בעידן הסיכונים, מדורי תרבות ואיכות חיים.',
  },
  {
    slug: '03-2025',
    label: 'ספטמבר 2025',
    num: '03',
    year: '2025',
    season: 'סתיו 2025',
    href: 'https://finansim-magazin.vercel.app/issue/03-2025',
    cover: 'https://finansim-magazin.vercel.app/covers/03-2025.jpg',
    isCurrent: false,
    description: 'סקירת שוק ההון הישראלי, נדל"ן והשקעות אלטרנטיביות.',
  },
  {
    slug: '02-2025',
    label: 'יוני 2025',
    num: '02',
    year: '2025',
    season: 'קיץ 2025',
    href: 'https://finansim-magazin.vercel.app/issue/02-2025',
    cover: 'https://finansim-magazin.vercel.app/covers/02-2025.jpg',
    isCurrent: false,
    description: 'ניהול הון בעידן הריבית הגבוהה, תכנון פרישה ועוד.',
  },
  {
    slug: '01-2025',
    label: 'מרץ 2025',
    num: '01',
    year: '2025',
    season: 'אביב 2025',
    href: 'https://finansim-magazin.vercel.app/issue/01-2025',
    cover: 'https://finansim-magazin.vercel.app/covers/01-2025.jpg',
    isCurrent: false,
    description: 'בנקאות פרטית גלובלית, חשבונות השקעה בחו"ל ועוד.',
  },
  {
    slug: '04-2024',
    label: 'ינואר 2025',
    num: '04',
    year: '2024',
    season: 'חורף 2025',
    href: 'https://finansim-magazin.vercel.app/issue/04-2024',
    cover: 'https://finansim-magazin.vercel.app/covers/04-2024.jpg',
    isCurrent: false,
    description: 'סקירת 2024, תחזיות לשנת 2025 ואסטרטגיות השקעה.',
  },
  {
    slug: '03-2024',
    label: 'ספטמבר 2024',
    num: '03',
    year: '2024',
    season: 'סתיו 2024',
    href: 'https://finansim-magazin.vercel.app/issue/03-2024',
    cover: 'https://finansim-magazin.vercel.app/covers/03-2024.jpg',
    isCurrent: false,
    description: 'ניהול סיכונים בתקופת אי-ודאות, קרנות גידור ועוד.',
  },
  {
    slug: '02-2024',
    label: 'יוני 2024',
    num: '02',
    year: '2024',
    season: 'קיץ 2024',
    href: 'https://finansim-magazin.vercel.app/issue/02-2024',
    cover: 'https://finansim-magazin.vercel.app/covers/02-2024.jpg',
    isCurrent: false,
    description: 'השקעות בינלאומיות, פיזור תיק ומה שחשוב לדעת על חשיפה למטבע חוץ.',
  },
  {
    slug: '01-2024',
    label: 'מרץ 2024',
    num: '01',
    year: '2024',
    season: 'אביב 2024',
    href: 'https://finansim-magazin.vercel.app/issue/01-2024',
    cover: 'https://finansim-magazin.vercel.app/covers/01-2024.jpg',
    isCurrent: false,
    description: 'שוק האג"ח הישראלי לאחר המלחמה, תכנון מס ואסטרטגיות לשנת 2024.',
  },
]

function MagazineCover({ issue }: { issue: typeof issues[0] }) {
  return (
    <div className="relative w-full h-full bg-[#1C1814] overflow-hidden">
      {/* Try to load actual cover image */}
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

export default function MagazinePage() {
  const currentIssue = issues.find(i => i.isCurrent)!
  const archiveIssues = issues.filter(i => !i.isCurrent)

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
              {/* Cover */}
              <div className="relative h-72 md:h-auto" style={{ minHeight: '320px' }}>
                <MagazineCover issue={currentIssue} />
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 text-xs font-bold rounded-full"
                  style={{ background: 'rgba(201,168,76,0.9)', color: '#1C1814' }}
                >
                  גיליון נוכחי
                </div>
              </div>
              {/* Info */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#1C1814] mb-3">גיליון {currentIssue.label}</h3>
                  <p className="text-[#5A4F3F] leading-relaxed mb-6">
                    תכנים פיננסיים אקטואליים, סקירת שוקי ההון לשנת 2026, ניתוחי השקעות, מדורי תרבות, פנאי ואיכות חיים — ללקוחות הבנקאות הפרטית של כל הבנקים.
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
                  href={currentIssue.href}
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
            <span style={{ color: '#C9A84C' }}>◇</span> ארכיון גיליונות
            <span className="text-sm font-normal text-[#8C7B65]">({archiveIssues.length} גיליונות)</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {archiveIssues.map((issue) => (
              <a
                key={issue.slug}
                href={issue.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                {/* Cover thumbnail */}
                <div className="relative rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow mb-3"
                  style={{ aspectRatio: '3/4' }}>
                  <MagazineCover issue={issue} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-0 inset-x-0 p-2 text-center"
                    style={{ background: 'linear-gradient(to top, rgba(28,24,20,0.9) 0%, transparent 100%)' }}>
                    <div className="text-white text-xs font-semibold">{issue.label}</div>
                    <div className="text-[#C9A84C] text-xs opacity-80">{issue.season}</div>
                  </div>
                </div>
                {/* Read link */}
                <div className="text-xs font-medium text-center transition-colors" style={{ color: '#C9A84C' }}>
                  לצפייה ←
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
