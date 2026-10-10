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
    rating: 4.9,
    reviewCount: 200,
    lastVerified: "2026-10-08",
    verification: "owner-stated",
    notes: "Owner confirmed 4.9 with 200+ Google reviews (2026-10-08, re-confirmed 2026-10-10). Shown on the site as '4.9 · 200+ reviews'. URL supplied by the owner 2026-10-10 (his 'West University' link). The Google name ends in '..'; the owner should remove the trailing periods. A second listing with the same name exists (place 0x1c94ce195628f7bf:0xcc8b6e63c1c05fe7, used by BUSINESS.social.googleMaps); owner to confirm which holds the 200+ reviews and whether the other is a duplicate.",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting - Cypress",
    url: "https://maps.app.goo.gl/G2cRQy8Cth7UM6d6A",
    locationSlug: "cypress-huffmeister",
    rating: null,
    reviewCount: null,
    lastVerified: null,
    verification: "unverified",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting - Katy",
    url: "https://maps.app.goo.gl/zcUY9dT1KYdoPmiy6",
    locationSlug: "katy-fm1463",
    rating: null,
    reviewCount: null,
    lastVerified: null,
    verification: "unverified",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting - Sugar Land",
    url: "https://maps.app.goo.gl/kda3QDeyq89B4u9R9",
    locationSlug: "sugar-land-university",
    rating: null,
    reviewCount: null,
    lastVerified: null,
    verification: "unverified",
  },
  {
    platform: "Google Business Profile",
    profileName: "Houston Superior Painting",
    url: "https://maps.app.goo.gl/WXxysgBJ6CWMrjg18",
    locationSlug: "magnolia-cottontop",
    rating: null,
    reviewCount: null,
    lastVerified: null,
    verification: "unverified",
  },
]

/** A profile can be linked from the site only when its URL is known. */
export const LINKABLE_REVIEW_PROFILES = REVIEW_PROFILES.filter((p) => p.url !== null)
