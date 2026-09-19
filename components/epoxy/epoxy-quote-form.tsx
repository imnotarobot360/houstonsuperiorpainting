"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { EPOXY, GARAGE_SIZES, SERVICE_AREAS } from "@/lib/epoxy"
import { WEB3FORMS_ACCESS_KEY } from "@/lib/quote-submit"

const PROJECT_TYPES = [
  "Garage Epoxy",
  "Commercial / Warehouse",
  "Metallic Epoxy",
  "Patio / Pool Deck",
  "Concrete Repair",
  "Not sure yet",
]

type Status = "idle" | "submitting" | "success" | "error"

export function EpoxyQuoteForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // Client-side validation — clear messages beat a generic browser tooltip.
    const name = String(data.get("name") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()
    const digits = phone.replace(/\D/g, "")

    if (name.length < 2) {
      setError("Please enter your name.")
      return
    }
    if (digits.length < 10) {
      setError("Please enter a valid 10-digit phone number.")
      return
    }

    setError(null)
    setStatus("submitting")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Epoxy Quote Request — ${name}`,
          from_name: "Houston Superior Epoxy Website",
          lead_source: "epoxy_subdomain",
          ...Object.fromEntries(data.entries()),
        }),
      })

      // Web3Forms signals failure in the body, not just the status code.
      const result = await res.json()
      if (!res.ok || !result.success) {
        throw new Error(result?.message || `Request failed (${res.status})`)
      }
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setError(
        "Something went wrong sending your request. Please call us instead and we'll take the details over the phone.",
      )
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-sm border border-primary/40 bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden />
        <h3 className="mt-5 font-manrope text-2xl font-extrabold uppercase tracking-tight text-card-foreground">
          Request Received
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          We&apos;ll call you within one business day to schedule your free on-site estimate. If you&apos;d rather not
          wait, call us now.
        </p>
        <a
          href={EPOXY.phoneHref}
          className="mt-6 inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3.5 font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Call {EPOXY.phoneDisplay}
        </a>
      </div>
    )
  }

  const fieldCls =
    "w-full rounded-sm border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary"
  const labelCls = "mb-2 block text-sm font-bold uppercase tracking-wider text-muted-foreground"

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-sm border border-border bg-card p-6 md:p-8">
      {/* Honeypot — bots fill this, humans never see it. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="epoxy-name" className={labelCls}>
              Name
            </label>
            <input id="epoxy-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldCls} />
          </div>
          <div className="flex-1">
            <label htmlFor="epoxy-phone" className={labelCls}>
              Phone
            </label>
            <input id="epoxy-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(713) 555-0100" className={fieldCls} />
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="epoxy-email" className={labelCls}>
              Email <span className="font-normal normal-case">(optional)</span>
            </label>
            <input id="epoxy-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" className={fieldCls} />
          </div>
          <div className="flex-1">
            <label htmlFor="epoxy-city" className={labelCls}>
              City
            </label>
            <select id="epoxy-city" name="city" defaultValue="" className={fieldCls}>
              <option value="">Select your area</option>
              {SERVICE_AREAS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
              <option value="Other">Other / not listed</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="epoxy-project" className={labelCls}>
              Project type
            </label>
            <select id="epoxy-project" name="project_type" defaultValue={PROJECT_TYPES[0]} className={fieldCls}>
              {PROJECT_TYPES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="epoxy-size" className={labelCls}>
              Approximate size
            </label>
            <select id="epoxy-size" name="size" defaultValue={GARAGE_SIZES[1].label} className={fieldCls}>
              {GARAGE_SIZES.map((s) => (
                <option key={s.id} value={`${s.label} (~${s.sqft} sq ft)`}>
                  {s.label} (~{s.sqft} sq ft)
                </option>
              ))}
              <option value="Commercial / larger">Commercial or larger</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="epoxy-details" className={labelCls}>
            Tell us about the slab <span className="font-normal normal-case">(optional)</span>
          </label>
          <textarea
            id="epoxy-details"
            name="details"
            rows={3}
            placeholder="Cracks, oil stains, existing coating, timeline…"
            className={`${fieldCls} resize-y`}
          />
        </div>

        {error && (
          <p role="alert" className="rounded-sm border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            "Get My Free Estimate"
          )}
        </button>

        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          No payment due until the floor is finished and you&apos;ve signed off. We&apos;ll never share your details.
        </p>
      </div>
    </form>
  )
}
