# Specialty Finishes — Claims Requiring Approval

Status: **documented only, nothing changed.** Per instruction, all copy below is
still live exactly as written. Nothing in this table has been corrected.

Line numbers were accurate at the time of the audit and will drift as pages are
edited. Re-grep before acting on any single row.

---

## A. Claims the brief explicitly prohibits

These are the highest-priority items. Step 10 of the brief forbids promising that
plaster resists mold or is washable; Step 11 requires disclosing that lime finishes
behave differently over previously painted or sealed masonry.

| # | Live claim | Where | Why it needs approval |
|---|---|---|---|
| A1 | "The breathable finish resists mold in Houston's humidity" (3 mold mentions on the page) | `venetian-plaster-houston-tx` — incl. closing copy L272 | Brief prohibits this outright. Mold resistance depends on the specific system, substrate prep and sealer — it is not an inherent property of plaster. Highest-exposure claim on the site given the humid climate. |
| A2 | "washable" (2 mentions) | `venetian-plaster-houston-tx` | Brief prohibits promising washability. Depends entirely on whether a protective topcoat/wax was specified. |
| A3 | "lasts for decades" (3 mentions, incl. L272) | `venetian-plaster-houston-tx` | Unqualified durability claim, no substantiation on file. Appears in the same sentence as A1 and C1, so one edit addresses all three. |
| A4 | limewash "is breathable, allowing moisture to escape" / "keeping your brick healthy" | `app/limewash-brick-painting-houston-tx/page.tsx` (section copy, FAQ ×2, meta description, JSON-LD) | Stated unconditionally. Untrue over previously painted or sealed brick, which is exactly the case the brief says must be disclosed. Also embedded in structured data, so search engines ingest it. |
| A5 | "UV and weather resistant" | `app/limewash-brick-painting-houston-tx/page.tsx` (benefits) | Performance claim, no product data on file. |

## B. Pricing — one real conflict, left live per instruction

**Correction to my earlier summary:** I initially reported the plaster page's
per-sq-ft figure as contradicting the Memorial page's. On close reading it does
**not** — the Memorial figure is for *Roman Clay*, a different finish. That pair
is consistent. The genuine conflict is the whole-project limewash range (B3 vs B4).

Exact live wording:

| # | Figure | Where | Assessment |
|---|---|---|---|
| B1 | "$8–$20 per square foot" (Venetian plaster); "a single feature wall often falls between $1,500 and $4,000" | `venetian-plaster-houston-tx` FAQ + closing copy | **No conflict found.** Internally consistent across both mentions. |
| B2 | "interior Roman Clay ranges from $12-20 per sqft"; "exterior limewash $4-8 per sqft" | `limewash-decorative-finishes-memorial` | **Not a contradiction of B1** — different finish (Roman Clay). Flagged only because these per-sqft rates appear on one neighbourhood page and nowhere else, so they are unreviewed rather than inconsistent. |
| B3 | "$4,000-$15,000" | `limewash-brick-painting-houston-tx` (quick answer + FAQ) | **Conflicts with B4** for whole-project limewash. |
| B4 | `priceRange="$8,000 – $25,000"` and "typically range from $8,000 to $25,000" | `limewash-decorative-finishes-memorial` | **Conflicts with B3.** A Memorial homeowner reading both pages sees a floor of $4,000 on one and $8,000 on the other. Memorial being an affluent area may explain the intent, but nothing on either page discloses that the range is location-specific. |
| B5 | `minPrice: 4000 / maxPrice: 15000` | `limewash-brick-painting-houston-tx` JSON-LD `priceSpecification` | Machine-readable and published to search engines as a firm offer range. Inherits the B3/B4 conflict. |

## C. Warranty and lifespan — unverified

Section 0 of the brief was returned blank, so none of these terms are confirmed.

| # | Live claim | Where |
|---|---|---|
| C1 | "written 5-year quality guarantee" | `app/venetian-plaster-houston-tx/page.tsx` |
| C2 | "5-year warranty included" | `app/limewash-brick-painting-houston-tx/page.tsx` (benefits list) |
| C3 | "can last 15 years" / "10-15 years" | `app/limewash-brick-painting-houston-tx/page.tsx` |
| C4 | "last 5-7 years before needing refreshment" | `app/limewash-brick-painting-houston-tx/page.tsx` (FAQ) |
| C5 | "20+ years" experience | `app/limewash-decorative-finishes-memorial/page.tsx` |

C3 and C4 sit on the same page and describe overlapping subjects with different
numbers, which reads as inconsistent even before verification.

## D. Reversibility — accurate, worth preserving

Credit where due: the existing German smear copy is already correct and repeated
consistently ("permanent and cannot be removed once applied", plus an explicit
"consider this carefully"). The new finish comparison tool reinforces it rather
than restating it loosely. **Do not soften this language** — it is the only
irreversible decision on these pages.

---

## Fixed in this pass (not claims)

1. **Broken before/after images on a live page.**
   `app/limewash-brick-painting-houston-tx/page.tsx` passed
   `/images/limewash-before-1.jpg` and `-after-1.jpg` to `ServicePageTemplate`.
   Neither file exists. The template rendered "Before & After Results" above two
   broken images with overlapping alt text, verified in-browser. `beforeAfterImages`
   is now `[]`, and the template only renders that section when the array is
   non-empty, so this class of bug cannot silently recur on the other six pages
   using the template.

2. **Fake plaster before/after slider replaced** with three real project photos
   (previous turn).

## Open — needs your input

- **14 missing images** referenced only in OG tags and JSON-LD (`/images/og-*.jpg`,
  `/images/blog/*.jpg`, `/images/hsp-vs-certapro.jpg`). These do not render as
  broken `<img>` elements, but social/link previews for those pages will fall back
  or show nothing. Lower severity than item 1; not addressed here.
- **No interior-limewash hub page exists** — only seven
  `limewash-decorative-finishes-{neighborhood}` pages. The comparison tool's
  "Interior Limewash" entry therefore points at
  `/limewash-brick-painting-houston-tx` as the closest match.
- **Photography gaps:** zero real photos of limewash, German smear, brick,
  fireplaces, range hoods or sample boards. Three real plaster photos exist. The
  full hub, filterable gallery and case studies from the brief stay blocked on this.
