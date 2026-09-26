import type { Metadata } from "next"
import { JsonLd, ORG_ID } from "@/components/structured-data"
import { breadcrumbNode } from "@/components/aeo/blocks"

const PAGE_URL = "https://houstonsuperiorpainting.com/contact"
const TITLE = "Contact Houston Superior Painting | 5 Offices, Free Estimates"
const DESCRIPTION =
  "Contact Houston Superior Painting: five offices in Cypress, Houston, Katy, Sugar Land and Magnolia. Mon–Fri 7–7, Sat 8–4. Call (346) 594-5960 for an estimate."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Houston Superior Painting",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*
        ContactPage only. The business itself is the sitewide Organization node
        (root layout); each office's LocalBusiness lives on its own city page.
        No address is restated here so schema can't drift from lib/business.ts.
      */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": `${PAGE_URL}#webpage`,
              url: PAGE_URL,
              name: TITLE,
              description: DESCRIPTION,
              mainEntity: { "@id": ORG_ID },
              inLanguage: "en-US",
            },
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ],
        }}
      />
      {children}
    </>
  )
}
