import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ORG_ID } from "@/components/structured-data"
import { BUSINESS, PHONE_HREF, PRICES_2026, SERVICE_AREAS, SMS_HREF } from "@/lib/business"
import { LOCAL_PROOF_PROJECTS } from "@/lib/projects"
import { Phone, MessageSquare, CheckCircle, Shield, Clock, FileText } from "lucide-react"

// Every trust line on these pages must be backed by lib/business.ts. Claims that
// had no source anywhere (EPA RRP certification, "Family-Owned", "Bilingual
// Foremen", "Preferred Contractor", "5-star reviews", 0% APR financing, daily
// SMS photo updates, a 5-minute response time) were removed on 2026-10-07 and
// are listed for owner review in docs/local-seo-audit-2026-10.md.

const ESTIMATE_HREF = "/painting-estimate-houston"

// Breadcrumb parent for each service family. Several `${slug}-houston-tx`
// URLs are 301 sources (see next.config.mjs), so link straight to the hub.
const SERVICE_HUB: Record<string, string> = {
  "brick-painting": "/limewash-brick-painting-houston-tx",
  "limewash-decorative-finishes": "/limewash-brick-painting-houston-tx",
  "luxury-exterior-painting": "/luxury-house-painters-houston",
  "luxury-house-painters": "/luxury-house-painters-houston",
  "luxury-interior-painting": "/luxury-house-painters-houston",
}

/**
 * Published price for each service family, always from PRICES_2026. These pages
 * used to carry their own per-neighborhood ranges ("$6,720 – $19,600" etc.)
 * that appeared nowhere in the cost guide. Families without a published range
 * get no figure and no Offer schema, rather than an invented one.
 */
