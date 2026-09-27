// lib/locations.ts
// One record per Google Business Profile office. /locations/[slug], the
// contact page, the footer, the homepage offices block and every per-office
// LocalBusiness JSON-LD node read from this file — change NAP here only.
//
// Rules this data follows:
//  - `gbpUrl` is set ONLY for a profile we have confirmed resolves to our own
//    listing. It drives `hasMap` + `sameAs`; null means "emit neither".
//  - `latitude`/`longitude` are set only where the street address geocodes to
//    the building. A guessed pin that disagrees with GBP is worse than none.
//  - Phone and hours are company-wide until each GBP shows something different.

import { BUSINESS, SERVICE_AREAS } from "@/lib/business"

type ServiceAreaSlug = (typeof SERVICE_AREAS)[number]["slug"]

export type OfficeLocation = {
  slug: "cypress" | "houston" | "katy" | "sugar-land" | "magnolia"
  city: string
  /** Business name exactly as it should read on the GBP for this office. */
  gbpName: string
  street: string
  state: "TX"
  zip: string
  phone: string
  phoneTel: string
  phoneE164: string
  latitude: number | null
  longitude: number | null
  gbpUrl: string | null
  photo: { src: string; alt: string }
  metaDescription: string
  headline: string
  intro: string
  body: string[]
  fieldNotes: { title: string; text: string }[]
  /** Communities without their own page on this site. */
  neighborhoods: string[]
  serviceAreaSlugs: ServiceAreaSlug[]
}

const shared = {
  state: "TX" as const,
  phone: BUSINESS.phone,
  phoneTel: BUSINESS.phoneTel,
  phoneE164: BUSINESS.phoneE164,
}

