import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  title: 'Drywall Repair Houston TX | Houston Superior Painting',
  description: 'Drywall repair in Houston, Katy & Cypress TX. Cracks, holes, water damage & texture matching. Free estimates. Call (346) 594-5960.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/drywall-repair-houston',
  },
  openGraph: {
    title: 'Drywall Repair Houston TX | Houston Superior Painting',
    description: 'Expert drywall repair for cracks, holes, and water damage. Seamless repairs with perfect texture matching.',
    type: 'website',
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/drywall-repair-houston-tx#service",
  "name": "Drywall Repair in Houston, TX",
  "description": "Expert drywall repair services including crack repair, hole patching, water damage repair, and texture matching (orange peel, knockdown, smooth) before painting.",
  "serviceType": "Drywall Repair",
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
      "minPrice": 75,
      "maxPrice": 2500,
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Drywall Repair Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crack Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hole Patching" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Damage Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Texture Matching" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skim Coating" } }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does drywall repair cost in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Small hole repairs typically cost $75-150 each. Larger repairs, crack treatment, and texture matching vary based on scope. When included with painting projects, repair costs are reduced. We provide free estimates."
      }
    },
    {
      "@type": "Question",
      "name": "Can you match my existing wall texture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, texture matching is our specialty. We replicate knockdown, orange peel, skip trowel, popcorn, and other textures common in Houston homes. Our repairs blend invisibly with surrounding surfaces."
      }
    },
    {
      "@type": "Question",
      "name": "Do you repair water-damaged drywall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we specialize in water damage repair. We remove damaged sections, address any mold concerns, install new drywall where needed, and blend repairs seamlessly. We require that the water source be fixed before we begin."
      }
    }
  ]
}

