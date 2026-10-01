import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "House Painters River Oaks Houston TX | Interior & Exterior",
  description: "House painters serving River Oaks, Houston TX. Expert interior, exterior, and cabinet work for distinguished homes. Free estimates, 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-river-oaks-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in River Oaks TX | Houston Superior Painting",
    description: "Premium painting services for River Oaks homeowners. Luxury home specialists, insured crews, 5-year warranty.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "River Oaks",
  slug: "painters-river-oaks-tx",
  description: "Premium house painting services in River Oaks, Houston TX. Interior, exterior, and specialty finishes for luxury homes.",
})

export default function PaintersRiverOaksTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="River Oaks"
          state="TX"
          heroHeadline="House Painters for River Oaks, Houston"
          heroDescription="Houston's most distinguished neighborhood deserves exceptional painting craftsmanship. We bring the skill, discretion, and attention to detail that River Oaks' finest homes require."
          aboutCity={`River Oaks is Houston's most prestigious residential enclave, home to architectural masterpieces, historic estates, and some of the most valuable real estate in Texas. Painting these exceptional properties requires expertise, meticulous attention to detail, and a deep understanding of luxury home care.

We've earned the trust of discerning River Oaks homeowners who demand nothing less than perfection. Whether you're maintaining a 1930s Georgian estate, refreshing a mid-century modern gem, or adding finishing touches to new construction, our crews bring the craftsmanship these properties deserve.

River Oaks homes often feature architectural details and specialty finishes rarely seen elsewhere: intricate moldings, hand-applied plaster, Venetian finishes, decorative glazing, and custom millwork. Our painters are trained to work with these elements, delivering results that enhance rather than diminish the craftsmanship of your home.

We understand the unique expectations of River Oaks residents: discretion, reliability, meticulous cleanliness, and results that meet the highest standards. Our uniformed, background-checked crews respect your privacy and property, leaving every surface perfect and every space immaculate.`}
          whyChooseUs={[
            "Luxury home specialists: Extensive experience with River Oaks' finest properties",
            "Historic expertise: Skilled with period architecture and original details",
            "Specialty finishes: Venetian plaster, faux finishes, decorative techniques",
            "Meticulous protection: We safeguard valuable landscaping, art, and furnishings",
            "Discrete, professional service: Uniformed crews who respect your privacy",
            "5-year written warranty: Our guarantee of lasting quality"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Transform your River Oaks home with expert interior finishes. We handle specialty textures, detailed trim, high ceilings, and decorative techniques.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Protect and enhance your River Oaks home's exterior. Premium coatings applied with precision to every architectural detail.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Restore or update fine cabinetry with factory-quality finishes that match River Oaks' standards.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Fix cracks, plaster damage, and imperfections before painting for flawless results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Professional pressure washing for River Oaks properties. Clean driveways, patios, and exterior surfaces.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Transform your River Oaks brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Professional painting for River Oaks businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Durable epoxy coatings for River Oaks garages that resist stains and last for years.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "River Oaks",
            "River Oaks Shopping Area",
            "Avalon Place",
            "Courtlandt Place",
            "Broadacres",
            "Shadyside",
            "Hyde Park",
            "Boulevard Oaks",
            "Montrose",
            "Upper Kirby",
            "Greenway Plaza Area",
            "Highland Village"
          ]}
          testimonial={{
            quote: "Our 1940s River Oaks home required painters who understood its character. Houston Superior Painting exceeded every expectation—they matched existing specialty finishes perfectly, handled delicate plasterwork with care, and the results are absolutely stunning. True craftsmen.",
            author: "The Harrison Family",
            location: "River Oaks"
          }}
          faqs={[
            {
              question: "How much does it cost to paint a home in River Oaks?",
              answer: `River Oaks homes vary significantly in size and architectural complexity. Interior painting in River Oaks typically costs ${PRICES_2026.interiorPerSqFt} per square foot; homes over 4,000 sq ft generally run ${PRICES_2026.fullInterior4000} inside. A two-story exterior over 4,000 sq ft typically runs ${PRICES_2026.exterior4000TwoStory}, and larger estates with extensive millwork are quoted after a walkthrough. We provide free detailed estimates.`
            },
            {
              question: "Do you have experience with River Oaks' historic homes?",
              answer: "Yes. Many River Oaks homes are architectural treasures dating to the 1920s-1950s. We're experienced with period details, specialty finishes, and the careful approach these distinctive properties require."
            },
            {
              question: "Can you handle specialty finishes and decorative painting?",
              answer: "Absolutely. We're skilled in Venetian plaster, faux finishes, glazing, gold leaf, and other decorative techniques common in River Oaks homes. We can match existing specialty finishes or create new custom looks."
            },
            {
              question: "How do you protect River Oaks' valuable landscaping?",
              answer: "River Oaks properties often feature significant landscaping investments. We use comprehensive protection including drop cloths, plant covers, and careful equipment placement. We leave landscapes pristine."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
