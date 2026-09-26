import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  title: 'Commercial Painting Houston TX | Houston Superior Painting',
  description: 'Commercial painting in Houston, Katy & Cypress TX. Offices, retail, restaurants & warehouses. After-hours work available. Free estimates.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/commercial-painting-houston-tx',
  },
  openGraph: {
    title: 'Commercial Painting Houston TX | Houston Superior Painting',
    description: 'Minimize downtime with professional commercial painting. After-hours work, efficient crews, and industrial-grade finishes.',
    type: 'website',
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/commercial-painting-houston-tx#service",
  "name": "Commercial Painting in Houston, TX",
  "description": "Professional commercial painting for offices, retail spaces, restaurants, HOAs, and industrial facilities. After-hours and weekend scheduling available to minimize business disruption.",
  "serviceType": "Commercial Painting",
  "provider": { "@id": "https://houstonsuperiorpainting.com/#organization" },
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
      "minPrice": 5000,
      "maxPrice": 50000,
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Painting Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Store Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restaurant Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HOA & Multi-Family" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial Facilities" } }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you paint during off-hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we routinely work nights, weekends, and holidays to minimize business disruption. We'll schedule around your operations to ensure your business continues running smoothly during the project."
      }
    },
    {
      "@type": "Question",
      "name": "How much does commercial painting cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial painting typically costs $1.50-4.00 per square foot depending on surface conditions, coating requirements, and scheduling needs. We provide free detailed estimates for accurate pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Do you carry commercial insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we maintain comprehensive insurance including general liability and workers' compensation coverage appropriate for commercial environments. Certificates of insurance are available upon request."
      }
    }
  ]
}

const pageData = {
  title: "Commercial Painting Services in Houston TX",
  subtitle: "Professional Commercial Painters",
  heroDescription: "Minimize business disruption with our efficient commercial painting services. We work around your schedule—including nights and weekends—to deliver professional results that enhance your brand image and protect your investment.",
  quickAnswer: "Houston Superior Painting provides commercial painting in Houston, Katy, Cypress, and Sugar Land TX. Commercial painting costs $1.50-4.00 per square foot. We offer after-hours and weekend scheduling to minimize business disruption. We serve offices, retail, restaurants, HOAs, and industrial facilities. Free estimates at (346) 594-5960.",
  sections: [
    {
      title: "Commercial Painting That Works Around Your Business",
      content: `Every hour your business is disrupted costs money. That's why Houston Superior Painting offers flexible scheduling options designed to minimize impact on your operations. We routinely complete projects during off-hours, nights, and weekends to ensure your business continues running smoothly.

Our commercial painting crews are trained for efficiency without sacrificing quality. We understand the difference between residential and commercial environments—the need for speed, the importance of cleanliness, and the durability requirements of high-traffic spaces. Our systematic approach allows us to complete projects on time and within budget.

We serve diverse commercial clients throughout the Houston area, from small professional offices to large retail spaces, restaurants, healthcare facilities, and industrial buildings. Each environment presents unique challenges, and our experience across sectors ensures we understand your specific needs.`
    },
    {
      title: "Commercial Environments We Serve",
      content: `Office spaces require finishes that look professional and resist the wear of daily business activity. We use scrubbable, low-odor paints that create positive impressions on clients while standing up to the demands of busy work environments. From executive suites to open floor plans, we deliver results that reflect your brand's quality standards.

Retail environments face constant customer traffic, product handling, and frequent changes. Our retail painting services use durable finishes that maintain appearance despite heavy use. We understand the importance of brand consistency and can match corporate color standards precisely.

Restaurants and hospitality venues need frequent updates to maintain fresh, inviting atmospheres. We specialize in food service environments, using appropriate products and techniques that meet health department requirements. Our after-hours scheduling ensures your restaurant remains open during peak business periods.

Industrial and warehouse facilities require coatings that withstand harsh conditions including chemicals, moisture, and physical abuse. We apply industrial-grade epoxies, urethanes, and specialty coatings designed for these demanding environments. Safety markings, equipment painting, and floor coatings are also available.`
    },
    {
      title: "Why Houston Businesses Choose Us",
      content: `Reputation matters in commercial painting. A botched job reflects poorly on your business and requires expensive remediation. Houston Superior Painting has built our commercial reputation on reliability, quality, and professionalism. Our portfolio includes projects for businesses across Greater Houston, and we're happy to provide references from satisfied commercial clients.

We carry comprehensive insurance coverage appropriate for commercial environments, including general liability and workers' compensation. Our team follows proper safety protocols and maintains a clean, professional presence on your jobsite. We respect your employees, customers, and property throughout every project.

Communication keeps commercial projects on track. You'll have a dedicated project manager as your single point of contact throughout the job. We provide detailed schedules, regular progress updates, and immediate response to any concerns. Our goal is a seamless experience from initial estimate through final walkthrough.

Competitive pricing doesn't mean cutting corners. We provide transparent, detailed estimates that break down all costs. There are no surprise charges, and we guarantee our quoted price. Our efficiency and buying power allow us to deliver premium results at competitive rates.`
    }
  ],
  features: [
    "Office building painting",
    "Retail store painting",
    "Restaurant and hospitality",
    "Medical and dental offices",
    "Industrial facilities",
    "Warehouse painting",
    "Property management services",
    "Multi-unit apartments"
  ],
  benefits: [
    "After-hours and weekend scheduling",
    "Minimal disruption to operations",
    "Industrial-grade coatings available",
    "Fast, efficient crews",
    "Comprehensive insurance coverage",
    "Dedicated project manager",
    "Transparent, competitive pricing",
    "Experience with all commercial environments"
  ],
  beforeAfterImages: [
    {
      before: "/images/commercial-before-1.jpg",
      after: "/images/commercial-after-1.jpg",
      alt: "Commercial office painting transformation"
    }
  ],
  faqs: [
    {
      question: "Can you paint during off-hours?",
      answer: "Yes, we routinely work nights, weekends, and holidays to minimize business disruption. We'll schedule around your operations to ensure your business continues running smoothly during the project."
    },
    {
      question: "How much does commercial painting cost?",
      answer: "Commercial painting typically costs $1.50-4.00 per square foot depending on surface conditions, coating requirements, and scheduling needs. We provide free detailed estimates for accurate pricing."
    },
    {
      question: "How long does commercial painting take?",
      answer: "Project duration depends on scope and scheduling constraints. A typical office suite might take 2-3 days during off-hours. We provide detailed schedules during the estimate process and meet agreed deadlines."
    },
    {
      question: "Do you carry commercial insurance?",
      answer: "Yes, we maintain comprehensive insurance including general liability and workers' compensation coverage appropriate for commercial environments. Certificates of insurance are available upon request."
    },
    {
      question: "Can you match our brand colors?",
      answer: "Absolutely. We can match any corporate color standard. Provide us with your brand guidelines, Pantone numbers, or physical samples, and we'll ensure precise color matching throughout your space."
    },
    {
      question: "Do you work with property managers?",
      answer: "Yes, we have extensive experience with property management companies, handling both individual unit turnovers and common area maintenance. We offer competitive rates for ongoing partnerships."
    }
  ],
  relatedServices: [
    { title: "Interior Painting", href: "/interior-painting-houston-tx" },
    { title: "Exterior Painting", href: "/exterior-painting-houston-tx" },
    { title: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx" },
    { title: "Drywall Repair", href: "/drywall-repair-houston-tx" }
  ]
}

export default function CommercialPaintingPage() {
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
