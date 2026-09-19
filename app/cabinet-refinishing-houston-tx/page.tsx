import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  title: 'Cabinet Refinishing Houston TX — Houston Superior Painting',
  description: 'Professional cabinet refinishing in Houston TX. Factory-finish spray techniques. Transform dated cabinets at a fraction of replacement cost. Free estimates.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-houston',
  },
  openGraph: {
    title: 'Cabinet Refinishing Houston TX — Houston Superior Painting',
    description: 'Professional cabinet refinishing in Houston TX. Factory-finish spray techniques. Transform dated cabinets at a fraction of replacement cost.',
    url: 'https://houstonsuperiorpainting.com/cabinet-refinishing-houston-tx',
    siteName: 'Houston Superior Painting',
    type: 'website',
    images: [{
      url: 'https://houstonsuperiorpainting.com/images/og/og-cabinet-refinishing.jpg',
      width: 1200,
      height: 630,
      alt: 'Cabinet Refinishing Houston TX - Houston Superior Painting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Refinishing Houston TX — Houston Superior Painting',
    description: 'Professional cabinet refinishing in Houston TX. Factory-finish spray techniques. Transform dated cabinets.',
    images: ['https://houstonsuperiorpainting.com/images/og/og-cabinet-refinishing.jpg'],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/cabinet-refinishing-houston-tx#service",
  "name": "Cabinet Refinishing & Painting in Houston, TX",
  "description": "Professional kitchen and bathroom cabinet refinishing in Houston, Katy, Cypress and surrounding TX cities. Factory-finish spray techniques, grain filling, premium cabinet-grade enamels, 5-year warranty.",
  "serviceType": "Cabinet Refinishing",
  "provider": { "@id": "https://houstonsuperiorpainting.com/#business" },
  "areaServed": [
    { "@type": "City", "name": "Houston" },
    { "@type": "City", "name": "Katy" },
    { "@type": "City", "name": "Cypress" },
    { "@type": "City", "name": "Sugar Land" },
    { "@type": "City", "name": "Pearland" }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 3000,
      "maxPrice": 8000,
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cabinet Refinishing Options",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kitchen Cabinet Refinishing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathroom Vanity Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Two-Tone Cabinet Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oak Cabinet Grain Filling" } }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our Cabinet Refinishing Process",
  "description": "How Houston Superior Painting refinishes kitchen cabinets in Houston, TX in 4 steps.",
  "totalTime": "P5D",
  "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "5500" },
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Remove and label", "text": "We remove every door, drawer, and hardware piece, labeling each for perfect reinstallation." },
    { "@type": "HowToStep", "position": 2, "name": "Clean and degrease", "text": "Industrial degreasing removes years of cooking oils, smoke, and grime that prevent paint adhesion." },
    { "@type": "HowToStep", "position": 3, "name": "Sand, fill grain, prime", "text": "We sand all surfaces, fill grain on oak cabinets, and apply specialized bonding primers." },
    { "@type": "HowToStep", "position": 4, "name": "Spray cabinet-grade enamel", "text": "Multiple coats of premium cabinet enamel sprayed in controlled conditions create a glass-smooth, factory-quality finish." }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does cabinet refinishing cost in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cabinet refinishing in Houston typically costs $3,000 to $8,000 depending on kitchen size and cabinet construction. This is 70-80% less than replacement. We provide free detailed estimates."
      }
    },
    {
      "@type": "Question",
      "name": "How long does cabinet refinishing take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most cabinet refinishing projects take 3-5 days. We remove doors and drawers to our spray facility, refinish them, then reinstall. Larger kitchens or extensive prep work may require additional time."
      }
    },
    {
      "@type": "Question",
      "name": "Can you paint over oak cabinets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in transforming oak and other heavily grained wood cabinets. We apply grain filler and specialized techniques to achieve a smooth, modern finish that hides the wood grain."
      }
    },
    {
      "@type": "Question",
      "name": "How durable is cabinet paint?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our cabinet-grade finishes are extremely durable. They resist chipping, scratching, and staining better than factory finishes. With proper care, refinished cabinets last 10-15 years before needing touch-ups."
      }
    }
  ]
}

