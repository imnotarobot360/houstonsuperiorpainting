import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  title: "Exterior Painters Richmond TX — Houston Superior Painting",
  description: "Professional exterior painting in Richmond, TX. Pecan Grove, Long Meadow Farms, Greatwood. Premium materials, 5-year warranty. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/exterior-painting-richmond",
  },
  openGraph: {
    title: "Exterior Painters Richmond TX — Houston Superior Painting",
    description: "Professional exterior painting in Richmond, TX. Pecan Grove, Long Meadow Farms, Greatwood. Premium materials, 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/exterior-painting-richmond",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function ExteriorPaintingRichmondPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Richmond"
      zoneSlug="richmond"
      metaTitle="Exterior Painters Richmond TX — Houston Superior Painting"
      metaDescription="Professional exterior painting in Richmond, TX. Pecan Grove, Long Meadow Farms, Greatwood. Premium materials, 5-year warranty."
      h1="Exterior House Painters in Richmond, TX"
      heroSubheading="Durable exterior painting built to protect Richmond homes from Texas heat, humidity, and storms."
      introLocal="Richmond's mix of established neighborhoods like Pecan Grove and growing communities like Long Meadow Farms presents unique exterior painting challenges. Houston Superior Painting understands the diverse housing stock — from brick ranch homes to modern stucco builds — and delivers finishes that protect against Houston's intense UV, humidity, and seasonal weather while enhancing curb appeal."
      serviceOverview="Our exterior painting service in Richmond includes thorough pressure washing, surface repair, caulking, priming, and premium paint application. We use Sherwin-Williams Duration, SuperPaint, and Emerald exterior lines — formulated for extreme Texas conditions. Projects typically take 4-8 days depending on home size, backed by our 5-year exterior warranty."
      whyChooseUs={[
        "Experience throughout Richmond — Pecan Grove, Long Meadow Farms, Greatwood, and surrounding areas.",
        "Proper prep work including pressure washing, scraping, sanding, and premium caulking.",
        "Premium exterior paints formulated for Texas heat and humidity.",
        "We protect your landscaping and clean up completely every day.",
        "5-year written workmanship warranty on all exterior projects."
      ]}
      priceRange="$5,500 – $18,000"
      priceMin={5500}
      priceMax={18000}
      priceDetails="Exterior painting in Richmond typically ranges from $5,500 to $18,000 for a complete repaint, depending on home size, substrate condition, and trim complexity. Smaller projects or touch-ups start around $2,000."
      faqs={[
        {
          question: "How long does exterior painting take in Richmond?",
          answer: "Most exterior projects in Richmond take 4 to 8 business days, including prep, priming, and two coats of paint. Larger homes or those needing extensive repairs may take longer."
        },
        {
          question: "What exterior paint do you use?",
          answer: "We use premium Sherwin-Williams exterior paints including Duration, SuperPaint, and Emerald — all formulated for Texas conditions with excellent fade resistance."
        },
        {
          question: "Can you paint brick or stucco?",
          answer: "Yes — we work with all exterior substrates including brick, stucco, wood, hardie board, and mixed exteriors. We also offer limewash for brick homes."
        },
        {
          question: "How much does exterior painting cost in Richmond?",
          answer: "Exterior painting typically ranges from $5,500 to $18,000 depending on home size and condition. We provide detailed written estimates after an in-person inspection."
        },
        {
          question: "Do you work with Richmond HOAs?",
          answer: "Yes — we're familiar with HOA requirements in Pecan Grove, Long Meadow Farms, Greatwood, and other Richmond communities. We can assist with color approval if needed."
        },
        {
          question: "What warranty do you offer?",
          answer: "Every exterior project includes our 5-year written workmanship warranty. We also honor manufacturer paint warranties."
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our Pecan Grove home. The prep work was thorough and the paint has held up beautifully.",
          name: "Robert & Janet H.",
          location: "Pecan Grove"
        },
        {
          quote: "Professional from start to finish. Our home looks amazing and the price was fair.",
          name: "Michelle T.",
          location: "Long Meadow Farms"
        },
        {
          quote: "Great communication, quality work, and they protected our landscaping perfectly.",
          name: "David K.",
          location: "Greatwood"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Richmond", href: "/interior-painting-richmond" },
        { title: "Painters Richmond TX", href: "/painters-richmond-tx" },
        { title: "Exterior Painting Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Exterior Painting Katy", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Exterior Painting Fulshear", href: "/exterior-painting-fulshear" },
        { title: "Pressure Washing Houston", href: "/pressure-washing-houston-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
