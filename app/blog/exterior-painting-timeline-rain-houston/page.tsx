import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/exterior-painting-timeline-rain-houston"

const DESCRIPTION =
  "How many days an exterior paint job takes in Houston, and what we do when a storm hits mid-project. Temperatures, humidity, and cure rules."

// TODO(juan): replace featured image with a real job photo
const IMAGE = "/images/blog/exterior-house-painting-guide.jpg"
const IMAGE_ALT =
  "Painters on extension ladders working on the lap siding of a two-story house on a sunny day"

export const metadata: Metadata = {
  title: "Exterior Painting Timeline in Houston | Rain Delays",
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
    title: "How Long Exterior Painting Takes in Houston — and What Happens If It Rains",
    description: DESCRIPTION,
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "How long does it take to paint a house exterior in Houston?",
    answer: "Two to four days for a one-story, four to six for a two-story, weather permitting.",
  },
  {
    question: "What if it rains in the middle of the job?",
    answer:
      "We stop. Fresh paint that gets rained on gets recoated. The end date moves. The price does not, unless the scope changes.",
  },
  {
    question: "Can you paint in Houston summer?",
    answer: "Yes, with early starts and a stop on sun-baked walls. Fall is still the better window.",
  },
]

const relatedPosts = [
  {
    title: "Best Time to Paint a House in Houston",
    href: "/blog/best-time-to-paint-house-houston",
    excerpt: "A season-by-season guide to heat, humidity, and rain for Houston painting projects.",
    image: "/images/blog/best-time-paint-houston.jpg",
  },
  {
    title: "Spring Rain Damage to Houston Exterior Paint",
    href: "/blog/spring-rain-damage-houston-exterior-paint",
    excerpt: "What Houston's spring storms do to exterior paint and caulk, and what to fix first.",
    image: "/images/blog/spring-rain-damage-houston.png",
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

export default function ExteriorPaintingTimelineRainHoustonPage() {
  return (
    <BlogPostTemplate
      slug="exterior-painting-timeline-rain-houston"
      title="How Long Exterior Painting Takes in Houston — and What Happens If It Rains"
      excerpt={DESCRIPTION}
      author="Juan Serra"
      authorRole="Owner, Houston Superior Painting"
      publishDate="October 7, 2026"
      readTime="8 min read"
      category="Exterior Painting"
      featuredImage={IMAGE}
      featuredImageAlt={IMAGE_ALT}
      faqs={faqs}
      relatedPosts={relatedPosts}
    >
      <h2>Quick Answer</h2>
      <p>
        A single-story Houston exterior is usually <strong>2–4 working days</strong>. A two-story is{" "}
        <strong>4–6</strong>. That count starts after the <Link href="/soft-washing-houston-tx">soft wash</Link> has
        dried, and it stops for rain. We do not coat wet <Link href="/blog/hardieplank-painting-houston">Hardie</Link>,
        and we do not finish a wall if a storm is inside the paint maker’s rain window — typically several hours. Call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>

      <p>
        October and November are the{" "}
        <Link href="/blog/best-time-to-paint-house-houston">best exterior months here</Link> because the overnight lows
        sit in the 60s and the daily storms are fewer than May. The schedule still has weather in it. A bid that promises
        “three days no matter what” is guessing.
      </p>

      <h2>Typical schedule</h2>
      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-muted">
            <th className={th}>House</th>
            <th className={th}>Wash and dry</th>
            <th className={th}>Prep and caulk</th>
            <th className={th}>Coats</th>
            <th className={th}>Working days on site</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={td}>
              <strong>One-story, sound paint</strong>
            </td>
            <td className={td}>Half day, then dry</td>
            <td className={td}>1 day</td>
            <td className={td}>1–2 days</td>
            <td className={td}>
              <strong>2–4</strong>
            </td>
          </tr>
          <tr>
            <td className={td}>
              <strong>Two-story Hardie</strong>
            </td>
            <td className={td}>Half day, then dry</td>
            <td className={td}>1–2 days</td>
            <td className={td}>2–3 days</td>
            <td className={td}>
              <strong>4–6</strong>
            </td>
          </tr>
          <tr>
            <td className={td}>
              <strong>
                Two-story with failed caulk and <Link href="/wood-rot-repair-houston-tx">wood repair</Link>
              </strong>
            </td>
            <td className={td}>Half day, then dry</td>
            <td className={td}>2–3 days</td>
            <td className={td}>2–3 days</td>
            <td className={td}>
              <strong>5–8</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Day one is often wash only. Painting a damp bottom course is how the north wall peels next spring.</p>

      <h2>The rain rule</h2>
      <p>
        Acrylic needs a dry surface and a dry window after it goes on. If radar shows rain inside that window, we stop
        that elevation. What we do instead:
      </p>
      <ul>
        <li>Finish the elevation that has already cured enough</li>
        <li>Move to prep on a dry side, or stop for the day</li>
        <li>Recoat any lap that got hit while wet — a rained-on fresh coat is not “close enough”</li>
      </ul>
      <p>
        Temperature band we work in: about <strong>50–90°F</strong>, surface not in full blasting sun if the paint is
        flashing. Above that, Houston afternoons in August are a reason to start at 7 a.m. and quit the west wall at
        noon. (Here’s more on{" "}
        <Link href="/blog/how-houston-weather-damages-exterior-paint">how Houston weather damages exterior paint</Link>
        .)
      </p>

      <h2>What you should expect</h2>
      <ul>
        <li>A text when weather moves the day</li>
        <li>Masked windows and plants before any spray</li>
        <li>No ladder left on a wall overnight in a storm</li>
        <li>A walkthrough when the last coat has cured, not while it is tacky</li>
      </ul>
      <p>
        <Link href="/interior-painting-houston-tx">Interior work</Link> is the backup if an exterior week washes out and
        the inside is also in the scope. We do not invent interior work to fill a rain day.
      </p>

      <p>
        Houston Superior Painting schedules <Link href="/exterior-painting-houston-tx">exteriors</Link> around real
        Houston weather. <Link href="/painting-estimate-houston">Get a free estimate</Link> or call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
