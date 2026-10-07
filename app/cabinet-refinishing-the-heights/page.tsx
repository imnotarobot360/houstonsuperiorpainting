import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-the-heights',
  },
  title: "Cabinet Refinishing The Heights, Houston TX",
  description: "Kitchen cabinet refinishing in the Houston Heights, for older and newer kitchens. Bonding primer, 5-year written warranty, free written estimate.",
}

export default function CabinetRefinishingHeightsPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="The Heights, Houston, TX"
      zoneSlug="the-heights"
      metaTitle="Cabinet Refinishing The Heights, Houston TX"
      metaDescription="Kitchen cabinet refinishing in the Houston Heights, for older and newer kitchens. Bonding primer, 5-year written warranty, free written estimate."
      h1="Cabinet Refinishing in The Heights, Houston, TX"
      heroSubheading="Cleaned, sanded and primed before the finish coats, so painted cabinets hold up to daily use, backed by a 5-year written workmanship warranty."
      introLocal="Heights kitchens range from original cabinets in older homes to factory-finished cabinets in newer townhomes and rebuilds. Each takes different prep, and refinishing keeps your cabinet boxes and layout while changing the color and finish."
      serviceOverview="Cabinet refinishing changes the color and finish of your existing cabinets. Surfaces are cleaned and degreased, sanded, primed with a bonding primer and finished with Sherwin-Williams or Benjamin Moore products made for cabinets and trim. Prep is what keeps a cabinet finish from chipping or peeling in a working kitchen."
      whyChooseUs={[
        "Prep suited to both older wood cabinets and newer factory-finished ones.",
        "Degreasing, sanding and bonding primer on every surface before the finish coats.",
        "Sherwin-Williams and Benjamin Moore cabinet and trim products.",
        "Insured with $2M general liability plus workers' comp, and a 5-year written workmanship warranty.",
      ]}
      priceDetails="Price depends mainly on the number of doors and drawers, the current finish (stained wood, previously painted, or laminate), how big a color change you want, and any repairs. The free written estimate gives you the exact number."
      faqs={[
        {
          question: "How much does cabinet refinishing cost in The Heights?",
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
          question: "My kitchen cabinets are original to an older house. Does that matter?",
          answer: "Older cabinets often have several layers of paint or varnish. Homes built before 1978 may contain lead paint. Federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask any painter for their certification before sanding or scraping begins.",
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
          quote: "They transformed our 1920s bungalow kitchen beautifully. The cabinets look brand new.",
          name: "Amanda S.",
          location: "Woodland Heights"
        },
        {
          quote: "Smart update that modernized our kitchen while keeping the Heights character.",
          name: "Chris & Kelly M.",
          location: "The Heights"
        },
        {
          quote: "Exceptional finish quality. Highly recommend for any Heights homeowner.",
          name: "Daniel R.",
          location: "Norhill"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Cabinet Refinishing Tanglewood", href: "/cabinet-refinishing-tanglewood" },
        { title: "Cabinet Refinishing Bellaire", href: "/cabinet-refinishing-bellaire-west-university" },
        { title: "Cabinet Refinishing Sugar Land", href: "/cabinet-refinishing-sugar-land" },
        { title: "Cabinet Refinishing Katy", href: "/cabinet-refinishing-katy-cinco-ranch" },
        { title: "Cabinet Refinishing Cypress", href: "/cabinet-refinishing-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Cabinet"
    />
  )
}
