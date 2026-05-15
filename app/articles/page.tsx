import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'מאמרים עדכניים | podcast.finance',
  description: 'תכנים נבחרים מגופי המחקר ומדיה הפיננסיים המובילים בישראל',
}

const articles = [
  { title: 'ועדות חקירה בישראל — סקירה היסטורית', source: 'הכנסת', date: '10 במאי 2026', href: 'https://fs.knesset.gov.il/globaldocs/MMM/7e6dfa13-98ee-f011-a866-005056aa9911/2_7e6dfa13-98ee-f011-a866-005056aa9911_11_21424.pdf', excerpt: 'בסקירה מוצגות ועדות החקירה הממלכתיות וועדות הבדיקה הממשלתיות שהוקמו בישראל מאז 1968.', tag: 'מדיניות' },
  { title: 'המסחר בבורסה לאורך תקופת מבצע שאגת הארי', source: 'רשות ניירות ערך', date: '30 באפריל 2026', href: 'https://www.new.isa.gov.il', excerpt: 'שוק ההון הגיב למבצע בצורה חיובית מאוד בשבוע הראשון — ביצועים מהטובים בעולם.', tag: 'שוק הון' },
  { title: 'קרן העושר — מאחורי המספרים של הדוח השנתי 2025', source: 'YouTube', date: '30 באפריל 2026', href: 'https://www.youtube.com/watch?v=iDfsKlitOCw', excerpt: 'הקרן לאזרחי ישראל סיימה 2025 עם תשואה דולרית של כמעט 20%.', tag: 'השקעות' },
  { title: 'דברי נגיד בנק ישראל — פרופ׳ אמיר ירון', source: 'YouTube', date: '25 באפריל 2026', href: 'https://www.youtube.com/watch?v=PR4Y9KGQl5o', excerpt: 'הרצאה בכנס מכון אהרן למדיניות כלכלית 2026 — אתגרי הגרעון והצמיחה.', tag: 'מאקרו' },
  { title: 'המחיר הכלכלי של הפשיעה בחברה הערבית', source: 'הכלכלן הראשי', date: '27 באפריל 2026', href: 'https://www.gov.il', excerpt: 'עלות הפשיעה העודפת מוערכת בכ-0.5% מהתוצר — כ-10 מיליארד ₪ בשנה.', tag: 'כלכלה' },
  { title: 'מעבר למחסור — מבט מבני על שוק הדיור', source: 'מכון שורש', date: '20 באפריל 2026', href: 'https://backend.shoresh.institute', excerpt: 'משבר הדיור מתבטא בכשלים מבניים — שוק שכירות על משכירים פרטיים עם חוזים קצרים.', tag: 'נדל״ן' },
]

const tagColors: Record<string, string> = {
  'מדיניות': '#6B7C99', 'שוק הון': '#868C95', 'השקעות': '#5A8F3C', 'מאקרו': '#7B4FC9', 'כלכלה': '#C9764C', 'נדל״ן': '#2E7FC9',
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      <PageHeader title="מאמרים עדכניים" subtitle='תכנים נבחרים מגופי המחקר ומדיה הפיננסיים המובילים — רשות ני"ע, כנסת, אוצר ועוד' />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {articles.map((a) => (
            <a key={a.href} href={a.href} target="_blank" rel="noopener noreferrer"
              className="card-ivory rounded-xl group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${tagColors[a.tag]}15`, color: tagColors[a.tag] }}>{a.tag}</span>
                <span className="text-xs text-[#8C7B65]">{a.date}</span>
              </div>
              <h3 className="font-semibold text-[#1E3651] mb-2 text-sm leading-snug group-hover:text-[#6A7280] transition-colors line-clamp-2">{a.title}</h3>
              <p className="text-[#8C7B65] text-xs leading-relaxed flex-1 line-clamp-3 mb-4">{a.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-[#5A4F3F]">מקור: {a.source}</span>
                <span className="text-xs font-medium" style={{ color: '#868C95' }}>לכתבה ←</span>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center">
          <a href="https://nihulhon.co.il/articles/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-sm px-8 py-3">לכל המאמרים ←</a>
        </div>
      </div>
    </div>
  )
}
