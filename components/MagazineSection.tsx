const issues = [
  {
    label: 'גיליון ינואר 2026',
    description: 'גיליון ינואר 2026 של מגזין הבנקאות הפרטית — תכנים פיננסיים, תרבות ואיכות חיים.',
    href: 'https://finansim-magazin.vercel.app/issue/01-2026',
    badge: 'גיליון אחרון',
    season: 'חורף 2026',
  },
  {
    label: 'כל הגיליונות',
    description: 'ארכיון גיליונות מגזין הבנקאות הפרטית — רבעוני, מופץ ללקוחות הבנקאות הפרטית של כל הבנקים.',
    href: 'https://nihulhon.co.il/magazines/',
    badge: 'ארכיון',
    season: null,
  },
]

export default function MagazineSection() {
  return (
    <section id="magazine" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(134,140,149,0.8) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded"
            style={{ color: '#868C95', background: 'rgba(134,140,149,0.1)' }}
          >
            ◉ מגזין רבעוני
          </div>
          <h2 className="section-title">מגזין הבנקאות הפרטית</h2>
          <p className="section-subtitle">
            מגזין רבעוני המופץ ללקוחות הבנקאות הפרטית של כל הבנקים — ללא תשלום
          </p>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Main magazine card */}
          <div className="card-dark rounded-2xl overflow-hidden group">
            <div
              className="h-64 flex items-center justify-center relative"
              style={{
                background: 'linear-gradient(135deg, #1a1000 0%, #1A1A1A 50%, #0F0F0F 100%)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="text-6xl font-black mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #868C95 0%, #A8AEB8 50%, #6A7280 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    מגזין
                  </div>
                  <div className="text-lg text-gray-400 font-light tracking-widest">
                    הבנקאות הפרטית
                  </div>
                  <div className="mt-4 text-xs" style={{ color: '#868C95' }}>
                    גיליון ינואר 2026
                  </div>
                </div>
              </div>
              <div
                className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded"
                style={{ background: 'rgba(134,140,149,0.2)', color: '#868C95' }}
              >
                גיליון אחרון
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-white text-lg mb-2">גיליון ינואר 2026</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                תכנים פיננסיים אקטואליים, ניתוחי שוק, מדורי תרבות ואיכות חיים — לקוחות הבנקאות הפרטית של כל הבנקים.
              </p>
              <a
                href="https://finansim-magazin.vercel.app/issue/01-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm w-full justify-center"
              >
                לצפייה בגיליון ←
              </a>
            </div>
          </div>

          {/* Subscription card */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, rgba(134,140,149,0.12) 0%, rgba(30,30,20,0.8) 100%)',
              border: '1px solid rgba(134,140,149,0.3)',
            }}
          >
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#868C95' }}>
                מנוי חינם
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                קבל את המגזין<br />ישירות אליך
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'ללקוחות בנקאות פרטית של כל הבנקים',
                  'ללא תשלום',
                  'ארבעה גיליונות בשנה',
                  'תכנים פיננסיים + תרבות ופנאי',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span style={{ color: '#868C95' }}>◈</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <a
                href="https://nihulhon.co.il/magazines/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm w-full justify-center block text-center"
              >
                הרשמה למגזין ←
              </a>
              <a
                href="https://nihulhon.co.il/magazines/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                לכל הגיליונות הקודמים
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
