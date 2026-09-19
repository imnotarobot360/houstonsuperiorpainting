"use client"

import { useMemo, useState } from "react"
import { Ruler, ShieldCheck, FileText } from "lucide-react"
import { EPOXY, GARAGE_SIZES, RATE_PER_SQFT, PROJECT_MINIMUM, estimateGarageCost } from "@/lib/epoxy"
import { Reveal } from "./reveal"

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`

/** Per-sq-ft rate: keeps cents only when there are cents, so 5 reads "$5" not "$5.00". */
const rate = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`

const INCLUDED = [
  {
    icon: Ruler,
    title: "Diamond-ground prep",
    body: "Mechanical profiling, crack and spall repair, and moisture testing before a drop of coating goes down.",
  },
  {
    icon: ShieldCheck,
    title: "Full flake system",
    body: "100% solids epoxy base, broadcast vinyl flake, and a UV-stable polyaspartic topcoat.",
  },
  {
    icon: FileText,
    title: `${EPOXY.warrantyYears}-year written warranty`,
    body: "Adhesion warranty in writing on residential garage systems. No payment until you sign off.",
  },
]

export function EpoxyPricing() {
  const [sizeIdx, setSizeIdx] = useState(1) // default: 2-car, the most common

  const size = GARAGE_SIZES[sizeIdx]
  const { low, high } = useMemo(() => estimateGarageCost(size.sqft), [size.sqft])

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-border bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pricing</p>
          <h2 className="font-manrope text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance md:text-5xl">
            Know The Number Before We Show Up
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Pick your garage size for an honest installed range. Your exact price is locked in after we measure the
            slab, and nothing is due until the floor is finished and you have signed off.
          </p>
        </Reveal>

        <Reveal className="rounded-sm border border-border bg-card p-6 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Controls */}
            <div className="flex flex-1 flex-col">
              <fieldset>
                <legend className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Garage size
                </legend>
                <div className="flex flex-col gap-2">
                  {GARAGE_SIZES.map((s, i) => (
                    <label
                      key={s.id}
                      className={`flex cursor-pointer items-center justify-between rounded-sm border px-4 py-3 transition-colors ${
                        i === sizeIdx
                          ? "border-primary bg-primary/10 text-card-foreground"
                          : "border-border text-muted-foreground hover:border-muted-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="garage-size"
                          checked={i === sizeIdx}
                          onChange={() => setSizeIdx(i)}
                          className="h-4 w-4 accent-[var(--epoxy-orange)]"
                        />
                        <span className="font-semibold">{s.label}</span>
                      </span>
                      <span className="text-sm">{s.sqft} sq ft</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Installed pricing runs {rate(RATE_PER_SQFT.low)}–{rate(RATE_PER_SQFT.high)} per square foot
                depending on coating system and slab condition, with a {usd(PROJECT_MINIMUM)} project minimum.
              </p>
            </div>

            {/* Result */}
            <div className="flex flex-1 flex-col justify-center rounded-sm bg-secondary/50 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Estimated project total
              </p>
              <p aria-live="polite" className="mt-3 font-manrope text-4xl font-extrabold text-primary md:text-5xl">
                {usd(low)} – {usd(high)}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                For a {size.label.toLowerCase()} ({size.sqft} sq ft), fully installed
                <br />
                with prep, flake, and polyaspartic topcoat.
              </p>
              <a
                href="#estimate"
                className="mt-6 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3.5 font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get My Exact Price
              </a>
              <a
                href={EPOXY.phoneHref}
                className="mt-3 text-sm font-semibold text-primary underline underline-offset-4"
              >
                Or call {EPOXY.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 border-t border-border pt-7 sm:grid-cols-3">
            {INCLUDED.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <item.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-manrope text-sm font-bold uppercase tracking-wide text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
            Ranges are estimates for planning only. Final pricing depends on measured square footage, slab condition,
            and the coating system you choose, and is confirmed in a written quote after an on-site walkthrough.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
