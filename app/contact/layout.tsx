import type { Metadata } from "next"

export const metadata: Metadata = {
  // 65 chars previously; the phone number is already in the description and in
  // the on-page NAP, so it was the redundant part to cut rather than the brand.
  title: "Contact Houston Superior Painting | Free Estimates",
  description: "5 Houston-area offices. Free on-site estimates. Mon-Fri 7-7, Sat 8-4. Call (346) 594-5960 or schedule online.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/contact',
  },
  openGraph: {
    title: "Contact Houston Superior Painting — Free Estimates (346) 594-5960",
    description: "5 Houston-area offices. Free on-site estimates. Mon-Fri 7-7, Sat 8-4. Call (346) 594-5960 or schedule online.",
    url: "https://houstonsuperiorpainting.com/contact",
    siteName: "Houston Superior Painting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Houston Superior Painting — Free Estimates (346) 594-5960",
    description: "5 Houston-area offices. Free on-site estimates. Mon-Fri 7-7, Sat 8-4. Call (346) 594-5960 or schedule online.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://houstonsuperiorpainting.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: "https://houstonsuperiorpainting.com/contact",
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
