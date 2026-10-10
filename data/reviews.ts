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
    excerpt:
      "This company is by far the best in the business. They treated my home as if it was their own. The work was clean, neat, timely and affordable I will definitely use them again. Thanks Houston superior painting company.",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/fdVmNamNHyNZ3gBD8",
    verification: "source-verified",
    publish: true,
    notes: "5 stars, Houston profile, ~1 year before 2026-10-10. Clean, neat, timely, affordable; treated the home with care.",
  },
  {
    name: "Paul T.",
    area: "Houston",
    excerpt:
      "Absolutely thrilled with the work Houston Superior Painting did on our home! The team was professional, punctual, and paid attention to every detail. Our house looks brand new again. Highly recommend them for anyone looking for quality painting services.",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/fdVmNamNHyNZ3gBD8",
    verification: "source-verified",
    publish: true,
    notes: "Text supplied by the owner 2026-10-10; Google highlights this review on the Houston profile.",
  },
  {
    name: "Andoure G.",
    area: "",
    excerpt:
      "Houston Superior Painting painted my house and they did an amazing job. They were very professional and before the finished quickly.",
    date: null,
    sourceUrl: null,
    verification: "owner-confirmed",
    publish: false,
    notes: "Text supplied by the owner 2026-10-10. Waiting for which office's Google profile it is on before publishing.",
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
    excerpt:
      "I made the mistake of hiring an inexperienced painter and was really unhappy with the results. I called Juan in complete distress and he not only assured me that he would take care of it, he put me on his schedule just a couple of days later. Juan’s team completely transformed the look of my home interior with their precision and attention to detail. I chose a very dark color for one of the walls and there is no room for error for that dark to light transition. Yet there are no mistakes, everything is pristine and perfect - even to my discerning eye. Don’t ever just hire anyone for a paint job. Let the professionals take care of it for you - thank you Juan!! But now I have to paint all the walls.",
    date: null,
    sourceUrl: "https://maps.app.goo.gl/kda3QDeyq89B4u9R9",
    verification: "source-verified",
    publish: true,
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
