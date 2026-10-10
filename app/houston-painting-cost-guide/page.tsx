import { TrustChecklist } from "@/components/trust-checklist"
import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"
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
  AuthorByline,
  breadcrumbNode,
  articleNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business"

// The site's price page: it owns "how much does painting cost in Houston" queries.
// Every number comes from PRICES_2026. Typical ranges, never "as low as".

const P = PRICES_2026
const PAGE_PATH = "/houston-painting-cost-guide"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "House Painting Cost in Houston, TX | 2026 Price Guide"
const DESCRIPTION = `2026 Houston painting prices: interiors ${P.interiorPerSqFt}/sq ft, exteriors ${P.exteriorPerHome}, cabinets ${P.cabinetsPerKitchen}. Free itemized estimates.`
const H1 = "House painting cost in Houston, TX (2026)"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Houston Superior Painting",
    type: "article",
    images: [
      {
        url: "https://houstonsuperiorpainting.com/images/og/og-interior-painting.jpg",
        width: 1200,
        height: 630,
        alt: "House painting cost in Houston, TX — 2026 price guide",
      },
    ],
  },
}

// Visible answers may carry links; `text` is the exact plain-text rendering used
// for the FAQPage schema so the two match word for word.
const FAQS: { q: string; text: string; a?: ReactNode }[] = [
  {
    q: "How much does it cost to paint a 2,500 sq ft house in Houston?",
    text: `Typically ${P.fullInterior2500} for a full interior and ${P.exterior2500TwoStory} for a two-story exterior in 2026. Condition, wood rot and color changes move it within or above those ranges.`,
  },
  {
    q: "Do Houston painters charge by the square foot?",
    text: `Most price by the job, using square footage and condition. As a rule of thumb, interiors run ${P.interiorPerSqFt} and exteriors ${P.exteriorPerSqFt} per square foot of floor area. The written estimate is the number that counts.`,
  },
  {
    q: "How much does it cost to paint one room?",
    text: `A typical 12×14 bedroom runs ${P.singleRoom}, including walls, ceiling and trim.`,
  },
  {
    q: "How much does it cost to paint kitchen cabinets in Houston?",
    text: `${P.cabinetsPerDoor} per door and drawer front, so most kitchens land between ${P.cabinetsPerKitchen}. See Cabinet Refinishing in Houston.`,
    a: (
      <p>
        {P.cabinetsPerDoor} per door and drawer front, so most kitchens land between {P.cabinetsPerKitchen}. See{" "}
        <Link href="/cabinet-refinishing-houston-tx">Cabinet Refinishing in Houston</Link>.
      </p>
    ),
  },
  {
    q: "Does the price include paint?",
    text: "Yes, ours does. Ask any painter whether product is included; some quote labor only.",
  },
  {
    q: "How often should I repaint my exterior in Houston?",
    text: "Every 5–7 years for most homes, sooner on south- and west-facing walls. See How Often to Paint a House in Houston.",
    a: (
      <p>
        Every 5–7 years for most homes, sooner on south- and west-facing walls. See{" "}
        <Link href="/how-often-paint-house-houston">How Often to Paint a House in Houston</Link>.
      </p>
    ),
  },
  {
    q: "Is a very low quote a red flag?",
    text: `Often. A price well below ${P.exteriorPerSqFt} per sq ft on an exterior usually means one coat, no primer, skipped prep or no insurance. Compare what each estimate lists, not just the total.`,
  },
  {
    q: "Do you offer financing?",
    text: "Yes. See Painting Financing.",
    a: (
      <p>
        Yes. See <Link href="/painting-financing-houston">Painting Financing</Link>.
      </p>
    ),
  },
]

