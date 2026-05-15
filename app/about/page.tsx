import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'אודות | podcast.finance',
  description: 'פיננסים ניהול הון פרטי — Family Office וייעוץ השקעות מתקדם',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      <PageHeader title="פיננסים ניהול הון פרטי" subtitle="Family Office | ייעוץ השקעות | ייעוץ פנסיוני" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder for about text */}
        <div className="card-ivory rounded-2xl p-10 shadow-sm text-center">
          <div className="text-5xl mb-6" style={{ color: '#868C95' }}>◇</div>
          <h2 className="text-2xl font-bold text-[#1E3651] mb-4">טקסט אודות בקרוב</h2>
          <p className="text-[#5A4F3F] leading-relaxed mb-8 max-w-xl mx-auto">
            עמוד האודות ייבנה עם התוכן שתספק. בינתיים, ניתן לקרוא אודות החברה באתר הראשי.
          </p>
          <a
            href="https://nihulhon.co.il/about"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-8 py-3 inline-flex justify-center"
          >
            לאתר הראשי — nihulhon.co.il ←
          </a>
        </div>
      </div>
    </div>
  )
}
