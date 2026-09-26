import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ, { type FAQItem } from "@/components/faq"
import { JsonLd } from "@/components/structured-data"
import { PageHero, QuickAnswer, CtaBlock, breadcrumbNode, ESTIMATE_PATH } from "@/components/aeo/blocks"
import {
  BUSINESS,
  PRICES_2026,
  CORE_SERVICES,
  OFFICE_PAGES,
  officeForPage,
  officeAddressLine,
} from "@/lib/business"

const PAGE_PATH = "/faq"
const PAGE_URL = `https://houstonsuperiorpainting.com${PAGE_PATH}`
const TITLE = "Houston Painting FAQ: Costs, Insurance, Warranty & Timing"
const DESCRIPTION =
  "Answers to common Houston painting questions: 2026 costs, insurance, the 5-year warranty, humidity and timing, our five offices, and how to get a free estimate."
const H1 = "Houston Painting FAQ"

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
    images: [{ url: BUSINESS.ogImage, width: 1200, height: 630, alt: `${BUSINESS.name} — Houston painting FAQ` }],
  },
}

const P = PRICES_2026
const W = BUSINESS.trust.warrantyYears
const HQ = BUSINESS.primaryAddress

// Offices in HQ-first order, rendered as one plain sentence for the answer text.
const officeSentence = OFFICE_PAGES.map((p) => {
  const o = officeForPage(p.slug)
  return o ? `${p.name}: ${officeAddressLine(o)}` : p.name
}).join("; ")

const hoursSentence = BUSINESS.hoursSummary.map((h) => `${h.label} ${h.value}`).join(", ")

type Group = {
  id: string
  title: string
  items: FAQItem[]
  related: { label: string; href: string }[]
}

const svc = (slug: string) => {
  const s = CORE_SERVICES.find((c) => c.slug === slug)!
  return { label: `${s.name} in Houston`, href: `/${s.slug}` }
}

