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
  breadcrumbNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business"
import { LOCAL_PROOF_PROJECTS } from "@/lib/projects"
import { SHOWN_PROFILES } from "@/components/office-reviews"

// Houston landing page, rebuilt from the owner brief of 2026-10-25 (phase 3).
// Every fact comes from lib/business.ts (insurance, warranty, payment wording),
// lib/pricing.ts (budgeting ranges), lib/projects.ts (only LOCAL_PROOF_PROJECTS,
// i.e. owner-confirmed photos) and data/review-profiles.ts (Google profile links).
// No office wording: the Houston address is not owner-verified as a staffed
// office (BUSINESS.locations[].locationType). No review numbers, no testimonials,
// no product or crew-size claims that are not in the central files.

const PAGE_PATH = "/painters-houston-tx"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "Houston Painting Company: Interior, Exterior & Cabinets"
const DESCRIPTION =
  "Interior, exterior and cabinet painting for Houston homes: prep-first process, documented Houston projects, free written estimates with clear payment terms. (346) 594-5960."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: BUSINESS.name,
    type: "website",
    images: [
      {
        url: "https://houstonsuperiorpainting.com/images/og/og-painters-houston.jpg",
        width: 1200,
        height: 630,
        alt: "Houston Superior Painting: interior, exterior and cabinet painting in Houston, TX",
      },
    ],
  },
}

const W = BUSINESS.warranty

// FAQ answers are plain strings so the FAQPage schema matches the visible text.
const FAQS = [
  {
    q: "How much does it cost to paint a house in Houston?",
    a: `Our budgeting guidance: interior painting runs about ${PRICES_2026.interiorPerSqFt} per square foot of floor area (about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home), a single room ${PRICES_2026.singleRoom}, and most kitchen cabinet projects ${PRICES_2026.cabinetsPerKitchen}. Exterior prices are project-specific because elevations, stories, access, siding and repairs change the scope; most whole-house exteriors budget ${PRICES_2026.exteriorPerHome}. These are budgeting ranges, not quotes. ${BUSINESS.paymentPolicy.sentence}`,
  },
  {
    q: "When is the best time to paint a house exterior in Houston?",
    a: "Fall through spring is usually the most reliable window. Summer work is possible, but crews avoid painting over damp siding after rain or heavy morning dew and plan around afternoon heat.",
  },
  {
    q: "Are you licensed and insured?",
    a: `${BUSINESS.insurance.licenseNote} ${BUSINESS.insuranceProof.en}`,
  },
  {
    q: "Do I have to pay a deposit before the estimate?",
    a: `No. The estimate is free. ${BUSINESS.paymentPolicy.sentence}`,
  },
  {
    q: "What does your warranty cover?",
    a: `${W.summary} ${W.controlsNote}`,
  },
  {
    q: "Where can I read reviews?",
    a: "Read verified customer reviews on Google. We link each of our Google Business Profiles from this page and from our reviews page, and we do not combine them into one rating.",
  },
]

const NEIGHBORHOODS: { name: string; href: string; note: ReactNode }[] = [
  {
    name: "The Heights",
    href: "/painters-the-heights-tx",
    note: (
      <>
        Many homes are older wood-sided bungalows that need more scraping, sanding and sill and trim repair than newer
        homes. Homes built before 1978 may contain lead-based paint, which calls for lead-safe work practices. See our{" "}
        <Link href="/projects/heights-exterior-siding-repaint">Heights exterior</Link> and{" "}
        <Link href="/projects/heights-painted-brick-bungalow">painted brick bungalow</Link>.
      </>
    ),
  },
  {
    name: "Memorial",
    href: "/painters-memorial-tx",
    note: <>Tall trees keep a lot of siding in shade, where mildew grows. Shaded walls are cleaned and dried before primer.</>,
  },
  {
    name: "Bellaire",
    href: "/painters-bellaire-tx",
    note: (
      <>
        A mix of original homes and newer rebuilds, many with stucco. Hairline stucco cracks are addressed before paint
        (<Link href="/stucco-painting-houston-tx">stucco painting</Link>).
      </>
    ),
  },
  {
    name: "West University",
    href: "/exterior-painting-bellaire-west-university",
    note: (
      <>
        Brick is common; painted brick needs a breathable masonry primer. See our{" "}
        <Link href="/projects/west-university-painted-brick-exterior">painted brick exterior in West U</Link>.
      </>
    ),
  },
  {
    name: "River Oaks",
    href: "/painters-river-oaks-tx",
    note: <>Larger homes with detailed wood trim, columns and windows, where trim prep, rot repair and caulking take most of the time.</>,
  },
]

