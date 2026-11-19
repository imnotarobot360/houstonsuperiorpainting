"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { trackEstimateClick } from "@/lib/analytics"
import { cn } from "@/lib/utils"

/**
 * Phone-only bottom bar for the paid /chatgpt/* estimate pages (owner
 * 2026-11-19). Replaces the global StickyMobileCTA there, whose "Free Quote"
 * button sent paid visitors off the page. Styled like the /offer/free-estimate
 * bar: white, orange estimate button, midnight call button.
 *
 * The estimate button scrolls to the on-page funnel instead of leaving. The
 * bar hides while the funnel itself is on screen, so it never covers the
 * funnel's own buttons. The call button is a plain tel: link; the delegated
 * handler in GoogleAnalytics tracks it, so no onClick here (no double count).
 */
export function FunnelStickyBar({ targetId, service }: { targetId: string; service: string }) {
  const [targetVisible, setTargetVisible] = useState(true)

  useEffect(() => {
    const node = document.getElementById(targetId)
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setTargetVisible(entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [targetId])

  function scrollToTarget() {
    trackEstimateClick(`${service}_sticky_cta`)
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      aria-hidden={targetVisible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 transition-transform duration-300 lg:hidden",
        targetVisible ? "pointer-events-none translate-y-full" : "translate-y-0",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <button
          type="button"
          onClick={scrollToTarget}
          tabIndex={targetVisible ? -1 : 0}
          className="min-h-12 flex-1 rounded-lg bg-secondary px-4 text-center text-[15px] font-bold text-secondary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Get my free estimate
        </button>
        <a
          href={PHONE_HREF}
          tabIndex={targetVisible ? -1 : 0}
          data-contact-location={`${service}_sticky_bar`}
          data-contact-service={service}
          aria-label={`Call ${BUSINESS.phone}`}
          className="inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-lg bg-midnight px-4 text-white hover:bg-midnight/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Phone className="size-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
