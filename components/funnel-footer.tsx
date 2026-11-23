import Image from "next/image"
import Link from "next/link"
import { BUSINESS } from "@/lib/business"
import { SHOWN_PROFILES } from "@/components/office-reviews"

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
// `googleProfiles` lists the five Google Business Profile links ("Our Google
// profiles"). The interior funnel moved them here so no outbound link sits
// above its estimator (owner brief 2026-11-22).
export function FunnelFooter({
  tone = "light",
  googleProfiles = false,
}: {
  tone?: "light" | "midnight"
  googleProfiles?: boolean
}) {
  const year = new Date().getFullYear()
  const dark = tone === "midnight"
  const link = dark
    ? "text-sm text-[#bfc3c7] underline underline-offset-4 hover:text-white"
    : "text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"

  return (
    <footer className={dark ? "bg-[#14181f] text-[#bfc3c7]" : "border-t border-border bg-card"}>
      {dark && (
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <Image src="/images/logo-dark.png" alt={BUSINESS.name} width={220} height={83} className="h-auto w-[180px] sm:w-[220px]" />
          {googleProfiles && SHOWN_PROFILES.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-gold">Our Google profiles</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {SHOWN_PROFILES.map((p) => (
                  <li key={p.url}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-gold">
                      {p.city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
