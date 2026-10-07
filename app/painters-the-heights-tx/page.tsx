import type { Metadata } from "next"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { ProblemSelector } from "@/components/problem-selector"
import { PricingSection } from "@/components/pricing-section"
import { SchedulerSection } from "@/components/scheduler-section"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

const DESCRIPTION =
  "House painters in The Heights, Houston: interior, exterior and cabinet painting for wood-sided bungalows and new builds. Insured, 5-year warranty."

export const metadata: Metadata = {
  title: "House Painters The Heights TX — Houston Superior Painting",
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-the-heights-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters The Heights TX — Houston Superior Painting",
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/painters-the-heights-tx",
    siteName: "Houston Superior Painting",
    type: "website",
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Houston Heights',
    'geo.position': '29.8024;-95.3981',
    'ICBM': '29.8024, -95.3981',
  },
}

export default function PaintersTheHeightsTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "The Heights",
  slug: "painters-the-heights-tx",
  description: "Professional house painting services in The Heights, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="The Heights"
          state="TX"
          heroHeadline="House Painters in The Heights, Houston"
          heroDescription="Interior, exterior and cabinet painting for Heights homes, from early-1900s wood-sided bungalows to new townhomes and custom builds."
          quickAnswer={`Houston Superior Painting paints homes in The Heights, Houston. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior2500} for a 2,500 sq ft home) and exterior painting ${PRICES_2026.exteriorPerHome} per home. Older wood-sided bungalows usually need more scraping, wood repair and priming than newer homes, which shows up in the estimate. Sherwin-Williams and Benjamin Moore products, insured crews, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`}
          aboutCity={`The Heights is one of Houston's oldest neighborhoods, with many early-1900s bungalows and cottages alongside newer townhomes and custom builds. Parts of it are city-designated historic districts.

Older Heights homes bring specific painting work. Original wood siding and trim often carry many layers of old paint, so prep means scraping loose paint, repairing or replacing soft wood, caulking and priming bare wood before the finish coats. Many of these homes sit on pier-and-beam foundations, and settling can open cracks in interior walls and trim that should be repaired before repainting. Homes built before 1978 may contain lead paint, which federal rules require be disturbed only by an EPA-certified renovation firm, so ask any painter for their certification before scraping or sanding begins.

Newer Heights townhomes and custom builds tend to need less repair but have tall stairwells and a lot of trim. We paint both, inside and out, and also refinish kitchen cabinets.

If your home is in a city historic district, check with the City of Houston about any exterior work before you schedule it. Houston Superior Painting was founded in 2019 and is headquartered in Cypress. Every estimate is free and written, and nothing is due until you approve it.`}
          whyChooseUs={[
            "Prep for older wood siding and trim: scraping, wood repair, caulk and priming",
            "Interior crack and settling repair before repainting",
            "New construction experience: townhomes and custom builds",
            "Sherwin-Williams and Benjamin Moore products",
            "Insured: $2M general liability plus workers' comp",
            "5-year written workmanship warranty"
          ]}
          services={[
            {
              title: "Interior Painting Heights",
              description: "Walls, ceilings and trim, from older plaster walls to new drywall.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Heights",
              description: "Exterior repaints with scraping, repair and priming of wood siding and trim.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Heights",
              description: "Painted cabinet finishes as an alternative to replacing sound cabinet boxes.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Wood Rot Repair",
              description: "Repair or replacement of soft and rotted siding and trim before painting.",
              href: "/wood-rot-repair-houston-tx"
            },
            {
              title: "Drywall Repair Heights",
              description: "Repairs to cracks and settling damage before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Limewash Brick Heights",
              description: "Limewash finishes for brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Pressure Washing Heights",
              description: "Cleaning driveways, sidewalks and home exteriors.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Commercial Painting Heights",
              description: "Painting for Heights businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            }
          ]}
          neighborhoods={[
            "Houston Heights",
            "Woodland Heights",
            "Norhill",
            "Brooke Smith",
            "Sunset Heights",
            "Rice Military",
            "Washington Avenue",
            "Garden Oaks",
            "Oak Forest",
            "Independence Heights",
            "Near Northside",
            "Timbergrove"
          ]}
          faqs={[
            {
              question: "How much does it cost to paint a house in The Heights?",
              answer: `Interior painting in The Heights typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. Older wood-sided homes that need heavy scraping and wood repair cost more. We provide free written estimates.`
            },
            {
              question: "Do you paint older Heights bungalows?",
              answer: "Yes. Older wood-sided homes need more prep: scraping loose paint, repairing soft wood, caulking and priming bare wood. We include that work in the written estimate after seeing the house."
            },
            {
              question: "Can you repair damaged wood siding?",
              answer: "Yes. We repair or replace soft and rotted sections of siding and trim, then prime and paint them with the rest of the exterior."
            },
            {
              question: "My Heights home was built before 1978. What about lead paint?",
              answer: "Homes built before 1978 may contain lead paint. Federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask any painter you are considering for their certification before scraping or sanding begins."
            },
            {
              question: "Do you paint Heights new construction?",
              answer: "Yes. We paint new townhomes and custom builds, inside and out, including tall stairwells and trim."
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
