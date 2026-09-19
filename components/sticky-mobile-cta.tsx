"use client"

// components/StickyMobileCTA.tsx
// Always-visible mobile bottom bar with Call + Text + Quote CTAs.
// Mount once in app/layout.tsx. Hidden on desktop.

import Link from "next/link"
import { Phone, MessageCircle, ClipboardList } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"
import { useHidesStickyCta } from "@/lib/focused-routes"

export function StickyMobileCTA() {
  // No other hooks in this component, so an early return is safe here.
  // Note this uses the sticky-CTA flag, not the interruption flag: the
  // /chatgpt/* ad funnels suppress the modal and chat bubble but deliberately
  // keep this bar, which is their primary phone affordance on mobile.
  if (useHidesStickyCta()) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden grid grid-cols-3 bg-card shadow-2xl border-t border-border">
      <a
        href={PHONE_HREF}
        data-contact-location="mobile_sticky_bar"
        aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
        className="flex flex-col items-center justify-center gap-1 py-3 bg-primary text-primary-foreground text-center font-semibold text-xs active:bg-primary/90"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={`${SMS_HREF}?body=Hi! I'd like a painting estimate. Here are photos of my project:`}
        data-contact-location="mobile_sticky_bar"
        aria-label={`Text ${BUSINESS.name} photos for estimate`}
        className="flex flex-col items-center justify-center gap-1 py-3 bg-secondary text-secondary-foreground text-center font-semibold text-xs active:bg-secondary/90"
      >
        <MessageCircle className="h-4 w-4" />
        Text Photos
      </a>
      <Link
        href="/contact"
        data-contact-location="mobile_sticky_bar"
        aria-label="Get a free painting estimate"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-foreground text-background text-center font-semibold text-xs active:opacity-90"
      >
        <ClipboardList className="h-4 w-4" />
        Free Quote
      </Link>
    </div>
  )
}
