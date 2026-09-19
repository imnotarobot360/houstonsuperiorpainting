import type { Metadata } from "next"
import { EpoxyNav } from "@/components/epoxy/epoxy-nav"
import { EpoxyHero } from "@/components/epoxy/epoxy-hero"
import { EpoxyWhyUs } from "@/components/epoxy/epoxy-why-us"
import { EpoxyServices } from "@/components/epoxy/epoxy-services"
import { EpoxyTransformation } from "@/components/epoxy/epoxy-transformation"
import { EpoxyProcess } from "@/components/epoxy/epoxy-process"
import { EpoxyGallery } from "@/components/epoxy/epoxy-gallery"
import { EpoxyComparison } from "@/components/epoxy/epoxy-comparison"
import { EpoxyPricing } from "@/components/epoxy/epoxy-pricing"
import { EpoxyScheduler } from "@/components/epoxy/epoxy-scheduler"
import { EpoxyReviews } from "@/components/epoxy/epoxy-reviews"
import { EpoxyFAQ } from "@/components/epoxy/epoxy-faq"
import { EpoxyEstimate } from "@/components/epoxy/epoxy-estimate"
import { EpoxyFooter } from "@/components/epoxy/epoxy-footer"
import { EPOXY, FAQS, PROCESS, SERVICE_AREAS, RATE_PER_SQFT } from "@/lib/epoxy"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Epoxy Flooring Houston TX | Garage Floor Coatings",
  description:
    "Houston's premium epoxy flooring contractor. Diamond-ground prep, industrial epoxy and polyaspartic topcoats, 15-year written warranty.",
  keywords: [
    "epoxy flooring houston",
    "garage floor epoxy houston",
    "garage floor coating houston tx",
    "polyaspartic flooring houston",
    "metallic epoxy houston",
    "commercial epoxy flooring houston",
    "concrete coating houston",
  ],
  alternates: { canonical: EPOXY.url },
  openGraph: {
    title: "Epoxy Flooring Houston TX | Houston Superior Epoxy",
    description:
      "Showroom floors, industrial strength. Diamond-ground prep and a 15-year written warranty on garage epoxy across the Houston metro.",
    url: EPOXY.url,
    siteName: EPOXY.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${EPOXY.url}/images/epoxy/hero-luxury-garage.png`,
        width: 1200,
        height: 630,
        alt: "Luxury Houston garage with a high-gloss charcoal epoxy flake floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring Houston TX | Houston Superior Epoxy",
    description: "Diamond-ground prep. 15-year warranty. Garage epoxy from $5/sq ft.",
    images: [`${EPOXY.url}/images/epoxy/hero-luxury-garage.png`],
  },
  robots: { index: true, follow: true },
  // Epoxy-specific icon so the subdomain doesn't inherit the painting favicon.
  icons: {
    icon: [{ url: "/images/epoxy/icon-512.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/images/epoxy/icon-512.png", sizes: "512x512" }],
  },
}

/**
 * Structured data for the epoxy property.
 *
 * Deliberately omits AggregateRating: EPOXY.rating belongs to the PARENT
 * painting company, and attributing another entity's reviews here risks a
 * manual action. The relationship is expressed with parentOrganization instead.
 */
function EpoxySchema() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${EPOXY.url}/#business`,
        name: EPOXY.name,
        alternateName: "Houston Superior Epoxy Flooring",
        url: EPOXY.url,
        telephone: EPOXY.phoneE164,
        email: EPOXY.email,
        slogan: EPOXY.tagline,
        foundingDate: String(EPOXY.foundedYear),
        priceRange: "$$-$$$",
        image: `${EPOXY.url}/images/epoxy/hero-luxury-garage.png`,
        logo: `${EPOXY.url}/images/epoxy/logo-lockup.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.primaryAddress.street,
          addressLocality: BUSINESS.primaryAddress.city,
          addressRegion: BUSINESS.primaryAddress.state,
          postalCode: BUSINESS.primaryAddress.zip,
          addressCountry: "US",
        },
        parentOrganization: {
          "@type": "Organization",
          name: BUSINESS.name,
          url: BUSINESS.url,
        },
        areaServed: SERVICE_AREAS.map((name) => ({
          "@type": "City",
          name: `${name}, TX`,
        })),
        potentialAction: {
          "@type": "ReserveAction",
          name: "Schedule a free epoxy flooring estimate",
          target: {
            "@type": "EntryPoint",
            urlTemplate: EPOXY.scheduler.bookingUrl,
            inLanguage: "en-US",
            actionPlatform: [
              "https://schema.org/DesktopWebPlatform",
              "https://schema.org/MobileWebPlatform",
            ],
          },
          result: { "@type": "Reservation", name: "Free on-site epoxy estimate" },
        },
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Garage Epoxy Flooring" },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: RATE_PER_SQFT.low,
              priceCurrency: "USD",
              unitText: "square foot",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Commercial Epoxy Flooring" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Metallic Epoxy Flooring" },
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${EPOXY.url}/#process`,
        name: "Our 8-Step Epoxy Floor Installation Process",
        description:
          "How Houston Superior Epoxy installs a garage floor coating that lasts 15 to 20 years, from slab inspection through polyaspartic topcoat.",
        totalTime: "P2D",
        step: PROCESS.map((s) => ({
          "@type": "HowToStep",
          position: s.number,
          name: s.title,
          text: s.body,
          url: `${EPOXY.url}/#process`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${EPOXY.url}/#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export default function EpoxyHomePage() {
  return (
    <>
      <EpoxySchema />
      <EpoxyNav />
      <main>
        <EpoxyHero />
        <EpoxyWhyUs />
        <EpoxyServices />
        <EpoxyTransformation />
        <EpoxyProcess />
        {/* FlakePicker is rendered inside EpoxyComparison's #colors section,
            which supplies its heading — a second bare copy here duplicated it. */}
        <EpoxyGallery />
        <EpoxyComparison />
        <EpoxyPricing />
        <EpoxyScheduler />
        <EpoxyReviews />
        <EpoxyFAQ />
        <EpoxyEstimate />
      </main>
      <EpoxyFooter />
    </>
  )
}
