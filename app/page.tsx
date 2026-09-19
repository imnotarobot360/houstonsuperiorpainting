import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LuxuryHero } from "@/components/luxury/luxury-hero"
import {
  LuxuryAssurance,
  LuxuryTrust,
  LuxuryServices,
  LuxuryBeforeAfter,
  LuxuryProcess,
  LuxuryProjects,
  LuxuryTestimonials,
  LuxuryInsights,
  LuxuryCTA,
} from "@/components/luxury/sections"
import { LocationsSection } from "@/components/locations-section"
import FAQ from "@/components/faq"
import { ReviewStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/',
  },
}

const homeFaqs = [
  {
    q: "How much does it cost to paint a house in Houston?",
    a: "Interior painting in Houston typically costs $2.50–$4.50 per square foot. A 2,500 sq ft home averages $6,250–$11,250 for full interior. Exterior painting ranges from $3,500–$12,000 depending on size, siding type, stories, and condition. We provide free detailed estimates with itemized costs and no hidden fees.",
  },
  {
    q: "How long does exterior paint last in Houston's climate?",
    a: "With proper preparation and premium coatings, exterior paint lasts 8 to 10 years in Houston's humid subtropical climate. We use Sherwin-Williams Duration and SuperPaint specifically formulated for maximum durability against Houston's high humidity, intense UV exposure, and sudden temperature changes. Our 5-year warranty covers any workmanship issues.",
  },
  {
    q: "Do you offer free estimates in Katy, Cypress, and Sugar Land?",
    a: "Yes! We provide free, no-obligation estimates throughout the Greater Houston area including Katy, Cypress, Sugar Land, The Woodlands, Richmond, Fulshear, Magnolia, Tomball, and all surrounding communities. Our detailed quotes include itemized costs, timeline, paint specifications, and warranty information. Schedule online or call (346) 594-5960.",
  },
  {
    q: "What areas in Houston do you serve?",
    a: "We serve the entire Greater Houston metropolitan area including Houston, Katy, Cypress, Sugar Land, The Woodlands, Magnolia, Tomball, Pearland, Missouri City, Richmond, Fulshear, Memorial, The Heights, Bellaire, and River Oaks. If you're within 45 miles of Houston, we can help with your painting project.",
  },
  {
    q: "Are you insured for painting in Texas?",
    a: "Yes, Houston Superior Painting is fully insured with $2 million general liability coverage. We're also bonded for your protection and carry workers' compensation insurance. Certificates of insurance are available upon request for HOA requirements or property managers.",
  },
  {
    q: "How long does it take to paint a house interior?",
    a: "A typical 2,500 sq ft home interior takes 4-6 days for a complete paint job including walls, ceilings, trim, and doors. Smaller projects like single rooms take 1-2 days. We work efficiently while never rushing preparation—proper prep is what makes paint last. We'll provide a specific timeline in your estimate.",
  },
  {
    q: "What paint brands do you use?",
    a: "We exclusively use premium paints from Sherwin-Williams and Benjamin Moore. For interiors, we recommend Duration Home or SuperPaint. For exteriors in Houston's climate, we use Duration Exterior or Emerald. For cabinets, we use specialized coatings like Emerald Urethane Trim Enamel for a factory-smooth finish.",
  },
  {
    q: "Do I need to move furniture before you paint?",
    a: "We handle all furniture moving and protection as part of our service. Our crews move furniture to the center of rooms, cover everything with plastic sheeting and drop cloths, and return items to their original positions upon completion. We also cover floors, remove outlet covers, and mask all areas not being painted.",
  },
  {
    q: "What's included in your exterior painting service?",
    a: "Our exterior painting includes: pressure washing, scraping and sanding loose paint, wood rot repair (minor), caulking gaps and cracks, priming bare wood and problem areas, two coats of premium exterior paint, trim and fascia painting, and cleanup. Major repairs are quoted separately. We also offer stucco, brick, and hardie board painting.",
  },
  {
    q: "Do you require payment upfront?",
    a: "No upfront payment required. We collect a small deposit (typically 10-20%) after you accept the estimate and schedule a start date, with the balance due upon completion and your satisfaction. We accept all major credit cards, checks, and offer financing options for larger projects. This protects you and ensures we deliver quality work.",
  },
]

export default function Home() {
  return (
    <>
      <Header overHero />
      <LuxuryHero />
      <LuxuryAssurance />
      <LuxuryTrust />
      <LuxuryServices />
      <LuxuryBeforeAfter />
      <LuxuryProcess />
      <LuxuryProjects />
      <LuxuryTestimonials />
      <LuxuryInsights />
      {/*
        Placed here (champagne) between LuxuryInsights (bg-background) and FAQ
        (bg-white) so no two adjacent sections share a background.
      */}
      <LocationsSection />
      <ReviewStructuredData />
      <FAQ items={homeFaqs} variant="default" />
      <LuxuryCTA />
      <Footer />
    </>
  )
}
