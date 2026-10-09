import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd, ORG_ID } from "@/components/structured-data"
import {
  PageHero,
  QuickAnswer,
  Section,
  Bullets,
  Steps,
  LinkGrid,
  CtaBlock,
  breadcrumbNode,
  ESTIMATE_PATH,
} from "@/components/aeo/blocks"
import { SERVICE_PAGE_CITIES, HIRE_GUIDE_PATH, serviceUrl } from "@/components/aeo/service-skeleton"
import { BUSINESS, SERVICE_AREAS } from "@/lib/business"

// Residential remodeling as we actually do it: the interior services the site
// already offers (wall removal, drywall, trim, rot repair, wallpaper removal,
// painting) run as one coordinated job. No plumbing, electrical, kitchen or
// bath install claims, and no published price: every remodel is quoted after
// an on-site visit. Built from the ServiceSkeleton blocks rather than the
// skeleton itself, because the skeleton's cost section prints price ranges.

const SLUG = "residential-remodeling-houston-tx"
const URL = serviceUrl(SLUG)
const TITLE = "Residential Remodeling Houston TX | Walls, Drywall & Paint"
const DESCRIPTION =
  "Interior remodeling in Houston: wall removal, drywall and texture, trim, rot repair, wallpaper removal and paint as one job. 5-year warranty. Free estimate."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: BUSINESS.name,
    type: "website",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
}

