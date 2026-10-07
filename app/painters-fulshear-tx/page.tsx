import type { Metadata } from "next"
import { PRICES_2026 } from "@/lib/business"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { ProblemSelector } from "@/components/problem-selector"
import { PricingSection } from "@/components/pricing-section"
import { SchedulerSection } from "@/components/scheduler-section"
import { generateLocationBusinessSchema } from "@/components/structured-data"

const TITLE = "House Painters in Fulshear TX | Houston Superior Painting"
const DESCRIPTION =
  "Interior, exterior & cabinet painting in Fulshear, TX. $2M general liability + workers' comp, 5-year warranty. Free estimates: (346) 594-5960."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-fulshear-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/painters-fulshear-tx",
    siteName: "Houston Superior Painting",
    type: "website",
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Fulshear',
    'geo.position': '29.6899;-95.8990',
    'ICBM': '29.6899, -95.8990',
  },
}

export default function PaintersFulshearTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Fulshear",
  slug: "painters-fulshear-tx",
  description: "Professional house painting services in Fulshear, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Fulshear"
          state="TX"
          heroHeadline="House Painters in Fulshear, TX"
          heroDescription="Interior, exterior, and cabinet painting for Fulshear homes in Cross Creek Ranch, Fulbrook, Jordan Ranch, Tamarron, and the rest of the area. Insured, with a 5-year workmanship warranty."
          quickAnswer={`Houston Superior Painting paints interiors, exteriors, and kitchen cabinets and repairs drywall in Fulshear, TX, including Cross Creek Ranch, Fulbrook on Fulshear Creek, Jordan Ranch, and Tamarron. We are headquartered in Cypress, and our crews work across Greater Houston and Fort Bend County. In 2026 a full interior on a 2,500 sq ft home runs ${PRICES_2026.fullInterior2500} and a 2,500 sq ft two-story exterior runs ${PRICES_2026.exterior2500TwoStory}. We carry $2M general liability + workers' comp and give a 5-year workmanship warranty. For a free estimate, call (346) 594-5960 or request one online.`}
          aboutCity={`Fulshear has grown quickly in recent years, and most of its homes are in newer master-planned communities such as Cross Creek Ranch, Jordan Ranch, and Tamarron. Many of those homes still have the flat builder-grade paint they were built with, which scuffs easily and is hard to clean. A common first project is repainting the main living areas, kitchen, and halls in a washable finish, or refinishing builder-grade cabinets in a new color.

Fulshear has the same Gulf Coast climate as the rest of Greater Houston, and the south- and west-facing walls of a newer home are usually the first to fade and chalk. On an exterior we wash off the chalk, re-caulk the joints where siding meets brick, and prime any bare spots before the finish coats.

Nearly every Fulshear master-planned community has an HOA that reviews exterior color changes. We can pull your community's approved color list and help with the approval paperwork before work starts.`}
          whyChooseUs={[
            "Free on-site estimate with a written scope; nothing is due until you approve it",
            "Insured: $2M general liability + workers' comp, with certificates available for your HOA",
            "5-year written workmanship warranty",
            "Sherwin-Williams and Benjamin Moore paints in place of flat builder-grade finishes",
            "Help with HOA color lists and approval paperwork",
            "Founded in 2019 and headquartered in Cypress, with crews across Greater Houston",
          ]}
          services={[
            {
              title: "Interior Painting Fulshear",
              description: "Walls, ceilings, trim, and doors, including replacing flat builder-grade paint with a washable finish.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Fulshear",
              description: "Wash, caulk, and prime before the finish coats on siding, trim, and brick.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Fulshear",
              description: "Sprayed cabinet finishes that update builder-grade cabinets without replacing them.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Accent Walls Fulshear",
              description: "Accent walls and feature colors as part of an interior project.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Drywall Repair Fulshear",
              description: "Nail pops, cracks, and settling damage repaired and texture-matched before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Limewash Brick Fulshear",
              description: "Limewash or painted brick for Fulshear brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Pressure Washing Fulshear",
              description: "Cleaning for driveways, patios, and exteriors, and the first step before exterior paint.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Fulshear",
              description: "Garage floor epoxy is handled by our separate epoxy brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Cross Creek Ranch",
            "Fulbrook on Fulshear Creek",
            "Polo Ranch",
            "Tamarron",
            "Jordan Ranch",
            "Weston Lakes",
            "Fulshear Run",
            "Parkway Lakes",
            "Fulshear Lake Estates",
          ]}
          faqs={[
            {
              question: "How much does it cost to paint a house in Fulshear?",
              answer: `In 2026 interior painting typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exteriors run ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. Your free written estimate gives the exact price.`
            },
            {
              question: "Do you work with Fulshear HOAs?",
              answer: "Yes. We can pull your community's approved color list and help with the approval paperwork before any exterior work starts, and we can send a certificate of insurance to your HOA."
            },
            {
              question: "Can you replace builder-grade paint?",
              answer: "Yes. Flat builder-grade paint marks easily and does not wash well. We repaint with Sherwin-Williams or Benjamin Moore paint in a washable sheen such as eggshell or satin, usually starting with the rooms that get the most use."
            },
            {
              question: "Which Fulshear areas do you serve?",
              answer: "All of Fulshear, including Cross Creek Ranch, Fulbrook on Fulshear Creek, Polo Ranch, Tamarron, Jordan Ranch, and Weston Lakes. Call (346) 594-5960 or request an estimate online to confirm your address."
            },
            {
              question: "What paint brands do you use?",
              answer: "Sherwin-Williams and Benjamin Moore, for example Sherwin-Williams Duration or Emerald on exteriors and Benjamin Moore Regal Select or Aura on interiors. The product and number of coats are listed on your written estimate."
            },
            {
              question: "Are you insured?",
              answer: "Yes. We carry $2M general liability + workers' comp and can send a certificate of insurance to you or your HOA. Texas does not license residential painters, so ask any painter for proof of insurance instead of a license."
            }
          ]}
        />
        <ProblemSelector />
        <PricingSection />
        <SchedulerSection />
      </main>
      <Footer />
    </>
  )
}
