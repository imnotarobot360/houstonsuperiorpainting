import type { Metadata } from 'next'
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BeforeAfter } from "@/components/luxury/before-after"
import { RelatedLinks } from "@/components/luxury/related-links"
import { CheckCircle, Phone, Star, Shield, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: 'Wallpaper Removal Houston TX | Repair & Painting',
  description: 'Professional wallpaper removal in Houston, TX. Clean removal, wall repair and skim coating, and a flawless painted finish. 5-year guarantee.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/wallpaper-removal-houston-tx',
  },
  openGraph: {
    title: 'Wallpaper Removal Houston TX — Houston Superior Painting',
    description: 'Professional wallpaper removal in Houston, TX. Clean removal, wall repair, and a flawless painted finish. 5-year guarantee.',
    url: 'https://houstonsuperiorpainting.com/wallpaper-removal-houston-tx',
    siteName: 'Houston Superior Painting',
    type: 'website',
    images: [{
      url: 'https://houstonsuperiorpainting.com/images/og/og-wallpaper-removal.png',
      width: 1200,
      height: 630,
      alt: 'Wallpaper Removal Houston TX - Houston Superior Painting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallpaper Removal Houston TX — Houston Superior Painting',
    description: 'Professional wallpaper removal in Houston. Clean removal, wall repair, and a flawless painted finish. 5-year guarantee.',
    images: ['https://houstonsuperiorpainting.com/images/og/og-wallpaper-removal.png'],
  },
}

const wallpaperFaqs = [
  {
    question: "How much does wallpaper removal cost in Houston?",
    answer: "Most Houston wallpaper removal projects run $3–$8 per square foot of wall depending on how many layers there are, the type of adhesive, and how well the drywall was prepped originally. Rooms where wallpaper was hung directly on unprimed drywall take more labor. We provide an exact quote after seeing the walls."
  },
  {
    question: "Do you repair the walls after removing wallpaper?",
    answer: "Yes — wall repair is included. Removal almost always leaves behind adhesive residue, torn paper facing, or small gouges. We clean off all glue, patch and skim-coat damaged areas, sand smooth, and prime so the surface is paint-ready and flawless."
  },
  {
    question: "Will removing wallpaper damage my drywall?",
    answer: "Not when it's done correctly. We use controlled steaming and proper scoring rather than aggressive scraping, which protects the drywall facing. If previous wallpaper was installed without primer and some facing tears, we repair and skim-coat it as part of the project so you'd never know."
  },
  {
    question: "Can you remove wallpaper and paint in the same project?",
    answer: "Absolutely — and it's the most efficient way to do it. We remove the wallpaper, repair and prime the walls, then paint your chosen color for a clean, modern finish. One crew handles the whole transformation from dated wallpaper to a fresh painted room."
  },
  {
    question: "Is it better to remove wallpaper or paint over it?",
    answer: "Removal is almost always the right answer. Painting over wallpaper traps the seams and edges, which telegraph through the paint and can bubble as adhesive reacts with moisture in Houston's humidity. Proper removal gives you a smooth, durable surface that looks far better and lasts."
  },
  {
    question: "How long does wallpaper removal take?",
    answer: "A single room typically takes 1–2 days for removal and wall prep, plus painting time. Multiple rooms or heavily layered wallpaper take longer. We give you a clear timeline before we start and protect your floors and furniture throughout."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": wallpaperFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/wallpaper-removal-houston-tx#service",
  "name": "Wallpaper Removal in Houston, TX",
  "description": "Professional wallpaper removal including controlled steam removal, adhesive cleanup, drywall repair and skim coating, priming, and a flawless painted finish for Houston homes.",
  "serviceType": "Wallpaper Removal",
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
      "minPrice": 3,
      "maxPrice": 8,
      "priceCurrency": "USD",
      "unitText": "per square foot"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wallpaper Removal Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Steam Wallpaper Removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Adhesive and Glue Cleanup" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair and Skim Coating" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wall Priming" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Finish Painting" } }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our 5-Step Wallpaper Removal Process",
  "description": "How Houston Superior Painting removes wallpaper and delivers a flawless painted finish.",
  "totalTime": "P2D",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Protect the room", "text": "We cover floors, move and wrap furniture, and mask trim and outlets before any removal begins." },
    { "@type": "HowToStep", "position": 2, "name": "Score and steam", "text": "We score the wallpaper and use controlled steam to loosen the adhesive, lifting the paper cleanly without gouging the drywall." },
    { "@type": "HowToStep", "position": 3, "name": "Remove adhesive", "text": "All remaining glue and paste residue is washed off the wall — a step many skip that causes paint failure later." },
    { "@type": "HowToStep", "position": 4, "name": "Repair and skim coat", "text": "We patch gouges, skim-coat uneven areas, sand smooth, and prime to create a flawless, paint-ready surface." },
    { "@type": "HowToStep", "position": 5, "name": "Paint and walkthrough", "text": "We apply your chosen color for a clean modern finish, then walk the finished room with you for sign-off." }
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
  "Controlled steam wallpaper removal",
  "Multi-layer and stubborn adhesive removal",
  "Complete glue and paste cleanup",
  "Drywall patching and skim coating",
  "Sanding and surface smoothing",
  "Primer for a paint-ready surface",
  "Finish painting in your chosen color",
  "Full floor and furniture protection",
]

