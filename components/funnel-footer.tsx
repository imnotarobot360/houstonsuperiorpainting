import Image from "next/image"
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
 *
 * `tone="midnight"` matches the dark /offer/free-estimate footer (logo not
 * linked); the default stays the light footer of the other /chatgpt funnels.
 */
export function FunnelFooter({ tone = "light" }: { tone?: "light" | "midnight" }) {
  const year = new Date().getFullYear()
  const dark = tone === "midnight"
  const link = dark
    ? "text-sm text-[#bfc3c7] underline underline-offset-4 hover:text-white"
    : "text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"

  return (
    <footer className={dark ? "bg-[#14181f] text-[#bfc3c7]" : "border-t border-border bg-card"}>
      {dark && (
        <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
          <Image src="/images/logo-dark.png" alt={BUSINESS.name} width={220} height={83} className="h-auto w-[180px] sm:w-[220px]" />
        </div>
      )}
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 ${dark ? "mt-6 border-t border-[#2b2f36]" : ""}`}
      >
        <p className={dark ? "text-sm" : "text-sm text-muted-foreground"}>
          &copy; {year} {BUSINESS.name}
        </p>

        <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/privacy-policy" className={link}>
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className={link}>
            Terms &amp; Conditions
          </Link>
        </nav>
      </div>
    </footer>
  )
}
