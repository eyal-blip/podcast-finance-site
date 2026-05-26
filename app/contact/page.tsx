import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'צור קשר | podcast.finance',
  description: 'פגישת ייעוץ ראשונית ללא התחייבות — פיננסים ניהול הון פרטי',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#EAF3ED]">
      <PageHeader title="פגישת ייעוץ" subtitle="ראשונית ללא התחייבות — במשרדנו ברמת אפעל, רמת גן" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* Contact Options */}
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#1B3A28] mb-6">דרכי יצירת קשר</h2>
            {[
              { icon: '☎', label: 'טלפון', value: '07777-83000', href: 'tel:0777783000' },
              { icon: '💬', label: 'WhatsApp', value: '050-5938770', href: 'https://wa.me/9720505938770' },
              { icon: '✉', label: 'אימייל', value: 'info@nihulhon.co.il', href: 'mailto:info@nihulhon.co.il' },
              { icon: '✈', label: 'טלגראם', value: '@PodcastFinance', href: 'https://t.me/PodcastFinance' },
              { icon: 'f', label: 'Facebook', value: 'privatebankingcenter', href: 'https://www.facebook.com/privatebankingcenter' },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="card-ivory rounded-xl p-5 flex items-center gap-4 group hover:shadow-md transition-all duration-200">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: 'rgba(134,140,149,0.1)', color: '#4A7A5A' }}>
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-[#62806A] mb-0.5">{c.label}</div>
                  <div className="font-semibold text-[#1B3A28] group-hover:text-[#4A7A5A] transition-colors">{c.value}</div>
                </div>
                <span className="mr-auto text-sm" style={{ color: '#868C95' }}>←</span>
              </a>
            ))}
          </div>

          {/* Info */}
          <div>
            <h2 className="text-xl font-bold text-[#1B3A28] mb-6">פגישת ייעוץ</h2>
            <div className="card-ivory rounded-2xl p-7 shadow-sm mb-6">
              <div className="text-3xl mb-4" style={{ color: '#868C95' }}>◈</div>
              <h3 className="text-lg font-bold text-[#1B3A28] mb-3">ייעוץ ראשוני — ללא עלות</h3>
              <ul className="space-y-2 mb-6">
                {['פגישה ראשונית ללא התחייבות', 'ניתוח מצב תיק ההשקעות הנוכחי', 'הצגת אפשרויות וחלופות', 'במשרדנו ברמת אפעל, רמת גן'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#28402E]">
                    <span style={{ color: '#868C95' }}>◈</span> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:0777783000" className="btn-gold text-sm w-full justify-center">☎ 07777-83000 — תיאום פגישה</a>
            </div>

            <div className="card-ivory rounded-xl p-5 flex items-start gap-3">
              <span className="text-xl mt-0.5" style={{ color: '#868C95' }}>📍</span>
              <div>
                <div className="font-semibold text-[#1B3A28] text-sm mb-1">כתובת</div>
                <div className="text-[#28402E] text-sm">היסמין 1, רמת אפעל, רמת גן</div>
                <a href="https://nihulhon.co.il/contact" target="_blank" rel="noopener noreferrer"
                  className="text-xs mt-2 block" style={{ color: '#868C95' }}>הוראות הגעה ←</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
