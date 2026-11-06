"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MessageCircle } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { useHidesStickyCta } from "@/lib/focused-routes"
import { useOverlapsContent } from "@/lib/use-overlaps-content"

/**
 * Desktop floating call/text CTA (lg and up; phones use the sticky bottom bar).
 *
 * Owner UI brief 2026-11-05: the old labelled pills sat over section headings
 * and body text on short desktop screens (1366x768). Now they are 44px circles
 * in the left page margin that widen into the labelled pill on hover/focus, and
 * they fade out whenever page content is underneath them (useOverlapsContent),
 * so they never cover what the visitor is reading. Still hidden over the hero.
 */
export function StickyCTA() {
  // Read before the other hooks and branch after them: an early return placed
  // above useState/useEffect would change the hook count on client-side
  // navigation into or out of a focused route, which React treats as an error.
  const focused = useHidesStickyCta()
  const [pastHero, setPastHero] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  // While hovered or keyboard-focused the pill widens to show its label; don't
  // re-test then, or the wider box hides itself under the visitor's cursor.
  const [engaged, setEngaged] = useState(false)
  const overContent = useOverlapsContent(ref, !focused && !engaged)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 700)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (focused) return null
  const visible = pastHero && !overContent

  const pill =
    "group flex h-11 items-center rounded-full shadow-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  const label =
    "max-w-0 overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 group-hover:ml-2 group-hover:max-w-xs group-focus-visible:ml-2 group-focus-visible:max-w-xs"

  return (
    <div
      ref={ref}
      data-floating-ui
      onPointerEnter={() => setEngaged(true)}
      onPointerLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={() => setEngaged(false)}
      className={`hidden lg:flex fixed bottom-6 left-3 z-40 flex-col items-start gap-2 transition-all duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <a
        href={PHONE_HREF}
        data-contact-location="desktop_sticky_cta"
        aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
        title={`Call ${BUSINESS.phone}`}
        className={`${pill} bg-primary px-3.5 text-primary-foreground ring-1 ring-gold/50 hover:bg-primary/90 focus-visible:outline-primary`}
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className={label}>{BUSINESS.phone}</span>
      </a>
      <a
        href={`sms:${BUSINESS.phoneTel}?body=Hi! I'd like a painting estimate. Here are photos of my project:`}
        data-contact-location="desktop_sticky_cta"
        aria-label={`Text ${BUSINESS.name} photos for a free estimate`}
        title="Text Photos for a Quote"
        className={`${pill} bg-secondary px-3.5 text-secondary-foreground hover:bg-secondary/90 focus-visible:outline-secondary`}
      >
        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className={label}>Text Photos for a Quote</span>
      </a>
    </div>
  )
}
