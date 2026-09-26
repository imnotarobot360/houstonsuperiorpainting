// lib/nearest-office.ts
// Nearest office for each of the 18 no-office city pages. Plain module (no
// "use client") so both server pages and the client location template can read it.

import { BUSINESS, type Office } from "@/lib/business"

/**
 * City page slug -> office city page slug. These pages have no Google Business
 * Profile of their own, so they carry no address in schema; the visible
 * "nearest office" line is how they point people (and crawlers) at the right
 * office page. The Woodlands sits between the Magnolia and Cypress offices;
 * Magnolia is the closer one.
 */
export const NEAREST_OFFICE: Record<string, string> = {
  // Houston office (Bissonnet)
  "painters-bellaire-tx": "painters-houston-tx",
  "painters-memorial-tx": "painters-houston-tx",
  "painters-memorial-villages-tx": "painters-houston-tx",
  "painters-river-oaks-tx": "painters-houston-tx",
  "painters-the-heights-tx": "painters-houston-tx",
  "painters-energy-corridor-tx": "painters-houston-tx",
  "painters-pearland-tx": "painters-houston-tx",
  // Katy office
  "painters-fulshear-tx": "painters-katy-tx",
  "painters-richmond-tx": "painters-katy-tx",
  "painters-rosenberg-tx": "painters-katy-tx",
  "painters-cinco-ranch-tx": "painters-katy-tx",
  // Sugar Land office
  "painters-missouri-city-tx": "painters-sugar-land-tx",
  "painters-sienna-tx": "painters-sugar-land-tx",
  "painters-riverstone-tx": "painters-sugar-land-tx",
  // Cypress office (HQ)
  "painters-champions-forest-tx": "painters-cypress-tx",
  "painters-cypress-creek-tx": "painters-cypress-tx",
  "painters-tomball-tx": "painters-cypress-tx",
  // Magnolia office
  "painters-the-woodlands-tx": "painters-magnolia-tx",
}

/** The nearest office for a no-office city page, or undefined for office pages / unknown slugs. */
export function nearestOfficeFor(pageSlug: string | undefined): Office | undefined {
  if (!pageSlug) return undefined
  const officeSlug = NEAREST_OFFICE[pageSlug]
  if (!officeSlug) return undefined
  return BUSINESS.locations.find((l) => l.pageSlug === officeSlug)
}
