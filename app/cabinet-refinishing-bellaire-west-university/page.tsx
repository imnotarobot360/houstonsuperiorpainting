import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { PRICES_2026 } from "@/lib/business"

const PAGE_META = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-bellaire-west-university',
  },
  title: "Cabinet Refinishing Bellaire & West University TX",
  description: "Kitchen cabinet refinishing in Bellaire and West University Place, TX. See a real West U kitchen we refinished. 5-year written warranty, free estimate.",
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

export default function CabinetRefinishingBellaireWestUPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Bellaire & West University, TX"
      zoneSlug="bellaire-west-university"
      metaTitle="Cabinet Refinishing Bellaire & West University TX"
      metaDescription="Kitchen cabinet refinishing in Bellaire and West University Place, TX. See a real West U kitchen we refinished. 5-year written warranty, free estimate."
      h1="Cabinet Refinishing in Bellaire and West University Place, TX"
      heroSubheading="Cleaned, sanded and primed before the finish coats, so painted cabinets hold up to daily use, backed by a 5-year written workmanship warranty."
      introLocal="Many kitchens in Bellaire and West University Place have solid wood cabinets that are dated rather than worn out, which is where refinishing makes the most sense. We refinished a kitchen in West University; that project, with photos, is linked on this page."
      serviceOverview="Cabinet refinishing changes the color and finish of your existing cabinets. Surfaces are cleaned and degreased, sanded, primed with a bonding primer and finished with Sherwin-Williams or Benjamin Moore products made for cabinets and trim. Prep is what keeps a cabinet finish from chipping or peeling in a working kitchen."
      whyChooseUs={[
        "A real West University kitchen we refinished, with photos, linked on this page.",
        "Degreasing, sanding and bonding primer on every surface before the finish coats.",
        "Sherwin-Williams and Benjamin Moore cabinet and trim products.",
        "Insured, with a five-year written workmanship warranty on qualifying painting projects.",
      ]}
      priceDetails="Price depends mainly on the number of doors and drawers, the current finish (stained wood, previously painted, or laminate), how big a color change you want, and any repairs. The free written estimate gives you the exact number."
      faqs={[
        {
          question: "How much does cabinet refinishing cost in Bellaire and West University Place?",
          answer: `Our published range is ${PRICES_2026.cabinetsPerKitchen} per kitchen, and most kitchens land around ${PRICES_2026.cabinetsAverage}. The number of doors and drawers and the current finish move the number, so the free written estimate is the real price.`,
        },
        {
          question: "What paint do you use on cabinets?",
          answer: "Sherwin-Williams and Benjamin Moore products made for cabinets and trim, applied over a bonding primer.",
        },
        {
          question: "Can I use my kitchen during the project?",
          answer: "Expect limited use of the kitchen while the work is under way. We explain the schedule and what you can use when we give you the written estimate.",
        },
        {
          question: "Should I refinish or replace my cabinets?",
          answer: "If the cabinet boxes are solid and you like the layout, refinishing changes the look for less than replacement. If the boxes are damaged or you want a different layout, replacement makes more sense. We will tell you honestly which applies after seeing them.",
        },
        {
          question: "What does the warranty cover?",
          answer: "Every project comes with a 5-year written workmanship warranty. The terms are written out with your estimate, so you can read them before you approve anything.",
        },
        {
          question: "When do I pay?",
          answer: "The estimate is free. Your written estimate identifies the complete scope, total price, required deposit and payment schedule before you approve the project.",
        },
      ]}
      testimonials={[
        {
          quote: "Our 1960s Bellaire kitchen looks modern and fresh. The transformation is incredible.",
          name: "Jennifer K.",
          location: "Bellaire"
        },
        {
          quote: "Professional and efficient. The finish quality rivals new cabinets.",
          name: "Michael & Sarah T.",
          location: "West University Place"
        },
        {
          quote: "Smart investment that added value to our home.",
          name: "Robert L.",
          location: "West University Place"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Cabinet Refinishing The Heights", href: "/cabinet-refinishing-the-heights" },
        { title: "Cabinet Refinishing Sugar Land", href: "/cabinet-refinishing-sugar-land" },
        { title: "Cabinet Refinishing Katy", href: "/cabinet-refinishing-katy-cinco-ranch" },
        { title: "Cabinet Refinishing Cypress", href: "/cabinet-refinishing-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Cabinet"
    />
  )
}
