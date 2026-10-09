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
  LinkGrid,
  CtaBlock,
  breadcrumbNode,
  articleNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import { BUSINESS, CORE_SERVICES } from "@/lib/business"

// Neutral comparison guide. Replaces the former competitor-comparison page
// (301'd here on 2026-10-08): no competitor is named. Houston Superior Painting
// facts shown here come only from lib/business.ts and were confirmed by Juan.

const PAGE_PATH = "/local-painter-vs-national-franchise-houston"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "Local Painter vs National Franchise in Houston | What to Compare"
const DESCRIPTION =
  "Local painting company or national franchise? What Houston homeowners should compare: warranty, prep, insurance, supervision, products, payment and reviews."
const H1 = "Local Painting Company vs National Franchise: What Houston Homeowners Should Compare"
const DATE_PUBLISHED = "2026-10-08"
const DATE_LABEL = "Oct 8, 2026"

const T = BUSINESS.trust
const INSURANCE = `${T.liabilityCoverage} general liability + workers' comp`
const OFFICE_COUNT = BUSINESS.locations.length

const COMPARE: { factor: string; ask: string }[] = [
  { factor: "Written warranty", ask: "How many years, what it covers (peeling, blistering, adhesion), what it excludes, and how a claim is made. Get it in the contract, not in a brochure." },
  { factor: "Preparation standards", ask: "Which prep steps are listed for your surfaces: cleaning, scraping, repairs, sanding, caulking, primer. Prep that is not written down is the first thing cut on a tight bid." },
  { factor: "Insurance and bonding", ask: "A certificate of insurance showing general liability and workers' comp, confirmed with the insurer, and whether the company is bonded." },
  { factor: "Project supervision", ask: "Who runs the job day to day, how often a supervisor or owner checks the work, and who signs off at the end." },
  { factor: "Crew accountability", ask: "Whether the crew are the company's own people or subcontractors, and who is responsible if something goes wrong." },
  { factor: "Materials and products", ask: "The exact product line, sheen and number of coats for each surface, written in the estimate." },
  { factor: "Communication", ask: "Who your single point of contact is, how fast messages are answered, and how weather delays are communicated." },
  { factor: "Change orders", ask: "How extra work (rot, drywall damage found mid-job) is priced and approved: in writing, before the work is done." },
  { factor: "Payment terms", ask: "How much is due before work starts, what the payment schedule is, and when the final balance is due." },
  { factor: "Reviews", ask: "Recent reviews for the specific location or crew that would do your job, and how the company responds to problems." },
  { factor: "Local presence", ask: "Where the nearest office is, whether someone can come back quickly for a touch-up, and how long the company has served your area." },
]

