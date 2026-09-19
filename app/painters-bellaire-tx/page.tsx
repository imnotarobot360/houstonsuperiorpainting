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
  title: "House Painters Bellaire TX — Houston Superior Painting",
  description: "Professional painters in Bellaire TX. Interior, exterior, cabinet painting for this prestigious Houston enclave. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-bellaire-tx',
  },
  openGraph: {
    title: "House Painters Bellaire TX — Houston Superior Painting",
    description: "Professional painters in Bellaire TX. Interior, exterior, cabinet painting for this prestigious Houston enclave. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-bellaire-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-bellaire.jpg",
      width: 1200,
      height: 630,
      alt: "House Painters Bellaire TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Painters Bellaire TX — Houston Superior Painting",
    description: "Professional painters in Bellaire TX. Interior, exterior, cabinet painting for this prestigious Houston enclave.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-bellaire.jpg"],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Bellaire',
    'geo.position': '29.7058;-95.4588',
    'ICBM': '29.7058, -95.4588',
  },
}

export default function PaintersBellaireTX() {
  return (
    <>
      <TrustBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Bellaire",
  slug: "painters-bellaire-tx",
  description: "Professional house painting services in Bellaire, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Bellaire"
          state="TX"
          heroHeadline="Bellaire's Premier House Painters"
          heroDescription="From charming mid-century ranches to stunning modern builds, we deliver the quality that this distinguished community expects. Premium materials, meticulous prep, and a 5-year warranty on every project."
          quickAnswer="Houston Superior Painting provides professional painting services throughout Bellaire TX. Interior painting costs $3.00-$5.00/sq ft, exterior painting $6,000-$15,000+. We specialize in both classic mid-century homes and modern new construction, use Sherwin-Williams and Benjamin Moore premium products, and provide a 5-year warranty. Call (346) 594-5960 for a free estimate."
          aboutCity={`Bellaire is one of Houston's most desirable inner-loop communities, known for its excellent schools, tree-lined streets, and prime location just minutes from the Medical Center, Galleria, and downtown. The homes here range from charming 1950s ranches to stunning modern architecture, and each deserves painting services that match its quality.

We've been serving Bellaire homeowners since 2019, and we understand what makes this community special. The close-knit neighborhood feel means reputation matters—and we've built ours on consistent quality, fair pricing, and respectful service that Bellaire families appreciate.

Bellaire's real estate values are among Houston's highest, demanding proper home maintenance. Painting is one of the most impactful investments you can make—protecting your home from Houston's harsh climate while enhancing curb appeal. Whether you're refreshing a beloved family home that's been in the neighborhood for decades or putting finishing touches on a new custom build, we deliver results that protect and enhance your investment.

Our crews are experienced with Bellaire's unique characteristics: working efficiently on smaller lots, coordinating around neighbor proximity, and understanding the city's specific requirements. We've completed over 35 projects in Bellaire alone, building relationships with homeowners who trust us for their ongoing painting needs.

We treat every Bellaire project with the care and professionalism this exceptional community deserves. Our bilingual team provides clear communication, our detailed estimates have no hidden fees, and our 5-year warranty ensures your satisfaction.`}
          whyChooseUs={[
            "35+ Bellaire projects completed since 2019",
            "Mid-century to modern expertise: skilled with all Bellaire architectural styles",
            "Tight-lot experience: efficient work in close-set neighborhoods",
            "Premium materials: Sherwin-Williams Duration and Benjamin Moore Regal standard",
            "City permit knowledge: familiar with Bellaire's requirements",
            "Clean, professional crews: respectful of your property and neighbors",
            "5-year written warranty on all residential painting",
            "Free color consultations with take-home samples"
          ]}
          services={[
            {
              title: "Interior Painting Bellaire",
              description: "Transform your Bellaire home's interior with expert painting. From single rooms to complete repaints, we deliver flawless, brush-mark-free results.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Bellaire",
              description: "Protect and beautify your Bellaire home's exterior. Our premium coatings maintain curb appeal and withstand Houston's demanding climate.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Bellaire",
              description: "Update your kitchen with factory-smooth cabinet finishes. A cost-effective way to modernize without full replacement.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair Bellaire",
              description: "Fix cracks, settling damage, and imperfections before painting. Essential for older Bellaire homes to achieve perfect results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing Bellaire",
              description: "Professional pressure washing for Bellaire homes. Clean driveways, patios, and siding before painting or as standalone service.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick Bellaire",
              description: "Transform your Bellaire brick home with elegant European limewash or German smear finishes that breathe and age beautifully.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting Bellaire",
              description: "Professional painting for Bellaire businesses and commercial properties with after-hours scheduling.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Bellaire",
              description: "Durable epoxy coatings for Bellaire garages that resist stains, chemicals, and last for years.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Bellaire Proper",
            "Southdale",
            "Westmoreland",
            "Bellaire Junction",
            "Maplewood",
            "Oak Park",
            "Westchester",
            "Braeswood Place",
            "Meyerland",
            "West University Place",
            "Southside Place",
            "Medical Center Area"
          ]}
          testimonial={{
            quote: "Our 1960s Bellaire ranch needed a complete exterior refresh. Houston Superior Painting did an exceptional job—the prep work was thorough, the colors are perfect, and they worked carefully around our narrow lot. Our neighbors have already asked for their contact info!",
            author: "Patricia & George S.",
            location: "Bellaire, TX"
          }}
          faqs={[
            {
              question: "How much does it cost to paint a house in Bellaire, TX?",
              answer: "Interior painting in Bellaire typically costs $3.00-5.00 per square foot. Exterior painting for Bellaire homes ranges from $6,000-15,000+ depending on size and condition. We provide free detailed estimates."
            },
            {
              question: "Do you paint both older and newer Bellaire homes?",
              answer: "Yes! Bellaire has a wonderful mix of charming mid-century ranches and modern new construction. We're experienced with both—respecting the character of classic homes while bringing fresh finishes to newer builds."
            },
            {
              question: "Are you familiar with Bellaire's building requirements?",
              answer: "Absolutely. Bellaire has specific permit requirements for exterior work. We handle all necessary coordination and are familiar with the city's standards for residential painting projects."
            },
            {
              question: "How do you work around Bellaire's narrow lots?",
              answer: "Bellaire's close-set homes require careful planning. We coordinate with neighbors when necessary, use equipment suited for tight spaces, and take extra care to protect neighboring properties."
            },
            {
              question: "What warranty do you offer in Bellaire?",
              answer: "All Bellaire painting projects include our 5-year written warranty covering peeling, blistering, bubbling, and excessive fading. We stand behind our work."
            },
            {
              question: "Are you insured for Bellaire?",
              answer: "Yes, we are fully insured with $2M liability coverage. Certificates available upon request."
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
