const services = [
  {
    icon: '◈',
    title: 'ייעוץ השקעות',
    description: 'בניית תיק השקעות מותאם אישית בהתאם לצרכים, לטווח הזמן ולרמת הסיכון שלכם.',
  },
  {
    icon: '◉',
    title: 'פמילי אופיס',
    description: 'ניהול הון כולל למשפחות עם הון גבוה — תכנון ירושה, מבנה אחזקות ואסטרטגיה רב-דורית.',
  },
  {
    icon: '◇',
    title: 'ייעוץ פנסיוני',
    description: 'תכנון פנסיוני מקיף כולל בחינת קרנות, ביטוחים וחיסכון ארוך טווח.',
  },
  {
    icon: '◆',
    title: 'חשבון השקעות בחו״ל',
    description: 'גישה לשווקים בינלאומיים עם ייעוץ אובייקטיבי, מינימום $500,000.',
  },
]

const values = [
  { title: 'שותף אמין', text: 'אנו רוכשים את אמון לקוחותינו באמצעות הצבת האינטרסים שלהם ושל משפחתם במרכז, באופן אובייקטיבי ובלתי תלוי.' },
  { title: 'מקצועיות', text: 'יועצי ההשקעות שלנו הם מבכירי יועצי ההשקעות ממערכת הבנקאות בישראל, עם עשרות שנות ניסיון.' },
  { title: 'רגולציה', text: 'החברה מחזיקה ברישיון ייעוץ השקעות ומפוקחת על ידי הרשות לניירות ערך, וכן ברישיון ייעוץ פנסיוני.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded"
            style={{ color: '#868C95', background: 'rgba(134,140,149,0.1)' }}
          >
            ◇ אודות
          </div>
          <h2 className="section-title">פיננסים ניהול הון פרטי</h2>
          <p className="section-subtitle">
            שירותי פמילי אופיס וייעוץ השקעות מתקדם — Family Office
          </p>
          <div className="gold-divider" />
        </div>

        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            פיננסים ניהול הון פרטי הינה חברת ייעוץ השקעות עצמאית ובלתי תלויה, המתמחה בניהול הון מקיף לאנשים ומשפחות עם הון גבוה.
            פודקאסט פיננסים הוא הזרוע התוכנית שלנו — מרכז ידע פיננסי פתוח לכלל לקוחות הבנקאות הפרטית.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-dark rounded-xl p-6 text-center hover:border-[#868C95]/40 transition-all duration-200"
            >
              <div
                className="text-3xl mb-4"
                style={{ color: '#868C95' }}
              >
                {service.icon}
              </div>
              <h3 className="font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl p-6"
              style={{ background: 'rgba(134,140,149,0.05)', border: '1px solid rgba(134,140,149,0.15)' }}
            >
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span style={{ color: '#868C95' }}>◈</span>
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://nihulhon.co.il/about"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-sm px-6 py-3"
          >
            לאתר החברה ← nihulhon.co.il
          </a>
        </div>
      </div>
    </section>
  )
}
