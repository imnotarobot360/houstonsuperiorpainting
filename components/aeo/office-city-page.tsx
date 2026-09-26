// Shared template for the office city pages (Cypress, Katy, Sugar Land,
// Magnolia). Renders the plan's "City page skeleton" in order — see
// docs/aeo-seo-plan-2026-09.md. Each page file supplies only city-specific
// data; NAP, prices, schema and the standard FAQ answers come from
// lib/business.ts so no two pages can disagree.
//
// No rating numbers are printed here: the 4.9 / 200+ figure belongs to the
// Houston GBP only. Each office links to its own Google profile instead.

import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { generateLocationBusinessSchema, JsonLd } from "@/components/structured-data"
import {
  PageHero,
  QuickAnswer,
  Section,
  PriceTable,
  ServiceCards,
  LinkGrid,
  CtaBlock,
  OfficeNap,
  breadcrumbNode,
  SITE,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import {
  BUSINESS,
  CORE_SERVICES,
  PRICES_2026,
  SERVICE_AREAS,
  officeAddressLine,
  officeForPage,
  type Office,
} from "@/lib/business"
import { PROJECTS, type CaseStudy } from "@/lib/projects"

export const COST_GUIDE_PATH = "/houston-painting-cost-guide"

type OfficePageSlug = (typeof BUSINESS.locations)[number]["pageSlug"]
type CoreServiceSlug = (typeof CORE_SERVICES)[number]["slug"]
type AreaSlug = (typeof SERVICE_AREAS)[number]["slug"]

export type Neighborhood = { name: string; note: string }
export type FaqItem = { q: string; a: string }

export type OfficeCityPageData = {
  /** City name as used in the H1 ("Sugar Land"). */
  city: string
  /** Page slug; must be one of the five office pageSlugs in BUSINESS.locations. */
  slug: Exclude<OfficePageSlug, "painters-houston-tx">
  /** Short list of areas for the Quick Answer ("Katy, Cinco Ranch, and Fulshear"). */
  areasPhrase: string
  /** One-line blurb per core service card. */
  serviceBlurbs: Record<CoreServiceSlug, string>
  /** 8–12 real subdivisions / communities, one factual sentence each. */
  neighborhoods: Neighborhood[]
  /** Paragraphs for "Why [City] homes need different prep". */
  prep: string[]
  /** Answer to "What areas of [City] do you serve?" */
  areasAnswer: string
  /** Answer to "How soon can you start a job in [City]?" (defaults to 1–2 weeks, confirmed at estimate). */
  startAnswer?: string
  /** Nearby city pages (4–6), in display order. */
  nearby: AreaSlug[]
  /** Extra copy under the nearby links (e.g. a blog link). */
  nearbyNote?: ReactNode
  /** Visible sentence rendered right under the office block (e.g. official-site disclaimer). */
  officeNote?: ReactNode
}

// ─── Helpers ──────────────────────────────────────────────────────────

function requireOffice(slug: string): Office {
  const office = officeForPage(slug)
  if (!office) throw new Error(`No office in BUSINESS.locations for page slug "${slug}"`)
  return office
}

function isHeadquarters(office: Office): boolean {
  return "isHeadquarters" in office && office.isHeadquarters === true
}

/**
 * Real projects whose neighborhood names this city, e.g. "Cypress, TX".
 * Matching on a comma-separated part keeps "Cypress Creek" from matching
 * "Cypress". New entries in lib/projects.ts appear on the page automatically.
 */
export function projectsForCity(city: string): CaseStudy[] {
  const c = city.trim().toLowerCase()
  return PROJECTS.filter((p) =>
    p.neighborhood
      .split(",")
      .map((part) => part.trim().toLowerCase())
      .some((part) => part === c),
  )
}

function areaName(slug: AreaSlug): string {
  return SERVICE_AREAS.find((a) => a.slug === slug)?.name ?? slug
}

function quickAnswerText(city: string, office: Office, areasPhrase: string): string {
  const hq = isHeadquarters(office) ? ", the company headquarters," : ""
  return (
    `${BUSINESS.name}'s ${city} office${hq} is at ${officeAddressLine(office)}; call ${BUSINESS.phone}. ` +
    `We paint interiors, exteriors, and kitchen cabinets and repair drywall across ${areasPhrase}. ` +
    `We carry ${BUSINESS.trust.liabilityCoverage} in general liability insurance and back every paint job with a ` +
    `${BUSINESS.trust.warrantyYears}-year workmanship warranty.`
  )
}

function buildFaqs(d: OfficeCityPageData, office: Office): FaqItem[] {
  const { city } = d
  const hours = BUSINESS.hoursSummary.map((h) => `${h.label} ${h.value}`).join(", ")
  const officeLead = isHeadquarters(office)
    ? `Yes. ${city} is our headquarters. The office is at ${officeAddressLine(office)}.`
    : `Yes. Our ${city} office is at ${officeAddressLine(office)}.`
  return [
    {
      q: `Do you have an office in ${city}?`,
      a: `${officeLead} Call ${BUSINESS.phone}. Hours: ${hours}.`,
    },
    { q: `What areas of ${city} do you serve?`, a: d.areasAnswer },
    {
      q: `How much does it cost to paint a house in ${city}?`,
      a: `In 2026 a full interior repaint on a 2,500 sq ft ${city} home runs ${PRICES_2026.fullInterior2500} (about ${PRICES_2026.interiorPerSqFt} per sq ft). A two-story exterior of the same size runs ${PRICES_2026.exterior2500TwoStory}. Cabinet refinishing for an average kitchen runs ${PRICES_2026.cabinetsAverage}, and a single room runs ${PRICES_2026.singleRoom}.`,
    },
    {
      q: `Do you work with ${city} HOAs?`,
      a: `Yes. We pull your HOA's approved color list and submit the ARC form for you before any exterior work starts, so the job doesn't stall waiting on approval.`,
    },
    {
      q: `How soon can you start a job in ${city}?`,
      a:
        d.startAnswer ??
        `Most ${city} jobs start 1–2 weeks after you approve the estimate. We confirm the exact start date at the estimate, and exterior work can shift a few days for rain.`,
    },
    {
      q: `Are you insured for work in ${city}, Texas?`,
      a: `Yes. We carry ${BUSINESS.trust.liabilityCoverage} in general liability insurance plus workers' compensation, and we can send a certificate of insurance to you or your HOA. Texas does not license residential painters, so ask any painter for proof of insurance instead of a license.`,
    },
    {
      q: `Can I see reviews from ${city} customers?`,
      a: `Yes. Our ${city} office has its own Google Business Profile. Use the "See reviews on Google" link in the Visit our ${city} office section of this page to read reviews from ${city} customers.`,
    },
    {
      q: `Do you offer free estimates in ${city}?`,
      a: `Yes. Estimates in ${city} are free. You get a written scope and price within 24 hours, nothing due until you approve it, and a ${BUSINESS.trust.warrantyYears}-year workmanship warranty on the finished job. Call ${BUSINESS.phone} or request one online.`,
    },
  ]
}

// ─── Metadata ─────────────────────────────────────────────────────────

export function officeCityMetadata(opts: {
  city: string
  slug: OfficeCityPageData["slug"]
  title: string
  description: string
  /** Page-specific OG image URL if one exists; defaults to the site cover. */
  ogImage?: string
}): Metadata {
  const office = requireOffice(opts.slug)
  const url = `${SITE}/${opts.slug}`
  const image = opts.ogImage ?? BUSINESS.ogImage
  const hasGeo = office.latitude != null && office.longitude != null
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `House painters in ${opts.city}, TX — ${BUSINESS.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
    // Geo meta only when the office has a verified pin in lib/business.ts.
    ...(hasGeo
      ? {
          other: {
            "geo.region": "US-TX",
            "geo.placename": office.city,
            "geo.position": `${office.latitude};${office.longitude}`,
            ICBM: `${office.latitude}, ${office.longitude}`,
          },
        }
      : {}),
  }
}

// ─── Page ─────────────────────────────────────────────────────────────

export function OfficeCityPage({ data }: { data: OfficeCityPageData }) {
  const { city, slug } = data
  const office = requireOffice(slug)
  const hq = isHeadquarters(office)
  const projects = projectsForCity(city)
  const faqs = buildFaqs(data, office)

  const breadcrumb = {
    "@context": "https://schema.org",
    ...breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" },
      { name: city, path: `/${slug}` },
    ]),
  }

  return (
    <>
      <JsonLd data={generateLocationBusinessSchema({ city, slug })} />
      <JsonLd data={breadcrumb} />
      <Header />
      <main className="bg-background">
        <PageHero
          h1={`House Painters in ${city}, TX`}
          eyebrow={hq ? `${BUSINESS.name} · ${city} headquarters` : `${BUSINESS.name} · ${office.label}`}
        />

        <QuickAnswer>{quickAnswerText(city, office, data.areasPhrase)}</QuickAnswer>

        <Section title={`Painting services in ${city}`}>
          <ServiceCards city={city} blurbs={data.serviceBlurbs} />
        </Section>

        <Section title={`Neighborhoods we paint in ${city}`}>
          <ul>
            {data.neighborhoods.map((n) => (
              <li key={n.name}>
                <strong>{n.name}.</strong> {n.note}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={`${city} painting prices (2026)`}>
          <PriceTable
            head={["Project", `Typical ${city} price`, "What it covers"]}
            rows={[
              [
                "Interior repaint",
                `${PRICES_2026.fullInterior2500} (2,500 sq ft home)`,
                `About ${PRICES_2026.interiorPerSqFt} per sq ft: walls, ceilings, trim, and doors`,
              ],
              [
                "Exterior repaint",
                `${PRICES_2026.exterior2500TwoStory} (2,500 sq ft two-story)`,
                "Wash, scrape, caulk, spot-prime, and two finish coats",
              ],
              [
                "Cabinet refinishing",
                `${PRICES_2026.cabinetsAverage} (average kitchen)`,
                "Degrease, sand, bonding primer, sprayed finish",
              ],
              ["Single room", PRICES_2026.singleRoom, "Walls and trim in one standard room"],
            ]}
            note={
              <>
                Ranges are 2026 prices and match every page on this site. Size, prep, and access move the number. See the
                full{" "}
                <Link href={COST_GUIDE_PATH} className="text-primary font-medium hover:underline">
                  Houston painting cost guide
                </Link>{" "}
                for how each price is built, or get an exact{" "}
                <Link href={ESTIMATE_PATH} className="text-primary font-medium hover:underline">
                  free painting estimate in {city}
                </Link>
                .
              </>
            }
          />
        </Section>

        <Section title={`Why ${city} homes need different prep`}>
          {data.prep.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        {/* Renders only when lib/projects.ts has a real project in this city. */}
        {projects.length > 0 && (
          <Section title={`Recent ${city} projects`}>
            <div className="not-prose grid gap-6">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group grid md:grid-cols-[240px_1fr] gap-5 bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[180px]">
                    <Image src={p.heroImage} alt={p.afterAlt} fill sizes="(min-width: 768px) 240px, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5 md:pl-0">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-1">{p.neighborhood}</p>
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary">{p.title}</h3>
                    <p className="text-muted-foreground">{p.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        <FAQ items={faqs} title="Frequently asked questions" />

        <Section title={`Visit our ${city} office`}>
          <OfficeNap office={office} />
          {data.officeNote && <p className="mt-6 text-base text-muted-foreground">{data.officeNote}</p>}
        </Section>

        <Section title="Nearby areas">
          <LinkGrid links={data.nearby.map((s) => ({ label: `House painters in ${areaName(s)}`, href: `/${s}` }))} />
          {data.nearbyNote && <p className="mt-6">{data.nearbyNote}</p>}
        </Section>

        <CtaBlock title={`Get a free painting estimate in ${city}`} />
      </main>
      <Footer />
    </>
  )
}
