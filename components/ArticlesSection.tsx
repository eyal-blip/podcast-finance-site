const articles = [
  {
    title: 'ועדות חקירה בישראל — סקירה היסטורית',
    source: 'הכנסת',
    date: '10 במאי 2026',
    href: 'https://fs.knesset.gov.il/globaldocs/MMM/7e6dfa13-98ee-f011-a866-005056aa9911/2_7e6dfa13-98ee-f011-a866-005056aa9911_11_21424.pdf',
    excerpt: 'בסקירה מוצגות ועדות החקירה הממלכתיות וועדות הבדיקה הממשלתיות שהוקמו בישראל מאז חקיקת חוק ועדות חקירה ב-1968.',
    tag: 'מדיניות',
  },
  {
    title: 'המסחר בבורסה לאורך תקופת מבצע שאגת הארי',
    source: 'רשות ניירות ערך',
    date: '30 באפריל 2026',
    href: 'https://www.new.isa.gov.il/images/Fittings/isa/asset_library_pic/al_lobby/al_lobby-62962113646fb/Seagat_Haari.pdf',
    excerpt: 'שוק ההון הגיב למבצע בצורה חיובית מאוד בשבוע הראשון, ובביצועים מהטובים בעולם לאורך כל התקופה.',
    tag: 'שוק הון',
  },
  {
    title: 'קרן העושר — מאחורי המספרים של הדוח השנתי 2025',
    source: 'YouTube',
    date: '30 באפריל 2026',
    href: 'https://www.youtube.com/watch?v=iDfsKlitOCw',
    excerpt: 'הקרן לאזרחי ישראל סיימה 2025 עם תשואה דולרית של כמעט 20%, שנה שלישית של תשואה דו-ספרתית גבוהה.',
    tag: 'השקעות',
  },
  {
    title: 'דברי נגיד בנק ישראל — פרופ׳ אמיר ירון',
    source: 'YouTube',
    date: '25 באפריל 2026',
    href: 'https://www.youtube.com/watch?v=PR4Y9KGQl5o',
    excerpt: 'הרצאה בכנס מכון אהרן למדיניות כלכלית 2026 — מגמות לכלכלת ישראל לאור המלחמה והאתגרים הצפויים.',
    tag: 'מאקרו',
  },
  {
    title: 'המחיר הכלכלי של הפשיעה בחברה הערבית',
    source: 'הכלכלן הראשי',
    date: '27 באפריל 2026',
    href: 'https://www.gov.il/BlobFolder/reports/review-27042026-main/he/reviews-and-publishes_review-27042026.pdf',
    excerpt: 'עלות "הפשיעה העודפת" למשק הישראלי מוערכת בכ-0.5% מהתוצר — כ-10 מיליארד ₪ בשנה.',
    tag: 'כלכלה',
  },
  {
    title: 'מעבר למחסור — מבט מבני על שוק הדיור בישראל',
    source: 'מכון שורש',
    date: '20 באפריל 2026',
    href: 'https://backend.shoresh.institute/downloads/research-paper-heb-Mishly-Housing.pdf',
    excerpt: 'משבר הדיור בישראל מתבטא לא רק במחסור יחסי ביחידות דיור אלא גם בכשלים מבניים עמוקים.',
    tag: 'נדל״ן',
  },
]

const tagColors: Record<string, string> = {
  'מדיניות': '#6B7C99',
  'שוק הון': '#868C95',
  'השקעות': '#8B9E6B',
  'מאקרו': '#9B6BC9',
  'כלכלה': '#C9764C',
  'נדל״ן': '#4C9BC9',
}

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded"
            style={{ color: '#868C95', background: 'rgba(134,140,149,0.1)' }}
          >
            ◉ עדכון שוטף
          </div>
          <h2 className="section-title">מאמרים פיננסיים עדכניים</h2>
          <p className="section-subtitle">תכנים נבחרים מגופי המחקר ומדיה המובילים בישראל</p>
          <div className="gold-divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark p-6 rounded-xl group hover:border-[#868C95]/40 transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs px-2 py-0.5 rounded font-medium"
                  style={{
                    background: `${tagColors[article.tag] || '#868C95'}20`,
                    color: tagColors[article.tag] || '#868C95',
                  }}
                >
                  {article.tag}
                </span>
                <span className="text-xs text-gray-600">{article.date}</span>
              </div>

              <h3 className="font-semibold text-white mb-3 leading-snug group-hover:text-[#A8CCB8] transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-600">מקור: {article.source}</span>
                <span className="text-xs font-medium transition-colors" style={{ color: '#868C95' }}>
                  לכתבה ←
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://nihulhon.co.il/articles/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-sm px-6 py-3"
          >
            לכל המאמרים העדכניים ←
          </a>
        </div>
      </div>
    </section>
  )
}
