import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/structured-data"
import { PageHero, QuickAnswer, Section, CtaBlock, breadcrumbNode, ESTIMATE_PATH, SITE } from "@/components/aeo/blocks"
import { OfficeReviewCards, SHOWN_PROFILES } from "@/components/office-reviews"
import { PUBLISHED_REVIEWS } from "@/data/reviews"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

// One link per Google Business Profile (owner, 2026-10-10; brief 2026-10-25).
// No combined rating, no Review/AggregateRating schema, and no rating numbers
// unless components/office-reviews.tsx SHOW_RATING_NUMBERS is switched on.

const PAGE_PATH = "/reviews"
const PAGE_URL = `${SITE}${PAGE_PATH}`
const TITLE = "Customer Reviews on Google | Houston Superior Painting"
const DESCRIPTION =
  "Read verified customer reviews of Houston Superior Painting on Google, with a link to each of our Google Business Profiles: Houston, Cypress, Katy, Sugar Land and Magnolia."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PAGE_URL, siteName: BUSINESS.name, type: "website" },
}

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
        <PageHero h1="Customer reviews on Google" eyebrow={BUSINESS.name} />

        <QuickAnswer>
          Read verified customer reviews on Google. Houston Superior Painting has a separate Google Business Profile for
          each area it serves ({SHOWN_PROFILES.map((p) => p.city).join(", ")}), and each profile has its own reviews. We do
          not combine them into one rating. Use the links below to read every review on Google.
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
                    <span className="font-semibold text-foreground">{r.name}</span>, {r.area} ·{" "}
                    {r.sourceUrl ? (
                      <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        Google review
                      </a>
                    ) : (
                      "Customer testimonial, published with permission."
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>
        )}

        <Section title="How we ask for reviews">
          <p>
            We ask customers for an honest Google review after the final walkthrough, on the Google profile for their
            area. We do not offer discounts or gifts for reviews. If something went wrong on your project, call us at{" "}
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
