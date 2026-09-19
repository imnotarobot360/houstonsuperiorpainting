import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Painters Sugar Land TX — Houston Superior Painting",
  description: "Professional painters in Sugar Land TX. Interior, exterior, cabinet painting for Sweetwater, Telfair, Riverstone. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-sugar-land-tx',
  },
  openGraph: {
    title: "Painters Sugar Land TX — Houston Superior Painting",
    description: "Professional painters in Sugar Land TX. Interior, exterior, cabinet painting for Sweetwater, Telfair, Riverstone. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-sugar-land-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-sugar-land.jpg",
      width: 1200,
      height: 630,
      alt: "Painters Sugar Land TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painters Sugar Land TX — Houston Superior Painting",
    description: "Professional painters in Sugar Land TX. Interior, exterior, cabinet painting for Sweetwater, Telfair, Riverstone.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-sugar-land.jpg"],
  },
}

export default function PaintersSugarLandTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Sugar Land",
  slug: "painters-sugar-land-tx",
  description: "Professional house painting services in Sugar Land, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Sugar Land"
          state="TX"
          heroHeadline="Premium House Painters for Sugar Land Homes"
          heroDescription="Sugar Land homeowners expect excellence—and we deliver. From Sweetwater to First Colony, trust our expertise for your interior and exterior painting projects."
          aboutCity={`Sugar Land is known for its beautiful homes, excellent schools, and high quality of life. When Sugar Land homeowners invest in painting, they expect results that match the caliber of their community. That's exactly what we provide.

We've painted homes throughout Sugar Land's most prestigious neighborhoods—from the custom estates of Sweetwater to the elegant properties in Riverstone and the established communities of First Colony. Our crews understand that Sugar Land homes often feature architectural details, custom finishes, and premium materials that require a skilled, careful approach.

Beyond technical excellence, Sugar Land families appreciate our professionalism. We show up on time, communicate clearly, protect your home and landscaping, and leave your property cleaner than we found it. These aren't just promises—they're the standards that have earned us hundreds of repeat customers and referrals across Fort Bend County.`}
          whyChooseUs={[
            "Sugar Land specialists: Trusted by homeowners in Sweetwater, First Colony, Riverstone, and beyond",
            "Attention to detail: We handle architectural features and custom finishes with care",
            "Premium products: Only top-tier Sherwin-Williams and Benjamin Moore paints",
            "Proper preparation: Thorough prep work ensures lasting results",
            "Fully insured: Full coverage for your complete peace of mind",
            "5-year written warranty: We stand behind every project"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Enhance your Sugar Land home's elegance with perfectly executed interior painting. We handle crown molding, wainscoting, and specialty finishes.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Protect and beautify your Sugar Land home with weather-resistant exterior coatings. Proper prep ensures paint that lasts.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Transform your Sugar Land kitchen with professional cabinet painting. Factory-smooth spray finishes at a fraction of replacement cost.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Expert repair of cracks, holes, and settling damage. Seamless results you won't be able to detect.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Professional pressure washing for Sugar Land homes. Clean driveways, siding, and patios before painting.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Transform your Sugar Land brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Professional painting for Sugar Land businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Durable epoxy coatings for Sugar Land garages that resist stains and last for years.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Sweetwater",
            "First Colony",
            "Riverstone",
            "Telfair",
            "New Territory",
            "Sugar Creek",
            "Greatwood",
            "Commonwealth",
            "Avalon",
            "Sienna",
            "Sugar Mill",
            "Oyster Creek"
          ]}
          testimonial={{
            quote: "We hired them to paint our Sweetwater home before selling. The transformation was stunning—fresh, modern colors throughout. We received multiple offers above asking price. The investment paid for itself!",
            author: "David and Maria S.",
            location: "Sweetwater, Sugar Land"
          }}
          faqs={[
            {
              question: "What makes your painting service right for Sugar Land homes?",
              answer: "Sugar Land homes often feature custom architectural details that require precision. Our experienced crews know how to handle crown molding, specialty textures, and high ceilings with the care they deserve."
            },
            {
              question: "How do you protect my Sugar Land home during painting?",
              answer: "We use premium drop cloths, plastic sheeting, and painter's tape to protect floors, furniture, and fixtures. Your landscaping is covered during exterior work. We treat your home like our own."
            },
            {
              question: "Can you help me choose colors for my Sugar Land home?",
              answer: "Yes! We offer complimentary color consultation to help you select colors that complement your home's architecture, lighting, and your personal style. We can also work with your interior designer."
            },
            {
              question: "What is your availability for Sugar Land projects?",
              answer: "We typically book 2-3 weeks out, though we can sometimes accommodate urgent projects. Contact us to discuss your timeline and get on our schedule."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
