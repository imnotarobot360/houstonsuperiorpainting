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
    profileName: "Houston Superior Painting..",
    url: "https://maps.app.goo.gl/fdVmNamNHyNZ3gBD8",
    locationSlug: "houston-bissonnet",
    rating: 5.0,
    reviewCount: 25,
    lastVerified: "2026-10-10",
    verification: "checked-on-google",
    notes: "Google name ends in '..'; owner should remove the trailing periods. The older listing (place 0x1c94ce195628f7bf) no longer exists on Google (2026-10-10).",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting - Cypress",
    url: "https://maps.app.goo.gl/G2cRQy8Cth7UM6d6A",
    locationSlug: "cypress-huffmeister",
    rating: 5.0,
    reviewCount: 3,
    lastVerified: "2026-10-10",
    verification: "checked-on-google",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting - Katy",
    url: "https://maps.app.goo.gl/zcUY9dT1KYdoPmiy6",
    locationSlug: "katy-fm1463",
    rating: 4.9,
    reviewCount: 130,
    lastVerified: "2026-10-10",
    verification: "checked-on-google",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting - Sugar Land",
    url: "https://maps.app.goo.gl/kda3QDeyq89B4u9R9",
    locationSlug: "sugar-land-university",
    rating: 5.0,
    reviewCount: 3,
    lastVerified: "2026-10-10",
    verification: "checked-on-google",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting",
    url: "https://maps.app.goo.gl/WXxysgBJ6CWMrjg18",
    locationSlug: "magnolia-cottontop",
    rating: 5.0,
    reviewCount: 11,
    lastVerified: "2026-10-10",
    verification: "checked-on-google",
    notes: "One of the 11 reviews is posted under 'Juan Serra'. Google's policy does not allow owners to review their own business; consider removing it.",
  },
]

/** A profile can be linked from the site only when its URL is known. */
/** Combined total shown on the site as BUSINESS.trust.reviewCount ("170+"). Owner: the old 200+ was the combined
 * count before Google removed reviews (2026-10-10). */
export const COMBINED_REVIEW_COUNT = REVIEW_PROFILES.reduce((n, p) => n + (p.reviewCount ?? 0), 0)

export const LINKABLE_REVIEW_PROFILES = REVIEW_PROFILES.filter((p) => p.url !== null)
