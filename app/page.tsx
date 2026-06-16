import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import HomeTelegramFeed from '@/components/HomeTelegramFeed'
import HomeMapEmbed from '@/components/HomeMapEmbed'

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

// ─── Audience paths — feed the 4 campaign landing pages ───────────────────
const audiencePaths = [
  { href: '/lp/complexity', icon: '◈', title: 'עשרות מסלולים — מה מתאים לך?', body: 'קופות גמל, השתלמות, פנסיה, ביטוחי מנהלים. כלי השוואה + ליווי יועץ בכיר.' },
  { href: '/lp/fees', icon: '%', title: 'כמה דמי ניהול אתה משלם?', body: 'דמי ניהול מהנמוכים בענף — בלי עמלות שיווק מנופחות. בדיקה אישית ללא עלות.' },
  { href: '/lp/abroad', icon: '✈', title: 'ישראלי שחי בחו"ל?', body: 'הפנסיה שלך עלולה להיתקע. נבחן אם נכון לנייד כספים מפנסיה לקופת גמל.' },
]

// ─── Latest 6 posts with excerpts ────────────────────────────────────────
const latestPosts = [
  { title: '2026 – שנה של ניהול סיכונים', author: 'ד"ר איתי גלילי', date: '1.1.26', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/האם-ישראל-יכולה-לממן-את-התוכנ', excerpt: 'השווקים הפיננסיים מסיימים את שנת 2025 בתשואות נאות. שוק ההון הישראלי בולט לחיוב על רקע סיום המלחמה. המדד המוביל רשם עלייה של כ-20%, ושיעורי האינפלציה מתמתנים. אי-הוודאות הגיאופוליטית האזורית ממשיכה לשמש גורם סיכון מרכזי. המלצתנו: שמירה על פיזור רחב ובחינת חשיפה למניות ערך.' },
  { title: 'סקירת שווקים לקראת 2026', author: 'מיכל יוזפסון', date: '1.1.26', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-לקראת-רבעון-שני', excerpt: 'שווקי המניות הגלובליים הציגו ביצועים חזקים, למרות ריבוי זעזועים פוליטיים וגיאופוליטיים. ה-S&P 500 סיים את השנה בעלייה חדה. הריבית בארה"ב מתייצבת והפד מסמן הפחתות ב-2026, מה שתומך בסביבת השקעות חיובית. שווקי אגרות חוב מציגים הזדמנויות.' },
  { title: 'האם ישראל יכולה לממן את תוכנית הבינה המלאכותית?', author: 'ד"ר איתי גלילי', date: '20.9.25', category: 'מדיניות', href: 'https://nihulhon.co.il/posts/מבט-אל-המציאות-של-שנת-2050', excerpt: 'בשנתיים האחרונות המהפכה הטכנולוגית יצאה מתחומי המחקר לשימושים יומיומיים. ממשלת ישראל הכריזה על תוכנית לאומית בהיקף עשרות מיליארדים, אך שאלת המימון נשארת פתוחה. הגרעון התקציבי מקשה על ביצוע ההשקעה, אך דחייתה עלולה לעלות ביוקר.' },
  { title: 'סקירת שווקים רבעון שלישי 2025', author: 'מיכל יוזפסון', date: '20.9.25', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024-1', excerpt: 'המומנטום החיובי בשווקי המניות והאג"ח נמשך אל תוך 2025 והביא את השווקים לשיאים. מניות הטכנולוגיה מובילות, עם ביצועים יוצאי דופן בסקטור הבינה המלאכותית. שוק האג"ח מייצב עם ירידת תשואות, המשפרת סביבת מימון לחברות.' },
  { title: 'סקירת שווקים לקראת רבעון שני 2025', author: 'מיכל יוזפסון', date: '1.4.25', category: 'סקירת שווקים', href: 'https://nihulhon.co.il/posts/סקירת-שווקים-דצמבר-2024', excerpt: 'שנת 2025 נפתחה במומנטום חיובי בשווקי המניות והאג"ח, עם תחזיות צמיחה יציבות. ירידת האינפלציה בארה"ב ובאירופה יצרה ציפיות להפחתות ריבית נוספות. שווקים מתפתחים מציגים ביצועים משתפרים על רקע היחלשות הדולר.' },
  { title: 'על כוחם של תאגידים וכישלונן של ממשלות', author: 'ד"ר איתי גלילי', date: '1.4.25', category: 'מאמר דעה', href: 'https://nihulhon.co.il/posts/על-כוחם-של-תאגידים-וכישלונן-ש', excerpt: 'ישראל נמצאת בתקופה מאתגרת בהיבט הביטחוני, הפוליטי והחברתי. בעוד הממשלה מתקשה להוביל רפורמות מבניות, תאגידים גדולים ממלאים ריק שלטוני גובר. המשמעות הכלכלית לטווח ארוך מאתגרת מדיניות פיסקאלית ורגולטורית.' },
]

const catColors: Record<string, string> = {
  'סקירת שווקים': '#2A7A4A', 'מדיניות': '#4A6A8A', 'מאמר דעה': '#7A5A2A',
  'השקעות': '#5A4A8A', 'פנסיה': '#2A6A8A', 'מאקרו': '#4A6A5A',
}

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
      {/* ═══ HERO — problem-first + objectivity ════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: '#1B3A28', minHeight: 'calc(100vh - 5rem)' }}>
        <PensionNetworkBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center flex flex-col items-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#5A9A72' }}>
            יועץ פנסיוני אובייקטיבי · בפיקוח רשות שוק ההון
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            ייעוץ על הכסף שלך — <span style={{ color: '#8ECFA6' }}>לא מכירה של מוצר.</span>
          </h1>
          <p className="text-base sm:text-lg mt-5 leading-relaxed max-w-2xl" style={{ color: '#A0CCB0' }}>
            עיקר ההון שלך נמצא במוצרים הפנסיוניים — קופות גמל, קרנות השתלמות, פנסיה וביטוחי מנהלים.
            אנחנו מחזיקים גם רישיון ייעוץ השקעות וגם רישיון ייעוץ פנסיוני, עם הסכמים מול כל הגופים בשוק.
            אין לנו אינטרס במוצר מסוים — רק בכסף שלך.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center">
            <a href="#lead-form" className="btn-gold text-base px-7 py-3 justify-center font-bold">
              קבע פגישת זום חינמית ←
            </a>
            <a href="https://wa.me/9720505938770" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold px-6 py-3 rounded-lg border-2 transition-all"
              style={{ borderColor: '#5A9A72', color: '#A0CCB0' }}>
              💬 WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mt-6 text-[11px]" style={{ color: '#5A8A6A' }}>
            {['✓ רישיון השקעות + פנסיוני', '✓ בפיקוח הרשות', '✓ דמי ניהול מהנמוכים בענף', '✓ ללא התחייבות'].map(t => (
              <span key={t} className="font-semibold">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AUDIENCE PATHS — route into the campaign landing pages ════════ */}
      <section className="py-16" style={{ background: '#EAF3ED' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-xl sm:text-2xl font-black mb-2" style={{ color: '#1B3A28' }}>
            מה הכי מטריד אותך עכשיו?
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: '#62806A' }}>בחר נקודת מוצא — וקבל בדיקה אישית ללא עלות</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audiencePaths.map(p => (
              <Link key={p.href} href={p.href}
                className="card-ivory rounded-2xl p-6 group hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="text-2xl mb-3" style={{ color: '#4A7A5A' }}>{p.icon}</div>
                <h3 className="text-base font-black mb-2 group-hover:text-[#4A7A5A] transition-colors" style={{ color: '#1B3A28' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#3A6050' }}>{p.body}</p>
                <span className="text-sm font-semibold mt-4" style={{ color: '#4A7A5A' }}>בדיקה אישית ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP — license, supervision, credentials ═══════════════ */}
      <section className="py-14 border-t border-b" style={{ background: '#fff', borderColor: '#BACEC4' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-black mb-2" style={{ color: '#1B3A28' }}>פיננסים — ניהול הון פרטי</h3>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: '#28402E' }}>
              Family Office ויועצי השקעות בכירים, ניסיון של עשרות שנים בשווקי ההון הישראלי והגלובלי.
              רישיון ייעוץ השקעות ורישיון ייעוץ פנסיוני, בפיקוח רשות שוק ההון, ביטוח וחיסכון.
            </p>
            <p className="text-xs mt-2" style={{ color: '#62806A' }}>מספר רישיון תאגיד: 514511260</p>
            <a href="https://www.gov.il/he/service/agents_and_consultants_search" target="_blank" rel="noopener noreferrer"
              className="btn-outline-gold text-sm px-5 py-2 mt-5">
              בדקו את הרישיון שלנו ←
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[{ v: '25+', l: 'שנות ניסיון' }, { v: '2', l: 'רישיונות (השקעות + פנסיוני)' }, { v: 'Family', l: 'Office לבעלי הון' }, { v: '144+', l: 'פוסטים מקוריים' }].map(s => (
              <div key={s.l} className="text-center p-4 rounded-xl" style={{ background: '#EAF3ED' }}>
                <div className="text-lg font-black" style={{ color: '#1B3A28' }}>{s.v}</div>
                <div className="text-xs" style={{ color: '#62806A' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTENT — credibility (posts + telegram), below the fold ══════ */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ background: '#2A5C3A', gap: '2px' }}>
        <div className="flex flex-col overflow-hidden" style={{ minHeight: '50vh', background: '#fff' }}>
          <QuadHeader icon="◈" title="פוסטים אחרונים" href="/posts" linkLabel="כל 144+ הפוסטים" />
          <div className="grid grid-cols-3 overflow-hidden flex-1" style={{ gridTemplateRows: 'repeat(2, 1fr)' }}>
            {latestPosts.map((p) => (
              <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer"
                className="flex flex-col p-2 group overflow-hidden transition-colors"
                style={{ borderBottom: '1px solid #BACEC4', borderLeft: '1px solid #BACEC4', background: '#EBF5EE' }}>
                <div className="flex items-center justify-between gap-1 mb-1 flex-shrink-0">
                  <span className="text-[8px] font-bold truncate" style={{ color: catColors[p.category] || '#2A5C3A' }}>{p.category}</span>
                  <span className="text-[8px] flex-shrink-0" style={{ color: '#62806A' }}>{p.date}</span>
                </div>
                <p className="text-[10px] font-bold leading-snug mb-1 group-hover:text-[#2A5C3A] transition-colors flex-shrink-0"
                  style={{ color: '#1B3A28', overflow: 'hidden', maxHeight: '2.8em' }}>{p.title}</p>
                <p className="text-[9px] leading-relaxed flex-1 overflow-hidden" style={{ color: '#3A6050' }}>{p.excerpt}</p>
                <span className="text-[8px] font-semibold flex-shrink-0 mt-0.5" style={{ color: '#4A7A5A' }}>{p.author}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col overflow-hidden" style={{ minHeight: '50vh', background: '#fff' }}>
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
            30 דקות עם יועץ השקעות בכיר — נבחן יחד את המצב הנוכחי, נזהה הזדמנויות ונסביר בדיוק מה ניתן לשפר.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* ═══ MAP — demoted below the fold (keeps /#map anchor working) ═════ */}
      <section id="map" className="border-t" style={{ background: '#fff', borderColor: '#BACEC4' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h3 className="text-center text-lg font-black mb-6" style={{ color: '#1B3A28' }}>מפה פנסיונית</h3>
          <div className="rounded-2xl overflow-hidden" style={{ minHeight: '40vh' }}>
            <HomeMapEmbed />
          </div>
        </div>
      </section>
    </>
  )
}
