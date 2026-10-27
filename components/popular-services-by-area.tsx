import Link from "next/link"
import { LOCAL_PROOF_PROJECTS } from "@/lib/projects"

// "Popular Services by Area" (owner brief 2026-10-14): one row per service,
// following Service → Location → Project → Cost guide → Estimate. Restrained on
// purpose: a few curated rows, each backed by a real published project. A row
// whose project is missing or unverified is dropped rather than shown empty.

type Row = {
  service: string
  serviceHref: string
  area: string
  areaHref: string
  projectSlug: string
  costLabel: string
  costHref: string
}

const ROWS: Row[] = [
  { service: "Interior painting", serviceHref: "/interior-painting-houston-tx", area: "Richmond", areaHref: "/painters-richmond-tx", projectSlug: "richmond-two-story-great-room", costLabel: "Interior cost guide", costHref: "/interior-painting-cost-houston" },
  { service: "Exterior painting", serviceHref: "/exterior-painting-houston-tx", area: "Katy", areaHref: "/painters-katy-tx", projectSlug: "katy-white-stucco-exterior", costLabel: "Exterior cost guide", costHref: "/exterior-house-painting-houston-cost-guide" },
  { service: "Cabinet refinishing", serviceHref: "/cabinet-refinishing-houston-tx", area: "Cypress", areaHref: "/painters-cypress-tx", projectSlug: "cypress-white-teal-kitchen-cabinets", costLabel: "Cabinet cost guide", costHref: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
  { service: "Painted brick", serviceHref: "/limewash-brick-painting-houston-tx", area: "Bellaire", areaHref: "/painters-bellaire-tx", projectSlug: "bellaire-painted-brick-ranch", costLabel: "Houston cost guide", costHref: "/houston-painting-cost-guide" },
  { service: "Commercial painting", serviceHref: "/commercial-painting-houston-tx", area: "Houston", areaHref: "/painters-houston-tx", projectSlug: "houston-retail-center-exterior", costLabel: "Commercial cost guide", costHref: "/commercial-painting-cost-per-square-foot-houston" },
]

const link = "text-foreground underline-offset-4 hover:text-gold-deep hover:underline"

export function PopularServicesByArea() {
  const rows = ROWS.map((r) => ({ ...r, project: LOCAL_PROOF_PROJECTS.find((p) => p.slug === r.projectSlug) })).filter(
    (r) => r.project,
  )
  if (rows.length === 0) return null
  return (
    <section aria-labelledby="popular-by-area" className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="popular-by-area" className="font-display text-2xl text-foreground mb-6">
          Popular services by area
        </h2>
        <ul className="divide-y divide-border border-y border-border font-manrope text-sm">
          {rows.map((r) => (
            <li key={r.service} className="grid gap-2 py-4 sm:grid-cols-[1.1fr_0.8fr_1.6fr_1fr] sm:items-center sm:gap-4">
              <Link href={r.serviceHref} className={`font-semibold ${link}`}>
                {r.service}
              </Link>
              <span className="text-muted-foreground">{r.area}</span>
              <Link href={`/projects/${r.project!.slug}`} className={link}>
                Project: {r.project!.title}
              </Link>
              <Link href={r.costHref} className={link}>
                {r.costLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
