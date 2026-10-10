// Customer review excerpts the site may quote.
//
// A review is rendered only when `publish` is true. Publishing needs the owner's
// confirmation that the review is real and that the customer agreed to be
// quoted; the Google source URL should be added as soon as it is known. Never
// add a quote that is not in this file, and never render a fallback quote.

export type ApprovedReview = {
  /** First name and last initial only. */
  name: string
  /** City or neighborhood, as the customer would say it. */
  area: string
  excerpt: string
  /** ISO date of the review, if known. */
  date: string | null
  /** Link to the review on Google Maps, once known. */
  sourceUrl: string | null
  verification: "owner-confirmed" | "source-verified" | "unverified"
  publish: boolean
  notes?: string
}

export const REVIEWS: ApprovedReview[] = [
  {
    name: "Catherine R.",
    area: "Memorial",
    excerpt:
      "From the consultation to the final walkthrough, the experience felt genuinely white-glove. The prep work on our Memorial home was extraordinary.",
    date: null,
    sourceUrl: null,
    verification: "owner-confirmed",
    publish: true,
    notes: "Owner confirmed real 2026-10-01 and approved keeping it 2026-10-10. Add the Google review URL and date.",
  },
  {
    name: "Daniel & Priya M.",
    area: "West University",
    excerpt:
      "The cabinet refinishing transformed our kitchen into something out of a design magazine. Flawless, durable, and beautifully done.",
    date: null,
    sourceUrl: null,
    verification: "unverified",
    publish: false,
    notes: "Removed from the homepage 2026-10-10: no source or permission confirmed.",
  },
  {
    name: "Robert H.",
    area: "River Oaks",
    excerpt:
      "Meticulous, communicative, and respectful of our home throughout. The finish on our River Oaks exterior still looks immaculate.",
    date: null,
    sourceUrl: null,
    verification: "unverified",
    publish: false,
    notes: "Removed from the homepage 2026-10-10: no source or permission confirmed.",
  },
]

export const PUBLISHED_REVIEWS = REVIEWS.filter((r) => r.publish)
