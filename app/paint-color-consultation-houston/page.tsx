import { RelatedGuides } from "@/components/related-guides"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd, ORG_ID } from "@/components/structured-data"
import { TrustChecklist } from "@/components/trust-checklist"
import { ProjectPhotoStrip } from "@/components/project-photo-strip"
import { PageHero, QuickAnswer, Section, Bullets, Steps, LinkGrid, CtaBlock, breadcrumbNode, ESTIMATE_PATH } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Color consultation (owner brief 2026-10-14). Juan confirmed 2026-10-14 that a
// free color consultation is offered. No interior-design credentials are
// claimed. Video consultations confirmed by Juan 2026-10-14. Photo-based and
// video guidance are preliminary;
// final colors are always confirmed with physical samples. No manufacturer
// sponsorship is implied: brand names identify products only.

const PATH = "/paint-color-consultation-houston"
const URL = `${BUSINESS.url}${PATH}`
const TITLE = "Paint Color Consultation in Houston | Free with Your Estimate"
const DESCRIPTION =
  "Free paint color consultation in Houston, in person, by video or from photos, matched to your floors, counters, roof and brick, with real paint samples."
const H1 = "Paint Color Consultation in Houston"

const FAQS = [
  {
    q: "Is the color consultation free?",
    a: "Yes. Color guidance is part of our free estimate process for painting projects. We help you narrow the choices, then confirm them with physical samples before work starts.",
  },
  {
    q: "Do you offer virtual color consultations?",
    a: "Yes. We can do a video call and walk through the rooms or the exterior with you. Like photo-based advice, it is a starting point: screens shift color, so final choices are confirmed with physical samples on site.",
  },
  {
    q: "Can you help with colors from photos?",
    a: "Yes, as a starting point. Send photos of the room or house, including floors, counters, roof and brick, and we can suggest a short list. Screens and phone cameras shift color, so final choices are always confirmed with real samples on site.",
  },
  {
    q: "Are you interior designers?",
    a: "No. We are painters who help homeowners choose colors and sheens that work with their light, fixed finishes and HOA rules. For whole-room design decisions, an interior designer is the right professional.",
  },
  {
    q: "Which paint brands can you match?",
    a: "Colors can be chosen from any Sherwin-Williams or Benjamin Moore fan deck, and we also apply Farrow & Ball. Your estimate names the product line and sheen.",
  },
  {
    q: "Do you help with HOA color approvals?",
    a: "Yes. We regularly work with HOAs. We can work from your community's approved color list and help you prepare the colors and sheens for the approval request before work starts.",
  },
  {
    q: "Why does a color look different on my wall than on the chip?",
    a: "Light changes color. Houston's strong afternoon sun, north-facing rooms, warm bulbs and nearby floors or counters all shift how a color reads. That's why we test samples on your actual walls and look at them in morning and evening light.",
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

export default function ColorConsultationPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${URL}#service`,
              name: "Paint color consultation",
              serviceType: "Paint color consultation",
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
        <PageHero h1={H1} eyebrow="Interior · Exterior · Cabinets" />

        <QuickAnswer>
          {BUSINESS.name} offers a free color consultation with your painting estimate. We look at your light, floors,
          counters, cabinets, roof and brick, help you narrow the choices, recommend a sheen for each surface, and
          confirm the final colors with physical paint samples on your walls. Photos can get the conversation started,
          but the final choice is always made with real samples.
        </QuickAnswer>

        <Section title="How the consultation works">
          <Steps
            items={[
              {
                title: "Start with what stays",
                text: "flooring, countertops, cabinets, tile, fixtures, roof and brick don't change, so the paint colors have to work with them.",
              },
              { title: "Look at the light", text: "we check which way rooms face and how they look in morning and afternoon light." },
              { title: "Narrow the list", text: "a few strong options instead of a wall of chips." },
              { title: "Choose sheens", text: "flat or matte for ceilings, eggshell or satin for walls, harder sheens for trim, doors and cabinets." },
              { title: "Test real samples", text: "samples go on your walls or siding before anything is approved." },
              { title: "Write it down", text: "the colors, products and sheens go into the written estimate." },
            ]}
          />
        </Section>

        <Section title="In person, by video, or from photos">
          <Bullets
            items={[
              <>
                <strong>In person</strong>: during the estimate visit we look at the rooms and exterior in their real
                light.
              </>,
              <>
                <strong>By video</strong>: a video call where you walk us through the rooms or the outside of the house,
                and we talk through options and sheens. Useful before the estimate visit or if you are out of town.
              </>,
              <>
                <strong>From photos</strong>: send photos of the rooms or house, including the floors, counters, roof and
                brick, and we can suggest a short list before the visit. It is preliminary guidance only.
              </>,
            ]}
          />
        </Section>

        <Section title="Houston light and fixed finishes">
          <p>
            Houston&apos;s strong sun washes out pale colors on west-facing walls and makes warm colors read warmer;
            shaded and north-facing rooms pull colors cooler and darker. Inside, wood floors, granite and tile throw their
            own color onto the walls. Outside, the roof, brick and stone set the palette, and the paint has to work with
            them, not against them. See{" "}
            <Link href="/best-paint-colors-houston-homes">popular paint colors for Houston homes</Link>.
          </p>
        </Section>

        <Section title="HOA color approvals">
          <p>
            Many Greater Houston communities review exterior colors. We can work from your HOA&apos;s approved color list
            and help you prepare the colors and sheens for the approval request before work starts (
            <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">how HOA paint rules work</Link>).
          </p>
        </Section>

        <Section title="Choosing the sheen">
          <p>
            Sheen changes how durable and how forgiving a surface is. Flatter sheens hide wall imperfections; higher sheens
            clean more easily and suit trim, doors and cabinets. Read{" "}
            <Link href="/blog/paint-finishes-matte-eggshell-satin-semi-gloss">matte vs eggshell vs satin vs semi-gloss</Link>.
          </p>
        </Section>

        <Section title="Always confirm with a physical sample">
          <p>
            Want to experiment first? Try colors on a photo of your own room with our{" "}
            <Link href="/color-visualizer">color visualizer</Link>; it runs on your device and your photo is not uploaded.{" "}
            On-screen colors are approximate and may vary by screen, lighting and surrounding finishes. Confirm your final
            selection with a physical paint sample.
          </p>
        </Section>

        <Section title="Colors we have painted">
          <ProjectPhotoStrip
            photos={[
              {
                src: "/images/projects/richmond-sage-kitchen/01-sage-kitchen-corner.jpg",
                alt: "Sage green painted kitchen cabinets in Richmond",
                caption: "Sage green cabinets, Richmond",
                href: "/projects/richmond-sage-green-kitchen-cabinets",
              },
              {
                src: "/images/projects/richmond-sage-kitchen/06-living-room-accent-wall.jpg",
                alt: "Living room with a dark gray accent wall behind the fireplace",
                caption: "Fireplace accent wall, Richmond",
                href: "/projects/richmond-sage-green-kitchen-cabinets",
              },
              {
                src: "/images/projects/fulshear-interior/07-bedroom-accent-wall.jpg",
                alt: "Bedroom accent wall in a Fulshear home",
                caption: "Bedroom accent wall, Fulshear",
                href: "/projects/fulshear-interior-repaint",
              },
            ]}
          />
        </Section>

        <FAQ items={FAQS} title="Frequently asked questions" variant="compact" />

        <Section title="Related pages">
          <LinkGrid
            links={[
              { label: "Interior painting", href: "/interior-painting-houston-tx" },
              { label: "Exterior painting", href: "/exterior-painting-houston-tx" },
              { label: "Cabinet refinishing", href: "/cabinet-refinishing-houston-tx" },
              { label: "Fine finish painting", href: "/fine-finish-painting-houston" },
              { label: "Popular Houston paint colors", href: "/best-paint-colors-houston-homes" },
              { label: "Accent wall ideas", href: "/accent-wall-ideas-houston" },
              { label: "Color visualizer", href: "/color-visualizer" },
            ]}
          />
        </Section>

        <TrustChecklist />

        <CtaBlock title="Book a free estimate and color consultation">
          Call <a href={`tel:${BUSINESS.phoneTel}`} className="underline">{BUSINESS.phone}</a> or{" "}
          <Link href={ESTIMATE_PATH} className="underline">request an estimate online</Link>.
        </CtaBlock>
        <div className="container mx-auto max-w-4xl px-4">
          <RelatedGuides path="/paint-color-consultation-houston" />
        </div>
      </main>
      <Footer />
    </>
  )
}
