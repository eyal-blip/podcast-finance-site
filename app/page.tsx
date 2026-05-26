import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import HomeTelegramFeed from '@/components/HomeTelegramFeed'

// ─── Pension Product Network — animated SVG background ───────────────────
function PensionNetworkBackground() {
  const nodes = [
    { id: 'gemel', x: 72, y: 28, r: 22 },
    { id: 'hishtalmut', x: 25, y: 55, r: 20 },
    { id: 'bituach', x: 78, y: 62, r: 20 },
    { id: 'pension', x: 48, y: 80, r: 18 },
    { id: 'stocks', x: 15, y: 28, r: 14 },
    { id: 'bonds', x: 88, y: 40, r: 12 },
    { id: 'realestate', x: 55, y: 45, r: 11 },
    { id: 'forex', x: 35, y: 18, r: 10 },
    { id: 'alt', x: 62, y: 15, r: 10 },
    { id: 'family', x: 20, y: 75, r: 13 },
  ]
  const edges = [
    ['gemel','hishtalmut'],['gemel','bituach'],['gemel','realestate'],
    ['hishtalmut','stocks'],['hishtalmut','pension'],['hishtalmut','family'],
    ['bituach','bonds'],['bituach','pension'],
    ['pension','realestate'],['pension','family'],
    ['stocks','forex'],['stocks','alt'],
    ['gemel','forex'],['bituach','alt'],
  ]
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }} aria-hidden="true">
      <defs>
        <style>{`
          @keyframes flow1{0%{stroke-dashoffset:100}100%{stroke-dashoffset:0}}
          @keyframes flow2{0%{stroke-dashoffset:80}100%{stroke-dashoffset:-80}}
          @keyframes flow3{0%{stroke-dashoffset:60}100%{stroke-dashoffset:-60}}
          @keyframes nodePulse{0%,100%{opacity:0.5}50%{opacity:1}}
          @keyframes particlePulse{0%,100%{opacity:0.4;r:1.5}50%{opacity:1;r:2.5}}
          .el{stroke:#A8AEB8;stroke-width:0.3;fill:none;stroke-dasharray:3 2}
          .ef1{animation:flow1 4s linear infinite}
          .ef2{animation:flow2 6s linear infinite}
          .ef3{animation:flow3 5s linear infinite}
          .nc{fill:none;stroke:#A8AEB8;stroke-width:0.5;animation:nodePulse 3s ease-in-out infinite}
          .nd{fill:#C8CDD5}
          .pt{fill:#D0D5DE;animation:particlePulse 2s ease-in-out infinite}
        `}</style>
      </defs>
      {edges.map(([a,b],i)=>{
        const na=nodeMap[a],nb=nodeMap[b]
        const cls=i%3===0?'ef1':i%3===1?'ef2':'ef3'
        return (
          <g key={`${a}-${b}`}>
            <line className={`el ${cls}`} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              style={{animationDelay:`${i*0.4}s`}}/>
            <circle className="pt" cx={(na.x+nb.x)/2} cy={(na.y+nb.y)/2} r="1.5"
              style={{animationDelay:`${i*0.3}s`}}/>
          </g>
        )
      })}
      {nodes.map((n,i)=>(
        <g key={n.id}>
          <circle className="nc" cx={n.x} cy={n.y} r={n.r} style={{animationDelay:`${i*0.5}s`}}/>
          <circle className="nd" cx={n.x} cy={n.y} r="1.8"/>
        </g>
      ))}
    </svg>
  )
}

