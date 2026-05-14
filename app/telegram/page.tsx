import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ערוץ טלגראם | podcast.finance',
  description: 'עדכונים שוטפים וכתבות נבחרות מערוץ הטלגראם @PodcastFinance',
}

const updates = [
  {
    text: 'קרן העושר לאזרחי ישראל סיימה 2025 עם תשואה דולרית של כמעט 20% — שנה שלישית של תשואה דו-ספרתית גבוהה. הקרן הגדילה את היקף הכספים שבניהולה ל-2.8 מיליארד דולר.',
    date: '30 אפריל 2026',
    tag: 'השקעות',
    link: 'https://www.youtube.com/watch?v=iDfsKlitOCw',
  },
  {
    text: 'שוק ההון הגיב למבצע שאגת הארי בצורה חיובית מאוד בשבוע הראשון — ביצועים מהטובים בעולם. מחקר חדש של הרשות לני"ע.',
    date: '30 אפריל 2026',
    tag: 'שוק הון',
    link: 'https://www.new.isa.gov.il',
  },
  {
    text: 'נגיד בנק ישראל פרופ׳ אמיר ירון: האתגרים הצפויים לכלכלת ישראל כתוצאה מעלייה בתוואי הגרעון הממשלתי — הרצאה מלאה בכנס מכון אהרן.',
    date: '25 אפריל 2026',
    tag: 'מאקרו',
    link: 'https://www.youtube.com/watch?v=PR4Y9KGQl5o',
  },
  {
    text: 'עלות הפשיעה העודפת בחברה הערבית למשק הישראלי מוערכת בכ-0.5% מהתוצר — כ-10 מיליארד ₪ בשנה. דוח חדש של הכלכלן הראשי של משרד האוצר.',
    date: '27 אפריל 2026',
    tag: 'כלכלה',
    link: 'https://www.gov.il',
  },
  {
    text: 'משבר הדיור: נבנות מעט מדי דירות קטנות — שוק השכירות מבוסס על משכירים פרטיים עם חוזים קצרים. מחקר מבנה חדש של מכון שורש.',
    date: '20 אפריל 2026',
    tag: 'נדל״ן',
    link: 'https://backend.shoresh.institute',
  },
  {
    text: 'ועדות חקירה בישראל מאז 1968 — סקירה היסטורית מקיפה של הכנסת. כלי חשוב להבנת מבנה הממשל.',
    date: '10 מאי 2026',
    tag: 'מדיניות',
    link: 'https://fs.knesset.gov.il',
  },
  {
    text: 'ניוזלטר מאי 2026 יצא לדרך! הסקירה החודשית שלנו על שוקי ההון, הכלכלה הישראלית והגלובלית — ישירות לתיבת המייל שלך.',
    date: '1 מאי 2026',
    tag: 'ניוזלטר',
    link: 'https://nihulhon.co.il/newsletter',
  },
  {
    text: 'גיליון המגזין ינואר 2026 — זמין לצפייה ולהורדה. תכנים פיננסיים, תרבות ואיכות חיים ללקוחות בנקאות פרטית.',
    date: '15 ינואר 2026',
    tag: 'מגזין',
    link: 'https://finansim-magazin.vercel.app/issue/01-2026',
  },
]

const tagColors: Record<string, string> = {
  'השקעות': '#8B9E6B',
  'שוק הון': '#C9A84C',
  'מאקרו': '#9B6BC9',
  'כלכלה': '#C9764C',
  'נדל״ן': '#4C9BC9',
  'מדיניות': '#6B7C99',
  'ניוזלטר': '#C94C8B',
  'מגזין': '#9B5E2A',
}

export default function TelegramPage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      {/* Page Header */}
      <div className="bg-[#1C1814] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm"
            style={{ borderColor: 'rgba(42,171,238,0.4)', color: '#7DD3F8', background: 'rgba(42,171,238,0.08)' }}
          >
            ✈ ערוץ טלגראם
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">
            ערוץ{' '}
            <span style={{ color: '#7DD3F8' }}>הטלגראם</span>
          </h1>
          <p className="text-[#B0A090] text-lg max-w-xl mx-auto mb-6">
            עדכונים שוטפים, כתבות נבחרות ותכנים פיננסיים — מרוכז ישירות מהערוץ
          </p>
          <a
            href="https://t.me/PodcastFinance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#2AABEE' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
            </svg>
            הצטרף לערוץ — @PodcastFinance
          </a>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-[#1C1814] mb-6 flex items-center gap-2">
          <span style={{ color: '#2AABEE' }}>✈</span> עדכונים אחרונים מהערוץ
        </h2>

        <div className="space-y-4">
          {updates.map((update, idx) => (
            <div key={idx} className="card-ivory rounded-xl p-5 flex gap-4">
              {/* Icon */}
              <div
                className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                style={{ background: 'rgba(42,171,238,0.12)' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#2AABEE">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-semibold text-[#2AABEE]">PodcastFinance</span>
                  <span className="text-xs text-[#8C7B65]">{update.date}</span>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded font-medium"
                    style={{ background: `${tagColors[update.tag] || '#C9A84C'}15`, color: tagColors[update.tag] || '#C9A84C' }}
                  >
                    {update.tag}
                  </span>
                </div>
                <p className="text-sm text-[#1C1814] leading-relaxed mb-3">{update.text}</p>
                {update.link && (
                  <a
                    href={update.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium transition-colors"
                    style={{ color: '#C9A84C' }}
                  >
                    לקישור ←
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://t.me/PodcastFinance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-md"
            style={{ background: '#2AABEE' }}
          >
            לכל העדכונים בטלגראם ←
          </a>
        </div>
      </div>
    </div>
  )
}
