# Case-study template (`lib/projects.ts`)

How to add a real job to `/projects/<slug>`. Every project page is built from one
`CaseStudy` entry in `PROJECTS` (`lib/projects.ts`) and rendered by
`app/projects/[slug]/page.tsx`. Optional fields render **only when present**, so
leave a field out rather than guessing.

## Ground rules

- **Facts only.** Every word must be something Juan confirmed for this job. No
  invented conditions, steps, products, colors, timelines, quotes, counts, stats or
  awards. If nobody knows, leave the field out.
- **Business facts come from `lib/business.ts`.** Do not restate prices, phone,
  offices or trust claims inside a project entry. Warranty is the 5-year workmanship
  warranty. Insurance wording, if needed: "$2M general liability + workers' comp".
  Never "licensed", never "bonded", never BBB, never a deposit percentage.
- **Privacy.**
  - Location = neighborhood or city, optionally ZIP (e.g. "Memorial, Houston" or
    "Pearland, TX 77584"). **Never** a street name, house number or subdivision
    entry sign that pins the house.
  - Photos and text must not show or name: house numbers, mailboxes with numbers,
    license plates, people (homeowners, kids, crew faces), family photos on walls,
    documents or screens, or another company's yard sign, truck or logo.
  - No homeowner names anywhere, except a testimonial name in the form they approved.
- **Testimonials only with written permission** (text or email from the homeowner
  saying the quote and name format may be published). Keep that message on file.
  Testimonials on project pages are currently hidden sitewide until matched to real
  Google reviews, so adding one does not show it yet.
- **Colors only if authorized.** Some homeowners don't want their exact paint
  colors public. Fill `colors` only when they said yes.
- **Local proof.** A project is cited on city pages via `LOCAL_PROOF_PROJECTS` unless
  `photosNeedReview: true`. Set that flag if the photos are not confirmed as this job.

## Fields

| Field | Required | What it means |
|---|---|---|
| `slug` | yes | URL slug: `{area}-{service-or-feature}`, lowercase, hyphens. E.g. `katy-exterior-hardie-repaint`. Never change once live. |
| `title` | yes | Page H1. "Exterior Repaint on a Katy Two-Story". No superlatives. |
| `neighborhood` | yes | "Neighborhood, City" or "City, TX". The text before the comma links to the city page when it is in `NEIGHBORHOOD_CITY_PAGE` (page file). |
| `service` | yes | Display name, matching a service in `BUSINESS.services`. |
| `serviceSlug` | yes | That service's live slug, e.g. `exterior-painting-houston-tx`. Never a redirect source in `next.config.mjs`. |
| `summary` | yes | 1-2 sentences for the card and hero. Describe what the photos show. |
| `heroImage` | yes | Usually the same as `afterImage`. |
| `afterImage` / `afterAlt` | yes | Main finished photo + alt text. |
| `beforeImage` / `beforeAlt` | optional | Only with a real before photo of the same spot. Enables the drag slider. |
| `gallery` | optional | More finished photos `{ src, alt }`. |
| `stats` | yes | 2-4 short facts `{ label, value }` (Location, Service, Surface, Warranty "5 years"). Don't repeat `timeline`/`scope` here if you fill those fields. |
| `propertyType` | optional | "Two-story single-family home", "Single-story office suite". Shown under the stats. |
| `scope` | optional | One line: what was painted. "Full exterior: siding, trim, doors and garage door". Shown under the stats. |
| `dateCompleted` | optional | `YYYY-MM-DD`. Shown as "March 2026"; added to the Article schema as `temporalCoverage`. An invalid date is ignored. |
| `challenge` | optional | The homeowner's goal / problem ("Where we started"). |
| `existingCondition` | optional | What the surfaces looked like before work: peeling, chalking, water stains, flashing, failed caulk. |
| `preparation` | optional | Ordered list of prep steps actually done (wash, scrape, sand, prime...). |
| `repairs` | optional | Repairs actually done (wood rot replaced, drywall patches, caulk). |
| `approach` | optional | Older step format `{ title, detail }`. Prefer `preparation` + `repairs` for new entries. |
| `products` | optional | Exact products used, e.g. "Sherwin-Williams Duration Satin (siding)". Only brands we actually used on the job. |
| `colors` | optional | Color names/codes, **only with homeowner permission**. "SW 7006 Extra White (trim)". |
| `timeline` | optional | Days on site, e.g. "6 working days". |
| `challenges` | optional | Job-specific obstacles: weather delays, occupied home, HOA approval, tight access. |
| `results` | optional | Outcome paragraph, describing what is visible in the photos. |
| `relatedServiceAreas` | optional | Extra city-page slugs from `SERVICE_AREAS` (`lib/business.ts`) to link, e.g. `["painters-cinco-ranch-tx"]`. The type only accepts real slugs. |
| `testimonial` | optional | `{ quote, name }`, **written permission only**; currently not rendered. |
| `photosNeedReview` | optional | `true` until photos are confirmed as this job. |
| `metaTitle` | yes | ~50-60 chars, e.g. "Exterior Painting Project in Katy, TX". |
| `metaDescription` | yes | ~140-160 chars, factual. |

