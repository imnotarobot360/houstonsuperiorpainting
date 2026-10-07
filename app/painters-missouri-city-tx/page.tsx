import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"
// This page shipped with no Header and no Footer, unlike its siblings —
// meaning no site navigation and none of the footer's internal links.
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "House Painters Missouri City TX | Interior & Exterior",
  description: "House painters in Missouri City, TX: interior and exterior painting, cabinet refinishing and drywall repair. Insured crews, 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-missouri-city-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Missouri City TX | Houston Superior Painting",
    description: "Interior, exterior and cabinet painting for Missouri City and Fort Bend County homes. Insured, 5-year workmanship warranty, free estimates.",
    type: "website",
  },
}

const missouriCityData = {
  city: "Missouri City",
  state: "TX",
  heroHeadline: "House Painters in Missouri City, TX",
  heroDescription: "Interior, exterior and cabinet painting for Missouri City homes, from established neighborhoods like Quail Valley to newer master-planned communities.",

  quickAnswer: `Houston Superior Painting paints homes in Missouri City, TX. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior2500} for a 2,500 sq ft home) and exterior painting ${PRICES_2026.exteriorPerHome} per home. Many Missouri City neighborhoods are HOA-governed, so check exterior color approval before work starts. Insured, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`,

  aboutCity: `Missouri City is a Fort Bend County city southwest of Houston. Its housing ranges from established neighborhoods such as Quail Valley, with many homes from the 1970s and 1980s, to newer master-planned communities such as Sienna. Most homes are brick with painted siding, trim and soffits.

The work differs by age. Older homes often need failed caulk replaced, rotted trim and siding repaired, and bare wood primed before repainting. Newer homes are often on their first repaint and mainly need cleaning, caulk touch-up and good coverage. Houston's humidity and summer heat are hard on exterior paint, so surface prep matters as much as the product.

Many Missouri City neighborhoods have HOAs that require approval before an exterior color change. Get approval before the job is scheduled; we can provide the product names and color codes your association asks for.

Houston Superior Painting was founded in 2019 and is headquartered in Cypress, with an office in Sugar Land. Every estimate is free and written, and nothing is due until you approve it.`,

  neighborhoods: [
    "Sienna",
    "Riverstone",
    "Lake Olympia",
    "Quail Valley",
    "Lexington Country",
    "Palmer Plantation",
    "Hunters Glen",
    "Commonwealth",
    "Fondren Park",
    "City Centre",
    "Lakeside Estates",
    "Telfair"
  ],

  services: [
    {
      title: "Interior Painting",
      description: "Walls, ceilings and trim, from accent walls to whole-home repaints.",
      href: "/interior-painting-houston-tx"
    },
    {
      title: "Exterior Painting",
      description: "Exterior repaints with cleaning, caulk, wood repair and priming before the finish coats.",
      href: "/exterior-painting-houston-tx"
    },
    {
      title: "Cabinet Refinishing",
      description: "Spray-applied painted cabinet finishes as an alternative to replacement.",
      href: "/cabinet-refinishing-houston-tx"
    },
    {
      title: "Drywall Repair",
      description: "We fix cracks, holes, nail pops, and water damage before painting.",
      href: "/drywall-repair-houston-tx"
    },
    {
      title: "Pressure Washing",
      description: "Pressure washing for driveways, patios, and siding.",
      href: "/pressure-washing-houston-tx"
    },
    {
      title: "Limewash Brick",
      description: "Limewash finishes for brick homes, priced after an on-site look.",
      href: "/limewash-brick-painting-houston-tx"
    },
    {
      title: "Commercial Painting",
      description: "Painting for Missouri City businesses and commercial properties.",
      href: "/commercial-painting-houston-tx"
    },
    {
      title: "Garage Floor Epoxy",
      description: "Garage floor coatings through our sister brand, Houston Superior Epoxy.",
      href: "https://houstonsuperiorepoxy.com/"
    }
  ],

  whyChooseUs: [
    "$2M general liability insurance plus workers' compensation",
    "Sherwin-Williams and Benjamin Moore paints",
    "5-year written workmanship warranty",
    "Written estimates with the full scope spelled out",
    "No upfront payment: nothing is due until you approve the written estimate",
    "Help preparing color details for HOA submittals"
  ],

  faqs: [
    {
      question: "Do you work with Missouri City HOAs?",
      answer: "Yes. Many Missouri City communities require HOA approval before an exterior color change. Get approval before the job is scheduled; we can provide the product names and color codes your association asks for."
    },
    {
      question: "How much does house painting cost in Missouri City?",
      answer: `Interior painting in Missouri City typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide free written estimates.`
    },
    {
      question: "How long will my exterior paint last in Missouri City?",
      answer: "It depends mostly on prep, product and sun exposure. South- and west-facing walls and trim weather fastest. Our work is backed by a 5-year written workmanship warranty."
    },
    {
      question: "Do you paint older homes in Quail Valley?",
      answer: "Yes. Older homes usually need more prep: caulk replacement, wood repair and priming. Homes built before 1978 may contain lead paint, which federal rules require be disturbed only by an EPA-certified renovation firm, so ask any painter for their certification."
    }
  ]
}

export default function PaintersMissouriCityTX() {
  return (
    <>
      {/* No Google Business Profile here, so the shared helper emits an
          Organization reference with areaServed only (no address). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateLocationBusinessSchema({
              city: "Missouri City",
              slug: "painters-missouri-city-tx",
              description:
                "Professional house painters serving Missouri City and Fort Bend County, TX.",
            }),
          ),
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate {...missouriCityData} />
      </main>
      <Footer />
    </>
  )
}
