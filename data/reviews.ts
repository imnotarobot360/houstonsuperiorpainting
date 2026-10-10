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
  // ── Shortlist from the five Google Business Profiles (read 2026-10-10). ──
  // Text is NOT filled in here: paste each review's exact wording from the
  // Google Business Profile dashboard into `excerpt`, then set publish: true.
  // Entries with an empty excerpt never render.
  {
    name: "Bill M.",
    area: "Houston",
    excerpt: "",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/fdVmNamNHyNZ3gBD8",
    verification: "source-verified",
    publish: false,
    notes: "5 stars, Houston profile, ~4 months before 2026-10-10. Two-story home with lots of trim and two porches.",
  },
  {
    name: "Brandon R.",
    area: "Houston",
    excerpt: "",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/fdVmNamNHyNZ3gBD8",
    verification: "source-verified",
    publish: false,
    notes: "5 stars, Houston profile, ~5 months before 2026-10-10. Professional, thorough house painting; would recommend.",
  },
  {
    name: "Yashica V.",
    area: "Houston",
    excerpt: "",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/fdVmNamNHyNZ3gBD8",
    verification: "source-verified",
    publish: false,
    notes: "5 stars, Houston profile, ~1 year before 2026-10-10. Clean, neat, timely, affordable; treated the home with care.",
  },
  {
    name: "Tony G.",
    area: "Cypress",
    excerpt: "",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/G2cRQy8Cth7UM6d6A",
    verification: "source-verified",
    publish: false,
    notes: "5 stars, Cypress profile, ~1 month before 2026-10-10. Professional, reliable, detail-oriented, good communication.",
  },
  {
    name: "Sarah K.",
    area: "Sugar Land",
    excerpt: "",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/kda3QDeyq89B4u9R9",
    verification: "source-verified",
    publish: false,
    notes: "5 stars, Sugar Land profile, ~1 month before 2026-10-10. Juan fixed another painter's poor job and scheduled her within days.",
  },
  {
    name: "Mari",
    area: "Magnolia",
    excerpt: "",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/WXxysgBJ6CWMrjg18",
    verification: "source-verified",
    publish: false,
    notes: "5 stars, Magnolia profile, ~2 months before 2026-10-10. Quality of work and service; would hire again.",
  },
  {
    name: "Edna R.",
    area: "Magnolia",
    excerpt: "",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/WXxysgBJ6CWMrjg18",
    verification: "source-verified",
    publish: false,
    notes: "5 stars, Magnolia profile, ~4 months before 2026-10-10. Master bathroom renovation; would recommend.",
  },
  {
    name: "Kayla D.",
    area: "Katy",
    excerpt: "",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/zcUY9dT1KYdoPmiy6",
    verification: "source-verified",
    publish: false,
    notes: "5 stars, Katy profile, ~2 years before 2026-10-10. Four accent walls (living room, office, stairs, media room); fast scheduling.",
  },
  // Not shortlisted: the Magnolia review posted under "Juan Serra" and the Cypress
  // review under "JJ Semo" (owner / insider reviews break Google policy), and Katy
  // reviews that name "S&L Painting" until the owner confirms that history.
]

export const PUBLISHED_REVIEWS = REVIEWS.filter((r) => r.publish && r.excerpt.trim().length > 0)
