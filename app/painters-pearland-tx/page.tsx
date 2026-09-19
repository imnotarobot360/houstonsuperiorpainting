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
  title: "House Painters Pearland TX — Houston Superior Painting",
  description: "Professional painters in Pearland TX. Interior, exterior, cabinet painting for Silverlake, Shadow Creek Ranch, Southfork. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-pearland-tx',
  },
  openGraph: {
    title: "House Painters Pearland TX — Houston Superior Painting",
    description: "Professional painters in Pearland TX. Interior, exterior, cabinet painting for Silverlake, Shadow Creek Ranch, Southfork. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-pearland-tx",
    siteName: "Houston Superior Painting",
    type: "website",
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Pearland',
    'geo.position': '29.5636;-95.2860',
    'ICBM': '29.5636, -95.2860',
  },
}

export default function PaintersPearlandTX() {
  return (
    <>
      <TrustBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Pearland",
  slug: "painters-pearland-tx",
  description: "Professional house painting services in Pearland, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Pearland"
          state="TX"
          heroHeadline="Pearland's Top-Rated House Painters"
          heroDescription="From Silverlake's established homes to Shadow Creek Ranch's master-planned community, we deliver exceptional painting results backed by our 5-year warranty. HOA-compliant colors and professional service."
          quickAnswer="Houston Superior Painting provides professional painting services throughout Pearland TX including Silverlake, Shadow Creek Ranch, Southfork, and Southern Trails. Interior painting costs $2.50-$4.00/sq ft, exterior painting $5,000-$12,000. We offer HOA color consultation, use Sherwin-Williams and Benjamin Moore products, and provide a 5-year warranty. Call (346) 594-5960 for a free estimate."
          aboutCity={`Pearland has grown from a small town into one of Houston's most desirable suburban communities. With its excellent schools, family-friendly neighborhoods, and convenient access to both Houston and Galveston, Pearland attracts homeowners who value quality of life—and quality in their homes.

Whether you live in the established neighborhoods around Silverlake, the master-planned community of Shadow Creek Ranch, the growing Southfork area, or historic Old Pearland, your home deserves painting services that meet your standards.

Houston Superior Painting has been serving Pearland homeowners since 2019. We understand this community's mix of home styles—from newer two-story construction in master-planned communities to established single-story homes in older neighborhoods. Our crews adapt techniques for each home's specific needs while maintaining consistent quality.

Pearland's Gulf Coast location presents the same climate challenges as Greater Houston: intense summer heat, high humidity, and occasional severe weather. We use premium materials rated for these conditions and follow preparation protocols that ensure lasting results.

Our familiarity with Pearland's HOA requirements in communities like Shadow Creek Ranch and Silverlake means we can help you navigate color approvals and community standards. We've built relationships with Pearland homeowners who trust us for their ongoing painting needs.`}
          whyChooseUs={[
            "30+ Pearland projects completed since 2019",
            "HOA expertise: Shadow Creek Ranch, Silverlake, Southfork guidelines",
            "Climate-rated materials: premium paints for Gulf Coast conditions",
            "New and established homes: skilled with all Pearland housing types",
            "Professional crews: punctual, clean, respectful",
            "5-year written warranty on all residential painting",
            "Free color consultations and HOA approval assistance",
            "Competitive pricing for Pearland homeowners"
          ]}
          services={[
            {
              title: "Interior Painting Pearland",
              description: "Transform your Pearland home's interior with smooth, professional finishes. Perfect for updating builder-grade finishes.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Pearland",
              description: "Protect your Pearland home from Gulf Coast weather with durable exterior coatings that look great for years.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Pearland",
              description: "Update your Pearland kitchen with factory-smooth cabinet finishes. Cost-effective alternative to replacement.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair Pearland",
              description: "Fix cracks, nail pops, and settling damage before painting for flawless final results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing Pearland",
              description: "Professional cleaning for driveways, sidewalks, and exteriors. Essential prep before painting.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick Pearland",
              description: "Transform your Pearland brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting Pearland",
              description: "Professional painting for Pearland businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Pearland",
              description: "Durable epoxy coatings for Pearland garages with multiple color and finish options.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Silverlake",
            "Shadow Creek Ranch",
            "Southfork",
            "Southern Trails",
            "Lakes of Highland Glen",
            "West Oaks",
            "Old Pearland",
            "Pearland Town Center",
            "Sunrise Lakes",
            "Lakes of Savannah",
            "Pearland East",
            "Magnolia Landing"
          ]}
          testimonial={{
            quote: "We got quotes from several painters for our Shadow Creek Ranch home. Houston Superior Painting was competitively priced but clearly more professional—detailed estimate, great communication, and the results speak for themselves. Our house looks fantastic!",
            author: "The Martinez Family",
            location: "Shadow Creek Ranch, Pearland"
          }}
          faqs={[
            {
              question: "How much does it cost to paint a house in Pearland?",
              answer: "Interior painting costs $2.50-$4.00/sq ft. A 3,000 sq ft home runs $7,500-$12,000. Exterior painting ranges $5,000-$12,000 based on size and condition."
            },
            {
              question: "Do you work with Pearland HOAs?",
              answer: "Yes! We're familiar with HOA requirements in Shadow Creek Ranch, Silverlake, and other Pearland communities. We help with color selection and approval process."
            },
            {
              question: "What paint do you use for Pearland exteriors?",
              answer: "Sherwin-Williams Duration and SuperPaint—formulated for Gulf Coast humidity, UV exposure, and mildew resistance. Our 5-year warranty covers any issues."
            },
            {
              question: "Which Pearland areas do you serve?",
              answer: "All of them! Silverlake, Shadow Creek Ranch, Southfork, Southern Trails, Old Pearland, and every neighborhood in between."
            },
            {
              question: "How long does a paint job take in Pearland?",
              answer: "Interior: 4-6 days for a typical home. Exterior: 5-8 days depending on size and prep work. We provide specific timelines in your estimate."
            },
            {
              question: "Are you insured?",
              answer: "Yes, fully insured with $2M liability coverage. Certificates available for HOAs."
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
