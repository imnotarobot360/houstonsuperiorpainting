import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/painting-brick-houston"

const DESCRIPTION =
  "When brick paint makes sense in Houston, when limewash is the better finish, and when to leave the brick alone. 2026 cost and moisture rules."

// Real job photo: our West University painted-brick exterior (see /projects/west-university-painted-brick-exterior).
const IMAGE = "/images/projects/west-university-painted-brick/01-front-and-garage.jpg"
const IMAGE_ALT =
  "Two-story West University home with white painted brick, an arched entry and a dark garage door under oak branches"

export const metadata: Metadata = {
  title: "Painting Brick in Houston TX | When Not to Paint Brick",
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
    title: "Painting Brick in Houston: When to Paint, When to Limewash, and When to Leave It",
    description: DESCRIPTION,
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "Is it a bad idea to paint brick in Houston?",
    answer:
      "It is a bad idea on unpainted, moisture-prone, or historic brick. It is a normal repaint if the brick has been painted for years.",
  },
  {
    question: "Does paint trap moisture in Houston humidity?",
    answer:
      "A cheap film can. A masonry primer and a breathable acrylic, on a dry wall, is the spec we use. We do not coat a wet or efflorescing wall.",
  },
  {
    question: "Can you go back to bare brick later?",
    answer: "Not cleanly, once it is painted. Limewash is the finish to choose if you want that option.",
  },
]

const relatedPosts = [
  {
    title: "Limewash vs German Smear for Houston Brick Homes",
    href: "/blog/limewash-vs-german-smear-houston",
    excerpt: "Two very different brick finishes, and which one holds up in Houston humidity.",
    image: "/images/blog/limewash-vs-german-smear.jpg",
  },
  {
    title: "HOA Exterior Paint Rules in Houston Suburbs (2026 Guide)",
    href: "/blog/hoa-exterior-paint-rules-houston-suburbs",
    excerpt: "What Katy, Sugar Land, and The Woodlands HOAs actually require before you repaint.",
    image: "/images/blog/hoa-paint-rules-houston.png",
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

export default function PaintingBrickHoustonPage() {
  return (
    <BlogPostTemplate
      slug="painting-brick-houston"
      title="Painting Brick in Houston: When to Paint, When to Limewash, and When to Leave It"
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
        Paint brick in Houston only if the brick is already painted, or if a masonry primer and a breathable acrylic are
        part of the spec. Do not paint soft, unpainted historic brick or a wall that is already trapping moisture.{" "}
        <Link href="/limewash-brick-painting-houston-tx">Limewash</Link> is the reversible option at{" "}
        <strong>{PRICES_2026.limewashPerSqFt} per sq ft</strong> of brick face. Painted brick runs about{" "}
        <strong>{PRICES_2026.paintedBrickPerSqFt} per sq ft</strong> of paintable surface. Call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>

      <p>
        Brick on Houston houses from the 1960s–1980s is often painted already. Newer brick in Master Planned communities
        is usually a design choice the HOA will not let you cover. Those are different jobs. Treating them the same is
        how paint peels in sheets off a west wall in year three.
      </p>

      <h2>Three honest options</h2>
      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-muted">
            <th className={th}>Option</th>
            <th className={th}>Look</th>
            <th className={th}>Reversible</th>
            <th className={th}>2026 cost</th>
            <th className={th}>Use it when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={td}>
              <strong>Leave it</strong>
            </td>
            <td className={td}>Original brick</td>
            <td className={td}>—</td>
            <td className={td}>Nothing</td>
            <td className={td}>Brick is sound, color is fine, HOA wants brick</td>
          </tr>
          <tr>
            <td className={td}>
              <strong>Limewash</strong>
            </td>
            <td className={td}>Soft, brick still reads</td>
            <td className={td}>Yes, can be removed</td>
            <td className={td}>{PRICES_2026.limewashPerSqFt} / sq ft of brick</td>
            <td className={td}>You want a European fade and an exit ramp</td>
          </tr>
          <tr>
            <td className={td}>
              <strong>Paint</strong>
            </td>
            <td className={td}>Solid, modern</td>
            <td className={td}>Effectively no</td>
            <td className={td}>{PRICES_2026.paintedBrickPerSqFt} / sq ft</td>
            <td className={td}>Brick is already painted, or the owner accepts a permanent film</td>
          </tr>
        </tbody>
      </table>
      <p>
        German smear is a third look — mortar smeared, permanent, rustic. It is not paint. See our{" "}
        <Link href="/blog/limewash-vs-german-smear-houston">limewash vs German smear guide</Link> before choosing it in
        this humidity.
      </p>

      <h2>When not to paint brick</h2>
      <ul>
        <li>The wall wicks, shows efflorescence, or has a failed vapor path. Paint will blister. Fix water first.</li>
        <li>The brick is soft or the mortar is failing. Coating it hides the repair you actually need.</li>
        <li>
          The HOA deed restriction says unpainted masonry. <Link href="/painters-cinco-ranch-tx">Cinco Ranch</Link>,
          some <Link href="/painters-sugar-land-tx">Sugar Land</Link> sections, and older{" "}
          <Link href="/painters-memorial-tx">Memorial</Link> streets still enforce this. (More in our{" "}
          <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA paint rules guide</Link>.)
        </li>
        <li>
          You might sell to a buyer who wants brick back. Paint does not come off cleanly. Limewash does.
        </li>
      </ul>

      <h2>If the brick is already painted</h2>
      <p>
        This is the normal Houston repaint. Loose film gets scraped. Chalk gets cleaned. Bare brick gets a masonry
        primer — not a wood primer. Two coats of 100% acrylic. Elastomeric only where the wall is true masonry
        stucco-like block and the product is made for it, not as a default on a brick veneer house.
      </p>
      <p>
        We do not pressure-wash painted brick at a distance that drives water through failed caulk at the windows.{" "}
        <Link href="/soft-washing-houston-tx">Soft wash</Link>, then dry.
      </p>
      <p>
        See a finished example: our{" "}
        <Link href="/projects/west-university-painted-brick-exterior">painted brick exterior in West University</Link>.
      </p>

      <h2>Cost</h2>
      <p>
        Painted brick runs about <strong>{PRICES_2026.paintedBrickPerSqFt} per sq ft</strong> of paintable surface,
        because masonry drinks the first coat. A full brick ranch is often{" "}
        <strong>{PRICES_2026.paintedBrickRanch}</strong> depending on height and how much film is loose. Limewash is
        priced by brick face, not by living area, and a 2,500 sq ft house often lands{" "}
        <strong>{PRICES_2026.limewashHome2500}</strong>. For the rest of the house, see our{" "}
        <Link href="/exterior-house-painting-houston-cost-guide">exterior painting cost guide</Link>.
      </p>

      <p>
        Houston Superior Painting paints and limewashes brick across <Link href="/painters-houston-tx">Houston</Link>,{" "}
        <Link href="/painters-katy-tx">Katy</Link>, and Sugar Land as part of our{" "}
        <Link href="/exterior-painting-houston-tx">exterior painting</Link> work.{" "}
        <Link href="/painting-estimate-houston">Get a free estimate</Link> or call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
