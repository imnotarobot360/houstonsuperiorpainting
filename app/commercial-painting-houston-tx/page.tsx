import { TrustChecklist } from "@/components/trust-checklist"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd } from "@/components/structured-data"
import {
  PageHero,
  QuickAnswer,
  Section,
  Bullets,
  Steps,
  PriceTable,
  CtaBlock,
  LinkGrid,
  breadcrumbNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business"
import { COMMERCIAL_PROJECTS } from "@/data/commercial-projects"

// Commercial service page. Facts only from lib/business.ts; no project names or
// review quotes beyond real case studies in lib/projects.ts. Do not reuse the
// homepage title.

const PAGE_PATH = "/commercial-painting-houston-tx"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "Commercial Painting in Houston, TX | Offices, Retail & HOAs"
const DESCRIPTION =
  "Commercial painters for Houston offices, retail, HOAs, and multifamily. After-hours crews, $2M insured. Free estimates. (346) 594-5960."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Houston Superior Painting",
    type: "website",
    images: [
      {
        url: "https://houstonsuperiorpainting.com/images/og/og-commercial-painting.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial painting in Houston, TX — Houston Superior Painting",
      },
    ],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
}

const T = BUSINESS.trust
const INSURANCE = `${T.liabilityCoverage} general liability plus workers' comp`

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Commercial Painting in Houston, TX",
  serviceType: "Commercial Painting",
  description:
    "Interior and exterior repaints for offices, retail, restaurants, HOAs, multifamily, medical and light industrial buildings in Greater Houston, including after-hours and weekend work in occupied buildings.",
  provider: { "@type": "Organization", "@id": "https://houstonsuperiorpainting.com/#organization" },
  areaServed: BUSINESS.locations.map((l) => ({ "@type": "City", name: l.city })),
}

const FAQS = [
  {
    q: "Can you send a certificate of insurance before the job starts?",
    a: `Yes. We carry ${INSURANCE} and send the certificate of insurance to your property manager, HOA board or facilities team before the start date.`,
  },
  {
    q: "Do you paint after hours and on weekends?",
    a: `Yes. Occupied offices, retail and restaurants usually want the crew in after closing or on weekends. After-hours and weekend work adds ${PRICES_2026.commercialAfterHoursPremium} for shorter shifts and nightly setup and cleanup, and it is written into the estimate so you can budget for it.`,
  },
  {
    q: "How far out are you scheduling commercial work?",
    a: "Lead time changes with the season and the size of the job, so we give you a firm start date in the written estimate rather than a guess on the phone. If you have a lease turnover or an inspection date, tell us when you call and we will say plainly whether we can meet it.",
  },
  {
    q: "How does payment work on a commercial job?",
    a: "The estimate is free and nothing is due until you approve it in writing. After approval, a down payment schedules the work, and the balance is due after the final walkthrough.",
  },
  {
    q: "How much does commercial painting cost in Houston?",
    a: `In 2026, interior repaints in occupied offices run about ${PRICES_2026.commercialOffice} per sq ft of wall, retail ${PRICES_2026.commercialRetail}, and open warehouses ${PRICES_2026.commercialWarehouse}. Doors and frames are ${PRICES_2026.commercialDoorEach} each. Exteriors are quoted from the elevations. Your estimate lists every line.`,
  },
]

const project = COMMERCIAL_PROJECTS[0]

