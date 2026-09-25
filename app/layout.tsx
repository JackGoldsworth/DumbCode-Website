import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/codeHilight.css'
import '../styles/globals.css'

// Exposes the font as a CSS variable consumed by --font-sans in globals.css.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dumbcode.net'),
  title: {
    default: 'DumbCode',
    template: '%s | DumbCode',
  },
  description:
    'DumbCode builds Minecraft mods and the DumbCode Studio, a full-featured blocky asset creation tool.',
  icons: {
    icon: [
      { url: '/images/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/brand/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/brand/apple-touch-icon.png',
  },
  manifest: '/images/brand/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#08090c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Without JS, scroll-reveal elements must be visible and unshifted.
            Tailwind v4 compiles translate utilities to the `translate` property. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;translate:none !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
