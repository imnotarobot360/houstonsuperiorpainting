// Shared building blocks for the AEO page skeletons (service, city, guide).
// Every money page renders the same pieces in the same order so a model finds
// the answer in the same place every time. See docs/aeo-seo-plan-2026-09.md.

import Link from "next/link"
import type { ReactNode } from "react"
import { Phone, MapPin, Clock, Star } from "lucide-react"
import {
  BUSINESS,
  PHONE_HREF,
  CORE_SERVICES,
  officeAddressLine,
  officeMapsUrl,
  type Office,
} from "@/lib/business"
import { AUTHOR_REF, PUBLISHER_REF, ownerPersonNode } from "@/components/structured-data"

export const SITE = BUSINESS.url
export const ESTIMATE_PATH = "/painting-estimate-houston"

/** Month the AEO rewrite shipped. Change when a page is materially updated. */
export const UPDATED_LABEL = "September 2026"
export const UPDATED_ISO = "2026-09-28"

// ─── Layout primitives ───────────────────────────────────────────────

export function PageHero({ h1, eyebrow, children }: { h1: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <section className="relative bg-midnight py-14 md:py-20">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container mx-auto px-4 max-w-4xl">
        {eyebrow && (
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-4">{eyebrow}</p>
        )}
        <h1 className="hero-h1 font-display text-4xl md:text-5xl font-bold text-soft-white text-balance leading-[1.1]">
          {h1}
        </h1>
        {children}
      </div>
    </section>
  )
}

/**
 * The 40–60 word Quick Answer. No heading: it is the first paragraph under the
 * H1. `.quick-answer` is the Speakable selector.
 */
export function QuickAnswer({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <p className="quick-answer text-lg md:text-xl leading-relaxed text-foreground border-l-4 border-gold bg-secondary/10 px-6 py-5 my-10 rounded-r-lg">
        {children}
      </p>
    </div>
  )
}

export function Section({ id, title, children, className = "" }: { id?: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`container mx-auto px-4 max-w-4xl mb-14 ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">{title}</h2>
      <div className="prose prose-lg max-w-none text-foreground/90 prose-a:text-primary prose-a:font-medium prose-strong:text-foreground">
        {children}
      </div>
    </section>
  )
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul>
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  )
}

export function Steps({ items }: { items: { title: string; text: ReactNode }[] }) {
  return (
    <ol>
      {items.map((s) => (
        <li key={s.title}>
          <strong>{s.title}</strong> — {s.text}
        </li>
      ))}
    </ol>
  )
}

export function PriceTable({ head, rows, note }: { head: string[]; rows: ReactNode[][]; note?: ReactNode }) {
  return (
    <div className="not-prose my-6">
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-base">
          <thead className="bg-midnight text-soft-white">
            <tr>
              {head.map((h) => (
                <th key={h} scope="col" className="px-4 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-border odd:bg-card">
                {r.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-4 py-3 font-medium text-foreground">
                      {c}
                    </th>
                  ) : (
                    <td key={j} className="px-4 py-3 text-foreground/90">
                      {c}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 text-sm text-muted-foreground">{note}</p>}
    </div>
  )
}

export function LinkGrid({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="not-prose grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="block bg-card border border-border rounded-lg px-4 py-3 font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          {l.label}
        </Link>
      ))}
    </div>
  )
}

export function ServiceCards({ city, blurbs }: { city?: string; blurbs?: Partial<Record<string, string>> }) {
  return (
    <div className="not-prose grid sm:grid-cols-2 gap-4">
      {CORE_SERVICES.map((s) => (
        <Link
          key={s.slug}
          href={`/${s.slug}`}
          className="block bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors"
        >
          <h3 className="font-semibold text-lg text-foreground mb-1">
            {s.name}
            {city ? ` in ${city}` : ""}
          </h3>
          {blurbs?.[s.slug] && <p className="text-muted-foreground text-base">{blurbs[s.slug]}</p>}
        </Link>
      ))}
    </div>
  )
}

// ─── CTA, byline, NAP ────────────────────────────────────────────────

export function CtaBlock({ title = "Get a free Houston painting estimate", children }: { title?: string; children?: ReactNode }) {
  return (
    <section className="container mx-auto px-4 max-w-4xl mb-14">
      <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          {children ?? (
            <>
              Call {BUSINESS.phone} or request an estimate online. Written scope in 24 hours, no upfront payment,{" "}
              {BUSINESS.trust.warrantyYears}-year workmanship warranty.
            </>
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
          </a>
          <Link
            href={ESTIMATE_PATH}
            className="inline-flex items-center justify-center gap-2 border border-white/40 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Request a free estimate
          </Link>
        </div>
      </div>
    </section>
  )
}

export function AuthorByline({ updated = UPDATED_LABEL, extra }: { updated?: string; extra?: string }) {
  return (
    <p className="container mx-auto px-4 max-w-4xl mb-14 text-sm text-muted-foreground">
      By{" "}
      <Link href="/about" rel="author" className="font-medium text-foreground hover:text-primary">
        {BUSINESS.founder.name}
      </Link>
      , owner, {BUSINESS.name}. Updated {updated}.{extra ? ` ${extra}` : ""}
    </p>
  )
}

/** NAP block + map for one office. Hours come from BUSINESS.hours, which match every GBP. */
export function OfficeNap({ office }: { office: Office }) {
  const mapsUrl = officeMapsUrl(office)
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS.name}, ${officeAddressLine(office)}`)}&output=embed`
  return (
    <div className="not-prose grid md:grid-cols-2 gap-6">
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <p className="font-semibold text-lg text-foreground">
          {BUSINESS.name} — {office.label}
        </p>
        <p className="flex items-start gap-2 text-foreground/90">
          <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
          <span>
            {office.street}
            <br />
            {office.city}, {office.state} {office.zip}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" />
          <a href={PHONE_HREF} className="font-medium text-foreground hover:text-primary">
            {BUSINESS.phone}
          </a>
        </p>
        <div className="flex items-start gap-2 text-foreground/90">
          <Clock className="h-5 w-5 mt-0.5 text-primary" />
          <div>
            {BUSINESS.hoursSummary.map((h) => (
              <p key={h.label}>
                {h.label}: {h.value}
              </p>
            ))}
          </div>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
        >
          <Star className="h-5 w-5" /> See reviews on Google
        </a>
      </div>
      <iframe
        title={`Map of the ${BUSINESS.name} ${office.label}`}
        src={embed}
        className="w-full min-h-[280px] rounded-xl border border-border"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

// ─── Schema helpers ──────────────────────────────────────────────────

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  }
}

/** Article node with the owner as author (guide pages). */
export function articleNode(opts: { path: string; headline: string; description: string; datePublished?: string; dateModified?: string }) {
  return {
    "@type": "Article",
    "@id": `${SITE}${opts.path}#article`,
    headline: opts.headline,
    description: opts.description,
    author: AUTHOR_REF,
    publisher: PUBLISHER_REF,
    datePublished: opts.datePublished ?? UPDATED_ISO,
    dateModified: opts.dateModified ?? UPDATED_ISO,
    mainEntityOfPage: `${SITE}${opts.path}`,
    inLanguage: "en-US",
  }
}

export { ownerPersonNode }
