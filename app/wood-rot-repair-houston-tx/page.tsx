import type { Metadata } from 'next'
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BeforeAfter } from "@/components/luxury/before-after"
import { RelatedLinks } from "@/components/luxury/related-links"
import { CheckCircle, Phone, Star, Shield, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Wood Rot Repair Houston TX | Trim, Fascia & Siding',
  description: 'Wood rot repair and replacement in Houston, TX before painting. Fascia, soffits, trim, siding, and columns. 5-year guarantee. Free estimates.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/wood-rot-repair-houston-tx',
  },
  openGraph: {
    title: 'Wood Rot Repair Houston TX — Houston Superior Painting',
    description: 'Wood rot repair and replacement in Houston, TX before painting. Fascia, soffits, trim, siding, and window sills. 5-year guarantee.',
    url: 'https://houstonsuperiorpainting.com/wood-rot-repair-houston-tx',
    siteName: 'Houston Superior Painting',
    type: 'website',
    images: [{
      url: 'https://houstonsuperiorpainting.com/images/og/og-wood-rot-repair.png',
      width: 1200,
      height: 630,
      alt: 'Wood Rot Repair Houston TX - Houston Superior Painting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wood Rot Repair Houston TX — Houston Superior Painting',
    description: 'Wood rot repair and replacement in Houston before painting. Fascia, soffits, trim, siding, and window sills. 5-year guarantee.',
    images: ['https://houstonsuperiorpainting.com/images/og/og-wood-rot-repair.png'],
  },
}

const woodRotFaqs = [
  {
    question: "How much does wood rot repair cost in Houston?",
    answer: "Most wood rot repairs run $300–$2,500 depending on how many boards are affected and their location. Isolated trim or a single fascia board is on the low end; widespread fascia, soffit, or siding replacement is higher. We give an exact price after inspecting the damage — and we only replace what truly needs it."
  },
  {
    question: "Why does wood rot happen so often in Houston?",
    answer: "Houston's high humidity, frequent heavy rain, and long summers create the perfect environment for moisture intrusion and fungal decay. Fascia, soffits, window sills, door trim, and bottom siding boards are the most common victims because they take the most water exposure."
  },
  {
    question: "Do you replace the wood or just fill it?",
    answer: "It depends on the damage. Small, surface-level soft spots can be treated and filled with a structural epoxy filler. Boards that are structurally compromised or more than about 25% decayed are fully replaced with primed, rot-resistant material. We'll always tell you which approach your home needs and why."
  },
  {
    question: "Can you repair the rot and paint in the same project?",
    answer: "Yes — that's the ideal way to do it. We repair or replace the rotted wood, prime the new material, then paint it to match seamlessly with the rest of your exterior. Doing both together means one crew, one mobilization, and a finish that looks original."
  },
  {
    question: "How do you stop the rot from coming back?",
    answer: "Rot is a moisture problem first. We identify why water reached the wood — failed caulk, poor flashing, gutter overflow, or ground contact — and correct it as part of the repair. Then we use primed, sealed, rot-resistant materials and quality caulk so the fix actually lasts."
  },
  {
    question: "What areas do you repair?",
    answer: "Fascia boards, soffits, exterior trim and casing, window and door sills, wood siding, porch columns, posts, beams, and decorative millwork. If it's exterior wood and it's failing, we can repair or replace it."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": woodRotFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/wood-rot-repair-houston-tx#service",
  "name": "Wood Rot Repair in Houston, TX",
  "description": "Exterior wood rot repair and replacement including fascia, soffits, trim, siding, window sills, columns, and millwork. Moisture-source correction, structural epoxy repair, primed rot-resistant replacement, and seamless repainting.",
  "serviceType": "Wood Rot Repair",
  "provider": { "@id": "https://houstonsuperiorpainting.com/#organization" },
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
      "minPrice": 300,
      "maxPrice": 2500,
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wood Rot Repair Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fascia and Soffit Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Trim and Casing Replacement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window and Door Sill Repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wood Siding Replacement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Porch Column and Post Repair" } }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our 5-Step Wood Rot Repair Process",
  "description": "How Houston Superior Painting repairs exterior wood rot and prevents it from returning.",
  "totalTime": "P3D",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Inspection and moisture source", "text": "We probe all suspect wood, map the full extent of the rot, and identify the moisture source — failed caulk, flashing, gutters, or ground contact." },
    { "@type": "HowToStep", "position": 2, "name": "Remove and repair", "text": "We remove decayed wood. Minor soft spots are treated and rebuilt with structural epoxy; compromised boards are fully replaced with primed, rot-resistant material." },
    { "@type": "HowToStep", "position": 3, "name": "Correct the cause", "text": "We fix the underlying moisture issue — re-caulking, sealing, adjusting flashing, or improving drainage — so the repair lasts." },
    { "@type": "HowToStep", "position": 4, "name": "Prime and seal", "text": "All new and repaired wood is primed on every face and the seams are caulked to lock out future moisture." },
    { "@type": "HowToStep", "position": 5, "name": "Paint to match", "text": "We finish-paint the repaired areas to blend seamlessly with your existing exterior, then walk the project with you for sign-off." }
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
  "Fascia and soffit repair and replacement",
  "Exterior trim, casing, and molding",
  "Window and door sill repair",
  "Wood siding board replacement",
  "Porch columns, posts, and beams",
  "Structural epoxy repair for minor damage",
  "Moisture-source correction (caulk, flashing, drainage)",
  "Priming and seamless repainting",
]

const benefits = [
  "We fix the moisture source so the rot doesn't simply return next year",
  "Primed, rot-resistant replacement materials built for Houston humidity",
  "Repaired areas painted to match seamlessly — the fix is invisible",
  "Honest assessment: we only replace what genuinely needs replacing",
  "5-year written quality guarantee on every project",
]

const relatedServices = [
  { title: "Exterior Painting Houston TX", href: "/exterior-painting-houston-tx" },
  { title: "Stucco Painting & Repair Houston TX", href: "/stucco-painting-houston-tx" },
  { title: "Drywall Repair Houston TX", href: "/drywall-repair-houston-tx" },
  { title: "Soft Washing Houston TX", href: "/soft-washing-houston-tx" },
]

export default function WoodRotRepairHoustonTX() {
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
              Wood Rot Repair
            </p>
            <h1 className="hero-h1 font-display text-4xl md:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
              Wood Rot Repair in Houston, TX
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto">
              Fascia, soffits, trim, siding, and sills repaired and repainted to look original. We fix the moisture source, not just the symptom. Free estimates. 5-year quality guarantee.
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
              Houston Superior Painting repairs and replaces rotted exterior wood — fascia, soffits, trim, siding, window sills, and columns — across Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, and The Woodlands. Most repairs cost $300–$2,500, and we correct the moisture source so the rot doesn&apos;t return, then prime and paint to match seamlessly. Backed by our written 5-year quality guarantee. Free estimates at (346) 594-5960.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 lg:py-20 max-w-4xl">
          {/* Before & After */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Real Houston Wood Rot Repair
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Decayed, peeling fascia and trim rebuilt with primed, rot-resistant material and painted crisp white to match the rest of the home — drag the slider to compare.
            </p>
            <BeforeAfter
              beforeSrc="/images/wood-rot-before-1.png"
              afterSrc="/images/wood-rot-after-1.png"
              beforeAlt="Before: rotted and peeling exterior wood fascia and trim on a Houston home"
              afterAlt="After: restored and freshly painted crisp white wood fascia and trim"
            />
          </section>

          {/* Why choose */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Why Houston Homeowners Choose Us for Wood Rot
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Most painters paint right over soft, rotted wood — or replace a board without ever asking why it failed. Within a year or two the rot is back. Because wood rot is fundamentally a moisture problem, lasting repair means finding and fixing the water intrusion first. That&apos;s how we work:
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
              What We Repair
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
              Our 5-Step Wood Rot Repair Process
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
              {woodRotFaqs.map((faq, i) => (
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
              Catch Wood Rot Before It Spreads
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              A small repair today prevents a major one later. Get a free, no-obligation inspection and itemized estimate from Houston&apos;s prep-first painting team.
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
      <RelatedLinks exclude="/wood-rot-repair-houston-tx" />
      <Footer />
    </>
  )
}
