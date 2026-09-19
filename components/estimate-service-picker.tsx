"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { EstimateFunnel } from "@/components/estimate-funnel"
import { FUNNELS, type FunnelService } from "@/lib/funnel-config"
import { trackEvent } from "@/lib/analytics"

/**
 * Service chooser that fronts the shared funnel on the organic estimate page.
 *
 * The four /chatgpt/* ad pages deliberately skip this: an ad promises one
 * service, so asking the visitor to re-pick it adds a step and loses people.
 * This page is different — it ranks for the generic "painting estimate" term,
 * so the service genuinely is unknown on arrival.
 *
 * Implemented as a wrapper rather than a mode inside EstimateFunnel so the live
 * ad funnels keep rendering exactly the code path they already do.
 */

/** Picker-only copy: one concrete line per service, not marketing adjectives. */
const BLURBS: Record<FunnelService, string> = {
  interior: "Walls, ceilings, trim and doors inside your home.",
  exterior: "Siding, stucco, brick and trim — built for Houston weather.",
  cabinets: "Refinish existing kitchen or bath cabinets without replacing them.",
  epoxy: "Garage, patio and commercial floor coatings.",
}

const ORDER: FunnelService[] = ["interior", "exterior", "cabinets", "epoxy"]

export function EstimateServicePicker() {
  const [service, setService] = useState<FunnelService | null>(null)

  function choose(next: FunnelService) {
    setService(next)
    trackEvent("estimate_service_selected", { service: next })
  }

  if (service) {
    return (
      <div className="flex flex-col gap-3">
        {/* Without this, a mis-tap strands the visitor in the wrong service —
            EstimateFunnel's own Back button only walks question steps. */}
        <button
          type="button"
          onClick={() => setService(null)}
          className="inline-flex items-center gap-1.5 self-start rounded-lg px-2 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Change service
        </button>
        <EstimateFunnel config={FUNNELS[service]} />
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
      <h2 className="font-display text-2xl font-bold leading-tight text-foreground text-balance">
        What can we quote for you?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
        Pick one to start. It takes about a minute, and there&apos;s no obligation.
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        {ORDER.map((key) => {
          const config = FUNNELS[key]
          return (
            <li key={key}>
              <button
                type="button"
                onClick={() => choose(key)}
                className="group flex w-full items-center gap-4 rounded-xl border border-border bg-background p-3 text-left transition-colors hover:border-secondary hover:bg-muted/50"
              >
                <Image
                  src={config.heroImage || "/placeholder.svg"}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                />
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="font-semibold text-foreground">{config.label}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {BLURBS[key]}
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-secondary"
                  aria-hidden="true"
                />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
