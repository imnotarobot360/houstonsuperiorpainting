"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, MapPin, Star, Clock, Shield, Users } from "lucide-react"
import { BeforeAfter } from "@/components/luxury/before-after"
import { generateBreadcrumbSchema } from "@/components/structured-data"
import { SERVICE_AREAS } from "@/lib/business"

const SITE = "https://houstonsuperiorpainting.com"

interface LocationPageProps {
  city: string
  state: string
  heroHeadline: string
  heroDescription: string
  quickAnswer?: string
  aboutCity: string
  whyChooseUs: string[]
  services: {
    title: string
    description: string
    href: string
  }[]
  neighborhoods: string[]
  faqs: {
    question: string
    answer: string
  }[]
  testimonial: {
    quote: string
    author: string
    location: string
  }
}

export function LocationPageTemplate({
  city,
  state,
  heroHeadline,
  heroDescription,
  quickAnswer,
  aboutCity,
  whyChooseUs,
  services,
  neighborhoods,
  faqs,
  testimonial,
}: LocationPageProps) {
  // Resolve this page's own URL from the canonical SERVICE_AREAS list rather
  // than accepting a slug prop, so the breadcrumb URL can never disagree with
  // the route the page is actually served at. Falls back to omitting the leaf
  // link if the city is not in the list (a page not yet registered as a service
  // area) — better a 2-level trail than one pointing at a guessed URL.
  const area = SERVICE_AREAS.find((a) => a.name === city)

  const crumbs = [
    { name: "Home", url: `${SITE}/` },
    { name: "Service Areas", url: `${SITE}/service-areas` },
    ...(area ? [{ name: city, url: `${SITE}/${area.slug}` }] : []),
  ]

  // The visible trail below and this schema are built from the same `crumbs`
  // array, which is the point: Google treats a BreadcrumbList that disagrees
  // with the on-page trail as a mismatch, so they must not be maintained
  // separately.
  const breadcrumbSchema = generateBreadcrumbSchema(crumbs)

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative bg-midnight py-20 md:py-28 overflow-hidden">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="container mx-auto px-4 max-w-4xl text-center">
          {/* Visible breadcrumb, above the H1 per the brief. Left-aligned inside
              a centred hero so it reads as navigation rather than hero copy. */}
          <nav aria-label="Breadcrumb" className="mb-6 text-left">
            <ol className="flex flex-wrap items-center gap-2 font-manrope text-xs text-soft-white/70">
              {crumbs.map((crumb, i) => {
                const isLast = i === crumbs.length - 1
                return (
                  <li key={crumb.url} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="text-soft-white/90" aria-current="page">
                        {crumb.name}
                      </span>
                    ) : (
                      <>
                        <Link
                          href={i === 0 ? "/" : "/service-areas"}
                          className="transition-colors hover:text-gold"
                        >
                          {crumb.name}
                        </Link>
                        <span aria-hidden className="text-soft-white/40">
                          /
                        </span>
                      </>
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
          <div className="flex items-center justify-center gap-2 font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
            <MapPin className="h-4 w-4" />
            <span>Serving {city}, {state}</span>
          </div>
          <h1 className="hero-h1 font-display text-4xl md:text-6xl font-bold text-soft-white mb-6 text-balance leading-[1.05]">
            {heroHeadline}
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-soft-white/80 leading-relaxed max-w-3xl mx-auto">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <Link href="/contact">
                Get Free Estimate in {city}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground/10">
              <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960">
                <Phone className="h-4 w-4 mr-2" />
                (346) 594-5960
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Answer - Speakable Section for AEO */}
      {quickAnswer && (
        <section data-speakable="true" className="quick-answer bg-secondary/10 border-l-4 border-secondary py-6">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">Quick Answer</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{quickAnswer}</p>
          </div>
        </section>
      )}

      {/* Trust Indicators */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Star className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-foreground">4.9</span>
              <span className="text-sm text-muted-foreground">Google Rating</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-foreground">2019</span>
              <span className="text-sm text-muted-foreground">Founded</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-foreground">5-Year</span>
              <span className="text-sm text-muted-foreground">Warranty</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-foreground">500+</span>
              <span className="text-sm text-muted-foreground">Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        {/* About Serving This City */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Professional Painting Services in {city}, Texas
          </h2>
          <p className="text-foreground leading-relaxed whitespace-pre-line">
            {aboutCity}
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12 bg-card rounded-xl p-8 border border-border">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Why {city} Homeowners Choose Us
          </h2>
          <ul className="space-y-4">
            {whyChooseUs.map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{reason}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services We Offer */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Our Painting Services in {city}
          </h2>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  {/* Absolute URLs (e.g. the epoxy subdomain) must render as a
                      plain anchor. next/link tries to fetch an RSC payload for
                      them, which fails cross-origin and throws before falling
                      back to a hard navigation. */}
                  {/^https?:\/\//.test(service.href) ? (
                    <a
                      href={service.href}
                      className="text-primary font-medium hover:underline"
                    >
                      Learn more about {service.title.toLowerCase()} →
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="text-primary font-medium hover:underline"
                    >
                      Learn more about {service.title.toLowerCase()} →
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Neighborhoods We Serve */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Neighborhoods We Serve in {city}
          </h2>
          <p className="text-foreground mb-4">
            Our professional painting crews serve all neighborhoods and communities throughout {city} and surrounding areas, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-foreground">{neighborhood}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-12 bg-primary/5 rounded-xl p-8 border border-primary/10">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="text-lg text-foreground italic mb-4">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="text-foreground font-medium">
            — {testimonial.author}, {testimonial.location}
          </div>
        </section>

        {/* Before/After */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Recent Projects Near {city}
          </h2>
          <BeforeAfter
            beforeSrc="/images/exterior-before-1.jpg"
            afterSrc="/images/exterior-after-1.jpg"
            beforeAlt={`House painting project before - ${city} area`}
            afterAlt={`House painting project after - ${city} area`}
          />
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          {/* FAQPage schema sourced from the visible FAQs above so the markup
              matches on-page content per Google's structured data guidelines. */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Frequently Asked Questions About Painting in {city}
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

        {/* CTA Section */}
        <section className="mb-12 bg-primary rounded-xl p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Transform Your {city} Home?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Get a free, no-obligation estimate from Houston&apos;s trusted painting professionals. We proudly serve {city} and all surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <Link href="/contact">
                Schedule Free Estimate
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground/10">
              <a href="tel:+13465945960" aria-label="Call Houston Superior Painting at 346-594-5960">
                <Phone className="h-4 w-4 mr-2" />
                Call (346) 594-5960
              </a>
            </Button>
          </div>
        </section>

        {/* Other Locations */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            We Also Serve
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              { name: "Houston", href: "/painters-houston-tx" },
              { name: "Katy", href: "/painters-katy-tx" },
              { name: "Cypress", href: "/painters-cypress-tx" },
              { name: "Sugar Land", href: "/painters-sugar-land-tx" },
              { name: "The Woodlands", href: "/painters-the-woodlands-tx" },
              { name: "Memorial", href: "/painters-memorial-tx" },
              { name: "The Heights", href: "/painters-the-heights-tx" },
              { name: "Bellaire", href: "/painters-bellaire-tx" },
              { name: "Pearland", href: "/painters-pearland-tx" },
              { name: "Richmond", href: "/painters-richmond-tx" },
              { name: "Fulshear", href: "/painters-fulshear-tx" },
            ].filter(loc => loc.name !== city).map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors text-foreground font-medium"
              >
                {location.name}, TX
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <Link
              href="/houston-painting-cost-guide"
              className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-lg hover:bg-secondary/20 transition-colors text-foreground font-medium"
            >
              View Pricing Guide →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
