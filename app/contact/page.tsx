import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'צור קשר | podcast.finance',
  description: 'פגישת ייעוץ ראשונית ללא התחייבות — פיננסים ניהול הון פרטי',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F3E8]">
      <div className="bg-[#1C1814] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm" style={{ borderColor: 'rgba(201,168,76,0.4)', color: '#E2C97E', background: 'rgba(201,168,76,0.08)' }}>
            ◈ צור קשר
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">פגישת <span style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #E2C97E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ייעוץ</span></h1>
          <p className="text-[#B0A090] text-lg">ראשונית ללא התחייבות — במשרדנו ברמת אפעל, רמת גן</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Options */}
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#1C1814] mb-6">דרכי יצירת קשר</h2>
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
                  style={{ background: 'rgba(201,168,76,0.1)', color: '#A07830' }}>
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs text-[#8C7B65] mb-0.5">{c.label}</div>
                  <div className="font-semibold text-[#1C1814] group-hover:text-[#A07830] transition-colors">{c.value}</div>
                </div>
                <span className="mr-auto text-sm" style={{ color: '#C9A84C' }}>←</span>
              </a>
            ))}
          </div>

          {/* Info */}
          <div>
            <h2 className="text-xl font-bold text-[#1C1814] mb-6">פגישת ייעוץ</h2>
            <div className="card-ivory rounded-2xl p-7 shadow-sm mb-6">
              <div className="text-3xl mb-4" style={{ color: '#C9A84C' }}>◈</div>
              <h3 className="text-lg font-bold text-[#1C1814] mb-3">ייעוץ ראשוני — ללא עלות</h3>
              <ul className="space-y-2 mb-6">
                {['פגישה ראשונית ללא התחייבות', 'ניתוח מצב תיק ההשקעות הנוכחי', 'הצגת אפשרויות וחלופות', 'במשרדנו ברמת אפעל, רמת גן'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#5A4F3F]">
                    <span style={{ color: '#C9A84C' }}>◈</span> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:0777783000" className="btn-gold text-sm w-full justify-center">☎ 07777-83000 — תיאום פגישה</a>
            </div>

            <div className="card-ivory rounded-xl p-5 flex items-start gap-3">
              <span className="text-xl mt-0.5" style={{ color: '#C9A84C' }}>📍</span>
              <div>
                <div className="font-semibold text-[#1C1814] text-sm mb-1">כתובת</div>
                <div className="text-[#5A4F3F] text-sm">היסמין 1, רמת אפעל, רמת גן</div>
                <a href="https://nihulhon.co.il/contact" target="_blank" rel="noopener noreferrer"
                  className="text-xs mt-2 block" style={{ color: '#C9A84C' }}>הוראות הגעה ←</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
