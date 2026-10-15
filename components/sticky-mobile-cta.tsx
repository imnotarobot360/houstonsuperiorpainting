"use client"

// components/StickyMobileCTA.tsx
// Always-visible mobile bottom bar with Call + Text + Quote CTAs.
// Mount once in app/layout.tsx. Hidden on desktop.

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, MessageCircle, ClipboardList } from "lucide-react"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"
import { useHidesStickyCta } from "@/lib/focused-routes"

// Spanish labels on /es (owner confirmed the office handles Spanish, 2026-10-14).
const LABELS = {
  en: {
    call: "Call Now",
    callAria: `Call ${BUSINESS.name} at ${BUSINESS.phone}`,
    text: "Text Photos",
    textAria: `Text ${BUSINESS.name} photos for estimate`,
    smsBody: "Hi! I'd like a painting estimate. Here are photos of my project:",
    quote: "Free Quote",
    quoteAria: "Get a free painting estimate",
    quoteHref: "/painting-estimate-houston",
  },
  es: {
    call: "Llamar",
    callAria: `Llamar a ${BUSINESS.name} al ${BUSINESS.phone}`,
    text: "Enviar fotos",
    textAria: `Enviar fotos a ${BUSINESS.name} para un estimado`,
    smsBody: "¡Hola! Quisiera un estimado de pintura. Aquí están las fotos de mi proyecto:",
    quote: "Estimado gratis",
    quoteAria: "Pedir un estimado de pintura gratis",
    quoteHref: "/es#estimado",
  },
}

export function StickyMobileCTA() {
  const pathname = usePathname() ?? ""
  const t = pathname === "/es" || pathname.startsWith("/es/") ? LABELS.es : LABELS.en
  // Offer landing pages keep the visitor on the offer: "Free Quote" jumps to its own form.
  const quoteHref = pathname.startsWith("/offer/") ? "#start" : t.quoteHref
  // Hooks above run unconditionally, so the early return below is safe.
  // Note this uses the sticky-CTA flag, not the interruption flag: the
  // /chatgpt/* ad funnels suppress the modal and chat bubble but deliberately
  // keep this bar, which is their primary phone affordance on mobile.
  if (useHidesStickyCta()) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden grid grid-cols-3 bg-card shadow-2xl border-t border-border">
      <a
        href={PHONE_HREF}
        data-contact-location="mobile_sticky_bar"
        aria-label={t.callAria}
        className="flex flex-col items-center justify-center gap-1 py-3 bg-primary text-primary-foreground text-center font-semibold text-xs active:bg-primary/90"
      >
        <Phone className="h-4 w-4" />
        {t.call}
      </a>
      <a
        href={`${SMS_HREF}?body=${encodeURIComponent(t.smsBody)}`}
        data-contact-location="mobile_sticky_bar"
        aria-label={t.textAria}
        className="flex flex-col items-center justify-center gap-1 py-3 bg-secondary text-secondary-foreground text-center font-semibold text-xs active:bg-secondary/90"
      >
        <MessageCircle className="h-4 w-4" />
        {t.text}
      </a>
      <Link
        href={quoteHref}
        data-contact-location="mobile_sticky_bar"
        aria-label={t.quoteAria}
        className="flex flex-col items-center justify-center gap-1 py-3 bg-foreground text-background text-center font-semibold text-xs active:opacity-90"
      >
        <ClipboardList className="h-4 w-4" />
        {t.quote}
      </Link>
    </div>
  )
}
