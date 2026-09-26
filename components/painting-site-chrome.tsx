import { headers } from "next/headers"

/**
 * Gates all Houston Superior Painting-branded chrome (sticky CTAs, exit intent,
 * chat widget offset, and the painting Organization/WebSite/Person schema) so
 * none of it leaks onto the Houston Superior Epoxy property.
 *
 * This MUST be a server component. An earlier client-side version still emitted
 * the painting schema into the server HTML and only removed it after hydration,
 * so crawlers saw two competing business entities on the epoxy page —
 * exactly the problem it was meant to prevent.
 *
 * Detection relies on the `x-epoxy-site` request header set by proxy.ts.
 * Next 16 exposes no pathname header to server components (no next-url or
 * x-invoke-path), so the proxy — which does see the URL — has to tag the
 * request for us. The `host` check is a defensive fallback for the live
 * subdomain in case the proxy matcher is ever narrowed.
 */
export async function isEpoxyRequest() {
  const h = await headers()
  return h.get("x-epoxy-site") === "1" || (h.get("host") ?? "").startsWith("epoxy.")
}

export async function PaintingSiteChrome({ children }: { children?: React.ReactNode }) {
  if (await isEpoxyRequest()) return null
  return <>{children}</>
}
