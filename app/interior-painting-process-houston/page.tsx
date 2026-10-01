import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { EstimateCalculator } from "@/components/estimate-calculator"
import { PaintingProcessSteps } from "@/components/painting-process-steps"
import { PROCESS_STEPS } from "@/lib/painting-process"
import { Phone, MessageSquare, ChevronRight, CheckCircle2 } from "lucide-react"
import { BUSINESS, PHONE_HREF, PRICES_2026, SMS_HREF } from "@/lib/business"

const CANONICAL = "https://houstonsuperiorpainting.com/interior-painting-process-houston"

export const metadata: Metadata = {
  title: "Our 8-Step Interior Painting Process | Houston Superior Painting",
  description:
    "See our professional 8-step interior painting process: full home protection, surface prep, sanding, priming, and two finish coats.",
  alternates: { canonical: CANONICAL },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Our Professional 8-Step Interior Painting Process | Houston",
    description:
      "Why 90% of a lasting finish comes from preparation — not the final coat. The full 8-step process behind every Houston Superior Painting project.",
    url: CANONICAL,
    type: "article",
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.9012;-95.6293",
    ICBM: "29.9012, -95.6293",
  },
}

const faqs = [
  {
    q: "What is included in your interior painting process?",
    a: "Our 8-step process covers complete home protection, professional surface preparation, sanding, strategic priming, precision paint application with two finish coats, fine finish trim and door work, a comprehensive quality inspection, and white-glove cleanup.",
  },
  {
    q: "Why does surface preparation matter so much in painting?",
    a: "Roughly 90% of a lasting, beautiful finish comes from preparation, not the final coat. Prep is where most companies cut corners and where the longevity of your paint job is determined. Filling, caulking, sanding, and priming are what keep a finish looking great years later.",
  },
  {
    q: "Do you move and protect furniture before painting?",
    a: "Yes. Before any painting begins we protect flooring, furniture, countertops, cabinets, light fixtures, appliances, railings, and built-ins using professional-grade drop cloths, plastic, masking paper, and precision tape. Furniture is returned to its original location during cleanup.",
  },
  {
    q: "How many coats of paint do you apply?",
    a: "Our standard process includes two finish coats to achieve rich, uniform color, consistent sheen, complete coverage, and exceptional durability. We do not thin coats or skip areas to save time.",
  },
  {
    q: "Do you always use primer?",
    a: "We prime whenever the surface requires it rather than automatically everywhere. Specialty primers are used on fresh drywall repairs, water stains, smoke damage, ink or marker stains, dark-to-light color changes, bare wood, and high-porosity surfaces.",
  },
  {
    q: "What happens if I am not happy with something at the end?",
    a: "Every project ends with a detailed quality inspection, then we walk the project with you. If there is anything you would like adjusted, even something minor, we address it before the project is considered complete.",
  },
  {
    q: "Do you clean up after the job is finished?",
    a: "Yes. Our white-glove cleanup removes all masking materials, vacuums and cleans floors, reinstalls switch plates and outlet covers, returns furniture to its original place, and removes all project debris before a final cleanliness inspection.",
  },
  {
    q: "How much does interior painting cost in Houston?",
    a: `Interior painting in Houston typically runs ${PRICES_2026.interiorPerSqFt} per square foot depending on scope, ceiling height, and surface condition. See our interior painting cost guide for a full breakdown, or use the calculator on this page for an instant ballpark range.`,
  },
]

// HowTo structured data, generated from the same step data the page renders so
// the two can never drift apart.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Our Professional 8-Step Interior Painting Process",
  description:
    "The 8-step interior painting process Houston Superior Painting follows on every project, from complete home protection through white-glove cleanup.",
  totalTime: "P3D",
  step: PROCESS_STEPS.map((s) => ({
    "@type": "HowToStep",
    position: s.number,
    name: s.title,
    text: [...s.body, ...(s.after ?? [])].join(" "),
    url: `${CANONICAL}#step-${s.number}`,
  })),
}

const outcomes = [
  "Preparation-first workflow, not paint-first",
  "Two full finish coats on every surface",
  "Specialty primers where the surface demands it",
  "Final walkthrough with you before sign-off",
]

