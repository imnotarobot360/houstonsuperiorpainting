import type { Metadata } from "next"
import { EstimateLanding } from "@/components/estimate-landing"
import { FUNNELS } from "@/lib/funnel-config"

/**
 * Garage epoxy landing page for ChatGPT Ads.
 *
 * noindex, and that matters more here than on the painting funnels. The apex
 * path /garage-epoxy-houston-tx is a permanent 301 onto the epoxy subdomain to
 * consolidate authority for "garage epoxy houston" (see next.config.mjs). An
 * indexable page on this near-identical slug would reintroduce exactly the
 * competition that redirect exists to remove.
 *
 * Leads from here book the epoxy calendar, not the painting one — the config
 * handles that, and lib/epoxy.ts explains why they must stay separate.
 */
const CONFIG = FUNNELS.epoxy

export const metadata: Metadata = {
  title: CONFIG.metaTitle,
  description: CONFIG.metaDescription,
  robots: { index: false, follow: false, nocache: true },
}

export default function GarageEpoxyLandingPage() {
  return <EstimateLanding config={CONFIG} />
}