export const LOCATIONS: OfficeLocation[] = [
  {
    ...shared,
    slug: "cypress",
    city: "Cypress",
    gbpName: "Houston Superior Painting - Cypress",
    street: "14150 Huffmeister Rd, Suite 410",
    zip: "77429",
    latitude: 29.9745,
    longitude: -95.6445,
    gbpUrl: null,
    photo: {
      src: "/images/exterior-after-1.jpg",
      alt: "Finished exterior repaint by Houston Superior Painting",
    },
    metaDescription:
      "Houston Superior Painting's Cypress office on Huffmeister Rd. Interior, exterior and cabinet painting for Cypress, Tomball and Champions Forest. Call (346) 594-5960.",
    headline: "Painters in Cypress, working out of Huffmeister Road",
    intro:
      "Our Cypress office is where the company started in 2019. Crews from here cover Cypress, Towne Lake, Bridgeland, Fairfield, Tomball and the Champions Forest side of 1960.",
    body: [
      "Most Cypress homes we paint were built between the late '90s and now, which means a lot of fiber-cement siding, painted brick accents and builder-grade trim that was primed once at the factory and never again. On those houses the paint usually isn't the problem — the caulk is. Builder caulk shrinks after a few Houston summers, water gets behind the trim, and the next coat of paint peels along every joint.",
      "So before a brush comes out, we pressure wash, let the siding dry out overnight (longer after a rain), cut out failed caulk rather than caulking over it, and spot-prime every bare edge. That prep takes most of the first two days on a typical two-story Cypress exterior. It is also the reason the coat holds.",
      "Inside, Cypress work is mostly full repaints before a sale, cabinet refinishing in 2000s-era kitchens, and drywall repairs where settling foundations have cracked the corners of doorways.",
    ],
    fieldNotes: [
      {
        title: "Fiber-cement and HOA colors",
        text: "Many Cypress HOAs (Towne Lake, Bridgeland, Fairfield) require color approval. We'll pull your community's palette and submit the paperwork with you.",
      },
      {
        title: "Morning dew on north walls",
        text: "North-facing walls in Cypress often stay damp until late morning. We start those sides after the moisture reading drops, not by the clock.",
      },
      {
        title: "Foundation cracks",
        text: "Hairline cracks over doors and windows get cut out and taped, not just caulked, so they don't telegraph through the new paint.",
      },
    ],
    neighborhoods: ["Towne Lake", "Bridgeland", "Fairfield", "Coles Crossing", "Jersey Village"],
    serviceAreaSlugs: [
      "painters-cypress-tx",
      "painters-cypress-creek-tx",
      "painters-champions-forest-tx",
      "painters-tomball-tx",
    ],
  },
  {
    ...shared,
    slug: "houston",
    city: "Houston",
    // The only confirmed profile for this office is currently named
    // "Houston Superior Painting.." (two trailing periods). Rename it on GBP.
    gbpName: "Houston Superior Painting - Houston",
    street: "2617 Bissonnet St #443",
    zip: "77005",
    latitude: null,
    longitude: null,
    gbpUrl: "https://maps.google.com/?cid=14738995580231507943",
    photo: {
      src: "/images/interior-after-1.png",
      alt: "Finished interior repaint by Houston Superior Painting",
    },
    metaDescription:
      "Houston Superior Painting's inner-loop office on Bissonnet St. Interior, exterior, limewash and trim painting for West U, Bellaire, River Oaks and the Heights. (346) 594-5960.",
    headline: "Inner-loop painters, based on Bissonnet near Rice Village",
    intro:
      "Our Houston office on Bissonnet serves the inner loop: West University, Bellaire, Southside Place, River Oaks, Montrose, the Heights and Memorial.",
    body: [
      "Inner-loop houses are a different job than the suburbs. We see 1920s–1950s bungalows and brick ranches with old oil-based trim under newer latex, wood siding that has been painted ten times, and lead-era paint that has to be handled carefully. We test before we sand on any home built before 1978.",
      "The other big difference is shade and humidity. Big live oaks keep siding cool and damp, so mildew grows under the paint film if it isn't killed first. Every exterior out of this office gets a mildewcide wash, a full dry-out, and a bonding primer anywhere latex is going over old oil.",
      "Inside, a lot of our Houston work is plaster and old drywall repair, crown and trim, and limewash on brick — especially fireplaces and front elevations in West U and Bellaire.",
    ],
    fieldNotes: [
      {
        title: "Pre-1978 homes",
        text: "We test for lead and use lead-safe work practices before disturbing old paint. That's EPA RRP rules, and we follow them.",
      },
      {
        title: "Oil under latex",
        text: "Latex over old oil trim peels in sheets. We check with a solvent test and prime with a bonding primer where needed.",
      },
      {
        title: "Tight lots, street parking",
        text: "We plan ladder placement and drop cloths around your neighbors' fences and cars, and we keep the curb clear.",
      },
    ],
    neighborhoods: ["West University Place", "Southside Place", "Rice Village", "Montrose", "Meyerland"],
    serviceAreaSlugs: [
      "painters-houston-tx",
      "painters-bellaire-tx",
      "painters-river-oaks-tx",
      "painters-the-heights-tx",
      "painters-memorial-tx",
      "painters-memorial-villages-tx",
    ],
  },
  {
    ...shared,
    slug: "katy",
    city: "Katy",
    gbpName: "Houston Superior Painting - Katy",
    street: "3230 FM 1463 APT 3201",
    zip: "77494",
    latitude: null,
    longitude: null,
    gbpUrl: null,
    photo: {
      src: "/images/cabinet-after-1.jpg",
      alt: "Refinished kitchen cabinets by Houston Superior Painting",
    },
    metaDescription:
      "Houston Superior Painting's Katy office on FM 1463. Exterior, interior and cabinet painting for Katy, Cinco Ranch, Fulshear, Richmond and the Energy Corridor. (346) 594-5960.",
    headline: "Katy painters on FM 1463, serving west Fort Bend",
    intro:
      "Our Katy office sits on FM 1463 and covers Cinco Ranch, Cross Creek Ranch, Firethorne, Elyson, Fulshear, Richmond, Rosenberg and the Energy Corridor.",
    body: [
      "West of Houston the houses are newer and bigger, and the sun is the main enemy. Katy's open master-planned streets don't have the tree cover of the inner loop, so west- and south-facing walls take full afternoon sun all summer. Dark colors fade and cheap paint chalks within a few years.",
      "Out of this office we lean on high-solids exterior acrylics, we steer darker colors toward lines rated for heat, and we schedule south and west elevations for the cooler part of the day so the paint doesn't flash-dry and lap.",
      "Katy is also where we do the most cabinet refinishing — 2005–2015 kitchens with builder maple or oak that homeowners want white, greige or two-tone without a full remodel.",
    ],
    fieldNotes: [
      {
        title: "Full-sun elevations",
        text: "We plan the day around the sun so no wall is painted while the siding is too hot to hold your hand on.",
      },
      {
        title: "Wide-open HOAs",
        text: "Cinco Ranch, Cross Creek Ranch and Elyson all have architectural review. We help with color submissions.",
      },
      {
        title: "Two-story great rooms",
        text: "Tall foyers and great rooms get proper staging, not a stretched extension pole, so cut lines stay clean at 18 feet.",
      },
    ],
    neighborhoods: ["Cross Creek Ranch", "Firethorne", "Elyson", "Grand Lakes", "Seven Meadows"],
    serviceAreaSlugs: [
      "painters-katy-tx",
      "painters-cinco-ranch-tx",
      "painters-fulshear-tx",
      "painters-richmond-tx",
      "painters-rosenberg-tx",
      "painters-energy-corridor-tx",
    ],
  },
  {
    ...shared,
    slug: "sugar-land",
    city: "Sugar Land",
    // Confirmed: the share.google link resolves to this exact GBP name.
    gbpName: "Houston Superior Painting - Sugar Land",
    street: "18722 University Blvd, Suite 254, 2nd Floor",
    zip: "77479",
    latitude: null,
    longitude: null,
    gbpUrl: "https://share.google/7dcztUU2XgDoOiWDf",
    photo: {
      src: "/images/stucco-after-1.png",
      alt: "Repaired and repainted stucco by Houston Superior Painting",
    },
    metaDescription:
      "Houston Superior Painting's Sugar Land office on University Blvd. Painting, stucco and drywall repair for Sugar Land, Missouri City, Sienna, Riverstone and Pearland. (346) 594-5960.",
    headline: "Sugar Land painters on University Boulevard",
    intro:
      "Our Sugar Land office on University Blvd covers First Colony, Telfair, Riverstone, Sienna, Missouri City, Stafford and Pearland.",
    body: [
      "Fort Bend soil is heavy clay that swells when it rains and shrinks in August. Houses move, and the paint shows it: cracked stucco, split corner beads, and gaps opening between brick and trim. A fresh coat over those cracks looks good for one season.",
      "Out of this office we spend real time on repair before paint — routing and patching stucco cracks, re-setting loose trim, replacing failed sealant at brick-to-siding joints — then we use elastomeric or flexible coatings where the substrate is going to keep moving.",
      "Many Sugar Land homes near the Brazos and the lakes also deal with constant humidity and mildew on the shaded side. Soft washing and a mildewcide treatment are part of every exterior quote here.",
    ],
    fieldNotes: [
      {
        title: "Clay soil movement",
        text: "Cracks that return every year get a flexible patch and coating, not just caulk and paint.",
      },
      {
        title: "Stucco and EIFS",
        text: "We identify which one you have before quoting. They need different repairs and different coatings.",
      },
      {
        title: "Lakeside humidity",
        text: "Homes on the Riverstone and First Colony lakes get extra dry-time after washing before any primer goes on.",
      },
    ],
    neighborhoods: ["First Colony", "Telfair", "Stafford", "New Territory", "Greatwood"],
    serviceAreaSlugs: [
      "painters-sugar-land-tx",
      "painters-missouri-city-tx",
      "painters-sienna-tx",
      "painters-riverstone-tx",
      "painters-pearland-tx",
    ],
  },
  {
    ...shared,
    slug: "magnolia",
    city: "Magnolia",
    gbpName: "Houston Superior Painting - Magnolia",
    street: "14512 Cottontop Mtn",
    zip: "77354",
    latitude: null,
    longitude: null,
    gbpUrl: null,
    photo: {
      src: "/images/wood-rot-after-1.png",
      alt: "Wood rot repaired and repainted by Houston Superior Painting",
    },
    metaDescription:
      "Houston Superior Painting's Magnolia office. Exterior painting, wood rot repair and staining for Magnolia, The Woodlands, Pinehurst and Montgomery County. (346) 594-5960.",
    headline: "Magnolia painters for Montgomery County homes",
    intro:
      "Our Magnolia office covers FM 1488 and FM 1774, Montgomery County acreage, The Woodlands, Pinehurst, Montgomery and Stagecoach.",
    body: [
      "North of the Woodlands the lots get bigger and the pines get closer to the house. That means wood siding, wood trim and cedar fences that stay shaded and wet, pine needles packed in gutters, and rot at the bottom of every door jamb and fascia board that sits in splash-back.",
      "Most Magnolia exteriors we quote start with carpentry. We probe every piece of trim, replace rotten wood with primed or composite stock, and back-prime new boards on all six sides before they go up. Then we wash, dry out, prime and paint.",
      "We also do a lot of fence and deck staining here, plus barn-style outbuildings and garages on acreage properties.",
    ],
    fieldNotes: [
      {
        title: "Rot first, paint second",
        text: "Every exterior quote lists the rotten wood we found, with photos, so you know what's being replaced and why.",
      },
      {
        title: "Pine sap and pollen",
        text: "Spring pollen and sap get washed off and allowed to dry before coating, or the paint won't bond.",
      },
      {
        title: "Longer drives, same schedule",
        text: "Crews stage from Magnolia so acreage jobs don't lose half a day to traffic on 249 or I-45.",
      },
    ],
    neighborhoods: ["Pinehurst", "Montgomery", "Stagecoach", "Woodtrace", "High Meadow Ranch"],
    serviceAreaSlugs: ["painters-magnolia-tx", "painters-the-woodlands-tx"],
  },
]

export function getLocation(slug: string): OfficeLocation | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}

export function locationUrl(loc: OfficeLocation): string {
  return `${BUSINESS.url}/locations/${loc.slug}`
}

export function locationAddressLine(loc: OfficeLocation): string {
  return `${loc.street}, ${loc.city}, ${loc.state} ${loc.zip}`
}

export function locationMapEmbedSrc(loc: OfficeLocation): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(locationAddressLine(loc))}&output=embed`
}

export function locationDirectionsHref(loc: OfficeLocation): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationAddressLine(loc))}`
}

export function serviceAreaName(slug: ServiceAreaSlug): string {
  return SERVICE_AREAS.find((a) => a.slug === slug)?.name ?? slug
}
