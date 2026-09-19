"use client"

import { useEffect, useState } from "react"
import { Phone, MessageCircle } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { useHidesStickyCta } from "@/lib/focused-routes"

/**
 * Desktop floating call/text CTA.
 * Only appears once the visitor scrolls past the hero, so it never sits on
 * top of the hero headline. Anchored bottom-left to stay clear of the
 * bottom-right chat widget.
 */
export function StickyCTA() {
  // Read before the other hooks and branch after them: an early return placed
  // above useState/useEffect would change the hook count on client-side
  // navigation into or out of a focused route, which React treats as an error.
  const focused = useHidesStickyCta()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (focused) return null

  return (
    <div
      className={`hidden lg:flex fixed bottom-8 left-6 z-40 flex-col gap-3 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <a
        href={PHONE_HREF}
        data-contact-location="desktop_sticky_cta"
        aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
      >
        <Phone className="h-4 w-4" />
        {BUSINESS.phone}
      </a>
      <a
        href={`sms:${BUSINESS.phoneTel}?body=Hi! I'd like a painting estimate. Here are photos of my project:`}
        data-contact-location="desktop_sticky_cta"
        aria-label={`Text ${BUSINESS.name} photos for a free estimate`}
        className="flex items-center gap-2 rounded-full bg-secondary px-5 py-3 font-semibold text-secondary-foreground shadow-lg transition-colors hover:bg-secondary/90"
      >
        <MessageCircle className="h-4 w-4" />
        Text Photos for a Quote
      </a>
    </div>
  )
}
