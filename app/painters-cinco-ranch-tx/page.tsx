import type { Metadata } from "next"
import { PRICES_2026 } from "@/lib/business"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "House Painters Cinco Ranch TX | Interior & Exterior",
  description: "Professional house painters serving Cinco Ranch, Katy TX. Interior, exterior, and cabinet painting with HOA color help. Free estimates, 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-cinco-ranch-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Cinco Ranch TX | Houston Superior Painting",
    description: "Professional painting services for Cinco Ranch homeowners. Premium materials, insured crews, 5-year warranty.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "Cinco Ranch",
  slug: "painters-cinco-ranch-tx",
  description: "Professional house painting services in Cinco Ranch, Katy TX. Interior, exterior, and cabinet refinishing.",
})

export default function PaintersCincoRanchTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Cinco Ranch"
          state="TX"
          heroHeadline="Trusted House Painters for Cinco Ranch, Katy"
          heroDescription="Cinco Ranch's premier painting professionals. From lakeside estates to family homes throughout this beautiful master-planned community, we deliver exceptional results with every project."
          aboutCity={`Cinco Ranch is one of Katy's most desirable master-planned communities, known for its excellent schools, resort-style amenities, and beautiful homes surrounding Lake LaCenterra. Homeowners here take pride in their properties, and they deserve painting services that match their standards.

We've painted homes throughout Cinco Ranch—from Cinco Ranch South and Cinco Ranch North to the sections of Greenway Village, Lakes of Cinco Ranch, and beyond. Our crews know this community well, from its HOA requirements to the specific challenges of painting in Katy's climate.

Many Cinco Ranch homes are now reaching the age where exterior repainting becomes necessary. Texas sun, humidity, and storms take their toll, and a fresh coat of quality paint both protects your investment and dramatically improves curb appeal. We use premium Sherwin-Williams and Benjamin Moore products specifically formulated for these conditions.

For interiors, whether you're updating builder-grade paint, adding personality with accent walls, or preparing your home for sale, our expert crews deliver smooth, flawless results. Our 5-year workmanship warranty backs our commitment to Cinco Ranch homeowners.`}
          whyChooseUs={[
            "Cinco Ranch focus: familiar with the community's homes and HOA process",
            "HOA expertise: Familiar with all Cinco Ranch color requirements",
            "Premium materials: Sherwin-Williams and Benjamin Moore paints",
            "Weather-smart scheduling: We plan around Katy's conditions",
            "Background-checked crews: Professional, respectful service",
            "5-year written warranty: Our guarantee of lasting quality"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Transform your Cinco Ranch home's interior with flawless walls and expert trim work. Perfect for updating builder-grade finishes.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Protect and beautify your Cinco Ranch home's exterior. Our premium coatings stand up to Texas heat and maintain curb appeal.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Update your Cinco Ranch kitchen with factory-smooth cabinet finishes. A fraction of replacement cost with stunning results.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Fix settling cracks, nail pops, and other imperfections before painting. Essential for perfect results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Professional pressure washing for Cinco Ranch homes. Clean driveways, patios, and siding.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Transform your Cinco Ranch brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Professional painting for Cinco Ranch businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Durable epoxy coatings for Cinco Ranch garages that resist stains and last for years.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Cinco Ranch South",
            "Cinco Ranch North",
            "Cinco Ranch West",
            "Lakes of Cinco Ranch",
            "Greenway Village",
            "Lake LaCenterra",
            "Canyon Gate",
            "Cinco Ranch Southwest",
            "High Meadow Ranch",
            "Stone Gate",
            "Waterside Estates",
            "Westheimer Lakes"
          ]}
          testimonial={{
            quote: "We've lived in Cinco Ranch for 15 years and finally needed to repaint our exterior. Houston Superior Painting did an amazing job—the prep work was thorough, they helped us pick HOA-approved colors, and the finished result is beautiful. Highly recommend!",
            author: "The Thompson Family",
            location: "Lakes of Cinco Ranch"
          }}
          faqs={[
            {
              question: "How much does house painting cost in Cinco Ranch?",
              answer: `Interior painting in Cinco Ranch typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide free detailed estimates.`
            },
            {
              question: "Do you work with Cinco Ranch HOA requirements?",
              answer: "Absolutely! We're very familiar with Cinco Ranch HOA color guidelines and can help you select compliant colors. We've painted hundreds of homes throughout the community."
            },
            {
              question: "How long does it take to paint a Cinco Ranch home?",
              answer: "Interior painting typically takes 3-5 days. Exterior painting takes 4-7 days depending on home size. We always provide a timeline before starting work."
            },
            {
              question: "What paint brands do you use in Cinco Ranch?",
              answer: "We use premium Sherwin-Williams and Benjamin Moore paints. These high-quality products provide superior coverage, durability, and color retention—important for Cinco Ranch's Texas climate."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
