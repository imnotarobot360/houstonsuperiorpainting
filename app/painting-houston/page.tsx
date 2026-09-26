import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone } from 'lucide-react'
import { InsightPaintWidget } from '@/components/insightpaint-widget'

export const metadata: Metadata = {
  title: 'Houston Painting Experts | Houston Superior Painting',
  description: 'Houston Superior Painting is a professional residential painting company serving Houston, Katy, and Cypress, Texas. Get a free estimate today.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painting-houston',
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to paint a house in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Painting a house in Houston typically costs between $3 to $6 per square foot depending on preparation and size."
      }
    },
    {
      "@type": "Question",
      "name": "How long does exterior paint last in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Exterior paint lasts around 5 to 7 years in Houston depending on weather and preparation."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need pressure washing before painting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, pressure washing is essential to remove dirt and ensure proper paint adhesion."
      }
    },
    {
      "@type": "Question",
      "name": "What type of paint is best for Houston homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High-quality acrylic paints from Sherwin-Williams or Benjamin Moore perform best in Houston's climate."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to paint a house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential projects take between 2 to 5 days depending on size and preparation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free estimates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide free estimates with no obligation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you require upfront payment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No upfront payment is required. Payment is made after completion."
      }
    }
  ]
}

const localBusinessSchema = { "@context": "https://schema.org", "@type": "WebPage", "about": { "@id": "https://houstonsuperiorpainting.com/#organization" } }

const services = [
  "Interior Painting",
  "Exterior Painting", 
  "Cabinet Painting",
  "Drywall Repair",
  "Pressure Washing",
  "Light Remodeling"
]

const preparationSteps = [
  "Pressure washing before painting",
  "Repairing cracks and damaged surfaces",
  "Using high-quality primers and paints",
  "Applying coatings designed for Houston weather",
  "Professional application techniques"
]

const faqs = [
  {
    question: "How much does it cost to paint a house in Houston?",
    answer: "The cost to paint a house in Houston typically ranges between $3 to $6 per square foot depending on size, condition, and preparation needed."
  },
  {
    question: "How long does exterior paint last in Houston?",
    answer: "Exterior paint in Houston usually lasts between 5 to 7 years due to heat and humidity. Proper preparation can extend this lifespan."
  },
  {
    question: "Do I need pressure washing before painting?",
    answer: "Yes. Pressure washing removes dirt and mildew, allowing paint to properly adhere and last longer."
  },
  {
    question: "What type of paint is best for Houston homes?",
    answer: "High-quality acrylic paints from Sherwin-Williams or Benjamin Moore perform best in Houston's climate."
  },
  {
    question: "How long does it take to paint a house?",
    answer: "Most residential projects take between 2 to 5 days depending on size and preparation."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes. We provide free estimates with no obligation."
  },
  {
    question: "Do you require upfront payment?",
    answer: "No upfront payment is required. Payment is made after completion."
  }
]

const commonSearches = [
  "Best painters in Houston Texas",
  "Affordable house painters near me",
  "Exterior painting Houston TX cost",
  "Cabinet painting Houston professionals",
  "Interior painters Katy TX"
]

export default function PaintingHoustonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground text-center text-balance">
              Houston Painting Experts – Cost, Tips &amp; Best Painters in Houston TX
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Houston Superior Painting is a professional residential painting company serving Houston, Katy, and Cypress, Texas. We specialize in interior painting, exterior painting, cabinet refinishing, drywall repair, and light remodeling.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Painting in Houston requires expertise due to extreme heat, humidity, and storms. Our process focuses on detailed preparation to ensure long-lasting results.
            </p>
          </section>

          {/* Why Painting Fails */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Why Painting Fails in Houston Weather
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Houston&apos;s climate is one of the toughest for paint. Heat, humidity, and storms can cause peeling, cracking, and fading if surfaces are not properly prepared. Many painters skip preparation, which leads to early failure.
            </p>
            <p className="text-foreground leading-relaxed">
              At Houston Superior Painting, we focus on proper preparation, sealing, and priming to ensure durability.
            </p>
          </section>

          {/* What Makes Paint Last */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              What Makes a Paint Job Last Longer?
            </h2>
            <ul className="space-y-3">
              {preparationSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Frequently Asked Questions About Painting in Houston
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Painting Services in Houston, Katy, and Cypress
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              We proudly serve homeowners in Houston, Katy, Cypress, and surrounding areas, providing painting solutions designed for Texas weather conditions.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA Section */}
          <section className="mb-12 bg-card rounded-xl p-8 border border-border text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Get a Free Painting Estimate
            </h2>
            <p className="text-muted-foreground mb-6">
              Looking for reliable house painters in Houston? Send us photos for a free quote in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/contact">
                  Send Photos for a Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+13465945960">
                  <Phone className="h-4 w-4 mr-2" />
                  (346) 594-5960
                </a>
              </Button>
            </div>
          </section>

          {/* InsightPaint Scheduler Embed */}
          <section className="mb-12">
            <div className="w-full rounded-xl overflow-hidden border border-border p-2">
              <InsightPaintWidget minHeight={700} className="w-full" />
            </div>
          </section>

          {/* Common Searches */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Common Searches We Answer
            </h2>
            <ul className="space-y-2">
              {commonSearches.map((search, index) => (
                <li key={index} className="text-muted-foreground">
                  {search}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
