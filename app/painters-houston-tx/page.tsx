import type { Metadata } from "next"
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
import { PRICES_2026, SERVICE_AREAS, officeForPage } from "@/lib/business"
import { PROJECTS } from "@/lib/projects"

const PAGE_PATH = "/painters-houston-tx"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "House Painters in Houston TX | Houston Superior Painting"
const DESCRIPTION =
  "Houston Superior Painting: interior, exterior, and cabinet painters serving Greater Houston since 2019. Five offices, $2M insured, 5-year warranty. Free estimates: (346) 594-5960."

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

const FAQS = [
  {
    q: "Are you insured in Texas?",
    a: 'Texas does not license painters, so any painter claiming a "state painting license" is misleading you. Houston Superior Painting carries $2M general liability and workers\' compensation. Ask any painter for the certificate of insurance before they start.',
  },
  {
    q: "How much does it cost to paint a house in Houston?",
    a: `A full interior on a 2,500 sq ft home runs ${PRICES_2026.fullInterior2500} in 2026. A two-story exterior of the same size runs ${PRICES_2026.exterior2500TwoStory}.`,
  },
  {
    q: "How long does it take to paint a house in Houston?",
    a: "A full interior on a 2,500 sq ft home takes three to five days with a crew of three. A single-story exterior of the same size takes three to five days, a two-story five to eight, and kitchen cabinets four to six. Your written estimate states the timeline before any work starts.",
  },
  {
    q: "Do you require a deposit?",
    a: "Only after you approve the estimate. The estimate is free and we collect nothing before you approve it. Once you approve, a down payment schedules the job, and the balance is due after the final walkthrough. Be cautious of any painter who wants a large share of the price before you have a written, approved estimate.",
  },
  {
    q: "What does the 5-year warranty cover?",
    a: "Peeling, blistering, and flaking caused by our workmanship. It does not cover damage from water intrusion, settling, or surfaces you asked us not to prep.",
  },
  {
    q: "Do you work with HOAs?",
    a: "Yes. We pull the approved color list and submit the ARC form for Katy, Cypress, Sugar Land, and Woodlands communities.",
  },
  {
    q: "When is the best time to paint an exterior in Houston?",
    a: "October through April. Summer afternoons are too hot and humid for paint to cure properly.",
  },
  {
    q: "Should I paint my house myself or hire a painter?",
    a: "A single bedroom, accent wall, or closet is a reasonable DIY project. Exteriors are different: ladder work, summer heat, humidity-sensitive timing, and prep that is easy to get wrong. Rushed or skipped prep is the usual reason a Houston exterior peels early, and a DIY job carries no warranty.",
  },
  {
    q: "How long does exterior paint last in Houston?",
    a: "With full prep and a premium exterior paint such as Sherwin-Williams Duration or Emerald, plan on roughly five to seven years before a full repaint, longer on shaded walls. Budget paint or skipped prep fails much sooner, with peeling, fading, and chalking on the sunny sides first.",
  },
  {
    q: "Do you have an office near me?",
    a: "Cypress (HQ), Houston, Katy, Sugar Land, and Magnolia.",
  },
]

const NEARBY = ["Katy", "Cypress", "Sugar Land", "Magnolia", "The Woodlands", "Memorial", "The Heights", "Pearland"]
const nearbyAreas = NEARBY.map((name) => SERVICE_AREAS.find((a) => a.name === name)!).filter(Boolean)

