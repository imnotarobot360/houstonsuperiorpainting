import type { Metadata } from "next"
import Link from "next/link"
import { BUSINESS, PRICES_2026 } from "@/lib/business"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { ProblemSelector } from "@/components/problem-selector"
import { PricingSection } from "@/components/pricing-section"
import { SchedulerSection } from "@/components/scheduler-section"
import { generateLocationBusinessSchema } from "@/components/structured-data"

const DESCRIPTION =
  "House painters serving Bellaire, TX: interior, exterior and cabinet painting for mid-century ranches and new builds. Insured, 5-year warranty, free estimates."

export const metadata: Metadata = {
  title: "House Painters Bellaire TX — Houston Superior Painting",
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-bellaire-tx',
  },
  openGraph: {
    title: "House Painters Bellaire TX — Houston Superior Painting",
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/painters-bellaire-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-houston.jpg",
      width: 1200,
      height: 630,
      alt: "House Painters Bellaire TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Painters Bellaire TX — Houston Superior Painting",
    description: DESCRIPTION,
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-houston.jpg"],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Bellaire',
    'geo.position': '29.7058;-95.4588',
    'ICBM': '29.7058, -95.4588',
  },
}

export default function PaintersBellaireTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Bellaire",
  slug: "painters-bellaire-tx",
  description: "Professional house painting services in Bellaire, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Bellaire"
          state="TX"
          heroHeadline="House Painters in Bellaire, TX"
          heroDescription="From mid-century ranches to new custom builds, we paint Bellaire homes with careful prep, Sherwin-Williams and Benjamin Moore products, and a 5-year written workmanship warranty."
          quickAnswer={`Houston Superior Painting provides interior, exterior and cabinet painting in Bellaire, TX. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior2500} for a 2,500 sq ft home) and exterior painting ${PRICES_2026.exteriorPerHome} per home. We paint both older ranch homes and new construction, use Sherwin-Williams and Benjamin Moore products, carry $2M general liability plus workers' comp, and back our work with a 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`}
          aboutCity={`Bellaire is an inner-loop city surrounded by Houston, close to the Texas Medical Center, the Galleria and West University. Its housing mixes original mid-century ranch homes with newer two-story custom builds that have replaced many of them, often on fairly narrow lots.

That mix shapes how a paint job is planned. Older ranches often need more prep before any color goes on: failed caulk, weathered wood trim and siding, and decades of earlier coats. Newer builds tend to need less repair but have taller walls, more trim and larger exterior surfaces. On close-set lots, ladders, drop cloths and spray work have to be planned around the house next door.

Houston's humidity and summer heat are hard on exterior paint, so on exteriors we focus on cleaning, repairing and priming before the finish coats. Inside, we cover single rooms, whole-home repaints, trim and cabinets.

Houston Superior Painting was founded in 2019 and is headquartered in Cypress. Every Bellaire project starts with a free written estimate, and nothing is due until you approve it.`}
          whyChooseUs={[
            "Experience with both older ranch homes and new construction",
            "Planning for close-set lots: protecting neighboring property during prep and painting",
            "Sherwin-Williams and Benjamin Moore products",
            "Insured: $2M general liability plus workers' comp",
            "5-year written workmanship warranty",
            "No upfront payment: nothing is due until you approve the written estimate"
          ]}
          services={[
            {
              title: "Interior Painting Bellaire",
              description: "Single rooms to whole-home repaints, including walls, ceilings and trim.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Bellaire",
              description: "Exterior repaints with cleaning, repair and priming before the finish coats.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Bellaire",
              description: "Painted cabinet finishes as an alternative to replacing sound cabinet boxes.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair Bellaire",
              description: "Repairs to cracks, holes and imperfections before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing Bellaire",
              description: "Cleaning driveways, patios and siding before painting or as a standalone service.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick Bellaire",
              description: "Limewash and German smear finishes for brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting Bellaire",
              description: "Painting for Bellaire businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Bellaire",
              description: "Garage floor coatings through our sister brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Bellaire Proper",
            "Southdale",
            "Westmoreland",
            "Bellaire Junction",
            "Maplewood",
            "Oak Park",
            "Westchester",
            "Braeswood Place",
            "Meyerland",
            "West University Place",
            "Southside Place",
            "Medical Center Area"
          ]}
          faqs={[
            {
              question: "How much does it cost to paint a house in Bellaire, TX?",
              answer: `Interior painting in Bellaire typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide free written estimates.`
            },
            {
              question: "Do you paint both older and newer Bellaire homes?",
              answer: "Yes. Bellaire has a mix of mid-century ranch homes and newer custom builds. Older homes usually need more prep, such as caulk, wood repair and priming, while newer homes tend to have taller walls and more trim."
            },
            {
              question: "My Bellaire home was built before 1978. What about lead paint?",
              answer: "Homes built before 1978 may contain lead paint. Federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask any painter you are considering for their certification before sanding or scraping begins."
            },
            {
              question: "How do you work around Bellaire's narrow lots?",
              answer: "Close-set homes take planning. We set up ladders and equipment to fit the space, protect the neighboring property during prep and painting, and talk with you about access before work starts."
            },
            {
              question: "What warranty do you offer in Bellaire?",
              answer: "Bellaire painting projects are backed by our 5-year written workmanship warranty."
            },
            {
              question: "Are you insured?",
              answer: "Yes. We carry $2M general liability insurance plus workers' compensation. Certificates are available on request."
            }
          ]}
        />
        <section className="container mx-auto px-4 max-w-4xl pb-12">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Recent Project Nearby
            </h2>
            <p className="text-foreground leading-relaxed">
              In nearby West University, we refinished a kitchen&apos;s oak cabinets with a sprayed, painted finish.{" "}
              <Link
                href="/projects/west-university-kitchen-cabinet-refinishing"
                className="text-primary font-medium hover:underline"
              >
                See the West University cabinet refinishing project
              </Link>
              , or read about our{" "}
              <Link href="/cabinet-refinishing-houston-tx" className="text-primary font-medium hover:underline">
                cabinet refinishing service
              </Link>
              .
            </p>
          </div>
        </section>
        <ProblemSelector />
        <PricingSection />
        <SchedulerSection />
      </main>
      <Footer />
    </>
  )
}
