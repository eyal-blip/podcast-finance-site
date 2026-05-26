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
          @keyframes pp{0%,100%{opacity:0.4;r:1.5}50%{opacity:1;r:2.5}}
          .el{stroke:#7DB895;stroke-width:0.3;fill:none;stroke-dasharray:3 2}
          .ef1{animation:flow1 4s linear infinite}
          .ef2{animation:flow2 6s linear infinite}
          .ef3{animation:flow3 5s linear infinite}
          .nc{fill:none;stroke:#7DB895;stroke-width:0.5;animation:nodePulse 3s ease-in-out infinite}
          .nd{fill:#9CCAB0}
          .pt{fill:#7DB895;animation:pp 2s ease-in-out infinite}
        `}</style>
      </defs>
      {edges.map(([a,b],i)=>{
        const na=nodeMap[a],nb=nodeMap[b]
        const cls=i%3===0?'ef1':i%3===1?'ef2':'ef3'
        return (
          <g key={`${a}-${b}`}>
            <line className={`el ${cls}`} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} style={{animationDelay:`${i*0.4}s`}}/>
            <circle className="pt" cx={(na.x+nb.x)/2} cy={(na.y+nb.y)/2} r="1.5" style={{animationDelay:`${i*0.3}s`}}/>
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

// ─── Latest 6 posts with excerpts ────────────────────────────────────────
const latestPosts = [
  { title: '2026 – שנה של ניהול סיכונים', author: 'ד"ר איתי גלילי', date: '1.1.26', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/האם-ישראל-יכולה-לממן-את-התוכנ', excerpt: 'השווקים הפיננסיים מסיימים את שנת 2025 בתשואות נאות. שוק ההון הישראלי בולט לחיוב על רקע סיום המלחמה.' },
  { title: 'סקירת שווקים לקראת 2026', author: 'מיכל יוזפסון', date: '1.1.26', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-לקראת-רבעון-שני', excerpt: 'שווקי המניות הגלובליים הציגו ביצועים חזקים, למרות ריבוי זעזועים פוליטיים וגיאופוליטיים.' },
  { title: 'האם ישראל יכולה לממן את תוכנית הבינה המלאכותית?', author: 'ד"ר איתי גלילי', date: '20.9.25', category: 'מדיניות', href: 'https://nihulhon.co.il/posts/מבט-אל-המציאות-של-שנת-2050', excerpt: 'בשנתיים האחרונות המהפכה הטכנולוגית בתחום הבינה המלאכותית יצאה מתחומי מוסדות המחקר לשימושים יומיומיים.' },
  { title: 'סקירת שווקים רבעון שלישי 2025', author: 'מיכל יוזפסון', date: '20.9.25', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024-1', excerpt: 'המומנטום החיובי בשווקי המניות והאג"ח נמשכו אל תוך שנת 2025 והביאו את השווקים לשיאים חדשים.' },
  { title: 'סקירת שווקים לקראת רבעון שני 2025', author: 'מיכל יוזפסון', date: '1.4.25', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024', excerpt: 'שנת 2025 נפתחה במומנטום חיובי בשווקי המניות והאג"ח, עם תחזיות צמיחה יציבות לכלכלה הגלובלית.' },
  { title: 'על כוחם של תאגידים וכישלונן של ממשלות', author: 'ד"ר איתי גלילי', date: '1.4.25', category: 'מאמר דעה', href: 'https://nihulhon.co.il/posts/על-כוחם-של-תאגידים-וכישלונן-ש', excerpt: 'ישראל נמצאת בתקופה מאתגרת מאוד בהיבט הביטחוני, הפוליטי והחברתי — ונדרשת הנהגה כלכלית חזקה.' },
  { title: 'השקעה בקרנות גידור — מה שצריך לדעת', author: 'ד"ר איתי גלילי', date: '1.9.24', category: 'השקעות', href: 'https://nihulhon.co.il/posts/', excerpt: 'קרנות גידור כיצד הן עובדות, מה היתרונות והחסרונות ומי צריך לשקול השקעה בהן.' },
  { title: 'תכנון פנסיוני בגיל 50 — עדיין לא מאוחר', author: 'מיכל יוזפסון', date: '1.6.24', category: 'פנסיה', href: 'https://nihulhon.co.il/posts/', excerpt: 'גם בגיל 50 אפשר לשפר משמעותית את מצב הפנסיה — הצעדים החשובים שניתן לנקוט עכשיו.' },
  { title: 'ניהול הון בעידן האינפלציה', author: 'ד"ר איתי גלילי', date: '1.3.24', category: 'מאקרו', href: 'https://nihulhon.co.il/posts/', excerpt: 'כיצד מגנים על ערך ההון בסביבה אינפלציונית — אסטרטגיות ונכסים שמייצרים הגנה אמיתית.' },
]

const catColors: Record<string, string> = {
  'סקירת שווקים': '#2A7A4A', 'מדיניות': '#4A6A8A', 'מאמר דעה': '#7A5A2A',
  'השקעות': '#5A4A8A', 'פנסיה': '#2A6A8A', 'מאקרו': '#4A6A5A',
}

// ─── Quadrant strip header ────────────────────────────────────────────────
function QuadHeader({ icon, title, href, linkLabel }: { icon: string; title: string; href: string; linkLabel: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 flex-shrink-0"
      style={{ background: '#1B3A28', borderBottom: '1px solid #2A5C3A' }}>
      <div className="flex items-center gap-1.5">
        <span className="text-sm">{icon}</span>
        <span className="text-xs font-bold text-white">{title}</span>
      </div>
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
        className="text-[10px] font-medium hover:text-white transition-colors" style={{ color: '#8AB898' }}>
        {linkLabel} →
      </a>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ═══ MAIN 2×2 DASHBOARD — bottle green frame ══════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: 'calc(100vh - 4rem)', background: '#2A5C3A', gap: '2px' }}>

        {/* ── Q1: HERO (top-right in RTL = first in DOM) ─────────────────── */}
        <div className="relative bg-[#1B3A28] flex flex-col justify-center overflow-hidden order-1"
          style={{ minHeight: '50vh' }}>
          <PensionNetworkBackground />

          {/* Glass backdrop for text legibility */}
          <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
            <div className="rounded-2xl p-5 flex flex-col gap-4"
              style={{ background: 'rgba(10, 28, 18, 0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(90, 160, 110, 0.2)' }}>

              {/* Brand — VERY LARGE */}
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none"
                  style={{ background: 'linear-gradient(135deg, #ffffff 0%, #B0D8BC 60%, #7DB895 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  scale-up.finance
                </div>
                <p className="text-sm mt-2 leading-snug font-semibold" style={{ color: '#A0CCB0' }}>
                  קפיצת כמה רמות קדימה בניהול ההשקעות במוצרים הפנסיוניים שלך
                </p>
              </div>

              <div className="h-px w-10" style={{ background: '#5A9A72' }} />

              {/* Headline */}
              <div>
                <h1 className="text-lg md:text-xl font-black text-white leading-snug">
                  המוצרים הפנסיוניים שלך
                  <span style={{ color: '#8ECFA6' }}> מורכבים מדי</span>
                </h1>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: '#7AAA8A' }}>
                  קופת גמל, קרן השתלמות, ביטוח מנהלים, קרן פנסיה — כל אחד עם עשרות מסלולים,
                  דמי ניהול ורגולציה משתנה. אנחנו מפשטים, מנתחים ומנהלים — בשבילך.
                </p>
              </div>

              {/* CTA */}
              <div>
                <a href="#lead-form" className="btn-gold text-sm px-5 py-2.5 justify-center font-bold">
                  קבע פגישת זום חינמית ←
                </a>
              </div>

              {/* Trust */}
              <div className="flex flex-wrap gap-3 text-[10px]" style={{ color: '#4A7A5A' }}>
                {['✓ ללא עלות', '✓ זום 30 דקות', '✓ ללא התחייבות', '✓ יועץ בכיר'].map(t => (
                  <span key={t} className="font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Q2: MAP (top-left in RTL = second in DOM) ──────────────────── */}
        <div id="map" className="flex flex-col overflow-hidden order-2"
          style={{ minHeight: '50vh', background: '#fff' }}>
          {/* iframe fills entire quadrant — gemel-net has its own top bar */}
          <iframe
            src="https://gemel-net.netlify.app/map"
            title="מפת המוצרים הפנסיוניים"
            className="w-full flex-1 border-0"
            style={{ minHeight: '50vh' }}
            loading="lazy"
          />
        </div>

        {/* ── Q3: POSTS (bottom-right in RTL = third in DOM) ─────────────── */}
        <div className="flex flex-col overflow-hidden order-3" style={{ minHeight: '50vh', background: '#fff' }}>
          <QuadHeader icon="◈" title="פוסטים אחרונים" href="/posts" linkLabel="כל 144+ הפוסטים" />
          <div className="grid grid-cols-3 overflow-hidden flex-1" style={{ gridTemplateRows: 'repeat(3, 1fr)' }}>
            {latestPosts.map((p) => (
              <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer"
                className="flex flex-col p-2.5 hover:bg-[#EAF3ED] transition-colors group overflow-hidden"
                style={{ borderBottom: '1px solid #BACEC4', borderLeft: '1px solid #BACEC4' }}>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[9px] px-1.5 py-0 rounded-full font-semibold flex-shrink-0"
                    style={{ background: `${catColors[p.category] || '#2A5C3A'}18`, color: catColors[p.category] || '#2A5C3A' }}>
                    {p.category}
                  </span>
                  <span className="text-[9px] flex-shrink-0" style={{ color: '#62806A' }}>{p.date}</span>
                </div>
                <p className="text-[11px] font-bold leading-snug line-clamp-2 mb-1 group-hover:text-[#2A5C3A] transition-colors"
                  style={{ color: '#1B3A28' }}>
                  {p.title}
                </p>
                <p className="text-[10px] leading-snug line-clamp-2 flex-1" style={{ color: '#62806A' }}>
                  {p.excerpt}
                </p>
                <span className="text-[9px] mt-1 font-medium" style={{ color: '#4A7A5A' }}>
                  {p.author}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Q4: TELEGRAM (bottom-left in RTL = fourth in DOM) ──────────── */}
        <div className="flex flex-col overflow-hidden order-4" style={{ minHeight: '50vh', background: '#fff' }}>
          <QuadHeader icon="✈" title="עדכונים מטלגראם" href="https://t.me/PodcastFinance" linkLabel="@PodcastFinance" />
          <div className="flex-1 overflow-hidden">
            <HomeTelegramFeed />
          </div>
        </div>
      </section>

      {/* ═══ LEAD FORM ═════════════════════════════════════════════════════ */}
      <section id="lead-form" className="py-20 relative overflow-hidden" style={{ background: '#1B3A28' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(90,160,110,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(90,160,110,0.4) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#5A9A72' }}>הצעד הראשון</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">פגישת זום חינמית</h2>
          <p className="text-lg font-bold mb-1" style={{ color: '#7DB895' }}>scale-up.finance</p>
          <div className="gold-divider mb-6" />
          <p className="text-sm mb-8 leading-relaxed" style={{ color: '#7AAA8A' }}>
            30 דקות עם יועץ השקעות בכיר — נבחן יחד את המצב הנוכחי,
            נזהה הזדמנויות ונסביר בדיוק מה ניתן לשפר.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* ═══ ABOUT STRIP ═══════════════════════════════════════════════════ */}
      <section className="py-12 border-t" style={{ background: '#fff', borderColor: '#BACEC4' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-lg font-black mb-2" style={{ color: '#1B3A28' }}>פיננסים — ניהול הון פרטי</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#28402E' }}>
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
              <div key={s.l} className="text-center p-4 rounded-xl" style={{ background: '#EAF3ED' }}>
                <div className="text-xl font-black" style={{ color: '#1B3A28' }}>{s.v}</div>
                <div className="text-xs" style={{ color: '#62806A' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
