import type { Metadata } from "next"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { ProblemSelector } from "@/components/problem-selector"
import { PricingSection } from "@/components/pricing-section"
import { SchedulerSection } from "@/components/scheduler-section"
import { generateLocationBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Painters Katy TX — Houston Superior Painting",
  description: "Top-rated painters in Katy TX. Interior, exterior, and cabinet painting for Cinco Ranch, Firethorne, and Elyson. Free estimates and a 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-katy-tx',
  },
  openGraph: {
    title: "Painters Katy TX — Houston Superior Painting",
    description: "Top-rated painters in Katy TX. Interior, exterior, cabinet painting for Cinco Ranch, Firethorne, Elyson. 5-year warranty. Free estimates.",
    url: "https://houstonsuperiorpainting.com/painters-katy-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-katy.jpg",
      width: 1200,
      height: 630,
      alt: "Painters Katy TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painters Katy TX — Houston Superior Painting",
    description: "Top-rated painters in Katy TX. Interior, exterior, cabinet painting for Cinco Ranch, Firethorne, Elyson. 5-year warranty.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-katy.jpg"],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Katy',
    'geo.position': '29.7858;-95.8245',
    'ICBM': '29.7858, -95.8245',
  },
}

export default function PaintersKatyTX() {
  return (
    <>
      <TrustBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Katy",
  slug: "painters-katy-tx",
  description: "Professional house painting services in Katy, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Katy"
          state="TX"
          heroHeadline="Katy's Top-Rated House Painters"
          heroDescription="From the master-planned communities of Cinco Ranch and Elyson to the established neighborhoods of Old Katy, we deliver exceptional painting results backed by our 5-year warranty. HOA-compliant colors and professional service."
          quickAnswer="Houston Superior Painting provides professional painting services throughout Katy TX including Cinco Ranch, Firethorne, Seven Meadows, Elyson, and Cane Island. Interior painting costs $2.50-$4.50/sq ft, exterior painting $4,000-$12,000. We offer HOA color consultation, use Sherwin-Williams and Benjamin Moore products, and provide a 5-year warranty. Call (346) 594-5960 for a free estimate."
          aboutCity={`Katy has transformed from a small railroad town into one of Houston's most sought-after suburbs, featuring award-winning schools, master-planned communities, and a strong sense of neighborhood pride. We're proud to serve this community with painting services that match Katy's high standards.

Whether you live in Cinco Ranch's golf course homes, Seven Meadows' family-friendly streets, Firethorne's elegant estates, or Elyson's modern builds, our experienced crews deliver results that exceed expectations. We've painted over 300 homes across Katy—from new construction touch-ups to complete exterior transformations on homes weathered by Texas heat and humidity.

Katy's Gulf Coast climate presents unique challenges: summer temperatures exceeding 100°F, humidity levels often above 70%, and occasional severe weather. That's why we use only premium Sherwin-Williams and Benjamin Moore paints rated for these conditions, combined with thorough preparation that ensures lasting results.

Our familiarity with Katy's HOA requirements means we can help you navigate color approvals in Cinco Ranch, Cane Island, Cross Creek Ranch, and other communities with architectural committees. We handle the details so you can focus on enjoying your beautifully painted home.`}
          whyChooseUs={[
            "300+ homes painted throughout Katy's neighborhoods since 2019",
            "HOA expertise: We know Cinco Ranch, Firethorne, and Elyson guidelines",
            "4.9-star Google rating from Katy homeowners",
            "Premium Sherwin-Williams & Benjamin Moore products included",
            "5-year warranty on all residential painting",
            "Background-checked, professional crews",
            "Weather-smart scheduling around Houston's climate",
            "Free color consultations and HOA approval assistance"
          ]}
          services={[
            {
              title: "Interior Painting Katy",
              description: "Transform your Katy home's interior with smooth, brush-mark-free walls. Perfect for updating builder-grade finishes or refreshing your color scheme.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Katy",
              description: "Protect your Katy home from intense sun, humidity, and storms with durable exterior coatings that look great for 8-10 years.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Katy",
              description: "Update your Katy kitchen without replacement costs. Our spray finishes give cabinets a factory-smooth, durable look.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair Katy",
              description: "Fix cracks, holes, and settling damage with seamless texture matching before painting for flawless results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing Katy",
              description: "Clean and prep your Katy home's exterior surfaces for better paint adhesion and longer-lasting results.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash & Brick Painting Katy",
              description: "Transform your brick exterior with authentic European limewash or German smear finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting Katy",
              description: "Professional painting for Katy businesses and offices with after-hours scheduling and minimal disruption.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Katy",
              description: "Durable epoxy coatings for Katy garages with metallic, flake, or solid color options and 15-year warranty.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Cinco Ranch",
            "Seven Meadows",
            "Firethorne",
            "Grand Lakes",
            "Nottingham Country",
            "Old Katy",
            "Cane Island",
            "Elyson",
            "Tamarron",
            "Park Glen",
            "Kelliwood",
            "Pine Mill Ranch",
            "Cross Creek Ranch",
            "Falcon Point"
          ]}
          testimonial={{
            quote: "They painted our entire Cinco Ranch home—interior and exterior—in just one week. The crew was professional, clean, and helped us get HOA approval for our new exterior colors. The results exceeded our expectations!",
            author: "Michael & Sarah R.",
            location: "Cinco Ranch, Katy"
          }}
          faqs={[
            {
              question: "How much does it cost to paint a house in Katy, TX?",
              answer: "Interior painting in Katy costs $2.50-$4.50/sq ft. A typical 3,000 sq ft home runs $7,500-$13,500. Exterior painting ranges $5,000-$12,000 based on size and condition. Free detailed estimates available."
            },
            {
              question: "Do you help with Katy HOA color approvals?",
              answer: "Yes! We're familiar with HOA requirements in Cinco Ranch, Firethorne, Cane Island, and other Katy communities. We help select compliant colors and can assist with the approval process."
            },
            {
              question: "How long does it take to paint a house in Katy?",
              answer: "Interior painting takes 4-6 days for a typical Katy home. Exterior painting takes 5-8 days depending on size and prep work. We always provide a timeline before starting."
            },
            {
              question: "What's the best time to paint exteriors in Katy?",
              answer: "Spring and fall offer ideal conditions with moderate temperatures. However, we paint year-round and schedule around weather to ensure proper application and curing."
            },
            {
              question: "Which Katy neighborhoods do you serve?",
              answer: "All of them! Cinco Ranch, Seven Meadows, Firethorne, Elyson, Cane Island, Cross Creek Ranch, Grand Lakes, and every Katy community."
            },
            {
              question: "Are you insured in Katy?",
              answer: "Yes, we are fully insured with $2M liability coverage. Certificates available for HOAs and property managers."
            }
          ]}
        />
        <ProblemSelector />
        <PricingSection />
        <SchedulerSection />
      </main>
      <Footer />
    </>
  )
}
