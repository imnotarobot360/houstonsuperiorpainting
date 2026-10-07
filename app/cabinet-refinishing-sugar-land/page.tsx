import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Cabinet Refinishing Sugar Land, TX | Free Estimate",
  description: "Kitchen cabinet painting and refinishing in Sugar Land, TX. Degreased, sanded, primed and enamel-coated. Free estimate, 5-year written warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/cabinet-refinishing-sugar-land",
  },
}

export default function CabinetRefinishingSugarLandPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Sugar Land, TX"
      zoneSlug="sugar-land"
      metaTitle="Cabinet Refinishing Sugar Land, TX | Free Estimate"
      metaDescription="Kitchen cabinet painting and refinishing in Sugar Land, TX. Degreased, sanded, primed and enamel-coated. Free estimate, 5-year written warranty."
      h1="Cabinet Refinishing in Sugar Land, TX"
      heroSubheading="Painted kitchen and bath cabinets with a smooth, durable finish: cleaned, sanded and primed properly, and backed by a 5-year written workmanship warranty."
      introLocal="Sugar Land kitchens range from original cabinets in older neighborhoods to newer builder-grade sets in communities such as Riverstone. Either way, if the boxes are solid, painting changes the look without the cost or mess of tearing them out."
      serviceOverview="We remove the doors, drawer fronts and hardware and label each piece. Every surface is degreased, sanded and primed with a bonding primer, then finished with a cabinet-grade enamel from Sherwin-Williams or Benjamin Moore. The cabinet boxes are masked and coated in place, and the doors are reinstalled once the finish has cured enough to handle. Your written estimate lists the door and drawer count, color and schedule."
      whyChooseUs={[
        "Founded in 2019 by owner Juan Serra and headquartered in Cypress, TX.",
        "Degreasing, sanding and bonding primer on every surface: the steps that keep cabinet paint from chipping.",
        "Cabinet-grade enamel from Sherwin-Williams or Benjamin Moore.",
        `Insured: ${BUSINESS.trust.liabilityCoverage} general liability plus workers' comp.`,
        "5-year written workmanship warranty.",
        "No upfront payment: the estimate is free and nothing is due until you approve it in writing."
      ]}
      priceDetails="Where your kitchen falls depends on the number of doors and drawers, an island or built-ins, detailed or glass-front doors, and color changes, especially dark wood to white. Your free written estimate itemizes it."
      faqs={[
        {
          question: "How much does cabinet refinishing cost in Sugar Land?",
          answer: `Most kitchens run ${PRICES_2026.cabinetsPerKitchen}, and a typical kitchen lands around ${PRICES_2026.cabinetsAverage}. These are our published 2026 Greater Houston ranges; your written estimate is free and itemized after we count the doors and drawers.`,
        },
        {
          question: "Should I paint my cabinets or replace them?",
          answer: "If the boxes are solid and the layout works for you, painting gives a new look for much less than replacement. If boxes are water-damaged or swollen, or you want a different layout, replacement is the better choice. We check this at the estimate.",
        },
        {
          question: "How long does cabinet refinishing take?",
          answer: "It depends on the size of the kitchen and the finish, because each coat needs time to dry before the next. Your written estimate includes the schedule, and you can keep using the kitchen, with some limits, while the work is under way.",
        },
        {
          question: "Can builder-grade or laminate cabinets be painted?",
          answer: "Solid wood and MDF doors paint well. Thermofoil or laminate that is peeling or lifting does not hold paint reliably, so we will tell you at the estimate if your cabinets are not good candidates.",
        },
        {
          question: "What warranty do you give?",
          answer: "Every cabinet job comes with a 5-year written workmanship warranty. The full warranty terms are included with your written estimate, so you can read them before you approve the work.",
        },
        {
          question: "When do I pay?",
          answer: "The estimate is free, and nothing is due until you approve the written estimate. A down payment is collected at that point, and the balance is due after the final walkthrough.",
        }
      ]}
      testimonials={[
        {
          quote: "Our Riverstone kitchen looks completely transformed. Amazing value compared to new cabinets.",
          name: "Lisa & Tom W.",
          location: "Riverstone"
        },
        {
          quote: "Professional, efficient, and the results are stunning. Highly recommend.",
          name: "Priya S.",
          location: "Sweetwater"
        },
        {
          quote: "They transformed our builder-grade cabinets into something special.",
          name: "James K.",
          location: "First Colony"
        }
      ]}
      relatedPages={[
        { title: "Cabinet painting cost guide", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
        { title: "Interior painting in Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Cabinet refinishing in Cypress & Bridgeland", href: "/cabinet-refinishing-cypress-bridgeland" },
        { title: "Cabinet refinishing in Katy & Cinco Ranch", href: "/cabinet-refinishing-katy-cinco-ranch" },
        { title: "Painters in Sugar Land, TX (Sugar Land office)", href: "/painters-sugar-land-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
