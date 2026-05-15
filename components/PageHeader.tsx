interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="bg-[#1E3651] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center gap-8">
        {/* Logo — ראשון ב-DOM = ימין ב-RTL */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="פיננסים — ניהול הון פרטי"
          className="h-24 md:h-32 w-auto object-contain flex-shrink-0 rounded-2xl"
        />
        {/* כותרת + תוכן — שמאל */}
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">{title}</h1>
          {subtitle && <p className="text-[#B0A090] text-sm leading-relaxed">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}
