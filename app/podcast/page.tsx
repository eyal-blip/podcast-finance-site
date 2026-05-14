import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'פודקאסט פיננסים YouTube | podcast.finance',
  description: 'פרקי הפודקאסט המקוריים של פיננסים — ישירות מערוץ YouTube @financeinst',
}

const episodes = [
  {
    id: 'iDfsKlitOCw',
    title: 'קרן העושר — מאחורי המספרים של הדוח השנתי 2025',
    description: 'הקרן לאזרחי ישראל סיימה את שנת 2025 עם תשואה דולרית של כמעט 20%, שנה שלישית של תשואה דו-ספרתית גבוהה. שיחה עם מנהלת מחלקת הניהול לנה קרופלניק על אסטרטגיית ההשקעות.',
    date: 'אפריל 2026',
    duration: '~35 דקות',
    guest: 'לנה קרופלניק',
  },
  {
    id: 'PR4Y9KGQl5o',
    title: 'דברי נגיד בנק ישראל — פרופ׳ אמיר ירון',
    description: 'הרצאה בכנס מכון אהרן למדיניות כלכלית 2026 — מגמות לכלכלת ישראל לאור המלחמה והאתגרים הצפויים.',
    date: 'אפריל 2026',
    duration: '~45 דקות',
    guest: 'פרופ׳ אמיר ירון',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'ניהול עושר בעידן הריבית הגבוהה',
    description: 'כיצד לנהל תיק השקעות בסביבת ריבית גבוהה — אסטרטגיות, כלים ומה שחשוב לדעת.',
    date: 'מרץ 2026',
    duration: '~40 דקות',
    guest: 'ד"ר איתי גלילי',
  },
  {
    id: 'iDfsKlitOCw',
    title: 'בנקאות פרטית — איך זה עובד באמת',
    description: 'מה ההבדל בין בנקאות פרטית לניהול הון עצמאי, ומה לקוחות לא יודעים על העמלות שהם משלמים.',
    date: 'פברואר 2026',
    duration: '~30 דקות',
    guest: 'מיכל יוזפסון',
  },
  {
    id: 'PR4Y9KGQl5o',
    title: 'שוק ההון הישראלי ב-2026 — סקירה שנתית',
    description: 'סקירת שנת 2025 ומה צפוי בשנת 2026 — מניות, אגרות חוב, נדל״ן ושווקים בינלאומיים.',
    date: 'ינואר 2026',
    duration: '~50 דקות',
    guest: 'מיכל יוזפסון',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'פמילי אופיס — מה זה ולמי זה מתאים',
    description: 'הסבר מקיף על שירות ה-Family Office, מה הוא כולל ומי צריך אותו.',
    date: 'דצמבר 2025',
    duration: '~28 דקות',
    guest: 'ד"ר איתי גלילי',
  },
]

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      {/* Page Header */}
      <div className="bg-[#1C1814] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#E2C97E', background: 'rgba(201,168,76,0.08)' }}>
            ▶ ערוץ YouTube
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            פודקאסט{' '}
            <span style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              פיננסים
            </span>
          </h1>
          <p className="text-[#B0A090] text-lg max-w-xl mx-auto">
            פרקים מקוריים — דיונים עם מומחים על שוקי הון, בנקאות פרטית וניהול הון
          </p>
          <div className="mt-6">
            <a
              href="https://www.youtube.com/@financeinst"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-6 py-2.5 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-2.47 12.27 12.27 0 0 0-9.65 0 4.83 4.83 0 0 1-3.77 2.47A49.91 49.91 0 0 0 2 12a49.91 49.91 0 0 0 .4 5.31 4.83 4.83 0 0 1 3.77 2.47 12.27 12.27 0 0 0 9.65 0 4.83 4.83 0 0 1 3.77-2.47A49.91 49.91 0 0 0 22 12a49.91 49.91 0 0 0-.41-5.31zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
              עקוב בYouTube — @financeinst
            </a>
          </div>
        </div>
      </div>

      {/* Featured Episode */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-[#1C1814] mb-6 flex items-center gap-2">
          <span style={{ color: '#C9A84C' }}>◈</span> הפרק האחרון
        </h2>
        <div className="card-ivory rounded-2xl overflow-hidden shadow-md mb-14">
          <div className="aspect-video w-full bg-black">
            <iframe
              src="https://www.youtube.com/embed/iDfsKlitOCw?rel=0&modestbranding=1"
              title="קרן העושר 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(201,168,76,0.12)', color: '#A07830' }}>
                פרק מומלץ
              </span>
              <span className="text-xs text-[#8C7B65]">אפריל 2026 · ~35 דקות</span>
            </div>
            <h3 className="text-xl font-bold text-[#1C1814] mb-2">קרן העושר — מאחורי המספרים של הדוח השנתי 2025</h3>
            <p className="text-[#5A4F3F] text-sm leading-relaxed">
              הקרן לאזרחי ישראל סיימה את שנת 2025 עם תשואה דולרית של כמעט 20%. שיחה עם לנה קרופלניק, מנהלת מחלקת הניהול של הקרן, על אסטרטגיית ההשקעות.
            </p>
          </div>
        </div>

        {/* All Episodes */}
        <h2 className="text-xl font-bold text-[#1C1814] mb-6 flex items-center gap-2">
          <span style={{ color: '#C9A84C' }}>◈</span> כל הפרקים
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep, i) => (
            <a
              key={`${ep.id}-${i}`}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-ivory rounded-xl group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              <div className="relative aspect-video rounded-t-xl overflow-hidden bg-[#1C1814]">
                <img
                  src={`https://img.youtube.com/vi/${ep.id}/mqdefault.jpg`}
                  alt={ep.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.9)' }}>
                    <svg className="w-5 h-5 text-white mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-[#8C7B65]">{ep.date}</span>
                  <span className="text-xs text-[#8C7B65]">·</span>
                  <span className="text-xs text-[#8C7B65]">{ep.duration}</span>
                </div>
                <h3 className="font-semibold text-[#1C1814] mb-1 text-sm leading-snug group-hover:text-[#A07830] transition-colors line-clamp-2">
                  {ep.title}
                </h3>
                <p className="text-[#8C7B65] text-xs leading-relaxed flex-1 line-clamp-2 mb-3">{ep.description}</p>
                <div className="text-xs font-medium mt-auto flex items-center gap-1" style={{ color: '#C9A84C' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  צפה בYouTube
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
