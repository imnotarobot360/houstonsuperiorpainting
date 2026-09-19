"use client"

import { useState } from "react"

/**
 * Finish comparison tool (brief Step 12).
 *
 * Deliberately contains NO pricing, NO warranty terms, NO lifespan figures and
 * no performance promises. Those numbers are inconsistent across the live site
 * and unverified, so they are logged in the claims audit for approval instead
 * of being repeated here.
 *
 * The one thing this tool must get right is reversibility, because it is the
 * only irreversible decision a homeowner makes on these pages: German smear and
 * mortar wash cannot be undone without damaging the masonry.
 */

type Substrate = "all" | "drywall" | "unpainted-brick" | "painted-brick"

type Finish = {
  id: string
  name: string
  href: string
  character: string
  bestFor: string
  substrates: Exclude<Substrate, "all">[]
  reversible: "reversible" | "conditional" | "permanent"
  reversibleNote: string
}

const FINISHES: Finish[] = [
  {
    id: "venetian",
    name: "Venetian / Polished Plaster",
    href: "/venetian-plaster-houston-tx",
    character: "Layered depth with a burnished, stone-like sheen. Movement changes with the light.",
    bestFor: "Interior feature walls, powder rooms, tray ceilings, range hoods",
    substrates: ["drywall"],
    reversible: "conditional",
    reversibleNote:
      "Can be skim-coated or primed and painted over later, though the surface must be prepared first.",
  },
  {
    id: "limewash-interior",
    name: "Interior Limewash",
    // No interior-limewash hub exists yet — only neighbourhood pages
    // (/limewash-decorative-finishes-*). Points at the main limewash page
    // until a dedicated interior hub is built.
    href: "/limewash-brick-painting-houston-tx",
    character: "Soft, chalky, cloud-like tonal movement. Matte with no sheen.",
    bestFor: "Interior walls, fireplaces, accent rooms",
    substrates: ["drywall", "unpainted-brick"],
    reversible: "conditional",
    reversibleNote: "Can be primed and painted over. Removal from porous masonry is far harder.",
  },
  {
    id: "limewash-exterior",
    name: "Exterior Brick Limewash",
    href: "/limewash-brick-painting-houston-tx",
    character: "Weathered, European exterior with the brick texture still reading through.",
    bestFor: "Exterior brick facades, chimneys, garden walls",
    substrates: ["unpainted-brick"],
    reversible: "conditional",
    reversibleNote:
      "Removable by acid washing on unpainted brick, but the process is labour-intensive and not guaranteed.",
  },
  {
    id: "german-smear",
    name: "German Smear / Mortar Wash",
    href: "/limewash-brick-painting-houston-tx",
    character: "Heavy, rustic mortar troweled over brick and partially wiped back.",
    bestFor: "Exterior brick, cottage and Tudor styling",
    substrates: ["unpainted-brick"],
    reversible: "permanent",
    reversibleNote:
      "Permanent. Mortar bonds mechanically into the brick face and cannot be removed without damaging the masonry.",
  },
  {
    id: "masonry-paint",
    name: "Solid Brick Painting",
    href: "/limewash-brick-painting-houston-tx",
    character: "Uniform, opaque colour. No brick variation shows through.",
    bestFor: "Previously painted brick, mismatched or patched masonry",
    substrates: ["unpainted-brick", "painted-brick"],
    reversible: "permanent",
    reversibleNote:
      "Effectively permanent. Once brick is painted, stripping it back to bare masonry is rarely successful.",
  },
]

const SUBSTRATE_FILTERS: { value: Substrate; label: string }[] = [
  { value: "all", label: "All surfaces" },
  { value: "drywall", label: "Interior drywall" },
  { value: "unpainted-brick", label: "Unpainted brick" },
  { value: "painted-brick", label: "Already-painted brick" },
]

// The site renders on a light background, so these use darker text shades
// (-700/-800) rather than the -300s that only read correctly on dark surfaces.
// "Permanent" must be the most legible of the three: it is the warning.
const REVERSIBILITY_STYLES: Record<Finish["reversible"], string> = {
  reversible: "bg-emerald-50 text-emerald-800 border-emerald-300",
  conditional: "bg-gold/10 text-gold-deep border-gold/40",
  permanent: "bg-red-100 text-red-800 border-red-400",
}

const REVERSIBILITY_LABELS: Record<Finish["reversible"], string> = {
  reversible: "Reversible",
  conditional: "Reversible with prep",
  permanent: "Permanent",
}

export function FinishComparison() {
  const [substrate, setSubstrate] = useState<Substrate>("all")

  const visible =
    substrate === "all" ? FINISHES : FINISHES.filter((f) => f.substrates.includes(substrate))

  return (
    <div>
      <div className="mb-6">
        <p
          id="substrate-filter-label"
          className="font-manrope text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3"
        >
          What are you starting with?
        </p>
        <div role="group" aria-labelledby="substrate-filter-label" className="flex flex-wrap gap-2">
          {SUBSTRATE_FILTERS.map((option) => {
            const active = substrate === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSubstrate(option.value)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-gold bg-gold text-midnight font-semibold"
                    : "border-border bg-card text-foreground/80 hover:border-gold/50 hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>
      </div>

      {substrate === "painted-brick" && (
        <p className="mb-6 rounded-lg border border-gold/30 bg-gold/5 p-4 text-sm leading-relaxed text-foreground/80">
          Brick that has already been painted or sealed will not take a traditional lime finish
          reliably, because lime needs to bond into open masonry pores. On these surfaces we
          normally recommend a masonry coating instead, and we confirm the substrate on site
          before quoting.
        </p>
      )}

      <div role="list" className="grid gap-4">
        {visible.map((finish) => (
          <article
            key={finish.id}
            role="listitem"
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="font-display text-xl font-bold text-foreground">{finish.name}</h3>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                  REVERSIBILITY_STYLES[finish.reversible]
                }`}
              >
                {REVERSIBILITY_LABELS[finish.reversible]}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-foreground/80 mb-4">{finish.character}</p>

            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-manrope text-xs font-semibold uppercase tracking-[0.15em] text-foreground/50 mb-1">
                  Typically used on
                </dt>
                <dd className="text-foreground/80 leading-relaxed">{finish.bestFor}</dd>
              </div>
              <div>
                <dt className="font-manrope text-xs font-semibold uppercase tracking-[0.15em] text-foreground/50 mb-1">
                  Can it be undone?
                </dt>
                <dd className="text-foreground/80 leading-relaxed">{finish.reversibleNote}</dd>
              </div>
            </dl>

            <a
              href={finish.href}
              className="mt-4 inline-block text-sm font-semibold text-gold underline-offset-4 hover:underline"
            >
              {`More on ${finish.name}`}
            </a>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm leading-relaxed text-foreground/60">
        Every finish above behaves differently depending on the substrate underneath, so we
        confirm the surface in person and apply a sample before starting any full installation.
      </p>
    </div>
  )
}
