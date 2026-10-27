import type { Metadata } from 'next'
import { ChatLauncher } from '@/components/chat-launcher'
import { PaintingSiteChrome } from '@/components/painting-site-chrome'
import { SiteMain } from '@/components/site-main'
import { Inter, Playfair_Display, Cormorant_Garamond, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import { StickyMobileCTA } from '@/components/sticky-mobile-cta'
import { StickyCTA } from '@/components/sticky-cta'
import { ExitIntent } from '@/components/exit-intent'
import { ScrollTracking } from '@/components/scroll-tracking'
import { ChatWidgetOffset } from '@/components/chat-widget-offset'
import { GoogleAnalytics } from '@/components/google-analytics'
import { MetaPixel } from '@/components/meta-pixel'
import { OpenAIPixel } from '@/components/openai-pixel'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant'
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope'
});

export const metadata: Metadata = {
  title: 'Houston Painters Since 2019 | Houston Superior Painting',
  description: 'Houston painters for interior, exterior & cabinet painting, drywall repair & pressure washing in Houston, Katy & Cypress. Prep-first quality. Free estimates.',
  authors: [{ name: 'Houston Superior Painting' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  metadataBase: new URL('https://houstonsuperiorpainting.com/'),
  openGraph: {
    siteName: 'Houston Superior Painting',
    locale: 'en_US',
    type: 'website',
    title: 'Houston Painters Since 2019 | Houston Superior Painting',
    description: 'Professional interior, exterior, cabinet painting, drywall repair & pressure washing in Houston, Katy & Cypress. Prep-first quality. Free estimates.',
    url: 'https://houstonsuperiorpainting.com/',
    images: [
      {
        url: 'https://houstonsuperiorpainting.com/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Houston Superior Painting crew working on a residential exterior in Houston, TX',
      },
    ],
  },
  twitter: {
    // Only `card` is set globally. Title/description/images are intentionally
    // omitted so every page's own `openGraph` block supplies them — X and most
    // link-preview crawlers fall back to og:* when twitter:* is absent.
    //
    // These used to carry hardcoded Houston copy, which OVERRODE the
    // page-specific openGraph on the 15 of 24 location pages that don't define
    // their own twitter block: /painters-rosenberg-tx shared a link as
    // "Houston Painters ... in Houston, Katy & Cypress" with no mention of
    // Rosenberg. Pages that set their own twitter block still win over this.
    card: 'summary_large_image',
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Cypress',
    'geo.position': '29.9745;-95.6445',
    'ICBM': '29.9745, -95.6445',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/logo.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${manrope.variable} bg-background`}>
      <head>
        {/* ChatGPT Ads pixel. Placed first in <head> per OpenAI's guidance so a
            conversion firing early in page load isn't dropped. Site-wide on
            purpose: an ad click can land anywhere, and the attribution capture
            inside it must run on every route or the oppref click ID is lost. */}
        <OpenAIPixel />
        {/* Painting schema + chrome are suppressed on the epoxy subdomain.
            The icon/hrefLang links are raw <link> elements, so Next's metadata
            dedupe does NOT override them from a child route — without this gate
            the painting favicon and painting hrefLang leak onto /epoxy. */}
        <PaintingSiteChrome>
          <StructuredData />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          {/* No sitewide hreflang: it told Google every page's English version was the
              homepage. hreflang now lives only on pages that have a Spanish twin
              (homepage <-> /es), via each page's metadata.alternates.languages. */}
        </PaintingSiteChrome>
      </head>
      <body className="min-h-screen font-sans antialiased">
        <SiteMain>{children}</SiteMain>
        <PaintingSiteChrome>
          <StickyMobileCTA />
          <StickyCTA />
          <ExitIntent />
          <ChatWidgetOffset />
        </PaintingSiteChrome>
        <ScrollTracking />
        <GoogleAnalytics />
        <MetaPixel />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {/* LeadConnector chat: a lightweight button that loads the real widget
            only when tapped (page speed, owner decision 2026-10-27). The widget
            injects itself client-side, so there is no server-rendered <script>
            for loader.js to mutate (that caused hydration mismatches before).
            Gated: this widget is branded for the painting company, so it must not
            appear on the epoxy subdomain. Epoxy has its own call/text/form CTAs. */}
        <PaintingSiteChrome>
          <ChatLauncher />
        </PaintingSiteChrome>
      </body>
    </html>
  )
}
