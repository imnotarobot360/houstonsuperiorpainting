import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-tanglewood',
  },
  title: "Cabinet Refinishing Tanglewood, Houston TX",
  description: "Kitchen cabinet refinishing in Tanglewood, Houston: degreasing, sanding, bonding primer and a 5-year written warranty. Free written estimate.",
}

export default function CabinetRefinishingTanglewoodPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Tanglewood, Houston, TX"
      zoneSlug="tanglewood"
      metaTitle="Cabinet Refinishing Tanglewood, Houston TX"
      metaDescription="Kitchen cabinet refinishing in Tanglewood, Houston: degreasing, sanding, bonding primer and a 5-year written warranty. Free written estimate."
      h1="Cabinet Refinishing in Tanglewood, Houston, TX"
      heroSubheading="Cleaned, sanded and primed before the finish coats, so painted cabinets hold up to daily use, backed by a 5-year written workmanship warranty."
      introLocal="Tanglewood has both original homes and newer rebuilds, and many kitchens have solid cabinets that only need a new finish. Refinishing keeps your cabinet boxes and layout and changes the color and finish."
      serviceOverview="Cabinet refinishing changes the color and finish of your existing cabinets. Surfaces are cleaned and degreased, sanded, primed with a bonding primer and finished with Sherwin-Williams or Benjamin Moore products made for cabinets and trim. Prep is what keeps a cabinet finish from chipping or peeling in a working kitchen."
      whyChooseUs={[
        "An honest refinish-or-replace recommendation after we see the cabinet boxes.",
        "Degreasing, sanding and bonding primer on every surface before the finish coats.",
        "Sherwin-Williams and Benjamin Moore cabinet and trim products.",
        "Insured with $2M general liability plus workers' comp, and a 5-year written workmanship warranty.",
      ]}
      priceDetails="Price depends mainly on the number of doors and drawers, the current finish (stained wood, previously painted, or laminate), how big a color change you want, and any repairs. The free written estimate gives you the exact number."
      faqs={[
        {
          question: "How much does cabinet refinishing cost in Tanglewood?",
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
          answer: "The estimate is free and nothing is due until you approve the written estimate. After approval there is a down payment, and the balance is due after the final walkthrough.",
        },
      ]}
      testimonials={[
        {
          quote: "Our kitchen looks completely transformed. The white finish is smooth and professional.",
          name: "Jennifer R.",
          location: "Tanglewood proper"
        },
        {
          quote: "Saved a fortune compared to new cabinets and the results are stunning.",
          name: "Michael & Sarah K.",
          location: "Briargrove"
        },
        {
          quote: "Meticulous attention to detail. Every cabinet door is flawless.",
          name: "Robert L.",
          location: "Briar Hollow"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Cabinet Refinishing Bellaire", href: "/cabinet-refinishing-bellaire-west-university" },
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
