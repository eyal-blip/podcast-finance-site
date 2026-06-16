'use client'

import { useState, useMemo } from 'react'
import { PageHeader } from '@/components/PageHeader'
import { posts as allPosts } from '@/lib/posts'

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
    <div className="min-h-screen bg-[#EAF3ED]">
      {/* Header */}
      <PageHeader title="144+ פוסטים מקוריים" subtitle="ניתוחים, סקירות שווקים ודעות — מאת מומחי פיננסים ניהול הון פרטי" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-[#BACEC4] p-5 mb-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <label className="block text-xs font-semibold text-[#28402E] mb-1.5">חיפוש</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="חפש פוסט..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#BACEC4] bg-[#FAFAF8] text-[#1B3A28] focus:outline-none focus:border-[#868C95] transition-colors pr-9"
                />
                <svg className="absolute right-3 top-3 w-4 h-4 text-[#62806A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Year */}
            <div>
              <label className="block text-xs font-semibold text-[#28402E] mb-1.5">שנה</label>
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#BACEC4] bg-[#FAFAF8] text-[#1B3A28] focus:outline-none focus:border-[#868C95] transition-colors"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-[#28402E] mb-1.5">קטגוריה</label>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#BACEC4] bg-[#FAFAF8] text-[#1B3A28] focus:outline-none focus:border-[#868C95] transition-colors"
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Author */}
            <div>
              <label className="block text-xs font-semibold text-[#28402E] mb-1.5">כותב</label>
              <select
                value={selectedAuthor}
                onChange={e => setSelectedAuthor(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-[#BACEC4] bg-[#FAFAF8] text-[#1B3A28] focus:outline-none focus:border-[#868C95] transition-colors"
              >
                {authors.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 text-xs text-[#62806A]">
            {filtered.length} פוסטים
            {(selectedYear !== 'הכל' || selectedCategory !== 'הכל' || selectedAuthor !== 'הכל' || search) && (
              <button
                onClick={() => { setSearch(''); setSelectedYear('הכל'); setSelectedCategory('הכל'); setSelectedAuthor('הכל') }}
                className="mr-3 text-[#868C95] hover:text-[#4A7A5A] underline"
              >
                נקה סינון
              </button>
            )}
          </div>
        </div>

        {/* Posts by Year */}
        {byYear.length === 0 ? (
          <div className="text-center py-20 text-[#62806A]">לא נמצאו פוסטים תואמים</div>
        ) : (
          byYear.map(([year, posts]) => (
            <div key={year} className="mb-12">
              {/* Year Header */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-black text-[#1B3A28]">{year}</h2>
                <div className="flex-1 h-px bg-[#BACEC4]" />
                <span className="text-sm text-[#62806A]">{posts.length} פוסטים</span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
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
                        style={{ background: 'rgba(134,140,149,0.12)', color: '#4A7A5A' }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-[#62806A]">{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-[#1B3A28] mb-2 text-sm leading-snug group-hover:text-[#4A7A5A] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#62806A] text-xs leading-relaxed flex-1 line-clamp-3 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-[#28402E] font-medium">{post.author}</span>
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
