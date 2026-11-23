import type { Metadata } from "next"
import { EstimateLanding } from "@/components/estimate-landing"
import { FUNNELS } from "@/lib/funnel-config"

/**
 * Exterior painting landing page for ChatGPT Ads.
 *
 * noindex — /exterior-painting-houston-tx is the organic page for this intent.
 *
 * Per the spec, this page makes no unsupported durability or lifetime claims.
 * Climate language describes what we do about Houston heat and humidity
 * (preparation, caulking, coating choice), never how many years a finish will
 * last. The only lifespan figure stated anywhere is the written warranty term.
 */
const CONFIG = FUNNELS.exterior

export const metadata: Metadata = {
  title: CONFIG.metaTitle,
  description: CONFIG.metaDescription,
  robots: { index: false, follow: false, nocache: true },
}

export default function ExteriorPaintingLandingPage() {
  return <EstimateLanding config={CONFIG} />
}
