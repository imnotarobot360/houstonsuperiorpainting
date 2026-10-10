import { TrustChecklist } from "@/components/trust-checklist"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { generateLocationBusinessSchema, JsonLd } from "@/components/structured-data"
import {
  PageHero,
  QuickAnswer,
  Section,
  Bullets,
  Steps,
  PriceTable,
  CtaBlock,
  AuthorByline,
  OfficeNap,
  breadcrumbNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import { BUSINESS, PHONE_HREF, PRICES_2026, officeForPage } from "@/lib/business"
import { LOCAL_PROOF_PROJECTS } from "@/lib/projects"

// Houston office hub. Inner Loop focus (Heights, Memorial, Bellaire, West U,
// River Oaks). "Painting company in Houston" is the homepage's phrase: keep it
// out of this page's title and headings.

const PAGE_PATH = "/painters-houston-tx"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "House Painters in Houston, TX | Heights, Memorial & Bellaire"
const DESCRIPTION =
  "House painters for Houston homes in the Heights, Memorial, Bellaire, West U, and River Oaks. Prep-first crews since 2019. Free estimates. (346) 594-5960."

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
        url: "https://houstonsuperiorpainting.com/images/og/og-painters-houston.jpg",
        width: 1200,
        height: 630,
        alt: "House painters in Houston, TX — Houston Superior Painting",
      },
    ],
  },
}

const T = BUSINESS.trust

const FAQS = [
  {
    q: "How much does it cost to paint a house in Houston?",
    a: `Interior painting runs about ${PRICES_2026.interiorPerSqFt} per square foot of floor area in 2026. Most exterior repaints land between ${PRICES_2026.exteriorPerHome}, depending on size, stories, siding and how much prep and wood repair the house needs. Kitchen cabinets run ${PRICES_2026.cabinetsPerKitchen}. Your written estimate gives the exact number before anything is due.`,
  },
  {
    q: "When is the best time to paint a house exterior in Houston?",
    a: "October through April is the most reliable window. Summer work is possible, but we start early and stop before the hottest part of the afternoon, and we do not paint over damp siding after rain or heavy morning dew.",
  },
  {
    q: "How long does it take to paint a house in Houston?",
    a: "A full interior on a 2,500 sq ft home takes three to five days with a crew of three. A single-story exterior takes three to five days, a two-story five to eight, and kitchen cabinets four to six. Rain days add time on exteriors. The timeline is in your written estimate.",
  },
  {
    q: "Are you licensed and insured?",
    a: `Texas does not issue a state license for house painters, so insurance is the check that matters. We carry ${T.liabilityCoverage} general liability and workers' comp, and we send the certificate of insurance before work starts.`,
  },
  {
    q: "Do I have to pay a deposit before the estimate?",
    a: "No. The estimate is free and nothing is due until you approve it in writing. After you approve, a down payment schedules the job, and the balance is due after the final walkthrough.",
  },
]

const NEIGHBORHOODS: { name: string; href: string; note: ReactNode }[] = [
  {
    name: "The Heights",
    href: "/painters-the-heights-tx",
    note: (
      <>
        Many homes are older wood-sided bungalows. Expect more scraping, sanding and sill and trim repair than on newer
        homes, and on houses built before 1978, lead-safe work practices under the EPA&apos;s RRP rule. See our{" "}
        <Link href="/projects/heights-exterior-siding-repaint">two-story Heights exterior</Link> and{" "}
        <Link href="/projects/heights-painted-brick-bungalow">painted brick bungalow</Link>.
      </>
    ),
  },
  {
    name: "Memorial",
    href: "/painters-memorial-tx",
    note: (
      <>
        Tall trees keep a lot of siding in shade, which is where mildew grows. Shaded walls get a soft wash and a full
        dry-out before primer goes on.
      </>
    ),
  },
  {
    name: "Bellaire",
    href: "/painters-bellaire-tx",
    note: (
      <>
        A mix of original homes and newer rebuilds, many with stucco. Hairline stucco cracks are filled and coated before
        paint so water does not get behind it (<Link href="/stucco-painting-houston-tx">stucco painting</Link>).
      </>
    ),
  },
  {
    name: "West University",
    href: "/exterior-painting-bellaire-west-university",
    note: (
      <>
        Brick is common, and painted brick needs a breathable masonry primer, not a standard exterior primer. See our{" "}
        <Link href="/projects/west-university-painted-brick-exterior">painted brick exterior in West U</Link>.
      </>
    ),
  },
  {
    name: "River Oaks",
    href: "/painters-river-oaks-tx",
    note: (
      <>
        Larger homes with detailed wood trim, columns and windows. Most of the time on these jobs goes into trim prep,
        rot repair and caulking, which we list line by line in the estimate.
      </>
    ),
  },
]

const PROJECT_SLUGS = [
  "heights-exterior-siding-repaint",
  "heights-painted-brick-bungalow",
  "west-university-painted-brick-exterior",
]
const projects = PROJECT_SLUGS.map((slug) => LOCAL_PROOF_PROJECTS.find((p) => p.slug === slug)).filter(
  (p): p is (typeof LOCAL_PROOF_PROJECTS)[number] => Boolean(p),
)

const office = officeForPage("painters-houston-tx")!

