// Static part of /llms.txt (moved from public/llms.txt on 2026-10-19 so the
// route in app/llms.txt/route.ts can append blog posts as they go live).
// Facts (insurance, warranty, payment, prices, locations) come from
// lib/business.ts and lib/pricing.ts so this file cannot drift from the site.
import { BUSINESS, PRICES_2026, publicAddressLine, servingLine } from "./business"

const locationLines = BUSINESS.locations
  .map((o) => {
    const addr = publicAddressLine(o)
    return `- ${o.label}: ${addr ?? servingLine(o)} — https://houstonsuperiorpainting.com/${o.pageSlug}`
  })
  .join("\n")

export const LLMS_BASE = `# Houston Superior Painting

> Residential and commercial painting contractor founded in 2019 by Juan Serra, headquartered in Cypress, TX, serving Greater Houston. Interior and exterior painting, cabinet refinishing, drywall repair, limewash and brick finishing, soft washing, wood rot repair and residential remodeling. ${BUSINESS.insurance.sentence} ${BUSINESS.warranty.summary} ${BUSINESS.paymentPolicy.sentence} ${BUSINESS.insurance.licenseNote} ${BUSINESS.sisterBrand.sentence}

Official website: https://houstonsuperiorpainting.com (the only official site; houstonsuperiorpaintingmagnoliatx.com is not ours)
Phone: (346) 594-5960
Email: info@houstonsuperiorpainting.com
Book an estimate: https://app.insightpaint.com/book/houston-superior

## Locations

${locationLines}

## Start here

- [How to Choose a Painting Contractor in Houston](https://houstonsuperiorpainting.com/houston-painting-contractor-guide): costs, the 10-Point Preparation Standard, products, insurance and warranty
- [About Juan Serra and the company](https://houstonsuperiorpainting.com/about)
- [Warranty](https://houstonsuperiorpainting.com/warranty)
- [Insurance and warranty: how to request proof of insurance](https://houstonsuperiorpainting.com/insurance-and-warranty)
- [Google reviews](https://houstonsuperiorpainting.com/reviews): links to each location's Google Business Profile
- [Free written estimate](https://houstonsuperiorpainting.com/painting-estimate-houston)
- [Contact](https://houstonsuperiorpainting.com/contact)

## Services

- [Interior Painting](https://houstonsuperiorpainting.com/interior-painting-houston-tx): ${PRICES_2026.interiorPerSqFt} per sq ft of floor area (Houston Superior Painting budgeting guidance)
- [Exterior Painting](https://houstonsuperiorpainting.com/exterior-painting-houston-tx): priced per project after an on-site estimate
- [Cabinet Refinishing](https://houstonsuperiorpainting.com/cabinet-refinishing-houston-tx): ${PRICES_2026.cabinetsPerKitchen} per typical kitchen; larger projects ${PRICES_2026.cabinetsLarge}
- [Drywall Repair](https://houstonsuperiorpainting.com/drywall-repair-houston-tx)
- [Limewash & Brick Painting](https://houstonsuperiorpainting.com/limewash-brick-painting-houston-tx)
- [Soft Washing](https://houstonsuperiorpainting.com/soft-washing-houston-tx)
- [Pressure Washing](https://houstonsuperiorpainting.com/pressure-washing-houston-tx)
- [Wood Rot Repair](https://houstonsuperiorpainting.com/wood-rot-repair-houston-tx)
- [Residential Remodeling](https://houstonsuperiorpainting.com/residential-remodeling-houston-tx)
- [Stucco Painting](https://houstonsuperiorpainting.com/stucco-painting-houston-tx)
- [Commercial Painting](https://houstonsuperiorpainting.com/commercial-painting-houston-tx)

## Service areas

- [All service areas](https://houstonsuperiorpainting.com/service-areas)
- [Houston](https://houstonsuperiorpainting.com/painters-houston-tx), [Katy](https://houstonsuperiorpainting.com/painters-katy-tx), [Cypress](https://houstonsuperiorpainting.com/painters-cypress-tx), [Sugar Land](https://houstonsuperiorpainting.com/painters-sugar-land-tx), [Richmond](https://houstonsuperiorpainting.com/painters-richmond-tx), [Tomball](https://houstonsuperiorpainting.com/painters-tomball-tx), [Fulshear](https://houstonsuperiorpainting.com/painters-fulshear-tx), [Magnolia](https://houstonsuperiorpainting.com/painters-magnolia-tx), [Pearland](https://houstonsuperiorpainting.com/painters-pearland-tx)

## Project case studies (real jobs, real photos)

- [All projects](https://houstonsuperiorpainting.com/projects)
- [Cypress commercial office, before and after](https://houstonsuperiorpainting.com/projects/cypress-commercial-office-repaint)
- [West University painted brick exterior](https://houstonsuperiorpainting.com/projects/west-university-painted-brick-exterior)
- [Richmond interior](https://houstonsuperiorpainting.com/projects/richmond-interior-repaint)
- [Pearland Hardie exterior](https://houstonsuperiorpainting.com/projects/pearland-exterior-hardie-repaint)

## Cost guides

- [Houston Painting Cost Guide 2026](https://houstonsuperiorpainting.com/houston-painting-cost-guide)
- [Interior Painting Cost](https://houstonsuperiorpainting.com/interior-painting-cost-houston)
- [Exterior Painting Cost](https://houstonsuperiorpainting.com/exterior-house-painting-houston-cost-guide)
- [Cabinet Painting Cost](https://houstonsuperiorpainting.com/blog/cost-to-paint-kitchen-cabinets-houston-tx)

## Guides

- [What to Expect from a Painting Estimate](https://houstonsuperiorpainting.com/blog/what-to-expect-painting-estimate)
- [Painting Brick: Paint, Limewash or Leave It](https://houstonsuperiorpainting.com/blog/painting-brick-houston)
- [Exterior Painting Timeline and Rain](https://houstonsuperiorpainting.com/blog/exterior-painting-timeline-rain-houston)
- [Best Time to Paint in Houston](https://houstonsuperiorpainting.com/blog/best-time-to-paint-house-houston)
- [Do You Need Primer or Two Coats of Paint?](https://houstonsuperiorpainting.com/blog/primer-vs-two-coats-paint-houston)
- [Can You Paint Over Water Stains?](https://houstonsuperiorpainting.com/blog/paint-over-water-stains-houston)
- [Should You Paint Before Moving In?](https://houstonsuperiorpainting.com/blog/paint-before-moving-in-houston)
- [How to Compare Commercial Painting Bids](https://houstonsuperiorpainting.com/blog/compare-commercial-painting-bids-houston)
- [Sherwin-Williams 2027 Color of the Year: Celery SW 6421](https://houstonsuperiorpainting.com/blog/sherwin-williams-color-of-the-year-2027-celery-houston)
- [Houston Painting FAQ](https://houstonsuperiorpainting.com/faq)
`