Page order: hero, photos, stats, property/scope/completed facts, challenge,
existing condition, preparation + repairs, approach, products + colors,
timeline + challenges, result, CTA (with related city links), related projects.

## Copy-paste skeleton

Paste into the `PROJECTS` array in `lib/projects.ts` and delete every optional line
you can't confirm.

```ts
  {
    slug: "AREA-SERVICE-FEATURE",
    title: "SERVICE on a/in AREA ...",
    neighborhood: "Neighborhood, City", // or "City, TX" / "City, TX 77xxx". Never a street.
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary: "What the photos show, in one or two sentences.",
    heroImage: "/images/projects/AREA-FEATURE/01-NAME.jpg",
    afterImage: "/images/projects/AREA-FEATURE/01-NAME.jpg",
    afterAlt: "Describe the finished surface, colors and room/elevation",
    // beforeImage: "/images/projects/AREA-FEATURE/00-before-NAME.jpg",
    // beforeAlt: "Same view before painting: ...",
    gallery: [
      { src: "/images/projects/AREA-FEATURE/02-NAME.jpg", alt: "..." },
    ],
    stats: [
      { label: "Location", value: "City, TX" },
      { label: "Service", value: "Exterior" },
      { label: "Warranty", value: "5 years" },
    ],
    // propertyType: "Two-story single-family home",
    // scope: "Full exterior: siding, trim, doors and garage door",
    // dateCompleted: "2026-09-15",
    // challenge: "What the homeowner wanted fixed.",
    // existingCondition: "Peeling trim on the south side, chalking siding.",
    // preparation: ["Pressure washed", "Scraped and sanded loose paint", "Spot-primed bare wood"],
    // repairs: ["Replaced rotted fascia board", "Re-caulked windows and trim joints"],
    // products: ["Sherwin-Williams Duration (siding)"],
    // colors: ["SW 7006 Extra White (trim)"], // ONLY with homeowner permission
    // timeline: "6 working days",
    // challenges: "Afternoon rain; we painted the shaded side in the mornings.",
    // results: "What is visible in the finished photos.",
    // relatedServiceAreas: ["painters-cinco-ranch-tx"],
    // photosNeedReview: true, // until photos are confirmed as this job
    metaTitle: "SERVICE Project in CITY, TX",
    metaDescription: "Factual 140-160 character description of the job and photos.",
  },
```

Then run `npx tsc --noEmit -p .` (a typo in `relatedServiceAreas` fails the check).

## Photo rules

- **Folder:** `public/images/projects/{slug-or-short-id}/`, one folder per job.
- **Filenames:** two-digit order prefix + short description, lowercase, hyphens:
  `00-before-hallway.jpg`, `01-after-hallway.jpg`, `02-front-and-garage.jpg`. No
  spaces, no camera names (`IMG_1234.jpg`), no street names, no homeowner names.
- **Re-encode every photo before committing** (strips GPS/EXIF location data and
  shrinks the file). `sharp` is already installed, e.g.:
  `node -e "require('sharp')('in.jpg').rotate().resize({width:1600,withoutEnlargement:true}).jpeg({quality:80,mozjpeg:true}).toFile('out.jpg')"`
  (`.rotate()` bakes in the phone's orientation; metadata is dropped by default).
  Aim for roughly 100-600 KB per image, 1600 px on the long edge.
- **Check every frame** for house numbers, plates, people, family photos, screens or
  papers, and other companies' signs. Crop or blur, or don't use the photo.
- **Real job photos only.** No stock, AI-generated or other contractors' images. If
  you're unsure a photo is from this job, set `photosNeedReview: true`.
- **Alt text:** describe what is visible: surface, color, room or elevation, and city
  if useful ("Pearland home with sage-green lap siding and cream trim"). No keyword
  stuffing, no claims ("best", "flawless"), no address.
- **Before/after pairs:** same angle and framing, otherwise skip the slider and use
  the gallery.

## Data request checklist (Juan, per job)

Copy this into a text to Juan or a note; any answer left blank stays off the page.

1. Area: neighborhood or city (ZIP okay). Which city page should it link to?
2. Service(s) done, and what exactly was painted (scope)?
3. Property type (one/two-story home, townhome, office...)?
4. Date the job finished (day, month, year)?
5. How many working days on site?
6. Condition before you started (peeling, rot, stains, old colors, flashing)?
7. Prep steps you actually did, in order?
8. Repairs you made (wood rot, drywall, caulk, other)?
9. Products used (brand + product line + sheen, per surface)?
10. Colors: may we publish them? If yes, names/codes per surface.
11. Anything that made this job harder (weather, occupied home, HOA, access)?
12. Result in one or two sentences, in your words.
13. Photos: are all of them from this job? Any before photos of the same spots?
    Anything in them we must crop (numbers, plates, people, signs)?
14. Testimonial: did the homeowner give **written** permission? Exact quote and how
    their name should appear.
