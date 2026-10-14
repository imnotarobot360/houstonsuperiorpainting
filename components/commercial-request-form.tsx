"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { trackEvent, trackLeadCreated } from "@/lib/analytics"
import { getAttribution } from "@/lib/attribution"
import { COMMERCIAL_PROPERTY_TYPES, CONTACT_METHODS } from "@/lib/lead-forms"
import { formatUsPhone, isValidUsPhone, notifyOfficeOfLead } from "@/lib/lead-notify"

/**
 * Commercial painting request (owner brief 2026-10-14). One form, saved through
 * /api/leads as service "commercial" with photos in private storage, then the
 * office email from the browser. Documents (PDF specs, plans) are not accepted
 * yet: the lead photo store only takes images. Customers are told to email them.
 */
const MAX_PHOTOS = 6

export function CommercialRequestForm({ location = "commercial_page" }: { location?: string }) {
  const [f, setF] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    address: "",
    propertyType: "",
    squareFootage: "",
    occupancy: "",
    schedule: "",
    description: "",
    contactMethod: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [hp, setHp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const started = useRef(false)
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: k === "phone" ? formatUsPhone(e.target.value) : e.target.value }))

  const input =
    "w-full rounded-lg border border-border bg-background px-3 py-3 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  const id = (s: string) => `cr-${s}`

  function fail(message: string) {
    setError(message)
    trackEvent("quick_estimate_error", { form_location: location, error: message.slice(0, 80) })
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (f.name.trim().length < 2) return fail("Please enter a contact name.")
    if (!isValidUsPhone(f.phone)) return fail("Please enter a 10-digit phone number.")
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) return fail("Please enter a valid email address.")
    if (!f.propertyType) return fail("Please choose a property type.")

    setSubmitting(true)
    try {
      const body = new FormData()
      body.set("service", "commercial")
      body.set("name", f.name.trim())
      body.set("phone", f.phone)
      body.set("email", f.email.trim())
      body.set("address", f.address.trim())
      body.set("website", hp)
      body.set(
        "answers",
        JSON.stringify({
          company: f.company,
          propertyType: f.propertyType,
          squareFootage: f.squareFootage,
          occupancy: f.occupancy,
          schedule: f.schedule,
          description: f.description,
          contactMethod: f.contactMethod,
        }),
      )
      body.set("attribution", JSON.stringify({ ...getAttribution(), formLocation: location }))
      for (const file of files.slice(0, MAX_PHOTOS)) body.append("photos", file)

      const res = await fetch("/api/leads", { method: "POST", body })
      const data = (await res.json()) as { ok?: boolean; publicToken?: string | null; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || "We couldn't send that. Please call us instead.")
      setDone(true)
      if (!data.publicToken) return

      void notifyOfficeOfLead({
        publicToken: data.publicToken,
        subject: `New Commercial Request: ${f.propertyType}${f.company ? ` — ${f.company}` : ""}`,
        name: f.name.trim(),
        phone: f.phone,
        email: f.email.trim(),
        fields: {
          service_requested: "Commercial painting",
          company: f.company,
          property_address: f.address,
          property_type: f.propertyType,
          square_footage: f.squareFootage,
          occupancy: f.occupancy,
          preferred_schedule: f.schedule,
          project_description: f.description,
          preferred_contact: f.contactMethod,
          photos_attached: String(files.length),
        },
      })
      trackEvent("quick_estimate_submit", { form_location: location, project_type: "Commercial Painting" })
      if (files.length) trackEvent("estimate_photo_upload", { form_location: location, count: files.length })
      void trackLeadCreated({
        formName: "commercial request",
        eventId: data.publicToken,
        email: f.email.trim() || undefined,
        gaParams: { service: "commercial", property_type: f.propertyType, form_location: location, value: 1 },
      })
    } catch (err) {
      fail(err instanceof Error ? err.message : "Something went wrong. Please call us instead.")
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6" role="status" aria-live="polite">
        <p className="flex items-center gap-2 font-semibold text-foreground">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden="true" /> Thank you. Your request was received.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          A member of our team will contact you to discuss the property and arrange a site walk.
        </p>
      </div>
    )
  }

  const field = (key: keyof typeof f, label: string, extra: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={id(key)} className="mb-1 block text-sm font-medium text-foreground">{label}</label>
      <input id={id(key)} value={f[key]} onChange={set(key)} className={input} {...extra} />
    </div>
  )

  return (
    <form
      onSubmit={submit}
      onFocus={() => {
        if (!started.current) {
          started.current = true
          trackEvent("quick_estimate_start", { form_location: location })
        }
      }}
      noValidate
      className="relative rounded-2xl border border-border bg-card p-5 sm:p-6"
      aria-label="Commercial painting request"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {field("name", "Contact name", { required: true, autoComplete: "name" })}
        {field("company", "Company", { autoComplete: "organization" })}
        {field("phone", "Phone", { required: true, type: "tel", inputMode: "tel", autoComplete: "tel" })}
        {field("email", "Email", { type: "email", autoComplete: "email" })}
        <div className="sm:col-span-2">{field("address", "Property address", { autoComplete: "street-address" })}</div>
        <div>
          <label htmlFor={id("propertyType")} className="mb-1 block text-sm font-medium text-foreground">Property type</label>
          <select id={id("propertyType")} required value={f.propertyType} onChange={set("propertyType")} className={input}>
            <option value="">Choose…</option>
            {COMMERCIAL_PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        {field("squareFootage", "Approximate square footage", { inputMode: "numeric" })}
        <div>
          <label htmlFor={id("occupancy")} className="mb-1 block text-sm font-medium text-foreground">Occupied or vacant</label>
          <select id={id("occupancy")} value={f.occupancy} onChange={set("occupancy")} className={input}>
            <option value="">Choose…</option>
            <option>Occupied</option>
            <option>Vacant</option>
          </select>
        </div>
        {field("schedule", "Preferred schedule", { placeholder: "e.g. weekends, after 6 pm, by March" })}
        <div className="sm:col-span-2">
          <label htmlFor={id("description")} className="mb-1 block text-sm font-medium text-foreground">Project description</label>
          <textarea id={id("description")} rows={4} value={f.description} onChange={set("description")} className={input} />
        </div>
        <div>
          <label htmlFor={id("contactMethod")} className="mb-1 block text-sm font-medium text-foreground">Preferred contact method</label>
          <select id={id("contactMethod")} value={f.contactMethod} onChange={set("contactMethod")} className={input}>
            <option value="">Choose…</option>
            {CONTACT_METHODS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={id("photos")} className="mb-1 block text-sm font-medium text-foreground">Photos (optional, private)</label>
          <input
            id={id("photos")}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setFiles(Array.from(e.target.files ?? []).slice(0, MAX_PHOTOS))}
            className="block w-full text-sm text-muted-foreground"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Up to {MAX_PHOTOS} images. Plans or specifications can be emailed after we contact you.
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      {error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-5 w-full rounded-lg bg-secondary px-5 py-3.5 font-semibold text-secondary-foreground hover:bg-secondary/90 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending…" : "Request a Commercial Proposal"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Free site walk and written proposal. By submitting, you agree that we may contact you about your request. See our{" "}
        <Link href="/privacy-policy" className="underline">privacy policy</Link>.
      </p>
    </form>
  )
}
