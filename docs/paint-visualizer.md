# Exterior paint visualizer (`/paint-visualizer`)

Built 2026-10-16 from the owner brief. **Not launched**: the page is `noindex`, it is excluded from
the sitemap (`app/sitemap.ts`), and nothing links to it. The room visualizer at `/color-visualizer`
is unchanged.

## What the customer does

1. **Photo**: choose or drag a JPG, PNG or WebP image (up to 15 MB, at least 400 px per side). The
   page checks it and shows it, with *Use this photo*, *Replace photo* and *Remove photo*.
2. **Choose surfaces**: pick Body / siding, Trim, Front door or Shutters. Then mark that surface
   with *Paint area* or *Erase* (mouse, touch or stylus), set the brush size, and use *Undo* or
   *Clear selection*. *Smart select* is optional: the Segment Anything model runs on the device, the
   same as on `/color-visualizer`. Its result can always be erased or undone. Finally, pick a color
   by searching a name or code (e.g. "Alabaster", "SW 7008", "hc154"), or remove it.
3. **Preview**: switch between *Original*, *Preview* and *Side by side*, which has a slider. You can
   also *Download preview*.
4. **Request estimate**: enter name, phone, email, project address, the surfaces to paint (filled
   in from step 2) and notes, plus two consent checkboxes:
   - **Required:** consent to share the information so the company can respond to the request.
   - **Optional:** include the original photo and the preview.

## How the request reaches the office and InsightPaint

No new integration was needed. It reuses the existing lead pipeline:

| Step | Where |
| --- | --- |
| `POST /api/leads`, `service: "visualizer"`, photos in the same request | `lib/visualizer/request.ts` → `app/api/leads/route.ts` |
| Allowed answer keys (surfaces, body/trim/door/shutters color, photosShared, notes) | `LEAD_FORMS.visualizer` in `lib/lead-forms.ts` |
| Photos stored privately (`leads/<token>/…`, Vercel Blob, private) | `app/api/leads/route.ts` |
| Office email (Web3Forms, sent from the browser) and then `mark-emailed` | `lib/lead-notify.ts` |
| If the email never goes out, the InsightPaint ERP cron reads `/api/leads/unemailed` and texts the owner | `hsp-erp/app/api/alerts/website-leads-cron` |
| Lead record page | `/estimate/confirmed/<token>` |

No InsightPaint key is in the browser, and none is needed, because the ERP pulls from the site.

Photos are re-encoded from the canvas as JPEG, so camera metadata (including GPS) is never sent.
Two images are sent: `house-original.jpg` and `house-color-preview.jpg`. The preview is only sent
when at least one surface has a color.

## Delivery mode (no real sends during testing)

`resolveDeliveryMode()` in `lib/visualizer/request.ts` picks the mode:

- **`live`**: only on `houstonsuperiorpainting.com` and `www.houstonsuperiorpainting.com`.
- **`dry-run`**: everywhere else (localhost, Vercel previews). Nothing is saved, emailed or texted.
  The form shows "Test mode" and displays the exact payload it would have sent.

Override with `NEXT_PUBLIC_VISUALIZER_DELIVERY=live` or `NEXT_PUBLIC_VISUALIZER_DELIVERY=dry-run`.
Local development uses the production database. A real test lead that is never emailed would
trigger the ERP's missed-lead text to the owner, which is why dry-run is the default.

## Before launch (needs Juan)

1. Send one **TEST** request in `live` mode (name "TEST Visualizer", with photos). Check:
   - the row in `leads` (service `visualizer`, the answers, 2 photo paths);
   - the office email;
   - the lead page `/estimate/confirmed/<token>`;
   - that the ERP shows it.
   Then mark or delete the test lead so the missed-lead alert doesn't fire.
2. Decide how this page relates to `/color-visualizer`: link both, merge them, or keep one. Then
   remove `noindex`, remove the sitemap exclusion, and add a menu link.
3. Optional: connect a licensed manufacturer color catalog in `lib/visualizer/catalog.ts`.

## Analytics (GA4 through `trackEvent`; no personal data)

| Event | When it fires |
| --- | --- |
| `visualizer_started` | First click on the photo picker, or the first file chosen |
| `visualizer_photo_added` | *Use this photo* |
| `visualizer_preview_created` | First time the preview opens with at least one surface marked and colored |
| `visualizer_estimate_submitted` | Live mode only, after the lead is saved |

In live mode, `trackLeadCreated` (the `generate_lead` conversion) also fires, the same as the other
forms.

## Files

- `app/paint-visualizer/page.tsx`
- `components/paint-visualizer/exterior-visualizer.tsx`
- `components/paint-visualizer/visualizer-request-form.tsx`
- `lib/visualizer/core.ts`: photo checks, the selection label map, brush/erase/undo, recolor, color search
- `lib/visualizer/request.ts`: validation, payload, the duplicate-safe sender, delivery mode
- `lib/visualizer/catalog.ts`: color source (`data/paint-colors.ts`, approximate swatches)
- `tests/paint-visualizer.test.mjs`: run with `pnpm test`

## Limitations

- Marking is manual. Smart select is an on-device suggestion, needs a one-time model download, and
  can fail on older phones; brush and eraser always work.
- The recolor keeps the photo's light and shadow, but it is an approximation. It does not model
  sheen, texture changes or material differences (brick vs siding).
- One pixel belongs to one surface. Soft edges are not modelled, so fine trim takes care with a
  small brush.
- Swatches are approximate on-screen colors from a curated list (28 colors), not a manufacturer fan
  deck.
- Marking the photo needs a pointer (mouse, touch or stylus). Keyboard and screen-reader users can
  complete every other step and describe their colors in the notes.
- Notes are capped at 200 characters, because `/api/leads` caps answer values at 200.
- Duplicate protection is on the client: one request in flight, and a success is final for that
  page view. The server has no idempotency key.