const FAQS = [
  {
    q: "Is a local painting company better than a national franchise?",
    a: "Not automatically. Both can do excellent work or poor work. What decides the outcome is the written scope: the prep steps, products, coat counts, warranty, insurance and payment terms in your contract. Compare those line by line, whoever the company is.",
  },
  {
    q: "Are franchise painters run by the national brand?",
    a: "Usually each franchise location is an independently owned business operating under the brand. Quality, crews, pricing and warranty handling can differ from one location to the next, so check the specific location's reviews, insurance and contract.",
  },
  {
    q: "What should be in a painting contract?",
    a: "The surfaces included and excluded, the preparation steps, primer, product line and sheen for each surface, coat count, repair pricing, start and finish dates, payment schedule, change-order process and the written warranty terms.",
  },
  {
    q: "How do I verify a painter's insurance?",
    a: "Ask for a certificate of insurance listing general liability and workers' comp, then call the insurer on the certificate to confirm the policy is active. Texas does not license house painters, so insurance is the check that matters.",
  },
  {
    q: "What warranty does Houston Superior Painting offer?",
    a: `A ${T.warrantyYears}-year written workmanship warranty, on top of the paint manufacturer's product warranty.`,
  },
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: H1,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    authors: [BUSINESS.founder.name],
    images: [{ url: BUSINESS.ogImage, width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: { card: "summary_large_image", title: H1, description: DESCRIPTION },
}

export default function LocalPainterVsNationalFranchisePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            articleNode({
              path: PAGE_PATH,
              headline: H1,
              description: DESCRIPTION,
              datePublished: DATE_PUBLISHED,
              dateModified: DATE_PUBLISHED,
            }),
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Houston Painting Contractor Guide", path: "/houston-painting-contractor-guide" },
              { name: "Local Painter vs National Franchise", path: PAGE_PATH },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <PageHero h1={H1} eyebrow="Hiring guide">
          <p className="mt-6 text-sm text-soft-white/80">
            By{" "}
            <Link href="/about" rel="author" className="font-medium text-soft-white underline">
              {BUSINESS.founder.name}
            </Link>
            , {BUSINESS.founder.jobTitle.toLowerCase()}, {BUSINESS.name} ·{" "}
            <time dateTime={DATE_PUBLISHED}>Published {DATE_LABEL}</time>
          </p>
        </PageHero>

        <QuickAnswer>
          Neither a local painting company nor a national franchise is automatically the better choice. Compare the
          written scope and contract: the warranty terms, the preparation steps, insurance, who supervises the crew, the
          exact products, how change orders and payments work, and recent reviews for the location that would do your job.
        </QuickAnswer>

        <Section title="How the two models differ">
          <p>
            A local painting company is owned and run in your area; the owner often meets customers and oversees jobs. A
            national franchise is a brand whose locations are usually independently owned businesses that follow the
            brand&apos;s systems and marketing. Each model can deliver careful work or a rushed job. The brand name on the
            truck tells you less than the contract in your hand.
          </p>
        </Section>

        <Section title="What to compare, line by line">
          <p>Ask every company, local or franchise, the same questions and get the answers in writing:</p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-left text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 font-semibold">What to compare</th>
                  <th className="p-3 font-semibold">What to ask for</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row) => (
                  <tr key={row.factor} className="border-t border-border align-top">
                    <td className="p-3 font-medium">{row.factor}</td>
                    <td className="p-3 text-muted-foreground">{row.ask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Compare the contract, not the brand">
          <p>
            Put the two written estimates side by side. If one lists prep steps, primer, product line and coat count and
            the other says &quot;paint exterior, two coats&quot;, you are not comparing the same job, even if the prices
            look close. The full checklist is in our{" "}
            <Link href="/houston-painting-contractor-guide">guide to choosing a painting contractor in Houston</Link> and
            in <Link href="/blog/what-to-expect-painting-estimate">what to expect from a painting estimate</Link>.
          </p>
        </Section>

        <Section title="How Houston Superior Painting answers these questions">
          <p>If you include us in your comparison, here is what we put in writing:</p>
          <Bullets
            items={[
              <>
                <strong>Warranty:</strong> a {T.warrantyYears}-year written workmanship warranty (
                <Link href="/warranty">see the terms</Link>).
              </>,
              <>
                <strong>Preparation:</strong> the{" "}
                <Link href="/houston-painting-contractor-guide#preparation-standard">
                  Houston Superior Painting 10-Point Preparation Standard
                </Link>
                , our internal workmanship process (not an industry certification).
              </>,
              <>
                <strong>Insurance and bonding:</strong> bonded and insured with {INSURANCE}.
              </>,
              <>
                <strong>Local presence:</strong> {OFFICE_COUNT} locations across Greater Houston, headquartered in Cypress
                since {BUSINESS.founded} (<Link href="/contact">see all locations</Link>).
              </>,
              <>
                <strong>Track record:</strong> {T.googleRating} rating from {T.reviewCount}+ Google reviews and{" "}
                {T.projectsCompleted}+ completed projects.
              </>,
              <>
                <strong>Products:</strong> {BUSINESS.paintPartners.join(", ")} products, named in your estimate. Authorized
                Preferred Application Partner.
              </>,
              <>
                <strong>Payment:</strong> {BUSINESS.paymentPolicy.sentence}
              </>,
            ]}
          />
          <p>
            Hold us to the same standard you hold anyone else: if it is not in the written estimate, ask for it to be added.
          </p>
        </Section>

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <Section title="Related pages">
          <LinkGrid
            links={[
              { label: "How to choose a painting contractor", href: "/houston-painting-contractor-guide" },
              { label: "What to expect from an estimate", href: "/blog/what-to-expect-painting-estimate" },
              { label: "Warranty", href: "/warranty" },
              { label: "Projects", href: "/projects" },
              { label: "Service areas", href: "/service-areas" },
              ...CORE_SERVICES.slice(0, 3).map((s) => ({ label: s.name, href: `/${s.slug}` })),
            ]}
          />
        </Section>

        <CtaBlock title="Get a written estimate you can compare">
          <p>
            Free, itemized and in writing. <Link href={ESTIMATE_PATH}>Request your estimate</Link> or call{" "}
            {BUSINESS.phone}.
          </p>
        </CtaBlock>
      </main>
      <Footer />
    </>
  )
}
