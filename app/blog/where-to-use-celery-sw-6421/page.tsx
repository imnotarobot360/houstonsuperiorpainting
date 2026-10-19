import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-22.
// Celery facts as in the main Celery article (SW color page, checked
// 2026-10-15: LRV about 71, listed for interior use). Sheen advice is general.

const D: GuideArticleData = {
  path: "/blog/where-to-use-celery-sw-6421",
  title: "Where to Use Celery SW 6421: Cabinets, Baths, Bedrooms",
  description:
    "Room by room: where Sherwin-Williams' 2027 Color of the Year works best, which sheen to use, and where to be careful in Houston homes.",
  h1: "Where to use Celery SW 6421 in a Houston home",
  eyebrow: "Color guide",
  published: "2026-10-22",
  updated: "2026-10-22",
  quickAnswer: (
    <>
      Celery SW 6421 works best where you want color without darkness: kitchens and islands, bathrooms and laundry
      rooms, bedrooms and sunrooms. It is a light color (LRV about 71), so it keeps rooms bright. Be more careful next to
      orange-toned wood, in rooms with very cool lighting, and outside, where Sherwin-Williams lists it as an interior
      color and full Houston sun makes it read lighter and yellower.
    </>
  ),
  sections: [
    {
      title: "Room by room",
      body: (
        <Steps
          items={[
            {
              title: "Kitchen cabinets and islands",
              text: `one of the strongest uses. Celery on an island or full cabinet run feels fresh and lighter than the darker greens popular on cabinets. Use a durable cabinet-grade finish such as ${BUSINESS.cabinetFinish.products[0]} or ${BUSINESS.cabinetFinish.products[1]}, usually in satin, and allow about ${BUSINESS.cabinetFinish.cureDays} of gentle use while it cures.`,
            },
            {
              title: "Bathrooms and laundry rooms",
              text: "keeps small rooms light while adding color. Use a scrubbable, moisture-resistant product in satin or a durable eggshell, and run the exhaust fan; flat paint in a bathroom is a common mistake.",
            },
            {
              title: "Bedrooms",
              text: "calm without going gray. A matte or eggshell finish keeps it soft; pair it with a warm white on the trim.",
            },
            {
              title: "Living and dining rooms",
              text: "works well in rooms with good natural light. In a north-facing room it reads greener and cooler, so sample it there before committing to a whole open-plan space.",
            },
            {
              title: "Sunrooms and breakfast nooks",
              text: "a natural fit: the green connects to the garden view. In strong afternoon sun its yellow undertone will show more.",
            },
            {
              title: "Front doors, shutters and porch ceilings",
              text: "Sherwin-Williams lists Celery as an interior color on its color page, so ask whether it can be matched in the exterior product you choose. Small exterior accents are a lower-risk test than all the siding.",
            },
          ]}
        />
      ),
    },
    {
      title: "Where to be careful",
      body: (
        <ul>
          <li>
            <strong>Next to orange- or red-toned wood:</strong> the yellow undertone can make the room feel warmer than you
            expect. Sample beside the floor or cabinets.
          </li>
          <li>
            <strong>With cool white trim or tile:</strong> stark blue-whites make Celery look more yellow. See{" "}
            <Link href="/blog/colors-that-go-with-celery-sw-6421">colors that go with Celery</Link>.
          </li>
          <li>
            <strong>Whole-house exteriors:</strong> check your HOA&apos;s approved colors and test in full sun first.
          </li>
        </ul>
      ),
    },
    {
      title: "Which sheen to use",
      body: (
        <p>
          Matte or eggshell for living areas and bedrooms, satin or a durable eggshell for bathrooms and laundry rooms, and
          satin for cabinets and trim. Higher sheen makes a color look a little lighter and shows surface flaws more. See{" "}
          <Link href="/blog/paint-finishes-matte-eggshell-satin-semi-gloss">paint finishes explained</Link>.
        </p>
      ),
    },
    {
      title: "Try it before you commit",
      body: (
        <p>
          Put a large sample on two walls that face different directions and look at it morning, afternoon and night. Try
          the idea on a photo with our <Link href="/color-visualizer">color visualizer</Link>, then confirm with a physical
          sample or a <Link href="/paint-color-consultation-houston">free color consultation</Link>. Read the full{" "}
          <Link href="/blog/sherwin-williams-color-of-the-year-2027-celery-houston">Celery SW 6421 guide</Link> and{" "}
          <Link href="/blog/sherwin-williams-rewild-2027-colors-houston">Sherwin-Williams Rewild 2027</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is Celery a good kitchen cabinet color?",
      a: "Yes, it is one of its best uses: fresh and lighter than darker cabinet greens. Use a durable cabinet-grade finish in satin and test it next to your counters and floor.",
    },
    {
      q: "Can I use Celery in a bathroom?",
      a: "Yes. Use a scrubbable, moisture-resistant paint in satin or a durable eggshell, and ventilate the room.",
    },
    {
      q: "Can Celery be used on the outside of a house?",
      a: "Sherwin-Williams lists it as an interior color on its color page, so ask whether it can be matched in the exterior product you choose. Small accents like a front door are an easier test than all the siding, and HOA approval may be required.",
    },
    {
      q: "What sheen should I use with Celery?",
      a: "Matte or eggshell for walls in living areas and bedrooms, satin or durable eggshell in bathrooms and laundry rooms, and satin for cabinets and trim.",
    },
  ],
  limitations: (
    <>
      General guidance. Color facts are from Sherwin-Williams&apos; published pages, checked October 2026. On-screen colors
      are approximate; confirm with physical samples in your own light. {BUSINESS.name} is not sponsored by
      Sherwin-Williams.
    </>
  ),
  related: [
    { label: "Celery SW 6421 in Houston homes", href: "/blog/sherwin-williams-color-of-the-year-2027-celery-houston" },
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
