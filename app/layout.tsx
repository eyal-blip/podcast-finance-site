import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'scale-up.finance | ניהול פנסיה חכם — קופות גמל, קרן השתלמות, ביטוח מנהלים',
  description: 'המוצרים הפנסיוניים שלך — קופת גמל, קרן השתלמות, ביטוח מנהלים וקרן פנסיה — מורכבים. אנחנו מפשטים. פגישת זום ראשונית ללא עלות.',
  keywords: 'קופת גמל, קרן השתלמות, ביטוח מנהלים, קרן פנסיה, ניהול פנסיה, יועץ השקעות, scale-up.finance',
  openGraph: {
    title: 'scale-up.finance | ניהול פנסיה חכם',
    description: 'המוצרים הפנסיוניים שלך מורכבים — אנחנו מפשטים. פגישת זום ראשונית ללא עלות.',
    url: 'https://scale-up.finance',
    siteName: 'scale-up.finance',
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
      <body className="bg-[#F8F3E8] text-[#1E3651] font-sans antialiased">
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