// Documented Houston jobs (owner-confirmed photos only; LOCAL_PROOF_PROJECTS
// excludes entries with photosNeedReview).
const PROJECT_SLUGS = [
  "heights-exterior-siding-repaint",
  "west-university-stucco-exterior",
  "bellaire-painted-brick-ranch",
  "heights-charcoal-kitchen-cabinets",
  "heights-painted-brick-bungalow",
  "houston-retail-center-exterior",
]
const projects = PROJECT_SLUGS.map((slug) => LOCAL_PROOF_PROJECTS.find((p) => p.slug === slug)).filter(
  (p): p is (typeof LOCAL_PROOF_PROJECTS)[number] => Boolean(p),
)

const SERVICES: { label: string; href: string; text: string }[] = [
  { label: "Interior painting", href: "/interior-painting-houston-tx", text: "walls, ceilings, trim, doors and accent walls." },
  { label: "Exterior painting", href: "/exterior-painting-houston-tx", text: "wood, fiber cement, brick and stucco." },
  { label: "Cabinet painting and refinishing", href: "/cabinet-refinishing-houston-tx", text: "kitchen and bath cabinets in a cabinet-grade finish." },
  { label: "Commercial painting", href: "/commercial-painting-houston-tx", text: "offices, retail and multifamily, scheduled around operations." },
  { label: "Drywall repair and texture", href: "/drywall-repair-houston-tx", text: "patches, water damage and texture matching before paint." },
  { label: "Pressure and soft washing", href: "/soft-washing-houston-tx", text: "cleaning before exterior paint, or on its own." },
  { label: "Limewash", href: "/limewash-brick-painting-houston-tx", text: "a breathable mineral finish for brick." },
  { label: "Rotten-wood replacement", href: "/wood-rot-repair-houston-tx", text: "painting-related carpentry when it is part of the written scope." },
]

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
        <PageHero h1="Houston Painting Company for Interior, Exterior and Cabinet Painting" eyebrow={BUSINESS.name} />

        {/* 1. Direct answer */}
        <QuickAnswer>
          {BUSINESS.name} paints homes and businesses across Houston, including the Heights, Memorial, Bellaire, West
          University and River Oaks. The company was founded in {BUSINESS.founded} by {BUSINESS.founder.name} and is
          headquartered in Cypress. We provide interior, exterior and cabinet painting, commercial painting, drywall repair,
          washing and limewash. {BUSINESS.paymentPolicy.sentence} {W.short} Call{" "}
          <a href={PHONE_HREF}>{BUSINESS.phone}</a> or <Link href={ESTIMATE_PATH}>request my free estimate</Link>.
        </QuickAnswer>

        {/* 2. Services */}
        <Section title="Painting services for Houston homes and businesses">
          <Bullets
            items={SERVICES.map((s) => (
              <>
                <Link href={s.href}>{s.label}</Link>: {s.text}
              </>
            ))}
          />
          <p className="mt-4 text-sm text-muted-foreground">{BUSINESS.sisterBrand.sentence}</p>
        </Section>

        {/* 3. Preparation */}
        <Section title="Our preparation process">
          <p>
            Houston air stays humid most of the year, rain comes fast, and summer sun is hard on south- and west-facing
            walls. Paint applied over damp, chalky or dirty surfaces loses adhesion early, so preparation takes most of a
            job&apos;s time, and each step is written into your estimate:
          </p>
          <Steps
            items={[
              { title: "Clean", text: "wash or soft-wash surfaces so paint bonds to the substrate, not to dirt or mildew." },
              { title: "Scrape and sand", text: "remove loose paint to a sound edge and dull glossy surfaces." },
              { title: "Repair and caulk", text: "address damaged wood or drywall in the written scope and seal joints and gaps." },
              { title: "Prime", text: "prime bare wood, repairs and stains with a primer suited to the surface." },
              { title: "Finish coats", text: "apply the finish coats in your estimate when surfaces are dry and the weather allows." },
            ]}
          />
          <p className="mt-4">
            Products: {BUSINESS.paintPartners.join(", ")}, named in your estimate. On cabinets and trim:{" "}
            {BUSINESS.cabinetFinish.sentence}.
          </p>
        </Section>

        {/* 4. Documented projects */}
        {projects.length > 0 && (
          <Section title="Documented Houston projects">
            <div className="not-prose grid md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={p.heroImage} alt={p.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{p.neighborhood}</p>
                    <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary">{p.title}</h3>
                    <p className="text-muted-foreground text-sm">{p.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-6">
              <Link href="/projects">See all projects</Link>
            </p>
          </Section>
        )}

        {/* 5. Insurance */}
        <Section title="Insurance documentation">
          <p>
            {BUSINESS.insurance.sentence} {BUSINESS.insurance.licenseNote}{" "}
            <Link href="/insurance-and-warranty#request-proof-of-insurance">Request proof of insurance</Link>.
          </p>
        </Section>

        {/* 6. Warranty */}
        <Section title="Five-year written workmanship warranty">
          <p>
            {W.summary} {W.controlsNote} <Link href="/warranty">Read the warranty summary</Link>.
          </p>
        </Section>

        {/* 7. Estimates and payment */}
        <Section title="How written estimates and payment terms work">
          <Steps
            items={[
              { title: "Free walkthrough", text: "we look at the surfaces, condition and access, and talk through colors and products." },
              { title: "Written estimate", text: "the scope, preparation, products, price, deposit requirements and payment schedule, in writing." },
              { title: "Your approval", text: "work is scheduled only after you approve the written estimate." },
            ]}
          />
          <p className="mt-4">{BUSINESS.paymentPolicy.sentence}</p>
          <PriceTable
            head={["Project", "Budgeting range"]}
            rows={[
              ["Interior painting", `${PRICES_2026.interiorPerSqFt} per sq ft of floor area`],
              ["2,500 sq ft interior", PRICES_2026.fullInterior2500],
              ["Single room, walls only", PRICES_2026.singleRoom],
              ["Kitchen cabinets, most projects", PRICES_2026.cabinetsPerKitchen],
              ["Exterior, whole house", `Project-specific; most homes ${PRICES_2026.exteriorPerHome}`],
            ]}
            note={
              <>
                Room-by-room and home-size tables are in the{" "}
                <Link href="/houston-painting-cost-guide" className="text-primary font-medium underline">
                  Houston painting cost guide
                </Link>
                .
              </>
            }
          />
        </Section>

        {/* 8. Google Business Profiles */}
        <Section title="Read verified customer reviews on Google">
          <p>
            Each Google Business Profile has its own reviews; we do not combine them into one rating. Read verified customer
            reviews on Google:
          </p>
          <Bullets
            items={SHOWN_PROFILES.map((p) => (
              <a key={p.locationSlug} href={p.url} target="_blank" rel="noopener noreferrer">
                {p.label}
              </a>
            ))}
          />
          <p>
            See all profiles on our <Link href="/reviews">reviews page</Link>.
          </p>
        </Section>

        {/* 9. Neighborhoods and service areas */}
        <Section title="Houston neighborhoods and service areas">
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
          <p>
            We also serve the rest of Greater Houston, including Cypress, Katy, Sugar Land and Magnolia. See every{" "}
            <Link href="/service-areas">service area</Link>.
          </p>
        </Section>

        {/* 10. FAQs */}
        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <TrustChecklist />

        {/* 11. Estimate CTA */}
        <CtaBlock title="Request My Free Estimate">
          Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request your free estimate online
          </Link>
          . {BUSINESS.paymentPolicy.shortLine}
        </CtaBlock>

        <AuthorByline />
      </main>
      <Footer />
    </>
  )
}
