import type { Metadata } from 'next'
import { Great_Vibes, Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
// Импортируем компонент плавного скролла
import { SmoothScroll } from "@/components/smooth-scroll" 

const inter = Inter({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-oswald',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Forest Hills Golf Club',
  description: 'Премиальный гольф-клуб в живописной местности',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <body
        className={`${inter.variable} ${oswald.variable} ${greatVibes.variable} font-sans antialiased bg-background`}
      >
        {/* Оборачиваем children в плавный скролл */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}