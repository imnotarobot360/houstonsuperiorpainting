import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-01.
// Only the brick surround and face are painted; firebox interiors need
// high-heat products and are out of scope here.

const D: GuideArticleData = {
  path: "/blog/painting-brick-fireplace-houston",
  title: "Painting a Brick Fireplace: Paint, Limewash or Leave It?",
  description:
    "Paint, limewash and German smear on an interior brick fireplace: how each looks, what heat it can take, cleaning soot first, and how hard each is to undo.",
  h1: "Painting a brick fireplace: paint, limewash or leave it?",
  eyebrow: "Interior guide",
  published: "2026-12-01",
  updated: "2026-12-01",
  quickAnswer: (
    <>
      A dated red or orange brick fireplace can be painted, limewashed or German-smeared. Paint gives the most even, modern
      look and covers the brick completely. Limewash soaks into the brick and lets its texture and some color show, and it
      can be partly washed back while fresh. German smear adds mortar over the brick for an old-world look and is the most
      permanent. Clean soot first, use breathable masonry products on the face and surround, and keep standard paint off
      the inside of the firebox.
    </>
  ),
  sections: [
    {
      title: "The three options",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-3">Finish</th>
                <th className="p-3">Look</th>
                <th className="p-3">Reversibility</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Paint", "Solid, even color; modern; hides brick color completely", "Permanent without stripping"],
                ["Limewash", "Soft, chalky, mottled; brick texture and some color show through", "Can be partly washed back while fresh; wears gradually over years"],
                ["German smear", "Mortar partly covering brick; rustic, old-world", "Effectively permanent"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-t border-border">
                  <td className="p-3 font-medium">{a}</td>
                  <td className="p-3 text-muted-foreground">{b}</td>
                  <td className="p-3 text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "Heat and the firebox",
      body: (
        <Bullets
          items={[
            "The brick face, surround and hearth of most fireplaces get warm but not hot enough to harm a quality masonry paint or limewash.",
            "The inside of the firebox gets far hotter. Standard paint there will blister and burn; it needs a high-heat product or is left alone.",
            "A gas insert or a fireplace used often can heat the brick right around the opening more; ask about it during the estimate.",
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Protect the room", text: "floors, mantel, built-ins and the hearth are covered; brick dust and soot travel." },
            { title: "Clean the brick", text: "soot and smoke residue are removed, or they will stain through." },
            { title: "Repair mortar", text: "loose or missing mortar is fixed so the finish looks even." },
            { title: "Prime if painting", text: "a masonry primer evens out porous brick; limewash goes on bare, damp brick." },
            { title: "Apply the finish", text: "paint in two coats; limewash in layers, adjusted while wet for the look you approved." },
          ]}
        />
      ),
    },
    {
      title: "Choosing a color",
      body: (
        <p>
          Soft warm whites and greige are the most common choice, because they lighten the room and suit wood mantels. Deep
          colors, charcoal or black, make the fireplace the focal point. Look at a sample in the evening too, under the lamps
          you actually use. See <Link href="/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston">popular whites compared</Link>{" "}
          and <Link href="/blog/limewash-vs-german-smear-houston">limewash vs. German smear</Link>.
        </p>
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          A fireplace is a small area, so the price is set mostly by cleaning, mortar repair and the finish you choose. For
          scale, painted brick runs about {P.paintedBrickPerSqFt} per square foot and limewash about {P.limewashPerSqFt} per
          square foot as 2026 planning ranges, but a single fireplace has a minimum for setup. Your written estimate gives the
          price. See <Link href="/limewash-brick-painting-houston-tx">limewash and brick painting</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is it a good idea to paint a brick fireplace?",
      a: "It is a common, effective update for dated brick. Choose it if you won't want natural brick back, because removing paint from brick is hard.",
    },
    {
      q: "Is limewash or paint better for a fireplace?",
      a: "Limewash keeps the brick's texture and some color and wears gracefully; paint gives a solid, even, modern look. Both work on the face and surround.",
    },
    {
      q: "Can you paint inside the firebox?",
      a: "Not with regular paint. The inside of the firebox needs a high-heat product, or is left unpainted.",
    },
    {
      q: "Do you have to clean a fireplace before painting?",
      a: "Yes. Soot and smoke residue stain through paint and limewash and keep them from bonding.",
    },
  ],
  limitations: (
    <>
      General guidance for the brick face, surround and hearth. Product heat ratings and manufacturer instructions control;
      firebox interiors and chimney repairs are separate work.
    </>
  ),
  related: [
    { label: "Limewash vs. German smear", href: "/blog/limewash-vs-german-smear-houston" },
    { label: "Painting brick in Houston", href: "/blog/painting-brick-houston" },
    { label: "Limewash and brick painting", href: "/limewash-brick-painting-houston-tx" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written fireplace painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
