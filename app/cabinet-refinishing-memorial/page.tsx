import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Memorial Cabinet Refinishing | Houston Superior Painting",
  description: "Kitchen cabinet refinishing in Memorial, Houston: degrease, sand, bonding primer and a sprayed finish. Free written estimate. 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/cabinet-refinishing-memorial",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Memorial Cabinet Refinishing | Houston Superior Painting",
    description: "Kitchen cabinet refinishing in Memorial, Houston: degrease, sand, bonding primer and a sprayed finish. Free written estimate. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/cabinet-refinishing-memorial",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function CabinetRefinishingMemorialPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Memorial, Houston, TX"
      zoneSlug="memorial"
      metaTitle={"Memorial Cabinet Refinishing | Houston Superior Painting"}
      metaDescription={"Kitchen cabinet refinishing in Memorial, Houston: degrease, sand, bonding primer and a sprayed finish. Free written estimate. 5-year warranty."}
      h1={"Cabinet Refinishing in Memorial, Houston, TX"}
      heroSubheading={"Kitchen cabinet refinishing for Memorial homes: your existing doors and boxes cleaned, sanded, primed and refinished, with a 5-year written warranty."}
      introLocal={"Many Memorial kitchens have solid cabinets in good condition that are simply dated in color or finish. Refinishing keeps the existing cabinet boxes and doors and changes the color and sheen, which avoids the demolition and lead time of replacing cabinets. It is not the right fit for cabinets that are water-damaged, delaminating or laid out in a way you want to change, and we will tell you if yours fall into that group."}
      serviceOverview={"Cabinet refinishing includes removing and labeling doors and drawer fronts, degreasing, sanding, filling where needed, applying a bonding primer and spraying the finish coats. Cabinet boxes are masked and finished in place. Hardware is removed and reinstalled, or replaced with new hardware you choose. The products and sheen are listed on your written estimate, and every job carries our 5-year written workmanship warranty."}
      whyChooseUs={[
        "Doors and drawer fronts removed and labeled, so every piece goes back where it came from.",
        "Degreasing and sanding before priming: the steps that decide whether a cabinet finish lasts.",
        "Bonding primer and a sprayed finish for a smooth, even surface.",
        "Kitchen protected, and work areas cleaned at the end of each day.",
        "A written estimate that lists the cabinets, prep and products.",
      ]}
      priceDetails={`Our published range is ${PRICES_2026.cabinetsPerKitchen} per kitchen, and most kitchens land around ${PRICES_2026.cabinetsAverage}. The number of doors and drawers, islands and pantry cabinets, color changes and repairs set where your kitchen falls. The written estimate is free.`}
      faqs={[
        {
          question: "How much does cabinet refinishing cost in Memorial?",
          answer: `Our published range is ${PRICES_2026.cabinetsPerKitchen} per kitchen, and most kitchens land around ${PRICES_2026.cabinetsAverage}. The number of doors and drawers, islands, color changes and repairs set your exact price in a free written estimate.`,
        },
        {
          question: "How long does cabinet refinishing take?",
          answer: "It depends on the number of doors and drawers and on drying and cure time between coats. The schedule is set in your written estimate before work starts.",
        },
        {
          question: "Can I use my kitchen during the project?",
          answer: "Partly. Cabinets being worked on are masked and should not be used, but we plan the work so the kitchen is not shut down any longer than necessary.",
        },
        {
          question: "How should I treat newly painted cabinets?",
          answer: "Paint keeps curing for a few weeks after it feels dry, so close doors gently, avoid scrubbing and wait before putting heavy items against freshly painted surfaces. After that, mild soap and water is all they need.",
        },
        {
          question: "Can you change the color of my cabinets?",
          answer: "Yes. Cabinets can be refinished in any color and sheen. Color samples are part of the estimate process.",
        },
        {
          question: "Do I have to pay anything before work starts?",
          answer: `${BUSINESS.paymentPolicy.sentence}`,
        },
      ]}
      testimonials={[
        {
          quote: "They transformed our dated oak cabinets into a beautiful white kitchen. The finish is flawless — looks like new cabinets.",
          name: "Catherine M.",
          location: "Hunters Creek Village"
        },
        {
          quote: "Saved us over $30,000 compared to replacing our Memorial kitchen cabinets. The results exceeded our expectations.",
          name: "David & Lauren P.",
          location: "Memorial Park"
        },
        {
          quote: "The attention to detail was incredible. Every drawer, every door — perfect finish throughout.",
          name: "Marcus T.",
          location: "Bunker Hill"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Houston", href: "/cabinet-refinishing-houston-tx" },
        { title: "Interior Painting Memorial", href: "/interior-painting-memorial" },
        { title: "Painters in Memorial", href: "/painters-memorial-tx" },
        { title: "Cabinet Refinishing Bellaire & West University", href: "/cabinet-refinishing-bellaire-west-university" },
        { title: "Cabinet Refinishing The Heights", href: "/cabinet-refinishing-the-heights" },
      ]}
      warrantyYears={5}
      warrantyType="Cabinet"
    />
  )
}
