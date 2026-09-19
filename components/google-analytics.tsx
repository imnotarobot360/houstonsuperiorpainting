"use client"

import Script from "next/script"
import { useEffect } from "react"
import {
  GA_ID,
  trackPhoneClick,
  trackTextClick,
  trackEmailClick,
  trackEstimateClick,
} from "@/lib/analytics"

// Estimate/quote CTA copy we treat as a lead conversion when clicked.
const ESTIMATE_PATTERNS = /free estimate|get.*estimate|schedule|consultation|request.*quote|get a quote|text photos/i

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
    function handleClick(e: MouseEvent) {
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
      } else if (href.startsWith("mailto:")) {
        trackEmailClick(location)
      } else if (ESTIMATE_PATTERNS.test(label) || href.includes("/contact")) {
        trackEstimateClick(location)
      }
    }

    document.addEventListener("click", handleClick, { capture: true })
    return () => document.removeEventListener("click", handleClick, { capture: true })
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
