import type { Metadata } from 'next'
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BeforeAfter } from "@/components/luxury/before-after"
import { RelatedLinks } from "@/components/luxury/related-links"
import { CheckCircle, Phone, Star, Shield, Clock, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Stucco Painting & Repair Houston TX',
  description: 'Expert stucco painting and crack repair in Houston, TX. Elastomeric coatings that flex with heat and humidity. 5-year guarantee. Free estimates.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/stucco-painting-houston-tx',
  },
  openGraph: {
    title: 'Stucco Painting & Repair Houston TX',
    description: 'Expert stucco painting and crack repair in Houston, TX. Elastomeric coatings that flex with Houston heat and humidity. 5-year guarantee.',
    url: 'https://houstonsuperiorpainting.com/stucco-painting-houston-tx',
    siteName: 'Houston Superior Painting',
    type: 'website',
    images: [{
      url: 'https://houstonsuperiorpainting.com/images/og/og-stucco-painting.png',
      width: 1200,
      height: 630,
      alt: 'Stucco Painting and Repair Houston TX - Houston Superior Painting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stucco Painting & Repair Houston TX',
    description: 'Expert stucco painting and crack repair in Houston, TX. Elastomeric coatings, crack repair, 5-year guarantee.',
    images: ['https://houstonsuperiorpainting.com/images/og/og-stucco-painting.png'],
  },
}

const stuccoFaqs = [
  {
    question: "How much does stucco painting cost in Houston?",
    answer: "Most Houston stucco painting projects run $2,500–$8,000 depending on square footage, the number of stories, and how much crack repair is needed. Elastomeric coatings cost more than standard exterior paint but last far longer on stucco. We provide an exact, itemized quote after a free on-site inspection."
  },
  {
    question: "Should I use elastomeric paint on my stucco?",
    answer: "For most Houston homes, yes. Elastomeric coatings are thick, flexible membranes that bridge hairline cracks and stretch with the constant expansion and contraction caused by Houston's heat and humidity. They also waterproof the surface, which is critical in our storm-prone climate. We assess each home and recommend the right product."
  },
  {
    question: "Can you repair cracks in my stucco before painting?",
    answer: "Yes — crack repair is part of every stucco project. We address hairline cracks, larger settlement cracks, and damaged or spalling areas. For structural cracks we identify the underlying cause (often drainage or movement) so the repair lasts instead of reopening in a season."
  },
  {
    question: "How long does stucco painting take?",
    answer: "A typical single-story Houston home takes 3–5 working days including prep, crack repair, and two coats. Larger two-story homes take 5–8 days. Weather and humidity affect cure times, and we always schedule around Houston's rain forecast."
  },
  {
    question: "How often should stucco be repainted in Houston?",
    answer: "With a quality elastomeric coating, Houston stucco typically lasts 8–12 years before needing a refresh. Standard acrylic exterior paint lasts 5–7 years. Homes with heavy sun exposure or near the coast may need attention sooner."
  },
  {
    question: "Do you paint both traditional stucco and synthetic (EIFS)?",
    answer: "Yes. We work on traditional cement stucco and synthetic EIFS systems. Each requires different prep and coatings, so we identify your system during the free inspection and use the correct products and techniques."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": stuccoFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/stucco-painting-houston-tx#service",
  "name": "Stucco Painting & Repair in Houston, TX",
  "description": "Professional stucco painting and crack repair including elastomeric coatings, hairline-to-structural crack repair, spall and patch repair, and waterproofing for traditional cement stucco and synthetic EIFS systems.",
  "serviceType": "Stucco Painting and Repair",
  "provider": { "@id": "https://houstonsuperiorpainting.com/#business" },
  "areaServed": [
    { "@type": "City", "name": "Houston" },
    { "@type": "City", "name": "Katy" },
    { "@type": "City", "name": "Cypress" },
    { "@type": "City", "name": "Sugar Land" },
    { "@type": "City", "name": "Richmond" },
    { "@type": "City", "name": "Fulshear" },
    { "@type": "City", "name": "Pearland" },
    { "@type": "City", "name": "Memorial" },
    { "@type": "City", "name": "The Heights" },
    { "@type": "City", "name": "The Woodlands" }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 2500,
      "maxPrice": 8000,
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Stucco Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elastomeric Coating Application" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hairline and Settlement Crack Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spall and Patch Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stucco Waterproofing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EIFS Synthetic Stucco Painting" } }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our 6-Step Stucco Painting & Repair Process",
  "description": "How Houston Superior Painting restores and protects stucco exteriors in Houston's climate.",
  "totalTime": "P5D",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Inspection and system ID", "text": "We identify whether your home has traditional cement stucco or synthetic EIFS, locate all cracks, and check for moisture and drainage issues." },
    { "@type": "HowToStep", "position": 2, "name": "Pressure cleaning", "text": "We low-pressure wash the entire surface to remove chalk, dirt, mildew, and loose material so the new coating bonds properly." },
    { "@type": "HowToStep", "position": 3, "name": "Crack and spall repair", "text": "Hairline cracks are filled, larger cracks are routed and patched, and damaged areas are rebuilt and textured to match." },
    { "@type": "HowToStep", "position": 4, "name": "Priming and sealing", "text": "We apply a masonry-grade primer and seal repaired areas to create a uniform, durable base." },
    { "@type": "HowToStep", "position": 5, "name": "Elastomeric coating", "text": "Two coats of flexible elastomeric or premium acrylic coating are applied to bridge cracks and waterproof the surface." },
    { "@type": "HowToStep", "position": 6, "name": "Inspection and walkthrough", "text": "We inspect every elevation, touch up as needed, clean the site, and walk the finished project with you for sign-off." }
  ]
}

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".quick-answer", ".hero-h1"]
  }
}

