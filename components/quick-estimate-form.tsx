"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { CheckCircle2, CalendarDays, Phone } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { trackEvent, trackLeadCreated } from "@/lib/analytics"
import { getAttribution } from "@/lib/attribution"
import { CONTACT_METHODS, ES_LABELS, QUICK_PROJECT_TYPES, TIMEFRAMES } from "@/lib/lead-forms"
import { formatUsPhone, isValidUsPhone, notifyOfficeOfLead } from "@/lib/lead-notify"

/**
 * Three-field quick estimate (owner brief 2026-10-14): name, phone, project
 * type. Saves through /api/leads like the funnels (database row, office email,
 * missed-lead alert, conversion tracking). After it succeeds the customer can
 * optionally add email, address, timeframe, description, contact preference
 * and photos. Photos go to private storage via /api/leads/photos and are never
 * public. No response time is promised: none is approved.
 *
 * `location` names where the form sits, for analytics.
 * `tone="dark"` is for use on the dark hero.
 */
type Props = {
  location: string
  heading?: string
  defaultProjectType?: string
  colorName?: string
  tone?: "light" | "dark"
  className?: string
  /** "es" shows Spanish labels; stored values stay English, language is recorded. */
  lang?: "en" | "es"
}

const MAX_PHOTOS = 6

const TEXT = {
  en: {
    heading: "Get a free written estimate",
    name: "Name",
    phone: "Phone number",
    type: "Project type",
    choose: "Choose a project type…",
    chooseShort: "Choose…",
    sms: "Text me about my estimate. Message rates may apply; reply STOP any time.",
    submit: "Request My Free Estimate",
    sending: "Sending…",
    fine1: "Free written estimate. A member of our team will contact you to discuss the project. By submitting, you agree that we may call you about your request. See our",
    privacy: "privacy policy",
    errName: "Please enter your name.",
    errPhone: "Please enter a 10-digit phone number.",
    errType: "Please choose a project type.",
    errGeneric: "Something went wrong. Please call us instead.",
    thanks: (n: string) => `Thank you${n ? `, ${n}` : ""}. Your request was received.`,
    contact: "A member of our team will contact you to discuss the project.",
    added: "Thanks, your details were added to the request.",
    more: "Optional: tell us more so we can prepare",
    email: "Email",
    address: "Project address",
    timeframe: "Desired timeframe",
    method: "Preferred contact method",
    desc: "Project description",
    photos: (n: number) => `Photos (up to ${n}, private)`,
    photosNote: "Photos are stored privately and only our team can see them.",
    addDetails: "Add details",
    saving: "Saving…",
    book: "Book an Appointment",
  },
  es: {
    heading: "Pida su estimado gratis",
    name: "Nombre",
    phone: "Teléfono",
    type: "Tipo de proyecto",
    choose: "Elija un tipo de proyecto…",
    chooseShort: "Elija…",
    sms: "Envíenme mensajes de texto sobre mi estimado. Pueden aplicar cargos; responda STOP en cualquier momento.",
    submit: "Pedir mi estimado gratis",
    sending: "Enviando…",
    fine1: "Estimado por escrito gratis. Un miembro de nuestro equipo le contactará para hablar del proyecto. Al enviar, acepta que le llamemos sobre su solicitud. Vea nuestra",
    privacy: "política de privacidad (en inglés)",
    errName: "Por favor escriba su nombre.",
    errPhone: "Por favor escriba un teléfono de 10 dígitos.",
    errType: "Por favor elija un tipo de proyecto.",
    errGeneric: "Algo salió mal. Por favor llámenos.",
    thanks: (n: string) => `Gracias${n ? `, ${n}` : ""}. Recibimos su solicitud.`,
    contact: "Un miembro de nuestro equipo le contactará para hablar del proyecto.",
    added: "Gracias, agregamos sus datos a la solicitud.",
    more: "Opcional: cuéntenos más para prepararnos",
    email: "Correo electrónico",
    address: "Dirección del proyecto",
    timeframe: "¿Para cuándo lo necesita?",
    method: "¿Cómo prefiere que le contactemos?",
    desc: "Descripción del proyecto",
    photos: (n: number) => `Fotos (hasta ${n}, privadas)`,
    photosNote: "Las fotos se guardan de forma privada y solo nuestro equipo puede verlas.",
    addDetails: "Agregar datos",
    saving: "Guardando…",
    book: "Agendar una cita",
  },
}

