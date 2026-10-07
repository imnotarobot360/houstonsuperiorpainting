import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/exterior-paint-colors-houston-heights"

// TODO(juan): replace featured image with a real job photo
const IMAGE = "/images/blog/exterior-paint-houston-humidity.jpg"
const IMAGE_ALT = "Two-story painted white brick home with navy shutters and a navy front door"

export const metadata: Metadata = {
  title: "Exterior Paint Colors in the Houston Heights (2026)",
  description:
    "Exterior colors for Houston Heights bungalows and new-builds — painted brick, historic trim, and what to leave alone.",
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
    title: "Exterior Paint Colors in the Houston Heights (2026)",
    description:
      "Exterior colors for Houston Heights bungalows and new-builds — painted brick, historic trim, and what to leave alone.",
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "Should I paint the brick on a Heights bungalow?",
    answer:
      "If it has never been painted, no. Limewash if you want a softer look you can reverse. Paint only if it is already painted.",
  },
  {
    question: "Do Heights houses have HOA color rules?",
    answer:
      "Most historic streets do not. Some newer patio-home inserts do. Check the deed before you pick a door color and assume you are free.",
  },
]

const relatedPosts = [
  {
    title: "Limewash vs German Smear: Which Brick Finish Is Right for Your Houston Home?",
    href: "/blog/limewash-vs-german-smear-houston",
    excerpt: "Two popular brick finishes with very different looks and maintenance. What Houston homeowners need to know.",
    image: "/images/blog/limewash-vs-german-smear.jpg",
  },
  {
    title: "How Long Does Exterior Paint Last in Houston?",
    href: "/blog/how-long-does-exterior-paint-last-houston",
    excerpt: "What Houston sun, humidity, and storms do to exterior paint, and how to make it last.",
    image: "/images/blog/exterior-paint-durability-houston.jpg",
  },
  {
    title: "How Houston Weather Damages Exterior Paint",
    href: "/blog/how-houston-weather-damages-exterior-paint",
    excerpt: "How heat, humidity, and storms break down exterior paint — and how to fight back.",
    image: "/images/blog/houston-weather-paint-damage.png",
  },
]

export default function ExteriorPaintColorsHoustonHeightsPage() {
  return (
    <BlogPostTemplate
      slug="exterior-paint-colors-houston-heights"
      title="Best Exterior Paint Colors in the Houston Heights (2026)"
      excerpt="Exterior colors for Houston Heights bungalows and new-builds — painted brick, historic trim, and what to leave alone."
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
        Heights exteriors in 2026 split in two: older bungalows with painted wood trim and brick, and new infill with
        Hardie. Keep historic brick unpainted if it is still bare. On painted houses, deep greens, warm whites, and a
        real trim color outperform builder greige. A bungalow exterior is often{" "}
        <strong>{PRICES_2026.bungalowExterior}</strong> because of prep, not size. Call{" "}
        <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a>.
      </p>

      <p>
        <Link href="/painters-the-heights-tx">The Heights</Link> does not want to look like Cross Creek Ranch.
        Greige-on-greige fights the street. Prep fights you too: pre-1978 paint on old trim may contain lead, which
        changes how it is prepped, plus loose glazing and wood that has been caulked three times.
      </p>

      <h2>Two Housing Types</h2>
      <table>
        <thead>
          <tr>
            <th>House</th>
            <th>Color approach</th>
            <th>Watch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1920s–1940s bungalow</td>
            <td>Body in a historic-friendly green, blue-gray, or warm white; trim a real contrast</td>
            <td>
              Possible lead in old paint, <Link href="/wood-rot-repair-houston-tx">wood rot</Link> at sills
            </td>
          </tr>
          <tr>
            <td>New infill Hardie</td>
            <td>Warmer and simpler — greige or white is fine</td>
            <td>HOA only if the infill has one; most streets do not</td>
          </tr>
          <tr>
            <td>Painted brick cottage</td>
            <td>Repaint the film that is already there</td>
            <td>Do not paint bare historic brick to &ldquo;match the new house next door&rdquo;</td>
          </tr>
        </tbody>
      </table>
      <p>
        <Link href="/limewash-brick-painting-houston-tx">Limewash</Link> is the middle path on dark brick you do not want
        to seal under a full paint film. Our{" "}
        <Link href="/blog/limewash-vs-german-smear-houston">limewash vs German smear guide</Link> covers the difference.
      </p>

      <h2>Cost</h2>
      <p>
        Smaller footprint, higher prep. <strong>{PRICES_2026.bungalowExterior}</strong> is a normal bungalow range once
        scrape, glaze, and sill repair are real. A straight Hardie infill prices like any other Houston two-story,{" "}
        <strong>{PRICES_2026.exterior2500TwoStory}</strong>, with less wood repair. See the{" "}
        <Link href="/exterior-house-painting-houston-cost-guide">exterior painting cost guide</Link> for other sizes.
      </p>

      <hr />
      <p>
        Houston Superior Painting paints <Link href="/exterior-painting-the-heights">Heights</Link> and inner-loop
        exteriors. <Link href="/painting-estimate-houston">Get a free estimate</Link> or call{" "}
        <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
