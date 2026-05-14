// Featured podcast episodes — update video IDs as needed
const episodes = [
  {
    id: 'iDfsKlitOCw',
    title: 'קרן העושר — מאחורי המספרים של הדוח השנתי 2025',
    description: 'הקרן לאזרחי ישראל סיימה את שנת 2025 עם תשואה דולרית של כמעט 20%. שיחה עם מנהלת מחלקת הניהול על אסטרטגיית ההשקעות.',
    date: 'אפריל 2026',
  },
  {
    id: 'PR4Y9KGQl5o',
    title: 'דברי נגיד בנק ישראל — פרופ׳ אמיר ירון',
    description: 'הרצאה בכנס מכון אהרן למדיניות כלכלית 2026 — מגמות לכלכלת ישראל לאור המלחמה והאתגרים הצפויים.',
    date: 'אפריל 2026',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'ערוץ פודקאסט פיננסים — כל הפרקים',
    description: 'עשרות פרקים של דיונים מעמיקים עם מומחים מובילים בשוקי ההון, הבנקאות הפרטית וניהול ההון.',
    date: 'ערוץ YouTube',
  },
]

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded"
            style={{ color: '#C9A84C', background: 'rgba(201,168,76,0.1)' }}
          >
            ◈ ערוץ הפודקאסט
          </div>
          <h2 className="section-title">פודקאסט פיננסים</h2>
          <p className="section-subtitle">דיונים מעמיקים עם מומחים — ישירות מערוץ ה-YouTube שלנו</p>
          <div className="gold-divider" />
        </div>

        {/* Featured Video */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/iDfsKlitOCw?rel=0&modestbranding=1"
              title="פרק מומלץ — קרן העושר 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>

        {/* Episode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {episodes.map((ep) => (
            <a
              key={ep.id}
              href={`https://www.youtube.com/watch?v=${ep.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark p-5 rounded-xl group hover:border-[#C9A84C]/40 transition-all duration-200 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-[#222]">
                <img
                  src={`https://img.youtube.com/vi/${ep.id}/mqdefault.jpg`}
                  alt={ep.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/90 flex items-center justify-center">
                    <svg className="w-5 h-5 text-black mr-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-xs mb-2" style={{ color: '#C9A84C' }}>{ep.date}</div>
              <h3 className="font-semibold text-white mb-2 leading-snug text-sm group-hover:text-[#E2C97E] transition-colors line-clamp-2">
                {ep.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed flex-1 line-clamp-3">{ep.description}</p>
            </a>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="text-center">
          <a
            href="https://www.youtube.com/@financeinst"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-sm px-6 py-3 inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-2.47 12.27 12.27 0 0 0-9.65 0 4.83 4.83 0 0 1-3.77 2.47A49.91 49.91 0 0 0 2 12a49.91 49.91 0 0 0 .4 5.31 4.83 4.83 0 0 1 3.77 2.47 12.27 12.27 0 0 0 9.65 0 4.83 4.83 0 0 1 3.77-2.47A49.91 49.91 0 0 0 22 12a49.91 49.91 0 0 0-.41-5.31zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
            לכל הפרקים בערוץ YouTube ←
          </a>
        </div>
      </div>
    </section>
  )
}
