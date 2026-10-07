import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Painting Tips & Advice Blog | Houston Superior Painting",
  description: "Expert painting tips, color advice, and home improvement insights from Houston's trusted painting professionals.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/blog',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Painting Tips & Advice Blog | Houston Superior Painting",
    description: "Expert painting tips, color advice, and home improvement insights from Houston's trusted painting professionals.",
    type: "website",
  },
}

const blogPosts = [
  {
    slug: "hardieplank-painting-houston",
    title: "How to Paint HardiePlank in Houston: Prep, Paint, and What Lasts",
    excerpt:
      "How to paint James Hardie and HardiePlank in Houston. Caulk, cut edges, 100% acrylic paint, ColorPlus rules, and 2026 cost from a local painting contractor.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "10 min read",
    image: "/images/blog/spring-rain-damage-houston.png",
    featured: false,
  },
  {
    slug: "painting-brick-houston",
    title: "Painting Brick in Houston: When to Paint, When to Limewash, and When to Leave It",
    excerpt:
      "When brick paint makes sense in Houston, when limewash is the better finish, and when to leave the brick alone. 2026 cost and moisture rules.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "10 min read",
    image: "/images/blog/limewash-brick-houston.jpg",
    featured: false,
  },
  {
    slug: "exterior-painting-timeline-rain-houston",
    title: "How Long Exterior Painting Takes in Houston — and What Happens If It Rains",
    excerpt:
      "How many days an exterior paint job takes in Houston, and what we do when a storm hits mid-project. Temperatures, humidity, and cure rules.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "8 min read",
    image: "/images/blog/exterior-house-painting-guide.jpg",
    featured: false,
  },
  {
    slug: "exterior-paint-colors-katy-tx",
    title: "Best Exterior Paint Colors in Katy TX (2026)",
    excerpt:
      "Exterior colors for Katy, Cinco Ranch, and Cross Creek Ranch homes in 2026 — what holds up in open sun, and what HOAs approve.",
    category: "Color Guide",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "8 min read",
    image: "/images/blog/hoa-paint-rules-houston.png",
    featured: false,
  },
  {
    slug: "exterior-paint-colors-sugar-land-tx",
    title: "Best Exterior Paint Colors in Sugar Land TX (2026)",
    excerpt:
      "Exterior paint colors that work in Sugar Land — Riverstone, Telfair, New Territory, and First Colony — plus HOA chip rules and 2026 cost.",
    category: "Color Guide",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "8 min read",
    image: "/images/blog/best-exterior-colors-woodlands.jpg",
    featured: false,
  },
  {
    slug: "exterior-paint-colors-fulshear-tx",
    title: "Best Exterior Paint Colors in Fulshear TX (2026)",
    excerpt:
      "Exterior paint colors for Fulshear and Cross Creek Ranch west — new Hardie homes, HOA palettes, and what fades in open sun.",
    category: "Color Guide",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "7 min read",
    image: "/images/blog/exterior-paint-durability-houston.jpg",
    featured: false,
  },
  {
    slug: "exterior-paint-colors-pearland-tx",
    title: "Best Exterior Paint Colors in Pearland TX (2026)",
    excerpt:
      "Exterior paint colors for Pearland, Shadow Creek Ranch, and Silverlake — HOA chips, Hardie, and 2026 cost.",
    category: "Color Guide",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "7 min read",
    image: "/images/blog/hoa-paint-rules-houston.png",
    featured: false,
  },
  {
    slug: "exterior-paint-colors-magnolia-tx",
    title: "Best Exterior Paint Colors in Magnolia TX (2026)",
    excerpt:
      "Exterior colors for Magnolia TX homes — pine shade, mildew on north walls, Hardie and wood mix, and 2026 paint cost.",
    category: "Color Guide",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "7 min read",
    image: "/images/blog/best-exterior-colors-woodlands.jpg",
    featured: false,
  },
  {
    slug: "exterior-paint-colors-houston-heights",
    title: "Best Exterior Paint Colors in the Houston Heights (2026)",
    excerpt:
      "Exterior colors for Houston Heights bungalows and new-builds — painted brick, historic trim, and what to leave alone.",
    category: "Color Guide",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "8 min read",
    image: "/images/blog/exterior-paint-houston-humidity.jpg",
    featured: false,
  },
  {
    slug: "townhome-painting-cinco-ranch-cross-creek-riverstone",
    title: "Townhome and Patio Home Painting in Cinco Ranch, Cross Creek, and Riverstone",
    excerpt:
      "How townhome and patio-home painting works in Cinco Ranch, Cross Creek Ranch, and Riverstone — HOA approval, shared walls, access, and 2026 cost.",
    category: "HOA Guide",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "9 min read",
    image: "/images/blog/exterior-house-painting-guide.jpg",
    featured: false,
  },
  {
    slug: "popcorn-ceiling-removal-houston",
    title: "Popcorn Ceiling Removal and Painting in Houston: Cost and Process (2026)",
    excerpt:
      "What popcorn ceiling removal and repaint costs in Houston, how the process works, and when to skim instead of scrape. 2026 price ranges from a local painter.",
    category: "Interior Painting",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "9 min read",
    image: "/images/blog/drywall-repair-guide.jpg",
    featured: false,
  },
  {
    slug: "alabaster-vs-white-dove-vs-chantilly-lace-houston",
    title: "Alabaster vs White Dove vs Chantilly Lace in Houston Light",
    excerpt:
      "Which white works in Houston light — Benjamin Moore Alabaster, White Dove, or Chantilly Lace. A local painter’s comparison for walls, trim, and cabinets.",
    category: "Color Guide",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "7 min read",
    image: "/images/blog/best-interior-colors-houston.png",
    featured: false,
  },
  {
    slug: "cabinet-colors-2026-houston-greige-green-black",
    title: "Kitchen Cabinet Colors in Houston for 2026: Greige, Green, and Black Islands",
    excerpt:
      "Houston cabinet colors beyond navy in 2026 — greige, muted green, and a black island. Pairings, sheen, and what holds up in a humid kitchen.",
    category: "Cabinet Painting",
    author: "Juan Serra",
    publishDate: "October 7, 2026",
    readTime: "9 min read",
    image: "/images/blog/cabinet-transformations-katy-sugar-land.png",
    featured: false,
  },
  {
    slug: "cost-to-paint-2000-sq-ft-house-houston",
    title: "How Much Does It Cost to Paint a 2,000 Sq Ft House in Houston? (2026 Guide)",
    excerpt:
      "Typical 2026 interior and exterior price ranges for a 2,000 sq ft Houston home, what drives the cost, and red flags to watch for on a quote.",
    category: "Cost Guides",
    author: "Juan Serra",
    publishDate: "September 30, 2026",
    readTime: "7 min read",
    image: "/images/blog/house-painting-cost-houston.jpg",
    featured: false,
  },
  {
    slug: "benjamin-moore-vs-sherwin-williams",
    title: "Benjamin Moore vs Sherwin-Williams: A Houston Painter's Honest Comparison",
    excerpt:
      "Price, product lines, where to buy, and what holds up best on Houston homes — an honest comparison from a local painting contractor.",
    category: "Paint Selection",
    author: "Juan Serra",
    publishDate: "September 30, 2026",
    readTime: "7 min read",
    image: "/images/blog/sherwin-williams-vs-benjamin-moore.jpg",
    featured: false,
  },
  {
    slug: "emerald-vs-duration-paint",
    title: "Sherwin-Williams Emerald vs Duration: Which Paint Is Right for Your Houston Home?",
    excerpt:
      "Emerald and Duration cost about the same and both promise a finish that lasts. A Houston painter breaks down cost, coverage, and which one wins where.",
    category: "Paint Selection",
    author: "Juan Serra",
    publishDate: "September 30, 2026",
    readTime: "8 min read",
    image: "/images/blog/emerald-vs-duration-paint.png",
    featured: false,
  },
  {
    slug: "cost-to-paint-kitchen-cabinets-houston-tx",
    title: "How Much Does It Cost to Paint Kitchen Cabinets in Houston? (2026)",
    excerpt:
      "Cabinet painting is the highest-impact upgrade you can make to a Houston kitchen — at a fraction of replacement cost. Here's a real 2026 price breakdown by kitchen size.",
    category: "Cost Guide",
    author: "Juan Serra",
    publishDate: "July 16, 2026",
    readTime: "9 min read",
    image: "/images/blog/cost-to-paint-kitchen-cabinets-houston.png",
    featured: false,
  },
  {
    slug: "spray-vs-brush-roll-painting-houston",
    title: "Spray vs. Brush and Roll: Which Is Best for Houston Homes?",
    excerpt:
      "Spraying or rolling? Both are professional techniques — they just belong on different surfaces. Here's exactly when each method wins for cabinets, trim, interiors, and exteriors.",
    category: "Homeowner Guide",
    author: "Juan Serra",
    publishDate: "July 16, 2026",
    readTime: "8 min read",
    image: "/images/blog/spray-vs-brush-roll-painting-houston.png",
    featured: false,
  },
  {
    slug: "diy-vs-professional-painting-cost-houston",
    title: "DIY vs. Hiring a Pro Painter in Houston: The Real Cost (2026)",
    excerpt:
      "DIY painting looks cheaper — and sometimes it is. But the honest math includes tools, time, and redoing failed work. Here's how DIY really compares to a professional quote.",
    category: "Cost Guide",
    author: "Juan Serra",
    publishDate: "July 16, 2026",
    readTime: "9 min read",
    image: "/images/blog/diy-vs-professional-painting-houston.png",
    featured: false,
  },
  {
    slug: "how-to-prepare-home-for-interior-painting",
    title: "How to Prepare Your Home for Interior Painting in Houston TX",
    excerpt:
      "Getting ready for a professional interior paint job? Here's exactly what to do before painters arrive, what your painter handles, and what to expect during and after.",
    category: "Interior Painting",
    author: "Juan Serra",
    publishDate: "June 17, 2026",
    readTime: "9 min read",
    image: "/images/blog/prepare-home-interior-painting-houston.png",
    featured: false,
  },
  {
    slug: "fence-deck-painting-houston-tx",
    title: "Fence and Deck Painting in Houston TX: What Homeowners Should Know",
    excerpt:
      "Houston's heat and humidity destroy unprotected fences and decks fast. What to know about paint vs. stain, prep, pressure-treated wood timing, and recoat intervals.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "June 15, 2026",
    readTime: "10 min read",
    image: "/images/blog/fence-deck-painting-houston.png",
    featured: false,
  },
  {
    slug: "venetian-plaster-houston-tx",
    title: "Venetian Plaster in Houston TX: Cost, Process & Where to Use It",
    excerpt:
      "Venetian plaster in Houston TX costs $8–$20 per sq ft in 2026. What it looks like, where to use it, how it handles humidity, and what a professional application involves.",
    category: "Specialty Finishes",
    author: "Juan Serra",
    publishDate: "June 13, 2026",
    readTime: "12 min read",
    image: "/images/blog/venetian-plaster-houston.png",
    featured: false,
  },
  {
    slug: "painters-near-me-katy-tx",
    title: "Painters Near Me in Katy TX: Costs, What to Ask, Red Flags",
    excerpt:
      "Looking for painters near you in Katy TX? Here's what you'll pay in 2026, the 5 questions that reveal whether they're legitimate, and the red flags that cost homeowners thousands.",
    category: "Local Guide",
    author: "Juan Serra",
    publishDate: "June 7, 2026",
    readTime: "11 min read",
    image: "/images/blog/painters-near-me-katy-tx.png",
    featured: true,
  },
  {
    slug: "paint-warranty-texas",
    title: "What Does a 5-Year Paint Warranty Actually Cover in Texas?",
    excerpt:
      "What does a 5-year paint warranty actually cover in Texas — and what does it exclude? Here's what to look for, what to avoid, and how to make a warranty claim.",
    category: "Homeowner Guide",
    author: "Juan Serra",
    publishDate: "June 7, 2026",
    readTime: "11 min read",
    image: "/images/blog/paint-warranty-texas.png",
    featured: true,
  },
  {
    slug: "exterior-painting-cost-katy-tx",
    title: "How Much Does Exterior Painting Cost in Katy TX?",
    excerpt:
      `Exterior painting in Katy TX costs ${PRICES_2026.exteriorPerHome} for most homes in 2026. Real price breakdowns by home size, siding type & prep needed — plus red flags to avoid.`,
    category: "Cost Guide",
    author: "Juan Serra",
    publishDate: "June 7, 2026",
    readTime: "12 min read",
    image: "/images/blog/exterior-painting-cost-katy-tx.png",
    featured: true,
  },
  {
    slug: "spring-rain-damage-houston-exterior-paint",
    title: "Spring Rain Damage to Houston Exterior Paint — What to Inspect Right Now",
    excerpt: "Houston's spring rains hit your home's exterior hard. Here's what to look for right now — and what to do before summer heat makes it worse.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "May 31, 2026",
    readTime: "10 min read",
    image: "/images/blog/spring-rain-damage-houston.png",
    featured: false,
  },
  {
    slug: "why-diy-cabinet-painting-fails-houston-tx",
    title: "Why DIY Cabinet Painting Disappoints — And What Pros Do Differently",
    excerpt: "DIY cabinet painting in Houston almost always disappoints. Here's exactly why it fails — and what professional painters do that makes the difference.",
    category: "Cabinet Painting",
    author: "Juan Serra",
    publishDate: "May 30, 2026",
    readTime: "12 min read",
    image: "/images/blog/diy-cabinet-painting-fails.png",
    featured: true,
  },
  {
    slug: "navy-kitchen-island-cabinet-color-houston-tx",
    title: "The Navy Kitchen Island Trend Houston Homeowners Are Loving Right Now",
    excerpt: "The navy kitchen island trend is everywhere in Houston — and it works. Here's why it looks so good, how to pull it off, and what to pair it with.",
    category: "Cabinet Painting",
    author: "Juan Serra",
    publishDate: "May 29, 2026",
    readTime: "10 min read",
    image: "/images/blog/navy-kitchen-island-houston.png",
    featured: false,
  },
  {
    slug: "cabinet-color-transformations-katy-sugar-land-tx",
    title: "Kitchen Cabinet Color Transformations in Katy TX and Sugar Land TX",
    excerpt: "See how Katy and Sugar Land homeowners are transforming dated kitchens with cabinet painting — the colors, the combinations, and the results.",
    category: "Cabinet Painting",
    author: "Juan Serra",
    publishDate: "May 28, 2026",
    readTime: "11 min read",
    image: "/images/blog/cabinet-transformations-katy-sugar-land.png",
    featured: false,
  },
  {
    slug: "hoa-exterior-paint-rules-houston-suburbs",
    title: "HOA Exterior Paint Rules in Houston Suburbs: What to Know Before You Paint",
    excerpt: "HOA painting rules in Houston suburbs can be tricky. Here's what homeowners in Katy, Sugar Land, Cypress, and The Woodlands need to know before they paint.",
    category: "HOA Guide",
    author: "Juan Serra",
    publishDate: "May 27, 2026",
    readTime: "11 min read",
    image: "/images/blog/hoa-paint-rules-houston.png",
    featured: false,
  },
  {
    slug: "best-interior-paint-colors-houston-homes",
    title: "Best Interior Paint Colors for Houston Homes",
    excerpt: "Choosing interior paint colors for your Houston home? Here's what works in our light conditions, with our humidity, and in today's market.",
    category: "Color Guide",
    author: "Juan Serra",
    publishDate: "May 26, 2026",
    readTime: "12 min read",
    image: "/images/blog/best-interior-colors-houston.png",
    featured: false,
  },
  {
    slug: "how-houston-weather-damages-exterior-paint",
    title: "How Houston Weather Damages Exterior Paint",
    excerpt: "Houston's heat, humidity, and storms are relentless on exterior paint. Here's exactly how weather damages your home's finish — and how to fight back.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "May 25, 2026",
    readTime: "13 min read",
    image: "/images/blog/houston-weather-paint-damage.png",
    featured: false,
  },
  {
    slug: "exterior-painting-cypress-tx-common-problems",
    title: "Exterior Painting in Cypress TX: Common Problems Homeowners Face",
    excerpt: "Cypress TX homeowners face unique exterior paint problems. Here's what causes them, what to watch for, and how to protect your home's finish.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "May 25, 2026",
    readTime: "11 min read",
    image: "/images/blog/exterior-painting-cypress-problems.jpg",
    featured: false,
  },
  {
    slug: "best-exterior-colors-homes-the-woodlands-tx",
    title: "Best Exterior Colors for Homes in The Woodlands TX",
    excerpt: "Choosing exterior paint colors in The Woodlands? Here's what works in this community's wooded, natural setting — and what to avoid.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "May 24, 2026",
    readTime: "12 min read",
    image: "/images/blog/best-exterior-colors-woodlands.jpg",
    featured: false,
  },
  {
    slug: "paint-finishes-matte-eggshell-satin-semi-gloss",
    title: "Paint Finishes Explained: Matte, Eggshell, Satin & Semi-Gloss",
    excerpt: "Which paint finish is best for your Houston home? Compare matte, eggshell, satin, and semi-gloss sheens with room-by-room recommendations.",
    category: "Interior Painting",
    author: "Juan Serra",
    publishDate: "May 19, 2026",
    readTime: "8 min read",
    image: "/images/blog/paint-finishes-guide.jpg",
    featured: false,
  },
  {
    slug: "flat-paint-bathrooms-mistake",
    title: "Why Flat Paint Should Never Be Used in Bathrooms",
    excerpt: "Flat paint in bathrooms leads to mold, peeling, and staining. Learn why semi-gloss is the only finish that works in Houston's humid bathrooms.",
    category: "Common Mistakes",
    author: "Juan Serra",
    publishDate: "May 19, 2026",
    readTime: "5 min read",
    image: "/images/blog/flat-paint-bathroom-mistake.jpg",
    featured: false,
  },
  {
    slug: "how-long-does-interior-painting-take-in-houston",
    title: "How Long Does Interior Painting Take in Houston?",
    excerpt: "Interior painting in Houston takes 3-8 days depending on home size. Accurate timelines by room count, scope, and crew size, plus a day-by-day breakdown.",
    category: "Interior Painting",
    author: "Juan Serra",
    publishDate: "June 7, 2026",
    readTime: "9 min read",
    image: "/images/blog/how-long-interior-painting-houston.jpg",
    featured: false,
  },
  {
    slug: "stucco-painting-houston-guide",
    title: "Stucco Painting in Houston: Complete Guide",
    excerpt: "Stucco homes are common throughout Houston, but painting stucco requires specialized knowledge and products. Learn how to protect and beautify your stucco exterior.",
    category: "Exterior Painting",
    author: "Houston Superior Painting",
    publishDate: "May 10, 2026",
    readTime: "7 min read",
    image: "/images/blog/stucco-painting-houston.jpg",
    featured: false,
  },
  {
    slug: "how-long-does-exterior-paint-last-houston",
    title: "How Long Does Exterior Paint Last in Houston? Durability Guide",
    excerpt: "Learn how long exterior paint lasts in Houston's climate. With proper prep and premium paint, expect 8-10 years. Tips for maximizing paint durability in Texas heat and humidity.",
    category: "Exterior Painting",
    author: "Juan Serra",
    publishDate: "May 10, 2026",
    readTime: "11 min read",
    image: "/images/blog/exterior-paint-durability-houston.jpg",
    featured: false,
  },
  {
    slug: "cabinet-refinishing-vs-replacement-houston",
    title: "Cabinet Refinishing vs Replacement in Houston: Complete Cost Comparison",
    excerpt: `Compare cabinet refinishing (${PRICES_2026.cabinetsPerKitchen}) vs replacement ($20,000-50,000) in Houston. Learn when to refinish vs replace your kitchen cabinets and save up to 80%.`,
    category: "Cabinet Refinishing",
    author: "Juan Serra",
    publishDate: "May 9, 2026",
    readTime: "12 min read",
    image: "/images/blog/cabinet-refinishing-vs-replacement.jpg",
    featured: false,
  },
  {
    slug: "what-to-expect-painting-estimate",
    title: "What to Expect During a Painting Estimate",
    excerpt: "A professional painting estimate helps you understand the full scope of your project. Learn what to expect during the estimate process and how to compare quotes.",
    category: "Getting Started",
    author: "Houston Superior Painting",
    publishDate: "May 9, 2026",
    readTime: "5 min read",
    image: "/images/blog/painting-estimate-guide.jpg",
    featured: false,
  },
  {
    slug: "limewash-vs-german-smear-houston",
    title: "Limewash vs German Smear: Which Brick Finish Is Right for Your Houston Home?",
    excerpt: "Compare limewash vs German smear brick finishes for Houston homes. Learn the differences in appearance, durability, cost, and maintenance to choose the right option.",
    category: "Limewash",
    author: "Juan Serra",
    publishDate: "May 8, 2026",
    readTime: "11 min read",
    image: "/images/blog/limewash-vs-german-smear.jpg",
    featured: false,
  },
  {
    slug: "best-time-to-paint-house-houston",
    title: "Best Time to Paint Your House in Houston: Season-by-Season Guide",
    excerpt: "When is the best time to paint in Houston? Fall (Oct-Nov) and spring (Mar-Apr) offer ideal conditions. Complete seasonal guide with temperatures, humidity, and scheduling tips.",
    category: "Planning",
    author: "Juan Serra",
    publishDate: "May 7, 2026",
    readTime: "10 min read",
    image: "/images/blog/best-time-paint-houston.jpg",
    featured: false,
  },
  {
    slug: "pressure-washing-before-painting",
    title: "Pressure Washing Before Painting: Essential Preparation",
    excerpt: "Pressure washing is one of the most important steps before exterior painting. In Houston's humid climate, proper cleaning removes mold, mildew, and debris.",
    category: "Pressure Washing",
    author: "Houston Superior Painting",
    publishDate: "May 7, 2026",
    readTime: "5 min read",
    image: "/images/blog/pressure-washing-houston.jpg",
    featured: false,
  },
  {
    slug: "drywall-repair-before-painting",
    title: "Drywall Repair Before Painting: Why It Matters",
    excerpt: "Cracks, holes, and damaged drywall can ruin an otherwise perfect paint job. Learn why professional drywall repair is essential before any interior painting project.",
    category: "Drywall Repair",
    author: "Houston Superior Painting",
    publishDate: "May 6, 2026",
    readTime: "5 min read",
    image: "/images/blog/drywall-repair-guide.jpg",
    featured: false,
  },
  {
    slug: "paint-preparation-houston-climate",
    title: "Why Proper Paint Preparation Matters in Houston's Climate",
    excerpt: "Houston homeowners often wonder why some paint jobs last 10 years while others begin peeling after only 2 or 3 years. The answer is simple: preparation.",
    category: "Paint Preparation",
    author: "Houston Superior Painting",
    publishDate: "May 1, 2026",
    readTime: "7 min read",
    image: "/images/blog/paint-preparation-houston.jpg",
    featured: false,
  },
]

