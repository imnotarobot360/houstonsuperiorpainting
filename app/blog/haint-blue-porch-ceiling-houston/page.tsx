import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-02.
// Folklore stated as folklore; the insect claim is presented as unproven.
// Colors from data/sw-colors.json; swatch image uses SW's published values.

const D: GuideArticleData = {
  path: "/blog/haint-blue-porch-ceiling-houston",
  title: "Haint Blue Porch Ceilings in Houston",
  description:
    "Where the Southern haint blue tradition comes from, the pale blues people use, and the right exterior product and prep for a Houston porch ceiling.",
  h1: "Haint blue porch ceilings in Houston",
  eyebrow: "Color guide",
  published: "2027-01-02",
  updated: "2027-01-02",
  quickAnswer: (
    <>
      &quot;Haint blue&quot; is a pale blue or blue-green painted on porch ceilings, a tradition from the American South.
      Folklore says it kept spirits (&quot;haints&quot;) away; today people choose it because it looks like sky, feels cool
      and brightens a shaded porch. You&apos;ll also hear that it keeps wasps and mosquitoes away, but there&apos;s no solid
      evidence for that. Pick a soft, light blue, sample it in porch shade, and use an exterior product suited to humid,
      covered ceilings.
    </>
  ),
  sections: [
    {
      title: "Blues to sample",
      body: (
        <>
          <figure className="not-prose my-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/blog/art/haint-blue-porch-ceiling-houston.png"
              alt="Swatches of pale blue porch ceiling colors"
              width={1200}
              height={675}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Sherwin-Williams&apos; published on-screen values. Porch shade makes these read deeper; sample outside.
            </figcaption>
          </figure>
          <Bullets
            items={[
              <><strong>Classic sky blue:</strong> Upward SW 6239 or Sleepy Blue SW 6225.</>,
              <><strong>Blue-green:</strong> Tradewind SW 6218 or Rainwashed SW 6211, softer with green, cream or brick houses.</>,
              <><strong>Watery aqua:</strong> Watery SW 6478, brighter and more coastal.</>,
            ]}
          />
        </>
      ),
    },
    {
      title: "How a porch ceiling is painted",
      body: (
        <Steps
          items={[
            { title: "Clean", text: "mildew, cobwebs and dirt; covered porches stay damp in Houston." },
            { title: "Repair", text: "loose boards, stains from roof leaks and failed caulk at the edges." },
            { title: "Prime", text: "bare wood and stains, with a stain-blocking primer where needed." },
            { title: "Two coats", text: "of exterior paint with mildew resistance, usually in a low sheen." },
          ]}
        />
      ),
    },
    {
      title: "Pairing it with the house",
      body: (
        <p>
          Haint blue looks best with white or cream trim and works with most body colors, from white farmhouses to red
          brick. Keep the blue light: deep blues make a porch feel lower and darker. See{" "}
          <Link href="/blog/trim-door-colors-red-brick-house-houston">colors for red brick</Link>,{" "}
          <Link href="/blog/soffit-fascia-painting-houston">soffit and fascia painting</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is haint blue?",
      a: "A pale blue or blue-green traditionally painted on Southern porch ceilings. Folklore says it kept spirits away; today it's chosen for its sky-like look.",
    },
    {
      q: "Does a blue porch ceiling keep bugs away?",
      a: "It's a popular belief, but there's no solid evidence for it. Choose it for the look.",
    },
    {
      q: "What paint should I use on a porch ceiling?",
      a: "An exterior paint with mildew resistance, usually in a low sheen, over clean, repaired and primed boards.",
    },
    {
      q: "What blue is used for porch ceilings?",
      a: "Soft sky blues and blue-greens such as Upward SW 6239, Sleepy Blue SW 6225, Tradewind SW 6218 or Rainwashed SW 6211.",
    },
  ],
  limitations: (
    <>
      Color names and codes are Sherwin-Williams&apos;; on-screen colors are approximate. {BUSINESS.name} is not affiliated
      with or sponsored by Sherwin-Williams.
    </>
  ),
  related: [
    { label: "Soffit and fascia painting", href: "/blog/soffit-fascia-painting-houston" },
    { label: "Ceiling paint: white vs. color", href: "/blog/ceiling-paint-color-white-vs-color" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
