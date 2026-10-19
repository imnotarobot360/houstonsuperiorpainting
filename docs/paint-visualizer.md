# Exterior paint visualizer (`/paint-visualizer`)

The page is hidden: it is `noindex`, excluded from the sitemap, and not linked from anywhere.

**Version 1** went live on 2026-10-16 with a photo upload, manual marking, colors, compare and a request.
The live TEST lead (`c6746f3a…`) was received and the office email arrived.

**Version 2** (second owner brief, 2026-10-16) adds:
- address → Street View
- on-device detection
- a manufacturer filter
- saved combinations
- a project card
- a separate test inbox

It is local until pushed.

## Customer flow

1. **Your home**
   - The customer types an address and taps *Find my home*.
   - The page shows the Street View image facing the house. Turn, tilt and zoom adjust it.
   - *This is my home* confirms the view.
   - *Upload a photo* is always offered as the alternative: JPG/PNG/WebP, up to 15 MB, at least 400 px.
2. **Surfaces & colors**
   - Detection runs on the device and selects windows with a trim band around their traced outline, garage
     doors, one front door and shutters.
   - **Siding is not auto-detected.** In testing, automatic siding picked trees, roofs and open garages. The
     page asks for **one tap on the siding** instead, which selects the whole wall on the device and never
     takes pixels already given to trim, the door or shutters.
   - Corrections: *Paint area*, *Erase*, *Tap to select*, *Tap to remove*, *Undo*, *Clear*, *Detect again*.
   - Colors: one per surface, a manufacturer filter, and search by name or code.
   - *Save current* keeps up to 12 combinations, stored on this device only (localStorage).
3. **Compare**
   - *Before*, *After* and *Before / after* (a slider that works with touch and mouse).
   - Other colors and saved combinations can be applied here too.
   - *Download preview*.
4. **Request estimate**
   - Name, phone, email, project address (pre-filled from the search), surfaces and notes.
   - **Project card**: address, before and after images, colors and codes per surface, saved combinations,
     contact details, and a required consent to share the details and the photo. Optional text-message consent.
   - Send.

## Integrations

| Piece | Status | What it needs |
| --- | --- | --- |
| Address → Street View (`/api/visualizer/address`, `/api/visualizer/streetview`) | **Blocked by Google.** `GOOGLE_MAPS_API_KEY` exists in Vercel Production, but Google answers `REQUEST_DENIED: This API is not activated` (checked 2026-10-16 from this code). | In Google Cloud project 921196166935, enable the **Geocoding API** and the **Street View Static API**, and allow both in the key's API restrictions. No code change. |
| On-device detection (`components/paint-visualizer/facade.worker.ts`) | Works. OWL-ViT (`Xenova/owlvit-base-patch32`, q8) plus SlimSAM, loaded from Hugging Face on first use. | Nothing. The first use downloads the models, a large one-time download. |
| Colors (`lib/visualizer/catalog.ts`, `components/paint-visualizer/color-picker.tsx`) | 28 featured colors, plus the full Sherwin-Williams catalog: 1,726 colors with Sherwin-Williams' published digital values (`data/sw-colors.json`, imported 2026-10-19 by `scripts/sw-catalog/import.mjs`, loaded on demand). Benjamin Moore: the 12 featured colors, approximate values. | **Behr, PPG and HGTV Home: no authorized source.** None of them publishes a licensed color-data API we can use, and their sites must not be scraped. A licensed feed or a written permission is needed; plug it into `getColorCatalog()`. |
| PRODUCTION delivery | Existing lead pipeline: `POST /api/leads` (service `visualizer`) → `leads` table + private photos → office email → InsightPaint ERP missed-lead cron. Proven live on 2026-10-16. | Nothing. |
| TEST delivery (`/api/visualizer/test-inbox`) | Same checks and answer allow-list as `/api/leads`. Kept in memory only: no database, email or SMS. `GET` lists what arrived. Only on the local dev server, or a non-production deployment with `VISUALIZER_TEST_INBOX=on`. Never on Vercel production. | Nothing. |

The mode is `live` on houstonsuperiorpainting.com and `test` everywhere else. Override it with
`NEXT_PUBLIC_VISUALIZER_DELIVERY=live|test`.

## Google terms (owner to confirm)

The Street View image is not stored: it is proxied with `Cache-Control: no-store`. The lead stores the panorama
id and camera angles ("Google Street View pano …, heading …"), so the office can open the same view. Street View
images are **not attached** to the lead unless `NEXT_PUBLIC_VISUALIZER_ATTACH_STREETVIEW=true`. Google Maps
Platform terms restrict caching and creating content from Google Maps content. Recoloring and storing a Street
View image may fall under that, so confirm before turning the flag on. Uploaded photos are always attached, with
consent.

## Analytics (no address, photo or contact details)

| Event | Parameters |
| --- | --- |
| `visualizer_started` | `start: address\|upload` |
| `visualizer_photo_added` | `source` |
| `visualizer_surfaces_detected` | counts only |
| `visualizer_combo_saved` | none beyond the event |
| `visualizer_preview_created` | none beyond the event |
| `visualizer_estimate_submitted` | live only; `surfaces`, `source` |

`generate_lead` also fires in live mode, as on the other forms.

## Files

- `app/paint-visualizer/page.tsx`
- `components/paint-visualizer/exterior-visualizer.tsx`
- `components/paint-visualizer/visualizer-request-form.tsx`
- `components/paint-visualizer/facade.worker.ts`
- `lib/visualizer/core.ts`: photo checks, label map, brush, recolor, color search, detection selection and
  composition, saved combinations
- `lib/visualizer/request.ts`: validation, payload, duplicate-safe sender, delivery modes
- `lib/visualizer/streetview.ts`: Google adapter, server only
- `lib/visualizer/catalog.ts`
- `app/api/visualizer/address/route.ts`, `app/api/visualizer/streetview/route.ts`,
  `app/api/visualizer/test-inbox/route.ts`
- `lib/lead-forms.ts`: `LEAD_FORMS.visualizer`
- `tests/paint-visualizer.test.mjs` (`pnpm test`)

## Limitations

- Detection quality varies with the photo. Windows, trim, garage doors and doors are usually found. Shutters only
  count when they sit beside a window at the same height. Siding always needs one tap, and may need erasing
  around neighbors, garages or trees.
- The recolor keeps light and shadow but does not model sheen or texture.
- Street View images can be years old and low resolution (640×640).
- Duplicate protection is on the client only.
- Notes are capped at 200 characters, the same as every lead answer.
- The local test inbox clears when the dev server restarts.