// No offers/price block: remodels are priced only after an on-site visit.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${URL}#service`,
  name: "Residential Remodeling in Houston, TX",
  description:
    "Coordinated interior remodeling in Houston and nearby Texas cities: opening walls and load-bearing wall removal, drywall and texture matching, trim and carpentry repair, wood rot repair, wallpaper removal, and finish painting, run as one job with one crew lead. 5-year workmanship warranty.",
  serviceType: "Residential Remodeling",
  provider: { "@id": ORG_ID },
  areaServed: SERVICE_AREAS.map((a) => ({ "@type": "City", name: a.name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Residential Remodeling Services",
    itemListElement: [
      "Load-Bearing Wall Removal",
      "Drywall Repair and Texture Matching",
      "Trim and Carpentry Repair",
      "Wood Rot Repair",
      "Wallpaper Removal",
      "Interior Painting",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
}

const breadcrumb = {
  "@context": "https://schema.org",
  ...breadcrumbNode([
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Residential Remodeling", path: `/${SLUG}` },
  ]),
}

const faqs = [
  {
    q: "What kind of remodeling do you do in Houston?",
    a: "Interior remodeling built around the work we already do every day: opening up or removing walls, including load-bearing walls, drywall and texture, trim and carpentry repair, wood rot repair, wallpaper removal, and finish painting. We run them as one coordinated job so the rooms come out finished and matched.",
  },
  {
    q: "Do you remodel kitchens and bathrooms?",
    a: "Not as a kitchen or bath installer. We do not install cabinets, counters, tile, plumbing fixtures, or electrical. We can open the wall between a kitchen and living room, repair and retexture the drywall, refinish existing cabinets, and paint, and we schedule around the other contractors you hire for the rest.",
  },
  {
    q: "How much does a remodel cost?",
    a: "Every remodel is quoted after an on-site visit, because the price depends on which walls open, what the drywall and trim look like once they do, and how many rooms get painted. The visit and the written estimate are free, and each part of the work is its own line on the estimate.",
  },
  {
    q: "Do you handle permits and engineering for wall removal?",
    a: "For a load-bearing wall, yes. We bring a structural engineer to assess it and provide a stamped letter, and we handle the City of Houston permit and inspections. If wiring, plumbing, or ductwork runs through the wall, licensed trades re-route it and it is quoted as a separate line item.",
  },
  {
    q: "Can I stay in the house during the work?",
    a: "Usually, yes. We work in sections, cover floors, and put up dust containment around demolition and drywall sanding. Your crew lead will tell you which days a room is off limits.",
  },
  {
    q: "What does the 5-year warranty cover?",
    a: "Our workmanship: peeling, blistering, and flaking paint and failed repairs caused by how we did the work. It does not cover damage from water intrusion, settling, or surfaces you asked us not to prep.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We carry $2M general liability and workers' compensation, and the certificate of insurance comes with every estimate.",
  },
  {
    q: "Do you require a deposit?",
    a: "Only after you approve the estimate. The estimate is free and nothing is due before you approve it. Once you approve, a down payment schedules the job, and the balance is due after the final walkthrough.",
  },
  {
    q: "How do I get an estimate?",
    a: `Call ${BUSINESS.phone} or request an estimate online. We walk the house with you, look at every wall, trim run, and soft spot in the scope, and send a written estimate.`,
  },
]

const related = [
  { label: "Load-bearing wall removal in Houston", href: "/load-bearing-wall-removal-houston-tx" },
  { label: "Drywall repair in Houston", href: "/drywall-repair-houston-tx" },
  { label: "Wood rot repair in Houston", href: "/wood-rot-repair-houston-tx" },
  { label: "Wallpaper removal in Houston", href: "/wallpaper-removal-houston-tx" },
  { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
]

export default function ResidentialRemodelingHoustonTX() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumb} />
      <Header />
      <main className="bg-background">
        <PageHero h1="Residential Remodeling in Houston, TX">
          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-soft-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link href="/#services" className="hover:text-gold">
                  Services
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-soft-white">Residential Remodeling</li>
            </ol>
          </nav>
        </PageHero>

        <QuickAnswer>
          {BUSINESS.name} remodels home interiors in Houston by running the work we already do as one job: opening or
          removing walls, drywall and texture, trim and carpentry repair, wood rot repair, wallpaper removal, and finish
          painting. One crew lead, one schedule, one written estimate. Every remodel is quoted after an on-site visit and
          backed by a {BUSINESS.trust.warrantyYears}-year workmanship warranty. Free estimates: {BUSINESS.phone}.
        </QuickAnswer>

        <Section id="who-this-is-for" title="Who this is for">
          <p>
            Homeowners in Houston, Katy, Cypress, Sugar Land, Magnolia, and The Woodlands who want a dated or closed-in
            interior opened up and refreshed without hiring a separate engineer, framer, drywall crew, carpenter, and
            painter. Typical jobs: opening the wall between the kitchen and living room, stripping old wallpaper and
            repainting a whole floor, or fixing settling cracks, damaged trim, and soft wood before a move-in or sale.
          </p>
          <p>
            It is not a kitchen or bath install. We do not set cabinets, counters, tile, plumbing fixtures, or
            electrical. If those are part of your plans, we open the wall, finish the drywall, and paint, and we schedule
            around the other contractors you hire.
          </p>
        </Section>

        <Section id="whats-included" title="What a remodel with us includes">
          <Bullets
            items={[
              <>
                <strong>Opening walls and load-bearing wall removal.</strong> Engineer assessment and stamped letter,
                City of Houston permit, temporary support, and beam install for load-bearing walls. Details on our{" "}
                <Link href="/load-bearing-wall-removal-houston-tx">load-bearing wall removal page</Link>.
              </>,
              <>
                <strong>Drywall and texture.</strong> New board where walls opened or failed, settling cracks taped
                instead of caulked, and texture matched to the rest of the room: orange peel, knockdown, or smooth. See{" "}
                <Link href="/drywall-repair-houston-tx">drywall repair</Link>.
              </>,
              <>
                <strong>Trim and carpentry repair.</strong> Damaged trim, casing, and baseboard repaired or replaced
                where the work exposes it, and new trim run where an opening needs it, so the finished room reads as
                one piece.
              </>,
              <>
                <strong>Wood rot repair.</strong> Soft sills, trim, and fascia replaced with primed, rot-resistant
                material, and the moisture source found first. See{" "}
                <Link href="/wood-rot-repair-houston-tx">wood rot repair</Link>.
              </>,
              <>
                <strong>Wallpaper removal.</strong> Paper and adhesive removed, then walls skim-coated and primed so
                they paint smooth. See <Link href="/wallpaper-removal-houston-tx">wallpaper removal</Link>.
              </>,
              <>
                <strong>Finish painting.</strong> Walls, ceilings, trim, and doors with full prep and two coats of
                Sherwin-Williams or Benjamin Moore, color consultation included. See{" "}
                <Link href="/interior-painting-houston-tx">interior painting</Link>.
              </>,
            ]}
          />
        </Section>

        <Section id="process" title="How a remodel runs">
          <Steps
            items={[
              {
                title: "On-site visit",
                text: "We walk the house with you, mark which walls open, check drywall, trim, and wood for damage, and talk through colors and finishes. For a load-bearing wall, a structural engineer assesses it.",
              },
              {
                title: "Written estimate",
                text: "One estimate with each part of the work on its own line: wall removal, drywall, trim, rot repair, wallpaper, and paint. Nothing is due until you approve it.",
              },
              {
                title: "Permits and protection",
                text: "Permits are pulled where the work needs them. Floors are covered, furniture moved and wrapped, and dust containment goes up before any demolition.",
              },
              {
                title: "Structure and repairs first",
                text: "Walls open and beams go in, then rot, trim, and drywall repairs are done and the texture is matched, so paint goes over finished surfaces.",
              },
              {
                title: "Finish painting",
                text: "Primer on new and repaired surfaces, then two finish coats on walls, ceilings, and trim, inspected under bright light between coats.",
              },
              {
                title: "Walkthrough",
                text: "You walk every room with the crew lead before final payment, and anything flagged is fixed.",
              },
            ]}
          />
        </Section>

        <Section id="extra-cost" title="What may cost extra">
          <p>These are quoted as separate lines, only when your job needs them:</p>
          <Bullets
            items={[
              <>Re-routing wiring, plumbing, or ductwork found inside a wall, done by licensed trades.</>,
              <>A steel beam or a longer span than the first assessment showed.</>,
              <>Hidden rot or water damage found once trim or drywall comes off. We show you before we add it.</>,
              <>Mold treatment behind wet drywall.</>,
              <>Asbestos testing on older popcorn ceilings before removal.</>,
              <>HOA or ARB submissions for structural changes, where your community requires them.</>,
            ]}
          />
          <p>
            Every remodel is quoted after an on-site visit. We do not publish remodel prices because they depend on what
            is behind the walls.
          </p>
        </Section>

        <Section id="warranty" title="Warranty and insurance">
          <p>
            Every remodel carries our written {BUSINESS.trust.warrantyYears}-year workmanship warranty. It covers
            peeling, blistering, and flaking and failed repairs caused by our workmanship. It does not cover damage from
            water intrusion, settling, or surfaces you asked us not to prep. We carry $2M general liability and
            workers&apos; compensation, and the certificate of insurance comes with every estimate.
          </p>
        </Section>

        <div className="container mx-auto max-w-4xl mb-14">
          <FAQ items={faqs} title="Frequently asked questions" variant="compact" />
        </div>

        <Section id="nearby-cities" title="Nearby cities we serve">
          <LinkGrid links={[...SERVICE_PAGE_CITIES]} />
          <p className="mt-6">
            We also serve{" "}
            {SERVICE_AREAS.filter((a) => !SERVICE_PAGE_CITIES.some((c) => c.href === `/${a.slug}`)).map((a, i, arr) => (
              <span key={a.slug}>
                <Link href={`/${a.slug}`}>{a.name}</Link>
                {i < arr.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </Section>

        <Section id="related-services" title="Related services">
          <LinkGrid links={related} />
        </Section>

        <CtaBlock title="Get a free remodeling estimate">
          Call {BUSINESS.phone} or <Link href={ESTIMATE_PATH} className="underline">request an estimate online</Link>.
          We quote every remodel after an on-site visit, nothing is due until you approve, and the work carries a{" "}
          {BUSINESS.trust.warrantyYears}-year workmanship warranty.
        </CtaBlock>

        <p className="container mx-auto px-4 max-w-4xl mb-14 text-foreground/90">
          Comparing contractors? Read{" "}
          <Link href={HIRE_GUIDE_PATH} className="font-medium text-primary hover:underline">
            how to hire a painter in Houston
          </Link>{" "}
          — the insurance, prep, and warranty questions to ask before you sign.
        </p>
      </main>
      <Footer />
    </>
  )
}
