import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Breadcrumb parent for each service family. Several `${slug}-houston-tx`
// URLs are 301 sources (see next.config.mjs), so link straight to the hub.
const SERVICE_HUB: Record<string, string> = {
  "brick-painting": "/limewash-brick-painting-houston-tx",
  "limewash-decorative-finishes": "/limewash-brick-painting-houston-tx",
  "luxury-exterior-painting": "/luxury-house-painters-houston",
  "luxury-house-painters": "/luxury-house-painters-houston",
  "luxury-interior-painting": "/luxury-house-painters-houston",
}
import { Phone, MessageSquare, CheckCircle, Shield, Award, Clock, Star, Users } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface Testimonial {
  quote: string
  name: string
  location: string
}

interface GeoServicePageProps {
  // Meta
  service: string
  serviceSlug: string
  zone: string
  zoneSlug: string
  metaTitle: string
  metaDescription: string
  
  // Hero
  h1: string
  heroSubheading: string
  
  // Content
  introLocal: string
  serviceOverview: string
  whyChooseUs: string[]
  
  // Pricing
  priceRange: string
  priceMin: number
  priceMax: number
  priceDetails: string
  
  // FAQs
  faqs: FAQ[]
  
  // Testimonials
  testimonials: Testimonial[]
  
  // Related pages
  relatedPages: { title: string; href: string }[]
  
  // Warranty info
  warrantyYears: number
  warrantyType: string
}

export function GeoServicePageTemplate({
  service,
  serviceSlug,
  zone,
  zoneSlug,
  metaTitle,
  metaDescription,
  h1,
  heroSubheading,
  introLocal,
  serviceOverview,
  whyChooseUs,
  priceRange,
  priceMin,
  priceMax,
  priceDetails,
  faqs,
  testimonials,
  relatedPages,
  warrantyYears,
  warrantyType,
}: GeoServicePageProps) {
  const phone = "(346) 594-5960"
  const phoneLink = "tel:+13465945960"
  const smsLink = "sms:+13465945960"
  
  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
  
  // Generate Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service} in ${zone}`,
    "provider": {
      "@type": "PaintingContractor",
      "name": "Houston Superior Painting",
      "telephone": "+1-346-594-5960"
    },
    "areaServed": {
      "@type": "Place",
      "name": `${zone}, TX`
    },
    "description": metaDescription,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": priceMin.toString(),
        "maxPrice": priceMax.toString(),
        "priceCurrency": "USD"
      }
    }
  }

  const processSteps = [
    { day: "Day 0", title: "Free Consultation", description: "In-home consultation with color samples and a written estimate" },
    { day: "Day 1", title: "Surface Preparation", description: "Dust removal, patching, sanding, caulking, and tinted spot-priming" },
    { day: "Day 2", title: "Protection", description: "Furniture moved or covered, floors fully protected with drop cloths" },
    { day: "Day 3", title: "Application", description: "Cut-in by hand, walls rolled or sprayed depending on substrate" },
    { day: "Day 4", title: "Progress Update", description: "Daily cleanup, foreman walk-through, and same-day photo updates" },
    { day: "Day 5", title: "Final Inspection", description: "Walk-through with you, touch-ups, and warranty paperwork" },
  ]

  const trustSignals = [
    "Fully Insured — $2M General Liability + Workers' Comp",
    "EPA Lead-Safe Certified (RRP)",
    "Sherwin-Williams & Benjamin Moore Preferred Contractor",
    "Family-Owned & Operated since 2019",
    "5-Star Reviews on Google",
    "Bilingual Foremen on Every Job",
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm text-primary-foreground/70">
                <Link href="/" className="hover:text-primary-foreground">Home</Link>
                <span className="mx-2">/</span>
                <Link href={SERVICE_HUB[serviceSlug] ?? `/${serviceSlug}-houston-tx`} className="hover:text-primary-foreground">{service}</Link>
                <span className="mx-2">/</span>
                <span>{zone}</span>
              </nav>
              
              <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
                {service} · {zone}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-[1.05]">
                {h1}
              </h1>
              
              <p className="font-cormorant text-2xl lg:text-3xl text-primary-foreground/85 mb-8 leading-relaxed max-w-3xl">
                {heroSubheading}
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm">
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Fully Insured
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  4.9 Google Reviews
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Family-Owned
                </span>
                <span className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  EPA Lead-Safe Certified
                </span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold" asChild>
                  <Link href="/contact">Get My Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground !bg-transparent !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary" asChild>
                  <a href={phoneLink} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call {phone}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/50 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary" asChild>
                  <a href={smsLink} className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Text Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-muted py-6 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {trustSignals.slice(0, 4).map((signal, index) => (
                <span key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {signal.split(' — ')[0]}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Local Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{service} Services in {zone}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {introLocal}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {serviceOverview}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Why {zone} Homeowners Choose Us</h2>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">Our {service} Process</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, index) => (
                  <Card key={index} className="relative">
                    <CardContent className="pt-6">
                      <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {step.day}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 mt-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">What {zone} Clients Say</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                    <CardContent className="pt-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-primary-foreground/90 text-sm mb-4 italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <p className="text-primary-foreground font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-primary-foreground/70 text-xs">
                        {testimonial.location}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Pricing for {service} in {zone}</h2>
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-primary mb-4">{priceRange}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {priceDetails}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href="/contact">Get Your Free Estimate</Link>
                    </Button>
                    <p className="text-sm text-muted-foreground self-center">
                      0% APR financing available on projects over $5,000
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Trust Deep Dive */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Our Guarantees</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{signal}</span>
                  </div>
                ))}
                <div className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{warrantyYears}-Year Written {warrantyType} Warranty</span>
                </div>
                <div className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Daily SMS Photo Updates Throughout Project</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready for a Quote You Can Trust?</h2>
            <p className="text-lg mb-8 opacity-90">
              Free in-home consultation + color samples. 5-star reviews. {warrantyYears}-year {warrantyType.toLowerCase()} warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link href="/contact">Get My Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground !bg-transparent !text-secondary-foreground hover:!bg-secondary-foreground hover:!text-secondary" asChild>
                <a href={phoneLink} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call {phone}
                </a>
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-80">
              Typical response in under 5 minutes during business hours
            </p>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{service} in Other Areas</h2>
              <div className="flex flex-wrap gap-3">
                {relatedPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.href}
                    className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
