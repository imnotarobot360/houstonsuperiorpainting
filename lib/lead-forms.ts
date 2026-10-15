import { getFunnel } from "./funnel-config"

/**
 * Lead forms that are not one of the ad funnels in funnel-config.ts: the short
 * three-field quick estimate and the commercial request form (owner brief
 * 2026-10-14). They share /api/leads with the funnels, so every lead lands in
 * the same table, gets the same office email and the missed-lead alert, and is
 * readable at /estimate/confirmed/[token].
 *
 * `questions` is the allow-list of answer keys /api/leads and
 * /api/leads/details will store; `question` is the label shown to the office
 * and on the confirmation page.
 */
export type LeadFormConfig = {
  service: string
  label: string
  questions: { id: string; question: string }[]
}

export const QUICK_PROJECT_TYPES = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Refinishing",
  "Commercial Painting",
  "Drywall Repair",
  "Wallpaper Removal",
  "Limewash",
  "Soft Washing",
  "Stucco Painting or Repair",
  "Wood Rot or Carpentry Repair",
  "Color Consultation",
  "Other",
] as const

export const COMMERCIAL_PROPERTY_TYPES = [
  "Office",
  "Retail",
  "Restaurant",
  "Medical or dental office",
  "HOA or multifamily common areas",
  "Light-commercial building",
  "Other",
] as const

export const TIMEFRAMES = ["As soon as possible", "Within 1 month", "1–3 months", "Just planning"] as const
export const CONTACT_METHODS = ["Phone call", "Text message", "Email"] as const

export const LEAD_FORMS: Record<"quick" | "commercial" | "budget", LeadFormConfig> = {
  // Budget ad funnel (/offer/houston-painting, owner request 2026-10-15).
  budget: {
    service: "budget",
    label: "Budget painting offer",
    questions: [
      { id: "paintWhat", question: "What needs painting" },
      { id: "location", question: "Location (ZIP)" },
      { id: "budget", question: "Budget" },
      { id: "details", question: "Details" },
    ],
  },
  quick: {
    service: "quick",
    label: "Quick estimate",
    questions: [
      { id: "projectType", question: "Project type" },
      { id: "timeframe", question: "Desired timeframe" },
      { id: "contactMethod", question: "Preferred contact method" },
      { id: "description", question: "Project description" },
      { id: "colorName", question: "Color selected" },
      { id: "language", question: "Preferred language" },
    ],
  },
  commercial: {
    service: "commercial",
    label: "Commercial painting",
    questions: [
      { id: "company", question: "Company" },
      { id: "propertyType", question: "Property type" },
      { id: "squareFootage", question: "Approximate square footage" },
      { id: "occupancy", question: "Occupied or vacant" },
      { id: "schedule", question: "Preferred schedule" },
      { id: "description", question: "Project description" },
      { id: "contactMethod", question: "Preferred contact method" },
    ],
  },
}

/** Funnel configs first (their keys are unchanged), then the forms above. */
export function getLeadForm(service: string): LeadFormConfig | undefined {
  return getFunnel(service) ?? LEAD_FORMS[service as keyof typeof LEAD_FORMS]
}

/** Spanish labels for the quick form (owner approved Spanish service 2026-10-14).
 * Stored values stay in English so the office sees one vocabulary. */
export const ES_LABELS: Record<string, string> = {
  "Interior Painting": "Pintura interior",
  "Exterior Painting": "Pintura exterior",
  "Cabinet Refinishing": "Pintura y acabado de gabinetes",
  "Commercial Painting": "Pintura comercial",
  "Drywall Repair": "Reparación de drywall",
  "Wallpaper Removal": "Remoción de papel tapiz",
  Limewash: "Limewash para ladrillo",
  "Soft Washing": "Lavado suave",
  "Stucco Painting or Repair": "Pintura o reparación de estuco",
  "Wood Rot or Carpentry Repair": "Reparaciones de madera",
  "Color Consultation": "Consulta de colores",
  Other: "Otro",
  "As soon as possible": "Lo antes posible",
  "Within 1 month": "En el próximo mes",
  "1–3 months": "En 1 a 3 meses",
  "Just planning": "Solo estoy planeando",
  "Phone call": "Llamada",
  "Text message": "Mensaje de texto",
  Email: "Correo electrónico",
}

/**
 * Budget offer settings (owner request 2026-10-15). Keep spotsAvailable TRUE:
 * update it (or set it to 0 to hide the line) whenever the real number changes.
 */
export const BUDGET_OFFER = {
  spotsAvailable: 2,
  checked: "2026-10-15",
}

export const PAINT_WHAT = ["Interior", "Exterior", "Interior and exterior", "Something else"] as const

export const BUDGET_RANGES = [
  "Under $2,000",
  "$2,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Not sure yet",
] as const
