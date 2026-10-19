import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-16.
// About painting the garage DOOR (exterior). Garage floors are the epoxy
// brand's business, not covered here. No garage-door price exists.

const D: GuideArticleData = {
  path: "/blog/garage-door-painting-houston",
  title: "Garage Door Painting in Houston: Steel, Wood and Color",
  description:
    "How to paint a steel or wood garage door so it lasts in Houston sun: cleaning, rust and dent prep, primer, color and fade, and keeping panels from sticking.",
  h1: "Garage door painting in Houston",
  eyebrow: "Exterior guide",
  published: "2026-11-16",
  updated: "2026-11-16",
  quickAnswer: (
    <>
      Most Houston garage doors are steel, and they paint well with the right prep: wash off dirt and chalky residue, treat
      any rust, prime bare metal, and apply two coats of a durable exterior acrylic. Paint the door closed, then leave the
      sections apart (or the door partly open) until dry so the panel joints don&apos;t stick. Wood doors need the same care
      as wood trim, with every edge sealed. Very dark colors fade and heat up faster on sunny elevations.
    </>
  ),
  sections: [
    {
      title: "Steel garage doors",
      body: (
        <Steps
          items={[
            { title: "Wash", text: "remove dirt, cobwebs and the chalky film on old factory finishes; rinse and let dry." },
            { title: "Treat rust", text: "sand rust spots to sound metal and prime them with a rust-inhibiting primer." },
            { title: "Scuff and prime", text: "scuff glossy factory finishes; prime bare or treated areas." },
            { title: "Two coats", text: "of a durable exterior acrylic, rolled or sprayed evenly, top section down." },
            { title: "Don't let it stick", text: "keep the door from closing tight on fresh paint until it dries." },
          ]}
        />
      ),
    },
    {
      title: "Wood garage doors",
      body: (
        <p>
          Wood doors move with humidity, so they need the same treatment as wood trim: repair cracks and rot, prime bare wood
          and seal every edge, including the bottom. See{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair before painting</Link>.
        </p>
      ),
    },
    {
      title: "Color choices",
      body: (
        <Bullets
          items={[
            "Matching the garage door to the body color makes a large door blend in; matching the trim makes it a clean feature.",
            "Dark colors on a sunny garage door fade faster and get hot; some door makers limit dark colors.",
            "Check your HOA rules: garage doors are often included in color approvals.",
          ]}
        />
      ),
    },
    {
      title: "Cost and scope",
      body: (
        <p>
          Garage doors are usually painted as part of an exterior repaint and priced on the estimate by size and condition.
          {" "}{BUSINESS.paymentPolicy.sentence} See <Link href="/exterior-painting-houston-tx">exterior painting in
          Houston</Link> and <Link href="/blog/front-door-paint-houston-sun">painting a front door in Houston sun</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint a steel garage door?",
      a: "Yes. Wash it, treat rust, scuff and prime bare metal, then apply two coats of a durable exterior acrylic.",
    },
    {
      q: "How do you keep a painted garage door from sticking?",
      a: "Don't close it tight on fresh paint: leave it partly open or keep the sections apart until the paint is dry.",
    },
    {
      q: "Should the garage door match the house or the trim?",
      a: "Matching the body makes it blend in; matching the trim makes it stand out cleanly. Check HOA rules either way.",
    },
    {
      q: "Do dark garage doors fade?",
      a: "Faster than light ones on sunny elevations, and they get hotter. Some manufacturers limit dark colors.",
    },
  ],
  limitations: <>General guidance. Follow the door and paint manufacturers&apos; instructions.</>,
  related: [
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Painting a front door in Houston sun", href: "/blog/front-door-paint-houston-sun" },
    { label: "HOA exterior paint rules", href: "/blog/hoa-exterior-paint-rules-houston-suburbs" },
    { label: "Caulking before exterior painting", href: "/blog/caulking-before-exterior-painting-houston" },
  ],
  ctaTitle: "Get a written exterior estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
