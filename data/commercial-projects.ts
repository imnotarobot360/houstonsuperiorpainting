// Commercial projects the commercial page may show. Each entry points at a real
// case study in lib/projects.ts that has confirmed job photos. Add a slug here
// only after the owner approves publishing it; the section hides when empty.

import { LOCAL_PROOF_PROJECTS, type CaseStudy } from "@/lib/projects"

// houston-retail-center-exterior: photos sent by Juan for the site, 2026-10-12.
// houston-storefront-exterior: same day, a separate Houston job (Juan confirmed).
const APPROVED_COMMERCIAL_SLUGS = [
  "houston-retail-center-exterior",
  "houston-storefront-exterior",
  "cypress-commercial-office-repaint",
]

export const COMMERCIAL_PROJECTS: CaseStudy[] = APPROVED_COMMERCIAL_SLUGS.map((slug) =>
  LOCAL_PROOF_PROJECTS.find((p) => p.slug === slug),
).filter((p): p is CaseStudy => Boolean(p))
