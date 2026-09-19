// Quote request validation + submission.
//
// NOTE: Web3Forms' free plan rejects server-side POSTs ("This method is not
// allowed. Use our API in client side...") and requires Pro for server IPs.
// So the submit must run from the browser. The access key is a public
// publishable key by design, so exposing it client-side is expected.

export const WEB3FORMS_ACCESS_KEY = "352cc560-36e5-4761-b857-cecb95368b17"

export interface QuoteRequest {
  service: string
  propertyType: string
  scope: string
  timeline: string
  name: string
  phone: string
  email: string
  zip: string
  details?: string
  smsConsent: boolean
  /** Estimate range carried over from the calculator, if any. */
  estimateRange?: string
  /** Which page / component the lead came from. */
  source?: string
  /** Campaign / click attribution, pre-formatted for the notification email. */
  attribution?: string
}

export type SubmitResult = { success: true } | { success: false; error: string }

/** Shared validation so the same rules apply wherever a quote is submitted. */
export function validateQuoteRequest(payload: QuoteRequest): string | null {
  if (!payload.service.trim()) return "Please choose a service."
  if (!payload.name.trim()) return "Please enter your name."
  if (payload.phone.replace(/\D/g, "").length < 10)
    return "Please enter a valid 10-digit phone number."
  if (!payload.zip.trim()) return "Please enter your ZIP code."
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
    return "Please enter a valid email address."
  return null
}

export async function submitQuoteRequest(payload: QuoteRequest): Promise<SubmitResult> {
  const invalid = validateQuoteRequest(payload)
  if (invalid) return { success: false, error: invalid }

  try {
    const data = new FormData()
    data.append("access_key", WEB3FORMS_ACCESS_KEY)
    data.append("subject", `New Quote Request: ${payload.service} — ${payload.zip}`)
    data.append("from_name", "Houston Superior Painting Website")
    data.append("name", payload.name)
    data.append("email", payload.email || "not-provided@houstonsuperiorpainting.com")
    data.append("phone", payload.phone)
    data.append("zip_code", payload.zip)
    data.append("service_requested", payload.service)
    data.append("property_type", payload.propertyType)
    data.append("project_scope", payload.scope)
    data.append("timeline", payload.timeline)
    if (payload.estimateRange) data.append("calculator_estimate", payload.estimateRange)
    if (payload.details) data.append("project_details", payload.details)
    data.append("sms_consent", payload.smsConsent ? "Yes" : "No")
    data.append("lead_source", payload.source || "quote_form")
    // Lets the office see which ad or campaign produced the lead without
    // cross-referencing analytics.
    if (payload.attribution) data.append("attribution", payload.attribution)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    })
    const result = await response.json()

    if (!result.success) {
      return {
        success: false,
        error: result.message || "Failed to send your request. Please call us instead.",
      }
    }
    return { success: true }
  } catch (error) {
    console.error("[v0] Quote submit failed:", error)
    return {
      success: false,
      error: "Network error. Please call (346) 594-5960 and we'll take your details.",
    }
  }
}
