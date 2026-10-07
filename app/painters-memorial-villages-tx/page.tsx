import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "House Painters Memorial Villages TX | Interior & Exterior",
  description: "House painters for the Memorial Villages: Bunker Hill, Piney Point, Hedwig, Hunters Creek, Spring Valley and Hilshire. Free estimates, 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-memorial-villages-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Memorial Villages TX | Houston Superior Painting",
    description: "Interior, exterior and cabinet painting for the Memorial Villages: Bunker Hill, Piney Point, Hedwig Village and more.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "Memorial Villages",
  slug: "painters-memorial-villages-tx",
  description: "Professional house painting services for the Memorial Villages. Interior, exterior, and cabinet refinishing.",
  areas: ["Bunker Hill Village", "Piney Point Village", "Hedwig Village", "Hunters Creek Village", "Spring Valley Village", "Hilshire Village"],
})

export default function PaintersMemorialVillagesTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Memorial Villages"
          state="TX"
          heroHeadline="House Painters for the Memorial Villages"
          heroDescription="Interior, exterior and cabinet painting in Bunker Hill, Piney Point, Hedwig, Hunters Creek, Spring Valley and Hilshire Village, with prep suited to shaded, wooded lots."
          quickAnswer={`Houston Superior Painting paints homes in the six Memorial Villages: Bunker Hill, Piney Point, Hedwig, Hunters Creek, Spring Valley and Hilshire Village. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior4000} for homes around 4,000 sq ft) and a two-story exterior around 4,000 sq ft typically runs ${PRICES_2026.exterior4000TwoStory}. Each village is its own city, so check local rules for exterior work before scheduling. Insured, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`}
          aboutCity={`The Memorial Villages are six small, independent cities in west Houston: Bunker Hill Village, Piney Point Village, Hedwig Village, Hunters Creek Village, Spring Valley Village and Hilshire Village. Homes range from original mid-century ranches on wooded lots to large newer custom builds.

Because each village is its own municipality, rules for contractors and exterior work can differ from one to the next. Check with your village before an exterior project, and we will work within whatever it requires.

The tree canopy shapes exterior work. Shade keeps siding and trim damp longer, which encourages mildew and slows drying, so exterior jobs start with washing, then caulk and wood repair and priming of bare spots before the finish coats, scheduled for dry weather. Mature landscaping is covered and protected during the work. Inside, larger homes add tall walls, stairwells and a lot of trim.

Houston Superior Painting was founded in 2019 and is headquartered in Cypress. Every estimate is free and written, and nothing is due until you approve it.`}
          whyChooseUs={[
            "Prep for shaded, wooded lots: washing, mildew treatment, caulk and wood repair",
            "Landscape protection during exterior work",
            "Equipment and planning for tall walls, stairwells and detailed trim",
            "Sherwin-Williams and Benjamin Moore products",
            "Insured: $2M general liability plus workers' comp",
            "5-year written workmanship warranty"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Walls, ceilings and trim, including high ceilings and detailed trim work.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Exterior repaints with washing, repair and priming before the finish coats.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Painted cabinet finishes as an alternative to replacing sound cabinet boxes.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Repairs to cracks, settling damage and imperfections before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Cleaning driveways, patios and siding.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Limewash finishes for brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Painting for Memorial Villages businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Garage floor coatings through our sister brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Bunker Hill Village",
            "Piney Point Village",
            "Hedwig Village",
            "Hunters Creek Village",
            "Spring Valley Village",
            "Hilshire Village",
            "Memorial Bend",
            "Memorial Forest",
            "Frostwood",
            "Nottingham Forest",
            "Memorial West",
            "Memorial Park Area"
          ]}
          faqs={[
            {
              question: "How much does painting cost in the Memorial Villages?",
              answer: `Interior painting in the Memorial Villages typically costs ${PRICES_2026.interiorPerSqFt} per square foot; homes around 4,000 sq ft generally run ${PRICES_2026.fullInterior4000} inside. A two-story exterior around 4,000 sq ft typically runs ${PRICES_2026.exterior4000TwoStory}, and larger homes with extensive millwork are quoted after a walkthrough. We provide free written estimates.`
            },
            {
              question: "Do you serve all six Memorial Villages?",
              answer: "Yes. We paint homes in Bunker Hill Village, Piney Point Village, Hedwig Village, Hunters Creek Village, Spring Valley Village and Hilshire Village."
            },
            {
              question: "Do I need village approval to paint my exterior?",
              answer: "Each Memorial Village is its own city with its own rules for contractors and exterior work. Check with your village office before scheduling an exterior project, and we will work within its requirements."
            },
            {
              question: "How do you handle the Memorial Villages' tree canopy?",
              answer: "Shade keeps surfaces damp and encourages mildew, so we wash and treat surfaces first, repair caulk and wood, protect landscaping, and schedule painting for dry weather so coatings can cure."
            }
          ]}
        />
        <section className="container mx-auto px-4 max-w-4xl pb-12">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Recent Project Nearby
            </h2>
            <p className="text-foreground leading-relaxed">
              In the nearby Memorial area of Houston, we repainted the interior of a home with one cohesive palette across walls and trim.{" "}
              <Link
                href="/projects/memorial-whole-home-interior-repaint"
                className="text-primary font-medium hover:underline"
              >
                See the Memorial whole-home interior repaint
              </Link>
              . For homes along the Memorial Drive corridor outside the villages, see our{" "}
              <Link href="/painters-memorial-tx" className="text-primary font-medium hover:underline">
                Memorial painters page
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
