import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ערוץ טלגראם | podcast.finance',
  description: 'עדכונים שוטפים מערוץ הטלגראם @PodcastFinance',
}

const posts = [
  {
    title: 'קרן העושר — מאחורי המספרים של הדוח השנתי 2025',
    excerpt: 'הקרן לאזרחי ישראל סיימה את שנת 2025 עם תשואה דולרית של כמעט 20%, שנה שלישית של תשואה דו-ספרתית גבוהה. שיחה עם מנהלת מחלקת הניהול לנה קרופלניק.',
    date: '30 אפריל 2026',
    tag: 'השקעות',
    image: 'https://img.youtube.com/vi/iDfsKlitOCw/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=iDfsKlitOCw',
  },
  {
    title: 'דברי נגיד בנק ישראל — פרופ׳ אמיר ירון',
    excerpt: 'הרצאה בכנס מכון אהרן 2026 — מגמות לכלכלת ישראל לאור המלחמה והאתגרים הצפויים מעלייה בתוואי הגרעון הממשלתי.',
    date: '25 אפריל 2026',
    tag: 'מאקרו',
    image: 'https://img.youtube.com/vi/PR4Y9KGQl5o/mqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=PR4Y9KGQl5o',
  },
  {
    title: 'המסחר בבורסה לאורך מבצע שאגת הארי',
    excerpt: 'שוק ההון הגיב למבצע בצורה חיובית מאוד בשבוע הראשון — ביצועים מהטובים בעולם. מחקר חדש של הרשות לניירות ערך.',
    date: '30 אפריל 2026',
    tag: 'שוק הון',
    image: null,
    link: 'https://www.new.isa.gov.il',
  },
  {
    title: 'המחיר הכלכלי של הפשיעה — דוח הכלכלן הראשי',
    excerpt: 'עלות הפשיעה העודפת בחברה הערבית מוערכת בכ-0.5% מהתוצר — כ-10 מיליארד ₪ בשנה. דוח חדש של משרד האוצר.',
    date: '27 אפריל 2026',
    tag: 'כלכלה',
    image: null,
    link: 'https://www.gov.il',
  },
  {
    title: 'מבט מבני על שוק הדיור בישראל',
    excerpt: 'משבר הדיור מתבטא בכשלים מבניים עמוקים — שוק השכירות מבוסס על משכירים פרטיים עם חוזים קצרים. מחקר חדש של מכון שורש.',
    date: '20 אפריל 2026',
    tag: 'נדל״ן',
    image: null,
    link: 'https://backend.shoresh.institute',
  },
  {
    title: 'ניוזלטר מאי 2026 — גיליון חדש',
    excerpt: 'הניוזלטר הפיננסי החודשי שלנו יצא לדרך — סקירת שוקי ההון, כלכלת ישראל והגלובלית.',
    date: '1 מאי 2026',
    tag: 'ניוזלטר',
    image: null,
    link: 'https://nihulhon.co.il/newsletter',
  },
]

const tagColors: Record<string, string> = {
  'השקעות': '#5A8F3C',
  'שוק הון': '#C9A84C',
  'מאקרו': '#7B4FC9',
  'כלכלה': '#C9764C',
  'נדל״ן': '#2E7FC9',
  'ניוזלטר': '#C94C8B',
}

export default function TelegramPage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      {/* Header */}
      <div className="bg-[#1C1814] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm"
            style={{ borderColor: 'rgba(42,171,238,0.5)', color: '#7DD3F8', background: 'rgba(42,171,238,0.1)' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
            </svg>
            ערוץ טלגראם
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">ערוץ <span style={{ color: '#7DD3F8' }}>הטלגראם</span></h1>
          <p className="text-[#B0A090] text-lg max-w-xl mx-auto mb-6">
            תכנים פיננסיים נבחרים, עדכוני שוק ופרקי פודקאסט — מרוכזים ישירות מהערוץ
          </p>
          <a
            href="https://t.me/PodcastFinance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: '#2AABEE' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
            </svg>
            הצטרף — @PodcastFinance
          </a>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-ivory rounded-xl group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video bg-[#1C1814] overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 opacity-30" viewBox="0 0 24 24" fill="#2AABEE">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
                    </svg>
                  </div>
                )}
                {/* Tag badge */}
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 text-xs font-semibold rounded"
                  style={{ background: `${tagColors[post.tag] || '#C9A84C'}CC`, color: '#fff' }}
                >
                  {post.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="#2AABEE">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
                  </svg>
                  <span className="text-xs text-[#8C7B65]">{post.date}</span>
                </div>
                <h3 className="font-bold text-[#1C1814] mb-2 text-sm leading-snug group-hover:text-[#A07830] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#5A4F3F] text-xs leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-3 text-xs font-medium" style={{ color: '#2AABEE' }}>
                  לעדכון בטלגראם ←
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <a
            href="https://t.me/PodcastFinance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
            style={{ background: '#2AABEE' }}
          >
            לכל העדכונים בטלגראם ←
          </a>
        </div>
      </div>
    </div>
  )
}
