import Image from "next/image"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { LandingViewTracker } from "@/components/landing-view-tracker"
import { FreeEstimateForm } from "@/components/free-estimate/free-estimate-form"
import { EstimateBookingFlow } from "@/components/estimate-booking-flow"
import { PriceTable } from "@/components/aeo/blocks"
import { BUSINESS, PHONE_HREF, PRICES_2026, PRICING_DISCLAIMER, publicAddressLine } from "@/lib/business"
import { FREE_ESTIMATE_COPY, FREE_ESTIMATE_PATHS, SERVICE_AREA_LINE, type Lang } from "@/lib/free-estimate-copy"

/**
 * Free written estimate ad landing page (owner brief 2026-11-18). Lives under
 * /offer/ so it is noindex, out of the sitemap and free of the exit modal and
 * chat bubble (lib/focused-routes.ts). Booking buttons go to the InsightPaint
 * scheduler; the form posts to /api/leads (see FreeEstimateForm).
 */

const OFFICE_ORDER = ["cypress-huffmeister", "houston-bissonnet", "katy-fm1463", "sugar-land-university", "magnolia-cottontop"]

const HOURS_ES: Record<string, string> = { "Mon–Fri": "Lun–Vie", Saturday: "Sábado", Sunday: "Domingo", Closed: "Cerrado" }

