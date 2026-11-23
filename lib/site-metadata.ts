import type { Metadata } from 'next'

/**
 * Site-wide metadata defaults, shared by the root layouts. Each page's own
 * metadata still wins over these.
 */
export const baseMetadata: Metadata = {
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
}

/** Defaults plus the painting brand's favicon. The epoxy root layout uses baseMetadata. */
export const paintingMetadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/logo.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}
