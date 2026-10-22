import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-06.
// Porch-floor paint vs. coatings, general. Epoxy is the sister brand.

const D: GuideArticleData = {
  path: "/blog/painting-concrete-porch-steps-houston",
  title: "Painting a Concrete Porch and Steps",
  description:
    "Porch and floor paint vs. a coating, prep for Houston humidity, slip resistance on steps, and when an epoxy or polyaspartic floor is the better choice.",
  h1: "Painting a concrete porch and steps",
  eyebrow: "Exterior guide",
  published: "2027-01-06",
  updated: "2027-01-06",
  quickAnswer: (
    <>
      A concrete porch can be painted with a porch-and-floor paint made for foot traffic, but prep decides how long it
      lasts: the concrete must be clean, dry and slightly porous, and old peeling paint must come off. On steps, add a
      slip-resistant additive. Paint wears and needs recoating over time; for a harder, longer-lasting surface, an epoxy or
      polyaspartic coating is the step up. Damp slabs and moisture coming up through the concrete are the main reasons
      porch paint peels in Houston.
    </>
  ),
  sections: [
    {
      title: "Paint or coating?",
      body: (
        <Bullets
          items={[
            <><strong>Porch-and-floor paint:</strong> affordable, many colors, easy to recoat; wears in high-traffic paths.</>,
            <><strong>Concrete stain or sealer:</strong> soaks in, shows the concrete&apos;s texture, doesn&apos;t peel like a film.</>,
            <><strong>Epoxy or polyaspartic:</strong> hardest and longest-lasting; needs the concrete ground or profiled first.</>,
          ]}
        />
      ),
    },
    {
      title: "How a porch is painted",
      body: (
        <Steps
          items={[
            { title: "Test for moisture", text: "a damp slab or moisture coming through will push paint off." },
            { title: "Clean", text: "pressure wash dirt, mildew and oil; remove loose or peeling paint." },
            { title: "Repair", text: "patch cracks and spalled spots with a concrete repair product." },
            { title: "Etch or profile if needed", text: "smooth, dense concrete needs a rougher surface to hold paint." },
            { title: "Prime and paint", text: "a primer if the product calls for one, then two coats; slip additive on steps." },
            { title: "Let it cure", text: "light foot traffic first; furniture and planters back later." },
          ]}
        />
      ),
    },
    {
      title: "When to choose a coating instead",
      body: (
        <p>
          For a porch that gets heavy use, or a garage floor, a professional coating lasts much longer than paint. Our sister
          company, <a href="https://houstonsuperiorepoxy.com/">Houston Superior Epoxy</a>, installs epoxy and polyaspartic
          floors. See <Link href="/blog/pressure-washing-before-painting">pressure washing before painting</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint a concrete porch?",
      a: "Yes, with a porch-and-floor paint over clean, dry, slightly porous concrete. Prep decides how long it lasts.",
    },
    {
      q: "Why is the paint peeling on my concrete porch?",
      a: "Usually moisture coming up through the slab, paint over dirt or old coatings, or concrete too smooth for paint to grip.",
    },
    {
      q: "How do I make painted steps less slippery?",
      a: "Add a slip-resistant additive to the final coat, or choose a coating with a textured finish.",
    },
    {
      q: "Is epoxy better than paint for a porch?",
      a: "For durability, yes: epoxy and polyaspartic coatings are much harder and last longer, but they cost more and need more prep.",
    },
  ],
  limitations: <>General guidance; product labels and the slab&apos;s condition decide the right system.</>,
  related: [
    { label: "Pressure washing before painting", href: "/blog/pressure-washing-before-painting" },
    { label: "Painting garage walls", href: "/blog/painting-garage-walls-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Exterior paint sheen", href: "/blog/exterior-paint-sheen-houston" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