// Answers are plain strings so the visible text and the FAQPage schema match word for word.
const GROUPS: Group[] = [
  {
    id: "cost",
    title: "Cost & pricing",
    items: [
      {
        q: "How much does it cost to paint a house in Houston in 2026?",
        a: `Interior painting runs ${P.interiorPerSqFt} per square foot and exterior painting runs ${P.exteriorPerSqFt} per square foot of floor area in 2026. A 2,500 sq ft home costs ${P.fullInterior2500} for the interior and ${P.exterior2500TwoStory} for a two-story exterior. Our prices include labor, prep, and premium paint.`,
      },
      {
        q: "How much does it cost to paint one room in Houston?",
        a: `${P.singleRoom} for a 12×14 bedroom, including ceiling and trim.`,
      },
      {
        q: "How much does exterior house painting cost in Houston?",
        a: `${P.exteriorPerSqFt} per square foot of floor area, or ${P.exteriorPerHome} per home. A 2,500 sq ft two-story home runs ${P.exterior2500TwoStory}. That includes pressure washing, scraping, caulking, priming, and two coats. Wood rot repair is priced separately.`,
      },
      {
        q: "How much does it cost to paint kitchen cabinets in Houston?",
        a: `${P.cabinetsPerKitchen} per kitchen. An average kitchen with 15–25 doors runs ${P.cabinetsAverage}. We spray cabinet enamel with the doors removed and finished flat.`,
      },
      {
        q: "Does the price include paint?",
        a: "Yes, ours does. Ask any painter whether product is included; some quote labor only.",
      },
      {
        q: "Is a low painting quote a red flag?",
        a: "Usually. Below $1.50/sq ft for an exterior or $2/sq ft for an interior typically means one coat, no primer, or no insurance.",
      },
    ],
    related: [
      { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
      { label: "Interior painting cost in Houston", href: "/interior-painting-cost-houston" },
      { label: "Exterior house painting cost guide", href: "/exterior-house-painting-houston-cost-guide" },
      { label: "Cost to paint kitchen cabinets in Houston", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
    ],
  },
  {
    id: "hiring",
    title: "Hiring, insurance & warranty",
    items: [
      {
        q: "Do painters need a license in Texas?",
        a: "No. Texas does not license painters, so any painter claiming a state painting license is misleading you. Verify insurance instead.",
      },
      {
        q: "Is Houston Superior Painting insured?",
        a: `Yes. We carry ${BUSINESS.trust.liabilityCoverage} general liability and workers' compensation. Ask for the certificate of insurance before any painter starts; we provide ours with every estimate.`,
      },
      {
        q: `What does the ${W}-year warranty cover?`,
        a: `Our ${W}-year workmanship warranty covers peeling, blistering, and flaking caused by our workmanship on all painting. It does not cover damage from water intrusion, settling, or surfaces you asked us not to prep.`,
      },
      {
        q: "How many painting quotes should I get?",
        a: "Three. Compare prep and product, not just the total.",
      },
      {
        q: "Who owns Houston Superior Painting?",
        a: `${BUSINESS.founder.name} owns Houston Superior Painting. He founded the company in ${BUSINESS.founded} and runs it from the Cypress headquarters at ${HQ.street}, ${HQ.city}, ${HQ.state} ${HQ.zip}. Phone: ${BUSINESS.phone}.`,
      },
      {
        q: "Is houstonsuperiorpaintingmagnoliatx.com your website?",
        a: `No. ${BUSINESS.officialSiteDisclaimer}`,
      },
    ],
    related: [
      { label: "How to hire a painter in Houston", href: "/questions-to-ask-before-hiring-painters" },
      { label: `${W}-year painting warranty`, href: "/warranty" },
      { label: "About Houston Superior Painting", href: "/about" },
    ],
  },
  {
    id: "process",
    title: "Process & timing",
    items: [
      {
        q: "How long does a full interior repaint take?",
        a: "Three to five days for a 2,500 sq ft home with a crew of three.",
      },
      {
        q: "What prep do you do before painting?",
        a: "Prep is about 60% of the job in Houston. On exteriors we pressure wash to kill mildew, scrape and sand, replace rotted wood, caulk every gap, and prime bare surfaces. On interiors we patch, sand, caulk, and prime stains.",
      },
      {
        q: "How many coats of paint do you apply?",
        a: "Two full coats, sprayed and back-rolled on exteriors, cut and rolled on interiors.",
      },
      {
        q: "Do you work with HOAs?",
        a: "Yes. We pull the approved color list and submit the ARC form for Katy, Cypress, Sugar Land, and Woodlands communities.",
      },
      {
        q: "How does the job finish?",
        a: "With a walkthrough. You inspect every room or elevation with the crew lead before final payment.",
      },
    ],
    related: [
      svc("interior-painting-houston-tx"),
      svc("exterior-painting-houston-tx"),
      svc("cabinet-refinishing-houston-tx"),
      svc("drywall-repair-houston-tx"),
    ],
  },
  {
    id: "climate",
    title: "Houston climate & paint",
    items: [
      {
        q: "When is the best time to paint a house exterior in Houston?",
        a: "October through April. Summer afternoons are too hot and humid for paint to cure properly.",
      },
      {
        q: "Can you paint in Houston humidity?",
        a: "Within limits. We don't paint when humidity is above 85% or surfaces are above 90°F. Paint applied over damp or chalky surfaces peels within two years.",
      },
      {
        q: "How often should I repaint my house in Houston?",
        a: "Exteriors every 5–7 years, interiors every 7–10 years.",
      },
      {
        q: "What paint do you use?",
        a: "Sherwin-Williams Duration and Emerald for exteriors, Benjamin Moore Aura or Regal Select for interiors, and Benjamin Moore Advance or Sherwin-Williams Emerald Urethane for cabinets.",
      },
      {
        q: "Why do Houston exteriors cost more to paint than the national average?",
        a: "More prep. Humidity, mildew, and UV degrade surfaces faster than in dry climates, so washing, scraping, and priming take longer.",
      },
    ],
    related: [
      { label: "Best time to paint a house in Houston", href: "/blog/best-time-to-paint-house-houston" },
      svc("exterior-painting-houston-tx"),
      svc("soft-washing-houston-tx"),
      svc("limewash-brick-painting-houston-tx"),
    ],
  },
  {
    id: "offices",
    title: "Offices & service area",
    items: [
      {
        q: "Where are your offices?",
        a: `We have five offices. ${officeSentence}. All five use ${BUSINESS.phone}.`,
      },
      {
        q: "What areas do you serve?",
        a: "Greater Houston, including Houston, Katy, Cypress, Sugar Land, Magnolia, The Woodlands, Memorial, The Heights, Bellaire, Pearland, Richmond, Fulshear, Tomball, and Missouri City.",
      },
      {
        q: "What are your hours?",
        a: `${hoursSentence}.`,
      },
    ],
    related: OFFICE_PAGES.map((p) => ({
      label: `Painters in ${p.name.replace(" (HQ)", "")}, TX`,
      href: `/${p.slug}`,
    })),
  },
  {
    id: "estimates",
    title: "Estimates & payment",
    items: [
      {
        q: "Do you require a deposit?",
        a: "No. You pay when the walkthrough is done and you're satisfied.",
      },
      {
        q: "Are painting estimates free?",
        a: "Yes. Estimates are free and there is no obligation.",
      },
      {
        q: "How do I get a painting estimate?",
        a: `Call ${BUSINESS.phone} or request an estimate online. After an on-site walkthrough you get a written scope within 24 hours listing square footage, product, and coat count.`,
      },
      {
        q: "Do you offer financing?",
        a: "Yes. Financing is available for painting projects; terms are on our painting financing page.",
      },
    ],
    related: [
      { label: "Free painting estimate in Houston", href: ESTIMATE_PATH },
      { label: "Painting financing in Houston", href: "/painting-financing-houston" },
      { label: "Contact Houston Superior Painting", href: "/contact" },
    ],
  },
]

const ALL_ITEMS = GROUPS.flatMap((g) => g.items)

export default function FaqPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "FAQ", path: PAGE_PATH },
          ]),
        }}
      />
      {/* One FAQPage for the whole page, matching every visible Q&A word for word. */}
      <FAQ items={ALL_ITEMS} schemaOnly />

      <Header />
      <PageHero h1={H1} eyebrow="Frequently asked questions" />

      <QuickAnswer>
        {BUSINESS.name} is an insured Houston painting contractor founded in {BUSINESS.founded} by{" "}
        {BUSINESS.founder.name}, with five offices across Greater Houston. Interior painting costs{" "}
        {P.interiorPerSqFt}/sq ft and exterior painting {P.exteriorPerSqFt}/sq ft in 2026. We carry{" "}
        {BUSINESS.trust.liabilityCoverage} liability plus workers&apos; comp, take no deposit, and back every job with a{" "}
        {W}-year workmanship warranty. Call {BUSINESS.phone}.
      </QuickAnswer>

      <nav aria-label="FAQ topics" className="container mx-auto px-4 max-w-4xl mb-4">
        <ul className="flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <li key={g.id}>
              <a
                href={`#${g.id}`}
                className="inline-block bg-card border border-border rounded-full px-4 py-1.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {g.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {GROUPS.map((g) => (
        <div key={g.id}>
          <FAQ id={g.id} title={g.title} items={g.items} injectSchema={false} variant="compact" />
          <p className="mx-auto max-w-2xl px-4 -mt-4 mb-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Related: </span>
            {g.related.map((l, i) => (
              <span key={l.href}>
                {i > 0 && " · "}
                <Link href={l.href} className="text-primary font-medium hover:underline">
                  {l.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      ))}

      <div className="h-8" />
      <CtaBlock />
      <Footer />
    </main>
  )
}
