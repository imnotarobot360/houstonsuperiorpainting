import { formatAttribution, getAttribution } from "@/lib/attribution"
import { WEB3FORMS_ACCESS_KEY } from "@/lib/quote-submit"

/**
 * Office notification for a lead that is ALREADY saved by /api/leads.
 *
 * Has to run in the browser: Web3Forms' free plan rejects server IPs (see
 * lib/quote-submit.ts). On success it flags the lead as emailed; if it never
 * succeeds, the ERP's missed-lead alert texts the owner instead. Never throws:
 * the customer must not see an error for an internal notification.
 */
export async function notifyOfficeOfLead(opts: {
  publicToken: string
  subject: string
  name: string
  phone: string
  email?: string
  fields: Record<string, string | undefined>
}) {
  try {
    const data = new FormData()
    data.append("access_key", WEB3FORMS_ACCESS_KEY)
    data.append("subject", opts.subject)
    data.append("from_name", "Houston Superior Painting Website")
    data.append("name", opts.name)
    data.append("email", opts.email || "not-provided@houstonsuperiorpainting.com")
    data.append("phone", opts.phone)
    for (const [k, v] of Object.entries(opts.fields)) if (v) data.append(k, v)
    data.append("attribution", formatAttribution(getAttribution()))
    data.append("lead_record", `${window.location.origin}/estimate/confirmed/${opts.publicToken}`)

    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
    const result = (await res.json()) as { success?: boolean }
    if (result.success) {
      await fetch("/api/leads/mark-emailed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicToken: opts.publicToken }),
      })
    }
  } catch (err) {
    console.error("[lead-notify] office notification failed:", err)
  }
}

/** (346) 594-5960 style, as the user types. Keeps at most 10 digits. */
export function formatUsPhone(input: string) {
  const d = input.replace(/\D/g, "").replace(/^1(?=\d{10})/, "").slice(0, 10)
  if (d.length < 4) return d
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

export function isValidUsPhone(input: string) {
  return input.replace(/\D/g, "").replace(/^1(?=\d{10})/, "").length === 10
}
