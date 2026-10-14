import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"

// Owner brief 2026-10-14 (draft 4).

const D: GuideArticleData = {
  path: "/blog/why-paint-peels-bubbles-houston",
  title: "Why Paint Peels, Bubbles or Blisters in Houston Homes",
  description:
    "Houston humidity is not the only cause of peeling paint. How moisture, poor prep, incompatible coatings and heat cause bubbles and failure, and how to fix it.",
  h1: "Why does paint peel, bubble or blister?",
  eyebrow: "Paint problems",
  published: "2026-10-14",
  updated: "2026-10-14",
  quickAnswer: (
    <>
      Peeling paint is a symptom, not a diagnosis. The usual causes are moisture behind the paint, dirt, chalk or mildew
      under it, painting a surface that was too hot or damp, a new coating that is incompatible with the old one, and
      poor prep. Houston&apos;s heat, sun and humidity speed these up. Another coat over the problem rarely lasts: find
      and fix the cause, remove loose paint to a sound edge, repair and prime, then repaint.
    </>
  ),
  sections: [
    {
      title: "Common causes of paint failure",
      body: (
        <Bullets
          items={[
            <>
              <strong>Moisture behind the paint.</strong> Roof and plumbing leaks, failed caulk, condensation and damp
              masonry push water toward the surface. Fix the source and let the material dry before repainting.
            </>,
            <>
              <strong>Mildew, chalk or dirt.</strong> Paint cannot bond to loose chalk, mildew, dirt or grease. The
              cleaning has to match the surface and what is on it.
            </>,
            <>
              <strong>Painting a hot or damp surface.</strong> Paint applied outside the maker&apos;s temperature or
              moisture limits may not form a proper film. In direct Houston sun a wall can be much hotter than the air.
            </>,
            <>
              <strong>Incompatible coatings.</strong> New paint can fail over gloss, old oil-based paint or factory
              finishes that were not prepped and primed.
            </>,
            <>
              <strong>Poor prep.</strong> Painting over loose edges, failed caulk, rotten wood or powdery surfaces only
              hides the defect for a while.
            </>,
            <>
              <strong>Indoor humidity.</strong> Bathrooms, laundry rooms, kitchens and spots near HVAC equipment can stay
              damp. Check ventilation and the cause before choosing a new paint.
            </>,
          ]}
        />
      ),
    },
    {
      title: "What the pattern can tell you",
      body: (
        <>
          <Bullets
            items={[
              "Bubbles after rain often point to water getting in.",
              "Peeling down to bare wood suggests lost adhesion or moisture.",
              "Peeling between paint layers suggests dirt between coats or incompatible paints.",
              "Powdery exterior paint is usually chalking from sun and weather.",
              "Bathroom paint that keeps peeling usually means condensation or poor ventilation.",
            ]}
          />
          <p>These are clues, not a substitute for looking at the wall.</p>
        </>
      ),
    },
    {
      title: "The right repair sequence",
      body: (
        <>
          <Steps
            items={[
              { title: "Find and fix the source", text: "leak, failed caulk, condensation or ventilation." },
              { title: "Let it dry", text: "the surface has to reach an acceptable condition before paint." },
              { title: "Remove failed paint", text: "scrape loose material back to a sound edge." },
              { title: "Clean", text: "remove dirt, chalk and mildew." },
              { title: "Repair", text: "wood, drywall, stucco or caulk." },
              { title: "Prime", text: "with the right primer where it is needed." },
              { title: "Repaint", text: "with the specified system, in suitable weather." },
            ]}
          />
          <p>
            Rotten wood under peeling trim is common in Houston; see{" "}
            <Link href="/wood-rot-repair-houston-tx">wood rot repair</Link> and an{" "}
            <Link href="/projects/heights-exterior-siding-repaint">exterior siding repaint in The Heights</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "Can painters fix active water damage?",
      a: "Painting should wait until the leak or moisture source is fixed. Damaged wood, drywall or stucco may also need to be repaired or replaced first.",
    },
    {
      q: "Can I just sand the bubbles and repaint?",
      a: "Only after the cause is found. Otherwise the bubbles usually come back under the new paint.",
    },
    {
      q: "Why does exterior paint fail first on one side of the house?",
      a: "Each side gets different sun, rain, wind and shade. South- and west-facing walls take more heat and UV, while shaded sides stay damp longer and grow mildew.",
    },
    {
      q: "Is peeling paint always caused by humidity?",
      a: "No. Humidity speeds failure up, but poor prep, dirty or chalky surfaces, incompatible paints and leaks are just as common causes.",
    },
  ],
  limitations: (
    <>
      General guidance; a failure has to be inspected to know its cause. Homes built before 1978 may have lead paint, and
      federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask before scraping old
      paint.
    </>
  ),
  related: [
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Exterior painting cost guide", href: "/exterior-house-painting-houston-cost-guide" },
    { label: "Signs your home needs exterior paint", href: "/signs-home-needs-exterior-painting" },
    { label: "Wood rot repair", href: "/wood-rot-repair-houston-tx" },
  ],
  ctaTitle: "Get an exterior paint assessment",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
