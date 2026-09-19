import { Phone } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

/**
 * Minimal header for the paid `/chatgpt/*` landing pages.
 *
 * Deliberately not the site header: no nav, no service links, no logo link back
 * to the homepage. On paid traffic every outbound link is a lead you paid for
 * and lost, so the only action here is the phone number.
 *
 * The business name is plain text rather than an anchor for exactly that
 * reason — a clickable logo is the most-used escape hatch on a landing page.
 *
 * The phone tap is tracked, but not from here: the delegated `tel:` handler in
 * `GoogleAnalytics` catches every phone link on the page, so this one only
 * needs to declare its reporting context via `data-phone-*`. That keeps the
 * header a server component and, more importantly, avoids the double-count an
 * `onClick` here would cause.
 */
export function FunnelHeader({ service }: { service: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <span className="font-serif text-base font-semibold text-foreground sm:text-lg">{BUSINESS.name}</span>

        <a
          href={PHONE_HREF}
          data-contact-location="funnel_header"
          data-contact-service={service}
          className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Phone className="size-4 text-accent" aria-hidden="true" />
          {/* Full number on desktop where there is room; the word "Call" on
              mobile, where the tap target matters more than the digits. */}
          <span className="hidden sm:inline">{BUSINESS.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  )
}
