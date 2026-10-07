import type { Metadata } from "next"
import Link from "next/link"
import { BlogPostTemplate } from "@/components/blog-post-template"
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business"

const URL = "https://houstonsuperiorpainting.com/blog/cabinet-colors-2026-houston-greige-green-black"

export const metadata: Metadata = {
  title: "Cabinet Colors 2026 Houston | Greige, Green, Black Island",
  description:
    "Houston cabinet colors beyond navy in 2026 — greige, muted green, and a black island. Pairings, sheen, and what holds up in a humid kitchen.",
  alternates: { canonical: URL },
  openGraph: {
    images: [
      {
        url: "https://houstonsuperiorpainting.com/images/blog/cabinet-transformations-katy-sugar-land.png",
        width: 1200,
        height: 630,
        alt: "White shaker kitchen cabinets with black bar pulls and a white quartz island",
      },
    ],
    title: "Kitchen Cabinet Colors in Houston for 2026: Greige, Green, and Black Islands",
    description:
      "Houston cabinet colors beyond navy in 2026 — greige, muted green, and a black island. Pairings, sheen, and what holds up in a humid kitchen.",
    url: URL,
    type: "article",
    publishedTime: "2026-10-07",
    authors: ["Juan Serra"],
  },
}

const faqs = [
  {
    question: "What cabinet color is replacing navy in Houston?",
    answer:
      "Nothing has replaced it. Greige, muted green, and a black island are the other three we are spraying in 2026.",
  },
  {
    question: "Will green cabinets look dated?",
    answer:
      "A gray-green holds. A bright mint dates. Look at the chip in your kitchen at 4 p.m. before you approve it.",
  },
  {
    question: "How long does cabinet painting take?",
    answer: "Most kitchens are 3–5 days, doors off-site or in a sprayed setup, then reinstall.",
  },
]

const relatedPosts = [
  {
    title: "Navy Kitchen Island Paint Color Ideas for Houston Homes",
    href: "/blog/navy-kitchen-island-cabinet-color-houston-tx",
    excerpt: "Hale Navy, Naval, and how to pair a navy island with a white perimeter.",
    image: "/images/blog/navy-kitchen-island-houston.png",
  },
  {
    title: "How Much Does It Cost to Paint Kitchen Cabinets in Houston? (2026)",
    href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx",
    excerpt: "A real 2026 price breakdown, what drives your quote, and when to refinish instead of replace.",
    image: "/images/blog/cost-to-paint-kitchen-cabinets-houston.png",
  },
  {
    title: "Cabinet Refinishing vs Replacement in Houston: Complete Cost Comparison",
    href: "/blog/cabinet-refinishing-vs-replacement-houston",
    excerpt: "Costs, timelines, and results compared so you can make the right call for your kitchen.",
    image: "/images/blog/cabinet-refinishing-vs-replacement.jpg",
  },
]

export default function CabinetColors2026HoustonPage() {
  return (
    <BlogPostTemplate
      slug="cabinet-colors-2026-houston-greige-green-black"
      title="Kitchen Cabinet Colors in Houston for 2026: Greige, Green, and Black Islands"
      excerpt="Houston cabinet colors beyond navy in 2026 — greige, muted green, and a black island. Pairings, sheen, and what holds up in a humid kitchen."
      author="Juan Serra"
      authorRole="Owner, Houston Superior Painting"
      publishDate="October 7, 2026"
      readTime="9 min read"
      category="Cabinet Painting"
      // TODO(juan): replace featured image with a real job photo
      featuredImage="/images/blog/cabinet-transformations-katy-sugar-land.png"
      featuredImageAlt="White shaker kitchen cabinets with black bar pulls and a white quartz island"
      faqs={faqs}
      relatedPosts={relatedPosts}
    >
      <h2>Quick Answer</h2>
      <p>
        Navy islands are already a staple in Houston. The 2026 cabinet jobs we are spraying are{" "}
        <strong>warm greige</strong> on the whole kitchen, <strong>muted green</strong> on the island or the lowers, and{" "}
        <strong>black or iron ore</strong> on the island only. Sheen is satin, not gloss. A typical kitchen refinish is{" "}
        <strong>{PRICES_2026.cabinetsPerKitchen}</strong>. Call <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>

      <p>
        Navy still works. Hale Navy and Naval are on a{" "}
        <Link href="/blog/navy-kitchen-island-cabinet-color-houston-tx">separate guide</Link>. This one is the other
        three requests from <Link href="/painters-katy-tx">Katy</Link>,{" "}
        <Link href="/painters-sugar-land-tx">Sugar Land</Link>, and <Link href="/painters-cypress-tx">Cypress</Link>{" "}
        kitchens this year.
      </p>

      <h2>Three directions</h2>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Where it goes</th>
            <th>Pair it with</th>
            <th>Skip it when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Warm greige</strong> (Agreeable Gray family, or a BM greige)
            </td>
            <td>All cabinets</td>
            <td>White quartz, brass or black hardware</td>
            <td>The floor is already gray-brown and you want contrast</td>
          </tr>
          <tr>
            <td>
              <strong>Muted green</strong> (sage, olive, a soft BM green)
            </td>
            <td>Island, or lowers with white uppers</td>
            <td>
              <Link href="/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston">Alabaster</Link> uppers, unlacquered
              or brushed gold
            </td>
            <td>The kitchen has no daylight</td>
          </tr>
          <tr>
            <td>
              <strong>Black / Iron Ore</strong>
            </td>
            <td>Island only</td>
            <td>White or Alabaster perimeter, light stone</td>
            <td>You want a low-maintenance fingerprint-proof finish — black shows more</td>
          </tr>
        </tbody>
      </table>
      <p>
        Green is the one that looks dated fastest if it is too yellow or too pastel. Keep it gray-green, not mint.
      </p>

      <h2>Sheen and product</h2>
      <p>
        Kitchens in this humidity get satin or a cabinet-specific enamel, sprayed and sanded between coats. Gloss shows
        every orange peel and every fingerprint. We do not brush a kitchen and call it a factory finish.
      </p>
      <p>
        Scope that belongs in the price: doors and drawer fronts off, degrease, sand, bond coat, two finish coats,
        hardware back. New hinges are extra if the old ones are bent. See{" "}
        <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing</Link> for the full process.
      </p>

      <h2>Cost</h2>
      <table>
        <thead>
          <tr>
            <th>Kitchen</th>
            <th>2026 range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Small galley</td>
            <td>{PRICES_2026.cabinetsGalley}</td>
          </tr>
          <tr>
            <td>Typical Houston kitchen</td>
            <td>{PRICES_2026.cabinetsPerKitchen}</td>
          </tr>
          <tr>
            <td>Large island plus perimeter, color split</td>
            <td>{PRICES_2026.cabinetsLarge}</td>
          </tr>
        </tbody>
      </table>
      <p>
        Same ranges as our <Link href="/blog/cost-to-paint-kitchen-cabinets-houston-tx">cabinet cost guide</Link>. A
        color split (white uppers, color island) does not double the price. It adds masking and a second product.
      </p>

      <p>
        See also our <Link href="/blog/navy-kitchen-island-cabinet-color-houston-tx">navy island guide</Link>. Houston
        Superior Painting refinishes cabinets across Katy, Cypress, Sugar Land, and{" "}
        <Link href="/painters-houston-tx">Houston</Link>.{" "}
        <Link href="/painting-estimate-houston">Get a free estimate</Link> or call{" "}
        <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
      </p>
    </BlogPostTemplate>
  )
}
