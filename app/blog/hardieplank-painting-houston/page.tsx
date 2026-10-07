import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/hardieplank-painting-houston"

const DESCRIPTION =
  "How to paint James Hardie and HardiePlank in Houston. Caulk, cut edges, 100% acrylic paint, ColorPlus rules, and 2026 cost from a local painting contractor."

// TODO(juan): replace featured image with a real job photo
const IMAGE = "/images/blog/spring-rain-damage-houston.png"
const IMAGE_ALT =
  "Close-up of painted lap siding and window trim with rain droplets, paint peeling where the trim meets the sill"

export const metadata: Metadata = {
  title: "HardiePlank Painting in Houston | Prep, Paint & Cost 2026",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    images: [
      {
        url: `https://houstonsuperiorpainting.com${IMAGE}`,
        width: 1200,
        height: 630,
        alt: IMAGE_ALT,
      },
    ],
    title: "How to Paint HardiePlank in Houston: Prep, Paint, and What Lasts",
    description: DESCRIPTION,
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "Can you paint James Hardie siding?",
    answer:
      "Yes. Use a 100% acrylic exterior paint. Do not use oil, alkyd, or stain. James Hardie also says not to paint the board when it is wet.",
  },
  {
    question: "Does HardiePlank need primer?",
    answer:
      "Factory-primed board needs a topcoat, not a second full primer, if the primer is intact. Bare cement, repairs, and every field-cut edge do need primer. ColorPlus that is still sound usually does not need a reprime before a new acrylic topcoat.",
  },
  {
    question: "Can you pressure wash HardiePlank before painting?",
    answer:
      "A soft wash is the right clean. A tight pressure-washer tip can etch the texture and drive water up behind the laps. We do not coat until the wall is dry.",
  },
  {
    question: "How often should Hardie be repainted in Houston?",
    answer:
      "Plan on 7–10 years for the paint film. Recaulk sooner if butt joints open. The siding itself is not on that clock.",
  },
  {
    question: "Will painting ColorPlus void the finish warranty?",
    answer:
      "A field repaint is a different finish from the factory ColorPlus coating. If the factory finish is still under its limited finish warranty and you do not need a color change, leave it and maintain the caulk. If the film has failed or you want a new color, we repaint with 100% acrylic and the new film is covered by our 5-year workmanship warranty, not by the original factory color warranty.",
  },
  {
    question: "What caulk do you use on Hardie joints?",
    answer:
      "A paintable exterior sealant that meets ASTM C920 Grade NS, Class 25 or higher, or a latex sealant meeting ASTM C834. It goes in the joint, not smeared across the face of the board.",
  },
]

const relatedPosts = [
  {
    title: "How Long Does Exterior Paint Last in Houston?",
    href: "/blog/how-long-does-exterior-paint-last-houston",
    excerpt: "Realistic repaint cycles for Houston siding, trim, and sun-facing walls.",
    image: "/images/blog/exterior-paint-durability-houston.jpg",
  },
  {
    title: "Sherwin-Williams Emerald vs Duration: Which Paint Is Right for Your Houston Home?",
    href: "/blog/emerald-vs-duration-paint",
    excerpt: "Emerald and Duration cost about the same and both promise a finish that lasts. Here's which one wins where.",
    image: "/images/blog/emerald-vs-duration-paint.png",
  },
  {
    title: "How Houston Weather Damages Exterior Paint",
    href: "/blog/how-houston-weather-damages-exterior-paint",
    excerpt: "How heat, humidity, and storms break down exterior paint — and how to fight back.",
    image: "/images/blog/houston-weather-paint-damage.png",
  },
]

const th = "border border-border p-3 text-left"
const td = "border border-border p-3"

