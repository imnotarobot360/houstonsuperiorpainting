"use client"

import Script from "next/script"
import { useEffect } from "react"
import {
  GA_ID,
  trackPhoneClick,
  trackTextClick,
  trackEmailClick,
  trackEstimateClick,
  trackEvent,
} from "@/lib/analytics"

// Estimate/quote CTA copy we treat as a lead conversion when clicked.
const ESTIMATE_PATTERNS = /free estimate|get.*estimate|schedule|consultation|request.*quote|get a quote|text photos|book an appointment|book your/i
// Links that lead into a lead flow, whatever their label says: the contact page,
// the estimate funnel, and the external InsightPaint booking page.
const ESTIMATE_HREFS = ["/contact", "/painting-estimate-houston", "insightpaint.com/book/"]

export function GoogleAnalytics() {
  /**
   * Deliberately NOT gated on `GA_ID`.
   *
   * `trackEvent` mirrors funnel events into our own database as well as GA4,
   * so gating this on the GA id would silently disable first-party conversion
   * logging wherever GA is absent — every local/preview environment, and any
   * visitor whose ad blocker eats gtag. The individual trackers already no-op
   * their gtag call when GA is unavailable, so attaching unconditionally costs
   * nothing and keeps our own numbers complete.
   */
  useEffect(() => {
    // Conversion event names from the owner brief (2026-10-25, phase 12), added
    // alongside the existing ones so GA4 history and Ads conversions keep working.
    let chatStarted = false
    function handleClick(e: MouseEvent) {
      // The LeadConnector chat lives in a shadow root; clicks inside it reach
      // the document retargeted to its <chat-widget> host. First click = chat_start.
      if (!chatStarted && (e.target as HTMLElement | null)?.closest?.("chat-widget")) {
        chatStarted = true
        trackEvent("chat_start", { event_category: "contact" })
        return
      }
      const target = (e.target as HTMLElement | null)?.closest("a, button")
      if (!target) return

      const anchor = target as HTMLAnchorElement
      const href = anchor.getAttribute?.("href") || ""
      const label =
        anchor.getAttribute("aria-label") ||
        anchor.textContent?.trim().slice(0, 60) ||
        href

      /**
       * This delegated listener is the ONLY place a contact tap is reported.
       *
       * Individual `tel:`/`sms:`/`mailto:` links must not also call the
       * trackers from an `onClick` — this listener already catches every one
       * of them, so an extra handler reports the same tap twice and inflates
       * the contact metrics. Links pass their reporting context through data
       * attributes instead:
       *
       *   data-contact-location — where on the page the link sits
       *   data-contact-service  — which funnel it belongs to, if any
       *
       * The visible-text fallback exists for plain links elsewhere on the
       * site, but it makes a poor label because it changes whenever the copy
       * does, so anything whose reporting matters should set the attributes.
       */
      const location = anchor.dataset.contactLocation || label
      const service = anchor.dataset.contactService

      if (href.startsWith("tel:")) {
        trackPhoneClick(location, service)
      } else if (href.startsWith("sms:")) {
        trackTextClick(location)
        if (/photo/i.test(label)) trackEvent("send_photos_click", { event_category: "contact", event_label: location })
      } else if (href.startsWith("mailto:")) {
        trackEmailClick(location)
      } else if (ESTIMATE_PATTERNS.test(label) || ESTIMATE_HREFS.some((h) => href.includes(h))) {
        trackEstimateClick(location)
        // Booking-page clicks also get their own event (owner brief 2026-10-14).
        if (href.includes("insightpaint.com/book/")) {
          trackEvent("appointment_click", { event_label: location })
          trackEvent("booking_click", { event_category: "lead", event_label: location })
        }
        if (/photo/i.test(label)) trackEvent("send_photos_click", { event_category: "contact", event_label: location })
      }
    }
    // A submit attempt on any lead form; estimate_form_success fires from
    // trackFormSubmit only after the lead is saved.
    function handleSubmit(e: SubmitEvent) {
      const form = e.target as HTMLFormElement | null
      if (!form || form.closest("chat-widget")) return
      trackEvent("estimate_form_submit", {
        event_category: "lead",
        event_label: form.getAttribute("aria-label") || form.getAttribute("name") || form.id || location.pathname,
      })
    }
    document.addEventListener("submit", handleSubmit, { capture: true })

    document.addEventListener("click", handleClick, { capture: true })
    return () => {
      document.removeEventListener("click", handleClick, { capture: true })
      document.removeEventListener("submit", handleSubmit, { capture: true })
    }
  }, [])

  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  )
}
