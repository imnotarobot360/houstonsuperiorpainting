// Public review profiles for Houston Superior Painting.
//
// Google Business Profile is the only confirmed review platform (owner,
// 2026-10-10). Do not add Yelp, Houzz, Angi, BBB or any other source until the
// owner supplies a genuine profile URL. Never fill a missing value with a guess:
// leave it null and list it in the owner-action report.

export type ReviewProfile = {
  platform: "Google Business Profile"
  /** Profile name exactly as it appears on Google. */
  profileName: string
  /** The listing's "Share → Copy link" URL. null until the owner supplies it. */
  url: string | null
  /** Office (lib/business.ts locations[].slug) this profile belongs to. */
  locationSlug: string
  rating: number | null
  reviewCount: number | null
  /** ISO date the rating/count were last checked, and by whom. */
  lastVerified: string | null
  verification: "owner-stated" | "checked-on-google" | "unverified"
  notes?: string
}

export const REVIEW_PROFILES: ReviewProfile[] = [
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting",
    url: null,
    locationSlug: "houston-bissonnet",
    rating: 4.9,
    reviewCount: 200,
    lastVerified: "2026-10-08",
    verification: "owner-stated",
    notes: "Owner confirmed 4.9 with 200+ Google reviews (2026-10-08, re-confirmed 2026-10-10). Shown on the site as '4.9 · 200+ reviews'. Needs the profile URL so the figure can link to its source.",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting",
    url: null,
    locationSlug: "cypress-huffmeister",
    rating: null,
    reviewCount: null,
    lastVerified: null,
    verification: "unverified",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting",
    url: null,
    locationSlug: "katy-fm1463",
    rating: null,
    reviewCount: null,
    lastVerified: null,
    verification: "unverified",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting",
    url: null,
    locationSlug: "sugar-land-university",
    rating: null,
    reviewCount: null,
    lastVerified: null,
    verification: "unverified",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting",
    url: null,
    locationSlug: "magnolia-cottontop",
    rating: null,
    reviewCount: null,
    lastVerified: null,
    verification: "unverified",
  },
]

/** A profile can be linked from the site only when its URL is known. */
export const LINKABLE_REVIEW_PROFILES = REVIEW_PROFILES.filter((p) => p.url !== null)