export default function HardiePlankPaintingHoustonPage() {
  return (
    <BlogPostTemplate
      slug="hardieplank-painting-houston"
      title="How to Paint HardiePlank in Houston: Prep, Paint, and What Lasts"
      excerpt={DESCRIPTION}
      author="Juan Serra"
      authorRole="Owner, Houston Superior Painting"
      publishDate="October 7, 2026"
      readTime="10 min read"
      category="Exterior Painting"
      featuredImage={IMAGE}
      featuredImageAlt={IMAGE_ALT}
      faqs={faqs}
      relatedPosts={relatedPosts}
    >
      <h2>Quick Answer</h2>
      <p>
        HardiePlank in Houston should be painted with a 100% acrylic exterior paint — Sherwin-Williams Duration or
        Benjamin Moore Aura Exterior — after a <Link href="/soft-washing-houston-tx">soft wash</Link>, failed-caulk
        replacement, and primer only on bare or cut fiber cement. Do not use oil, alkyd, or stain. James Hardie says
        primed board must be top-coated within 180 days of install, and field-cut edges must be sealed. A typical Houston
        Hardie home runs about <strong>{PRICES_2026.exteriorPerSqFt} per sq ft of living area</strong> in 2026, or about{" "}
        <strong>{PRICES_2026.exterior2500TwoStory}</strong> for a two-story 2,500 sq ft house. Call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a> for a fixed quote.
      </p>

      <p>
        HardiePlank is the default siding on most houses built in <Link href="/painters-katy-tx">Katy</Link>,{" "}
        <Link href="/painters-cypress-tx">Cypress</Link>, Bridgeland, <Link href="/painters-fulshear-tx">Fulshear</Link>,
        and <Link href="/painters-the-woodlands-tx">The Woodlands</Link> since the mid-2000s. It holds paint better than
        wood. It also fails in a very specific way in Houston: the paint film looks fine, and the caulk joints and the
        bottom course are already open.
      </p>
      <p>That is the job. Color is the easy part.</p>

      <h2>ColorPlus, primed, or already painted</h2>
      <p>Not every Hardie wall gets the same prep.</p>
      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-muted">
            <th className={th}>Board</th>
            <th className={th}>What it is</th>
            <th className={th}>What we do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={td}>
              <strong>ColorPlus</strong>
            </td>
            <td className={td}>Factory baked-on finish</td>
            <td className={td}>
              Clean, replace failed caulk, spot-prime repairs only. A full repaint is optional and uses 100% acrylic.
              Repriming a sound ColorPlus film is normally not required.
            </td>
          </tr>
          <tr>
            <td className={td}>
              <strong>Factory-primed (gray)</strong>
            </td>
            <td className={td}>Needs a field topcoat</td>
            <td className={td}>
              Topcoat with 100% acrylic. James Hardie requires primed product to be painted within 180 days of
              installation.
            </td>
          </tr>
          <tr>
            <td className={td}>
              <strong>Already painted</strong>
            </td>
            <td className={td}>Most resale homes in Houston</td>
            <td className={td}>Soft wash, scrape loose film, caulk, prime bare spots, two finish coats.</td>
          </tr>
          <tr>
            <td className={td}>
              <strong>Raw cut edges</strong>
            </td>
            <td className={td}>Every butt joint and rip</td>
            <td className={td}>Prime or paint every field cut. Unsealed edges are where Houston rain gets in.</td>
          </tr>
        </tbody>
      </table>
      <p>
        James Hardie is explicit: do not use stain, oil/alkyd paint, or powder coating on their products. Do not paint
        wet board. If the siding is sprayed, back-roll it.
      </p>

      <h2>Why Houston Hardie fails at the joints, not the middle of the board</h2>
      <p>
        Fiber cement does not rot the way pine does. The failure is almost always at the butt joint, the window flange,
        and the first course above the brick ledge.
      </p>
      <p>
        Houston gives that joint a full year of 90% humidity, a spring of wind-driven rain, and a summer that bakes the
        caulk until it shrinks. Once the joint opens, water sits on the cut edge. The paint above the joint blisters a
        season later. Homeowners call it “the paint is peeling.” The paint is the symptom.
      </p>
      <p>What we check on every Hardie estimate:</p>
      <ul>
        <li>Butt joints that have cracked or pulled</li>
        <li>Caulk at window and door trim that has separated</li>
        <li>Bottom course stained green from splash-back and shade</li>
        <li>Nail heads telegraphing through a thin first paint job</li>
        <li>
          Fascia and frieze board (often wood, not Hardie) rotting above sound siding — see{" "}
          <Link href="/wood-rot-repair-houston-tx">wood rot repair</Link>
        </li>
      </ul>

      <h2>The prep sequence that actually holds</h2>
      <ol>
        <li>
          <strong>Soft wash, not a close-up pressure wash.</strong> Mildew on north walls and under oaks comes off with a
          house-wash mix. A pressure tip too close scars the texture and forces water behind the lap.
        </li>
        <li>
          <strong>Dry time.</strong> We do not coat the same day as the wash if the wall is still cool and damp. Houston
          mornings lie.
        </li>
        <li>
          <strong>Scrape and sand only what is loose.</strong> A sound acrylic film does not get stripped.
        </li>
        <li>
          <strong>Recaulk what failed.</strong> James Hardie calls for an elastomeric joint sealant meeting ASTM C920,
          Grade NS, Class 25 or higher, or a latex sealant meeting ASTM C834, applied the way that sealant maker
          specifies. We use a paintable urethane or siliconized acrylic rated for fiber cement, tooled into the joint —
          not smeared over the face.
        </li>
        <li>
          <strong>Prime bare fiber cement and every cut edge.</strong> Alkali-resistant acrylic primer on raw cement.
          Factory primer that is intact does not get a full reprime.
        </li>
        <li>
          <strong>Two coats of 100% acrylic.</strong> Our default on Houston Hardie is Sherwin-Williams Duration.
          Benjamin Moore Aura Exterior is the other premium we spec when the color match calls for it. Satin on the
          body, a slightly higher sheen on trim if the trim is paintable. (More on the paint choice in{" "}
          <Link href="/blog/emerald-vs-duration-paint">Emerald vs Duration</Link>.)
        </li>
      </ol>
      <p>
        Spraying a Hardie lap without back-rolling leaves the panel edges light. That shows up at month six in
        west-facing afternoon sun.
      </p>

      <h2>What not to do</h2>
      <ul>
        <li>
          Oil or alkyd “because it sticks better.” It does not, on this substrate, and Hardie says not to use it.
        </li>
        <li>
          Elastomeric house paint as a cure-all. Hardie is not stucco. A heavy elastomeric on lap siding can bridge
          joints and trap water.
        </li>
        <li>
          Caulk as filler on ColorPlus face dings. Hardie does not approve caulk or cementitious patch for nail heads
          and small face damage on ColorPlus. Touch-up on that finish is for nicks smaller than a dime, with their edge
          coater or touch-up, above 40°F.
        </li>
        <li>Painting a damp bottom course the morning after a storm.</li>
      </ul>

      <h2>Cost to paint HardiePlank in Houston, 2026</h2>
      <p>
        These match our <Link href="/exterior-house-painting-houston-cost-guide">exterior price tables</Link>. Paintable
        surface is not the same as living area. A 2,000 sq ft house often has 2,500–3,500 sq ft of wall, trim, and
        soffit.
      </p>
      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-muted">
            <th className={th}>Scope</th>
            <th className={th}>Typical 2026 range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={td}>Hardie exterior, per sq ft of living area</td>
            <td className={td}>
              <strong>{PRICES_2026.exteriorPerSqFt}</strong>
            </td>
          </tr>
          <tr>
            <td className={td}>Single-story, about 2,000 sq ft living</td>
            <td className={td}>
              <strong>{PRICES_2026.exterior2000OneStory}</strong>
            </td>
          </tr>
          <tr>
            <td className={td}>Two-story, about 2,000 sq ft living</td>
            <td className={td}>
              <strong>{PRICES_2026.exterior2000TwoStory}</strong>
            </td>
          </tr>
          <tr>
            <td className={td}>Two-story, about 2,500 sq ft living</td>
            <td className={td}>
              <strong>{PRICES_2026.exterior2500TwoStory}</strong>
            </td>
          </tr>
          <tr>
            <td className={td}>Caulk-heavy repaint (failed joints on most elevations)</td>
            <td className={td}>
              <strong>Add {PRICES_2026.caulkHeavyAdd}</strong>
            </td>
          </tr>
          <tr>
            <td className={td}>Wood fascia and soffit repair, if present</td>
            <td className={td}>Quoted after the walkthrough</td>
          </tr>
        </tbody>
      </table>
      <p>
        Price includes soft wash, scrape, recaulk of failed joints, spot prime, and two coats of premium acrylic. Steep
        two-story lots and three-story townhome rears cost more because of the lift.
      </p>

      <h2>How long it lasts here</h2>
      <p>
        On Hardie, a proper repaint in Houston is a 7–10 year film if the joints stay closed. The board will outlast the
        paint. The repaint cycle is the caulk and the sun-facing elevation, not the siding itself. North walls in The
        Woodlands mildew sooner. West walls in Katy and Fulshear chalk sooner. Same house, two different clocks.
      </p>

      <h2>Colors that work on Houston Hardie</h2>
      <p>
        Hardie reads flatter than brick, so a mid-tone hides joint lines better than a stark white. What we are putting
        on 2024–2026 houses:
      </p>
      <ul>
        <li>
          <strong>Body:</strong> warm greige, Alabaster, or a soft sage on wooded lots
        </li>
        <li>
          <strong>Trim:</strong> a warmer white than the body, not a blue-white
        </li>
        <li>
          <strong>Accent:</strong> front door only — navy, black, or a deep green
        </li>
      </ul>
      <p>
        HOAs in <Link href="/painters-cinco-ranch-tx">Cinco Ranch</Link>, Cross Creek Ranch, Bridgeland, and Harvest
        Green still have to approve the chip. We match to a Sherwin-Williams or Benjamin Moore fan deck before anyone
        orders paint. (See our guide to{" "}
        <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA exterior paint rules</Link>.)
      </p>

      <p>
        Houston Superior Painting paints HardiePlank across Katy, Cypress,{" "}
        <Link href="/painters-sugar-land-tx">Sugar Land</Link>, Fulshear,{" "}
        <Link href="/painters-magnolia-tx">Magnolia</Link>, and greater Houston as part of our{" "}
        <Link href="/exterior-painting-houston-tx">exterior painting</Link> work.{" "}
        <Link href="/painting-estimate-houston">Get a free written estimate</Link> or call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
