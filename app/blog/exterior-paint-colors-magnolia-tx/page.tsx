import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/exterior-paint-colors-magnolia-tx"

// Real job photo: our Magnolia exterior (see /projects/magnolia-exterior-siding-repaint).
const IMAGE = "/images/projects/magnolia-exterior-siding/01-front-and-porch.jpg"
const IMAGE_ALT = "Two-story Magnolia home with green lap siding, yellow trim, a turret roof and a wraparound porch among pine trees"

export const metadata: Metadata = {
  title: "Best Exterior Paint Colors in Magnolia TX (2026)",
  description:
    "Exterior colors for Magnolia TX homes — pine shade, mildew on north walls, Hardie and wood mix, and 2026 paint cost.",
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
    title: "Best Exterior Paint Colors in Magnolia TX (2026)",
    description:
      "Exterior colors for Magnolia TX homes — pine shade, mildew on north walls, Hardie and wood mix, and 2026 paint cost.",
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "Why does the north side of my Magnolia house turn green?",
    answer:
      "Shade plus humidity. Soft wash before every repaint, and a paint with mildew resistance. Color will not fix it.",
  },
  {
    question: "Can you stain a Magnolia porch instead of painting it?",
    answer: "Yes, if the wood is sound. Paint is for wood that is already painted or for fiber cement.",
  },
]

const relatedPosts = [
  {
    title: "Best Exterior Colors for Homes in The Woodlands TX",
    href: "/blog/best-exterior-colors-homes-the-woodlands-tx",
    excerpt: "Why a chip looks different across a whole house under Texas sun, and the colors that hold up.",
    image: "/images/blog/best-exterior-colors-woodlands.jpg",
  },
  {
    title: "How Houston Weather Damages Exterior Paint",
    href: "/blog/how-houston-weather-damages-exterior-paint",
    excerpt: "How heat, humidity, and storms break down exterior paint — and how to fight back.",
    image: "/images/blog/houston-weather-paint-damage.png",
  },
  {
    title: "How Long Does Exterior Paint Last in Houston?",
    href: "/blog/how-long-does-exterior-paint-last-houston",
    excerpt: "What Houston sun, humidity, and storms do to exterior paint, and how to make it last.",
    image: "/images/blog/exterior-paint-durability-houston.jpg",
  },
]

export default function ExteriorPaintColorsMagnoliaTxPage() {
  return (
    <BlogPostTemplate
      slug="exterior-paint-colors-magnolia-tx"
      title="Best Exterior Paint Colors in Magnolia TX (2026)"
      excerpt="Exterior colors for Magnolia TX homes — pine shade, mildew on north walls, Hardie and wood mix, and 2026 paint cost."
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
        Magnolia exteriors need a color that works in pine shade and a paint film that resists mildew on the north
        wall. Soft sage, warm greige, and warm white are the 2026 picks. Budget a{" "}
        <Link href="/soft-washing-houston-tx">soft wash</Link> into the repaint. Most houses land somewhere in the{" "}
        <strong>{PRICES_2026.exteriorPerHome}</strong> range we see across Greater Houston, depending on stories and how
        much wood trim is soft. Call <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a>.
      </p>

      <p>
        <Link href="/painters-magnolia-tx">Magnolia</Link> is not <Link href="/painters-katy-tx">Katy</Link>. Lots are
        larger, shade is heavier, and a lot of houses mix Hardie with wood fascia, porches, and outbuildings. The north
        wall mildews. The paint color did not cause that. Missed wash and missed mildewcide did.
      </p>

      <h2>Colors</h2>
      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Body</th>
            <th>Trim</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pine shade</td>
            <td>Soft sage or a mid greige</td>
            <td>Warm white</td>
          </tr>
          <tr>
            <td>Open acreage</td>
            <td>Warm greige or Alabaster-style white</td>
            <td>Warm white</td>
          </tr>
          <tr>
            <td>Wood porch and beams</td>
            <td>Stain if the wood is sound</td>
            <td>Paint only if it is already painted</td>
          </tr>
        </tbody>
      </table>
      <p>
        Dark colors under heavy shade hide mildew until it is a blanket. Mid-tones show it sooner, which is more honest.
      </p>
      <p>
        See a real example on a wooded lot: our{" "}
        <Link href="/projects/magnolia-exterior-siding-repaint">Magnolia exterior with green siding and yellow trim</Link>.
      </p>

      <h2>Prep That Matters Here</h2>
      <p>
        <Link href="/soft-washing-houston-tx">Soft wash</Link> with a mildew treatment, dry time, then paint.{" "}
        <Link href="/wood-rot-repair-houston-tx">Wood rot</Link> on porch ceilings and fascia gets repaired before
        coating. Painting over punky wood is a callback.
      </p>

      <h2>Cost</h2>
      <p>
        <strong>{PRICES_2026.exteriorPerSqFt} per sq ft</strong> on Hardie, more where wood repair is real. A one-story
        ranch around 2,500 sq ft often lands <strong>{PRICES_2026.exterior2500OneStory}</strong>. A two-story around
        3,000 sq ft with a porch: <strong>{PRICES_2026.exterior3000TwoStory}</strong>. See the{" "}
        <Link href="/exterior-house-painting-houston-cost-guide">exterior painting cost guide</Link> for other sizes.
      </p>

      <hr />
      <p>
        Houston Superior Painting paints Magnolia exteriors, porches, and trim.{" "}
        <Link href="/painting-estimate-houston">Get a free estimate</Link> or call{" "}
        <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
