// Shared template for the office city pages (Cypress, Katy, Sugar Land,
// Magnolia). The layout is shared; every paragraph is supplied by the page so
// no two office pages repeat the same text (Juan's brief, 2026-10-09). NAP,
// prices and schema come from lib/business.ts so no two pages can disagree.
//
// No rating numbers are printed here: the 4.9 / 200+ figure belongs to the
// Houston GBP only.

import { TrustChecklist } from "@/components/trust-checklist"
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
  LinkGrid,
  CtaBlock,
  OfficeNap,
  breadcrumbNode,
  SITE,
} from "@/components/aeo/blocks"
import { BUSINESS, CORE_SERVICES, PRICES_2026, SERVICE_AREAS, officeForPage, type Office } from "@/lib/business"
import { LOCAL_PROOF_PROJECTS, type CaseStudy } from "@/lib/projects"

export const COST_GUIDE_PATH = "/houston-painting-cost-guide"

type OfficePageSlug = (typeof BUSINESS.locations)[number]["pageSlug"]
type AreaSlug = (typeof SERVICE_AREAS)[number]["slug"]

export type Neighborhood = { name: string; note: ReactNode }
export type FaqItem = { q: string; a: string }

export type OfficeCityPageData = {
  /** City name as used in the H1 ("Sugar Land"). */
  city: string
  /** Page slug; must be one of the five office pageSlugs in BUSINESS.locations. */
  slug: Exclude<OfficePageSlug, "painters-houston-tx">
  /** Opening answer paragraph (Speakable). Unique per page. */
  quickAnswer: ReactNode
  /** The neighborhoods named in the page brief, one factual sentence each. */
  neighborhoods: Neighborhood[]
  /** Gulf Coast humidity / local prep paragraphs. */
  prep: ReactNode[]
  /** Which paints we use, phrased for this city. */
  products: ReactNode
  /** Sentence under the price table; must link to the cost guide. */
  pricesNote: ReactNode
  /** Exactly four city-specific questions; plain text (also used for FAQPage schema). */
  faqs: FaqItem[]
  /** Closing call to action. */
  cta: { title: string; body: ReactNode }
  /** Nearby city pages, in display order. */
  nearby: AreaSlug[]
  /** Visible sentence rendered right under the office block (e.g. official-site disclaimer). */
  officeNote?: ReactNode
}

// ─── Helpers ──────────────────────────────────────────────────────────

function requireOffice(slug: string): Office {
  const office = officeForPage(slug)
  if (!office) throw new Error(`No office in BUSINESS.locations for page slug "${slug}"`)
  return office
}

/**
 * Real projects whose neighborhood names this city, e.g. "Cypress, TX". Only
 * projects with confirmed job photos count (see photosNeedReview in lib/projects.ts).
 * Matching on a comma-separated part keeps "Cypress Creek" from matching
 * "Cypress". New entries in lib/projects.ts appear on the page automatically.
 */
export function projectsForCity(city: string): CaseStudy[] {
  const c = city.trim().toLowerCase()
  return LOCAL_PROOF_PROJECTS.filter((p) =>
    p.neighborhood
      .split(",")
      .map((part) => part.trim().toLowerCase())
      .some((part) => part === c),
  )
}

function areaName(slug: AreaSlug): string {
  return SERVICE_AREAS.find((a) => a.slug === slug)?.name ?? slug
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
  const ownProjects = projectsForCity(city)
  // No job in this city yet: show real projects from its listed nearby areas,
  // labelled with their own neighborhood, never as this city's work.
  const projects =
    ownProjects.length > 0 ? ownProjects.slice(0, 3) : data.nearby.flatMap((a) => projectsForCity(areaName(a))).slice(0, 1)
  const projectsAreNearby = ownProjects.length === 0

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
        <PageHero h1={`House painters in ${city}, TX`} eyebrow={`${BUSINESS.name} · ${office.label}`} />

        <QuickAnswer>{data.quickAnswer}</QuickAnswer>

        <Section title={`Neighborhoods we paint in ${city}`}>
          <ul>
            {data.neighborhoods.map((n) => (
              <li key={n.name}>
                <strong>{n.name}:</strong> {n.note}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={`Humidity and prep in ${city}`}>
          {data.prep.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>{data.products}</p>
        </Section>

        <Section title={`${city} painting prices (2026)`}>
          <PriceTable
            head={["Project", "Typical 2026 range"]}
            rows={[
              ["Interior, per sq ft of floor area", PRICES_2026.interiorPerSqFt],
              ["Full interior, 2,500 sq ft", PRICES_2026.fullInterior2500],
              ["Exterior, most homes", PRICES_2026.exteriorPerHome],
              ["Kitchen cabinets, most kitchens", PRICES_2026.cabinetsPerKitchen],
            ]}
            note={data.pricesNote}
          />
        </Section>

        {/* Renders only when lib/projects.ts has a real project in this city (or a listed nearby one). */}
        {projects.length > 0 && (
          <Section title={projectsAreNearby ? `Recent projects near ${city}` : `Recent ${city} projects`}>
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

        <FAQ items={data.faqs} title="Frequently asked questions" />

        <Section title={`Visit our ${city} office`}>
          <OfficeNap office={office} />
          {data.officeNote && <p className="mt-6 text-base text-muted-foreground">{data.officeNote}</p>}
        </Section>

        <Section title="Services and nearby areas">
          <LinkGrid
            links={[
              ...CORE_SERVICES.slice(0, 3).map((s) => ({ label: s.name, href: `/${s.slug}` })),
              ...data.nearby.map((s) => ({ label: `Painters in ${areaName(s)}`, href: `/${s}` })),
            ]}
          />
        </Section>

        <TrustChecklist />

        <CtaBlock title={data.cta.title}>{data.cta.body}</CtaBlock>
      </main>
      <Footer />
    </>
  )
}