export default function PaintersHoustonTX() {
  return (
    <>
      <JsonLd data={generateLocationBusinessSchema({ city: "Houston", slug: "painters-houston-tx" })} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: "Houston", path: PAGE_PATH },
          ]),
        }}
      />
      <TrustBar office="painters-houston-tx" />
      <Header />
      <main>
        <PageHero h1="House painters in Houston, TX" eyebrow="Houston Superior Painting" />

        <QuickAnswer>
          Houston Superior Painting paints homes across Houston&apos;s Inner Loop, including the Heights, Memorial,
          Bellaire, West University and River Oaks. Founded in {BUSINESS.founded} by {BUSINESS.founder.name}, we are
          headquartered in Cypress with a Houston office on Bissonnet St. We carry {T.liabilityCoverage} general liability
          and workers&apos; comp, back the work with a {T.warrantyYears}-year workmanship warranty, and collect nothing
          until you approve the estimate. Call <a href={PHONE_HREF}>{BUSINESS.phone}</a> or{" "}
          <Link href={ESTIMATE_PATH}>request a free estimate</Link>.
        </QuickAnswer>

        <Section title="Who this page is for">
          <p>
            Homeowners in Houston proper, especially the older and close-in neighborhoods inside and just outside the Loop:
            the Heights, Memorial, Bellaire, West University, River Oaks, and nearby areas such as Montrose, Upper Kirby
            and Rice Village. If you are repainting a whole house, refreshing a few rooms before a sale, or refinishing a
            kitchen, this is the right place to start. Businesses should see our{" "}
            <Link href="/commercial-painting-houston-tx">commercial painting</Link> page instead.
          </p>
        </Section>

        <Section title="What we paint on Houston homes">
          <Bullets
            items={[
              <>
                <Link href="/interior-painting-houston-tx">Interior painting</Link>: walls, ceilings, trim, doors and
                accent walls, with Benjamin Moore Aura or Regal Select.
              </>,
              <>
                <Link href="/exterior-painting-houston-tx">Exterior painting</Link>: wood, Hardie, brick and stucco, with
                Sherwin-Williams Duration or Emerald.
              </>,
              <>
                <Link href="/cabinet-refinishing-houston-tx">Cabinet refinishing</Link>: degreased, sanded, primed with a
                bonding primer and sprayed with cabinet enamel.
              </>,
              <>
                <Link href="/drywall-repair-houston-tx">Drywall repair</Link>: patches, water damage and texture matching
                before paint.
              </>,
              <>
                <Link href="/limewash-brick-painting-houston-tx">Limewash</Link>: a breathable, matte mineral finish for
                brick, applied by hand.
              </>,
            ]}
          />
        </Section>

        <Section title="Houston humidity and why prep comes first">
          <p>
            Houston air stays humid most of the year, rain comes fast, and summer sun is hard on south- and west-facing
            walls. Paint that goes on over damp, chalky or dirty surfaces loses its grip and peels early. That is why most
            of a job&apos;s time goes into prep, and every step is written into your estimate:
          </p>
          <Steps
            items={[
              { title: "Scrape", text: "remove every loose and peeling flake down to a sound edge." },
              { title: "Sand", text: "feather the edges and dull glossy surfaces so the next coat bonds." },
              { title: "Caulk", text: "seal joints, gaps and trim seams so rain cannot get behind the paint." },
              { title: "Prime", text: "spot-prime bare wood, repairs and stains with the right primer for the surface." },
              {
                title: "Two coats",
                text: "two full finish coats, applied only when surfaces are dry and the weather allows each coat to cure.",
              },
            ]}
          />
        </Section>

        <Section title="Neighborhoods we paint in Houston">
          <ul>
            {NEIGHBORHOODS.map((n) => (
              <li key={n.name}>
                <strong>
                  <Link href={n.href}>{n.name}</Link>:
                </strong>{" "}
                {n.note}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Houston house painting prices (2026)">
          <PriceTable
            head={["Project", "2026 Houston range"]}
            rows={[
              ["Interior painting", `${PRICES_2026.interiorPerSqFt} per sq ft of floor area`],
              ["Exterior repaint, whole house", PRICES_2026.exteriorPerHome],
              ["Kitchen cabinet refinishing", PRICES_2026.cabinetsPerKitchen],
            ]}
            note={
              <>
                These are 2026 ranges, not quotes. Peeling paint, wood rot and heavy drywall patching add cost. Room-by-room
                and home-size tables are in the{" "}
                <Link href="/houston-painting-cost-guide" className="text-primary font-medium underline">
                  Houston painting cost guide
                </Link>
                .
              </>
            }
          />
        </Section>

        {projects.length > 0 && (
          <Section title="Recent Houston projects">
            <div className="not-prose grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{p.neighborhood}</p>
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary">{p.title}</h3>
                    <p className="text-muted-foreground text-sm">{p.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        )}

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <Section title="Our Houston office">
          <OfficeNap office={office} />
          <p className="mt-6">
            Other offices: <Link href="/painters-cypress-tx">Cypress (HQ)</Link>,{" "}
            <Link href="/painters-katy-tx">Katy</Link>, <Link href="/painters-sugar-land-tx">Sugar Land</Link> and{" "}
            <Link href="/painters-magnolia-tx">Magnolia</Link>.
          </p>
        </Section>

        <TrustChecklist />

        <CtaBlock title="Book a free Houston estimate">
          Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a>,{" "}
          <a href={BUSINESS.scheduler.embedUrl} target="_blank" rel="noopener noreferrer" className="underline">
            book a walkthrough time
          </a>{" "}
          or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate online
          </Link>
          . Written and itemized, nothing due until you approve, {T.warrantyYears}-year workmanship warranty.
        </CtaBlock>

        <AuthorByline />
      </main>
      <Footer />
    </>
  )
}
