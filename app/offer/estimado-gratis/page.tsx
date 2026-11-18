import type { Metadata } from "next"
import { FreeEstimateLanding } from "@/components/free-estimate/free-estimate-landing"
import { FREE_ESTIMATE_COPY } from "@/lib/free-estimate-copy"

// Free written estimate ad landing page, Spanish (owner brief 2026-11-18).
// noindex + excluded from the sitemap (EXCLUDED_TREES 'offer'); English twin
// at /offer/free-estimate. Leads go to /api/leads with service "free" and
// answers.language = "Spanish".

const t = FREE_ESTIMATE_COPY.es

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  robots: { index: false, follow: false, nocache: true },
  alternates: { languages: { "en-US": "/offer/free-estimate", "es-US": "/offer/estimado-gratis" } },
}

export default function EstimadoGratisOfferPage() {
  return <FreeEstimateLanding lang="es" />
}
