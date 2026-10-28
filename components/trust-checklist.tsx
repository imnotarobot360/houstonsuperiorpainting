import Link from "next/link"
import { Check } from "lucide-react"
import { BUSINESS } from "@/lib/business"

// Verified trust items only (owner-confirmed 2026-10-08 and 2026-10-10).
// Do not add ratings, awards, memberships or certifications here.
export const INSURANCE_PATH = "/insurance-and-warranty"
export const INSURANCE_REQUEST_PATH = "/insurance-and-warranty#request-proof-of-insurance"

// One insurance line only (owner brief 2026-10-27: the Cypress page showed
// "Current proof of insurance…" and "Proof of insurance…" side by side).
const ITEMS = [
  `${BUSINESS.trust.warrantyYears}-year written workmanship warranty on qualifying painting projects`,
  BUSINESS.insurance.short,
  "Certificate of insurance for approved projects when required",
  "Written estimate with scope, total price, deposit and payment schedule",
  "Clear product specifications",
  "Final walkthrough",
]

export function TrustChecklist({ className = "" }: { className?: string }) {
  return (
    <section aria-label="What to expect from us" className={`container mx-auto px-4 max-w-4xl mb-14 ${className}`}>
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">What to expect from us</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-base text-foreground">
              <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold">
          <Link href="/warranty" className="text-primary underline underline-offset-2">
            Review Our {BUSINESS.trust.warrantyYears}-Year Written Warranty
          </Link>
          <Link href={INSURANCE_REQUEST_PATH} className="text-primary underline underline-offset-2">
            Request Proof of Insurance
          </Link>
        </div>
      </div>
    </section>
  )
}
