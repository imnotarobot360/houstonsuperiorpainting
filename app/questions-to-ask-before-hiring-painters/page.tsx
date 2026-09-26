import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd } from "@/components/structured-data"
import {
  PageHero,
  QuickAnswer,
  Section,
  Bullets,
  CtaBlock,
  AuthorByline,
  breadcrumbNode,
  articleNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"

const PAGE_PATH = "/questions-to-ask-before-hiring-painters"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "How to Hire a Painter in Houston: Insurance, Prep, Warranty"
const DESCRIPTION =
  "Texas doesn't license painters. Here's how Houston homeowners vet a painting contractor: insurance proof, prep scope, paint spec, warranty terms, and the 8 questions to ask."
const H1 = "How to Hire a Painter in Houston"

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
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630 }],
  },
}

const FAQS = [
  { q: "Do painters need a license in Texas?", a: "No. Texas does not license painters. Verify insurance instead." },
  {
    q: "How much insurance should a painter carry?",
    a: "At least $1M general liability. Houston Superior Painting carries $2M plus workers' compensation.",
  },
  { q: "Is it normal to pay a deposit?", a: "Yes, a down payment after you approve the written estimate is normal. We collect nothing before you approve." },
  { q: "How many quotes should I get?", a: "Three. Compare prep and product, not just the total." },
  {
    q: "Should I hire a painter who uses subcontractors?",
    a: "Only if their COI covers the subs and one person is accountable on site.",
  },
  {
    q: "What warranty is standard?",
    a: "One to two years is common. Five years on workmanship is the top of the market in Houston.",
  },
  {
    q: "How do I check a painter's reviews?",
    a: "Google Business Profile for the office nearest you, then BBB. Ignore review counts; read the three-star ones.",
  },
  {
    q: "What if a painter damages my property?",
    a: "Their liability insurance pays. That's why you get the COI first.",
  },
]

export default function HowToHireAPainterHoustonPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            articleNode({ path: PAGE_PATH, headline: H1, description: DESCRIPTION }),
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "How to Hire a Painter in Houston", path: PAGE_PATH },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <PageHero h1={H1} eyebrow="Hiring guide" />

        <QuickAnswer>
          Texas does not issue painting licenses, so &ldquo;licensed painter&rdquo; means nothing in Houston. Vet a painter
          on four things instead: a current certificate of insurance ($1M+ liability and workers&apos; comp), a written prep
          scope, the exact paint product and coat count, and a written workmanship warranty. Any painter who can&apos;t
          produce all four in writing before the job is a risk.{" "}
          <Link href="/about" className="text-primary font-medium underline">
            Houston Superior Painting
          </Link>{" "}
          provides all four on every estimate: (346) 594-5960.
        </QuickAnswer>

        <Section title="Short answer">
          <Bullets
            items={[
              <>Ask for the insurance certificate, not a verbal &ldquo;yes we&apos;re insured&rdquo;</>,
              <>Get prep, product, and coats in writing; that&apos;s where cheap quotes cut corners</>,
              <>Never pay in full upfront; a down payment after you approve the estimate is normal, and nothing should be due before you approve.</>,
            ]}
          />
        </Section>

        <Section title="Licensed vs. insured: what Texas actually requires">
          <p>
            The Texas Department of Licensing and Regulation does not license house painters. No painter in Houston holds a
            state painting license. What matters is insurance: general liability covers damage to your home, workers&apos;
            compensation covers a painter who falls off your roof. Without workers&apos; comp, an injured worker can sue
            the homeowner. Ask for the certificate of insurance (COI) with your name listed as certificate holder; the
            insurer emails it directly.
          </p>
        </Section>

        <Section title="The 8 questions to ask every Houston painter">
          <ol>
            <li>
              <strong>Can you email me your certificate of insurance today?</strong> Liability and workers&apos; comp,
              current dates.
            </li>
            <li>
              <strong>What prep is included?</strong> For{" "}
              <Link href="/exterior-painting-houston-tx">exteriors</Link>: pressure wash, scrape, sand, caulk, prime bare
              wood, rot repair. For <Link href="/interior-painting-houston-tx">interiors</Link>:{" "}
              <Link href="/drywall-repair-houston-tx">patching</Link>, sanding, caulking, priming stains.
            </li>
            <li>
              <strong>Which paint and how many coats?</strong> Brand, product line, sheen. Two coats is standard.
              &ldquo;Paint and primer in one&rdquo; over bare wood is a red flag.
            </li>
            <li>
              <strong>Who is on my job?</strong> Employees or subs, and who is the crew lead I talk to daily.
            </li>
            <li>
              <strong>How do you handle Houston humidity?</strong> A good answer mentions surface moisture, morning dew,
              and not painting above 85% humidity.
            </li>
            <li>
              <strong>What does your warranty cover and for how long?</strong> Get it in writing. Ours is{" "}
              <Link href="/warranty">5 years on workmanship</Link>.
            </li>
            <li>
              <strong>What is the payment schedule?</strong> Deposit, progress, final. Walk away from 50%+ upfront.
            </li>
            <li>
              <strong>Can I see three recent jobs in my area?</strong> Addresses or photos with neighborhood names, plus
              Google reviews on the correct location profile.
            </li>
          </ol>
        </Section>

        <Section title="Red flags">
          <Bullets
            items={[
              <>
                Quote is under $1.50/sq ft for exterior or $2/sq ft for interior (compare with the{" "}
                <Link href="/houston-painting-cost-guide">Houston painting cost guide</Link>)
              </>,
              <>No written scope, just a total</>,
              <>Cash only, or a large deposit before any work</>,
              <>No physical office address; a P.O. box or virtual suite only</>,
              <>Reviews all posted in the same week</>,
              <>&ldquo;We&apos;re licensed by the state of Texas&rdquo;</>,
            ]}
          />
        </Section>

        <Section title="What a proper Houston estimate looks like">
          <p>
            Square footage per area, surfaces included and excluded, prep steps listed, product and sheen per surface, coat
            count, rot or drywall repair priced separately, start and finish dates, payment schedule, warranty terms, and
            the COI attached. See{" "}
            <Link href="/blog/what-to-expect-painting-estimate">What to Expect from a Painting Estimate</Link>.
          </p>
          <p>
            Comparing a local crew with a national franchise? Here is{" "}
            <Link href="/houston-superior-painting-vs-certapro">how Houston Superior Painting compares with CertaPro</Link>.
          </p>
        </Section>

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <CtaBlock title="Get an estimate that answers all eight questions">
          Call (346) 594-5960 or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate
          </Link>
          . COI, written scope, product spec, and warranty come with every quote.
        </CtaBlock>

        <AuthorByline />
      </main>
      <Footer />
    </>
  )
}
