interface PageHeaderProps {
  children?: React.ReactNode
}

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <div className="bg-[#1E3651] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center gap-6">
        {/* Logo — ראשון ב-DOM = ימין ב-RTL */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="פיננסים — ניהול הון פרטי"
          className="h-20 md:h-28 w-auto object-contain flex-shrink-0"
        />
        {/* תוכן אופציונלי — שמאל */}
        {children && (
          <div className="flex-1 flex flex-col gap-3">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
