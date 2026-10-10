import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/structured-data"
import { PageHero, QuickAnswer, Section, CtaBlock, breadcrumbNode, ESTIMATE_PATH, SITE } from "@/components/aeo/blocks"
import { OfficeReviewCards, SHOWN_PROFILES, REVIEWS_CHECKED } from "@/components/office-reviews"
import { PUBLISHED_REVIEWS } from "@/data/reviews"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

// Per-office Google review figures and links (owner, 2026-10-10). No combined
// rating, no Review/AggregateRating schema: each office's rating lives on its
// own Google Business Profile and this page links there.

const PAGE_PATH = "/reviews"
const PAGE_URL = `${SITE}${PAGE_PATH}`
const TITLE = "Google Reviews by Office | Houston Superior Painting"
const DESCRIPTION =
  "Read Houston Superior Painting's Google reviews for each office: Houston, Cypress, Katy, Sugar Land and Magnolia, with each office's rating and review count."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: BUSINESS.name, type: "website" },
}

const checked = REVIEWS_CHECKED
  ? new Date(`${REVIEWS_CHECKED}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })
  : null

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Reviews", path: PAGE_PATH },
          ]),
        }}
      />
      <Header />
      <main>
        <PageHero h1="Google reviews by office" eyebrow={BUSINESS.name} />

        <QuickAnswer>
          Each Houston Superior Painting office has its own Google Business Profile, so each one has its own rating and
          reviews:{" "}
          {SHOWN_PROFILES.map((p, i) => (
            <span key={p.locationSlug}>
              {i > 0 && (i === SHOWN_PROFILES.length - 1 ? " and " : ", ")}
              {p.city} {p.rating.toFixed(1)} ({p.reviewCount})
            </span>
          ))}
          {checked ? `, as shown on Google on ${checked}` : ""}. Use the links below to read every review on Google.
        </QuickAnswer>

        <Section title="Our Google profiles">
          <div className="not-prose">
            <OfficeReviewCards />
          </div>
        </Section>

        {PUBLISHED_REVIEWS.length > 0 && (
          <Section title="What customers say">
            <div className="not-prose grid gap-6 md:grid-cols-2">
              {PUBLISHED_REVIEWS.map((r) => (
                <figure key={r.name} className="rounded-xl border border-border bg-card p-6">
                  <blockquote className="text-lg leading-relaxed text-foreground">&ldquo;{r.excerpt}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{r.name}</span>, {r.area}
                    {r.sourceUrl && (
                      <>
                        {" · "}
                        <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                          Read on Google
                        </a>
                      </>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}

        <Section title="How we ask for reviews">
          <p>
            We ask every customer for an honest Google review after the final walkthrough, using the profile of the office
            that did the job. We never offer discounts or gifts for reviews, and we do not choose who to ask based on how
            we expect them to rate us. If something went wrong on your project, call us at{" "}
            <a href={PHONE_HREF}>{BUSINESS.phone}</a> so we can make it right.
          </p>
          <p>
            Want to know more before you hire anyone? Read{" "}
            <Link href="/houston-painting-contractor-guide">how to choose a painting contractor in Houston</Link> and our{" "}
            <Link href="/insurance-and-warranty">insurance and warranty</Link> page.
          </p>
        </Section>

        <CtaBlock title="Get a free written estimate">
          Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate online
          </Link>
          .
        </CtaBlock>
      </main>
      <Footer />
    </>
  )
}