const HOUSTON_PROJECT_SLUGS = [
  "memorial-whole-home-interior-repaint",
  "river-oaks-exterior-restoration",
  "west-university-kitchen-cabinet-refinishing",
]
const houstonProjects = HOUSTON_PROJECT_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(
  (p): p is (typeof PROJECTS)[number] => Boolean(p),
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
      <TrustBar />
      <Header />
      <main>
        <PageHero h1="House Painters in Houston, TX" eyebrow="Houston Superior Painting" />

        <QuickAnswer>
          Houston Superior Painting is a Houston painting contractor founded in 2019 by Juan Serra, with 500+ completed
          projects and a 4.9-star rating across 200+ Google reviews. We paint interiors, exteriors, and cabinets across
          Greater Houston from five offices, carry $2M liability insurance, and back every job with a 5-year workmanship
          warranty. Free estimates: (346) 594-5960.
        </QuickAnswer>

        <Section title="Who we paint for">
          <p>
            Homeowners in Houston, Katy, Cypress, Sugar Land, Magnolia, The Woodlands, and the surrounding suburbs. Most of
            our work is full interior repaints, exterior repaints on brick, stucco, and HardiePlank homes, and kitchen
            cabinet refinishing. We also paint offices, retail, and{" "}
            <Link href="/commercial-painting-houston-tx">light commercial buildings</Link>.
          </p>
        </Section>

        <Section title="Our painting services">
          <Bullets
            items={[
              <>
                <Link href="/interior-painting-houston-tx">Interior painting</Link> — walls, ceilings, trim, doors, accent
                walls. Two coats of Sherwin-Williams or Benjamin Moore, low-VOC.
              </>,
              <>
                <Link href="/exterior-painting-houston-tx">Exterior painting</Link> — pressure wash, scrape, caulk, prime,
                two coats. Brick, stucco, Hardie, wood siding.
              </>,
              <>
                <Link href="/cabinet-refinishing-houston-tx">Cabinet refinishing</Link> — degrease, sand, bonding primer,
                sprayed cabinet enamel. Factory-smooth finish.
              </>,
              <>
                <Link href="/drywall-repair-houston-tx">Drywall repair</Link> — patches, water damage, texture matching
                before paint.
              </>,
              <>
                <Link href="/limewash-brick-painting-houston-tx">Limewash</Link> and{" "}
                <Link href="/stucco-painting-houston-tx">stucco finishes</Link> — limewash brick, German smear, elastomeric
                stucco coatings.
              </>,
              <>
                <Link href="/soft-washing-houston-tx">Soft washing</Link> and{" "}
                <Link href="/pressure-washing-houston-tx">pressure washing</Link> — mildew removal before exterior
                painting.
              </>,
            ]}
          />
        </Section>

        <Section title="How we paint a Houston home">
          <Steps
            items={[
              {
                title: "Estimate",
                text: "on-site walkthrough, written scope with square footage, product, and coat count. Free, and nothing is due until you approve it.",
              },
              {
                title: "Prep",
                text: "this is 60% of the job in Houston. Pressure wash to kill mildew, scrape and sand, replace rotted wood, caulk every gap, prime bare surfaces.",
              },
              {
                title: "Paint",
                text: "two full coats, sprayed and back-rolled on exteriors, cut and rolled on interiors. We don't paint when humidity is above 85% or surfaces are above 90°F.",
              },
              {
                title: "Walkthrough",
                text: "you inspect every room or elevation with the crew lead before final payment.",
              },
            ]}
          />
        </Section>

        <Section title="Why Houston is hard on paint">
          <p>
            Houston averages 90% morning humidity and 100+ days above 90°F. Paint applied over damp or chalky surfaces
            peels within two years. South- and west-facing walls fade and chalk fastest. Mildew grows on shaded north
            walls. HOA communities in Katy, Cypress, and Sugar Land restrict exterior colors and require approval before
            work starts. We handle the ARC submission for you.
          </p>
        </Section>

        <Section title="How to choose a painter in Houston">
          <Bullets
            items={[
              <>
                <strong>Proof of insurance.</strong>{" "}Ask for the certificate showing general liability and workers&apos;
                comp. Texas has no painting license, so insurance is the check that matters.
              </>,
              <>
                <strong>Prep in writing.</strong> The estimate should list pressure washing, scraping, caulking, and priming,
                plus the product and number of coats. A verbal quote is not a scope.
              </>,
              <>
                <strong>A written workmanship warranty.</strong> Ours is 5 years. No warranty usually means no confidence in
                the prep.
              </>,
              <>
                <strong>No large upfront payment.</strong> Nothing should be due before you approve a written estimate.
              </>,
              <>
                <strong>A plan for Houston weather.</strong> Ask how they schedule around humidity, heat, and rain. Painting
                at high humidity causes adhesion failure.
              </>,
              <>
                <strong>Be wary of the lowest bid.</strong> A price far below the others usually means skipped prep or
                uninsured labor.
              </>,
            ]}
          />
        </Section>

        <Section title="Houston painting prices (2026)">
          <PriceTable
            head={["Project", "2026 Houston range"]}
            rows={[
              ["Single room (12×14)", PRICES_2026.singleRoom],
              ["Full interior, 2,500 sq ft", PRICES_2026.fullInterior2500],
              ["Exterior, 2,500 sq ft two-story", PRICES_2026.exterior2500TwoStory],
              ["Kitchen cabinets, 15–25 doors", PRICES_2026.cabinetsAverage],
              ["Whole-home trim and baseboards", PRICES_2026.trimWholeHome],
            ]}
            note={
              <>
                These are 2026 Houston estimates, not quotes. Peeling paint, wood rot, and heavy patching add cost. See the
                full <Link href="/houston-painting-cost-guide" className="text-primary font-medium underline">Houston Painting Cost Guide</Link>.
              </>
            }
          />
        </Section>

        <Section title="Paints we use">
          <p>
            Sherwin-Williams Duration and Emerald for exteriors — both hold up to Gulf Coast UV and moisture. Benjamin
            Moore Aura or Regal Select for interiors. Cabinet enamel: Benjamin Moore Advance or Sherwin-Williams Emerald
            Urethane. We buy at contractor pricing and pass the product through at cost.
          </p>
        </Section>

        <Section title="Recent Houston projects">
          <div className="not-prose grid md:grid-cols-3 gap-6">
            {houstonProjects.map((p) => (
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

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <Section title="Visit our Houston office">
          <OfficeNap office={office} />
          <p className="mt-6">
            Other offices: <Link href="/painters-cypress-tx">Cypress painters (HQ)</Link>,{" "}
            <Link href="/painters-katy-tx">Katy painters</Link>,{" "}
            <Link href="/painters-sugar-land-tx">Sugar Land painters</Link>, and{" "}
            <Link href="/painters-magnolia-tx">Magnolia painters</Link>.
          </p>
        </Section>

        <Section title="Nearby areas we serve">
          <p>
            {nearbyAreas.map((a, i) => (
              <span key={a.slug}>
                {i > 0 && " · "}
                <Link href={`/${a.slug}`}>{a.name}</Link>
              </span>
            ))}
          </p>
        </Section>

        <CtaBlock title="Get a free Houston painting estimate">
          Call (346) 594-5960 or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate online
          </Link>
          . Written scope in 24 hours, nothing due until you approve, 5-year warranty.
        </CtaBlock>

        <AuthorByline />
      </main>
      <Footer />
    </>
  )
}