// ─── Latest 6 posts (static data) ────────────────────────────────────────
const latestPosts = [
  { title: '2026 – שנה של ניהול סיכונים', author: 'ד"ר איתי גלילי', date: '1.1.26', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/האם-ישראל-יכולה-לממן-את-התוכנ' },
  { title: 'סקירת שווקים לקראת 2026', author: 'מיכל יוזפסון', date: '1.1.26', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-לקראת-רבעון-שני' },
  { title: 'האם ישראל יכולה לממן את תוכנית הבינה המלאכותית?', author: 'ד"ר איתי גלילי', date: '20.9.25', category: 'מדיניות', href: 'https://nihulhon.co.il/posts/מבט-אל-המציאות-של-שנת-2050' },
  { title: 'סקירת שווקים רבעון שלישי 2025', author: 'מיכל יוזפסון', date: '20.9.25', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024-1' },
  { title: 'סקירת שווקים לקראת רבעון שני 2025', author: 'מיכל יוזפסון', date: '1.4.25', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024' },
  { title: 'על כוחם של תאגידים וכישלונן של ממשלות', author: 'ד"ר איתי גלילי', date: '1.4.25', category: 'מאמר דעה', href: 'https://nihulhon.co.il/posts/על-כוחם-של-תאגידים-וכישלונן-ש' },
]

const catColors: Record<string, string> = {
  'סקירת שווקים': '#5A8F3C', 'מדיניות': '#6B7C99', 'מאמר דעה': '#9B5E2A',
  'השקעות': '#7B4FC9', 'פנסיה': '#2E7FC9', 'מאקרו': '#868C95',
}

// ─── Section header strip ────────────────────────────────────────────────
function SectionHeader({ icon, title, href, linkLabel }: { icon: string; title: string; href: string; linkLabel: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-b border-[#DDD5C0] bg-white flex-shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="text-sm">{icon}</span>
        <span className="text-xs font-bold text-[#1E3651]">{title}</span>
      </div>
      <a href={href} className="text-[10px] font-medium" style={{ color: '#868C95' }}>
        {linkLabel} →
      </a>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ═══ MAIN DASHBOARD GRID — 2×2 ════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 'calc(100vh - 4rem)' }}>

        {/* ── Q1 TOP-RIGHT: HERO ─────────────────────────────────────────── */}
        <div className="relative bg-[#1E3651] flex flex-col justify-center overflow-hidden order-1 md:order-2"
          style={{ minHeight: '50vh' }}>
          <PensionNetworkBackground />
          <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
            {/* Brand — LARGE */}
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #A8AEB8 60%, #6A7280 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                scale-up.finance
              </div>
              <p className="text-[#8A95A8] text-sm mt-1 leading-snug">
                קפיצת כמה רמות קדימה בניהול ההשקעות במוצרים הפנסיוניים שלך
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-12" style={{ background: '#868C95' }} />

            {/* Headline */}
            <div>
              <h1 className="text-lg md:text-xl font-black text-white leading-snug">
                המוצרים הפנסיוניים שלך
                <span className="text-[#A8AEB8]"> מורכבים מדי</span>
              </h1>
              <p className="text-[#6A7A8A] text-xs mt-2 leading-relaxed">
                קופת גמל, קרן השתלמות, ביטוח מנהלים, קרן פנסיה — כל אחד עם עשרות מסלולים,
                דמי ניהול ורגולציה משתנה. אנחנו מפשטים, מנתחים ומנהלים — בשבילך.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2">
              <a href="#lead-form" className="btn-gold text-sm px-5 py-2.5 justify-center font-bold">
                קבע פגישת זום חינמית ←
              </a>
              <a href="#map"
                className="btn-outline-gold text-sm px-5 py-2.5 justify-center !border-[#4A5A6A] !text-[#8A95A8] hover:!text-white">
                מפת המוצרים ↓
              </a>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-3 text-[10px]" style={{ color: '#4A5A6A' }}>
              {['✓ ללא עלות', '✓ זום 30 דקות', '✓ ללא התחייבות', '✓ יועץ בכיר'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Q2 TOP-LEFT: MAP ───────────────────────────────────────────── */}
        <div id="map" className="flex flex-col border-b border-l border-[#DDD5C0] order-2 md:order-1"
          style={{ minHeight: '50vh' }}>
          <SectionHeader icon="◈" title="מפת המוצרים הפנסיוניים" href="https://gemel-net.netlify.app" linkLabel="לאתר המלא" />
          <div className="flex-1 relative">
            <iframe
              src="https://gemel-net.netlify.app/map"
              title="מפת המוצרים הפנסיוניים"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* ── Q3 BOTTOM-LEFT: POSTS ──────────────────────────────────────── */}
        <div className="flex flex-col border-t border-l border-[#DDD5C0] bg-white order-3"
          style={{ minHeight: '50vh' }}>
          <SectionHeader icon="◈" title="פוסטים אחרונים" href="/posts" linkLabel="כל הפוסטים" />
          <div className="flex flex-col divide-y divide-[#DDD5C0] flex-1 overflow-hidden">
            {latestPosts.map((p) => (
              <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2 px-3 py-2 hover:bg-[#FAFAF5] transition-colors group flex-1 min-h-0">
                <span className="text-[10px] mt-0.5 flex-shrink-0 font-bold"
                  style={{ color: catColors[p.category] || '#868C95' }}>◈</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#1E3651] font-medium leading-tight line-clamp-2 group-hover:text-[#6A7280] transition-colors">
                    {p.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] px-1.5 py-0 rounded-full font-medium"
                      style={{ background: `${catColors[p.category] || '#868C95'}18`, color: catColors[p.category] || '#868C95' }}>
                      {p.category}
                    </span>
                    <span className="text-[9px] text-[#8C7B65]">{p.date} · {p.author}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="px-3 py-2 border-t border-[#DDD5C0]">
            <Link href="/posts" className="text-[10px] font-medium" style={{ color: '#868C95' }}>
              144+ פוסטים נוספים ←
            </Link>
          </div>
        </div>

        {/* ── Q4 BOTTOM-RIGHT: TELEGRAM ─────────────────────────────────── */}
        <div className="flex flex-col border-t border-[#DDD5C0] bg-white order-4"
          style={{ minHeight: '50vh' }}>
          <SectionHeader icon="✈" title="עדכונים אחרונים מטלגראם" href="https://t.me/PodcastFinance" linkLabel="@PodcastFinance" />
          <div className="flex-1 overflow-hidden">
            <HomeTelegramFeed />
          </div>
          <div className="px-3 py-2 border-t border-[#DDD5C0]">
            <a href="https://t.me/PodcastFinance" target="_blank" rel="noopener noreferrer"
              className="text-[10px] font-medium" style={{ color: '#2AABEE' }}>
              הצטרף לערוץ ←
            </a>
          </div>
        </div>
      </section>

      {/* ═══ LEAD FORM ═════════════════════════════════════════════════════ */}
      <section id="lead-form" className="py-20 bg-[#1E3651] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(134,140,149,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(134,140,149,0.4) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#868C95' }}>הצעד הראשון</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">פגישת זום חינמית</h2>
          <p className="text-xl font-bold mb-1" style={{ color: '#A8AEB8' }}>scale-up.finance</p>
          <div className="gold-divider mb-6" />
          <p className="text-[#8A95A8] text-sm mb-8 leading-relaxed">
            30 דקות עם יועץ השקעות בכיר — נבחן יחד את המצב הנוכחי,
            נזהה הזדמנויות ונסביר בדיוק מה ניתן לשפר.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* ═══ ABOUT STRIP ═══════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-t border-[#DDD5C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-lg font-black text-[#1E3651] mb-2">פיננסים — ניהול הון פרטי</h3>
            <p className="text-[#5A4F3F] text-sm leading-relaxed mb-4">
              Family Office ויועצי השקעות בכירים — מתמחים בניהול הון עבור אנשים ומשפחות.
              נסיון של עשרות שנים בשווקי ההון הישראלי והגלובלי.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link href="/about" className="btn-outline-gold text-sm px-5 py-2">אודותינו ←</Link>
              <Link href="/contact" className="btn-outline-gold text-sm px-5 py-2">צור קשר ←</Link>
              <Link href="/magazine" className="btn-outline-gold text-sm px-5 py-2">מגזין ←</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 flex-shrink-0">
            {[{ v: '25+', l: 'שנות ניסיון' }, { v: '144+', l: 'פוסטים' }, { v: 'Family', l: 'Office' }, { v: '4×', l: 'מגזין/שנה' }].map(s => (
              <div key={s.l} className="text-center p-4 rounded-xl" style={{ background: '#F8F3E8' }}>
                <div className="text-xl font-black text-[#1E3651]">{s.v}</div>
                <div className="text-xs text-[#8C7B65]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
