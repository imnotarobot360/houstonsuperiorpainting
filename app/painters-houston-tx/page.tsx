import type { Metadata } from "next"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProblemSelector } from "@/components/problem-selector"
import { PricingSection } from "@/components/pricing-section"
import { SchedulerSection } from "@/components/scheduler-section"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "House Painters Houston TX — Houston Superior Painting",
  description: "Professional house painters in Houston TX. Interior, exterior, and cabinet painting backed by our 5-year warranty. Free estimates — call (346) 594-5960.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-houston-tx',
  },
  openGraph: {
    title: "House Painters Houston TX — Houston Superior Painting",
    description: "Professional house painters in Houston TX. Interior, exterior, cabinet painting with 5-year warranty. Free estimates. Call (346) 594-5960.",
    url: "https://houstonsuperiorpainting.com/painters-houston-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-houston.jpg",
      width: 1200,
      height: 630,
      alt: "House Painters Houston TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Painters Houston TX — Houston Superior Painting",
    description: "Professional house painters in Houston TX. Interior, exterior, cabinet painting with 5-year warranty. Free estimates.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-houston.jpg"],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Houston',
    'geo.position': '29.7604;-95.3698',
    'ICBM': '29.7604, -95.3698',
  },
}

const houstonData = {
  city: "Houston",
  state: "TX",
  heroHeadline: "Houston's Most Trusted House Painters",
  heroDescription: "Serving the Greater Houston area with premium interior and exterior painting services. From the Heights to Memorial, Montrose to River Oaks — we deliver flawless results backed by our 5-year warranty.",
  quickAnswer: "Houston Superior Painting provides professional residential and commercial painting services throughout Greater Houston. We specialize in interior painting ($2.50-$4.50/sq ft), exterior painting ($4,000-$15,000), cabinet refinishing ($3,500-$8,500), and specialty finishes. All work includes our 5-year warranty, uses premium Sherwin-Williams and Benjamin Moore products, and comes with free detailed estimates. Call (346) 594-5960.",
  
  aboutCity: `As Houston's leading painting contractor since 2019, we understand the unique challenges of painting homes in America's fourth-largest city. From historic Heights bungalows to modern Memorial townhomes, from River Oaks estates to Energy Corridor condos, every Houston home deserves expert care.

Houston's Gulf Coast climate presents specific challenges: intense summer heat reaching 100°F, humidity levels often exceeding 70%, sudden thunderstorms, and occasional tropical weather. These conditions demand premium materials and meticulous preparation — both hallmarks of Houston Superior Painting.

Our team has completed over 500 painting projects across every Houston neighborhood. We know which products perform best in our climate, how to properly prepare surfaces for Houston's humidity, and the techniques that deliver lasting results. That's why we use only top-tier paints from Sherwin-Williams and Benjamin Moore — products specifically formulated to withstand Houston's demanding conditions.

Whether you're refreshing your interior before selling, protecting your exterior from Houston's elements, transforming dated cabinets, or adding a limewash finish to your brick home, Houston Superior Painting delivers results that exceed expectations. Our 5-year warranty, detailed estimates, and commitment to cleanliness have earned us a 4.9-star Google rating from homeowners across the city.

We're proud to be a Houston-based company employing local crews who live and work in the communities we serve. Our bilingual team (English and Spanish) provides clear communication throughout your project.`,

  neighborhoods: [
    "The Heights",
    "Memorial",
    "River Oaks",
    "Montrose",
    "West University",
    "Bellaire",
    "Midtown",
    "Museum District",
    "Garden Oaks",
    "Oak Forest",
    "Meyerland",
    "Energy Corridor",
    "Galleria Area",
    "Medical Center",
    "EaDo",
    "Spring Branch",
    "Tanglewood",
    "Upper Kirby",
    "Rice Military",
    "Washington Avenue"
  ],

  services: [
    {
      title: "Interior Painting Houston",
      description: "Transform your Houston home's interior with expert painting. From single accent walls to complete home repaints, we use spray techniques for flawless factory finishes on walls, ceilings, trim, and doors.",
      href: "/interior-painting-houston-tx"
    },
    {
      title: "Exterior Painting Houston",
      description: "Protect your home from Houston's humidity, intense UV rays, and severe storms. Our exterior painting uses premium weather-resistant coatings that look beautiful and last 8-10 years.",
      href: "/exterior-painting-houston-tx"
    },
    {
      title: "Cabinet Refinishing Houston",
      description: "Update dated kitchen or bathroom cabinets at a fraction of replacement cost. Our spray-applied finishes deliver smooth, durable results that transform your space.",
      href: "/cabinet-refinishing-houston-tx"
    },
    {
      title: "Drywall Repair Houston",
      description: "Fix cracks, nail pops, water damage, and settling issues with seamless texture matching before painting for a flawless finish.",
      href: "/drywall-repair-houston-tx"
    },
    {
      title: "Pressure Washing Houston",
      description: "Professional pressure washing to clean and prepare your Houston home's exterior surfaces for better paint adhesion and longer-lasting results.",
      href: "/pressure-washing-houston-tx"
    },
    {
      title: "Limewash & Brick Painting Houston",
      description: "Transform your brick exterior with authentic European limewash or German smear finishes that breathe and age beautifully.",
      href: "/limewash-brick-painting-houston-tx"
    },
    {
      title: "Commercial Painting Houston",
      description: "Minimize disruption to your Houston business with efficient commercial painting services. We work after hours and on weekends.",
      href: "/commercial-painting-houston-tx"
    },
    {
      title: "Garage Floor Epoxy Houston",
      description: "Durable, chemical-resistant epoxy coatings for Houston garages with metallic, flake, or solid color options and 15-year warranty.",
      href: "https://houstonsuperiorepoxy.com/"
    }
  ],

  whyChooseUs: [
    "500+ homes painted across Greater Houston since 2019",
    "4.9-star Google rating from Houston homeowners",
    "Premium Sherwin-Williams & Benjamin Moore products included",
    "5-year warranty on all residential painting work",
    "Detailed, transparent estimates — no surprises or hidden fees",
    "Background-checked, professional, uniformed crews",
    "Meticulous preparation and clean job sites daily",
    "Bilingual team (English & Spanish) for clear communication",
    "Fully bonded and insured ($2M liability)",
    "No payment until you're 100% satisfied"
  ],

  testimonial: {
    quote: "We've used Houston Superior Painting for both our Heights bungalow and our rental property in Montrose. Both times, the results were absolutely flawless. JJ and his team are true professionals who take pride in their work. The attention to detail on our trim work was exceptional.",
    author: "Michael & Jennifer T.",
    location: "The Heights, Houston"
  },

  faqs: [
    {
      question: "How much does it cost to paint a house in Houston?",
      answer: "Interior painting in Houston typically ranges from $6,250-$11,250 for a 2,500 sq ft home. Exterior painting ranges from $4,000-$15,000 based on size, siding type, and condition. We provide free detailed estimates for every project with itemized costs."
    },
    {
      question: "How long does exterior paint last in Houston's climate?",
      answer: "With proper preparation and premium paints like Sherwin-Williams Duration, exterior paint in Houston lasts 8-10 years. Our 5-year warranty covers peeling, blistering, and premature fading."
    },
    {
      question: "Do you paint homes in all Houston neighborhoods?",
      answer: "Yes! We serve all Houston neighborhoods including The Heights, Memorial, River Oaks, Montrose, West U, Bellaire, Midtown, and more. We also serve surrounding cities like Katy, Sugar Land, Cypress, and The Woodlands."
    },
    {
      question: "What's the best time of year to paint in Houston?",
      answer: "Spring and fall offer ideal painting conditions in Houston. However, our experienced crews work year-round, adjusting techniques for Houston's humidity and heat to ensure perfect results regardless of season."
    },
    {
      question: "How long does interior painting take?",
      answer: "A typical 2,500 sq ft Houston home takes 4-6 days for complete interior painting including walls, ceilings, trim, and doors. Single rooms take 1-2 days. We'll provide a specific timeline in your estimate."
    },
    {
      question: "Do you offer color consultations?",
      answer: "Yes! We offer free color consultations and can provide large painted samples on your walls before committing. Our team stays current on Houston design trends and can suggest colors that complement your home's architecture."
    }
  ]
}

export default function PaintersHoustonTX() {
  return (
    <>
      <TrustBar />
      {/* This page shipped with no LocalBusiness schema despite being the
          primary Houston city page and the 301 target for the retired
          /painters-in-houston-tx duplicate. Generated from the shared helper so
          the NAP stays tied to lib/business.ts. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateLocationBusinessSchema({
              city: "Houston",
              slug: "painters-houston-tx",
              description:
                "Professional house painters serving Houston, TX and the surrounding metro area.",
            }),
          ),
        }}
      />
      <Header />
      <LocationPageTemplate {...houstonData} />
      <ProblemSelector />
      <PricingSection />
      <SchedulerSection />
      <Footer />
    </>
  )
}