export function QuickEstimateForm({
  location,
  heading,
  defaultProjectType = "",
  colorName,
  tone = "light",
  className = "",
  lang = "en",
}: Props) {
  const t = TEXT[lang]
  const opt = (v: string) => (lang === "es" ? ES_LABELS[v] ?? v : v)
  const title = heading ?? t.heading
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [projectType, setProjectType] = useState(defaultProjectType)
  const [smsConsent, setSmsConsent] = useState(false)
  const [hp, setHp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const started = useRef(false)

  // Step 2 (optional details)
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [timeframe, setTimeframe] = useState("")
  const [description, setDescription] = useState("")
  const [contactMethod, setContactMethod] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [detailsState, setDetailsState] = useState<"idle" | "saving" | "done" | "error">("idle")
  const [detailsError, setDetailsError] = useState<string | null>(null)

  const dark = tone === "dark"
  const card = dark ? "bg-midnight/80 border-gold/40 text-soft-white backdrop-blur" : "bg-card border-border text-foreground"
  const input =
    "w-full rounded-lg border px-3 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
    (dark ? "border-soft-white/30 bg-midnight/60 text-soft-white placeholder:text-soft-white/50" : "border-border bg-background text-foreground")
  const muted = dark ? "text-soft-white/75" : "text-muted-foreground"
  const id = (s: string) => `qe-${location}-${s}`

  function markStarted() {
    if (started.current) return
    started.current = true
    trackEvent("quick_estimate_start", { form_location: location })
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (name.trim().length < 2) return fail(t.errName)
    if (!isValidUsPhone(phone)) return fail(t.errPhone)
    if (!projectType) return fail(t.errType)

    setSubmitting(true)
    try {
      const body = new FormData()
      body.set("service", "quick")
      body.set("name", name.trim())
      body.set("phone", phone)
      body.set("smsConsent", String(smsConsent))
      body.set("website", hp)
      body.set("answers", JSON.stringify({ projectType, ...(colorName ? { colorName } : {}), ...(lang === "es" ? { language: "Spanish" } : {}) }))
      body.set("attribution", JSON.stringify({ ...getAttribution(), formLocation: location }))
      const res = await fetch("/api/leads", { method: "POST", body })
      const data = (await res.json()) as { ok?: boolean; publicToken?: string | null; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || "We couldn't send that. Please call us instead.")
      if (!data.publicToken) {
        // Honeypot tripped: show success, store nothing.
        setToken("hidden")
        return
      }
      setToken(data.publicToken)
      void notifyOfficeOfLead({
        publicToken: data.publicToken,
        subject: `New Quick Estimate Request: ${projectType}${lang === "es" ? " (SPANISH)" : ""}`,
        name: name.trim(),
        phone,
        fields: { service_requested: projectType, color_selected: colorName, preferred_language: lang === "es" ? "Spanish" : undefined, form_location: location, sms_consent: smsConsent ? "Yes" : "No" },
      })
      trackEvent("quick_estimate_submit", { form_location: location, project_type: projectType })
      void trackLeadCreated({
        formName: "quick estimate",
        eventId: data.publicToken,
        gaParams: { service: "quick", project_type: projectType, form_location: location, value: 1 },
      })
    } catch (err) {
      fail(err instanceof Error ? err.message : t.errGeneric)
    } finally {
      setSubmitting(false)
    }
  }

  function fail(message: string) {
    setError(message)
    trackEvent("quick_estimate_error", { form_location: location, error: message.slice(0, 80) })
  }

  async function sendDetails(e: React.FormEvent) {
    e.preventDefault()
    if (!token || token === "hidden") return setDetailsState("done")
    setDetailsState("saving")
    setDetailsError(null)
    try {
      const res = await fetch("/api/leads/details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicToken: token, email, address, answers: { timeframe, description, contactMethod } }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || "We couldn't save those details.")

      if (files.length) {
        const fd = new FormData()
        fd.set("publicToken", token)
        for (const f of files.slice(0, MAX_PHOTOS)) fd.append("photos", f)
        const pr = await fetch("/api/leads/photos", { method: "POST", body: fd })
        const pd = (await pr.json()) as { ok?: boolean; error?: string }
        if (!pr.ok || !pd.ok) throw new Error(pd.error || "Your details were saved, but the photos didn't upload.")
        trackEvent("estimate_photo_upload", { form_location: location, count: files.length })
      }
      setDetailsState("done")
    } catch (err) {
      setDetailsError(err instanceof Error ? err.message : "Something went wrong.")
      setDetailsState("error")
    }
  }

  if (token) {
    return (
      <div className={`rounded-2xl border p-5 sm:p-6 shadow-sm ${card} ${className}`} role="status" aria-live="polite">
        <p className="flex items-center gap-2 font-semibold">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden="true" />
          {t.thanks(name.trim().split(" ")[0])}
        </p>
        <p className={`mt-2 text-sm ${muted}`}>{t.contact}</p>

        {detailsState === "done" ? (
          <p className={`mt-4 text-sm ${muted}`}>{t.added}</p>
        ) : (
          <form onSubmit={sendDetails} className="mt-5 space-y-3" aria-label="Optional project details">
            <p className="text-sm font-semibold">{t.more}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor={id("email")} className="mb-1 block text-sm">{t.email}</label>
                <input id={id("email")} name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
              </div>
              <div>
                <label htmlFor={id("address")} className="mb-1 block text-sm">{t.address}</label>
                <input id={id("address")} name="address" autoComplete="street-address" value={address} onChange={(e) => setAddress(e.target.value)} className={input} />
              </div>
              <div>
                <label htmlFor={id("timeframe")} className="mb-1 block text-sm">{t.timeframe}</label>
                <select id={id("timeframe")} name="timeframe" value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className={input}>
                  <option value="">{t.chooseShort}</option>
                  {TIMEFRAMES.map((v) => <option key={v} value={v}>{opt(v)}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor={id("contact")} className="mb-1 block text-sm">{t.method}</label>
                <select id={id("contact")} name="contactMethod" value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} className={input}>
                  <option value="">{t.chooseShort}</option>
                  {CONTACT_METHODS.map((v) => <option key={v} value={v}>{opt(v)}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor={id("desc")} className="mb-1 block text-sm">{t.desc}</label>
              <textarea id={id("desc")} name="description" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className={input} />
            </div>
            <div>
              <label htmlFor={id("photos")} className="mb-1 block text-sm">{t.photos(MAX_PHOTOS)}</label>
              <input
                id={id("photos")}
                name="photos"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files ?? []).slice(0, MAX_PHOTOS))}
                className={`block w-full text-sm ${muted}`}
              />
              <p className={`mt-1 text-xs ${muted}`}>{t.photosNote}</p>
            </div>
            {detailsError && <p className="text-sm text-red-500" role="alert">{detailsError}</p>}
            <button
              type="submit"
              disabled={detailsState === "saving"}
              className="w-full rounded-lg bg-secondary px-5 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90 disabled:opacity-60"
            >
              {detailsState === "saving" ? t.saving : t.addDetails}
            </button>
          </form>
        )}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            href={BUSINESS.scheduler.embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-contact-location={`${location}_success`}
            className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-gold" : "border-border"}`}
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" /> {t.book}
          </a>
          <a
            href={PHONE_HREF}
            data-contact-location={`${location}_success`}
            className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${dark ? "border-soft-white/30" : "border-border"}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    )
  }

  return (
    // method/action make the form work without JavaScript: /api/leads answers a
    // plain HTML post with a redirect (owner brief 2026-10-27). With JavaScript,
    // submit() takes over and posts with fetch exactly as before.
    <form
      method="post"
      action="/api/leads"
      encType="multipart/form-data"
      onSubmit={submit}
      onFocus={markStarted}
      noValidate
      className={`rounded-2xl border p-5 sm:p-6 shadow-sm ${card} ${className}`}
      aria-label={title}
    >
      <p className="font-display text-xl sm:text-2xl">{title}</p>
      <input type="hidden" name="service" value="quick" />
      <input type="hidden" name="lang" value={lang} />
      <input type="hidden" name="formLocation" value={location} />
      {colorName && <input type="hidden" name="colorName" value={colorName} />}
      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor={id("name")} className="mb-1 block text-sm font-medium">{t.name}</label>
          <input id={id("name")} name="name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={input} />
        </div>
        <div>
          <label htmlFor={id("phone")} className="mb-1 block text-sm font-medium">{t.phone}</label>
          <input
            id={id("phone")}
            name="phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(346) 555-0123"
            value={phone}
            onChange={(e) => setPhone(formatUsPhone(e.target.value))}
            className={input}
          />
        </div>
        <div>
          <label htmlFor={id("type")} className="mb-1 block text-sm font-medium">{t.type}</label>
          <select id={id("type")} name="projectType" required value={projectType} onChange={(e) => setProjectType(e.target.value)} className={input}>
            <option value="">{t.choose}</option>
            {QUICK_PROJECT_TYPES.map((v) => <option key={v} value={v}>{opt(v)}</option>)}
          </select>
        </div>
        {/* Honeypot: hidden from people and assistive tech, filled by bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={id("website")}>Website</label>
          <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
        </div>
        <label className={`flex cursor-pointer items-start gap-2 text-xs leading-relaxed ${muted}`}>
          <input type="checkbox" name="smsConsent" value="true" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0" />
          <span>{t.sms}</span>
        </label>
      </div>

      {error && <p className="mt-3 text-sm text-red-500" role="alert">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 w-full rounded-lg bg-secondary px-5 py-3.5 font-semibold text-secondary-foreground hover:bg-secondary/90 disabled:opacity-60"
      >
        {submitting ? t.sending : t.submit}
      </button>
      <p className={`mt-3 text-xs leading-relaxed ${muted}`}>
        {t.fine1}{" "}
        <Link href="/privacy-policy" className="underline">{t.privacy}</Link>.
      </p>
    </form>
  )
}
