"use client"

import { useEffect, useState } from "react"
import { PHONE_HREF } from "@/lib/business"
import { cn } from "@/lib/utils"

/**
 * Phone bottom bar for /offer/free-estimate (owner brief 2026-11-25): "Book
 * Estimate" scrolls to the on-page form (#estimate-form) instead of leaving for
 * the scheduler, and the bar hides while the form is on screen so it never
 * covers the submit button. The call link is tracked by the delegated tel:
 * handler in GoogleAnalytics.
 */
export function OfferStickyBar({ bookLabel, callLabel, targetId = "estimate-form" }: { bookLabel: string; callLabel: string; targetId?: string }) {
  const [targetVisible, setTargetVisible] = useState(true)

  useEffect(() => {
    const node = document.getElementById(targetId)
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setTargetVisible(entry.isIntersecting))
    observer.observe(node)
    return () => observer.disconnect()
  }, [targetId])

  return (
    <div
      aria-hidden={targetVisible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-border bg-white px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 transition-transform duration-300 md:hidden",
        targetVisible ? "pointer-events-none translate-y-full" : "translate-y-0",
      )}
    >
      <a
        href={`#${targetId}`}
        tabIndex={targetVisible ? -1 : 0}
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-secondary text-[15px] font-bold text-secondary-foreground"
      >
        {bookLabel}
      </a>
      <a
        href={PHONE_HREF}
        tabIndex={targetVisible ? -1 : 0}
        data-contact-location="offer_sticky"
        data-contact-service="free"
        className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-midnight text-[15px] font-bold text-white"
      >
        {callLabel}
      </a>
    </div>
  )
}
