interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="bg-[#1B3A28] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {/* Logo — מובייל: למעלה ובמרכז | דסקטופ: ימין */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="פיננסים — ניהול הון פרטי"
          className="h-20 md:h-32 w-auto object-contain flex-shrink-0 rounded-2xl"
        />
        {/* כותרת — מובייל: מרכז | דסקטופ: ממורכז בחלל השמאלי, מיושר ימין */}
        <div className="flex-1 flex items-center justify-center text-center md:text-right">
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">{title}</h1>
            {subtitle && <p className="text-[#8AB898] text-xs md:text-sm leading-relaxed">{subtitle}</p>}
            {children && <div className="flex justify-center md:justify-start">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
