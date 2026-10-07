import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "House Painters River Oaks Houston TX | Interior & Exterior",
  description: "House painters serving River Oaks, Houston: interior, exterior and cabinet painting for older and newer homes with detailed trim. 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-river-oaks-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in River Oaks TX | Houston Superior Painting",
    description: "Interior, exterior and cabinet painting for River Oaks homeowners. Insured crews, 5-year workmanship warranty.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "River Oaks",
  slug: "painters-river-oaks-tx",
  description: "House painting services in River Oaks, Houston TX. Interior, exterior, and cabinet refinishing.",
})

export default function PaintersRiverOaksTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="River Oaks"
          state="TX"
          heroHeadline="House Painters for River Oaks, Houston"
          heroDescription="Interior, exterior and cabinet painting for River Oaks homes, from early-20th-century houses with original millwork to new custom builds."
          quickAnswer={`Houston Superior Painting paints homes in River Oaks, Houston. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior4000} for homes around 4,000 sq ft) and a two-story exterior around 4,000 sq ft typically runs ${PRICES_2026.exterior4000TwoStory}; larger homes with extensive millwork are quoted after a walkthrough. Specialty finishes such as Venetian plaster are priced after an on-site look. Insured, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`}
          aboutCity={`River Oaks is an established inner-loop neighborhood between Buffalo Bayou and Westheimer, developed from the 1920s onward. Its homes range from period houses with original millwork and plaster to large new custom builds.

Older homes here usually need careful prep: repairing cracked plaster and settling cracks inside, and on the exterior replacing failed caulk, repairing rotted wood and priming bare spots before the finish coats. Houston's humidity and summer heat are hard on exterior paint, so that prep matters more than the color. Homes built before 1978 may contain lead paint, which federal rules require be disturbed only by an EPA-certified renovation firm, so ask any painter for their certification.

Mature landscaping and close attention to finished surfaces inside the home mean protection is part of every job: covering beds and hardscape, and protecting floors and furnishings. We paint walls, ceilings, trim and cabinets, and specialty finishes such as Venetian plaster, Roman Clay and faux finishes are priced after an on-site look.

Houston Superior Painting was founded in 2019 and is headquartered in Cypress. Every estimate is free and written, and nothing is due until you approve it.`}
          whyChooseUs={[
            "Prep for older homes: plaster and crack repair, caulk, wood repair and priming",
            "Protection for landscaping, floors and furnishings",
            "Specialty finishes: Venetian plaster, Roman Clay and faux finishes",
            "Can work from designer or architect color and sheen specifications",
            "Sherwin-Williams and Benjamin Moore products",
            "Insured: $2M general liability plus workers' comp",
            "5-year written workmanship warranty"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Walls, ceilings and trim, including high ceilings and detailed millwork.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Exterior repaints with caulk, wood repair and priming before the finish coats.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Painted cabinet finishes as an alternative to replacing sound cabinetry.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Venetian Plaster",
              description: "Venetian plaster for feature walls and rooms, priced after an on-site look.",
              href: "/venetian-plaster-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Repairs to cracks, plaster damage and imperfections before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Limewash finishes for brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Cleaning driveways, patios and exterior surfaces.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Garage floor coatings through our sister brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "River Oaks",
            "River Oaks Shopping Area",
            "Avalon Place",
            "Courtlandt Place",
            "Broadacres",
            "Shadyside",
            "Hyde Park",
            "Boulevard Oaks",
            "Montrose",
            "Upper Kirby",
            "Greenway Plaza Area",
            "Highland Village"
          ]}
          faqs={[
            {
              question: "How much does it cost to paint a home in River Oaks?",
              answer: `River Oaks homes vary widely in size and detail. Interior painting typically costs ${PRICES_2026.interiorPerSqFt} per square foot; homes around 4,000 sq ft generally run ${PRICES_2026.fullInterior4000} inside. A two-story exterior around 4,000 sq ft typically runs ${PRICES_2026.exterior4000TwoStory}, and larger homes with extensive millwork are quoted after a walkthrough. We provide free written estimates.`
            },
            {
              question: "Do you paint older River Oaks homes?",
              answer: "Yes. Older homes usually need more prep, such as plaster and crack repair inside, and caulk, wood repair and priming outside. Homes built before 1978 may contain lead paint, which federal rules require be disturbed only by an EPA-certified renovation firm, so ask any painter for their certification."
            },
            {
              question: "Do you do specialty finishes?",
              answer: "We offer Venetian plaster, Roman Clay, faux finishes, metallic finishes, lacquer, grasscloth and other wallcoverings, and limewash. Because these depend on the surface and the look you want, they are priced after an on-site look rather than from a published range."
            },
            {
              question: "How do you protect landscaping?",
              answer: "We cover beds and shrubs near the work area, protect hardscape and floors with drop cloths and plastic, and plan ladder and equipment placement before work starts."
            }
          ]}
        />
        <section className="container mx-auto px-4 max-w-4xl pb-12">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Recent Project in River Oaks
            </h2>
            <p className="text-foreground leading-relaxed">
              On a two-story River Oaks home, we did a full exterior repaint with rot repair and re-caulking before the finish coats.{" "}
              <Link
                href="/projects/river-oaks-exterior-restoration"
                className="text-primary font-medium hover:underline"
              >
                See the River Oaks exterior restoration
              </Link>
              , or read about our{" "}
              <Link href="/exterior-painting-houston-tx" className="text-primary font-medium hover:underline">
                exterior painting service
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
