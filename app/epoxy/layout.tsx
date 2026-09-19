import type { ReactNode } from "react"

/**
 * Epoxy subdomain layout.
 *
 * Wraps the subtree in .epoxy-theme, which redefines the raw design tokens
 * (see app/globals.css) so every semantic utility resolves to the black/orange
 * epoxy palette instead of the parent painting brand's.
 *
 * The painting site's header, footer, sticky CTAs and LocalBusiness schema are
 * suppressed for this route by <PaintingSiteChrome> in the root layout.
 */
export default function EpoxyLayout({ children }: { children: ReactNode }) {
  return <div className="epoxy-theme min-h-screen">{children}</div>
}