const features = [
  "Elastomeric and premium acrylic coatings",
  "Hairline and settlement crack repair",
  "Spall, chip, and patch repair with texture matching",
  "Synthetic EIFS and traditional cement stucco",
  "Low-pressure washing and surface prep",
  "Masonry primer and sealing",
  "Stucco waterproofing for storm protection",
  "Trim, fascia, and accent painting",
]

const benefits = [
  "Elastomeric coatings that flex with Houston's heat and humidity instead of cracking",
  "Crack repair that addresses the root cause so it doesn't reopen next season",
  "Waterproofing that protects against Houston's heavy storms and wind-driven rain",
  "Same background-checked crew start to finish — no rotating subcontractors",
  "5-year written quality guarantee on every stucco project",
]

const relatedServices = [
  { title: "Exterior Painting Houston TX", href: "/exterior-painting-houston-tx" },
  { title: "Wood Rot Repair Houston TX", href: "/wood-rot-repair-houston-tx" },
  { title: "Limewash & Brick Painting", href: "/limewash-brick-painting-houston-tx" },
  { title: "Soft Washing Houston TX", href: "/soft-washing-houston-tx" },
]

export default function StuccoPaintingHoustonTX() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
              Stucco Painting &amp; Repair
            </p>
            <h1 className="hero-h1 font-display text-4xl md:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
              Stucco Painting &amp; Crack Repair in Houston, TX
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto">
              Flexible elastomeric coatings and lasting crack repair built for Houston&apos;s heat, humidity, and storms. Free estimates. 5-year quality guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get My Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground !bg-transparent !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary" asChild>
                <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (346) 594-5960
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="py-6 bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-center text-sm lg:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-medium">500+ Houston Homes Painted</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-medium">4.9 Rating (200+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-medium">Background-Checked Crew</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="font-medium">Fully Insured</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Houston Superior Painting provides expert stucco painting and crack repair across Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, and The Woodlands. Most projects cost $2,500–$8,000, take 3–5 days for a typical single-story home, and use flexible elastomeric coatings that bridge cracks and waterproof the surface against Houston&apos;s climate. Every job is backed by our written 5-year quality guarantee. Free estimates at (346) 594-5960.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 lg:py-20 max-w-4xl">
          {/* Before & After */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Real Houston Stucco Transformation
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl">
              This Houston exterior went from cracked, chalky, faded stucco to a flawless, waterproofed elastomeric finish in a warm modern tone — drag the slider to compare.
            </p>
            <BeforeAfter
              beforeSrc="/images/stucco-before-1.png"
              afterSrc="/images/stucco-after-1.png"
              beforeAlt="Before: cracked and faded stucco on a Houston home exterior"
              afterAlt="After: smooth repaired and freshly painted stucco with elastomeric coating"
            />
          </section>

          {/* Why choose */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Why Houston Homeowners Choose Us for Stucco
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Houston&apos;s climate is brutal on stucco. Constant heat expansion, high humidity, clay soil movement, and wind-driven rain open hairline cracks and let moisture behind the surface — where it does real damage. Painting over stucco with the wrong product just hides the problem for a season. Our approach fixes the cause and protects the wall:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What's included */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What&apos;s Included in Stucco Painting &amp; Repair
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our 6-Step Stucco Process
            </h2>
            <ol className="space-y-6">
              {howToSchema.step.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{i + 1}</span>
                  <div>
                    <strong className="text-foreground">{step.name}.</strong>
                    <p className="text-foreground/80 mt-1 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {stuccoFaqs.map((faq, i) => (
                <div key={i} className="border-b border-border pb-6 last:border-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16 bg-primary rounded-xl p-8 md:p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Protect Your Stucco Before the Next Storm
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Get a free, no-obligation stucco inspection and itemized estimate from Houston&apos;s prep-first painting team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                <Link href="/contact">Schedule Free Estimate</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground/10">
                <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (346) 594-5960
                </a>
              </Button>
            </div>
          </section>

          {/* Related */}
          <section>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <span className="font-medium text-foreground">{service.title}</span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <RelatedLinks exclude="/stucco-painting-houston-tx" />
      <Footer />
    </>
  )
}
