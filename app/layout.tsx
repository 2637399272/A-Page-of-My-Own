import type { Metadata } from 'next'
import { ZCOOL_KuaiLe, Ma_Shan_Zheng } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const zcoolKuaiLe = ZCOOL_KuaiLe({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-zcool'
});

const maShanZheng = Ma_Shan_Zheng({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-mashan'
});

export const metadata: Metadata = {
  title: 'A Page of My Own',
  description: '个人简介网站 - 手绘日记本风格',
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
    <html lang="zh-CN" className={`${zcoolKuaiLe.variable} ${maShanZheng.variable}`}>
      <body className="font-sans antialiased"  style={{ fontFamily: 'var(--font-zcool), sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
