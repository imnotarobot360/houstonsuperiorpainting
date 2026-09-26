import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  title: "Interior Painters Richmond TX — Houston Superior Painting",
  description: "Professional interior painting in Richmond, TX. Serving Pecan Grove, Long Meadow Farms, Greatwood. 5-year warranty. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/interior-painting-richmond",
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Interior Painters Richmond TX — Houston Superior Painting",
    description: "Professional interior painting in Richmond, TX. Serving Pecan Grove, Long Meadow Farms, Greatwood. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/interior-painting-richmond",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function InteriorPaintingRichmondPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Richmond"
      zoneSlug="richmond"
      metaTitle="Interior Painters Richmond TX — Houston Superior Painting"
      metaDescription="Professional interior painting in Richmond, TX. Serving Pecan Grove, Long Meadow Farms, Greatwood. 5-year warranty."
      h1="Interior Painters in Richmond, TX"
      heroSubheading="Quality interior painting for Richmond homeowners — from Pecan Grove estates to new construction in Long Meadow Farms."
      introLocal="Richmond's diverse housing stock — from established Pecan Grove neighborhoods to newer communities like Long Meadow Farms and Greatwood — requires painters who understand both older home restoration and modern finishes. Houston Superior Painting has served Richmond since 2019, delivering meticulous prep work and premium finishes that stand up to Houston's demanding climate."
      serviceOverview="Our interior painting service in Richmond includes complete surface preparation, premium paint application, and detailed finish work. We use top-tier materials including Sherwin-Williams Emerald and Benjamin Moore Aura — low-VOC formulas safe for your family. Projects typically take 3-6 business days, and every job includes our 5-year workmanship warranty."
      whyChooseUs={[
        "Experience throughout Richmond — Pecan Grove, Long Meadow Farms, Greatwood, Brazos Town Center, and historic downtown.",
        "Skilled with both older home restoration and new construction touch-ups.",
        "Daily photo updates and a dedicated bilingual foreman.",
        "Premium low-VOC paints safe for families and pets.",
        "5-year written workmanship warranty plus 12 months of free touch-ups."
      ]}
      priceRange="$4,200 – $14,000"
      priceMin={4200}
      priceMax={14000}
      priceDetails="Interior painting in Richmond typically ranges from $4,200 to $14,000 for a whole-home repaint, depending on square footage, ceiling height, and trim complexity. Single rooms typically run $500 to $1,400."
      faqs={[
        {
          question: "How long does interior painting take in Richmond?",
          answer: "For a typical Richmond home (2,400 to 4,500 sqft), a full interior repaint takes 3 to 6 business days. We work consecutive days with a dedicated crew."
        },
        {
          question: "What paint brands do you use?",
          answer: "We use Sherwin-Williams Emerald, Benjamin Moore Aura, and Regal Select. All are low-VOC and safe for occupied homes."
        },
        {
          question: "Do you serve all of Richmond?",
          answer: "Yes — we serve all Richmond neighborhoods including Pecan Grove, Long Meadow Farms, Greatwood, Brazos Town Center, and the historic downtown area."
        },
        {
          question: "How much does interior painting cost in Richmond?",
          answer: "Interior painting typically ranges from $4,200 to $14,000 for whole-home projects. Single rooms run $500 to $1,400 depending on size and complexity."
        },
        {
          question: "Can you work with older homes?",
          answer: "Absolutely. We're experienced with Richmond's older housing stock and understand the prep work required for lasting results on textured walls, wood trim, and aging surfaces."
        },
        {
          question: "What's included in your warranty?",
          answer: "Every project includes a 5-year written workmanship warranty plus 12 months of complimentary touch-ups. The warranty is transferable if you sell your home."
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our 20-year-old Pecan Grove home. The prep work made all the difference — it looks brand new.",
          name: "Carlos & Maria G.",
          location: "Pecan Grove"
        },
        {
          quote: "Professional, on time, and excellent results. We've already recommended them to neighbors.",
          name: "Jennifer S.",
          location: "Long Meadow Farms"
        },
        {
          quote: "Great experience from estimate to completion. Very reasonable pricing for the quality.",
          name: "Thomas R.",
          location: "Greatwood"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Richmond", href: "/exterior-painting-richmond" },
        { title: "Painters Richmond TX", href: "/painters-richmond-tx" },
        { title: "Interior Painting Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Interior Painting Rosenberg", href: "/painters-rosenberg-tx" },
        { title: "Interior Painting Katy", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Cabinet Refinishing Houston", href: "/cabinet-refinishing-houston-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Interior"
    />
  )
}
