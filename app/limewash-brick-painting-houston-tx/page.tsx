import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicePageTemplate } from '@/components/service-page-template'

export const metadata: Metadata = {
  title: 'Limewash & Brick Painting Houston TX | Houston Superior Painting',
  description: 'Professional limewash and brick painting in Houston TX. German smear, authentic European finishes. Breathable, elegant, long-lasting. Free estimates.',
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/limewash-brick-painting-houston-tx',
  },
  openGraph: {
    title: 'Limewash & Brick Painting Houston TX | Houston Superior Painting',
    description: 'Professional limewash and brick painting in Houston TX. German smear, authentic European finishes. Breathable, elegant, long-lasting.',
    url: 'https://houstonsuperiorpainting.com/limewash-brick-painting-houston-tx',
    siteName: 'Houston Superior Painting',
    type: 'website',
    images: [{
      url: 'https://houstonsuperiorpainting.com/images/og/og-limewash-brick.jpg',
      width: 1200,
      height: 630,
      alt: 'Limewash Brick Painting Houston TX - Houston Superior Painting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limewash & Brick Painting Houston TX | Houston Superior Painting',
    description: 'Professional limewash and brick painting in Houston TX. German smear, authentic European finishes.',
    images: ['https://houstonsuperiorpainting.com/images/og/og-limewash-brick.jpg'],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://houstonsuperiorpainting.com/limewash-brick-painting-houston-tx#service",
  "name": "Limewash & Brick Painting in Houston, TX",
  "description": "Authentic limewash and German smear finishes for brick homes in Houston. Also offering solid brick painting and specialty decorative finishes. Breathable, elegant, European-style results.",
  "serviceType": "Limewash & Decorative Finishes",
  "provider": { "@id": "https://houstonsuperiorpainting.com/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Houston" },
    { "@type": "City", "name": "Katy" },
    { "@type": "City", "name": "Cypress" },
    { "@type": "City", "name": "Sugar Land" },
    { "@type": "City", "name": "Pearland" }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": 4000,
      "maxPrice": 15000,
      "priceCurrency": "USD"
    },
    "availability": "https://schema.org/InStock"
  }
}

