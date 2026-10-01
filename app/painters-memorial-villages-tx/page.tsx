import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "House Painters Memorial Villages TX | Interior & Exterior",
  description: "House painters serving the Memorial Villages: Bunker Hill, Piney Point, Hedwig Village, Hunters Creek, and Spring Valley. Free estimates, 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-memorial-villages-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Memorial Villages TX | Houston Superior Painting",
    description: "Premium painting services for Memorial Villages homeowners. Serving Bunker Hill, Piney Point, Hedwig Village, and more.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "Memorial Villages",
  slug: "painters-memorial-villages-tx",
  description: "Professional house painting services for the Memorial Villages. Interior, exterior, and specialty finishes.",
  areas: ["Bunker Hill Village", "Piney Point Village", "Hedwig Village", "Hunter's Creek Village", "Spring Valley Village", "Hilshire Village"],
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
          heroHeadline="Trusted House Painters for the Memorial Villages"
          heroDescription="Serving Bunker Hill, Piney Point, Hedwig Village, Hunter's Creek, Spring Valley, and Hilshire Village with the premium painting services these distinguished communities deserve."
          aboutCity={`The Memorial Villages are six independent municipalities that together form one of Houston's most prestigious residential areas. Bunker Hill Village, Piney Point Village, Hedwig Village, Hunter's Creek Village, Spring Valley Village, and Hilshire Village each maintain their own character while sharing a commitment to quality, safety, and community values.

We've been serving Memorial Villages homeowners since 2019, earning a reputation for quality craftsmanship and professional service. The homes here range from classic mid-century ranches to stunning contemporary estates, and each requires painting services that match its quality and the expectations of its owners.

The Memorial Villages' tree-lined streets and mature landscaping create a beautiful but challenging painting environment. More shade means different drying conditions, and protecting valuable landscaping during exterior work requires extra care. Our crews are experienced with these challenges and adjust their approach accordingly.

Whether you're in a cozy Hedwig Village cottage or a sprawling Piney Point estate, Houston Superior Painting delivers results that meet the Memorial Villages' high standards. Our 5-year warranty and extensive local experience give you confidence in your investment.`}
          whyChooseUs={[
            "Memorial Villages experts: Serving all six villages with proven results",
            "Permit knowledge: Familiar with each city's specific requirements",
            "Tree canopy experience: Proper techniques for shaded, wooded properties",
            "Luxury home skills: From detailed trim to specialty finishes",
            "Premium materials: Sherwin-Williams and Benjamin Moore products",
            "5-year written warranty: Our guarantee of lasting quality"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Transform your Memorial Villages home with expert interior finishes. We handle detailed trim work, high ceilings, and specialty textures.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Protect your home from the elements while enhancing curb appeal. Premium coatings for lasting beauty.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Update your kitchen with factory-smooth cabinet finishes. Transform dated cabinets at a fraction of replacement cost.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Fix cracks, settling damage, and imperfections before painting for flawless results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Professional pressure washing for Memorial Villages homes. Clean driveways, patios, and siding.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Transform your Memorial Villages brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Professional painting for Memorial Villages businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Durable epoxy coatings for Memorial Villages garages that resist stains and last for years.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Bunker Hill Village",
            "Piney Point Village",
            "Hedwig Village",
            "Hunter's Creek Village",
            "Spring Valley Village",
            "Hilshire Village",
            "Memorial Bend",
            "Memorial Forest",
            "Frostwood",
            "Nottingham Forest",
            "Memorial West",
            "Memorial Park Area"
          ]}
          testimonial={{
            quote: "We've lived in Piney Point for 20 years and have worked with several painters. Houston Superior Painting is by far the best—thorough preparation, beautiful results, and they treated our landscaping with care. They'll be our painters for life.",
            author: "Dr. William & Nancy T.",
            location: "Piney Point Village"
          }}
          faqs={[
            {
              question: "How much does painting cost in the Memorial Villages?",
              answer: `Interior painting in the Memorial Villages typically costs ${PRICES_2026.interiorPerSqFt} per square foot; homes over 4,000 sq ft generally run ${PRICES_2026.fullInterior4000} inside. A two-story exterior over 4,000 sq ft typically runs ${PRICES_2026.exterior4000TwoStory}, and larger estates with extensive millwork are quoted after a walkthrough. We provide free detailed estimates.`
            },
            {
              question: "Do you serve all six Memorial Villages?",
              answer: "Yes! We serve Bunker Hill Village, Piney Point Village, Hedwig Village, Hunter's Creek Village, Spring Valley Village, and Hilshire Village. We're familiar with each community's characteristics and requirements."
            },
            {
              question: "Are you familiar with Memorial Villages permit requirements?",
              answer: "Yes. Each Memorial Village has its own permit and inspection requirements. We handle all necessary coordination and are familiar with each city's standards for residential painting projects."
            },
            {
              question: "How do you work with the Memorial Villages' tree canopy?",
              answer: "The Memorial Villages' mature trees create specific painting conditions. We adjust preparation and scheduling for shade, moisture, and debris. Our experience here ensures lasting results despite these challenges."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
