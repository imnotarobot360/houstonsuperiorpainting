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
  title: "House Painters Memorial TX — Houston Superior Painting",
  description: "Premier painters in Memorial TX. Interior, exterior, cabinet painting for Memorial Villages, Bunker Hill, Piney Point. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-memorial-tx',
  },
  openGraph: {
    title: "House Painters Memorial TX — Houston Superior Painting",
    description: "Premier painters in Memorial TX. Interior, exterior, cabinet painting for Memorial Villages, Bunker Hill, Piney Point. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-memorial-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-memorial.jpg",
      width: 1200,
      height: 630,
      alt: "House Painters Memorial TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Painters Memorial TX — Houston Superior Painting",
    description: "Premier painters in Memorial TX. Interior, exterior, cabinet painting for Memorial Villages, Bunker Hill, Piney Point.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-memorial.jpg"],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Memorial',
    'geo.position': '29.7752;-95.5605',
    'ICBM': '29.7752, -95.5605',
  },
}

export default function PaintersMemorialTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Memorial",
  slug: "painters-memorial-tx",
  description: "Premium house painting services in Memorial, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Memorial"
          state="TX"
          heroHeadline="House Painters in Memorial, Houston"
          heroDescription="Serving the Memorial Villages, Bunker Hill, Piney Point, and Hedwig Village with premium painting services befitting Houston's most prestigious addresses. Luxury materials, expert craftsmanship, and white-glove service."
          quickAnswer="Houston Superior Painting provides premium painting services throughout Memorial TX including Memorial Villages, Bunker Hill, Piney Point, and Hedwig Village. Interior painting costs $2.50–$4.50/sq ft ($7,000–$14,000 for homes over 4,000 sq ft) and a two-story exterior over 4,000 sq ft typically runs $8,500–$14,000. We specialize in luxury homes with tall ceilings, detailed millwork, and specialty finishes. Premium Sherwin-Williams and Benjamin Moore products included. 5-year warranty. Call (346) 594-5960 for a free estimate."
          aboutCity={`Memorial is home to some of Houston's most prestigious addresses. The Memorial Villages—Bunker Hill, Piney Point, Hedwig Village, Hilshire Village, Hunters Creek, and Spring Valley—represent the pinnacle of Houston living with their wooded lots, custom architecture, and commitment to excellence.

These aren't ordinary homes, and they don't receive ordinary painting services. Memorial's estate properties demand painters who understand luxury: tall ceilings that require specialized equipment, intricate millwork that needs careful attention, specialty finishes that must be expertly applied, and landscapes that must be protected.

Houston Superior Painting has earned the trust of Memorial homeowners through our commitment to premium quality. We use only top-tier products—Sherwin-Williams Emerald and Duration, Benjamin Moore Aura and Regal Select—applied by experienced crews who appreciate fine craftsmanship.

We understand that Memorial homeowners value their privacy and their time. Our project managers provide detailed schedules, our crews arrive punctually and work efficiently, and we leave your home cleaner than we found it. We coordinate seamlessly with designers, architects, and other trades when your project requires it.

Whether you're refreshing an existing finish, transforming a recent acquisition, or completing new construction, Houston Superior Painting delivers results worthy of Memorial's distinguished reputation. Our 5-year warranty and meticulous attention to detail have made us the trusted choice for discerning Memorial homeowners.`}
          whyChooseUs={[
            "Estate-home experience: large floor plans, tall ceilings, and detailed millwork",
            "Luxury home expertise: tall ceilings, detailed millwork, specialty finishes",
            "Premium products only: Sherwin-Williams Emerald, Benjamin Moore Aura",
            "White-glove service: punctual, clean, respectful of your home",
            "Designer and builder coordination for renovation projects",
            "Extensive landscape protection with full cleanup",
            "5-year written warranty on all residential painting",
            "Discreet, professional crews who understand Memorial expectations"
          ]}
          services={[
            {
              title: "Interior Painting Memorial",
              description: "Expert interior painting for Memorial's luxury homes. Tall ceilings, detailed trim, and perfect finishes throughout.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Memorial",
              description: "Premium exterior coatings that protect your Memorial home from Houston's climate while enhancing its architectural beauty.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Memorial",
              description: "Transform your Memorial kitchen with factory-smooth cabinet finishes. Custom colors and specialty techniques available.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Specialty Finishes Memorial",
              description: "Venetian plaster, faux finishes, glazing, and custom techniques for Memorial's distinctive interiors.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Drywall Repair Memorial",
              description: "Seamless repairs for cracks, settling, and imperfections. Perfect prep for perfect results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Limewash Brick Memorial",
              description: "Elegant European limewash finishes for Memorial's brick homes. Timeless beauty that breathes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Pressure Washing Memorial",
              description: "Professional cleaning for driveways, patios, and exteriors before painting or as standalone service.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Memorial",
              description: "Premium epoxy coatings for Memorial garages. Metallic, flake, and custom options available.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Memorial Villages",
            "Bunker Hill Village",
            "Piney Point Village",
            "Hedwig Village",
            "Hilshire Village",
            "Hunters Creek Village",
            "Spring Valley Village",
            "Memorial Forest",
            "Memorial Bend",
            "Memorial Close",
            "Memorial Drive Estates",
            "Memorial Thicket",
            "Stablewood",
            "Frostwood"
          ]}
          testimonial={{
            quote: "We've used Houston Superior Painting for two homes in Piney Point over the past three years. Their attention to detail is exceptional—they treated our home like their own. The crew was professional, clean, and the quality is outstanding. We won't use anyone else.",
            author: "The Richardson Family",
            location: "Piney Point Village"
          }}
          faqs={[
            {
              question: "How much does it cost to paint a house in Memorial?",
              answer: "Interior painting in Memorial typically costs $2.50–$4.50 per square foot; homes over 4,000 sq ft generally run $7,000–$14,000 inside. A two-story exterior over 4,000 sq ft typically runs $8,500–$14,000, and larger estates with extensive millwork are quoted after a walkthrough. We provide free detailed estimates."
            },
            {
              question: "Do you have experience with large Memorial estates?",
              answer: "Yes! We've painted numerous estate homes over 8,000 sq ft in Memorial Villages. Our crews have the equipment, experience, and patience for homes of any size."
            },
            {
              question: "What paint brands do you use in Memorial?",
              answer: "For Memorial's luxury homes, we use only premium products: Sherwin-Williams Emerald and Duration, Benjamin Moore Aura and Regal Select. These provide superior finish and durability."
            },
            {
              question: "Can you work with our designer?",
              answer: "Absolutely. We regularly coordinate with interior designers, architects, and builders throughout Memorial. We're comfortable reading specifications and matching precise colors."
            },
            {
              question: "How do you protect landscaping?",
              answer: "Memorial homes often have valuable mature landscaping. We use extensive drop cloths and plastic sheeting, train our crews to work carefully, and always clean up thoroughly."
            },
            {
              question: "What warranty do you offer?",
              answer: "All Memorial painting projects include our 5-year written warranty covering peeling, blistering, bubbling, and excessive fading."
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
