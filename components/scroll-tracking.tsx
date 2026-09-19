"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

const THRESHOLDS = [25, 50, 75, 90] as const

/**
 * Fires a GA4 `scroll_depth` event once per threshold per page view.
 * Mounted globally so every page reports engagement depth — this is what
 * tells you which pages hold attention and where visitors drop off.
 */
export function ScrollTracking() {
  useEffect(() => {
    const fired = new Set<number>()

    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight
      if (scrollable <= 0) return

      const percent = (window.scrollY / scrollable) * 100

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold)
          trackEvent("scroll_depth", {
            event_category: "engagement",
            event_label: `${threshold}%`,
            percent_scrolled: threshold,
            page_path: window.location.pathname,
          })
        }
      }

      if (fired.size === THRESHOLDS.length) {
        window.removeEventListener("scroll", onScroll)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return null
}
