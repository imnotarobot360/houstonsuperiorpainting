import type { Metadata } from "next"
import { PRICES_2026 } from "@/lib/business"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "House Painters in Energy Corridor Houston TX | Free Estimates",
  description: "Professional house painters serving the Energy Corridor in Houston, TX. Interior, exterior, and cabinet painting for Briar Forest and Westchase homes.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-energy-corridor-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Energy Corridor TX | Houston Superior Painting",
    description: "Professional painting services for Energy Corridor homeowners. Premium materials, insured crews, 5-year warranty.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "Energy Corridor",
  slug: "painters-energy-corridor-tx",
  description: "Professional house painting services in the Energy Corridor, Houston TX. Interior, exterior, and cabinet refinishing.",
})

export default function PaintersEnergyCorridorTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Energy Corridor"
          state="TX"
          heroHeadline="Professional House Painters for the Energy Corridor"
          heroDescription="Serving Houston's premier business district residential communities. From Briar Forest estates to Westchase condos, we deliver the quality and professionalism Energy Corridor residents expect."
          aboutCity={`The Energy Corridor is home to many of Houston's corporate headquarters and the professionals who power the energy industry. The residential communities here—from the established neighborhoods of Briar Forest to the convenient locations near Westchase—feature homes that reflect their owners' success and high standards.

We understand that Energy Corridor residents are busy professionals who value efficiency, quality, and reliability. When you hire Houston Superior Painting, you get a team that respects your time, communicates clearly, and delivers results without hassle. We show up when scheduled, work efficiently, and leave your home spotless.

Many Energy Corridor homes were built in the 1980s and 1990s, and several neighborhoods experienced flooding in recent years. We're experienced with flood-affected homes, understanding the special preparation needed for walls and surfaces that have seen water damage. For newer homes and condos, we offer premium finishes that match your property's quality.

Whether you're updating a home you've lived in for years, preparing a property for sale, or making a new purchase feel like home, Houston Superior Painting delivers the results Energy Corridor residents expect.`}
          whyChooseUs={[
            "Energy Corridor specialists: Familiar with this area's homes and challenges",
            "Professional service: We respect busy schedules and communicate clearly",
            "Flood restoration experience: Skilled with water-damaged properties",
            "Condo and townhome expertise: We coordinate with HOAs as needed",
            "Premium materials: Sherwin-Williams and Benjamin Moore products",
            "5-year written warranty: Our guarantee of lasting quality"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Transform your Energy Corridor home with expert interior finishes. We work efficiently around your schedule.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Protect and beautify your home's exterior. Our premium coatings withstand Houston weather and maintain curb appeal.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Update your kitchen with factory-smooth cabinet finishes. A cost-effective way to modernize your space.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Fix cracks, water damage, and flood-related issues before painting. Expert repairs for perfect results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Professional pressure washing for Energy Corridor homes. Clean driveways, patios, and siding.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Transform your Energy Corridor brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Professional painting for Energy Corridor businesses and office spaces. Minimal disruption to operations.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Durable epoxy coatings for Energy Corridor garages that resist stains and last for years.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Briar Forest",
            "Westchase",
            "Nottingham Forest",
            "Royal Oaks",
            "Eldridge",
            "Addicks",
            "Terry Hershey Park Area",
            "Park Row",
            "West Houston",
            "Memorial West",
            "Town and Country",
            "Spring Branch West"
          ]}
          testimonial={{
            quote: "We needed our Briar Forest home painted quickly before a corporate relocation. Houston Superior Painting worked with our tight timeline and delivered excellent results. Professional, efficient, and high quality—exactly what we needed.",
            author: "James & Catherine W.",
            location: "Briar Forest"
          }}
          faqs={[
            {
              question: "How much does house painting cost in the Energy Corridor?",
              answer: `Interior painting in the Energy Corridor typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide free detailed estimates.`
            },
            {
              question: "Do you paint condos and townhomes in the Energy Corridor?",
              answer: "Yes! We paint both single-family homes and multi-family properties throughout the Energy Corridor. For condos and townhomes, we coordinate with HOAs and property managers as needed."
            },
            {
              question: "What Energy Corridor neighborhoods do you serve?",
              answer: "We serve all Energy Corridor neighborhoods including Briar Forest, Westchase, Nottingham Forest, Royal Oaks, Eldridge, Addicks, Terry Hershey area, and surrounding communities."
            },
            {
              question: "Can you work around corporate relocation schedules?",
              answer: "Absolutely. Many Energy Corridor residents are professionals on tight schedules. We offer flexible scheduling and can coordinate with relocation timelines to ensure your home is move-in ready."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