const benefits = [
  "Controlled steaming protects your drywall instead of gouging it",
  "Complete adhesive removal so your new paint never bubbles or peels",
  "Skim coating and priming for a truly smooth, modern finish",
  "One crew takes you from dated wallpaper to a freshly painted room",
  "5-year written quality guarantee on the painted finish",
]

const relatedServices = [
  { title: "Interior Painting Houston TX", href: "/interior-painting-houston-tx" },
  { title: "Drywall Repair Houston TX", href: "/drywall-repair-houston-tx" },
  { title: "Cabinet Refinishing Houston TX", href: "/cabinet-refinishing-houston-tx" },
  { title: "Stucco Painting & Repair Houston TX", href: "/stucco-painting-houston-tx" },
]

export default function WallpaperRemovalHoustonTX() {
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
              Wallpaper Removal
            </p>
            <h1 className="hero-h1 font-display text-4xl md:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
              Wallpaper Removal in Houston, TX
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto">
              Clean, damage-free removal, expert wall repair, and a flawless painted finish — from dated wallpaper to a fresh modern room. Free estimates. 5-year quality guarantee.
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
              Houston Superior Painting removes wallpaper and delivers a flawless painted finish across Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, and The Woodlands. Most projects cost $3–$8 per square foot, take 1–2 days per room, and include controlled steam removal, full adhesive cleanup, drywall repair, and painting. Every job is backed by our written 5-year quality guarantee. Free estimates at (346) 594-5960.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 lg:py-20 max-w-4xl">
          {/* Before & After */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Real Houston Wallpaper Transformation
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Dated floral wallpaper removed, walls skim-coated smooth, and repainted in a clean modern neutral — drag the slider to compare.
            </p>
            <BeforeAfter
              beforeSrc="/images/wallpaper-before-1.png"
              afterSrc="/images/wallpaper-after-1.png"
              beforeAlt="Before: dated floral wallpaper on a Houston interior wall"
              afterAlt="After: smooth walls freshly painted in a modern neutral color"
            />
          </section>

          {/* Why choose */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Why Houston Homeowners Choose Us for Wallpaper Removal
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Wallpaper removal is one of the messiest, most frustrating DIY projects — and a rushed job leaves gouged drywall, glue residue, and walls that ruin the new paint. Our process protects your drywall and delivers a truly smooth, paint-ready surface:
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
              What&apos;s Included
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
              Our 5-Step Wallpaper Removal Process
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
              {wallpaperFaqs.map((faq, i) => (
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
              Ready to Lose the Wallpaper?
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Get a free, no-obligation estimate and let Houston&apos;s prep-first painting team take your room from dated to fresh.
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
      <RelatedLinks exclude="/wallpaper-removal-houston-tx" />
      <Footer />
    </>
  )
}
