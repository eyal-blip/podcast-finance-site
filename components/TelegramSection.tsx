const updates = [
  {
    text: 'קרן העושר לאזרחי ישראל סיימה 2025 עם תשואה דולרית של כמעט 20% — שנה שלישית של תשואה דו-ספרתית גבוהה.',
    date: '30 אפריל 2026',
    type: 'השקעות',
  },
  {
    text: 'שוק ההון הגיב למבצע שאגת הארי בצורה חיובית מאוד בשבוע הראשון — ביצועים מהטובים בעולם באותה התקופה.',
    date: '30 אפריל 2026',
    type: 'שוק הון',
  },
  {
    text: 'נגיד בנק ישראל: האתגרים הצפויים לכלכלת ישראל כתוצאה מעלייה בתוואי הגרעון הממשלתי בשנים הקרובות.',
    date: '25 אפריל 2026',
    type: 'מאקרו',
  },
  {
    text: 'עלות הפשיעה העודפת בחברה הערבית למשק הישראלי מוערכת בכ-0.5% מהתוצר — כ-10 מיליארד ₪ בשנה.',
    date: '27 אפריל 2026',
    type: 'כלכלה',
  },
]

export default function TelegramSection() {
  return (
    <section id="telegram" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded"
              style={{ color: '#C9A84C', background: 'rgba(201,168,76,0.1)' }}
            >
              ✈ ערוץ טלגראם
            </div>
            <h2 className="section-title text-right">עדכונים מידיים<br />מערוץ הטלגראם</h2>
            <div className="gold-divider-right" />
            <p className="text-gray-400 leading-relaxed mb-6">
              הצטרף לערוץ הטלגראם של פודקאסט פיננסים וקבל עדכונים שוטפים, תכנים מקצועיים וניתוחים פיננסיים ישירות לטלפון.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'עדכוני שוק בזמן אמת',
                'פרקי פודקאסט חדשים',
                'מאמרים ומחקרים נבחרים',
                'ניוזלטרים חודשיים',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <span style={{ color: '#C9A84C' }} className="text-lg">◈</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/PodcastFinance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4 inline-flex"
            >
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
              </svg>
              הצטרף לערוץ הטלגראם ←
            </a>
          </div>

          {/* Right: Feed mock */}
          <div className="space-y-3">
            {updates.map((update, idx) => (
              <div
                key={idx}
                className="card-dark rounded-xl p-4 flex gap-4"
              >
                {/* Telegram icon */}
                <div
                  className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(201,168,76,0.15)' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#C9A84C">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.793 13.4l-2.963-.924c-.644-.204-.657-.644.136-.953l11.57-4.461c.537-.194 1.006.131.834.953l-.476-.794z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold" style={{ color: '#C9A84C' }}>
                      PodcastFinance
                    </span>
                    <span className="text-xs text-gray-600">{update.date}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{update.text}</p>
                  <div className="mt-2">
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
                    >
                      {update.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <a
              href="https://t.me/PodcastFinance"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm py-3 rounded-xl border border-dashed transition-colors hover:border-[#C9A84C]/60"
              style={{ borderColor: '#2A2A2A', color: '#666' }}
            >
              לכל העדכונים בטלגראם ←
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
