import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-houston',
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
  "provider": { "@id": "https://houstonsuperiorpainting.com/#organization" },
  "areaServed": ["Houston TX", "Katy TX", "Cypress TX"],
  "description": "Professional exterior house painting services in Houston with weather-resistant finishes designed for Texas climate."
}

const pageData = {
  title: "Exterior House Painting in Houston TX",
  subtitle: "Weather-Resistant Exterior Painters",
  heroDescription: "Protect and beautify your home's exterior with durable, weather-resistant finishes engineered specifically for Houston's challenging climate. Our elastomeric and acrylic coatings stand up to Texas heat, high humidity, heavy rains, and intense UV without cracking, peeling, or fading.",
  sections: [
    {
      title: "Why Exterior Paint Fails in Houston—And How We Prevent It",
      content: `Houston's climate is brutal on exterior paint. Temperatures regularly exceed 100°F in summer, humidity hovers around 90%, and sudden storms dump inches of rain in hours. This combination causes paint to expand, contract, and absorb moisture—leading to peeling, cracking, bubbling, and premature failure.

Most painting contractors use standard latex paints that can't withstand these conditions. Within 2-3 years, you'll see the signs of failure: chalking, fading, and paint lifting away from the surface. At Houston Superior Painting, we take a different approach.

We exclusively use premium exterior coatings specifically formulated for Gulf Coast conditions. Our elastomeric paints flex with temperature changes, bridge hairline cracks, and create a waterproof barrier that protects your home for years. Combined with meticulous surface preparation, our exterior paint jobs last 7-10 years—far exceeding industry averages.`
    },
    {
      title: "Our Exterior Painting Process",
      content: `Proper preparation is the foundation of every long-lasting exterior paint job. We begin with a thorough power washing to remove dirt, mold, mildew, and chalky oxidation from your home's surfaces. This step is critical—paint cannot properly adhere to contaminated surfaces.

After power washing, we conduct a detailed inspection of your home's exterior. We identify and repair damaged areas including rotted wood, cracked stucco, failing caulk, and deteriorating trim. These repairs must be completed before painting to ensure lasting results.

Next comes priming. We apply specialized exterior primers that seal porous surfaces, block stains, and provide optimal adhesion for topcoats. Different substrates require different primers—we select the right product for your specific siding material.

Finally, we apply two coats of premium exterior paint using professional spray equipment for siding and careful brush work for trim and detail areas. The result is a uniform, durable finish that protects your home and enhances its curb appeal for years to come.`
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
    "Weather-resistant coatings rated for Houston climate",
    "7-10 year durability vs. 2-3 year industry average",
    "Thorough preparation including power washing",
    "Repair of wood rot, cracks, and damaged areas",
    "Premium Sherwin-Williams and Benjamin Moore paints",
    "No payment until you're completely satisfied",
    "5-year warranty on all exterior work",
    "Bonded and fully insured"
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
      answer: "Exterior painting in Houston typically costs between $3 to $6 per square foot depending on home size, siding condition, and prep work required. Two-story homes and homes needing repairs will be on the higher end. We provide free detailed estimates."
    },
    {
      question: "How long does exterior paint last in Houston?",
      answer: "With proper preparation and premium coatings, exterior paint can last 7-10 years in Houston. Standard paint jobs often fail within 2-3 years due to our harsh climate. Quality preparation is the key to longevity."
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