const pageData = {
  title: "Cabinet Refinishing & Painting in Houston TX",
  subtitle: "Factory-Finish Cabinet Experts",
  heroDescription: "Transform your dated kitchen or bathroom cabinets with professional refinishing at a fraction of replacement cost. Our factory-finish spray techniques deliver smooth, durable results that look like brand new custom cabinetry.",
  quickAnswer: "Houston Superior Painting refinishes kitchen and bathroom cabinets in Houston, Katy, and Cypress, TX using factory-finish spray techniques. Projects cost $3,000–$8,000, take 3–5 days, and come with a 5-year warranty. We use Sherwin-Williams and Benjamin Moore cabinet-grade enamels. Free estimates at (346) 594-5960.",
  sections: [
    {
      title: "Why Refinish Instead of Replace Your Cabinets?",
      content: `Cabinet replacement is one of the most expensive kitchen renovation projects, often costing $15,000 to $50,000 or more for a typical Houston home. But if your cabinet boxes are structurally sound, refinishing offers a smarter alternative that delivers stunning results at 20-30% of replacement cost.

Cabinet refinishing updates the look of your kitchen without the mess, expense, and weeks of disruption that come with a full renovation. There's no demolition, no waiting for custom cabinets to be manufactured, and no need to replace countertops or appliances. In most cases, we complete cabinet refinishing projects in 3-5 days.

The results speak for themselves. Our factory-finish spray techniques eliminate brush marks, drips, and uneven coverage that plague DIY and traditional brush-painted cabinets. The smooth, uniform finish we achieve rivals factory-applied coatings and transforms even the most dated golden oak or honey maple cabinets into modern, stylish focal points.`
    },
    {
      title: "Our Cabinet Refinishing Process",
      content: `Professional cabinet refinishing requires specialized equipment, materials, and techniques. We begin by carefully removing all cabinet doors, drawers, and hardware. Each piece is labeled and cataloged to ensure proper reinstallation.

Thorough cleaning and degreasing remove years of cooking oils, smoke residue, and grime that accumulate on kitchen cabinets. This step is critical—paint will not adhere properly to contaminated surfaces.

Next comes sanding. We sand all surfaces to create proper adhesion for primers and topcoats. For cabinets with heavy grain (like oak), we apply grain filler to create a smooth surface that won't show wood texture through the finish.

We apply specialized bonding primers formulated for cabinet work, then spray multiple coats of premium cabinet-grade enamel. Between coats, we sand lightly to ensure perfect adhesion and a glass-smooth final finish. The result is a durable, washable surface that resists chips, scratches, and stains.`
    },
    {
      title: "Cabinet Colors and Finishes",
      content: `White and off-white cabinets remain Houston's most popular choice, creating bright, clean kitchens that photograph beautifully and appeal to future buyers. We offer dozens of white tones from crisp pure white to warm creamy shades to subtle gray-whites that complement any design style.

Gray cabinets have emerged as a strong trend, offering modern sophistication without the starkness of white. Navy blue, hunter green, and black create dramatic statements in contemporary and transitional kitchens. We can match any color you choose from Sherwin-Williams, Benjamin Moore, or other major paint brands.

Two-tone cabinets—with upper cabinets in one color and lower cabinets in another—add visual interest and depth to your kitchen. Popular combinations include white uppers with navy or gray lowers, or wood-tone lowers with painted uppers.

We offer multiple sheen levels including matte, satin, and semi-gloss. Satin and semi-gloss finishes are most popular for their durability and easy cleaning. Your color consultation includes sheen recommendations based on your lifestyle and aesthetic preferences.`
    }
  ],
  features: [
    "Kitchen cabinet refinishing",
    "Bathroom vanity painting",
    "Pantry and closet cabinets",
    "Laundry room cabinets",
    "Island and peninsula cabinets",
    "Hardware replacement assistance",
    "Grain filling for smooth finishes",
    "Color matching available"
  ],
  benefits: [
    "Save 70-80% vs. cabinet replacement",
    "Factory-finish spray application",
    "Most projects completed in 3-5 days",
    "No demolition or countertop removal",
    "Premium cabinet-grade enamels",
    "Durable, washable, chip-resistant finish",
    "5-year warranty on cabinet work",
    "Color consultation included"
  ],
  beforeAfterImages: [
    {
      before: "/images/cabinet-before-1.jpg",
      after: "/images/cabinet-after-1.jpg",
      alt: "Kitchen cabinet refinishing transformation"
    }
  ],
  faqs: [
    {
      question: "How much does cabinet refinishing cost in Houston?",
      answer: "Cabinet refinishing in Houston typically costs $3,000 to $8,000 depending on kitchen size and cabinet construction. This is 70-80% less than replacement. We provide free detailed estimates."
    },
    {
      question: "How long does cabinet refinishing take?",
      answer: "Most cabinet refinishing projects take 3-5 days. We remove doors and drawers to our spray facility, refinish them, then reinstall. Larger kitchens or extensive prep work may require additional time."
    },
    {
      question: "Can you paint over oak cabinets?",
      answer: "Yes, we specialize in transforming oak and other heavily grained wood cabinets. We apply grain filler and specialized techniques to achieve a smooth, modern finish that hides the wood grain."
    },
    {
      question: "How durable is cabinet paint?",
      answer: "Our cabinet-grade finishes are extremely durable. They resist chipping, scratching, and staining better than factory finishes. With proper care, refinished cabinets last 10-15 years before needing touch-ups."
    },
    {
      question: "Can I use my kitchen during refinishing?",
      answer: "Yes, with some limitations. We work in phases to minimize disruption. Your countertops, sink, and appliances remain accessible throughout the project, though you'll be without cabinet doors for a few days."
    },
    {
      question: "Do you replace cabinet hardware?",
      answer: "We can assist with hardware selection and ensure proper alignment for new hardware installation. If your new knobs or pulls have different hole spacing, we patch and fill old holes for a clean look."
    }
  ],
  relatedServices: [
    { title: "Interior Painting", href: "/interior-painting-houston-tx" },
    { title: "Exterior Painting", href: "/exterior-painting-houston-tx" },
    { title: "Drywall Repair", href: "/drywall-repair-houston-tx" },
    { title: "Commercial Painting", href: "/commercial-painting-houston-tx" }
  ]
}

export default function CabinetRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <ServicePageTemplate {...pageData} />
      <Footer />
    </>
  )
}
