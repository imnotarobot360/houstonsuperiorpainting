import { BUSINESS } from "@/lib/business"

type InsightPaintWidgetProps = {
  /** Height reserved for the embedded scheduler (px). */
  minHeight?: number
  className?: string
  /**
   * Booking page to embed. Defaults to the parent painting company's page;
   * pass a brand-specific URL (e.g. the epoxy booking page) to route
   * appointments to that calendar instead.
   */
  bookingUrl?: string
  /** Accessible iframe title. Defaults to the parent scheduler's label. */
  label?: string
}

/**
 * Embeds the InsightPaint booking calendar INLINE.
 *
 * We render the booking iframe directly instead of loading widget.js.
 * The widget script reads its `data-mode` from `document.currentScript`,
 * which is null for dynamically-injected scripts — so it unreliably falls
 * back to "button" mode and drops a fixed, high z-index floating button
 * (labelled "Schedule Your Free Estimate") in the bottom-right corner,
 * overlapping the site chat widget.
 *
 * The iframe below is exactly what the widget's inline mode produces
 * (the `?embed=1` booking page), with none of that fragility.
 */
export function InsightPaintWidget({
  minHeight = 700,
  className,
  bookingUrl = BUSINESS.scheduler.embedUrl,
  label = BUSINESS.scheduler.label,
}: InsightPaintWidgetProps) {
  const embedUrl = `${bookingUrl}?embed=1`

  return (
    <iframe
      src={embedUrl}
      title={`${label} — Book a free estimate`}
      className={className}
      style={{ width: "100%", minHeight, border: 0, background: "transparent" }}
      loading="lazy"
      allow="clipboard-write"
    />
  )
}
