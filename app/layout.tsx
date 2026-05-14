import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'פודקאסט פיננסים | ידע פיננסי לבנקאות הפרטית',
  description: 'ידע פיננסי, פודקאסטים, מאמרים עדכניים ומגזין הבנקאות הפרטית — לקוחות הבנקאות הפרטית של כל הבנקים.',
  keywords: 'פודקאסט פיננסים, בנקאות פרטית, ניהול הון, השקעות, מגזין פיננסי',
  openGraph: {
    title: 'פודקאסט פיננסים',
    description: 'ידע פיננסי לקוחות הבנקאות הפרטית',
    url: 'https://podcast.finance',
    siteName: 'פודקאסט פיננסים',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F3E8] text-[#1C1814] font-sans antialiased">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
