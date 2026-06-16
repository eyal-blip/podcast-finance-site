import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CampaignLeadForm from '@/components/CampaignLeadForm'
import TrustStrip from '@/components/TrustStrip'

type Variant = {
  eyebrow: string
  h1: string
  h1Accent: string
  sub: string
  points: { title: string; body: string }[]
  formTitle: string
  formSub: string
  metaTitle: string
  metaDescription: string
  note?: string
}

// Each key is a distinct landing-page URL (/lp/<key>) — point one ad set at each
// to A/B test which message converts best. Submissions are tagged with the key.
const VARIANTS: Record<string, Variant> = {
  objective: {
    eyebrow: 'ייעוץ אובייקטיבי',
    h1: 'לא סוכן.',
    h1Accent: 'יועץ.',
    sub: 'גוף שמחזיק גם רישיון ייעוץ השקעות וגם רישיון ייעוץ פנסיוני, עם הסכמים מול כל הגופים בשוק. אין לנו אינטרס במוצר מסוים — רק בכסף שלך. זה ההבדל בין ייעוץ למכירה.',
    points: [
      { title: 'הסכמים עם כל החברות', body: 'תנאי של הרשות לרישיון — ולכן אין הטיה לכיוון מוצר מסוים.' },
      { title: 'שני רישיונות', body: 'ייעוץ השקעות + ייעוץ פנסיוני, בפיקוח מלא.' },
      { title: 'דמי ניהול מהנמוכים בענף', body: 'כי ההכנסה שלנו לא באה מעמלות שיווק מנופחות.' },
    ],
    formTitle: 'פגישת זום חינמית',
    formSub: '30 דקות עם יועץ בכיר — נבחן יחד מה באמת מתאים לכסף שלך, בלי אינטרס מוכר.',
    metaTitle: 'ייעוץ פנסיוני אובייקטיבי — לא סוכן, יועץ | scale-up.finance',
    metaDescription: 'גוף עם רישיון ייעוץ השקעות וייעוץ פנסיוני והסכמים מול כל הגופים בשוק. ייעוץ אובייקטיבי, דמי ניהול נמוכים. פגישת זום ללא עלות.',
  },
  complexity: {
    eyebrow: 'ריבוי מוצרים ומסלולים',
    h1: 'עשרות מסלולים.',
    h1Accent: 'איזה באמת מתאים לך?',
    sub: 'קופות גמל, קרנות השתלמות, פנסיה, ביטוחי מנהלים — מאות מסלולים נגישים לכולם. אבל מה נכון לצרכים שלך? בנינו כלי שמראה ומשווה — ואז יועץ בכיר, שמלווה בעלי הון גדולים, בוחן את זה איתך אישית.',
    points: [
      { title: 'כלי השוואה ייחודי', body: 'רואים ומשווים מסלולים, דמי ניהול ומדדי שירות במקום אחד.' },
      { title: 'ליווי יועץ בכיר', body: 'אותה רמת ייעוץ שמקבלים לקוחות Family Office.' },
      { title: 'מותאם לצרכים שלך', body: 'לא מסלול גנרי — אלא מה שמתאים לגיל, לסיכון ולמטרות שלך.' },
    ],
    formTitle: 'בוא נראה מה מתאים לך',
    formSub: '30 דקות בזום — נעבור יחד על המצב הנוכחי ונראה בדיוק איזה מסלול נכון עבורך.',
    metaTitle: 'ריבוי מסלולים פנסיוניים — מה באמת מתאים לך? | scale-up.finance',
    metaDescription: 'קופות גמל, קרנות השתלמות, פנסיה, ביטוחי מנהלים — מאות מסלולים. כלי השוואה וליווי יועץ בכיר. פגישת זום ללא עלות.',
  },
  fees: {
    eyebrow: 'דמי ניהול',
    h1: 'כמה דמי ניהול',
    h1Accent: 'אתה באמת משלם?',
    sub: 'דמי הניהול שלנו מהנמוכים בענף — כי ההכנסה שלנו לא באה מעמלות שיווק מנופחות. כל עשירית אחוז בדמי ניהול שווה הרבה מאוד כסף לאורך שנות החיסכון. נבדוק כמה אתה משלם היום, ומה אפשר לשפר.',
    points: [
      { title: 'מהנמוכים בענף', body: 'בלי עמלות שיווק שמנופחות על חשבונך.' },
      { title: 'בדיקה אמיתית', body: 'נראה לך כמה אתה משלם היום בפועל — מספר אחד ברור.' },
      { title: 'מצטבר לאורך שנים', body: 'הפער בדמי ניהול הופך לסכומים גדולים עד הפרישה.' },
    ],
    formTitle: 'בדיקת דמי ניהול — ללא עלות',
    formSub: '30 דקות בזום — נראה כמה אתה משלם היום וכמה אפשר לחסוך.',
    metaTitle: 'כמה דמי ניהול אתה משלם על הפנסיה? בדיקה חינם | scale-up.finance',
    metaDescription: 'דמי ניהול מהנמוכים בענף — ללא עמלות שיווק מנופחות. בדיקה אישית כמה אתה משלם היום וכמה אפשר לחסוך. פגישת זום ללא עלות.',
  },
  abroad: {
    eyebrow: 'ישראלים בחו"ל',
    h1: 'גר בחו"ל?',
    h1Accent: 'הפנסיה שלך עלולה להיתקע.',
    sub: 'מי שאין לו כוונה לחזור לישראל בקרוב צריך לדעת: קבלת קצבת פנסיה שוטפת בפרישה עלולה להיות בעייתית כשאינך תושב ישראל. במקרים רבים נכון לבחון ניוד כספים מקרן פנסיה לקופת גמל — אבל זה תלוי במצב האישי שלך. בוא נבחן אותו יחד.',
    points: [
      { title: 'הבעיה: קצבה לתושב חוץ', body: 'קבלת פנסיה שוטפת בחו"ל אינה מובנת מאליה.' },
      { title: 'פתרון אפשרי: ניוד לגמל', body: 'לעיתים עדיף להחזיק את הכסף בקופת גמל — לפי המצב שלך.' },
      { title: 'יועץ שמכיר את התחום', body: 'מלווים ישראלים בחו"ל ובעלי הון בחשבונות בינלאומיים.' },
    ],
    formTitle: 'גר בחו"ל? בוא נבחן את הפנסיה',
    formSub: '30 דקות בזום — נבדוק את המצב שלך ונסביר מה כדאי לעשות לפני הפרישה.',
    metaTitle: 'ישראלי בחו"ל? הפנסיה שלך עלולה להיתקע | scale-up.finance',
    metaDescription: 'מי שלא מתכוון לחזור לישראל עלול להיתקל בבעיה בקבלת קצבת פנסיה. נבחן ניוד כספים מפנסיה לקופת גמל לפי המצב האישי. פגישת זום ללא עלות.',
    note: 'המידע כללי ואינו מהווה ייעוץ. ההמלצה תלויה בנתונים האישיים שלך ותינתן בכפוף לבדיקה.',
  },
}

