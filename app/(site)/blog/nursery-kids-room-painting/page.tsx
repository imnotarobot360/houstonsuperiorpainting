import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-20.
// No medical advice: general low-VOC and ventilation guidance, label rules,
// and the pre-1978 lead-paint caution. No certification claims.

const D: GuideArticleData = {
  path: "/blog/nursery-kids-room-painting",
  title: "Painting a Nursery or Kids' Room: Timing, Low-VOC, Durability",
  description:
    "When to paint a nursery before the baby arrives, low-odor and low-VOC paint, ventilation, washable finishes for kids' rooms, and lead paint in older homes.",
  h1: "Painting a nursery or kids' room",
  eyebrow: "Interior guide",
  published: "2026-11-20",
  updated: "2026-11-20",
  quickAnswer: (
    <>
      Paint a nursery well before the baby arrives, ideally several weeks ahead, so the paint can cure and the room can
      air out. Use a low-odor, low-VOC water-based paint, ventilate during and after painting, and keep the baby and anyone
      sensitive to odors out of the room until the smell is gone. For older children&apos;s rooms, choose a scrubbable
      finish. In homes built before 1978, have old paint tested for lead before any sanding.
    </>
  ),
  sections: [
    {
      title: "Timing a nursery",
      body: (
        <Steps
          items={[
            { title: "Plan early", text: "paint several weeks before the due date, not the week before." },
            { title: "Ventilate", text: "open windows and run fans or the HVAC during and after painting." },
            { title: "Let it air out", text: "keep the baby and odor-sensitive family members out of the room until the smell is gone." },
            { title: "Furniture last", text: "set up the crib and furniture after the walls have dried, a few inches from the walls at first." },
          ]}
        />
      ),
    },
    {
      title: "Choosing the paint",
      body: (
        <Bullets
          items={[
            "Low-odor, low-VOC (or zero-VOC base) water-based paints release fewer fumes; check the product data, not just the label wording.",
            "Remember that adding colorant can add VOCs to a 'zero-VOC' base; ask about it for deep colors.",
            "Washable eggshell or satin stands up to fingerprints and crayon in kids' rooms; flat is fine on ceilings.",
            "Semi-gloss on trim and doors that get kicked and grabbed.",
          ]}
        />
      ),
    },
    {
      title: "Older homes and lead paint",
      body: (
        <p>
          Homes built before 1978 may have lead-based paint under newer layers, often on windows, doors and trim. Sanding
          or scraping it creates hazardous dust, which is especially dangerous for young children and pregnant women. Have
          old paint tested before any sanding, and use lead-safe practices or a contractor certified for that work.
        </p>
      ),
    },
    {
      title: "Colors that grow with the child",
      body: (
        <p>
          Soft, versatile wall colors with color in the décor, an accent wall or a ceiling are easy to change as kids grow.
          See <Link href="/blog/ceiling-paint-color-white-vs-color">ceiling paint ideas</Link>,{" "}
          <Link href="/accent-wall-ideas-houston">accent wall ideas</Link> and our{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How long before the baby arrives should I paint the nursery?",
      a: "Several weeks ahead if you can, so the paint cures and the room airs out. Ventilate well and keep the baby out until the smell is gone.",
    },
    {
      q: "What paint is safest for a nursery?",
      a: "A low-odor, low-VOC water-based paint, applied with good ventilation. Check the product data sheet for VOC content.",
    },
    {
      q: "Should a pregnant person paint the nursery?",
      a: "Many families have someone else do it, especially in older homes where old paint might contain lead. Ask your doctor for personal health advice.",
    },
    {
      q: "What finish is best for a kids' room?",
      a: "A washable eggshell or satin for walls and semi-gloss for trim and doors, so marks clean off.",
    },
  ],
  limitations: <>General guidance, not medical advice. Follow the paint label and ask your doctor about personal health questions.</>,
  related: [
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "How long before using a painted room", href: "/blog/how-long-before-using-freshly-painted-room" },
    { label: "Paint finishes explained", href: "/blog/paint-finishes-matte-eggshell-satin-semi-gloss" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
