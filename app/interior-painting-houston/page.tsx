import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/interior-painting-houston-tx',
  },
  title: 'Interior Painting Houston TX | Professional Home Painters | Houston Superior Painting',
  description: 'Expert interior painting services in Houston, Katy & Cypress TX. Walls, ceilings, trim, and accent walls. Factory-finish spray techniques. Free estimates. Call (346) 594-5960.',
  openGraph: {
    title: 'Interior Painting Houston TX | Houston Superior Painting',
    description: 'Transform your home with professional interior painting. Expert color consultation, premium paints, and flawless finishes.',
    type: 'website',
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Interior Painting",
  "provider": { "@type": "Organization", "@id": "https://houstonsuperiorpainting.com/#organization" },
  "areaServed": ["Houston TX", "Katy TX", "Cypress TX"],
  "description": "Professional interior painting services for homes in Houston, including walls, ceilings, trim, and accent walls."
}

const pageData = {
  title: "Interior Painting Services in Houston TX",
  subtitle: "Professional Interior Painters",
  heroDescription: "Transform your living spaces with expert interior painting from Houston Superior Painting. We deliver flawless, brush-mark-free results using factory-finish spray techniques that look better and last longer than traditional methods.",
  sections: [
    {
      title: "Why Houston Homeowners Trust Us for Interior Painting",
      content: `When you invest in interior painting, you deserve results that exceed expectations. At Houston Superior Painting, we combine meticulous preparation, premium materials, and advanced spray application techniques to deliver finishes that rival factory quality.

Our team understands that your home is your sanctuary. We treat every project with the care and respect it deserves, protecting your furniture, floors, and belongings while transforming your walls into works of art. From single accent walls to complete whole-home repaints, we approach each job with the same commitment to excellence.

Houston's humidity and temperature fluctuations demand paint products specifically formulated for our climate. We exclusively use premium paints from Sherwin-Williams and Benjamin Moore that resist moisture, maintain color integrity, and provide lasting durability in our challenging environment.`
    },
    {
      title: "Our Interior Painting Process",
      content: `Every successful paint job starts with thorough preparation. Our process begins with a detailed assessment of your walls, identifying any repairs needed before painting begins. We patch holes, fill cracks, sand rough areas, and prime surfaces to create the perfect canvas for paint application.

We carefully mask and protect all surfaces not being painted, including floors, trim, fixtures, and furniture. Our attention to detail during preparation ensures clean, crisp lines and protects your home throughout the project.

For most interior projects, we utilize professional spray equipment that delivers a smooth, even finish impossible to achieve with brushes and rollers alone. This factory-finish technique eliminates brush marks, lap lines, and roller stipple for truly flawless walls. When spray application isn't appropriate, our skilled painters apply traditional brush and roller techniques with precision that comes from years of experience.`
    },
    {
      title: "Interior Painting Services We Offer",
      content: `Our comprehensive interior painting services cover every surface in your home. We paint living rooms, bedrooms, dining rooms, kitchens, bathrooms, hallways, and basements. Whether you need a fresh coat of white throughout or a bold color transformation, we have the expertise to execute your vision.

We specialize in accent walls that add character and depth to any room. Our color consultation service helps you select the perfect shades that complement your furnishings and reflect your personal style. From trendy grays to timeless neutrals to vibrant statement colors, we guide you through the selection process with confidence.

Ceiling painting requires specialized techniques to prevent drips and ensure even coverage. We handle both flat and textured ceilings, including popcorn ceiling painting and knockdown texture finishes. Trim and molding work demands precision and patience—qualities our painters possess in abundance. We create sharp, clean lines where walls meet trim for a truly professional appearance.`
    }
  ],
  features: [
    "Walls and accent walls",
    "Ceilings (flat and textured)",
    "Trim, baseboards, and crown molding",
    "Doors and door frames",
    "Closets and storage areas",
    "Stairways and railings",
    "Drywall repair and texturing",
    "Color consultation included"
  ],
  benefits: [
    "Factory-finish spray techniques for flawless results",
    "Premium Sherwin-Williams and Benjamin Moore paints",
    "Thorough preparation and surface repair",
    "Clean, professional work with furniture protection",
    "No payment until you're completely satisfied",
    "5-year warranty on all interior work",
    "Bonded and insured team",
    "Flexible scheduling including weekends"
  ],
  beforeAfterImages: [
    {
      before: "/images/interior-before-1.jpg",
      after: "/images/interior-after-1.jpg",
      alt: "Living room interior painting transformation"
    }
  ],
  faqs: [
    {
      question: "How much does interior painting cost in Houston?",
      answer: "Interior painting in Houston typically costs between $2 to $4 per square foot, depending on wall condition, ceiling height, and prep work required. We provide free detailed estimates for accurate pricing."
    },
    {
      question: "How long does it take to paint the interior of a house?",
      answer: "Most interior painting projects take 2-4 days depending on the size of your home and scope of work. A single room can often be completed in one day, while whole-home repaints may take a week."
    },
    {
      question: "Do I need to move my furniture?",
      answer: "We handle furniture moving as part of our service. We carefully relocate items to the center of rooms and cover everything with protective materials. Heavy items can remain in place—we work around them."
    },
    {
      question: "What type of paint do you use?",
      answer: "We exclusively use premium paints from Sherwin-Williams and Benjamin Moore. These brands offer superior coverage, durability, and color retention, especially important in Houston's humid climate."
    },
    {
      question: "How do I choose the right paint colors?",
      answer: "We offer complimentary color consultation to help you select the perfect palette. We consider your existing furnishings, lighting conditions, and personal preferences to recommend colors you'll love for years."
    },
    {
      question: "Is spray painting messy?",
      answer: "Not when done professionally. We thoroughly mask and protect all surfaces before spraying. Our containment procedures prevent overspray, and the result is a cleaner finish than brush and roller application."
    }
  ],
  relatedServices: [
    { title: "Exterior Painting", href: "/exterior-painting-houston-tx" },
    { title: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx" },
    { title: "Drywall Repair", href: "/drywall-repair-houston-tx" },
    { title: "Commercial Painting", href: "/commercial-painting-houston-tx" }
  ]
}

export default function InteriorPaintingPage() {
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
