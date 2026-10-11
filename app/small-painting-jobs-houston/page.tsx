import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Owner-supplied draft (houston-superior-painting-2026-articles.md, Article 3), Oct 2026.

const T = BUSINESS.trust

const D: GuideArticleData = {
  path: "/small-painting-jobs-houston",
  title: "Small Painting Jobs in Houston | Rooms, Doors & Touch-Ups",
  description:
    "Need a small painting job in Houston? Learn what can be repaired or repainted, how minimum charges work, and when a full-wall repaint is better.",
  h1: "Small painting jobs in Houston, TX",
  eyebrow: "Small projects",
  published: "2026-10-11",
  updated: "2026-10-11",
  breadcrumbParent: { name: "Interior Painting", path: "/interior-painting-houston-tx" },
  quickAnswer: (
    <>
      Not every painting project is a whole-home repaint. A single room, accent wall, door, hallway, or repaired section of
      drywall may be a good fit for a smaller visit, as long as the scope allows proper preparation, protection,
      application, and cleanup. Houston Superior Painting evaluates small painting jobs across Greater Houston and provides
      the scope and price in writing before work is scheduled.
    </>
  ),
  sections: [
    {
      title: "Small painting projects we can evaluate",
      body: (
        <>
          <Bullets
            items={[
              "One room, hallway, closet, or laundry room",
              "Accent walls",
              "Interior doors, frames, and trim",
              "Stairwell walls when access is safe",
              <>Minor <Link href="/drywall-repair-houston-tx">drywall patching</Link> and texture matching followed by painting</>,
              "Repainting after plumbing or electrical access repairs",
              "Exterior trim, shutters, or a single elevation when the coating system and color can be matched appropriately",
              "Touch-ups on cabinet finishes previously completed by our team",
            ]}
          />
          <p>Availability and minimum project size depend on the work, location, and schedule.</p>
        </>
      ),
    },
    {
      title: "When a touch-up is not the right repair",
      body: (
        <>
          <p>
            A small spot repair is not always invisible. The surrounding coating may have faded, accumulated wear, or changed
            sheen over time. In those situations, repainting the full wall, ceiling plane, door, or elevation usually gives a
            more uniform result.
          </p>
          <p>We will also recommend repair before paint when we find:</p>
          <Bullets
            items={[
              "Active water intrusion or unresolved leaks",
              <>Rotten wood or failed siding (see <Link href="/blog/wood-rot-repair-cost-houston">wood rot repair cost</Link>)</>,
              "Widespread peeling or adhesion failure",
              "Heavy chalking, mildew, grease, or contamination",
              "Texture damage that must be matched before coating",
            ]}
          />
          <p>Painting over the cause may hide the problem briefly, but it does not correct it.</p>
        </>
      ),
    },
    {
      title: "How small painting jobs are priced",
      body: (
        <>
          <p>
            Small projects are usually priced by the job, not solely by the square foot. The estimate accounts for travel,
            setup, protection, preparation, materials, application, drying time, cleanup, and the likelihood that a touch-up
            will blend.
          </p>
          <p>
            A minimum project charge may apply when the labor and setup are similar to a larger visit. Any minimum will be
            shown in the written estimate before you approve the work.
          </p>
          <p>
            For reference, a typical 12-by-14 room in Houston commonly falls around {P.singleRoom}, depending on the surfaces
            and preparation included (see <Link href="/cost-to-paint-a-room-houston">cost to paint a room</Link>). Doors,
            drywall repairs, detailed trim, high walls, and exterior repairs are evaluated individually.
          </p>
        </>
      ),
    },
    {
      title: "What to send when requesting an estimate",
      body: (
        <>
          <p>Photos can help determine whether an on-site visit is required. Include:</p>
          <Steps
            items={[
              { title: "A wide photo", text: "one wide photo of the room or elevation." },
              { title: "Close-ups", text: "close-ups of damage or repairs." },
              { title: "Dimensions", text: "approximate dimensions." },
              { title: "Surfaces", text: "the surfaces you want painted." },
              { title: "Colors", text: "the existing and desired colors, if known." },
              { title: "Timeline", text: "your preferred timeline." },
            ]}
          />
          <p>A photo review is only preliminary. The written estimate controls the final scope and price.</p>
        </>
      ),
    },
    {
      title: "Insurance and workmanship warranty",
      body: (
        <>
          <p>
            Houston Superior Painting carries {T.liabilityCoverage} in general liability coverage and workers&apos;
            compensation insurance. Proof of current insurance is available on request and is provided after project approval.
          </p>
          <p>
            Qualifying repaint work includes a {T.warrantyYears}-year written workmanship warranty. Touch-ups, temporary
            cosmetic work, substrate failure, active leaks, and other excluded conditions are governed by the written warranty
            and estimate. Review those terms before approving the project.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    { q: "Do you have a minimum job size?", a: "Houston Superior Painting evaluates small jobs, but a minimum project charge may apply. The amount and scope are stated in the written estimate before approval." },
    { q: "Can you touch up nail holes or repaired drywall?", a: "Often, yes. If the existing paint has faded or the sheen cannot be matched, repainting the full wall may be necessary to avoid a visible patch." },
    { q: "Are small jobs covered by the 5-year warranty?", a: "Qualifying work is covered according to the written estimate and warranty. The documents identify the covered workmanship, duration, and exclusions for the specific project." },
    { q: "Can you paint over an active leak or rotten wood?", a: "No coating can correct active water intrusion or decayed material. The underlying problem should be repaired before painting." },
  ],
  limitations: <>Prices are planning ranges; the approved written estimate controls the final scope and price. Last reviewed October 2026.</>,
  related: [
    { label: "Interior painting", href: "/interior-painting-houston-tx" },
    { label: "Drywall repair", href: "/drywall-repair-houston-tx" },
    { label: "Cost to paint a room", href: "/cost-to-paint-a-room-houston" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
  ],
  ctaTitle: "Request a written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
