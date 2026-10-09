import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/exterior-paint-colors-pearland-tx"

// Real job photo: our Pearland exterior (see /projects/pearland-exterior-hardie-repaint).
const IMAGE = "/images/projects/pearland-exterior-hardie/01-side-elevation.jpg"
const IMAGE_ALT = "Pearland home with sage-green lap siding, a shingle-siding accent panel, cream window trim and cream downspouts"

export const metadata: Metadata = {
  title: "Best Exterior Paint Colors in Pearland TX (2026)",
  description:
    "Exterior paint colors for Pearland, Shadow Creek Ranch, and Silverlake — HOA chips, Hardie, and 2026 cost.",
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
    title: "Best Exterior Paint Colors in Pearland TX (2026)",
    description:
      "Exterior paint colors for Pearland, Shadow Creek Ranch, and Silverlake — HOA chips, Hardie, and 2026 cost.",
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "What colors are popular in Shadow Creek Ranch?",
    answer:
      "Warm greige and warm white. Confirm the current architectural list — older gray approvals are not a free pass.",
  },
  {
    question: "How long does Pearland exterior paint last?",
    answer: "7–10 years on Hardie with a 100% acrylic and closed joints.",
  },
]

const relatedPosts = [
  {
    title: "HOA Exterior Paint Rules in Houston Suburbs (2026 Guide)",
    href: "/blog/hoa-exterior-paint-rules-houston-suburbs",
    excerpt: "How HOA color approval works in Houston-area communities, and what to submit before you paint.",
    image: "/images/blog/hoa-paint-rules-houston.png",
  },
  {
    title: "Best Exterior Colors for Homes in The Woodlands TX",
    href: "/blog/best-exterior-colors-homes-the-woodlands-tx",
    excerpt: "Why a chip looks different across a whole house under Texas sun, and the colors that hold up.",
    image: "/images/blog/best-exterior-colors-woodlands.jpg",
  },
  {
    title: "How Long Does Exterior Paint Last in Houston?",
    href: "/blog/how-long-does-exterior-paint-last-houston",
    excerpt: "What Houston sun, humidity, and storms do to exterior paint, and how to make it last.",
    image: "/images/blog/exterior-paint-durability-houston.jpg",
  },
]

export default function ExteriorPaintColorsPearlandTxPage() {
  return (
    <BlogPostTemplate
      slug="exterior-paint-colors-pearland-tx"
      title="Best Exterior Paint Colors in Pearland TX (2026)"
      excerpt="Exterior paint colors for Pearland, Shadow Creek Ranch, and Silverlake — HOA chips, Hardie, and 2026 cost."
      author="Juan Serra"
      authorRole="Owner, Houston Superior Painting"
      publishDate="October 7, 2026"
      readTime="7 min read"
      category="Color Guide"
      featuredImage={IMAGE}
      featuredImageAlt={IMAGE_ALT}
      faqs={faqs}
      relatedPosts={relatedPosts}
    >
      <h2>Quick Answer</h2>
      <p>
        Pearland exteriors in 2026 are warm greige and warm white on Hardie, especially in Shadow Creek Ranch and
        Silverlake. Cool gray is what those HOAs approved a decade ago and what is fading now. Submit the new chip. A
        two-story runs about <strong>{PRICES_2026.exterior2500TwoStory}</strong>. Call{" "}
        <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a>.
      </p>

      <p>
        <Link href="/painters-pearland-tx">Pearland</Link> south of the Beltway is the same Hardie stock as{" "}
        <Link href="/painters-katy-tx">Katy</Link>, with a different board. Shadow Creek Ranch and Silverlake both
        review color (more on how that works in our{" "}
        <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA paint rules guide</Link>). The winning chips are
        warm, not the blue-gray still on half the street.
      </p>

      <h2>Colors</h2>
      <ul>
        <li>
          <strong>Body:</strong> warm greige or a light warm white
        </li>
        <li>
          <strong>Trim:</strong> a step lighter than the body
        </li>
        <li>
          <strong>Door:</strong> black or navy if the palette allows an accent
        </li>
        <li>
          <strong>Brick:</strong> leave it unless the section is already painted
        </li>
      </ul>
      <p>
        West walls chalk first, same as everywhere else in unshaded Brazoria-side sun. Recaulk the butt joints on the
        repaint or the new color will open at the same lines.
      </p>
      <p>
        See a real Pearland example: our{" "}
        <Link href="/projects/pearland-exterior-hardie-repaint">sage-green Hardie exterior with cream trim</Link>.
      </p>

      <h2>Cost</h2>
      <p>
        <strong>{PRICES_2026.exteriorPerSqFt} per sq ft</strong> on Hardie. A one-story around 2,000 sq ft runs about{" "}
        <strong>{PRICES_2026.exterior2000OneStory}</strong>. Two-story <strong>{PRICES_2026.exterior2500TwoStory}</strong>.
        HOA delay is the thing that moves the start date, not the price. See the full{" "}
        <Link href="/exterior-house-painting-houston-cost-guide">exterior painting cost guide</Link> for other sizes.
      </p>

      <hr />
      <p>
        Houston Superior Painting paints Pearland, Shadow Creek Ranch, and Silverlake exteriors.{" "}
        <Link href="/painting-estimate-houston">Get a free estimate</Link> or call{" "}
        <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
