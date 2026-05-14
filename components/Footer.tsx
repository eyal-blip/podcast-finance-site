import Link from 'next/link'

const footerLinks = [
  { href: '/podcast', label: 'פודקאסט YouTube' },
  { href: '/telegram', label: 'ערוץ טלגראם' },
  { href: '/articles', label: 'מאמרים עדכניים' },
  { href: '/posts', label: 'פוסטים' },
  { href: '/magazine', label: 'מגזין הבנקאות הפרטית' },
  { href: '/about', label: 'אודות' },
  { href: '/contact', label: 'צור קשר' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1C1814] text-[#F8F3E8] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#C9A84C' }}>
                <span className="text-sm font-bold" style={{ color: '#C9A84C' }}>PF</span>
              </div>
              <div>
                <div className="font-bold text-white">פודקאסט פיננסים</div>
                <div className="text-xs" style={{ color: '#C9A84C' }}>podcast.finance</div>
              </div>
            </div>
            <p className="text-[#B0A090] text-sm leading-relaxed mb-4">
              ידע פיננסי מקצועי ועדכני לקוחות הבנקאות הפרטית של כל הבנקים — פודקאסטים, מאמרים, ומגזין רבעוני.
            </p>
            <p className="text-xs text-[#7A6A5A]">
              בשיתוף{' '}
              <a href="https://nihulhon.co.il" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A84C' }} className="hover:opacity-80 transition-opacity">
                פיננסים ניהול הון פרטי בע״מ
              </a>
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#C9A84C' }}>
              ניווט מהיר
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#B0A090] hover:text-white text-sm transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#C9A84C' }}>
              פרטי קשר
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="tel:0777783000" className="text-[#B0A090] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#C9A84C' }}>☎</span> 07777-83000</a></li>
              <li><a href="https://wa.me/9720505938770" target="_blank" rel="noopener noreferrer" className="text-[#B0A090] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#C9A84C' }}>💬</span> 050-5938770</a></li>
              <li><a href="mailto:info@nihulhon.co.il" className="text-[#B0A090] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#C9A84C' }}>✉</span> info@nihulhon.co.il</a></li>
              <li><a href="https://t.me/PodcastFinance" target="_blank" rel="noopener noreferrer" className="text-[#B0A090] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#C9A84C' }}>✈</span> ערוץ טלגראם</a></li>
              <li><a href="https://www.facebook.com/privatebankingcenter" target="_blank" rel="noopener noreferrer" className="text-[#B0A090] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#C9A84C' }}>f</span> Facebook</a></li>
              <li className="text-[#7A6A5A] flex items-center gap-2"><span style={{ color: '#C9A84C' }}>📍</span> היסמין 1, רמת אפעל, רמת גן</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3A3028] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#7A6A5A]">
          <p>© 2026 פיננסים ניהול הון פרטי בע״מ | כל הזכויות שמורות</p>
          <div className="flex gap-4">
            <a href="https://nihulhon.co.il/policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#B0A090] transition-colors">מדיניות פרטיות</a>
            <span>|</span>
            <span>רישיון ייעוץ השקעות ורישיון ייעוץ פנסיוני</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
