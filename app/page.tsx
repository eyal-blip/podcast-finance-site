import Link from 'next/link'

const sections = [
  {
    href: '/podcast',
    icon: '▶',
    title: 'פודקאסט YouTube',
    description: 'פרקים מקוריים של פודקאסט פיננסים — דיונים עם מומחים על שוקי הון, בנקאות פרטית וניהול הון.',
    badge: 'ערוץ @financeinst',
    color: '#868C95',
    bg: '#FFFBF0',
  },
  {
    href: '/telegram',
    icon: '✈',
    title: 'ערוץ טלגראם',
    description: 'עדכונים שוטפים, כתבות נבחרות ותכנים פיננסיים מרוכזים — ישירות לטלפון שלך.',
    badge: '@PodcastFinance',
    color: '#2AABEE',
    bg: '#F0F8FF',
  },
  {
    href: '/articles',
    icon: '◉',
    title: 'מאמרים עדכניים',
    description: 'תכנים נבחרים מגופי המחקר ומדיה המובילים — רשות ניירות ערך, כנסת, אוצר ועוד.',
    badge: 'עדכון שוטף',
    color: '#5A8F3C',
    bg: '#F2F8EE',
  },
  {
    href: '/posts',
    icon: '◈',
    title: 'פוסטים',
    description: '144+ פוסטים מקוריים של מומחי פיננסים ניהול הון פרטי — ניתוחים, סקירות ודעות.',
    badge: '144+ פוסטים',
    color: '#868C95',
    bg: '#FFFBF0',
  },
  {
    href: '/magazine',
    icon: '◆',
    title: 'מגזין הבנקאות הפרטית',
    description: 'מגזין רבעוני ללקוחות בנקאות פרטית — תכנים פיננסיים, תרבות ואיכות חיים. ללא תשלום.',
    badge: 'רבעוני',
    color: '#9B5E2A',
    bg: '#FFF5EE',
  },
  {
    href: '/about',
    icon: '◇',
    title: 'אודות',
    description: 'פיננסים ניהול הון פרטי — Family Office ויעוץ השקעות מתקדם לאנשים ומשפחות עם הון גבוה.',
    badge: 'Family Office',
    color: '#6B5A8A',
    bg: '#F5F0FF',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1E3651] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(134,140,149,0.5) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(134,140,149,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(134,140,149,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center gap-8">
          {/* Logo — ימין ב-RTL */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="פיננסים — ניהול הון פרטי"
            className="h-24 md:h-32 w-auto object-contain flex-shrink-0 rounded-2xl"
          />
          {/* Content — ממורכז בחלל השמאלי */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                פודקאסט פיננסים
              </h1>
              <p className="text-[#B0A090] text-sm leading-relaxed max-w-lg">
                תכנים פיננסיים מקצועיים ללקוחות הבנקאות הפרטית של כל הבנקים
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/podcast" className="btn-gold text-sm px-5 py-2.5 justify-center">
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  לפודקאסט
                </Link>
                <Link href="/contact" className="btn-outline-gold text-sm px-5 py-2.5 justify-center !border-[#868C95] !text-[#A8AEB8] hover:!text-white">
                  פגישת ייעוץ ←
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 bg-[#F8F3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1E3651] mb-3">כל מה שיש באתר</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((sec) => (
              <Link
                key={sec.href}
                href={sec.href}
                className="group card-ivory p-6 rounded-xl hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
                style={{ background: sec.bg }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold" style={{ color: sec.color }}>{sec.icon}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${sec.color}18`, color: sec.color }}
                  >
                    {sec.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1E3651] mb-2 group-hover:text-[#6A7280] transition-colors">
                  {sec.title}
                </h3>
                <p className="text-[#5A4F3F] text-sm leading-relaxed flex-1">{sec.description}</p>
                <div className="mt-4 text-sm font-medium flex items-center gap-1" style={{ color: sec.color }}>
                  לעמוד <span>←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-y border-[#DDD5C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '144+', label: 'פוסטים מקוריים' },
              { value: '4×', label: 'גיליונות מגזין בשנה' },
              { value: '2', label: 'ניוזלטרים חודשיים' },
              { value: '∞', label: 'פרקי פודקאסט' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-4xl font-black mb-1"
                  style={{ background: 'linear-gradient(135deg, #6A7280 0%, #868C95 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-[#8C7B65]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#1E3651] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">פגישת ייעוץ ראשונית ללא התחייבות</h2>
          <p className="text-[#B0A090] mb-8">יועץ השקעות בכיר ממתין לכם — במשרדנו ברמת אפעל, רמת גן</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4 justify-center">
              לתיאום פגישה ←
            </Link>
            <a
              href="https://t.me/PodcastFinance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-base px-8 py-4 justify-center !border-[#868C95] !text-[#A8AEB8] hover:!text-white"
            >
              הצטרף לטלגראם
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