const PRICING: Record<string, { range: string; basis: string; minMax?: [number, number]; guide: { label: string; href: string } }> = {
  "interior-painting": {
    range: PRICES_2026.fullInterior2500,
    basis: `Whole-home interior, about 2,500 sq ft. A single room typically runs ${PRICES_2026.singleRoom}.`,
    guide: { label: "Interior painting cost guide", href: "/interior-painting-cost-houston" },
  },
  "exterior-painting": {
    range: PRICES_2026.exteriorPerHome,
    basis: `Typical whole-house exterior. A 2,500 sq ft two-story runs about ${PRICES_2026.exterior2500TwoStory}.`,
    guide: { label: "Exterior painting cost guide", href: "/exterior-house-painting-houston-cost-guide" },
  },
  "cabinet-refinishing": {
    range: PRICES_2026.cabinetsPerKitchen,
    basis: `Per kitchen. Most kitchens land around ${PRICES_2026.cabinetsAverage}.`,
    guide: { label: "Cabinet painting cost guide", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
  },
}

/** "$4,000–$8,000" -> [4000, 8000] for Offer schema. */
function parseRange(range: string): [number, number] | undefined {
  const nums = range.match(/\d[\d,]*/g)?.map((n) => Number(n.replace(/,/g, "")))
  return nums && nums.length >= 2 ? [nums[0], nums[1]] : undefined
}

/** City pages near each zone, for the "Nearby service areas" links. */
const ZONE_NEARBY: Record<string, string[]> = {
  "bellaire-west-university": ["Bellaire", "Houston", "Memorial", "River Oaks", "The Heights"],
  "cypress-bridgeland": ["Cypress", "Cypress Creek", "Champions Forest", "Tomball", "Katy"],
  fulshear: ["Fulshear", "Katy", "Cinco Ranch", "Richmond", "Rosenberg"],
  houston: ["Houston", "Memorial", "River Oaks", "The Heights", "Bellaire"],
  katy: ["Katy", "Cinco Ranch", "Fulshear", "Energy Corridor", "Cypress"],
  "katy-cinco-ranch": ["Katy", "Cinco Ranch", "Fulshear", "Energy Corridor", "Richmond"],
  memorial: ["Memorial", "Memorial Villages", "Energy Corridor", "River Oaks", "Houston"],
  richmond: ["Richmond", "Rosenberg", "Sugar Land", "Fulshear", "Sienna"],
  "river-oaks": ["River Oaks", "Memorial", "The Heights", "Bellaire", "Houston"],
  "sugar-land": ["Sugar Land", "Missouri City", "Riverstone", "Sienna", "Richmond"],
  tanglewood: ["Memorial", "River Oaks", "Bellaire", "Houston", "Memorial Villages"],
  "the-heights": ["The Heights", "River Oaks", "Memorial", "Houston", "Bellaire"],
  "the-woodlands": ["The Woodlands", "Magnolia", "Tomball", "Champions Forest", "Cypress"],
}

/** Project neighborhoods that count as this zone (matched against lib/projects.ts). */
const ZONE_PROJECT_PLACES: Record<string, string[]> = {
  "bellaire-west-university": ["Bellaire", "West University"],
  memorial: ["Memorial"],
  "river-oaks": ["River Oaks"],
  "the-heights": ["The Heights"],
  houston: ["Houston"],
  richmond: ["Richmond"],
  fulshear: ["Fulshear"],
  "cypress-bridgeland": ["Cypress"],
  // Fulshear borders Katy; the card is labelled Fulshear, never Katy.
  katy: ["Fulshear"],
  "katy-cinco-ranch": ["Fulshear"],
}

interface FAQ {
  question: string
  answer: string
}

interface Testimonial {
  quote: string
  name: string
  location: string
  /**
   * Set only once the quote is matched to a real review the customer agreed to
   * share. Unverified testimonials are kept in the page files but not rendered.
   */
  verified?: boolean
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

  // Pricing note under the published range (must use PRICES_2026 figures only)
  priceDetails: string

  // FAQs
  faqs: FAQ[]

  // Testimonials (rendered only when verified)
  testimonials?: Testimonial[]

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
  metaDescription,
  h1,
  heroSubheading,
  introLocal,
  serviceOverview,
  whyChooseUs,
  priceDetails,
  faqs,
  testimonials = [],
  relatedPages,
  warrantyYears,
  warrantyType,
}: GeoServicePageProps) {
  // Some pages pass "Sugar Land, TX"; never print "Sugar Land, TX, TX".
  const place = zone.replace(/,\s*TX$/i, "")
  const serviceHub = SERVICE_HUB[serviceSlug] ?? `/${serviceSlug}-houston-tx`
  const pricing = PRICING[serviceSlug]
  const priceMinMax = pricing ? parseRange(pricing.range) : undefined
  const shownTestimonials = testimonials.filter((t) => t.verified)

  const projectPlaces = ZONE_PROJECT_PLACES[zoneSlug] ?? []
  const projects = LOCAL_PROOF_PROJECTS.filter((p) =>
    projectPlaces.some((pl) => p.neighborhood.toLowerCase().includes(pl.toLowerCase())),
  )
    // Same-service projects first.
    .sort((a, b) => Number(b.serviceSlug.startsWith(serviceSlug)) - Number(a.serviceSlug.startsWith(serviceSlug)))
    .slice(0, 3)

  const nearby = (ZONE_NEARBY[zoneSlug] ?? [])
    .map((name) => SERVICE_AREAS.find((a) => a.name === name))
    .filter((a): a is (typeof SERVICE_AREAS)[number] => Boolean(a))

  const quickAnswer =
    `${BUSINESS.name} provides ${service.toLowerCase()} in ${place}, TX, from our Greater Houston crews. ` +
    (pricing ? `Published pricing: ${pricing.range} (${pricing.basis.split(".")[0].toLowerCase()}). ` : "") +
    `Estimates are free and nothing is due until you approve the written estimate. ` +
    `Work is insured (${BUSINESS.trust.liabilityCoverage} general liability plus workers' comp) and backed by a ${warrantyYears}-year workmanship warranty. ` +
    `Request an estimate online or call ${BUSINESS.phone}.`

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service} in ${place}, TX`,
    serviceType: service,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: `${place}, TX` },
    description: metaDescription,
    ...(priceMinMax && {
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: priceMinMax[0],
          maxPrice: priceMinMax[1],
          priceCurrency: "USD",
        },
      },
    }),
  }

  const processSteps = [
    { title: "Free Consultation", description: "On-site walkthrough and a written, itemized estimate" },
    { title: "Surface Preparation", description: "Dust removal, patching, sanding, caulking, and spot-priming" },
    { title: "Protection", description: "Furniture moved or covered, floors and landscaping protected" },
    { title: "Application", description: "Cut-in by hand, then rolled or sprayed depending on the surface" },
    { title: "Daily Cleanup", description: "Work areas cleaned at the end of each day, with a foreman walk-through" },
    { title: "Final Walkthrough", description: "Walkthrough with you, touch-ups, and warranty paperwork" },
  ]

  // Each line is a fact stored in lib/business.ts.
  const trustSignals = [
    `Fully insured: ${BUSINESS.trust.liabilityCoverage} general liability + workers' comp`,
    `${warrantyYears}-year written ${warrantyType.toLowerCase()} warranty`,
    `${BUSINESS.paymentPolicy.short}: ${BUSINESS.paymentPolicy.badgeSubtitle.toLowerCase()}`,
    `${BUSINESS.paintPartners.join(" & ")} products`,
    `Founded in ${BUSINESS.founded}, headquartered in Cypress, TX`,
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

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
                <Link href={serviceHub} className="hover:text-primary-foreground">{service}</Link>
                <span className="mx-2">/</span>
                <span>{place}</span>
              </nav>

              <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
                {service} · {place}
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
                  <Shield className="h-4 w-4" aria-hidden="true" />
                  Fully Insured
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {warrantyYears}-Year Warranty
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  {BUSINESS.paymentPolicy.short}
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold" asChild>
                  <Link href={ESTIMATE_HREF}>Get My Free Estimate</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground !bg-transparent !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary" asChild>
                  <a href={PHONE_HREF} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call {BUSINESS.phone}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/50 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary" asChild>
                  <a href={SMS_HREF} className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                    Text Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer: a plain, factual summary near the top of the page */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">{quickAnswer}</p>
            </div>
          </div>
        </section>

        {/* Intro Local Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{service} Services in {place}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{introLocal}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{serviceOverview}</p>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Full details on scope, prep and products are on our{" "}
                <Link href={serviceHub} className="text-primary underline underline-offset-4">
                  {service.toLowerCase()} page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">What {place} Homeowners Get</h2>
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
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
                        Step {index + 1}
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

        {/* Real projects nearby (only projects with confirmed job photos) */}
        {projects.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Project Near {place}</h2>
                <div className="grid gap-4">
                  {projects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="block rounded-lg border bg-background p-5 hover:border-primary transition-colors"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {p.neighborhood} · {p.service}
                      </p>
                      <p className="font-semibold text-lg mt-1">{p.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{p.summary}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Testimonials: only quotes matched to real, shareable reviews */}
        {shownTestimonials.length > 0 && (
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">What {place} Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {shownTestimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                      <CardContent className="pt-6">
                        <p className="text-primary-foreground/90 text-sm mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                        <p className="text-primary-foreground font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-primary-foreground/70 text-xs">{testimonial.location}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Pricing for {service} in {place}</h2>
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  {pricing ? (
                    <>
                      <p className="text-3xl font-bold text-primary mb-2">{pricing.range}</p>
                      <p className="text-sm text-muted-foreground mb-4">{pricing.basis}</p>
                    </>
                  ) : (
                    <p className="text-xl font-semibold text-primary mb-4">Priced after an on-site look</p>
                  )}
                  <p className="text-muted-foreground leading-relaxed mb-6">{priceDetails}</p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                    <Button asChild>
                      <Link href={ESTIMATE_HREF}>Get Your Free Estimate</Link>
                    </Button>
                    <Link
                      href={pricing?.guide.href ?? "/houston-painting-cost-guide"}
                      className="text-sm text-primary underline underline-offset-4"
                    >
                      {pricing?.guide.label ?? "Houston painting cost guide"}
                    </Link>
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
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* What you can count on */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">What You Can Count On</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Get a Written Estimate</h2>
            <p className="text-lg mb-8 opacity-90">
              Free on-site estimate. Nothing is due until you approve it. {warrantyYears}-year{" "}
              {warrantyType.toLowerCase()} warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link href={ESTIMATE_HREF}>Get My Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground !bg-transparent !text-secondary-foreground hover:!bg-secondary-foreground hover:!text-secondary" asChild>
                <a href={PHONE_HREF} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {BUSINESS.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Pages + nearby city pages */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-10">
              <div>
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
              {nearby.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Nearby Service Areas</h2>
                  <div className="flex flex-wrap gap-3">
                    {nearby.map((a) => (
                      <Link
                        key={a.slug}
                        href={`/${a.slug}`}
                        className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
                      >
                        Painters in {a.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