export default function HoustonPaintingCostGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            articleNode({ path: PAGE_PATH, headline: H1, description: DESCRIPTION }),
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Houston Painting Cost Guide", path: PAGE_PATH },
            ]),
          ],
        }}
      />
      {/* One FAQPage block, plain text identical to the visible answers below. */}
      <FAQ items={FAQS.map((f) => ({ q: f.q, a: f.text }))} schemaOnly />
      <Header />
      <main>
        <PageHero h1={H1} eyebrow="2026 Houston pricing" />

        <QuickAnswer>
          Typical 2026 Houston ranges: interior painting runs {P.interiorPerSqFt} per square foot of floor area, so a 2,500
          sq ft full interior is usually {P.fullInterior2500}. Most exterior repaints cost {P.exteriorPerHome}, and a 2,500
          sq ft two-story often runs {P.exterior2500TwoStory}. Kitchen cabinets run {P.cabinetsPerDoor} per door and drawer
          front, or {P.cabinetsPerKitchen} for most kitchens. These are typical ranges, not a quote. For a written, itemized
          number, call <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
        </QuickAnswer>

        <Section title="Interior painting cost">
          <PriceTable
            head={["Interior project", "Typical 2026 Houston range"]}
            rows={[
              ["Per sq ft of floor area", P.interiorPerSqFt],
              ["Single room (12×14)", P.singleRoom],
              ["Full interior, 1,500 sq ft", P.fullInterior1500],
              ["Full interior, 2,500 sq ft", P.fullInterior2500],
              ["Full interior, 4,000+ sq ft", P.fullInterior4000],
              ["Trim and baseboards, whole home", P.trimWholeHome],
              ["Ceilings, whole home", P.ceilingsWholeHome],
            ]}
            note={
              <>
                More detail: <Link href="/interior-painting-cost-houston">interior painting cost in Houston</Link>.
              </>
            }
          />
        </Section>

        <Section title="Exterior painting cost">
          <PriceTable
            head={["Home size (floor area)", "1 story", "2 story"]}
            rows={[
              ["1,500 sq ft", P.exterior1500OneStory, P.exterior1500TwoStory],
              ["2,000 sq ft", P.exterior2000OneStory, P.exterior2000TwoStory],
              ["2,500 sq ft", P.exterior2500OneStory, P.exterior2500TwoStory],
              ["3,000 sq ft", P.exterior3000OneStory, P.exterior3000TwoStory],
              ["4,000+ sq ft", P.exterior4000OneStory, P.exterior4000TwoStory],
            ]}
            note={
              <>
                {P.exteriorPerSqFt} per sq ft of floor area; most homes {P.exteriorPerHome}. More detail:{" "}
                <Link href="/exterior-house-painting-houston-cost-guide">exterior painting cost guide</Link>.
              </>
            }
          />
        </Section>

        <Section title="Cabinet painting cost">
          <PriceTable
            head={["Kitchen", "Typical 2026 Houston range"]}
            rows={[
              ["Per door and drawer front", P.cabinetsPerDoor],
              ["Galley, 10–15 fronts", P.cabinetsGalley],
              ["Average, 15–25 fronts", P.cabinetsAverage],
              ["Large with island, 25–40 fronts", P.cabinetsLarge],
            ]}
            note={
              <>
                Most kitchens: {P.cabinetsPerKitchen}. How the work is done:{" "}
                <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link>.
              </>
            }
          />
        </Section>

        <Section title="What moves the price">
          <Bullets
            items={[
              <>
                <strong>Stories:</strong> a two-story exterior costs more than a one-story of the same floor area because of
                ladders, staging and more wall.
              </>,
              <>
                <strong>Condition:</strong> peeling, chalking and mildew mean more washing, scraping and primer.
              </>,
              <>
                <strong>Wood rot:</strong> rotted siding, trim or fascia has to be replaced before paint goes on.
              </>,
              <>
                <strong>Color change:</strong> going from dark to light (or the reverse) can need primer or an extra coat.
              </>,
              <>
                <strong>Oil vs latex:</strong> old oil-based trim or cabinets need a bonding primer before latex will stick.
              </>,
              <>
                <strong>Cabinet door count:</strong> cabinets are priced per door and drawer front, so the count drives the
                total.
              </>,
              <>
                <strong>Commercial after-hours:</strong> occupied offices and stores painted at night or on weekends add{" "}
                {P.commercialAfterHoursPremium} (<Link href="/commercial-painting-houston-tx">commercial painting</Link>).
              </>,
            ]}
          />
        </Section>

        <Section title="What is included">
          <Steps
            items={[
              { title: "Wash", text: "pressure or soft wash on exteriors to remove dirt, chalk and mildew." },
              { title: "Scrape", text: "loose and peeling paint removed to a sound edge." },
              { title: "Sand", text: "edges feathered and glossy surfaces dulled so new paint bonds." },
              { title: "Caulk", text: "gaps, joints and trim seams sealed." },
              { title: "Prime", text: "bare wood, repairs and stains spot-primed with the right primer." },
              { title: "Two coats", text: "two full finish coats, with paint included in the price." },
              { title: "Furniture", text: "on interiors, we move furniture away from the walls, cover it and put it back." },
            ]}
          />
        </Section>

        <Section title="What is extra">
          <p>These are priced line by line in your estimate, and anything found mid-job is approved by you in writing first:</p>
          <Bullets
            items={[
              <>
                <Link href="/wood-rot-repair-houston-tx">Wood rot repair</Link> and replacement siding or trim
              </>,
              <>
                <Link href="/drywall-repair-houston-tx">Drywall repair</Link> beyond small patches
              </>,
              <>
                <Link href="/wallpaper-removal-houston-tx">Wallpaper removal</Link>
              </>,
              <>
                <Link href="/stucco-painting-houston-tx">Stucco crack repair</Link> and elastomeric coatings
              </>,
              <>Extra primer or coats for a major color change, or bonding primer over oil paint</>,
              <>Lifts or extra staging for three-story walls and high ceilings</>,
            ]}
          />
        </Section>

        <Section title="Houston climate and how long paint lasts">
          <p>
            Houston&apos;s humidity, heavy rain and strong sun wear exterior paint faster than in dry climates. South- and
            west-facing walls fade and chalk first; shaded north walls grow mildew. Plan to repaint most exteriors every
            5–7 years, sooner on the sunny sides. Good prep and a premium exterior paint are what get a job to the long end of
            that range.
          </p>
        </Section>

        <Section title="How to get a number that holds">
          <Bullets
            items={[
              <>
                <strong>Get an on-site walkthrough.</strong> A number given over the phone cannot account for rot, peeling
                or cabinet door count.
              </>,
              <>
                <strong>Ask for a written, itemized estimate</strong> that lists the areas, prep steps, primer, product
                line, sheen and number of coats.
              </>,
              <>
                <strong>Ask how hidden damage is handled.</strong> Rot found during prep should be priced and approved in
                writing before it is fixed.
              </>,
              <>
                <strong>Compare line by line.</strong> Two totals only mean something when the scopes match. Our{" "}
                <Link href="/houston-painting-contractor-guide">guide to hiring a Houston painter</Link> has the full
                checklist.
              </>,
            ]}
          />
        </Section>

        <FAQ
          items={FAQS.map((f) => ({ q: f.q, a: f.a ?? f.text }))}
          injectSchema={false}
          title="Frequently asked questions"
          variant="compact"
        />

        <TrustChecklist />

        <CtaBlock title="Get a free itemized estimate">
          Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate online
          </Link>
          . Written and itemized, nothing due until you approve, {BUSINESS.trust.warrantyYears}-year workmanship warranty.
        </CtaBlock>

        <AuthorByline extra="Prices reviewed quarterly." />
      </main>
      <Footer />
    </>
  )
}
