"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, MapPin, Star, Clock, Shield, Users, Building2 } from "lucide-react"
import { BeforeAfter } from "@/components/luxury/before-after"
import { generateBreadcrumbSchema } from "@/components/structured-data"
import {
  BUSINESS,
  SERVICE_AREAS,
  CORE_SERVICES,
  PHONE_HREF,
  officeAddressLine,
} from "@/lib/business"
import { nearestOfficeFor } from "@/lib/nearest-office"
import { getProject } from "@/lib/projects"

// The River Oaks exterior is a project with real job photos. City pages show it
// as an example of our exterior work, labelled with its own neighborhood.
const exampleProject = getProject("river-oaks-exterior-restoration")

const SITE = "https://houstonsuperiorpainting.com"
const ESTIMATE_PATH = "/painting-estimate-houston"
const COST_GUIDE_PATH = "/houston-painting-cost-guide"


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
  // Kept on the page data but no longer rendered — see note in the component body.
  testimonial?: {
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
}: LocationPageProps) {
  // Resolve this page's own URL from the canonical SERVICE_AREAS list rather
  // than accepting a slug prop, so the breadcrumb URL can never disagree with
  // the route the page is actually served at. Falls back to omitting the leaf
  // link if the city is not in the list (a page not yet registered as a service
  // area) — better a 2-level trail than one pointing at a guessed URL.
  const area = SERVICE_AREAS.find((a) => a.name === city)
  const nearestOffice = nearestOfficeFor(area?.slug)

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
              <Link href={ESTIMATE_PATH}>
                Get a Painting Estimate in {city}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground/10">
              <a href={PHONE_HREF} aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                {BUSINESS.phone}
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
            {/* No rating figure here: the 4.9 / 200+ number belongs to the Houston
                Google Business Profile and must not be printed on other city pages. */}
            <a
              href={BUSINESS.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <Star className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold text-foreground group-hover:text-primary">See reviews on Google</span>
              <span className="text-sm text-muted-foreground">Read what customers say</span>
            </a>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-foreground">2019</span>
              <span className="text-sm text-muted-foreground">Founded</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-foreground">{BUSINESS.trust.warrantyYears}-Year</span>
              <span className="text-sm text-muted-foreground">Warranty</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="h-6 w-6 text-accent" />
              <span className="text-2xl font-bold text-foreground">{BUSINESS.paymentPolicy.short}</span>
              <span className="text-sm text-muted-foreground">{BUSINESS.paymentPolicy.badgeSubtitle}</span>
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

        {/* Nearest office + core services. Visible text only: these pages have
            no office of their own, so the address must NOT go into schema. */}
        <section className="mb-12 bg-card rounded-xl p-8 border border-border">
          {nearestOffice && (
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
                <Building2 className="h-6 w-6 text-accent flex-shrink-0" />
                Your Nearest Office
              </h2>
              <p className="text-foreground leading-relaxed">
                The closest listed {BUSINESS.name} office to {city} is our{" "}
                <Link href={`/${nearestOffice.pageSlug}`} className="text-primary font-medium hover:underline">
                  {nearestOffice.city} painters office
                </Link>{" "}
                at {officeAddressLine(nearestOffice)}. To schedule an estimate, call{" "}
                <a href={PHONE_HREF} className="text-primary font-medium hover:underline">{BUSINESS.phone}</a>.
              </p>
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Painting Services Available in {city}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-6">
            {CORE_SERVICES.map((svc) => (
              <li key={svc.slug} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                <Link href={`/${svc.slug}`} className="text-foreground hover:text-primary hover:underline">
                  {svc.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-foreground leading-relaxed">
            See our{" "}
            <Link href={COST_GUIDE_PATH} className="text-primary font-medium hover:underline">
              Houston painting cost guide
            </Link>{" "}
            for 2026 price ranges, or{" "}
            <Link href={ESTIMATE_PATH} className="text-primary font-medium hover:underline">
              request a painting estimate
            </Link>{" "}
            for your {city} home.
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
                      {service.title} →
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="text-primary font-medium hover:underline"
                    >
                      {service.title} →
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

        {/* Testimonials hidden until they can be matched to real Google reviews (see docs/aeo-seo-plan-2026-09.md). TODO(juan) */}

        {/* Before/After: these photos are the River Oaks project, so they are
            labelled and linked as that project, never as this city's work. */}
        {exampleProject && (
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Example Project: {exampleProject.neighborhood}
            </h2>
            <BeforeAfter
              beforeSrc={exampleProject.beforeImage}
              afterSrc={exampleProject.afterImage}
              beforeAlt={exampleProject.beforeAlt}
              afterAlt={exampleProject.afterAlt}
            />
            <p className="mt-4 text-foreground/80">
              {exampleProject.summary}{" "}
              <Link href={`/projects/${exampleProject.slug}`} className="text-primary font-medium hover:underline">
                Read the project write-up
              </Link>
              .
            </p>
          </section>
        )}

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
            Get a free, no-obligation estimate for your {city} home, backed by a {BUSINESS.trust.warrantyYears}-year workmanship warranty on all painting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <Link href={ESTIMATE_PATH}>
                Get a Painting Estimate
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 !bg-transparent !text-primary-foreground hover:!bg-primary-foreground/10">
              <a href={PHONE_HREF} aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call {BUSINESS.phone}
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
            {SERVICE_AREAS.map((a) => ({ name: a.name, href: `/${a.slug}` })).filter(loc => loc.name !== city).map((location) => (
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
              href={COST_GUIDE_PATH}
              className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-lg hover:bg-secondary/20 transition-colors text-foreground font-medium"
            >
              Houston Painting Cost Guide →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
