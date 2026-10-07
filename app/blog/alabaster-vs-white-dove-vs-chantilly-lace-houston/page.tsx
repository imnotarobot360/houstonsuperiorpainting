import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston"

export const metadata: Metadata = {
  title: "Alabaster vs White Dove vs Chantilly Lace in Houston TX",
  description:
    "Which white works in Houston light — Benjamin Moore Alabaster, White Dove, or Chantilly Lace. A local painter’s comparison for walls, trim, and cabinets.",
  alternates: { canonical: URL },
  openGraph: {
    images: [
      {
        url: "https://houstonsuperiorpainting.com/images/blog/best-interior-colors-houston.png",
        width: 1200,
        height: 630,
        alt: "Living room with warm off-white walls, white trim and crown molding, and neutral furniture",
      },
    ],
    title: "Alabaster vs White Dove vs Chantilly Lace in Houston Light",
    description:
      "Which white works in Houston light — Alabaster, White Dove, or Chantilly Lace — for walls, trim, and cabinets.",
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "What is the best white paint for Houston walls?",
    answer:
      "Alabaster, for most houses. It stays warm in afternoon sun without going yellow the way older builder whites do.",
  },
  {
    question: "Can I use Chantilly Lace on walls and trim?",
    answer:
      "Yes on trim and ceilings. On every wall, only if the room has balanced light. In a west-facing open kitchen it is usually too stark.",
  },
  {
    question: "Are these Benjamin Moore only?",
    answer:
      "The names are Benjamin Moore. We can match them in Sherwin-Williams at the store if that is the product line on the rest of the house.",
  },
]

const relatedPosts = [
  {
    title: "Best Interior Paint Colors for Houston Homes",
    href: "/blog/best-interior-paint-colors-houston-homes",
    excerpt: "The interior colors that hold up in Houston light, room by room.",
    image: "/images/blog/best-interior-colors-houston.png",
  },
  {
    title: "Paint Finishes Explained: Matte, Eggshell, Satin & Semi-Gloss",
    href: "/blog/paint-finishes-matte-eggshell-satin-semi-gloss",
    excerpt: "Which sheen goes on walls, trim, and ceilings, and why it matters as much as the color.",
    image: "/images/blog/paint-finishes-guide.jpg",
  },
  {
    title: "Benjamin Moore vs Sherwin-Williams: A Houston Painter's Honest Comparison",
    href: "/blog/benjamin-moore-vs-sherwin-williams",
    excerpt: "Price, product lines, availability, and what holds up best on Houston homes.",
    image: "/images/blog/sherwin-williams-vs-benjamin-moore.jpg",
  },
]

export default function AlabasterVsWhiteDoveVsChantillyLaceHoustonPage() {
  return (
    <BlogPostTemplate
      slug="alabaster-vs-white-dove-vs-chantilly-lace-houston"
      title="Alabaster vs White Dove vs Chantilly Lace in Houston Light"
      excerpt="Which white works in Houston light — Benjamin Moore Alabaster, White Dove, or Chantilly Lace. A local painter’s comparison for walls, trim, and cabinets."
      author="Juan Serra"
      authorRole="Owner, Houston Superior Painting"
      publishDate="October 7, 2026"
      readTime="7 min read"
      category="Color Guide"
      // TODO(juan): replace featured image with a real job photo
      featuredImage="/images/blog/best-interior-colors-houston.png"
      featuredImageAlt="Living room with warm off-white walls, white trim and crown molding, and neutral furniture"
      faqs={faqs}
      relatedPosts={relatedPosts}
    >
      <h2>Quick Answer</h2>
      <p>
        In Houston light, <strong>Alabaster (Benjamin Moore OC-129)</strong> is the safe whole-house white: warm, hides
        the yellow cast of afternoon sun. <strong>White Dove (OC-17)</strong> is softer and creamier, better on trim next
        to a warm wall than as every wall in a bright south room. <strong>Chantilly Lace (OC-65)</strong> is the clean
        bright white — use it on ceilings, crisp trim, and cabinets, not as the only wall color in a room that gets hard
        west sun. Call <a href={PHONE_HREF}>{BUSINESS.phone}</a> for a color consult.
      </p>

      <p>
        These three get specified on almost every Houston{" "}
        <Link href="/interior-painting-houston-tx">interior</Link> we paint. They are not interchangeable once the light
        hits them at 4 p.m.
      </p>

      <h2>Side by side</h2>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Undertone</th>
            <th>Use it on</th>
            <th>Skip it when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Alabaster OC-129</strong>
            </td>
            <td>Warm, a little cream</td>
            <td>Walls in Katy, Cypress, Sugar Land new-builds; cabinets if you want soft white</td>
            <td>You want a gallery white</td>
          </tr>
          <tr>
            <td>
              <strong>White Dove OC-17</strong>
            </td>
            <td>Warmer, gray-cream</td>
            <td>Trim, doors, cabinets next to greige or sage walls</td>
            <td>The room is small and already yellow from oak floors</td>
          </tr>
          <tr>
            <td>
              <strong>Chantilly Lace OC-65</strong>
            </td>
            <td>Clean, slight cool</td>
            <td>Ceilings, high-gloss trim, a bright cabinet</td>
            <td>West-facing walls with no shade — it can look stark, not warm</td>
          </tr>
        </tbody>
      </table>
      <p>
        Sherwin-Williams equivalents people ask for: Alabaster is in the family of Shoji White and Athens White, not a
        perfect match. We match from a chip on the wall, not from a phone photo.
      </p>

      <h2>Houston light, specifically</h2>
      <p>
        South and west rooms in unshaded <Link href="/painters-fulshear-tx">Fulshear</Link> and{" "}
        <Link href="/painters-katy-tx">Katy</Link> houses run warm after 2 p.m. A cool white goes gray-blue in the
        morning and harsh in the afternoon. Alabaster holds. North rooms and wooded lots in{" "}
        <Link href="/painters-the-woodlands-tx">The Woodlands</Link> can take Chantilly Lace on trim without looking
        cold.
      </p>
      <p>
        Sheen matters as much as the chip. Walls in eggshell or matte. Trim in satin or semi-gloss so the white reads as
        trim, not as a second wall color. Ceilings flat, usually a step brighter than the wall — Chantilly Lace flat over
        Alabaster walls is the combination we use most. (More on sheen in our{" "}
        <Link href="/blog/paint-finishes-matte-eggshell-satin-semi-gloss">paint finishes guide</Link>.)
      </p>

      <h2>Cabinets</h2>
      <p>
        Alabaster on cabinets looks like a warm built-in. Chantilly Lace looks painted-white, which is what people want
        against a <Link href="/blog/navy-kitchen-island-cabinet-color-houston-tx">navy</Link> or green island. White
        Dove sits between them and photographs well. Spray plus sanding, not a brush-only coat, is what keeps the white
        from looking DIY. See <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing</Link>.
      </p>

      <p>
        Houston Superior Painting specifies and paints these whites across{" "}
        <Link href="/painters-houston-tx">Houston</Link>.{" "}
        <Link href="/painting-estimate-houston">Get a free estimate</Link> or call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
