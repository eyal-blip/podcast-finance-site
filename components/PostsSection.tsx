const posts = [
  {
    title: '2026 – שנה של ניהול סיכונים',
    author: 'ד"ר איתי גלילי',
    date: '1 בינואר 2026',
    href: 'https://nihulhon.co.il/posts/האם-ישראל-יכולה-לממן-את-התוכנ',
    excerpt: 'השווקים הפיננסיים מסיימים את שנת 2025 בתשואות נאות. שוק ההון הישראלי בולט לחיוב על רקע סיום המלחמה.',
  },
  {
    title: 'סקירת שווקים לקראת 2026',
    author: 'מיכל יוזפסון',
    date: '1 בינואר 2026',
    href: 'https://nihulhon.co.il/posts/סקירת-שווקים-לקראת-רבעון-שני',
    excerpt: 'שווקי המניות הגלובליים הציגו בשנה החולפת ביצועים חזקים, למרות ריבוי זעזועים פוליטיים וגיאופוליטיים.',
  },
  {
    title: 'האם ישראל יכולה לממן את תוכנית הבינה המלאכותית?',
    author: 'ד"ר איתי גלילי',
    date: '20 בספטמבר 2025',
    href: 'https://nihulhon.co.il/posts/מבט-אל-המציאות-של-שנת-2050',
    excerpt: 'בשנתיים האחרונות המהפכה הטכנולוגית בתחום הבינה המלאכותית יצאה מתחומי מוסדות המחקר לשימושים רבים.',
  },
  {
    title: 'סקירת שווקים רבעון שלישי 2025',
    author: 'מיכל יוזפסון',
    date: '20 בספטמבר 2025',
    href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024-1',
    excerpt: 'המומנטום החיובי בשווקי המניות והאג"ח נמשכו אל תוך שנת 2025 והביאו את השווקים לשיאים חדשים.',
  },
  {
    title: 'סקירת שווקים לקראת רבעון שני 2025',
    author: 'מיכל יוזפסון',
    date: '1 באפריל 2025',
    href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024',
    excerpt: 'שנת 2025 נפתחה במומנטום חיובי בשווקי המניות והאג"ח, עם תחזיות צמיחה יציבות לכלכלה הגלובלית.',
  },
  {
    title: 'על כוחם של תאגידים וכישלונן של ממשלות',
    author: 'ד"ר איתי גלילי',
    date: '1 באפריל 2025',
    href: 'https://nihulhon.co.il/posts/על-כוחם-של-תאגידים-וכישלונן-ש',
    excerpt: 'ישראל נמצאת בתקופה מאתגרת מאוד בהיבט הביטחוני, הפוליטי והחברתי — ניתוח מעמיק של מבני הכוח.',
  },
]

export default function PostsSection() {
  return (
    <section id="posts" className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded"
            style={{ color: '#868C95', background: 'rgba(134,140,149,0.1)' }}
          >
            ◈ תוכן מקצועי
          </div>
          <h2 className="section-title">פוסטים אחרונים</h2>
          <p className="section-subtitle">144+ פוסטים מקוריים של מומחי פיננסים ניהול הון פרטי</p>
          <div className="gold-divider" />
        </div>

        {/* Featured post */}
        <a
          href={posts[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block card-dark rounded-2xl p-8 mb-8 hover:border-[#868C95]/40 transition-all duration-200"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs px-2 py-0.5 rounded font-medium"
                  style={{ background: 'rgba(134,140,149,0.15)', color: '#868C95' }}
                >
                  פוסט מומלץ
                </span>
                <span className="text-xs text-gray-600">{posts[0].date}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#A8CCB8] transition-colors leading-snug">
                {posts[0].title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">מאת {posts[0].author}</span>
                <span className="text-sm font-medium" style={{ color: '#868C95' }}>
                  להמשך הפוסט ←
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center w-40">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(134,140,149,0.1)', border: '1px solid rgba(134,140,149,0.3)' }}
              >
                <span className="text-3xl">◈</span>
              </div>
            </div>
          </div>
        </a>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.slice(1).map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark p-6 rounded-xl group hover:border-[#868C95]/40 transition-all duration-200 flex flex-col"
            >
              <div className="text-xs text-gray-600 mb-2">{post.date}</div>
              <h3 className="font-semibold text-white mb-3 leading-snug group-hover:text-[#A8CCB8] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-600">{post.author}</span>
                <span className="text-xs font-medium" style={{ color: '#868C95' }}>
                  קרא ←
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://nihulhon.co.il/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-sm px-6 py-3"
          >
            לכל הפוסטים ←
          </a>
        </div>
      </div>
    </section>
  )
}
