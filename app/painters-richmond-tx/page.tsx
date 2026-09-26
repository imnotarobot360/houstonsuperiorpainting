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
  title: "House Painters Richmond TX — Houston Superior Painting",
  description: "Professional painters in Richmond TX. Interior, exterior, cabinet painting for Pecan Grove, Long Meadow Farms, Greatwood. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-richmond-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters Richmond TX — Houston Superior Painting",
    description: "Professional painters in Richmond TX. Interior, exterior, cabinet painting for Pecan Grove, Long Meadow Farms, Greatwood. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-richmond-tx",
    siteName: "Houston Superior Painting",
    type: "website",
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Richmond',
    'geo.position': '29.5822;-95.7608',
    'ICBM': '29.5822, -95.7608',
  },
}

export default function PaintersRichmondTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Richmond",
  slug: "painters-richmond-tx",
  description: "Professional house painting services in Richmond, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Richmond"
          state="TX"
          heroHeadline="Richmond's Trusted House Painters"
          heroDescription="Professional painting services for Pecan Grove, Long Meadow Farms, Greatwood, and all Richmond communities. Quality craftsmanship with a 5-year warranty and competitive Fort Bend County pricing."
          quickAnswer="Houston Superior Painting provides professional painting services throughout Richmond TX including Pecan Grove, Long Meadow Farms, Greatwood, and Harvest Green. Interior painting costs $2.50–$4.50/sq ft ($4,000–$8,000 for a 2,500 sq ft home) and exterior painting $3,500–$12,000 per home. We use premium Sherwin-Williams and Benjamin Moore products, work with HOAs, and provide a 5-year warranty. Call (346) 594-5960 for a free estimate."
          aboutCity={`Richmond is Fort Bend County's historic county seat and one of the Greater Houston area's most welcoming communities. From the established neighborhoods of Pecan Grove to the newer developments of Long Meadow Farms and Harvest Green, Richmond offers diverse housing at accessible prices—and every home deserves quality painting services.

Houston Superior Painting has been serving Richmond homeowners since 2019. We understand this community's mix of home styles: established single-story homes in Pecan Grove, newer two-story construction in Long Meadow Farms, and everything in between. Our crews adapt techniques for each home's specific needs while maintaining consistent quality.

Richmond's location along the Brazos River means homes here face the same Gulf Coast challenges as the rest of Greater Houston: intense summer heat, high humidity, and occasional flooding threats. We use premium materials rated for these conditions and follow preparation protocols that ensure lasting results.

Many Richmond homeowners appreciate our competitive pricing. We serve Fort Bend County's working families with fair quotes, honest service, and no hidden fees. Our detailed estimates show exactly what you're getting so there are no surprises.

We're familiar with HOA requirements in Pecan Grove, Long Meadow Farms, Greatwood, and other Richmond communities. We help you select colors that meet community standards while achieving the look you want. Every Richmond project is backed by our 5-year workmanship warranty.`}
          whyChooseUs={[
            "HOA expertise: Pecan Grove, Long Meadow Farms, Greatwood guidelines",
            "Climate-rated materials: premium paints for Gulf Coast conditions",
            "Competitive pricing: fair quotes for Fort Bend County families",
            "New and established homes: skilled with all Richmond housing types",
            "Professional crews: punctual, clean, respectful of your home",
            "5-year written warranty on all residential painting",
            "No hidden fees: detailed estimates with transparent pricing"
          ]}
          services={[
            {
              title: "Interior Painting Richmond",
              description: "Transform your Richmond home's interior with smooth, professional finishes. Quality results at Fort Bend County prices.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Richmond",
              description: "Protect your Richmond home from Gulf Coast weather with durable exterior coatings built to last.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Richmond",
              description: "Update your Richmond kitchen with factory-smooth cabinet finishes. Cost-effective alternative to replacement.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair Richmond",
              description: "Fix cracks, nail pops, and settling damage before painting for flawless results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing Richmond",
              description: "Professional cleaning for driveways, sidewalks, and exteriors. Essential prep for painting.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick Richmond",
              description: "Transform your Richmond brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting Richmond",
              description: "Professional painting for Richmond businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Richmond",
              description: "Durable epoxy coatings for Richmond garages with multiple color and finish options.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Pecan Grove",
            "Long Meadow Farms",
            "Greatwood",
            "Brazos Town Center",
            "Lakes of Bella Terra",
            "Harvest Green",
            "Richmond Heights",
            "Historic Richmond",
            "Veranda",
            "Williams Ranch",
            "Colony Creek",
            "Fort Bend County"
          ]}
          testimonial={{
            quote: "After getting several quotes, Houston Superior Painting stood out for their professionalism and fair pricing. They painted our entire Pecan Grove home interior in under a week, and the quality is excellent. Great communication throughout. Highly recommend for Richmond homeowners!",
            author: "David & Lisa K.",
            location: "Pecan Grove, Richmond"
          }}
          faqs={[
            {
              question: "How much does it cost to paint a house in Richmond?",
              answer: "Interior painting in Richmond typically costs $2.50–$4.50 per square foot, about $4,000–$8,000 for a 2,500 sq ft home. Exterior painting runs $3,500–$12,000 per home; a 2,500 sq ft two-story is typically $5,500–$9,000. We provide free detailed estimates."
            },
            {
              question: "Which Richmond neighborhoods do you serve?",
              answer: "All of them! Pecan Grove, Long Meadow Farms, Greatwood, Harvest Green, Brazos Town Center, and every neighborhood in Richmond."
            },
            {
              question: "Do you work with Richmond HOAs?",
              answer: "Yes! We're familiar with HOA requirements in Pecan Grove, Long Meadow Farms, Greatwood, and other Richmond communities. We help with color selection and approvals."
            },
            {
              question: "What paint do you use for Richmond exteriors?",
              answer: "Sherwin-Williams Duration and SuperPaint—formulated for Gulf Coast humidity, UV exposure, and mildew resistance. Our 5-year warranty covers any issues."
            },
            {
              question: "How long does a paint job take?",
              answer: "Interior: 4-6 days for a typical home. Exterior: 5-8 days depending on size and prep. We provide specific timelines in your estimate."
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
