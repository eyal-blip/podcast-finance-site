import Link from 'next/link'
import LeadForm from '@/components/LeadForm'

// ─── Pension Product Network — SVG nodes + animated particles ─────────────
// Rendered server-side as static SVG (CSS animation runs in browser)
function PensionNetworkBackground() {
  const nodes = [
    { id: 'gemel', x: 72, y: 28, label: 'קופת גמל', r: 22 },
    { id: 'hishtalmut', x: 25, y: 55, label: 'קרן השתלמות', r: 20 },
    { id: 'bituach', x: 78, y: 62, label: 'ביטוח מנהלים', r: 20 },
    { id: 'pension', x: 48, y: 80, label: 'קרן פנסיה', r: 18 },
    { id: 'stocks', x: 15, y: 28, label: 'שוק ההון', r: 14 },
    { id: 'bonds', x: 88, y: 40, label: 'אג"ח', r: 12 },
    { id: 'realestate', x: 55, y: 45, label: 'נדל"ן', r: 11 },
    { id: 'forex', x: 35, y: 18, label: 'מט"ח', r: 10 },
    { id: 'alt', x: 62, y: 15, label: 'השקעות אלט׳', r: 10 },
    { id: 'family', x: 20, y: 75, label: 'Family Office', r: 13 },
  ]

  const edges = [
    ['gemel', 'hishtalmut'], ['gemel', 'bituach'], ['gemel', 'realestate'],
    ['hishtalmut', 'stocks'], ['hishtalmut', 'pension'], ['hishtalmut', 'family'],
    ['bituach', 'bonds'], ['bituach', 'pension'],
    ['pension', 'realestate'], ['pension', 'family'],
    ['stocks', 'forex'], ['stocks', 'alt'],
    ['gemel', 'forex'], ['bituach', 'alt'],
  ]

  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.18 }}
      aria-hidden="true"
    >
      <defs>
        <style>{`
          @keyframes flow1 { 0%{stroke-dashoffset:100} 100%{stroke-dashoffset:0} }
          @keyframes flow2 { 0%{stroke-dashoffset:80} 100%{stroke-dashoffset:-80} }
          @keyframes flow3 { 0%{stroke-dashoffset:60} 100%{stroke-dashoffset:-60} }
          @keyframes pulse1 { 0%,100%{opacity:0.5;r:1.5} 50%{opacity:1;r:2.5} }
          @keyframes pulse2 { 0%,100%{opacity:0.3;r:1} 50%{opacity:0.8;r:1.8} }
          @keyframes nodePulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
          .edge-line { stroke: #A8AEB8; stroke-width: 0.3; fill: none; stroke-dasharray: 3 2; }
          .edge-flow1 { animation: flow1 4s linear infinite; }
          .edge-flow2 { animation: flow2 6s linear infinite; }
          .edge-flow3 { animation: flow3 5s linear infinite; }
          .node-circle { fill: none; stroke: #A8AEB8; stroke-width: 0.5; animation: nodePulse 3s ease-in-out infinite; }
          .node-dot { fill: #C8CDD5; }
          .particle { fill: #D0D5DE; animation: pulse1 2s ease-in-out infinite; }
          .particle2 { fill: #B8BEC8; animation: pulse2 3s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Edges */}
      {edges.map(([a, b], i) => {
        const na = nodeMap[a], nb = nodeMap[b]
        const cls = i % 3 === 0 ? 'edge-flow1' : i % 3 === 1 ? 'edge-flow2' : 'edge-flow3'
        const mid = { x: (na.x + nb.x) / 2, y: (na.y + nb.y) / 2 }
        return (
          <g key={`${a}-${b}`}>
            <line className={`edge-line ${cls}`}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              style={{ animationDelay: `${i * 0.4}s` }} />
            <circle className="particle" cx={mid.x} cy={mid.y} r="1.5"
              style={{ animationDelay: `${i * 0.3}s` }} />
          </g>
        )
      })}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={n.id} style={{ animationDelay: `${i * 0.2}s` }}>
          <circle className="node-circle" cx={n.x} cy={n.y} r={n.r}
            style={{ animationDelay: `${i * 0.5}s` }} />
          <circle className="node-dot" cx={n.x} cy={n.y} r="1.8" />
        </g>
      ))}

      {/* Extra ambient particles */}
      {[
        [30, 40], [65, 35], [42, 60], [80, 22], [10, 50],
        [55, 72], [38, 88], [75, 78], [18, 88], [90, 70],
      ].map(([x, y], i) => (
        <circle key={`amb-${i}`} className="particle2" cx={x} cy={y} r="0.8"
          style={{ animationDelay: `${i * 0.7}s` }} />
      ))}
    </svg>
  )
}

// ─── Stat items ────────────────────────────────────────────────────────────
const stats = [
  { value: '₪2.8T', label: 'חסכונות פנסיוניים בישראל', sub: 'נכון ל-2024' },
  { value: '4', label: 'מוצרים עיקריים', sub: 'קופת גמל, השתלמות, ביטוח מנהלים, פנסיה' },
  { value: '35-55', label: 'גיל קריטי לניהול', sub: 'שנות הצבירה החשובות ביותר' },
  { value: '~1%', label: 'דמי ניהול שניתן לחסוך', sub: 'שווה עשרות אלפי שקלים לאורך זמן' },
]

// ─── Problem cards ─────────────────────────────────────────────────────────
const problems = [
  {
    icon: '◈',
    title: 'ריבוי מוצרים',
    text: 'קופת גמל להשקעה, קרן השתלמות, ביטוח מנהלים, קרן פנסיה — כל אחד עם כללים, מסלולים ודמי ניהול שונים.',
  },
  {
    icon: '◉',
    title: 'מידע יתר',
    text: 'דוחות שנתיים, מסלולי השקעה, מקדמי המרה — הכמות המידע מבלבלת, ורוב האנשים לא יודעים מה לעשות איתה.',
  },
  {
    icon: '◆',
    title: 'עלויות נסתרות',
    text: 'דמי ניהול מהצבירה, דמי ניהול מהפקדה, עמלות נלוות — ההבדל בין חברה לחברה יכול לעמוד על מאות אלפי שקלים.',
  },
  {
    icon: '◇',
    title: 'הזדמנויות שמפספסים',
    text: 'ניוד בין מסלולים, מינוף קרן השתלמות, אופטימיזציית מס — מי שלא מתנהל נכון משאיר הרבה כסף על השולחן.',
  },
]

// ─── Content sections (posts / telegram) ──────────────────────────────────
const contentLinks = [
  {
    href: '/posts',
    icon: '◈',
    title: '144+ פוסטים מקצועיים',
    text: 'ניתוחי שוק, סקירות מוצרים פנסיוניים ודעות מומחים — ישירות ממומחי ניהול ההון שלנו.',
    color: '#868C95',
    badge: 'מאמרים',
  },
  {
    href: '/telegram',
    icon: '✈',
    title: 'ערוץ טלגראם',
    text: 'עדכונים שוטפים על שוקי ההון, שינויי רגולציה ומה שחשוב לדעת — ישירות לטלפון.',
    color: '#2AABEE',
    badge: '@PodcastFinance',
  },
  {
    href: '/podcast',
    icon: '▶',
    title: 'פודקאסט YouTube',
    text: 'פרקים מעמיקים עם מומחים — על בנקאות פרטית, ניהול הון ושוקי ההון הגלובליים.',
    color: '#E53935',
    badge: 'ערוץ @financeinst',
  },
  {
    href: '/articles',
    icon: '◉',
    title: 'מאמרים עדכניים',
    text: 'תכנים נבחרים מרשות ניירות ערך, הכנסת, האוצר וגופי מחקר מובילים.',
    color: '#5A8F3C',
    badge: 'עדכון שוטף',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1E3651]">
        <PensionNetworkBackground />

        {/* Gradient overlay — fade bottom */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 50%, #1E3651 100%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6 py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(134,140,149,0.15)', color: '#A8AEB8', border: '1px solid rgba(134,140,149,0.25)' }}>
            <span style={{ color: '#868C95' }}>◈</span>
            scale-up.finance — ניהול פנסיה חכם
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            המוצרים הפנסיוניים שלך
            <br />
            <span style={{ color: '#A8AEB8' }}>מורכבים מדי</span>
          </h1>

          <p className="text-[#8A95A8] text-base sm:text-lg leading-relaxed max-w-xl">
            קופת גמל, קרן השתלמות, ביטוח מנהלים, קרן פנסיה —
            כל אחד עם עשרות מסלולים, דמי ניהול ורגולציה משתנה.
            <br />
            <strong className="text-white">אנחנו מפשטים, מנתחים ומנהלים — בשבילך.</strong>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
            <a href="#lead-form"
              className="btn-gold text-base px-8 py-4 justify-center font-bold">
              קבע פגישת זום חינמית ←
            </a>
            <a href="#map"
              className="btn-outline-gold text-base px-8 py-4 justify-center !border-[#868C95] !text-[#A8AEB8] hover:!text-white">
              מפת המוצרים הפנסיוניים
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-4 justify-center text-xs" style={{ color: '#6A7280' }}>
            {['✓ ללא עלות', '✓ ללא התחייבות', '✓ פגישת זום 30 דקות', '✓ יועץ השקעות בכיר'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-8 bg-[#868C95]" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          <span className="text-[#868C95] text-xs">גלול למטה</span>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-[#DDD5C0] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-black mb-1"
                  style={{ background: 'linear-gradient(135deg, #1E3651 0%, #6A7280 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {s.value}
                </div>
                <div className="text-sm font-semibold text-[#1E3651] mb-0.5">{s.label}</div>
                <div className="text-xs text-[#8C7B65]">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8F3E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#868C95] mb-3">האתגר</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E3651] mb-3">
              למה כדאי לעצור ולבדוק?
            </h2>
            <div className="gold-divider" />
            <p className="text-[#5A4F3F] text-sm mt-5 max-w-xl mx-auto leading-relaxed">
              רוב האנשים בגיל 35–55 לא יודעים בדיוק מה יש להם, כמה הם משלמים
              ואם המסלול הנוכחי מתאים למצבם.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {problems.map((p) => (
              <div key={p.title} className="card-ivory rounded-xl p-6">
                <div className="text-2xl mb-3" style={{ color: '#868C95' }}>{p.icon}</div>
                <h3 className="font-bold text-[#1E3651] mb-2 text-base">{p.title}</h3>
                <p className="text-[#5A4F3F] text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ───────────────────────────────────────────────────── */}
      <section id="map" className="py-16 bg-white border-y border-[#DDD5C0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#868C95] mb-3">כלי אינטראקטיבי</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E3651] mb-3">מפת המוצרים הפנסיוניים</h2>
            <div className="gold-divider" />
            <p className="text-[#5A4F3F] text-sm mt-4 max-w-lg mx-auto">
              גלה את הקשרים בין המוצרים הפנסיוניים השונים, ההשקעות וגופי הניהול — בצורה ויזואלית ואינטואיטיבית.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#DDD5C0] shadow-sm"
            style={{ height: 'min(600px, 70vw)' }}>
            <iframe
              src="https://gemel-net.netlify.app/map"
              title="מפת המוצרים הפנסיוניים"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

          <div className="text-center mt-6">
            <a
              href="https://gemel-net.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-sm px-6 py-2.5"
            >
              לאתר gemel-net המלא ←
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8F3E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#868C95] mb-3">תוכן מקצועי</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E3651] mb-3">ידע שמניב תוצאות</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-2 gap-5">
            {contentLinks.map((c) => (
              <Link key={c.href} href={c.href}
                className="group card-ivory rounded-xl p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold" style={{ color: c.color }}>{c.icon}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${c.color}18`, color: c.color }}>
                    {c.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#1E3651] mb-2 group-hover:text-[#6A7280] transition-colors">
                  {c.title}
                </h3>
                <p className="text-[#5A4F3F] text-sm leading-relaxed flex-1">{c.text}</p>
                <div className="mt-4 text-sm font-medium flex items-center gap-1" style={{ color: c.color }}>
                  לעמוד <span>←</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ─────────────────────────────────────────────────────── */}
      <section id="lead-form" className="py-20 bg-[#1E3651] relative overflow-hidden">
        {/* subtle network bg */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(134,140,149,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(134,140,149,0.4) 0%, transparent 50%)',
          }} />

        <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#868C95' }}>
            הצעד הראשון
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            פגישת זום חינמית
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-[#8A95A8] text-sm mb-8 leading-relaxed">
            30 דקות עם יועץ השקעות בכיר — נבחן יחד את המצב הנוכחי,
            נזהה הזדמנויות ונסביר בדיוק מה ניתן לשפר.
          </p>

          <LeadForm />
        </div>
      </section>

      {/* ── ABOUT STRIP ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-[#DDD5C0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-xl font-black text-[#1E3651] mb-3">פיננסים — ניהול הון פרטי</h3>
            <p className="text-[#5A4F3F] text-sm leading-relaxed mb-4">
              Family Office ויועצי השקעות בכירים — מתמחים בניהול הון עבור
              אנשים ומשפחות עם הון גבוה. נסיון של עשרות שנים בשווקי ההון הישראלי והגלובלי.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link href="/about" className="btn-outline-gold text-sm px-5 py-2">אודותינו ←</Link>
              <Link href="/contact" className="btn-outline-gold text-sm px-5 py-2">צור קשר ←</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 flex-shrink-0">
            {[
              { v: '25+', l: 'שנות ניסיון' },
              { v: '144+', l: 'פוסטים מקצועיים' },
              { v: 'Family', l: 'Office' },
              { v: '4×', l: 'מגזין בשנה' },
            ].map(s => (
              <div key={s.l} className="text-center p-4 rounded-xl" style={{ background: '#F8F3E8' }}>
                <div className="text-2xl font-black text-[#1E3651]">{s.v}</div>
                <div className="text-xs text-[#8C7B65]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