export default function CommercialPaintingHoustonPage() {
  return (
    <>
      <JsonLd data={SERVICE_JSONLD} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Commercial Painting", path: PAGE_PATH },
          ]),
        }}
      />
      <Header />
      <main>
        <PageHero h1="Commercial painting in Houston, TX" eyebrow="Houston Superior Painting" />

        <QuickAnswer>
          Houston Superior Painting has painted homes and commercial buildings across Greater Houston since{" "}
          {BUSINESS.founded}. We repaint offices, retail, restaurants, HOA and multifamily properties, medical offices and
          light industrial space, including after hours and on weekends in occupied buildings. We carry {INSURANCE}, send a
          certificate of insurance before work starts, back the work with a {T.warrantyYears}-year workmanship warranty, and
          collect nothing until you approve the written estimate. Call <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
        </QuickAnswer>

        <Section title="Who we work with">
          <p>
            Office and facilities managers, retail and restaurant owners, HOA boards and their management companies,
            multifamily property managers, medical and dental practices, and owners of light industrial and warehouse
            space in Houston, Katy, Cypress, Sugar Land, Magnolia and the surrounding area.
          </p>
        </Section>

        <Section title="Commercial painting jobs we take on">
          <Bullets
            items={[
              <>
                <strong>Offices and multi-suite buildings:</strong> suites, corridors, lobbies and break rooms. When a
                building has a color standard, we keep one written color and sheen schedule so every suite matches.
              </>,
              <>
                <strong>Retail and restaurants:</strong> sales floors, dining rooms, storefronts and tenant turnovers,
                usually after closing so you do not lose business hours.
              </>,
              <>
                <strong>HOAs and multifamily:</strong> clubhouses, amenity buildings, common areas, fences and building
                exteriors, in the colors your association has approved.
              </>,
              <>
                <strong>Medical and dental offices:</strong> low-VOC products and scheduling around patient hours.
              </>,
              <>
                <strong>Light industrial and warehouse:</strong> interior walls, offices inside the warehouse, doors and
                exterior walls.
              </>,
            ]}
          />
        </Section>

        <Section title="Working in an occupied building">
          <Bullets
            items={[
              <>
                <strong>After-hours and weekend shifts</strong> so staff, tenants and customers keep using the space.
              </>,
              <>
                <strong>Low-odor, low-VOC paint</strong> on interiors that will be occupied the next morning.
              </>,
              <>
                <strong>Phased work</strong>, one area at a time, with furniture moved, floors and fixtures covered, and the
                space cleaned and usable at the end of every shift.
              </>,
              <>
                <strong>Furniture and technology protection:</strong> desks, computers, phones and equipment are moved or
                covered before work starts in a room, and put back afterward.
              </>,
              <>
                <strong>Occupant communication:</strong> a written schedule showing which areas are painted on which days, so
                your building manager can tell tenants and staff in advance.
              </>,
              <>
                <strong>Building-management coordination:</strong> access, keys, alarms, elevators, parking and loading are
                agreed with your manager before the first shift.
              </>,
              <>
                <strong>One point of contact</strong> for your site manager, with the schedule agreed before the first
                shift.
              </>,
            ]}
          />
        </Section>

        <Section title="How a commercial bid works">
          <Steps
            items={[
              {
                title: "Site walk",
                text: "we walk the property with you, measure, note the surfaces and their condition, and ask about hours, access and occupancy.",
              },
              {
                title: "Written estimate",
                text: "a line-by-line scope: areas, prep, primer, product line, sheen, number of coats, schedule, payment terms and the after-hours premium if it applies.",
              },
              {
                title: "Insurance documentation",
                text: "sent to your property manager or board before the start date. Project-specific insurance documentation and additional-insured requests can be reviewed during project setup, subject to insurer approval and policy terms.",
              },
              {
                title: "The work",
                text: "done on the agreed schedule, in phases if the building stays open.",
              },
              {
                title: "Walkthrough",
                text: "you or your site contact walk the finished work with our lead before final payment.",
              },
            ]}
          />
          <p>
            <strong>Quoted separately, never hidden in a lump sum:</strong> wood rot or damaged trim found during prep,
            substrate failure such as delaminating stucco or rusted metal, and lift or equipment rental for high walls and
            multi-story exteriors. If we find something during the job, you approve the price in writing before we do it.
          </p>
          <PriceTable
            head={["Commercial repaint", "2026 Houston range"]}
            rows={[
              ["Office walls, standard height", `${PRICES_2026.commercialOffice} / sq ft of wall`],
              ["Retail interior", `${PRICES_2026.commercialRetail} / sq ft of wall`],
              ["Warehouse or shop walls", `${PRICES_2026.commercialWarehouse} / sq ft of wall`],
              ["Doors and frames", `${PRICES_2026.commercialDoorEach} each`],
              ["After-hours or weekend work", `adds ${PRICES_2026.commercialAfterHoursPremium}`],
            ]}
            note={<>Ranges for budgeting, not quotes. Exteriors are quoted from the elevations.</>}
          />
        </Section>

        <Section title="Houston weather and commercial exteriors">
          <p>
            Houston humidity, heavy rain and strong sun are hard on commercial coatings. South- and west-facing walls fade
            and chalk first from UV. North elevations get little sun, stay damp and grow mildew, so they are cleaned and
            treated before any primer goes on. Paint applied over damp, chalky or mildewed surfaces loses adhesion and
            peels early. On exteriors we use Sherwin-Williams Duration or Emerald; interiors use Sherwin-Williams or
            Benjamin Moore lines matched to the space. We schedule exterior coats around rain and dew so each one can
            cure.
          </p>
        </Section>

        <Section title="Why property managers hire us">
          <Bullets
            items={[
              <>
                <strong>Insured:</strong> {INSURANCE}, with a certificate of insurance for managers and HOA boards.
              </>,
              <>
                <strong>Warranty:</strong> a {T.warrantyYears}-year written workmanship warranty (
                <Link href="/warranty">see the terms</Link>).
              </>,
              <>
                <strong>In-house crew</strong> run by a crew lead from the first shift to the final walkthrough.
              </>,
              <>
                <strong>No money up front:</strong> free estimate, nothing due until you approve it in writing.
              </>,
              <>
                <strong>Five offices:</strong>{" "}
                {BUSINESS.locations.map((l, i) => (
                  <span key={l.slug}>
                    {i > 0 && (i === BUSINESS.locations.length - 1 ? " and " : ", ")}
                    <Link href={`/${l.pageSlug}`}>{l.city}</Link>
                  </span>
                ))}
                .
              </>,
            ]}
          />
          {project && (
            <Link
              href={`/projects/${project.slug}`}
              className="not-prose mt-8 grid md:grid-cols-2 gap-0 bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{project.neighborhood}</p>
                <h3 className="font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.summary}</p>
              </div>
            </Link>
          )}
        </Section>

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <Section title="Related services">
          <LinkGrid
            links={[
              { label: "Exterior painting", href: "/exterior-painting-houston-tx" },
              { label: "Interior painting", href: "/interior-painting-houston-tx" },
              { label: "Pressure washing", href: "/pressure-washing-houston-tx" },
              { label: "Wood rot repair", href: "/wood-rot-repair-houston-tx" },
              { label: "Stucco painting", href: "/stucco-painting-houston-tx" },
              { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
            ]}
          />
        </Section>

        <TrustChecklist />

        <CtaBlock title="Get a free commercial painting estimate">
          Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a>,{" "}
          <a href={BUSINESS.scheduler.embedUrl} target="_blank" rel="noopener noreferrer" className="underline">
            book a site walk
          </a>{" "}
          or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate online
          </Link>
          . Written and itemized, certificate of insurance before the start date, nothing due until you approve.
        </CtaBlock>
      </main>
      <Footer />
    </>
  )
}
