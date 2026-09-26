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
  title: "House Painters The Heights TX — Houston Superior Painting",
  description: "Professional painters in The Heights TX. Interior, exterior, cabinet painting for historic bungalows and new construction. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-the-heights-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters The Heights TX — Houston Superior Painting",
    description: "Professional painters in The Heights TX. Interior, exterior, cabinet painting for historic bungalows and new construction. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-the-heights-tx",
    siteName: "Houston Superior Painting",
    type: "website",
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Houston Heights',
    'geo.position': '29.8024;-95.3981',
    'ICBM': '29.8024, -95.3981',
  },
}

export default function PaintersTheHeightsTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "The Heights",
  slug: "painters-the-heights-tx",
  description: "Professional house painting services in The Heights, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="The Heights"
          state="TX"
          heroHeadline="The Heights' Trusted House Painters"
          heroDescription="From century-old bungalows to modern new builds, we understand what makes Heights homes special. Expert craftsmanship, premium materials, and deep respect for this neighborhood's unique character."
          quickAnswer="Houston Superior Painting provides professional painting services throughout The Heights, Houston. Interior painting costs $2.50–$4.50/sq ft ($4,000–$8,000 for a 2,500 sq ft home) and exterior painting $3,500–$12,000 per home. We specialize in historic bungalows with wood siding and detailed trim, as well as modern Heights construction. Premium Sherwin-Williams and Benjamin Moore products included. 5-year warranty. Call (346) 594-5960 for a free estimate."
          aboutCity={`The Heights is Houston's most beloved historic neighborhood, where century-old bungalows sit alongside modern townhomes on tree-lined streets. This isn't just where we work—it's a neighborhood we love, and we treat every Heights home with the respect it deserves.

Historic Heights homes present unique painting challenges: original wood siding that needs careful preparation, detailed trim and millwork that demands patience, pier-and-beam foundations that create specific moisture considerations, and architectural character that must be preserved while providing modern protection.

Our crews have painted dozens of Heights homes, from original 1910s bungalows on Harvard and Yale to new construction on Studewood. We understand this neighborhood's mix of preservation and progress, and we're equally skilled at both. Whether you're refreshing a beloved family home or completing a new build, we deliver Heights-quality results.

We've built relationships with Heights homeowners who return to us project after project. They trust us because we share their appreciation for this neighborhood's character, we use materials that protect their investment, and we stand behind our work with a 5-year warranty.

The Heights community is tight-knit, and reputation matters. We've earned ours through consistent quality, fair pricing, and genuine care for the homes we paint.`}
          whyChooseUs={[
            "Historic bungalow experience, including pre-1920 homes",
            "Wood siding expertise: proper prep, premium primers, lasting protection",
            "Historic trim skills: hand-brushed details, perfect lines, period-appropriate techniques",
            "New construction experience: modern townhomes and custom builds",
            "Premium materials: Sherwin-Williams Duration, Benjamin Moore Regal",
            "Free color consultations: palettes that honor Heights heritage",
            "5-year written warranty on all residential painting",
            "Heights resident referrals: ask for references in your area"
          ]}
          services={[
            {
              title: "Interior Painting Heights",
              description: "Transform your Heights home's interior. From historic plaster walls to modern drywall, we deliver smooth, beautiful finishes.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Heights",
              description: "Protect your Heights home's exterior with premium coatings. Expert wood siding preparation and lasting protection.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Heights",
              description: "Update your Heights kitchen with factory-smooth cabinet finishes. Perfect for modernizing without losing character.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Wood Siding Restoration",
              description: "Specialized prep and painting for Heights' wood siding homes. Extend the life of your original siding.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Drywall Repair Heights",
              description: "Fix cracks and settling damage common in Heights homes. Seamless repairs before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Limewash Brick Heights",
              description: "Transform your Heights brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Pressure Washing Heights",
              description: "Professional cleaning for Heights driveways, sidewalks, and home exteriors.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Commercial Painting Heights",
              description: "Professional painting for Heights businesses on 19th Street, White Oak, and beyond.",
              href: "/commercial-painting-houston-tx"
            }
          ]}
          neighborhoods={[
            "Houston Heights",
            "Woodland Heights",
            "Norhill",
            "Brooke Smith",
            "Sunset Heights",
            "Rice Military",
            "Washington Avenue",
            "Garden Oaks",
            "Oak Forest",
            "Independence Heights",
            "Near Northside",
            "Timbergrove"
          ]}
          testimonial={{
            quote: "Our 1915 Heights bungalow needed painters who understood old houses. Houston Superior Painting did an incredible job—they spent extra time prepping the wood siding and the trim work is perfect. The house looks better than it has in decades. Highly recommend for Heights homes!",
            author: "Jennifer & Mark T.",
            location: "Houston Heights"
          }}
          faqs={[
            {
              question: "How much does it cost to paint a Heights bungalow?",
              answer: "Interior painting in The Heights typically costs $2.50–$4.50 per square foot, about $4,000–$8,000 for a 2,500 sq ft home. Exterior painting runs $3,500–$12,000 per home; a 2,500 sq ft two-story is typically $5,500–$9,000. We provide free detailed estimates."
            },
            {
              question: "Do you specialize in Heights historic homes?",
              answer: "Yes! We've painted dozens of Heights historic homes. We understand wood siding prep, detailed trim techniques, and how to preserve architectural character."
            },
            {
              question: "Can you restore damaged wood siding?",
              answer: "We properly prep, prime, and paint wood siding to extend its life. For severely damaged sections, we work with carpenters to replace before painting."
            },
            {
              question: "What about Heights new construction?",
              answer: "Absolutely. We paint new townhomes and custom builds throughout The Heights with the same quality and attention to detail."
            },
            {
              question: "What paint colors work for Heights homes?",
              answer: "Classic combinations work beautifully: whites, creams, grays, and soft blues with contrasting trim. We offer free color consultations."
            },
            {
              question: "Do you offer references from Heights homeowners?",
              answer: "Yes! We're happy to connect you with Heights homeowners who can speak to our work. Just ask during your estimate."
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
