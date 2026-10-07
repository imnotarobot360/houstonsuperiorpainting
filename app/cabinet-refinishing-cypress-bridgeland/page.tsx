import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Cabinet Refinishing Cypress & Bridgeland, TX | Free Estimate",
  description: "Kitchen cabinet painting and refinishing in Cypress and Bridgeland, TX. Degreased, sanded, primed and enamel-coated. Free estimate, 5-year written warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/cabinet-refinishing-cypress-bridgeland",
  },
}

export default function CabinetRefinishingCypressPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Cypress & Bridgeland, TX"
      zoneSlug="cypress-bridgeland"
      metaTitle="Cabinet Refinishing Cypress & Bridgeland, TX | Free Estimate"
      metaDescription="Kitchen cabinet painting and refinishing in Cypress and Bridgeland, TX. Degreased, sanded, primed and enamel-coated. Free estimate, 5-year written warranty."
      h1="Cabinet Refinishing in Cypress and Bridgeland, TX"
      heroSubheading="Painted kitchen and bath cabinets with a smooth, durable finish: cleaned, sanded and primed properly, and backed by a 5-year written workmanship warranty."
      introLocal="Houston Superior Painting is headquartered in Cypress, so Bridgeland, Towne Lake, Fairfield and the rest of the Cypress area are close to home for our crews. Many kitchens in the area's newer homes have builder-grade stained or white cabinets with solid boxes that are worth keeping, which makes them good candidates for painting rather than replacement."
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
          question: "How much does cabinet refinishing cost in Cypress?",
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
          quote: "Our Bridgeland kitchen looks completely transformed. Amazing value.",
          name: "Rachel & Mark H.",
          location: "Bridgeland"
        },
        {
          quote: "Professional and efficient. The finish quality is exceptional.",
          name: "Kevin P.",
          location: "Towne Lake"
        },
        {
          quote: "Transformed our builder-grade cabinets beautifully. Highly recommend.",
          name: "Amy J.",
          location: "Fairfield"
        }
      ]}
      relatedPages={[
        { title: "Cabinet painting cost guide", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
        { title: "Interior painting in Cypress & Bridgeland", href: "/interior-painting-cypress-bridgeland" },
        { title: "Cabinet refinishing in Katy & Cinco Ranch", href: "/cabinet-refinishing-katy-cinco-ranch" },
        { title: "Cabinet refinishing in Sugar Land", href: "/cabinet-refinishing-sugar-land" },
        { title: "Painters in Cypress, TX (headquarters)", href: "/painters-cypress-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
