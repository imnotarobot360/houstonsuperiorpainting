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
  PriceTable,
  CtaBlock,
  AuthorByline,
  breadcrumbNode,
  articleNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import { PRICES_2026 } from "@/lib/business"

const PAGE_PATH = "/houston-painting-cost-guide"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "Houston Painting Cost Guide 2026 | Interior, Exterior & Cabinets"
const DESCRIPTION =
  `What painting costs in Houston in 2026: ${PRICES_2026.interiorPerSqFt}/sq ft interior, ${PRICES_2026.exteriorPerSqFt}/sq ft exterior, ${PRICES_2026.cabinetsPerKitchen} for cabinets. Real ranges from 500+ Houston jobs.`
const H1 = "How Much Does Painting Cost in Houston? (2026 Guide)"

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
        alt: "Houston painting cost guide — interior, exterior, and cabinet pricing",
      },
    ],
  },
}

const linkCls = "text-primary font-medium underline"

// Visible answers may carry links; `text` is the exact plain-text rendering used
// for the FAQPage schema so the two match word for word.
const FAQS: { q: string; text: string; a?: ReactNode }[] = [
  {
    q: "How much does it cost to paint a 2,500 sq ft house in Houston?",
    text: `${PRICES_2026.fullInterior2500} for the interior, ${PRICES_2026.exterior2500TwoStory} for a two-story exterior, in 2026.`,
  },
  {
    q: "Do painters charge per square foot or per hour in Houston?",
    text: `Most quote per project based on square footage and condition. Expect ${PRICES_2026.interiorPerSqFt}/sq ft interior. Hourly rates for touch-ups run $45–$75.`,
  },
  {
    q: "How much does it cost to paint one room?",
    text: `${PRICES_2026.singleRoom} for a 12×14 bedroom including ceiling and trim.`,
  },
  {
    q: "Does the price include paint?",
    text: "Yes, ours does. Ask any painter whether product is included; some quote labor only.",
  },
  {
    q: "Why do Houston exteriors cost more than the national average?",
    text: "More prep. Humidity, mildew, and UV degrade surfaces faster than in dry climates, so washing, scraping, and priming take longer.",
  },
  {
    q: "Is a low quote a red flag?",
    text: "Below $1.50/sq ft exterior usually means one coat, no primer, or no insurance.",
  },
  {
    q: "How often should I repaint in Houston?",
    text: "Exteriors every 5–7 years, interiors every 7–10 years. See How Often to Paint a House in Houston.",
    a: (
      <p>
        Exteriors every 5–7 years, interiors every 7–10 years. See{" "}
        <Link href="/how-often-paint-house-houston" className="text-emerald-700 underline">
          How Often to Paint a House in Houston
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Do you offer financing?",
    text: "Yes. See Painting Financing.",
    a: (
      <p>
        Yes. See{" "}
        <Link href="/painting-financing-houston" className="text-emerald-700 underline">
          Painting Financing
        </Link>
        .
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
          Painting a house in Houston costs {PRICES_2026.interiorPerSqFt} per square foot for interiors and {PRICES_2026.exteriorPerSqFt} per square foot for
          exteriors in 2026. A 2,500 sq ft home runs {PRICES_2026.fullInterior2500} inside and {PRICES_2026.exterior2500TwoStory} outside. Kitchen cabinets run{" "}
          {PRICES_2026.cabinetsPerKitchen}. These ranges come from 500+ Houston Superior Painting jobs since 2019 and include labor, prep, and
          premium paint. Call (346) 594-5960 for a fixed quote.
        </QuickAnswer>

        <Section title="Short answer">
          <Bullets
            items={[
              <>
                <Link href="/interior-painting-houston-tx">Interior</Link>: {PRICES_2026.interiorPerSqFt}/sq ft of floor
                area, {PRICES_2026.singleRoom} per room
              </>,
              <>
                <Link href="/exterior-painting-houston-tx">Exterior</Link>: {PRICES_2026.exteriorPerSqFt}/sq ft of floor
                area, {PRICES_2026.exteriorPerHome} per home
              </>,
              <>
                <Link href="/cabinet-refinishing-houston-tx">Cabinets</Link>: {PRICES_2026.cabinetsPerDoor} per door and drawer front,{" "}
                {PRICES_2026.cabinetsPerKitchen} per kitchen
              </>,
            ]}
          />
        </Section>

        <Section title="Interior painting cost in Houston">
          <PriceTable
            head={["Project", "Range", "Typical"]}
            rows={[
              ["Single room (12×14)", PRICES_2026.singleRoom, "$500"],
              ["Accent wall", PRICES_2026.accentWall, "$250"],
              ["Full interior, 1,500 sq ft", PRICES_2026.fullInterior1500, "$4,000"],
              ["Full interior, 2,500 sq ft", PRICES_2026.fullInterior2500, "$6,000"],
              ["Full interior, 4,000+ sq ft", PRICES_2026.fullInterior4000, "$10,000"],
              ["Trim and baseboards, whole home", PRICES_2026.trimWholeHome, "$2,000"],
              ["Ceilings, whole home", PRICES_2026.ceilingsWholeHome, "$2,500"],
            ]}
          />
          <p>
            Prices assume two coats of Sherwin-Williams or Benjamin Moore on walls in fair condition. Heavy patching (see{" "}
            <Link href="/drywall-repair-houston-tx">drywall repair</Link>), wallpaper removal, or 12-ft ceilings add
            15–30%. Full detail: <Link href="/interior-painting-cost-houston">Interior Painting Cost in Houston</Link>.
          </p>
        </Section>

        <Section title="Exterior painting cost in Houston">
          <PriceTable
            head={["Home size", "1 story", "2 story"]}
            rows={[
              ["1,500 sq ft", PRICES_2026.exterior1500OneStory, PRICES_2026.exterior1500TwoStory],
              ["2,000 sq ft", PRICES_2026.exterior2000OneStory, PRICES_2026.exterior2000TwoStory],
              ["2,500 sq ft", PRICES_2026.exterior2500OneStory, PRICES_2026.exterior2500TwoStory],
              ["3,000 sq ft", PRICES_2026.exterior3000OneStory, PRICES_2026.exterior3000TwoStory],
              ["4,000+ sq ft", PRICES_2026.exterior4000OneStory, PRICES_2026.exterior4000TwoStory],
            ]}
          />
          <p>
            Includes pressure wash, scrape, caulk, prime, and two coats. Wood rot repair runs $75–$150 per linear foot
            extra. Stucco crack repair and elastomeric coating add $1–$2/sq ft. Full detail:{" "}
            <Link href="/exterior-house-painting-houston-cost-guide">Exterior Painting Cost Guide</Link>.
          </p>
        </Section>

        <Section title="Cabinet painting cost in Houston">
          <PriceTable
            head={["Kitchen size", "Range"]}
            rows={[
              ["Galley, 10–15 doors", PRICES_2026.cabinetsGalley],
              ["Average, 15–25 doors", PRICES_2026.cabinetsAverage],
              ["Large with island, 25–40 doors", PRICES_2026.cabinetsLarge],
            ]}
          />
          <p>
            Sprayed cabinet enamel, doors removed and finished flat. Full detail:{" "}
            <Link href="/blog/cost-to-paint-kitchen-cabinets-houston-tx">Cost to Paint Kitchen Cabinets</Link>.
          </p>
        </Section>

        <Section title="What moves the price in Houston">
          <ol>
            <li>
              <strong>Surface condition.</strong> Peeling, chalking, and mildew mean more prep. Prep is 50–60% of labor on
              Houston exteriors.
            </li>
            <li>
              <strong>Siding type.</strong> Brick and stucco absorb more paint than Hardie. Wood siding needs the most
              scraping.
            </li>
            <li>
              <strong>Stories and access.</strong> Three-story homes and steep lots add 20–40% for lifts and ladders.
            </li>
            <li>
              <strong>Paint grade.</strong> Sherwin-Williams Duration costs about $30/gal more than SuperPaint and lasts
              3–5 years longer in Gulf Coast sun.
            </li>
            <li>
              <strong>HOA requirements.</strong> Some Katy and Sugar Land HOAs require specific brands or sheens.
            </li>
          </ol>
        </Section>

        <Section title="Is it cheaper to paint yourself?">
          <p>
            A DIY interior on 2,500 sq ft costs $800–$1,500 in materials and rentals and takes most homeowners two to three
            weekends. The gap versus a professional is $2,500–$6,000, mostly labor. DIY exteriors in Houston usually fail
            early because the surface wasn&apos;t washed and primed for humidity.
          </p>
          <p>
            If you hire it out, read{" "}
            <Link href="/questions-to-ask-before-hiring-painters">how to hire a painter in Houston</Link> before you compare
            quotes.
          </p>
        </Section>

        <FAQ
          items={FAQS.map((f) => ({ q: f.q, a: f.a ?? f.text }))}
          injectSchema={false}
          title="Frequently asked questions"
          variant="compact"
        />

        <CtaBlock title="Get a fixed price">
          Call (346) 594-5960 or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate
          </Link>
          . Written quote in 24 hours, nothing due until you approve, 5-year warranty.
        </CtaBlock>

        <AuthorByline extra="Prices reviewed quarterly." />
      </main>
      <Footer />
    </>
  )
}