export function generateStaticParams() {
  return Object.keys(VARIANTS).map(variant => ({ variant }))
}

export function generateMetadata({ params }: { params: { variant: string } }): Metadata {
  const v = VARIANTS[params.variant]
  if (!v) return {}
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    openGraph: { title: v.metaTitle, description: v.metaDescription, locale: 'he_IL', type: 'website' },
    robots: { index: false, follow: false },
  }
}

export default function LandingPage({ params }: { params: { variant: string } }) {
  const v = VARIANTS[params.variant]
  if (!v) notFound()

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: '#1B3A28' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(90,160,110,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(90,160,110,0.4) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#5A9A72' }}>{v.eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            {v.h1} <span style={{ color: '#8ECFA6' }}>{v.h1Accent}</span>
          </h1>
          <p className="text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto" style={{ color: '#A0CCB0' }}>
            {v.sub}
          </p>
          <div className="mt-8">
            <a href="#lead-form" className="btn-gold text-base px-7 py-3 justify-center font-bold">
              קבע פגישת זום חינמית ←
            </a>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mt-6 text-[11px]" style={{ color: '#5A8A6A' }}>
            {['✓ ללא עלות', '✓ זום 30 דקות', '✓ ללא התחייבות', '✓ יועץ בכיר'].map(t => (
              <span key={t} className="font-semibold">{t}</span>
            ))}
          </div>
          <div className="mt-8 inline-block rounded-xl px-6 py-3 text-sm sm:text-base font-bold"
            style={{ background: 'rgba(142,207,166,0.12)', border: '1px solid #5A9A72', color: '#CDE8D5' }}>
            השירות מתאים ואפשרי לחסכונות מצטברים החל מ־<span style={{ color: '#8ECFA6' }}>1,000,000&nbsp;₪</span>
          </div>
        </div>
      </section>

      {/* ─── KEY POINTS ───────────────────────────────────────── */}
      <section className="py-16" style={{ background: '#EAF3ED' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {v.points.map(p => (
            <div key={p.title} className="card-ivory rounded-2xl p-6">
              <div className="text-2xl mb-3" style={{ color: '#4A7A5A' }}>◈</div>
              <h3 className="text-base font-black mb-2" style={{ color: '#1B3A28' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#3A6050' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRUST STRIP (interactive) ────────────────────────── */}
      <TrustStrip />

      {/* ─── LEAD FORM ────────────────────────────────────────── */}
      <section id="lead-form" className="py-20 relative overflow-hidden" style={{ background: '#1B3A28' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(90,160,110,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(90,160,110,0.4) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-lg mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#5A9A72' }}>הצעד הראשון</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">{v.formTitle}</h2>
          <p className="text-lg font-bold mb-1" style={{ color: '#7DB895' }}>scale-up.finance</p>
          <div className="gold-divider mb-6" />
          <p className="text-sm mb-8 leading-relaxed" style={{ color: '#7AAA8A' }}>{v.formSub}</p>
          <CampaignLeadForm variant={params.variant} />
          {v.note && <p className="text-white/30 text-[11px] mt-6 leading-relaxed max-w-sm mx-auto">{v.note}</p>}
        </div>
      </section>
    </>
  )
}
