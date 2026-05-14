export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Consultation CTA */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(30,25,10,0.8) 100%)',
              border: '1px solid rgba(201,168,76,0.4)',
            }}
          >
            <div className="text-4xl mb-4" style={{ color: '#C9A84C' }}>◈</div>
            <h3 className="text-2xl font-bold text-white mb-3">פגישת ייעוץ</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              פגישה ראשונית ללא התחייבות עם יועץ השקעות בכיר — במשרדנו ברמת אפעל, רמת גן.
            </p>
            <div className="space-y-3">
              <a
                href="tel:0777783000"
                className="btn-gold text-sm w-full justify-center"
              >
                ☎ 07777-83000
              </a>
              <a
                href="https://wa.me/9720505938770"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-sm w-full justify-center"
              >
                💬 שלח וואטסאפ
              </a>
              <a
                href="mailto:info@nihulhon.co.il"
                className="block text-center text-xs text-gray-500 hover:text-gray-300 transition-colors py-1"
              >
                info@nihulhon.co.il
              </a>
            </div>
          </div>

          {/* Newsletter + Magazine CTA */}
          <div className="space-y-6">
            {/* Newsletter */}
            <div className="card-dark rounded-xl p-6">
              <div className="text-2xl mb-3" style={{ color: '#C9A84C' }}>✉</div>
              <h3 className="text-lg font-bold text-white mb-2">הניוזלטר החודשי</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                שני ניוזלטרים חודשיים ללקוחות הבנקאות הפרטית — ניוזלטר פיננסי + ניוזלטר תרבות ופנאי.
              </p>
              <a
                href="https://nihulhon.co.il/newsletter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm w-full justify-center"
              >
                הרשמה לניוזלטר ←
              </a>
            </div>

            {/* Telegram */}
            <div className="card-dark rounded-xl p-6">
              <div className="text-2xl mb-3" style={{ color: '#C9A84C' }}>✈</div>
              <h3 className="text-lg font-bold text-white mb-2">ערוץ הטלגראם</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                עדכונים שוטפים, פרקי פודקאסט חדשים ותכנים פיננסיים ישירות לטלפון שלך.
              </p>
              <a
                href="https://t.me/PodcastFinance"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-sm w-full justify-center"
              >
                הצטרף לטלגראם ←
              </a>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span style={{ color: '#C9A84C' }}>📍</span>
            היסמין 1, רמת אפעל, רמת גן | פגישה ראשונית ללא התחייבות
          </div>
        </div>
      </div>
    </section>
  )
}
