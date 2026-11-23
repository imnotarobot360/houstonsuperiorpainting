import type { Metadata } from "next"

const PAGE_META = {
  title: "SMS Consent & Opt-In | Houston Superior Painting",
  // Trimmed from 196 chars. The carrier-required disclosures (STOP to opt out,
  // msg & data rates) are kept; only the list of message examples was cut.
  description:
    "Opt in to transactional texts from Houston Superior Painting. Reply STOP to opt out. Msg & data rates may apply.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/sms-consent",
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Own Open Graph block so link previews and og:url match this page, not the
// homepage defaults in app/layout.tsx (owner brief 2026-10-25, phase 11).
export const metadata: Metadata = {
  ...PAGE_META,
  openGraph: {
    title: PAGE_META.title,
    description: PAGE_META.description,
    url: PAGE_META.alternates.canonical,
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
  },
}

export default function SmsConsentLayout({ children }: { children: React.ReactNode }) {
  return children
}
