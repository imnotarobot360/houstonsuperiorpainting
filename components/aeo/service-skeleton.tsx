// Shared "Service page skeleton" for the four core service pages
// (interior, exterior, cabinets, drywall). See docs/aeo-seo-plan-2026-09.md.
// Every page renders the same sections in the same order; only the data changes.

import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd } from "@/components/structured-data"
import { BUSINESS } from "@/lib/business"
import {
  PageHero,
  QuickAnswer,
  Section,
  Bullets,
  Steps,
  PriceTable,
  LinkGrid,
  CtaBlock,
  breadcrumbNode,
  SITE,
} from "@/components/aeo/blocks"

/** The six city pages every service page links to: the 5 office pages + The Woodlands. */
export const SERVICE_PAGE_CITIES = [
  { label: "House painters in Houston", href: "/painters-houston-tx" },
  { label: "Painters in Cypress, TX", href: "/painters-cypress-tx" },
  { label: "Painters in Katy, TX", href: "/painters-katy-tx" },
  { label: "Painters in Sugar Land, TX", href: "/painters-sugar-land-tx" },
  { label: "Painters in Magnolia, TX", href: "/painters-magnolia-tx" },
  { label: "Painters in The Woodlands, TX", href: "/painters-the-woodlands-tx" },
] as const

export const HIRE_GUIDE_PATH = "/houston-painting-contractor-guide"
export const MAIN_COST_GUIDE_PATH = "/houston-painting-cost-guide"

export type ServiceSkeletonData = {
  /** Path without leading slash, e.g. "interior-painting-houston-tx". */
  slug: string
  /** Short name for breadcrumb + headings, e.g. "Interior Painting". */
  serviceName: string
  h1: string
  quickAnswer: ReactNode
  /** Optional real before/after photos from /public/images. */
  beforeAfter?: { before: string; after: string; beforeAlt: string; afterAlt: string; caption?: string }
  whoFor: ReactNode
  processTitle: string
  steps: { title: string; text: ReactNode }[]
  risks: ReactNode[]
  risksIntro?: ReactNode
  costTitle: string
  price: { head: string[]; rows: ReactNode[][]; note?: ReactNode }
  costGuide: { label: string; href: string }
  paintsTitle?: string
  paints: ReactNode
  faqs: { q: string; a: string }[]
  related: { label: string; href: string }[]
  /** Extra JSON-LD nodes (Service, HowTo). Breadcrumb + FAQPage are added here. */
  schema: unknown[]
}

export function ServiceSkeleton(d: ServiceSkeletonData) {
  const breadcrumb = {
    "@context": "https://schema.org",
    ...breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Services", path: "/#services" },
      { name: d.serviceName, path: `/${d.slug}` },
    ]),
  }

  return (
    <>
      {d.schema.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}
      <JsonLd data={breadcrumb} />
      <Header />
      <main className="bg-background">
        <PageHero h1={d.h1}>
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-soft-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link href="/#services" className="hover:text-gold">
                  Services
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-soft-white">{d.serviceName}</li>
            </ol>
          </nav>
        </PageHero>

        <QuickAnswer>{d.quickAnswer}</QuickAnswer>

        {d.beforeAfter && (
          <section className="container mx-auto px-4 max-w-4xl mb-14">
            <div className="grid sm:grid-cols-2 gap-4">
              <figure className="relative overflow-hidden rounded-xl border border-border">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-midnight/85 px-3 py-1 text-xs font-semibold text-soft-white">
                  Before
                </span>
                <Image
                  src={d.beforeAfter.before}
                  alt={d.beforeAfter.beforeAlt}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                />
              </figure>
              <figure className="relative overflow-hidden rounded-xl border border-border">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-midnight">
                  After
                </span>
                <Image
                  src={d.beforeAfter.after}
                  alt={d.beforeAfter.afterAlt}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                />
              </figure>
            </div>
            {d.beforeAfter.caption && (
              <p className="mt-3 text-sm text-muted-foreground">{d.beforeAfter.caption}</p>
            )}
          </section>
        )}

        <Section id="who-this-is-for" title="Who this is for">
          {d.whoFor}
        </Section>

        <Section id="process" title={d.processTitle}>
          <Steps items={d.steps} />
        </Section>

        <Section id="houston-risks" title="Houston-specific risks">
          {d.risksIntro}
          <Bullets items={d.risks} />
        </Section>

        <Section id="cost" title={d.costTitle} className="pricing-snippet">
          <PriceTable head={d.price.head} rows={d.price.rows} note={d.price.note} />
          <p>
            These are 2026 Houston ranges, not quotes. For line-by-line detail see the{" "}
            <Link href={d.costGuide.href}>{d.costGuide.label}</Link>
            {d.costGuide.href !== MAIN_COST_GUIDE_PATH && (
              <>
                , or compare every service in the{" "}
                <Link href={MAIN_COST_GUIDE_PATH}>Houston painting cost guide</Link>
              </>
            )}
            .
            {/(interior|exterior)-painting/.test(d.slug) && (
              <>
                {" "}Pricing a mid-size home? See the{" "}
                <Link href="/blog/cost-to-paint-2000-sq-ft-house-houston">cost to paint a 2,000 sq ft house in Houston</Link>.
              </>
            )}
          </p>
        </Section>

        <Section id="paints" title={d.paintsTitle ?? "Paints we use"}>
          {d.paints}
        </Section>

        <div className="container mx-auto max-w-4xl mb-14">
          <FAQ items={d.faqs} title="Frequently asked questions" variant="compact" />
        </div>

        <Section id="nearby-cities" title="Nearby cities we serve">
          <LinkGrid links={[...SERVICE_PAGE_CITIES]} />
        </Section>

        <Section id="related-services" title="Related services">
          <LinkGrid links={d.related} />
        </Section>

        <CtaBlock />

        <p className="container mx-auto px-4 max-w-4xl mb-14 text-foreground/90">
          Comparing contractors? Read{" "}
          <Link href={HIRE_GUIDE_PATH} className="font-medium text-primary hover:underline">
            how to hire a painter in Houston
          </Link>{" "}
          — the insurance, prep, and warranty questions to ask before you sign. {BUSINESS.name} answers all of them in
          writing on every estimate.
        </p>
      </main>
      <Footer />
    </>
  )
}

/** Canonical URL for a service slug. */
export function serviceUrl(slug: string) {
  return `${SITE}/${slug}`
}
