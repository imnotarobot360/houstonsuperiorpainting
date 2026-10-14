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

export const LEAD_FORMS: Record<"quick" | "commercial", LeadFormConfig> = {
  quick: {
    service: "quick",
    label: "Quick estimate",
    questions: [
      { id: "projectType", question: "Project type" },
      { id: "timeframe", question: "Desired timeframe" },
      { id: "contactMethod", question: "Preferred contact method" },
      { id: "description", question: "Project description" },
      { id: "colorName", question: "Color selected" },
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
