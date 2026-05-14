import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'פודקאסט פיננסים YouTube | podcast.finance',
  description: 'פרקי הפודקאסט המקוריים של פיננסים — ישירות מערוץ YouTube @financeinst',
}

const episodes = [
  {
    id: 'iDfsKlitOCw',
    title: 'קרן העושר — מאחורי המספרים של הדוח השנתי 2025',
    description: 'הקרן לאזרחי ישראל סיימה את שנת 2025 עם תשואה דולרית של כמעט 20%, שנה שלישית של תשואה דו-ספרתית גבוהה. שיחה עם מנהלת מחלקת הניהול לנה קרופלניק.',
    date: '30 אפריל 2026',
    views: '1.2K',
    isNew: true,
  },
  {
    id: 'PR4Y9KGQl5o',
    title: 'דברי נגיד בנק ישראל — פרופ׳ אמיר ירון',
    description: 'הרצאה בכנס מכון אהרן למדיניות כלכלית 2026 — מגמות לכלכלת ישראל לאור המלחמה והאתגרים הצפויים.',
    date: '25 אפריל 2026',
    views: '3.4K',
    isNew: false,
  },
  {
    id: 'iDfsKlitOCw',
    title: 'ניהול עושר בעידן הריבית הגבוהה',
    description: 'כיצד לנהל תיק השקעות בסביבת ריבית גבוהה — אסטרטגיות, כלים ומה שחשוב לדעת.',
    date: 'מרץ 2026',
    views: '2.1K',
    isNew: false,
  },
  {
    id: 'PR4Y9KGQl5o',
    title: 'בנקאות פרטית — איך זה עובד באמת',
    description: 'מה ההבדל בין בנקאות פרטית לניהול הון עצמאי, ומה לקוחות לא יודעים על העמלות שהם משלמים.',
    date: 'פברואר 2026',
    views: '5.7K',
    isNew: false,
  },
  {
    id: 'iDfsKlitOCw',
    title: 'שוק ההון הישראלי ב-2026 — סקירה שנתית',
    description: 'סקירת שנת 2025 ומה צפוי בשנת 2026 — מניות, אגרות חוב, נדל״ן ושווקים בינלאומיים.',
    date: 'ינואר 2026',
    views: '8.2K',
    isNew: false,
  },
  {
    id: 'PR4Y9KGQl5o',
    title: 'פמילי אופיס — מה זה ולמי זה מתאים',
    description: 'הסבר מקיף על שירות ה-Family Office, מה הוא כולל ומי צריך אותו.',
    date: 'דצמבר 2025',
    views: '4.3K',
    isNew: false,
  },
  {
    id: 'iDfsKlitOCw',
    title: 'השקעות אלטרנטיביות — קרנות גידור ונדל"ן',
    description: 'סקירת עולם ההשקעות האלטרנטיביות: קרנות גידור, נדל"ן מניב ואיך לגשת אליו.',
    date: 'נובמבר 2025',
    views: '3.9K',
    isNew: false,
  },
  {
    id: 'PR4Y9KGQl5o',
    title: 'תכנון פרישה — כל מה שצריך לדעת',
    description: 'מדריך מקיף לתכנון פרישה: קרן פנסיה, קופת גמל, ביטוח מנהלים ואיך לבחור.',
    date: 'אוקטובר 2025',
    views: '11.4K',
    isNew: false,
  },
  {
    id: 'iDfsKlitOCw',
    title: 'מניות vs. אגרות חוב — לאן הכסף צריך ללכת?',
    description: 'ניתוח מעמיק של ההחלטה בין מניות לאגרות חוב בסביבה הנוכחית.',
    date: 'ספטמבר 2025',
    views: '6.6K',
    isNew: false,
  },
]

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      {/* Page Header */}
      <div className="bg-[#1C1814] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Channel avatar */}
            <div className="flex-shrink-0">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black border-2"
                style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', borderColor: 'rgba(201,168,76,0.3)', color: '#1C1814' }}
              >
                פ
              </div>
            </div>
            <div className="text-center md:text-right flex-1">
              <h1 className="text-3xl md:text-4xl font-black mb-1">פודקאסט פיננסים</h1>
              <div className="text-[#8C7B65] text-sm mb-3">@financeinst · פרקים על ניהול הון, בנקאות פרטית ושוקי הון</div>
              <a
                href="https://www.youtube.com/@financeinst"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-[#1C1814] transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                הרשמה לערוץ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-[#1C1814] flex items-center gap-2">
            <span style={{ color: '#C9A84C' }}>▶</span> פרקים
          </h2>
          <span className="text-sm text-[#8C7B65]">{episodes.length} פרקים</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {episodes.map((ep, i) => (
            <a
              key={`${ep.id}-${i}`}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1C1814] mb-3">
                <img
                  src={`https://img.youtube.com/vi/${ep.id}/mqdefault.jpg`}
                  alt={ep.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl" style={{ background: 'rgba(201,168,76,0.95)' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '-2px' }}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* NEW badge */}
                {ep.isNew && (
                  <div className="absolute top-2 right-2 px-2 py-0.5 text-xs font-bold rounded" style={{ background: '#C9A84C', color: '#1C1814' }}>
                    חדש
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#1C1814] text-sm leading-snug group-hover:text-[#A07830] transition-colors line-clamp-2 mb-1">
                    {ep.title}
                  </h3>
                  <div className="text-xs text-[#8C7B65]">פיננסים • {ep.date} • {ep.views} צפיות</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@financeinst"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-sm px-8 py-3"
          >
            לכל הפרקים בערוץ YouTube ←
          </a>
        </div>
      </div>
    </div>
  )
}
