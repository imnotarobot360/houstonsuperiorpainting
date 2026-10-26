import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicePageTemplate } from '@/components/service-page-template'
import { BUSINESS, PRICES_2026 } from '@/lib/business'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-houston-tx',
  },
  title: 'Exterior Painting Houston TX | House Painters | Houston Superior Painting',
  description: 'Professional exterior house painting in Houston, Katy & Cypress TX. Weather-resistant finishes, power washing, and expert prep work. Free estimates. Call (346) 594-5960.',
  openGraph: {
    title: 'Exterior Painting Houston TX | Houston Superior Painting',
    description: 'Protect and beautify your home with professional exterior painting engineered for Houston weather.',
    type: 'website',
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Exterior Painting",
  "provider": { "@type": "Organization", "@id": "https://houstonsuperiorpainting.com/#organization" },
  "areaServed": ["Houston TX", "Katy TX", "Cypress TX"],
  "description": "Professional exterior house painting services in Houston with weather-resistant finishes designed for Texas climate."
}

const pageData = {
  title: "Exterior House Painting in Houston TX",
  subtitle: "Weather-Resistant Exterior Painters",
  heroDescription: "Protect and beautify your home's exterior with durable, weather-resistant finishes engineered specifically for Houston's challenging climate. We choose elastomeric and acrylic coatings for Texas heat, high humidity, heavy rains, and intense UV.",
  sections: [
    {
      title: "Why Exterior Paint Fails in Houston—And How We Prevent It",
      content: `Houston's climate is brutal on exterior paint. Temperatures regularly exceed 100°F in summer, humidity hovers around 90%, and sudden storms dump inches of rain in hours. This combination causes paint to expand, contract, and absorb moisture—leading to peeling, cracking, bubbling, and premature failure.

Paint that isn't suited to these conditions, or that goes over poorly prepared surfaces, shows the signs of failure early: chalking, fading, and paint lifting away from the surface. At Houston Superior Painting, we take a different approach.

We use premium exterior coatings suited to Gulf Coast conditions. Elastomeric paints flex with temperature changes and bridge hairline cracks. Combined with meticulous surface preparation, that is what makes an exterior paint job last.`
    },
    {
      title: "Our Exterior Painting Process",
      content: `Proper preparation is the foundation of every long-lasting exterior paint job. We begin with a thorough power washing to remove dirt, mold, mildew, and chalky oxidation from your home's surfaces. This step is critical—paint cannot properly adhere to contaminated surfaces.

After power washing, we conduct a detailed inspection of your home's exterior. We identify and repair damaged areas including rotted wood, cracked stucco, failing caulk, and deteriorating trim. These repairs must be completed before painting to ensure lasting results.

Next comes priming. We apply specialized exterior primers that seal porous surfaces, block stains, and provide optimal adhesion for topcoats. Different substrates require different primers—we select the right product for your specific siding material.

Finally, we apply premium exterior paint (your written estimate names the primer and the number of coats needed for even coverage) using professional spray equipment for siding and careful brush work for trim and detail areas. The result is a uniform, durable finish that protects your home and enhances its curb appeal for years to come.`
    },
    {
      title: "Exterior Surfaces We Paint",
      content: `We paint virtually every exterior surface on Houston homes. Siding of all types—vinyl, fiber cement (Hardie board), wood, aluminum, and stucco—receives specialized treatment appropriate for each material. We understand how different substrates perform in Houston's climate and select products accordingly.

Trim work requires precision and durability. We paint fascia boards, soffits, window trim, door frames, and decorative millwork with high-quality semi-gloss or gloss finishes that resist moisture and clean easily. Doors receive special attention with smooth, flawless finishes that make a lasting first impression.

Decks and fences require penetrating stains rather than surface coatings. We apply premium wood stains that protect against UV damage, moisture, and mold while allowing the wood to breathe. Concrete surfaces including porches, patios, and driveways can also be painted or stained to match your home's aesthetic.

We also paint shutters, garage doors, gutters, downspouts, and any other exterior elements that need refreshing. Our comprehensive approach ensures every visible surface looks cohesive and professionally finished.`
    }
  ],
  features: [
    "Complete power washing",
    "Wood rot and siding repair",
    "Caulking and sealing",
    "Premium exterior primers",
    "Elastomeric and acrylic coatings",
    "Trim, fascia, and soffit painting",
    "Deck and fence staining",
    "Garage door painting"
  ],
  benefits: [
    "Weather-resistant coatings chosen for Houston's climate",
    "Thorough preparation including power washing",
    "Repair of wood rot, cracks, and damaged areas",
    "Premium Sherwin-Williams and Benjamin Moore paints",
    "Scope, price, deposit and payment schedule in writing before you approve",
    "5-year written workmanship warranty, transferable",
    "$2M general liability + workers' comp; bonded"
  ],
  beforeAfterImages: [
    {
      before: "/images/exterior-before-1.jpg",
      after: "/images/exterior-after-1.jpg",
      alt: "Houston home exterior painting transformation"
    }
  ],
  faqs: [
    {
      question: "How much does exterior painting cost in Houston?",
      answer: `Exterior painting in Houston typically costs ${PRICES_2026.exteriorPerHome} per square foot, or ${PRICES_2026.exteriorPerHome} for a typical home, depending on home size, siding condition, and prep work required. Two-story homes and homes needing repairs will be on the higher end. We provide free detailed estimates. ${BUSINESS.paymentPolicy.sentence}`
    },
    {
      question: "How long does exterior paint last in Houston?",
      answer: "It depends on the surface, the sun exposure, the coating, and above all the preparation. Paint over poorly prepared surfaces fails early in our harsh climate. Quality preparation is the key to longevity."
    },
    {
      question: "What's the best time of year to paint exterior in Houston?",
      answer: "Fall and spring offer ideal painting conditions with moderate temperatures and lower humidity. We can paint year-round in Houston, but avoid painting during rain or when temperatures drop below 50°F overnight."
    },
    {
      question: "Do you pressure wash before painting?",
      answer: "Yes, power washing is essential and included in every exterior project. It removes dirt, mold, mildew, and oxidation that prevent proper paint adhesion. Skipping this step leads to premature paint failure."
    },
    {
      question: "What type of paint is best for Houston exteriors?",
      answer: "We recommend premium acrylic latex paints from Sherwin-Williams Duration or Benjamin Moore Aura for most Houston homes. For stucco and masonry, elastomeric coatings provide superior waterproofing and crack-bridging."
    },
    {
      question: "Can you paint vinyl siding?",
      answer: "Yes, we can paint vinyl siding. Special preparation and paint formulations are required to ensure adhesion and prevent warping. We use vinyl-safe paints that won't cause heat absorption issues."
    }
  ],
  relatedServices: [
    { title: "Interior Painting", href: "/interior-painting-houston-tx" },
    { title: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx" },
    { title: "Drywall Repair", href: "/drywall-repair-houston-tx" },
    { title: "Commercial Painting", href: "/commercial-painting-houston-tx" }
  ]
}

export default function ExteriorPaintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <ServicePageTemplate {...pageData} />
      <Footer />
    </>
  )
}