const pageData = {
  title: "Drywall Repair Services in Houston TX",
  subtitle: "Expert Wall & Ceiling Repair",
  heroDescription: "From minor dings to major damage, we restore your walls and ceilings to perfect condition before painting. Our drywall repair specialists match existing textures seamlessly and ensure a flawless foundation for paint application.",
  quickAnswer: "Houston Superior Painting provides professional drywall repair in Houston, Katy, Cypress, and Sugar Land TX. Small hole repairs cost $75-150, with larger repairs and texture matching priced by scope. We specialize in crack repair, water damage restoration, and texture matching (orange peel, knockdown, skip trowel). Free estimates at (346) 594-5960.",
  sections: [
    {
      title: "Why Drywall Repair Matters Before Painting",
      content: `Paint can only look as good as the surface beneath it. Attempting to paint over damaged drywall results in visible flaws that become even more noticeable once fresh paint highlights every imperfection. Cracks telegraph through, holes remain visible, and uneven textures create shadows that detract from your home's appearance.

At Houston Superior Painting, we include drywall assessment and repair as part of every painting project. Our team identifies issues that many painters overlook—hairline cracks, nail pops, settling cracks, and subtle texture inconsistencies. By addressing these problems before painting, we ensure results that look flawless from every angle.

Houston's clay soil causes significant foundation movement that stresses drywall throughout your home. Temperature and humidity fluctuations further contribute to cracking and nail pops. Our repair techniques account for continued movement, using flexible compounds and proper taping methods that resist future cracking.`
    },
    {
      title: "Types of Drywall Damage We Repair",
      content: `Holes are the most common drywall issue we encounter. Whether from door knobs, furniture bumps, or previous hanging hardware, holes require proper patching technique to become invisible. We use appropriately sized patches, multiple mud applications, and careful feathering to ensure seamless repairs.

Cracks appear for various reasons—foundation movement, temperature changes, improper taping during original construction, or age-related settling. We evaluate crack causes and select appropriate repair methods. Some cracks need simple retaping, while structural cracks may require flexible compounds that accommodate continued movement.

Water damage presents unique challenges. Before repairing, we verify the water source has been addressed. We remove damaged drywall, treat any mold concerns, install new drywall sections when necessary, and blend repairs into surrounding surfaces. Water stains require specialized primers to prevent bleed-through.

Texture matching is perhaps the most challenging aspect of drywall repair. Houston homes feature various textures including knockdown, orange peel, skip trowel, and smooth finishes. We carefully match existing textures so repairs blend invisibly with surrounding walls.`
    },
    {
      title: "Our Drywall Repair Process",
      content: `Every repair begins with thorough assessment. We examine the damaged area, identify underlying causes, and determine the appropriate repair method. Some issues require simple patching, while others need more extensive work including drywall replacement.

For hole repairs, we cut clean edges, install backing if needed, apply drywall patches, and build up joint compound in multiple thin layers. Each layer dries completely before sanding and applying the next. This process eliminates the bubbling and cracking that occurs when compound is applied too thickly.

Crack repair starts with opening the crack slightly to accept joint compound. We apply mesh tape or paper tape depending on crack location and severity, then build up compound in thin layers. For cracks caused by foundation movement, we use flexible compounds designed to move with the structure.

Texture application requires skill and the right equipment. We match your home's existing texture using spray equipment, knockdown knives, trowels, or brushes as appropriate. The goal is repairs that completely disappear once painted—and our results consistently achieve this standard.`
    }
  ],
  features: [
    "Hole patching (all sizes)",
    "Crack repair and prevention",
    "Water damage restoration",
    "Ceiling repairs",
    "Texture matching (all styles)",
    "Nail pop repair",
    "Corner bead repair",
    "Skim coating for smooth walls"
  ],
  benefits: [
    "Seamless repairs that disappear after painting",
    "Expert texture matching for all Houston home styles",
    "Proper techniques that prevent future cracking",
    "Water damage specialists",
    "Included with painting projects at reduced cost",
    "Stand-alone repair services available",
    "Fast turnaround for urgent repairs",
    "5-year warranty on repair work"
  ],
  beforeAfterImages: [
    {
      before: "/images/drywall-before-1.jpg",
      after: "/images/drywall-after-1.jpg",
      alt: "Drywall repair and restoration"
    }
  ],
  faqs: [
    {
      question: "How much does drywall repair cost in Houston?",
      answer: "Small hole repairs typically cost $75-150 each. Larger repairs, crack treatment, and texture matching vary based on scope. When included with painting projects, repair costs are reduced. We provide free estimates."
    },
    {
      question: "Can you match my existing wall texture?",
      answer: "Yes, texture matching is our specialty. We replicate knockdown, orange peel, skip trowel, popcorn, and other textures common in Houston homes. Our repairs blend invisibly with surrounding surfaces."
    },
    {
      question: "How long does drywall repair take?",
      answer: "Simple repairs can be completed in a day. More extensive damage requiring multiple compound applications may take 2-3 days to allow proper drying between coats. We always allow adequate drying time for lasting results."
    },
    {
      question: "Do you repair water-damaged drywall?",
      answer: "Yes, we specialize in water damage repair. We remove damaged sections, address any mold concerns, install new drywall where needed, and blend repairs seamlessly. We require that the water source be fixed before we begin."
    },
    {
      question: "Can cracks be permanently fixed?",
      answer: "Most cracks can be repaired to prevent recurrence. For cracks caused by foundation movement, we use flexible compounds and proper taping techniques. Some structural cracks may require foundation work before permanent repair is possible."
    },
    {
      question: "Do you repair popcorn ceilings?",
      answer: "Yes, we repair damaged popcorn ceilings and can also remove popcorn texture entirely if you prefer a smooth or knockdown finish. Popcorn removal is a popular update in Houston homes."
    }
  ],
  relatedServices: [
    { title: "Interior Painting", href: "/interior-painting-houston-tx" },
    { title: "Exterior Painting", href: "/exterior-painting-houston-tx" },
    { title: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx" },
    { title: "Commercial Painting", href: "/commercial-painting-houston-tx" }
  ]
}

export default function DrywallRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
