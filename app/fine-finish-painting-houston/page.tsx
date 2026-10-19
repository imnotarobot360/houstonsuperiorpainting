import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd, ORG_ID } from "@/components/structured-data"
import { TrustChecklist } from "@/components/trust-checklist"
import { FinishSystem } from "@/components/finish-system"
import { ProjectPhotoStrip } from "@/components/project-photo-strip"
import { PageHero, QuickAnswer, Section, Bullets, Steps, LinkGrid, CtaBlock, breadcrumbNode, ESTIMATE_PATH } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Fine finishing: trim, doors, crown, built-ins, cabinetry, millwork (owner brief
// 2026-10-14). Products from BUSINESS.cabinetFinish (owner-confirmed). No prices:
// none are confirmed for trim/millwork as a standalone service, so cost is quoted
// on site. Photos are real case-study photos only. No "factory finish" promise.

const PATH = "/fine-finish-painting-houston"
const URL = `${BUSINESS.url}${PATH}`
const TITLE = "Fine Finish Painting Houston | Trim, Doors, Built-Ins & Cabinets"
const DESCRIPTION =
  "Fine finish painting for Houston trim, doors, crown molding, built-ins and cabinetry: sanding, bonding primer, urethane enamels and a careful walkthrough."
const H1 = "Fine Finish Painting in Houston"

const CF = BUSINESS.cabinetFinish

const FAQS = [
  {
    q: "What is fine finish painting?",
    a: "Painting the detailed, close-up surfaces of a home, such as trim, doors, crown molding, built-ins, cabinetry and millwork, where sanding, primer and the coating choice show up in every reflection. It takes more preparation per square foot than walls.",
  },
  {
    q: "What paint do you use on trim, doors and cabinets?",
    a: `${CF.sentence}. Your estimate names the exact product and sheen for each surface.`,
  },
  {
    q: "Can you paint stained wood trim or cabinets white?",
    a: "Yes. Stained-to-painted work needs cleaning, scuff sanding and a bonding or stain-blocking primer so tannins and the old clear coat don't bleed through or cause peeling. Oak may also need grain filling if you want a smooth look.",
  },
  {
    q: "Do you spray or brush trim and doors?",
    a: "Both, depending on the surface. Doors and cabinet parts are often sprayed for an even film; trim already installed against walls is usually brushed and rolled. The estimate states the method for each area.",
  },
  {
    q: "How long until painted trim and cabinets can be used normally?",
    a: `They can be used carefully once the final coat is dry, but cabinet-grade finishes keep hardening for about ${CF.cureDays}. Avoid scrubbing and heavy contact during that time.`,
  },
  {
    q: "What does fine finish painting cost?",
    a: "It is priced from the number of doors, drawer fronts, linear feet of trim and the condition of the surfaces. We quote it on site in a written estimate. For kitchens, see our cabinet refinishing prices.",
  },
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: H1,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [{ url: BUSINESS.ogImage, width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: { card: "summary_large_image", title: H1, description: DESCRIPTION },
}

export default function FineFinishPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${URL}#service`,
              name: "Fine finish painting",
              serviceType: "Trim, door, built-in, millwork and cabinet painting",
              description: DESCRIPTION,
              provider: { "@id": ORG_ID },
              areaServed: { "@type": "City", name: "Houston" },
              url: URL,
            },
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: H1, path: PATH },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <PageHero h1={H1} eyebrow="Trim · Doors · Built-ins · Cabinetry" />

        <QuickAnswer>
          Fine finish painting is the close-up work in a home: trim, doors, crown molding, built-ins, cabinetry and
          millwork. The result depends on preparation more than paint: cleaning, sanding, filling, a bonding primer, and
          a durable enamel such as {CF.products[0]} or {CF.products[1]}. {BUSINESS.name} writes the surfaces, products,
          sheen and method into the estimate, and the work carries a {BUSINESS.trust.warrantyYears}-year written
          workmanship warranty.
        </QuickAnswer>

        <Section title="What we finish">
          <Bullets
            items={[
              <><strong>Trim and baseboards</strong>: crisp lines against the wall and an even sheen along every run.</>,
              <><strong>Interior doors and door casings</strong>: panels, edges and hinge sides.</>,
              <><strong>Crown molding</strong>: caulked joints and a clean cut line at the ceiling.</>,
              <><strong>Built-ins and bookcases</strong>: shelves, faces and the inside edges that show.</>,
              <>
                <strong>Cabinetry</strong>: kitchens, vanities and laundry rooms (see{" "}
                <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing</Link>).
              </>,
              <><strong>Millwork</strong>: wainscoting, paneling, columns, stair parts and railings.</>,
              <><strong>Stained-to-painted transitions</strong>: taking dated stained wood to a painted finish.</>,
            ]}
          />
        </Section>

        <Section title="How the work is done">
          <Steps
            items={[
              { title: "Clean and degrease", text: "dirt, hand oils and kitchen grease come off first; paint won't bond to them." },
              { title: "Sand and fill", text: "the old finish is scuffed, nail holes and dents are filled, and joints are caulked." },
              { title: "Bonding primer", text: "glossy, stained or slick surfaces get a bonding or stain-blocking primer." },
              {
                title: "Apply the finish",
                text: "brush, roller or spray, chosen per surface and written in the estimate, with light sanding between coats where needed.",
              },
              { title: "Clean up and walk through", text: "we remove masking, clean the work area and review the finish with you." },
            ]}
          />
        </Section>

        <Section title="Durable coatings for detailed surfaces">
          <p>
            Trim, doors and cabinets are touched, bumped and wiped every day, so they need a harder film than wall paint.
            We use {CF.sentence}. These finishes level out smoothly and cure to a washable surface; full cure takes about{" "}
            {CF.cureDays} (<Link href="/blog/cabinet-paint-cure-time-houston">what that means for your kitchen</Link>).
          </p>
        </Section>

        <Section title="Recent detailed work">
          <ProjectPhotoStrip
            photos={[
              {
                src: "/images/projects/heights-white-beadboard-kitchen/01-kitchen-and-built-ins.jpg",
                alt: "White painted kitchen cabinets and built-ins in The Heights",
                caption: "Kitchen and built-ins, The Heights",
                href: "/projects/heights-white-beadboard-kitchen-cabinets",
              },
              {
                src: "/images/projects/richmond-great-room/04-columns-and-stair-wall.jpg",
                alt: "White columns, door casing and stair skirt in a Richmond foyer",
                caption: "Columns, casing and stair trim, Richmond",
                href: "/projects/richmond-two-story-great-room",
              },
              {
                src: "/images/projects/bellaire-white-glass-cabinets/01-glass-front-uppers.jpg",
                alt: "White glass-front upper cabinets in Bellaire",
                caption: "Glass-front cabinetry, Bellaire",
                href: "/projects/bellaire-white-glass-front-cabinets",
              },
            ]}
          />
        </Section>

        <FinishSystem />

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <Section title="Related pages">
          <LinkGrid
            links={[
              { label: "Cabinet refinishing", href: "/cabinet-refinishing-houston-tx" },
              { label: "Interior painting", href: "/interior-painting-houston-tx" },
              { label: "Paint color consultation", href: "/paint-color-consultation-houston" },
              { label: "Cabinet painting cost", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
              { label: "Cabinet paint cure time", href: "/blog/cabinet-paint-cure-time-houston" },
              { label: "Projects", href: "/projects" },
            ]}
          />
        </Section>

        <TrustChecklist />

        <CtaBlock title="Get a written estimate for trim, doors or cabinets">
          Call <a href={`tel:${BUSINESS.phoneTel}`} className="underline">{BUSINESS.phone}</a> or{" "}
          <Link href={ESTIMATE_PATH} className="underline">request an estimate online</Link>. {BUSINESS.paymentPolicy.sentence}
        </CtaBlock>
      </main>
      <Footer />
    </>
  )
}