const featuredPost = blogPosts.find(post => post.featured)
const regularPosts = blogPosts.filter(post => post !== featuredPost)

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-midnight text-soft-white py-20 lg:py-28 overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
              The Journal
            </p>
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 text-balance leading-[1.05]">
              Insights &amp; Expert Advice
            </h1>
            <p className="font-cormorant text-2xl lg:text-3xl text-soft-white/80 max-w-2xl mx-auto leading-snug">
              Perspectives from years of finishing Houston&apos;s finest homes — helping you protect your investment and make informed decisions.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
            <Link 
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                </div>
                <div className="p-6 lg:p-10 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-pretty">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* All Posts */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-8">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter / CTA Section */}
        <section className="bg-muted py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
              Need Help With Your Painting Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our team has years of experience painting homes across the Houston area. Get a free estimate and expert advice for your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg transition-colors"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Houston Superior Painting Blog",
            "description": "Expert painting tips, color advice, and home improvement insights from Houston's trusted painting professionals.",
            "url": "https://houstonsuperiorpainting.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Houston Superior Painting",
              "logo": {
                "@type": "ImageObject",
                "url": "https://houstonsuperiorpainting.com/images/logo.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.publishDate,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "image": `https://houstonsuperiorpainting.com${post.image}`,
              "url": `https://houstonsuperiorpainting.com/blog/${post.slug}`
            }))
          })
        }}
      />
    </>
  )
}
