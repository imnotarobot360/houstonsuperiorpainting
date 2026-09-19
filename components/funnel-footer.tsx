import Link from "next/link"
import { BUSINESS } from "@/lib/business"

/**
 * Minimal legal footer for the paid `/chatgpt/*` landing pages.
 *
 * Replaces the 240-line site footer, which carried the full service list, city
 * list and sitemap — dozens of ways off a page that cost money to land on.
 *
 * The legal links stay. They are not optional: Google Ads and the OpenAI ad
 * review process both expect a reachable privacy policy, and removing them to
 * chase a marginal conversion lift is how a campaign gets disapproved. Anything
 * beyond privacy, terms and the business identity is what got stripped.
 *
 * No phone link here — the header already has one and it is sticky, so a second
 * tracked number this far down the page would only split the attribution.
 */
export function FunnelFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {BUSINESS.name}
        </p>

        <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Terms &amp; Conditions
          </Link>
        </nav>
      </div>
    </footer>
  )
}
