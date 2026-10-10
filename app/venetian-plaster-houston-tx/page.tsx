import { ReviewsInline } from "@/components/office-reviews"
import { BUSINESS } from "@/lib/business"
import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { RelatedLinks } from "@/components/luxury/related-links"
import { FinishComparison } from "@/components/luxury/finish-comparison"
import { CheckCircle, Phone, Star, Shield, Clock, Users, ArrowRight } from "lucide-react"

/**
 * Real photographs of completed Houston work. These replaced a before/after
 * slider that paired two stock renders of unrelated rooms under the heading
 * "Real Houston Venetian Plaster Transformation" — the finishes, rooms and
 * lighting did not match, so it implied a single job that never existed.
 *
 * Only add genuine project photography here. If a real before shot of one of
 * these rooms turns up, a slider can come back for that specific room.
 */
const plasterProjects = [
  {
    src: "/images/venetian-plaster-greige-hallway.jpg",
    alt: "Greige polished Venetian plaster walls and ceiling in a Houston hallway with light oak flooring",
    caption:
      "Soft greige plaster carried across both walls and the ceiling of an entry hallway. The cloudy movement is created by hand troweling, not paint.",
    aspect: "aspect-[4/5]",
    span: "",
  },
  {
    src: "/images/venetian-plaster-charcoal-wall.jpg",
    alt: "Charcoal Venetian plaster feature wall in a Houston commercial interior with a plastered switch plate",
    caption:
      "A charcoal feature wall with vertical brush movement. The switch plate was plastered to match so the surface reads as one continuous piece of stone.",
    aspect: "aspect-[4/5]",
    span: "",
  },
  {
    src: "/images/venetian-plaster-terracotta-ceiling.jpg",
    alt: "Terracotta Venetian plaster on a tray ceiling and walls of a Houston dining room, photographed mid-project with scaffolding in place",
    caption:
      "Terracotta plaster on a tray ceiling and walls, photographed mid-project with scaffolding and floor protection still in place. Ceilings like this are troweled overhead in stages.",
    aspect: "aspect-[16/10]",
    span: "sm:col-span-2",
  },
]

export const metadata: Metadata = {
  title: 'Venetian Plaster Houston TX | Polished Finishes',
  description: 'Authentic Venetian and polished plaster in Houston, TX. Hand-troweled lime plaster with marble-like depth for feature walls and ceilings.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/venetian-plaster-houston-tx',
  },
  openGraph: {
    title: 'Venetian Plaster Houston TX — Houston Superior Painting',
    description: 'Authentic hand-troweled Venetian plaster and polished plaster finishes for Houston luxury interiors. Marble-like depth and sheen. 5-year guarantee.',
    url: 'https://houstonsuperiorpainting.com/venetian-plaster-houston-tx',
    siteName: 'Houston Superior Painting',
    type: 'website',
    images: [{
      url: 'https://houstonsuperiorpainting.com/images/og/og-venetian-plaster.png',
      width: 1200,
      height: 630,
      alt: 'Venetian Plaster Houston TX - Houston Superior Painting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venetian Plaster Houston TX — Houston Superior Painting',
    description: 'Authentic hand-troweled Venetian plaster and polished plaster finishes for Houston luxury interiors. 5-year guarantee.',
    images: ['https://houstonsuperiorpainting.com/images/og/og-venetian-plaster.png'],
  },
}

const venetianFaqs = [
  {
    question: "How much does Venetian plaster cost in Houston?",
    answer: "Venetian plaster in Houston typically runs $8–$20 per square foot depending on the finish, the number of coats, and wall preparation. A single feature wall often falls between $1,500 and $4,000, while whole-room or ceiling applications cost more. Because it is a hand-troweled, multi-coat artisan finish, pricing reflects skilled labor. We provide an exact quote after a free in-home consultation."
  },
  {
    question: "What is the difference between Venetian plaster and faux finish paint?",
    answer: "Authentic Venetian plaster is a lime- or marble-dust-based material applied in thin, hand-troweled layers and burnished to a stone-like depth and sheen. Faux finishes are glazes painted over a base coat to mimic texture. Real Venetian plaster has genuine dimension, subtle movement, and a tactile surface that paint simply cannot reproduce."
  },
  {
    question: "Where can Venetian plaster be applied?",
    answer: "Venetian plaster works beautifully on interior feature walls, full rooms, ceilings, fireplace surrounds, entryways, and columns. It can be applied over properly prepared drywall, masonry, and existing smooth surfaces. We assess each surface during the consultation and prep it for a flawless result."
  },
  {
    question: "How long does Venetian plaster take to install?",
    answer: "A single feature wall usually takes 2–4 days because each coat must cure before the next is troweled and the surface is finally burnished and sealed. Larger rooms and ceilings take longer. We never rush the cure times — that patience is what produces the depth and durability the finish is known for."
  },
  {
    question: "Is Venetian plaster durable in Houston's humidity?",
    answer: "Yes. True lime-based Venetian plaster is breathable and naturally resists mold and mildew, which makes it well suited to Houston's humidity. Once sealed, it is hard, washable, and lasts for decades — far longer than standard paint. It is one of the most durable decorative finishes available."
  },
  {
    question: "Can you match a specific color or look?",
    answer: "Absolutely. Venetian plaster can be tinted to a wide range of colors and finished anywhere from a soft matte to a high marble-like polish. We bring samples, discuss the look you want, and can create a custom sample board so you approve the exact color and sheen before we begin."
  }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": venetianFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/venetian-plaster-houston-tx#service",
  "name": "Venetian Plaster in Houston, TX",
  "description": "Authentic hand-troweled Venetian plaster and polished plaster finishes including feature walls, ceilings, fireplace surrounds, and full-room applications using lime-based artisan plaster for Houston luxury interiors.",
  "serviceType": "Venetian Plaster and Polished Plaster Finishes",
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
      "minPrice": 1500,
      "maxPrice": 12000,
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Venetian Plaster Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Venetian Plaster Feature Walls" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Polished Plaster Ceilings" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fireplace Surround Plaster Finishes" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Room Lime Plaster Application" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Color and Sheen Matching" } }
    ]
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Our 6-Step Venetian Plaster Process",
  "description": "How Houston Superior Painting creates authentic hand-troweled Venetian plaster finishes in Houston homes.",
  "totalTime": "P4D",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Design consultation", "text": "We discuss the look you want, bring samples, and create a custom sample board so you approve the exact color, depth, and sheen before any work begins." },
    { "@type": "HowToStep", "position": 2, "name": "Surface preparation", "text": "We repair imperfections and skim the surface to a smooth, sound base, then prime so the plaster bonds and the final finish reads perfectly even." },
    { "@type": "HowToStep", "position": 3, "name": "First plaster coat", "text": "We hand-trowel the first thin layer of lime-based plaster, building the foundation for the depth and movement of the finish." },
    { "@type": "HowToStep", "position": 4, "name": "Build-up coats", "text": "Additional thin coats are troweled at varied angles once each has cured, layering the subtle marble-like variation that defines true Venetian plaster." },
    { "@type": "HowToStep", "position": 5, "name": "Burnishing", "text": "We burnish the cured surface by hand to bring up the signature polished sheen and stone-like smoothness." },
    { "@type": "HowToStep", "position": 6, "name": "Sealing and walkthrough", "text": "We seal the finish for durability and washability, clean the site, and walk the completed work with you for sign-off." }
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
  "Authentic lime-based Venetian plaster",
  "Hand-troweled multi-coat application",
  "Feature walls, full rooms, and ceilings",
  "Fireplace surrounds, entryways, and columns",
  "Custom color tinting and sample boards",
  "Matte to high-polish marble-like sheen",
  "Surface repair, skim coat, and priming",
  "Protective sealing for washability",
]

