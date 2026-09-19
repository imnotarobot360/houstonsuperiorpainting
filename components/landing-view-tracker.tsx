"use client"

import { useEffect, useRef } from "react"
import { trackFunnelStep } from "@/lib/analytics"

/**
 * Fires `landing_page_view` for a paid-traffic landing page.
 *
 * Exists as its own client component because the landing pages are server
 * components, and converting one to a client component just to fire an
 * analytics event would drag its whole subtree onto the client.
 *
 * GA4 already logs a generic `page_view`, but not with the `service` dimension
 * attached. This is the denominator for the funnel: without a per-service view
 * count there's nothing to measure `funnel_started` against, so a page that
 * draws clicks but no engagement is indistinguishable from one drawing no
 * clicks at all.
 */
export function LandingViewTracker({ service }: { service: string }) {
  // React 18+ StrictMode intentionally double-invokes effects in development,
  // which would double-count views. The ref makes this fire exactly once.
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true
    trackFunnelStep("landing_page_view", service)
  }, [service])

  return null
}
