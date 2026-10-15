import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicePageTemplate } from '@/components/service-page-template'
import { BUSINESS, PRICES_2026 } from '@/lib/business'

const COST_ANSWER = `Commercial repaints typically cost ${PRICES_2026.commercialPerSqFt} per square foot of wall: offices ${PRICES_2026.commercialOffice}, retail ${PRICES_2026.commercialRetail}, and warehouses ${PRICES_2026.commercialWarehouse}. After-hours scheduling adds ${PRICES_2026.commercialAfterHoursPremium}. Final pricing depends on surface conditions and coating requirements. We provide free detailed estimates. ${BUSINESS.paymentPolicy.sentence}`
const OFF_HOURS_ANSWER = `Yes. After-hours and weekend work is available to minimize business disruption, and it adds ${PRICES_2026.commercialAfterHoursPremium} to the price. We'll schedule around your operations.`
const INSURANCE_ANSWER = "Yes. We carry $2M general liability + workers' comp, and we are bonded. Certificates of insurance are available upon request."

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
        "text": OFF_HOURS_ANSWER
      }
    },
    {
      "@type": "Question",
      "name": "How much does commercial painting cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": COST_ANSWER
      }
    },
    {
      "@type": "Question",
      "name": "Do you carry commercial insurance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": INSURANCE_ANSWER
      }
    }
  ]
}

const pageData = {
  title: "Commercial Painting Services in Houston TX",
  subtitle: "Professional Commercial Painters",
  heroDescription: "Minimize business disruption with our efficient commercial painting services. We work around your schedule—including nights and weekends—to deliver professional results that enhance your brand image and protect your investment.",
  quickAnswer: `Houston Superior Painting provides commercial painting in Houston, Katy, Cypress, and Sugar Land TX. Commercial painting costs ${PRICES_2026.commercialPerSqFt} per square foot of wall. We offer after-hours and weekend scheduling to minimize business disruption. We serve offices, retail, restaurants, HOAs, and industrial facilities. Free estimates at ${BUSINESS.phone}.`,
  sections: [
    {
      title: "Commercial Painting That Works Around Your Business",
      content: `Every hour your business is disrupted costs money. That's why Houston Superior Painting offers flexible scheduling options designed to minimize impact on your operations. After-hours and weekend scheduling is available so your business can keep running.

Our commercial painting crews are trained for efficiency without sacrificing quality. We understand the difference between residential and commercial environments—the need for speed, the importance of cleanliness, and the durability requirements of high-traffic spaces. Our systematic approach allows us to complete projects on time and within budget.

We serve diverse commercial clients throughout the Houston area, from small professional offices to large retail spaces, restaurants, healthcare facilities, and industrial buildings. Each environment presents unique challenges, and our experience across sectors ensures we understand your specific needs.`
    },
    {
      title: "Commercial Environments We Serve",
      content: `Office spaces require finishes that look professional and resist the wear of daily business activity. We use scrubbable, low-odor paints that create positive impressions on clients while standing up to the demands of busy work environments. From executive suites to open floor plans, we deliver results that reflect your brand's quality standards.

Retail environments face constant customer traffic, product handling, and frequent changes. Our retail painting services use durable finishes that maintain appearance despite heavy use. We understand the importance of brand consistency and can match corporate color standards precisely.

Restaurants and hospitality venues need frequent updates to maintain fresh, inviting atmospheres. After-hours scheduling helps keep your restaurant open during peak business periods.

Industrial and warehouse facilities require coatings that withstand harsh conditions including chemicals, moisture, and physical abuse. We apply industrial-grade epoxies, urethanes, and specialty coatings designed for these demanding environments. Safety markings, equipment painting, and floor coatings are also available.`
    },
    {
      title: "Why Houston Businesses Choose Us",
      content: `Reputation matters in commercial painting. A botched job reflects poorly on your business and requires expensive remediation. Houston Superior Painting focuses on reliability, quality, and professionalism.

We carry $2M general liability + workers' comp, and we are bonded. Our team follows proper safety protocols and maintains a clean, professional presence on your jobsite. We respect your employees, customers, and property throughout every project.

Communication keeps commercial projects on track. We agree on the schedule up front and keep you updated as the work progresses. Our goal is a seamless experience from initial estimate through final walkthrough.

Competitive pricing doesn't mean cutting corners. Your written estimate identifies the complete scope, total price, required deposit and payment schedule before you approve the project.`
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
    "$2M general liability + workers' comp; bonded",
    "Written scope, price, deposit and payment schedule",
    "Transparent, competitive pricing",
    "Offices, retail, restaurants, and warehouses"
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
      answer: OFF_HOURS_ANSWER
    },
    {
      question: "How much does commercial painting cost?",
      answer: COST_ANSWER
    },
    {
      question: "How long does commercial painting take?",
      answer: "Project duration depends on scope and scheduling constraints.  We provide a schedule during the estimate process."
    },
    {
      question: "Do you carry commercial insurance?",
      answer: INSURANCE_ANSWER
    },
    {
      question: "Can you match our brand colors?",
      answer: "Absolutely. We can match any corporate color standard. Provide us with your brand guidelines, Pantone numbers, or physical samples, and we'll ensure precise color matching throughout your space."
    },
    {
      question: "Do you work with property managers?",
      answer: "Yes, we work with property management companies on both individual unit turnovers and common area maintenance."
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