export default function InteriorPaintingProcessPage() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <main>
        <section className="bg-primary py-12 md:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <li>
                  <Link href="/" className="hover:text-primary-foreground">
                    Home
                  </Link>
                </li>
                <ChevronRight className="h-3 w-3" aria-hidden="true" />
                <li className="font-medium text-primary-foreground">Our Interior Painting Process</li>
              </ol>
            </nav>
            <h1 className="hero-h1 mb-6 font-serif text-3xl font-bold text-primary-foreground text-balance md:text-5xl">
              Our Professional 8-Step Interior Painting Process
            </h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              Why Houston homeowners choose quality over the lowest price — and the exact process behind
              every finish we deliver.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Get My Free Estimate
              </Link>
            </div>
          </div>
        </section>

        <section data-speakable="true" className="quick-answer border-l-4 border-secondary bg-secondary/10 py-6">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-lg leading-relaxed text-foreground text-pretty">
              <strong>The short answer:</strong> an exceptional paint job is built long before the first coat
              is applied. Roughly <strong>90% of a lasting, beautiful finish comes from meticulous
              preparation</strong> — not the final coat of paint. Many contractors can make a room look good
              on the day they leave; our 8-step system is built so your home still looks beautiful five,
              seven, or ten years from now.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex flex-col gap-4">
              <p className="leading-relaxed text-foreground/90 text-pretty">
                When homeowners ask us why our finished projects look dramatically better than many other
                paint jobs, the answer isn&apos;t simply the paint we use — it&apos;s the process behind it.
              </p>
              <p className="leading-relaxed text-foreground/90 text-pretty">
                At {BUSINESS.name}, we believe that an exceptional paint job is built long before the first
                coat of paint ever touches your walls. That&apos;s why we&apos;ve refined a professional
                8-step painting system that protects your home, ensures superior adhesion, creates smoother
                finishes, and delivers the craftsmanship expected in Houston&apos;s finest homes.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 rounded-md border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                  <span className="font-medium text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-muted/40 py-12 md:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-10 font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
              The 8 steps, start to finish
            </h2>
            <PaintingProcessSteps />
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
              Why Our Process Delivers Better Results
            </h2>
            <div className="flex flex-col gap-4">
              <p className="leading-relaxed text-foreground/90 text-pretty">
                Many painting companies sell paint. We deliver craftsmanship. Anyone can apply color to a
                wall — very few companies invest the time, discipline, and attention to detail required to
                create a finish that still looks exceptional years later.
              </p>
              <p className="leading-relaxed text-foreground/90 text-pretty">
                Our 8-step system was designed to eliminate shortcuts, improve durability, and produce
                beautiful, long-lasting results that increase both the comfort and value of your home.
              </p>
              <p className="leading-relaxed text-foreground/90 text-pretty">
                When you choose {BUSINESS.name}, you&apos;re not simply hiring painters. You&apos;re hiring
                professionals who understand that every repaired wall, every perfectly straight cut line,
                every carefully sanded surface, and every final inspection reflects our reputation. Because
                in the end, our name goes on every project long after the paint has dried.
              </p>
            </div>
          </div>
        </section>

        <section id="calculator" className="scroll-mt-24 bg-muted/40 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mb-8 text-center">
              <h2 className="mb-3 font-serif text-2xl font-bold text-foreground text-balance md:text-3xl">
                See what this process costs for your home
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Get an instant ballpark range built from our published 2026 Houston rates.
              </p>
            </div>
            <EstimateCalculator source="process_page_calculator" defaultService="interior" />
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Want the full breakdown?{" "}
              <Link href="/interior-painting-cost-houston" className="font-medium text-foreground underline">
                Read our interior painting cost guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ renders its own "Frequently Asked Questions" h2 and section
            wrapper, so no extra heading here (that would duplicate it). */}
        <FAQ items={faqs} variant="default" />

        <section className="bg-primary py-16">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 font-serif text-2xl font-bold text-primary-foreground text-balance md:text-3xl">
              Experience the {BUSINESS.name} Difference
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/90 text-pretty">
              If you&apos;re investing in your home, don&apos;t settle for a contractor who simply applies
              paint. Get a free, no-obligation interior painting estimate today.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
              <a
                href={SMS_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
                Text Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
