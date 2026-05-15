export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0F0F0F]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(134,140,149,0.35) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(134,140,149,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(134,140,149,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-sm font-medium" style={{ borderColor: 'rgba(134,140,149,0.4)', color: '#868C95', background: 'rgba(134,140,149,0.08)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#868C95] animate-pulse" />
          ידע פיננסי לבנקאות הפרטית
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
          <span className="block text-white">פודקאסט</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #868C95 0%, #A8AEB8 50%, #6A7280 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            פיננסים
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          תכנים פיננסיים מקצועיים לקוחות הבנקאות הפרטית של כל הבנקים —<br className="hidden md:block" />
          פודקאסטים, מאמרים עדכניים, ומגזין רבעוני.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#podcast" className="btn-gold text-base px-8 py-4 justify-center">
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            לפודקאסטים
          </a>
          <a href="#contact" className="btn-outline-gold text-base px-8 py-4 justify-center">
            פגישת ייעוץ ←
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '144+', label: 'פוסטים מקוריים' },
            { value: '4×', label: 'מגזין שנתי' },
            { value: '2', label: 'ניוזלטרים חודשיים' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-black mb-1"
                style={{
                  background: 'linear-gradient(135deg, #868C95 0%, #A8AEB8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-500">גלול למטה</span>
        <svg className="w-5 h-5 text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
