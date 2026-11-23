import type { Metadata } from "next"
import { EstimateLanding } from "@/components/estimate-landing"
import { FUNNELS } from "@/lib/funnel-config"

/**
 * Cabinet refinishing landing page for ChatGPT Ads.
 *
 * noindex — /cabinet-refinishing-houston-tx is the organic page for this intent.
 *
 * The URL says "refinishing" rather than "painting" and live ads point at it, so
 * the directory name must not be tidied up.
 */
const CONFIG = FUNNELS.cabinets

export const metadata: Metadata = {
  title: CONFIG.metaTitle,
  description: CONFIG.metaDescription,
  robots: { index: false, follow: false, nocache: true },
}

export default function CabinetRefinishingLandingPage() {
  return <EstimateLanding config={CONFIG} />
}