const benefits = [
  "Genuine stone-like depth and movement that painted faux finishes cannot replicate",
  "Breathable lime plaster that naturally resists mold and mildew in Houston's humidity",
  "A hard, sealed, washable surface that lasts for decades instead of years",
  "Custom sample board approval so you see the exact color and sheen before we start",
  "Same in-house artisan crew start to finish — no rotating subcontractors",
  "5-year written quality guarantee on every plaster project",
]

const relatedServices = [
  { title: "Interior Painting Houston TX", href: "/interior-painting-houston-tx" },
  { title: "Limewash & Brick Painting", href: "/limewash-brick-painting-houston-tx" },
  { title: "Cabinet Refinishing Houston TX", href: "/cabinet-refinishing-houston-tx" },
  { title: "Wallpaper Removal Houston TX", href: "/wallpaper-removal-houston-tx" },
]

export default function VenetianPlasterHoustonTX() {
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
              Venetian Plaster
            </p>
            <h1 className="hero-h1 font-display text-4xl md:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
              Venetian Plaster Finishes in Houston, TX
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto">
              Authentic hand-troweled lime plaster with marble-like depth and a burnished sheen — for feature walls, ceilings, and luxury interiors. Free design consultation. 5-year quality guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get My Free Consultation</Link>
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
                <ReviewsInline className="font-medium" />
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-medium">In-House Crew</span>
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
              Houston Superior Painting creates authentic hand-troweled Venetian plaster across Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, and The Woodlands. Most projects run $8–$20 per square foot, and a single feature wall typically takes 2–4 days because each lime-plaster coat must cure before it is troweled and burnished. The breathable finish resists mold in Houston&apos;s humidity and lasts for decades. Every project is backed by our written 5-year quality guarantee. Free consultations at (346) 594-5960.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 lg:py-20 max-w-4xl">
          {/* Recent work — real photographs of completed Houston projects */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Recent Houston Venetian Plaster Projects
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Photographs of our own hand-troweled work — no renderings. Each finish below was
              applied on site in the Houston area, and the depth you see comes from layering
              and burnishing the plaster by hand.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {plasterProjects.map((project) => (
                <figure
                  key={project.src}
                  className={`overflow-hidden rounded-lg border border-border bg-card ${project.span}`}
                >
                  <div className={`relative ${project.aspect}`}>
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-sm text-foreground/70 leading-relaxed">
                    {project.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Finish comparison (brief Step 12) — helps a homeowner choose
              between finishes and, critically, flags which ones cannot be
              undone before they commit. */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Compare Specialty Finishes
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Plaster is one of several specialty finishes we apply, and they are not
              interchangeable. Filter by the surface you are starting with to see which
              finishes suit it — and which are permanent once applied.
            </p>
            <FinishComparison />
          </section>

          {/* Why choose */}
          <section className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Why Houston Homeowners Choose Us for Venetian Plaster
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Venetian plaster is an artisan finish — the result depends entirely on the skill and patience of the hands applying it. Done well, it brings genuine stone-like depth to a room that no paint can match. Done poorly, it looks flat or blotchy. Our crew has the training and the discipline to do it right:
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
              What&apos;s Included in Venetian Plaster
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
              Our 6-Step Venetian Plaster Process
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
              {venetianFaqs.map((faq, i) => (
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
              Bring Timeless Depth to Your Walls
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Get a free, no-obligation Venetian plaster consultation and custom sample board from Houston&apos;s prep-first painting team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                <Link href="/contact">Schedule Free Consultation</Link>
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
      <RelatedLinks exclude="/venetian-plaster-houston-tx" />
      <Footer />
    </>
  )
}
