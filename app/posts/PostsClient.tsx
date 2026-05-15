'use client'

import { useState, useMemo } from 'react'
import { PageHeader } from '@/components/PageHeader'

const allPosts = [
  { title: '2026 – שנה של ניהול סיכונים', author: 'ד"ר איתי גלילי', date: '1 בינואר 2026', year: 2026, category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/האם-ישראל-יכולה-לממן-את-התוכנ', excerpt: 'השווקים הפיננסיים מסיימים את שנת 2025 בתשואות נאות. שוק ההון הישראלי בולט לחיוב על רקע סיום המלחמה.' },
  { title: 'סקירת שווקים לקראת 2026', author: 'מיכל יוזפסון', date: '1 בינואר 2026', year: 2026, category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-לקראת-רבעון-שני', excerpt: 'שווקי המניות הגלובליים הציגו בשנה החולפת ביצועים חזקים, למרות ריבוי זעזועים פוליטיים וגיאופוליטיים.' },
  { title: 'האם ישראל יכולה לממן את תוכנית הבינה המלאכותית?', author: 'ד"ר איתי גלילי', date: '20 בספטמבר 2025', year: 2025, category: 'מדיניות', href: 'https://nihulhon.co.il/posts/מבט-אל-המציאות-של-שנת-2050', excerpt: 'בשנתיים האחרונות המהפכה הטכנולוגית בתחום הבינה המלאכותית יצאה מתחומי מוסדות המחקר לשימושים יומיומיים.' },
  { title: 'סקירת שווקים רבעון שלישי 2025', author: 'מיכל יוזפסון', date: '20 בספטמבר 2025', year: 2025, category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024-1', excerpt: 'המומנטום החיובי בשווקי המניות והאג"ח נמשכו אל תוך שנת 2025 והביאו את השווקים לשיאים חדשים.' },
  { title: 'סקירת שווקים לקראת רבעון שני 2025', author: 'מיכל יוזפסון', date: '1 באפריל 2025', year: 2025, category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024', excerpt: 'שנת 2025 נפתחה במומנטום חיובי בשווקי המניות והאג"ח, עם תחזיות צמיחה יציבות לכלכלה הגלובלית.' },
  { title: 'על כוחם של תאגידים וכישלונן של ממשלות', author: 'ד"ר איתי גלילי', date: '1 באפריל 2025', year: 2025, category: 'מאמר דעה', href: 'https://nihulhon.co.il/posts/על-כוחם-של-תאגידים-וכישלונן-ש', excerpt: 'ישראל נמצאת בתקופה מאתגרת מאוד בהיבט הביטחוני, הפוליטי והחברתי.' },
  { title: 'סקירת שווקים דצמבר 2024', author: 'מיכל יוזפסון', date: '1 בדצמבר 2024', year: 2024, category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/', excerpt: 'סקירה מקיפה של שווקי ההון לקראת סיום שנת 2024 — מניות, אגרות חוב ושווקים בינלאומיים.' },
  { title: 'השקעה בקרנות גידור — מה שצריך לדעת', author: 'ד"ר איתי גלילי', date: '1 בספטמבר 2024', year: 2024, category: 'השקעות', href: 'https://nihulhon.co.il/posts/', excerpt: 'קרנות גידור — כיצד הן עובדות, מה היתרונות והחסרונות, ומי צריך לשקול השקעה בהן.' },
  { title: 'תכנון פנסיוני בגיל 50 — עדיין לא מאוחר', author: 'מיכל יוזפסון', date: '1 ביוני 2024', year: 2024, category: 'פנסיה', href: 'https://nihulhon.co.il/posts/', excerpt: 'גם בגיל 50 אפשר לשפר משמעותית את מצב הפנסיה — הצעדים החשובים שניתן לנקוט.' },
  { title: 'ניהול הון בעידן האינפלציה', author: 'ד"ר איתי גלילי', date: '1 במרץ 2024', year: 2024, category: 'מאקרו', href: 'https://nihulhon.co.il/posts/', excerpt: 'כיצד מגנים על ערך ההון בסביבה אינפלציונית — אסטרטגיות ונכסים שמייצרים הגנה.' },
  { title: 'בנקאות פרטית לעומת ניהול הון עצמאי', author: 'מיכל יוזפסון', date: '1 בינואר 2024', year: 2024, category: 'בנקאות פרטית', href: 'https://nihulhon.co.il/posts/', excerpt: 'מה ההבדל המהותי בין ניהול הון בבנק לבין יועץ עצמאי — ועמלות כלולות.' },
  { title: 'שוק ההון הישראלי — מבט לאחור על 2023', author: 'ד"ר איתי גלילי', date: '1 בדצמבר 2023', year: 2023, category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/', excerpt: 'שנת 2023 — שנה מאתגרת בעקבות המלחמה, אך שוקי ההון הפגינו חוסן.' },
]

const categories = ['הכל', ...Array.from(new Set(allPosts.map(p => p.category)))]
const authors = ['הכל', ...Array.from(new Set(allPosts.map(p => p.author)))]
const years = ['הכל', ...Array.from(new Set(allPosts.map(p => p.year))).sort((a, b) => b - a).map(String)]

export default function PostsClient() {
  const [search, setSearch] = useState('')
  const [selectedYear, setSelectedYear] = useState('הכל')
  const [selectedCategory, setSelectedCategory] = useState('הכל')
  const [selectedAuthor, setSelectedAuthor] = useState('הכל')

  const filtered = useMemo(() => {
    return allPosts.filter(p => {
      const matchSearch = !search || p.title.includes(search) || p.excerpt.includes(search)
      const matchYear = selectedYear === 'הכל' || p.year === Number(selectedYear)
      const matchCat = selectedCategory === 'הכל' || p.category === selectedCategory
      const matchAuthor = selectedAuthor === 'הכל' || p.author === selectedAuthor
      return matchSearch && matchYear && matchCat && matchAuthor
    })
  }, [search, selectedYear, selectedCategory, selectedAuthor])

  const byYear = useMemo(() => {
    const map: Record<number, typeof allPosts> = {}
    filtered.forEach(p => {
      if (!map[p.year]) map[p.year] = []
      map[p.year].push(p)
    })
    return Object.entries(map).sort((a, b) => Number(b[0]) - Number(a[0]))
  }, [filtered])

  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      {/* Header */}
      <PageHeader title="144+ פוסטים מקוריים" subtitle="ניתוחים, סקירות שווקים ודעות — מאת מומחי פיננסים ניהול הון פרטי" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-[#DDD5C0] p-5 mb-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-[#5A4F3F] mb-1.5">חיפוש</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="חפש פוסט..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#DDD5C0] bg-[#FAFAF8] text-[#1E3651] focus:outline-none focus:border-[#868C95] transition-colors pr-9"
                />
                <svg className="absolute right-3 top-3 w-4 h-4 text-[#8C7B65]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Year */}
            <div>
              <label className="block text-xs font-semibold text-[#5A4F3F] mb-1.5">שנה</label>
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#DDD5C0] bg-[#FAFAF8] text-[#1E3651] focus:outline-none focus:border-[#868C95] transition-colors"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-[#5A4F3F] mb-1.5">קטגוריה</label>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#DDD5C0] bg-[#FAFAF8] text-[#1E3651] focus:outline-none focus:border-[#868C95] transition-colors"
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Author */}
            <div>
              <label className="block text-xs font-semibold text-[#5A4F3F] mb-1.5">כותב</label>
              <select
                value={selectedAuthor}
                onChange={e => setSelectedAuthor(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#DDD5C0] bg-[#FAFAF8] text-[#1E3651] focus:outline-none focus:border-[#868C95] transition-colors"
              >
                {authors.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 text-xs text-[#8C7B65]">
            {filtered.length} פוסטים
            {(selectedYear !== 'הכל' || selectedCategory !== 'הכל' || selectedAuthor !== 'הכל' || search) && (
              <button
                onClick={() => { setSearch(''); setSelectedYear('הכל'); setSelectedCategory('הכל'); setSelectedAuthor('הכל') }}
                className="mr-3 text-[#868C95] hover:text-[#6A7280] underline"
              >
                נקה סינון
              </button>
            )}
          </div>
        </div>

        {/* Posts by Year */}
        {byYear.length === 0 ? (
          <div className="text-center py-20 text-[#8C7B65]">לא נמצאו פוסטים תואמים</div>
        ) : (
          byYear.map(([year, posts]) => (
            <div key={year} className="mb-12">
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-black text-[#1E3651]">{year}</h2>
                <div className="flex-1 h-px bg-[#DDD5C0]" />
                <span className="text-sm text-[#8C7B65]">{posts.length} פוסטים</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.map((post) => (
                  <a
                    key={post.href + post.title}
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-ivory rounded-xl p-5 group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: 'rgba(134,140,149,0.12)', color: '#6A7280' }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-[#8C7B65]">{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-[#1E3651] mb-2 text-sm leading-snug group-hover:text-[#6A7280] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#8C7B65] text-xs leading-relaxed flex-1 line-clamp-3 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-[#5A4F3F] font-medium">{post.author}</span>
                      <span className="text-xs font-medium" style={{ color: '#868C95' }}>קרא ←</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))
        )}

        <div className="text-center mt-10">
          <a href="https://nihulhon.co.il/posts/" target="_blank" rel="noopener noreferrer" className="btn-outline-gold text-sm px-8 py-3">
            לכל הפוסטים באתר הראשי ←
          </a>
        </div>
      </div>
    </div>
  )
}
