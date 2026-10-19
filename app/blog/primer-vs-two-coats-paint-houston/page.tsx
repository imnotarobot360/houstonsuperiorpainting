import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Owner brief 2026-10-14 (draft 3), expanded with the owner's 2026-10-19 draft
// (8 primer situations, quick guide table, cost of skipping primer). Kept from
// draft 3: no blanket "primer plus two coats" promise; two finish coats are the
// usual standard, and the estimate names the coating system for each surface.
// Not used from the 10-19 draft (site rules): "no upfront payment" wording, the
// unverified "4.9 / 200+ Google reviews" claim, and a product-specific
// self-priming claim we have not verified.

const D: GuideArticleData = {
  path: "/blog/primer-vs-two-coats-paint-houston",
  title: "Primer vs Two Coats of Paint: Which Do You Really Need?",
  description:
    "Do you need primer or just two coats of paint? A Houston painter explains when primer is a must, when two coats are enough, and what \"paint and primer in one\" means.",
  h1: "Do you need primer or two coats of paint? A Houston painter explains",
  eyebrow: "Paint guide",
  published: "2026-10-14",
  updated: "2026-10-19",
  quickAnswer: (
    <>
      Two coats of paint are usually enough when you repaint a clean, sound, already painted surface in the same or a
      similar color. You need primer when the surface is bare, stained, glossy or patched, or when you make a big color
      change. Primer does not replace finish coats: where it is needed, the usual system is primer on those areas, then
      the finish coats your estimate names (most often two).
    </>
  ),
  sections: [
    {
      title: "Primer and paint do different jobs",
      body: (
        <>
          <p>
            Standing in the paint aisle, it is a fair question, especially when half the cans say &quot;paint and primer
            in one.&quot; We hear it on estimates in Katy, Cypress and Sugar Land. Primer makes paint stick and seal;
            paint gives color and protection. A second coat of paint cannot do primer&apos;s job, and primer cannot do
            paint&apos;s. Primer is built to:
          </p>
          <Bullets
            items={[
              <><strong>Bond</strong> to surfaces paint struggles to grip: glossy trim, bare wood, metal and PVC.</>,
              <><strong>Seal</strong> porous surfaces (new drywall, joint compound, stucco, bare wood) so paint does not soak in unevenly.</>,
              <><strong>Block stains</strong> such as water, smoke, marker and wood tannins so they do not bleed through.</>,
              <><strong>Even out color</strong>, especially going from dark to light or light to bold.</>,
            ]}
          />
          <p>
            Skip it where it is needed and a wall can look blotchy, peel early, or show stains coming back through a few
            weeks later.
          </p>
        </>
      ),
    },
    {
      title: "When two coats of paint are enough",
      body: (
        <>
          <p>You can usually go straight to finish coats when:</p>
          <Bullets
            items={[
              "The surface is already painted and the old paint is sound: no peeling, chalking or flaking.",
              "You are staying with the same or a similar color.",
              "The surface is clean: no grease, mildew or dirt.",
              "There are no stains and no large patches.",
              "The existing finish is not high-gloss.",
            ]}
          />
          <p>
            This is the most common interior repaint we do. Why two coats and not one? Even when one coat looks covered, a
            second gives even color, a consistent sheen and a thicker film that lasts longer. On Houston exteriors, which
            take UV and humidity every day, that thicker film matters. One coat can work when the old paint is sound, the
            color is close and the product covers evenly, but it should never hide poor prep or leave uneven color.
          </p>
        </>
      ),
    },
    {
      title: "When you need primer (don't skip it)",
      body: (
        <Steps
          items={[
            { title: "Bare or new surfaces", text: "new drywall, raw wood, bare stucco and unpainted masonry soak up paint unevenly and cause flashing (dull and shiny patches). New drywall gets a drywall primer before finish coats." },
            { title: "Patches and repairs", text: "every filled nail hole, crack or drywall patch needs a spot prime, or it shows through even after two coats." },
            { title: "Stains", text: "water, smoke, crayon, marker and grease bleed through regular paint and need a stain-blocking primer. Common on Houston ceilings after a roof or AC leak; fix the leak first." },
            { title: "Glossy surfaces", text: "old oil-based trim, glossy doors and slick cabinets need cleaning, a light sand and a bonding primer, or the new paint can peel off in sheets." },
            { title: "Big color changes", text: "dark red to soft white, or builder beige to deep navy: a tinted primer can save extra coats and give truer color." },
            { title: "Exterior wood and trim", text: "bare wood on fascia, trim and siding, especially new boards after rot repair, needs primer to seal out moisture. Cedar and similar woods can bleed brown tannin stains without the right primer." },
            { title: "Stucco and masonry", text: "stucco is porous and alkaline. Fresh stucco needs time to cure, and bare or repaired areas need a masonry primer so paint bonds and wears evenly." },
            { title: "Metal", text: "bare or rusty railings, doors and gutters need a rust-inhibiting metal primer, or the rust comes back through." },
          ]}
        />
      ),
    },
    {
      title: "What about \"paint and primer in one\"?",
      body: (
        <>
          <p>
            &quot;Paint and primer in one&quot; (self-priming paint) is usually a thicker, higher-quality paint with better
            hide and adhesion. Over a sound, previously painted surface it can cover an old color better and sometimes save
            a coat. Some premium exterior lines are self-priming too (see our{" "}
            <Link href="/blog/emerald-vs-duration-paint">Emerald vs Duration</Link> comparison). But it is not a true
            replacement for a dedicated primer. It will not reliably:
          </p>
          <Bullets
            items={[
              "block water stains or tannin bleed,",
              "bond to slick, glossy surfaces,",
              "seal raw drywall or bare stucco evenly, or",
              "stop rust on bare metal.",
            ]}
          />
          <p>Even with a self-priming paint, a professional still spot-primes bare wood, patches and stains.</p>
        </>
      ),
    },
    {
      title: "Primer vs two coats: quick guide",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 font-semibold">Your situation</th>
                <th className="p-3 font-semibold">What you usually need</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Repainting a sound wall, similar color", "Two coats of paint"],
                ["Repainting a sound wall, big color change", "Tinted primer + finish coats (or a premium self-priming paint)"],
                ["New drywall", "Drywall primer + two coats"],
                ["Patched or repaired spots", "Spot prime + two coats"],
                ["Water or smoke stains", "Stain-blocking primer + two coats"],
                ["Glossy trim, doors or cabinets", "Clean, sand, bonding primer + two coats"],
                ["Bare exterior wood or new trim", "Exterior primer + two coats"],
                ["Bare or repaired stucco or masonry", "Masonry primer + two coats"],
                ["Bare or rusty metal", "Metal primer + two coats"],
              ].map(([a, b]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-3">{a}</td>
                  <td className="p-3 text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "Does skipping primer save money?",
      body: (
        <>
          <p>On paper, yes: primer adds materials and labor. In practice, skipping it where it is needed usually costs more:</p>
          <Bullets
            items={[
              "stains bleed through, and you repaint;",
              "paint peels off glossy trim, and it has to be stripped and redone;",
              "patches flash through, and the whole wall needs another coat;",
              "bare exterior wood soaks up Houston moisture, leading to wood rot, repairs and a repaint.",
            ]}
          />
          <p>
            The cheapest paint job is the one you only do once. For full-house numbers, see our guide to the{" "}
            <Link href="/blog/cost-to-paint-2000-sq-ft-house-houston">cost to paint a 2,000 sq ft house in Houston</Link>.
          </p>
        </>
      ),
    },
    {
      title: "How we handle primer at Houston Superior Painting",
      body: (
        <>
          <p>
            We do not prime everything &quot;just because,&quot; and we do not skip it to make a quote look cheaper. On
            every estimate we look at each surface and write down where primer goes, which primer, the finish products and
            the planned coats, so you know what you are paying for. {BUSINESS.paymentPolicy.sentence}
          </p>
          <p>
            Every project comes with a free written estimate, our 5-year written workmanship warranty and $2M general
            liability coverage plus workers&apos; comp. Related services:{" "}
            <Link href="/interior-painting-houston-tx">interior painting</Link>,{" "}
            <Link href="/exterior-painting-houston-tx">exterior painting</Link>,{" "}
            <Link href="/cabinet-refinishing-houston-tx">cabinet painting</Link>,{" "}
            <Link href="/wood-rot-repair-houston-tx">wood rot and siding repair</Link> and{" "}
            <Link href="/stucco-painting-houston-tx">stucco painting and repair</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "Can I use two coats of paint instead of primer?",
      a: "Only on clean, sound, previously painted surfaces in a similar color. On bare surfaces, stains, glossy finishes, patches or big color changes, two coats of paint won't do primer's job.",
    },
    {
      q: "Do I need primer on already painted walls?",
      a: "Usually not, if the existing paint is in good shape and you're using a similar color. You'll still want to spot-prime patches and any stains.",
    },
    {
      q: "Is paint and primer in one as good as using primer?",
      a: "It works well over previously painted surfaces and can improve coverage, but it doesn't replace a dedicated primer for stains, glossy surfaces, bare drywall, bare wood or metal.",
    },
    {
      q: "Do I need primer on new drywall?",
      a: "Yes. New drywall and joint compound absorb paint unevenly, so they need a drywall primer before the finish coats.",
    },
    {
      q: "How many coats of paint do I need after primer?",
      a: "Two finish coats is the usual standard for even color, a consistent sheen and lasting protection. The right number depends on the products and colors, so your written estimate should name it for each surface.",
    },
    {
      q: "Do you need primer for exterior painting in Houston?",
      a: "On sound, previously painted siding, often only spot priming is needed. Bare wood, new trim, repaired stucco and rusty metal all need primer to stand up to Houston's humidity and heat.",
    },
    {
      q: "Can latex paint go over old oil-based trim?",
      a: "Not directly. The old finish should be cleaned and scuffed, and a compatible bonding primer applied first; otherwise the new paint can peel.",
    },
    {
      q: "Is primer included in a painting estimate?",
      a: `It should be stated, not assumed. ${BUSINESS.name}'s written estimate lists the prep, primer, products and coats before you approve the project.`,
    },
  ],
  limitations: (
    <>
      General guidance. The right primer and number of coats depend on the surface and the products, and the
      manufacturer&apos;s instructions control. Your written estimate names the coating system for your project.
    </>
  ),
  related: [
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Interior painting process", href: "/interior-painting-process-houston" },
    { label: "Drywall repair before painting", href: "/blog/drywall-repair-before-painting" },
    { label: "Emerald vs Duration paint", href: "/blog/emerald-vs-duration-paint" },
    { label: "Interior project in Richmond", href: "/projects/richmond-interior-arches-repaint" },
  ],
  ctaTitle: "Get My Free Estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