export function FreeEstimateLanding({ lang }: { lang: Lang }) {
  const t = FREE_ESTIMATE_COPY[lang]
  const other: Lang = lang === "en" ? "es" : "en"
  // English books on-page with the tracked booking flow, so Google Ads sees the
  // appointment_booked conversion; the Spanish page keeps the InsightPaint link.
  const onPage = lang === "en"
  const book = onPage ? "#estimate-funnel" : BUSINESS.scheduler.embedUrl
  const ext = onPage ? {} : { target: "_blank", rel: "noopener" }
  const offices = [...BUSINESS.locations].sort((a, b) => {
    const ia = OFFICE_ORDER.indexOf(a.slug)
    const ib = OFFICE_ORDER.indexOf(b.slug)
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
  })

  const cta =
    "inline-flex min-h-[52px] items-center justify-center rounded-lg bg-secondary px-6 text-[17px] font-bold text-secondary-foreground hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
  const h2 = "font-display text-[clamp(26px,4vw,34px)] leading-tight text-midnight"

  return (
    <div lang={lang === "es" ? "es-US" : "en-US"} className="bg-soft-white pb-20 text-foreground md:pb-0">
      <LandingViewTracker service="free" />

      <header className="bg-midnight text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <Image src="/images/logo-dark.png" alt={BUSINESS.name} width={127} height={48} priority className="h-10 w-auto sm:h-12" />
          <div className="flex items-center gap-2.5">
            <Link
              href={FREE_ESTIMATE_PATHS[other]}
              hrefLang={other === "es" ? "es-US" : "en-US"}
              aria-label={t.otherLangLabel}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/40 px-3 text-sm font-bold hover:bg-white/10"
            >
              {t.otherLang}
            </Link>
            <a
              href={PHONE_HREF}
              data-contact-location="offer_header"
              data-contact-service="free"
              className="hidden min-h-11 items-center rounded-lg border border-white px-4 text-[15px] font-semibold hover:bg-white/10 sm:inline-flex"
            >
              {t.call}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-midnight text-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-10 px-5 pb-16 pt-10">
            <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
              <p className="font-manrope text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">{t.eyebrow}</p>
              <h1 className="font-display text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.1] text-balance">{t.h1}</h1>
              <p className="text-lg leading-relaxed text-white/85">{t.sub}</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href={book} {...ext} className={cta}>
                  {t.cta}
                </a>
                <a href="#estimate-form" className="text-[15px] font-medium text-white underline-offset-4 hover:underline">
                  {t.cta2}
                </a>
              </div>
            </div>
            {onPage ? (
              <div className="w-full min-w-0 flex-[1_1_360px] text-foreground">
                <EstimateBookingFlow />
              </div>
            ) : (
              <Image
                src="/images/blog/choose-best-painters-houston.jpg"
                alt={t.heroAlt}
                width={1024}
                height={1024}
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="aspect-[4/3] w-full min-w-0 flex-[1_1_360px] rounded-xl object-cover"
              />
            )}
          </div>
        </section>

        <section className="border-b border-border bg-white">
          <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.trust.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] font-semibold leading-snug">
                <ShieldCheck className="h-7 w-7 flex-none text-midnight" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {onPage && (
          <section className="mx-auto flex max-w-[820px] flex-col gap-3 px-5 pt-14">
            <h2 className={h2}>What painting costs in Houston</h2>
            <PriceTable
              head={["Project", "Typical range"]}
              rows={[
                ["Interior, one room (walls)", PRICES_2026.singleRoom],
                ["Interior, per sq ft of floor area", PRICES_2026.interiorPerSqFt],
                ["Whole interior, 2,000 sq ft home", PRICES_2026.fullInterior2000],
                ["Kitchen cabinets", PRICES_2026.cabinetsPerKitchen],
                ["Exterior, typical home (example)", PRICES_2026.exteriorPerHome],
              ]}
              note={PRICING_DISCLAIMER}
            />
            <a href="#estimate-funnel" className="font-semibold text-midnight underline underline-offset-4">
              Get your exact price: book a free written estimate
            </a>
          </section>
        )}

        <section className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-16">
          <h2 className={h2}>{t.whyTitle}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.benefits.map((b) => (
              <div key={b.title} className="flex flex-col gap-2.5 rounded-xl border border-border bg-white p-6">
                <h3 className="font-display text-[19px] text-midnight">{b.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16">
            <h2 className={h2}>{t.servicesTitle}</h2>
            <ul className="flex flex-wrap gap-2.5">
              {t.services.map((s) => (
                <li key={s} className="rounded-full bg-champagne px-4 py-2.5 text-[15px] font-semibold text-midnight">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-16">
          <h2 className={h2}>{t.processTitle}</h2>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((s, i) => (
              <li key={s.title} className="flex flex-col gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-midnight font-bold text-white" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg text-midnight">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="estimate-form" className="scroll-mt-4 bg-midnight">
          <div className="mx-auto max-w-[720px] px-5 py-16">
            <FreeEstimateForm lang={lang} />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-12">
            <h2 className="font-display text-2xl text-midnight">{t.areaTitle}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{SERVICE_AREA_LINE}</p>
          </div>
        </section>

        <section className="mx-auto flex max-w-[820px] flex-col gap-3.5 px-5 py-16">
          <h2 className={`${h2} mb-2`}>{t.faqTitle}</h2>
          {t.faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-border bg-white px-5 py-4">
              <summary className="cursor-pointer text-base font-bold text-midnight">{f.q}</summary>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </section>

        <section className="bg-midnight text-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-14">
            <h2 className="flex-[1_1_420px] font-display text-[28px] leading-tight">{t.finalTitle}</h2>
            <a href={book} {...ext} className={cta}>
              {t.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#14181f] text-[#bfc3c7]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 pb-8 pt-12">
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div className="flex flex-[1_1_260px] flex-col gap-3.5">
              <Image src="/images/logo-dark.png" alt={BUSINESS.name} width={220} height={83} className="h-auto w-[220px]" />
              <p className="text-sm leading-relaxed text-[#e7e2d7]">{t.eyebrow}</p>
              <p className="text-[13px]">{t.founded}</p>
            </div>
            <div className="flex flex-[1_1_220px] flex-col gap-2.5 text-sm leading-relaxed">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-gold">{t.contactTitle}</p>
              <a href={PHONE_HREF} data-contact-location="offer_footer" data-contact-service="free" className="text-[17px] font-semibold text-white no-underline">
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="text-[#e7e2d7] underline">
                {BUSINESS.email}
              </a>
              <ul>
                {BUSINESS.hoursSummary.map((h) => (
                  <li key={h.label}>
                    {lang === "es" ? (HOURS_ES[h.label] ?? h.label) : h.label}: {lang === "es" ? (HOURS_ES[h.value] ?? h.value) : h.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-[2_1_320px] flex-col gap-2.5">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-gold">{t.officesTitle}</p>
              <ul className="grid gap-x-6 gap-y-3 text-sm leading-relaxed sm:grid-cols-2">
                {offices.map((o) => {
                  const address = publicAddressLine(o)
                  if (!address) return null
                  const name = lang === "es" && o.slug === "cypress-huffmeister" ? "Cypress (oficina principal)" : o.label
                  return (
                    <li key={o.slug}>
                      <strong className="text-white">{name}</strong>
                      <br />
                      {address}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[#2b2f36] pt-4 text-xs">
            <span>© {BUSINESS.name}</span>
            <Link href="/privacy-policy" className="underline">
              {t.privacy}
            </Link>
          </div>
        </div>
      </footer>

      {/* Phones: book and call stay one tap away. */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-border bg-white px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 md:hidden">
        <a href={book} {...ext} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-secondary text-[15px] font-bold text-secondary-foreground">
          {t.stickyBook}
        </a>
        <a
          href={PHONE_HREF}
          data-contact-location="offer_sticky"
          data-contact-service="free"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-midnight text-[15px] font-bold text-white"
        >
          {t.stickyCall}
        </a>
      </div>
    </div>
  )
}
