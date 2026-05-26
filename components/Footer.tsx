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
    <footer className="bg-[#1B3A28] text-[#EAF3ED] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#868C95' }}>
                <span className="text-sm font-bold" style={{ color: '#868C95' }}>PF</span>
              </div>
              <div>
                <div className="font-bold text-white">פודקאסט פיננסים</div>
                <div className="text-xs" style={{ color: '#868C95' }}>podcast.finance</div>
              </div>
            </div>
            <p className="text-[#8AB898] text-sm leading-relaxed mb-4">
              ידע פיננסי מקצועי ועדכני לקוחות הבנקאות הפרטית של כל הבנקים — פודקאסטים, מאמרים, ומגזין רבעוני.
            </p>
            <p className="text-xs text-[#3A5A48]">
              בשיתוף{' '}
              <a href="https://nihulhon.co.il" target="_blank" rel="noopener noreferrer" style={{ color: '#868C95' }} className="hover:opacity-80 transition-opacity">
                פיננסים ניהול הון פרטי בע״מ
              </a>
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#868C95' }}>
              ניווט מהיר
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#8AB898] hover:text-white text-sm transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#868C95' }}>
              פרטי קשר
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="tel:0777783000" className="text-[#8AB898] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#868C95' }}>☎</span> 07777-83000</a></li>
              <li><a href="https://wa.me/9720505938770" target="_blank" rel="noopener noreferrer" className="text-[#8AB898] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#868C95' }}>💬</span> 050-5938770</a></li>
              <li><a href="mailto:info@nihulhon.co.il" className="text-[#8AB898] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#868C95' }}>✉</span> info@nihulhon.co.il</a></li>
              <li><a href="https://t.me/PodcastFinance" target="_blank" rel="noopener noreferrer" className="text-[#8AB898] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#868C95' }}>✈</span> ערוץ טלגראם</a></li>
              <li><a href="https://www.facebook.com/privatebankingcenter" target="_blank" rel="noopener noreferrer" className="text-[#8AB898] hover:text-white transition-colors flex items-center gap-2"><span style={{ color: '#868C95' }}>f</span> Facebook</a></li>
              <li className="text-[#3A5A48] flex items-center gap-2"><span style={{ color: '#868C95' }}>📍</span> היסמין 1, רמת אפעל, רמת גן</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1A3520] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#3A5A48]">
          <p>© 2026 פיננסים ניהול הון פרטי בע״מ | כל הזכויות שמורות</p>
          <div className="flex gap-4">
            <a href="https://nihulhon.co.il/policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#8AB898] transition-colors">מדיניות פרטיות</a>
            <span>|</span>
            <span>רישיון ייעוץ השקעות ורישיון ייעוץ פנסיוני</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
