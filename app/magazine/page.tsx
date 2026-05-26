import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'מגזין הבנקאות הפרטית | podcast.finance',
  description: 'מגזין רבעוני ללקוחות בנקאות פרטית של כל הבנקים — ללא תשלום',
}

export default function MagazinePage() {
  return (
    <div className="min-h-screen bg-[#EAF3ED]">
      <PageHeader title="מגזין הבנקאות הפרטית" subtitle="מגזין רבעוני ללקוחות הבנקאות הפרטית של כל הבנקים — תכנים פיננסיים, תרבות, פנאי ואיכות חיים" />

      {/* Magazine embed */}
      <div style={{ padding: 0, background: '#f5f0e8' }}>
        <div style={{ width: '100%', height: '90vh', minHeight: '680px' }}>
          <iframe
            src="https://finansim-magazin.vercel.app"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
            allowFullScreen
            loading="lazy"
            title="מגזין הבנקאות הפרטית — כל הגיליונות"
          />
        </div>
      </div>
    </div>
  )
}
