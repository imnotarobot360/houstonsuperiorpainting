import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/exterior-paint-colors-katy-tx"

// TODO(juan): replace featured image with a real job photo
const IMAGE = "/images/blog/hoa-paint-rules-houston.png"
const IMAGE_ALT = "Row of two-story brick and siding homes with neutral trim on a sunny suburban Texas street"

export const metadata: Metadata = {
  title: "Best Exterior Paint Colors in Katy TX (2026)",
  description:
    "Exterior colors for Katy, Cinco Ranch, and Cross Creek Ranch homes in 2026 — what holds up in open sun, and what HOAs approve.",
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
    title: "Best Exterior Paint Colors in Katy TX (2026)",
    description:
      "Exterior colors for Katy, Cinco Ranch, and Cross Creek Ranch homes in 2026 — what holds up in open sun, and what HOAs approve.",
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "What is the best exterior color for a Katy house?",
    answer: "A warm greige body and a warm white trim. It holds up in open sun better than cool gray.",
  },
  {
    question: "How often do Katy exteriors need paint?",
    answer: "7–10 years on Hardie if the joints were recaulked. West elevations go first.",
  },
]

const relatedPosts = [
  {
    title: "HOA Exterior Paint Rules in Katy, Sugar Land & The Woodlands TX",
    href: "/blog/hoa-exterior-paint-rules-houston-suburbs",
    excerpt: "What Houston-area HOAs want before you repaint, and how to get the color approved.",
    image: "/images/blog/hoa-paint-rules-houston.png",
  },
  {
    title: "How Much Does Exterior Painting Cost in Katy TX? 2026 Price Guide",
    href: "/blog/exterior-painting-cost-katy-tx",
    excerpt: "2026 exterior painting prices for Katy homes and what moves the number.",
    image: "/images/blog/exterior-painting-cost-katy-tx.png",
  },
  {
    title: "How Houston Weather Damages Exterior Paint",
    href: "/blog/how-houston-weather-damages-exterior-paint",
    excerpt: "How heat, humidity, and storms break down exterior paint — and how to fight back.",
    image: "/images/blog/houston-weather-paint-damage.png",
  },
]

export default function ExteriorPaintColorsKatyTxPage() {
  return (
    <BlogPostTemplate
      slug="exterior-paint-colors-katy-tx"
      title="Best Exterior Paint Colors in Katy TX (2026)"
      excerpt="Exterior colors for Katy, Cinco Ranch, and Cross Creek Ranch homes in 2026 — what holds up in open sun, and what HOAs approve."
      author="Juan Serra"
      authorRole="Owner, Houston Superior Painting"
      publishDate="October 7, 2026"
      readTime="8 min read"
      category="Color Guide"
      featuredImage={IMAGE}
      featuredImageAlt={IMAGE_ALT}
      faqs={faqs}
      relatedPosts={relatedPosts}
    >
      <h2>Quick Answer</h2>
      <p>
        Katy exteriors in 2026 are warm greige and warm white on Hardie, with a darker door. Open sun in{" "}
        <Link href="/painters-cinco-ranch-tx">Cinco Ranch</Link> and Cross Creek Ranch fades cool gray and blue-white
        fastest. Get the HOA chip approved first. A typical 2,500 sq ft two-story exterior runs about{" "}
        <strong>{PRICES_2026.exterior2500TwoStory}</strong>. Call <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>

      <p>
        Most of Katy west of the Grand Parkway is Hardie, two-story, and unshaded. Color choice is a fade problem, not a
        style problem.
      </p>

      <h2>Colors that hold</h2>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Where it works</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Warm greige</strong>
            </td>
            <td>Cinco Ranch, Cross Creek, Seven Meadows</td>
            <td>Hides joint lines better than white</td>
          </tr>
          <tr>
            <td>
              <strong>Alabaster-style warm white</strong>
            </td>
            <td>Body or trim</td>
            <td>Better than a cool gallery white on a west wall</td>
          </tr>
          <tr>
            <td>
              <strong>Soft sage</strong>
            </td>
            <td>Wooded pockets, not the open prairie streets</td>
            <td>Reads gray-green, not mint</td>
          </tr>
          <tr>
            <td>
              <strong>Navy or black door</strong>
            </td>
            <td>Accent only</td>
            <td>Easy HOA yes if the body is in palette</td>
          </tr>
        </tbody>
      </table>
      <p>
        Cool gray that went up in 2016 is the repaint we are covering most. It chalks on the west elevation first.
      </p>

      <h2>HOA</h2>
      <p>
        Cinco Ranch and Cross Creek Ranch want the fan-deck chip. Paint the door the neighbor painted only if that code is
        still on the current list. More on the approval process in our{" "}
        <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA exterior paint rules guide</Link>.
      </p>

      <h2>Cost</h2>
      <p>
        Same Hardie band as the rest of our{" "}
        <Link href="/exterior-house-painting-houston-cost-guide">Houston exterior cost table</Link>:{" "}
        <strong>{PRICES_2026.exteriorPerSqFt} per sq ft</strong> of floor area, about{" "}
        <strong>{PRICES_2026.exterior2000OneStory}</strong> for a 2,000 sq ft one-story, and about{" "}
        <strong>{PRICES_2026.exterior2500TwoStory}</strong> for a 2,500 sq ft two-story. Sun-faded west walls sometimes
        need an extra prime on bare chalk. That is a site call, not an automatic upcharge.
      </p>

      <hr />
      <p>
        Houston Superior Painting paints <Link href="/painters-katy-tx">Katy</Link> exteriors. See our{" "}
        <Link href="/exterior-painting-katy-cinco-ranch">Katy and Cinco Ranch exterior painting</Link> page, or{" "}
        <Link href="/painting-estimate-houston">get a free estimate</Link> — call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
