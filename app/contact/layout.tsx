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
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.9012;-95.6293",
    ICBM: "29.9012, -95.6293",
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
        LocalBusiness Schema with 5 Branch Locations.

        Every address, phone and lat/long below must match lib/business.ts,
        which is the single source of truth for NAP. The Houston and Katy
        coordinates here previously disagreed with business.ts by roughly a
        mile; they have been reconciled to the business.ts values. Inconsistent
        geo across schema blocks weakens local ranking, so if these ever need
        to change, change business.ts and mirror it here.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://houstonsuperiorpainting.com/#organization",
            name: "Houston Superior Painting",
            image: "https://houstonsuperiorpainting.com/images/logo.png",
            url: "https://houstonsuperiorpainting.com",
            telephone: "+1-346-594-5960",
            email: "info@houstonsuperiorpainting.com",
            priceRange: "$$",
            description: "Professional residential and commercial painting services in Houston, TX. Interior painting, exterior painting, cabinet refinishing, drywall repair, and more.",
            foundingDate: "2019",
            founder: {
              "@type": "Person",
              name: "JJ Semo",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                // Canonical HQ geo — keep in sync with BUSINESS.primaryAddress.
                "@type": "GeoCoordinates",
                latitude: 29.9745,
                longitude: -95.6445,
              },
              geoRadius: "50 mi",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "16:00",
              },
            ],
            department: [
              {
                "@type": "LocalBusiness",
                name: "Houston Superior Painting - Houston Office",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "2617 Bissonnet St #443",
                  addressLocality: "Houston",
                  addressRegion: "TX",
                  postalCode: "77005",
                  addressCountry: "US",
                },
                geo: {
                  // Mirrors BUSINESS.locations["houston-bissonnet"].
                  "@type": "GeoCoordinates",
                  latitude: 29.7195,
                  longitude: -95.4254,
                },
                telephone: "+1-346-594-5960",
              },
              {
                "@type": "LocalBusiness",
                name: "Houston Superior Painting - Katy Office",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "3230 FM 1463 APT 3201",
                  addressLocality: "Katy",
                  addressRegion: "TX",
                  postalCode: "77494",
                  addressCountry: "US",
                },
                geo: {
                  // Mirrors BUSINESS.locations["katy-fm1463"].
                  "@type": "GeoCoordinates",
                  latitude: 29.7474,
                  longitude: -95.8244,
                },
                telephone: "+1-346-594-5960",
              },
              {
                "@type": "LocalBusiness",
                name: "Houston Superior Painting - Cypress Office",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "14150 Huffmeister Rd, Suite 410",
                  addressLocality: "Cypress",
                  addressRegion: "TX",
                  postalCode: "77429",
                  addressCountry: "US",
                },
                geo: {
                  // Canonical HQ geo — keep in sync with BUSINESS.primaryAddress.
                  "@type": "GeoCoordinates",
                  latitude: 29.9745,
                  longitude: -95.6445,
                },
                telephone: "+1-346-594-5960",
              },
              {
                "@type": "LocalBusiness",
                name: "Houston Superior Painting - Sugar Land Office",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "18722 University Blvd, Suite 254, 2nd Floor",
                  addressLocality: "Sugar Land",
                  addressRegion: "TX",
                  postalCode: "77479",
                  addressCountry: "US",
                },
                // `geo` is intentionally omitted: no verified coordinates exist
                // for this office yet. An absent geo is valid schema, whereas a
                // guessed one that disagrees with the Google Business Profile
                // pin would actively hurt local ranking. Add the GeoCoordinates
                // block here once BUSINESS.locations has the real lat/long.
                telephone: "+1-346-594-5960",
              },
              {
                "@type": "LocalBusiness",
                name: "Houston Superior Painting - Magnolia Office",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "14512 Cottontop Mtn",
                  addressLocality: "Magnolia",
                  addressRegion: "TX",
                  postalCode: "77354",
                  addressCountry: "US",
                },
                // Same as Sugar Land — awaiting a verified pin. This office was
                // already displayed on /contact but had never been described in
                // schema, so Google had no structured record of it.
                telephone: "+1-346-594-5960",
              },
            ],
            sameAs: [
              "https://www.facebook.com/houstonsuperiorpainting",
              "https://www.instagram.com/houstonsuperiorpainting",
              "https://www.google.com/maps/place/Houston+Superior+Painting",
            ],
          }),
        }}
      />
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