const pageData = {
  title: "Limewash & Brick Painting in Houston TX",
  subtitle: "European-Style Brick Finishes",
  heroDescription: "Transform your brick home with authentic limewash, German smear, or professional brick painting. Our specialty finishes create timeless, elegant looks that enhance your home's character while protecting the brick underneath.",
  quickAnswer: "Houston Superior Painting provides limewash, German smear, and brick painting in Houston, Katy, Cypress, and Sugar Land TX. Limewash costs $4,000-$15,000 depending on home size. We use authentic lime-based products for breathable, European-style finishes. Free estimates at (346) 594-5960.",
  sections: [
    {
      title: "What is Limewash?",
      content: `Limewash is a traditional finishing technique that has been used for centuries throughout Europe. Made from slaked lime (calcium hydroxide), limewash penetrates and bonds with porous surfaces like brick, creating a soft, matte finish with natural variation and depth.

Unlike paint that sits on top of surfaces and can trap moisture, limewash is breathable. This is particularly important in Houston's humid climate, where trapped moisture can cause paint to peel and brick to deteriorate. Limewash allows water vapor to pass through, keeping your brick healthy.

The aesthetic of limewash is unlike anything you can achieve with paint. It creates subtle variations in color and texture that develop character over time. The finish can range from a subtle wash that lets the brick pattern show through to a more opaque coating depending on the number of applications.`
    },
    {
      title: "German Smear & Mortar Wash",
      content: `German smear (also called schmear or mortar wash) creates a rustic, European cottage aesthetic by applying wet mortar directly to brick and partially wiping it away. The result is an aged, textured look where some brick shows through the mortar coating.

This technique is particularly popular for homeowners who want to lighten dark brick while maintaining texture and character. Unlike limewash, German smear is permanent and cannot be removed once applied, so it's important to choose this finish only if you're certain it's the look you want.

Our German smear process involves careful preparation, custom mortar mixing to achieve your desired color, and skilled application to create the right balance of coverage and brick visibility. We can adjust the look from subtle to dramatic based on your preferences.`
    },
    {
      title: "Solid Brick Painting",
      content: `While we love the natural beauty of limewash and German smear, sometimes solid brick painting is the right choice. Modern masonry paints are formulated to adhere to brick while remaining somewhat breathable, and they offer complete color coverage and uniformity.

Solid brick painting is ideal when you want to completely change your home's color, cover mismatched or repaired brick, or achieve a specific designer look. We use premium masonry paints that resist fading, peeling, and chalking in Houston's intense sun.

Proper preparation is essential for brick painting success. We thoroughly clean and prime the brick, fill any damaged mortar joints, and apply multiple coats for complete coverage and durability. Our brick painting typically lasts 10-15 years with proper care.`
    },
    {
      title: "Our Limewash Process, Step by Step",
      content: `1. Cleaning and prep. The brick is washed to remove dirt, mildew, algae and loose mortar, with a mildewcide treatment. In Houston this step is non-negotiable: mildew left under limewash blooms back through. Efflorescence (white mineral deposits) is treated, damaged mortar joints are repaired, and windows, trim, doors and landscaping are protected. The brick then dries for at least 48-72 hours before any limewash goes on.

2. First coat. Limewash is applied by brush, not roller, in overlapping strokes that follow the brick coursing. While it is still wet we press it into the mortar joints and wipe back high spots so the natural brick color shows through where you want it.

3. Building the look. Two to four thin coats in total, adding coverage where you want it denser and keeping it open where you want more brick showing. Limewash looks much darker and more opaque when wet and lightens considerably over 24-48 hours as it dries, so we judge each coat dry, and so should you.

4. Optional sealer. Traditional limewash is left unsealed so it stays breathable. If you want extra mildew and moisture protection, we use only a penetrating, breathable masonry sealer, never a film-forming one.

A typical exterior limewash takes 3-5 days, longer than standard exterior painting because every coat is worked by hand. Some homeowners limewash only the street-facing front and leave or paint the other sides, which lowers the cost. We confirm the scope in your written estimate.`
    }
  ],
  features: [
    "Authentic limewash finishes",
    "German smear / mortar wash",
    "Solid brick painting",
    "Specialty decorative finishes",
    "Interior brick treatments",
    "Fireplace brick updates",
    "Color matching & custom tinting",
    "Historic restoration techniques"
  ],
  benefits: [
    "Breathable finishes that protect brick",
    "European-style aesthetics",
    "Timeless, elegant appearance",
    "Natural variation and character",
    "UV and weather resistant",
    "Enhances home value",
    "Custom color options",
    "5-year warranty included"
  ],
  // Intentionally empty. This previously pointed at
  // /images/limewash-before-1.jpg and -after-1.jpg, neither of which exists on
  // disk, so the "Before & After Results" section rendered two broken images
  // with overlapping alt text on a live, indexed page. No genuine limewash
  // before/after photography exists yet — add a real pair here to restore the
  // section. Do not substitute renderings.
  beforeAfterImages: [],
  // Digital renderings, NOT photographs of completed work. The
  // FinishIllustrations component labels them as illustrations on the banner,
  // on every image and in every caption. Two pairs because limewash and
  // German smear are routinely confused, and one of them cannot be undone.
  illustrations: [
    {
      name: "Classic White Limewash",
      beforeSrc: "/images/illustrations/limewash-classic-before.png",
      afterSrc: "/images/illustrations/limewash-classic-after.png",
      beforeAlt:
        "Illustration of a single-story red brick cottage facade before any lime finish is applied",
      afterAlt:
        "Illustration of the same cottage facade with soft white limewash, warm brick tone still showing through the mottled wash",
      caption:
        "Limewash is a thin mineral wash that soaks into the brick rather than sitting on top of it. It softens the colour while leaving the brick texture and some of the original tone visible, which is why the result looks mottled and slightly cloudy rather than a flat, even colour. Coverage is deliberately imperfect.",
      permanence:
        "Reversible with qualifications. Limewash can be lightened, reworked or largely removed while it is fresh, but the longer it cures the more of the finish stays in the brick's pores. Treat full removal as difficult rather than routine, and never as guaranteed.",
    },
    {
      name: "German Smear (Mortar Wash)",
      beforeSrc: "/images/illustrations/german-smear-before.png",
      afterSrc: "/images/illustrations/german-smear-after.png",
      beforeAlt:
        "Illustration of a two-story red brick colonial home facade before a mortar wash is applied",
      afterAlt:
        "Illustration of the same colonial facade with a German smear mortar wash, thick off-white mortar troweled unevenly over the brick with some brick faces left exposed",
      caption:
        "German smear is wet mortar troweled over the brick and partly wiped back, so it sits proud of the surface with visible hand-worked texture. Some bricks are covered completely, others only at the edges, and some are left fully exposed. It reads much heavier and more rustic than limewash, and the pattern is decided brick by brick as the work goes on.",
      permanence:
        "Permanent. Mortar bonds mechanically into the brick face and cannot be washed off. Removal means abrasive or chemical stripping that risks damaging the brick itself, and the original brick appearance cannot be restored. Ask for a sample area before committing to a full facade.",
      irreversible: true,
    },
  ],
  faqs: [
    {
      question: "What is limewash and how is it different from paint?",
      answer: "Limewash is a traditional finish made from slaked lime that penetrates and bonds with brick rather than sitting on top like paint. It creates a soft, matte finish with natural variation and is breathable, allowing moisture to escape from the brick."
    },
    {
      question: "How much does limewash cost in Houston?",
      answer: "Limewash for a Houston home typically costs $4,000-$15,000 depending on home size and brick condition. This includes proper preparation, multiple coats, and detail work around windows and trim."
    },
    {
      question: "How long does limewash last?",
      answer: "Limewash can last 5-7 years before needing refreshment. Over time, it naturally weathers and develops patina, which many homeowners appreciate. Touch-up applications are straightforward and blend seamlessly."
    },
    {
      question: "What is German smear?",
      answer: "German smear (also called mortar wash) is a technique where wet mortar is applied to brick and partially wiped away, creating a rustic, European cottage look with some brick showing through. It's permanent and cannot be removed once applied."
    },
    {
      question: "Can you remove limewash or German smear later?",
      answer: "Fresh limewash can be partly removed with water before it cures. Once cured, it can be lightened with water and scrubbing or taken off with acid washing, but that is labor-intensive and some finish stays in the brick's pores, so treat removal as difficult rather than routine. German smear is permanent and cannot be removed without damaging the brick. Consider this carefully before choosing."
    },
    {
      question: "Should I limewash, German smear, or paint my brick?",
      answer: "Choose limewash if you want a soft, aged European look where the brick still shows through, a breathable finish, and a way back if you change your mind. Choose German smear if you want a heavier, rustic, textured look and are certain about it, because it is permanent. Choose solid brick paint if you want a complete color change, full coverage, or to hide mismatched or repaired brick without a refresh cycle. We can do a sample area so you can see the finish on your own brick first."
    },
    {
      question: "Can I limewash brick that is already painted?",
      answer: "Not successfully. Limewash bonds to bare masonry, not to a paint film, so existing paint has to be stripped first, which adds real cost. If your brick has never been painted, it is worth considering limewash before you ever paint it."
    },
    {
      question: "Does limewash work on all brick types?",
      answer: "It works best on natural clay brick, older porous brick and most common red brick. It is more difficult on glazed brick, very smooth-faced brick, or brick with a previous sealer, because the limewash has little to soak into. We check your brick type and condition at the estimate before recommending it."
    },
    {
      question: "Do I need HOA approval to limewash my house?",
      answer: "If you are in an HOA, almost certainly. Limewash changes your home's exterior appearance, so most Greater Houston master-planned communities require ARC or ACC approval. Submit your color choice with reference photos of finished limewash homes."
    },
    {
      question: "How do I maintain limewash brick in Houston?",
      answer: "Soft wash it every year or two with a mild cleaning solution to remove mildew and keep the look fresh. Avoid high-pressure washing, which can erode the limewash layer. South- and west-facing walls take the most sun and usually need a refresh first, and a refresh coat is simpler than a full new application."
    },
    {
      question: "Is limewash good for Houston's climate?",
      answer: "Yes, limewash is excellent for Houston's humid climate because it's breathable. Unlike paint that can trap moisture and cause peeling, limewash allows water vapor to pass through, keeping brick healthy."
    },
    {
      question: "Do you offer decorative finishes for interior walls?",
      answer: "Yes. For interior walls we offer Venetian plaster, Roman Clay, and faux and metallic finishes, along with limewash on interior brick. Each is priced after an on-site look, and the estimate is free."
    }
  ],
  relatedServices: [
    { title: "Venetian Plaster", href: "/venetian-plaster-houston-tx" },
    { title: "Paint vs Limewash vs Leave It", href: "/blog/painting-brick-houston" },
    { title: "Limewash vs German Smear", href: "/blog/limewash-vs-german-smear-houston" },
    { title: "Exterior Painting", href: "/exterior-painting-houston-tx" },
    { title: "Interior Painting", href: "/interior-painting-houston-tx" },
    { title: "Pressure Washing", href: "/pressure-washing-houston-tx" },
    { title: "Soft Washing", href: "/soft-washing-houston-tx" },
    { title: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx" }
  ]
}

// Built from the visible FAQ list so the FAQPage schema always matches the
// on-page text (it previously listed only 3 of the visible questions).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": pageData.faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
  })),
}

export default function LimewashBrickPaintingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <ServicePageTemplate {...pageData} />
      <Footer />
    </>
  )
}
