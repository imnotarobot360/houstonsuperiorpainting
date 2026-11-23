/**
 * Google rating shown in the paid-funnel badge (owner brief 2026-11-22).
 *
 * ONE place to update. These are the five Google Business Profiles in
 * data/review-profiles.ts taken together, as last checked by hand:
 *   Katy 4.9 (130) · Houston 5.0 (25) · Magnolia 5.0 (11) · Cypress 5.0 (10)
 *   · Sugar Land 5.0 (5)  →  181 reviews, review-weighted 4.93 → 4.9.
 * Checked 2026-10-26 (Cypress 2026-11-05). Re-check on Google and update both
 * numbers together; never round the rating up.
 *
 * This reverses the 2026-10-25 "never combine profiles" rule for this badge
 * only, at the owner's request. It is visible copy, never schema: no
 * aggregateRating is emitted anywhere.
 */
export const GOOGLE_RATING = 4.9
export const GOOGLE_REVIEW_COUNT = 181
