import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { PRICES_2026 } from "@/lib/business"
// This page shipped with no Header and no Footer, unlike its siblings —
// meaning no site navigation and none of the footer's internal links.
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "House Painters Missouri City TX | Interior & Exterior",
  description: "Professional house painters in Missouri City, TX. Interior and exterior painting, cabinet refinishing, and drywall repair. Insured crews, 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-missouri-city-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Missouri City TX | Houston Superior Painting",
    description: "Trusted painting contractors serving Missouri City and Fort Bend County. Quality craftsmanship, 5-year warranty. Get your free estimate today!",
    type: "website",
  },
}

const missouriCityData = {
  city: "Missouri City",
  state: "TX",
  heroHeadline: "House Painters in Missouri City, TX",
  heroDescription: "Trusted painting contractors serving Sienna, Riverstone, Lake Olympia, and all Missouri City neighborhoods with exceptional craftsmanship.",
  
  aboutCity: `Missouri City homeowners deserve painting contractors who understand the unique character of Fort Bend County's premier communities. From the master-planned neighborhoods of Sienna Plantation to the established homes of Quail Valley, Houston Superior Painting delivers results that enhance your home's beauty and protect your investment.

Our team has extensive experience with Missouri City's diverse housing styles — from traditional brick homes to modern stucco construction, from lakefront properties to golf course estates. We understand that Fort Bend County homeowners expect premium quality, and we deliver exactly that with every project.

Missouri City's subtropical climate presents specific challenges: intense summer heat, high humidity, and occasional severe storms. Our exterior painting solutions use elastomeric and acrylic coatings specifically formulated to withstand these conditions without cracking, peeling, or fading. For interiors, we use low-VOC paints that are safe for your family while delivering exceptional durability.

Whether you're preparing your home for sale, updating a newly purchased property, or simply refreshing your living spaces, we bring the same attention to detail and commitment to excellence we bring to every home across Greater Houston.`,

  neighborhoods: [
    "Sienna Plantation",
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
      description: "Transform your Missouri City home's interior with professional painting. From accent walls to whole-home repaints, we deliver flawless, brush-mark-free results.",
      href: "/interior-painting-houston-tx"
    },
    {
      title: "Exterior Painting",
      description: "Protect your Missouri City home from Texas weather with durable exterior coatings. We properly prepare surfaces and use premium paints for lasting results.",
      href: "/exterior-painting-houston-tx"
    },
    {
      title: "Cabinet Refinishing",
      description: "Give your kitchen or bathroom a fresh look without the cost of replacement. Our spray-applied cabinet finishes rival factory quality.",
      href: "/cabinet-refinishing-houston-tx"
    },
    {
      title: "Drywall Repair",
      description: "We fix cracks, holes, nail pops, and water damage before painting. Proper preparation is key to a beautiful, long-lasting finish.",
      href: "/drywall-repair-houston-tx"
    },
    {
      title: "Pressure Washing",
      description: "Professional pressure washing for Missouri City homes. Clean driveways, patios, and siding.",
      href: "/pressure-washing-houston-tx"
    },
    {
      title: "Limewash Brick",
      description: "Transform your Missouri City brick home with elegant European limewash finishes.",
      href: "/limewash-brick-painting-houston-tx"
    },
    {
      title: "Commercial Painting",
      description: "Professional painting for Missouri City businesses and commercial properties.",
      href: "/commercial-painting-houston-tx"
    },
    {
      title: "Garage Floor Epoxy",
      description: "Durable epoxy coatings for Missouri City garages that resist stains and last for years.",
      href: "https://houstonsuperiorepoxy.com/"
    }
  ],

  whyChooseUs: [
    "Experienced with all Missouri City neighborhoods",
    "$2M general liability insurance plus workers' compensation",
    "Premium Sherwin-Williams & Benjamin Moore paints",
    "5-year warranty on residential work",
    "Detailed estimates with no hidden costs",
    "Clean, professional, background-checked crews",
    "On-time completion — we respect your schedule",
    "Fully insured"
  ],

  testimonial: {
    quote: "Living in Sienna, we needed painters who understood HOA requirements and worked efficiently. Houston Superior Painting exceeded our expectations — the crew was professional, clean, and the finished result is beautiful. Highly recommend!",
    author: "David & Amanda R.",
    location: "Sienna Plantation, Missouri City"
  },

  faqs: [
    {
      question: "Do you work with Missouri City HOAs?",
      answer: "Yes, we're experienced working with HOA requirements in communities like Sienna, Riverstone, and Lake Olympia. We help ensure your color choices meet community guidelines."
    },
    {
      question: "How much does house painting cost in Missouri City?",
      answer: `Interior painting in Missouri City typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide free detailed estimates.`
    },
    {
      question: "How long will my exterior paint last in Missouri City?",
      answer: "With proper preparation and premium paints, expect 5-7 years of beautiful, durable results. Our 5-year warranty protects against peeling, blistering, and premature fading."
    },
    {
      question: "Do you offer color consultation?",
      answer: "Yes! We help Missouri City homeowners select colors that complement their home's architecture, landscaping, and HOA requirements. We can provide sample boards before finalizing your choice."
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
