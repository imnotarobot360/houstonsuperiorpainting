import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Star,
  ShieldCheck,
  BadgeCheck,
  Check,
  X,
  FileText,
  ArrowRight,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { EstimateServicePicker } from "@/components/estimate-service-picker"
import { BUSINESS, PHONE_HREF, PRICES_2026 } from "@/lib/business"
import { PROJECTS } from "@/lib/projects"

/**
 * The organic/SEO estimate page. Indexed and in the sitemap — the paid traffic
 * goes to the dedicated /chatgpt/* pages instead.
 *
 * Because it ranks, the content here is load-bearing: the single h1, the section
 * headings and the body copy are what it ranks for, so layout work must not
 * thin them out. The FAQ deliberately uses native <details> so the answers ship
 * in the server HTML and stay in step with the FAQPage JSON-LD built from the
 * same FAQS array.
 *
 * Audience: people comparing contractors, comparing quotes, researching prices,
 * and ready to hire — all of whom have already been quoted vaguely by someone
 * else. So the page's job is to be the concrete one, and the signature element
 * is a specimen line-item estimate: showing exactly what they'll receive beats
 * any adjective.
 *
 * Intentionally omits the site's main navigation, and the four global
 * interruptions (sticky bars, exit-intent modal, chat bubble) are suppressed
 * here via lib/focused-routes — the page already has the funnel and a call
 * button, so those only compete with it. The footer stays for internal linking.
 */

const CANONICAL = "https://houstonsuperiorpainting.com/painting-estimate-houston"

export const metadata: Metadata = {
  title: "Houston Painting Estimate — Free, Itemized & In Writing",
  description:
    "Get a detailed Houston painting estimate. See exactly what's included — preparation, coatings, scope, timeline and warranty — before the project starts.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Get a Detailed Houston Painting Estimate",
    description:
      "Know exactly what's included before the project starts — preparation, coatings, scope, timeline and warranty.",
    url: CANONICAL,
    siteName: BUSINESS.name,
    type: "website",
    images: [
      {
        url: BUSINESS.ogImage,
        width: 1200,
        height: 630,
        alt: "Houston Superior Painting estimator reviewing a project scope",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Detailed Houston Painting Estimate",
    description:
      "See exactly what's included — preparation, coatings, scope, timeline and warranty. Free estimates in Houston, Katy & Cypress.",
    images: [BUSINESS.ogImage],
  },
}

/** The specimen estimate — what a real line item looks like versus a vague one. */
const ESTIMATE_LINES = [
  {
    label: "Surface preparation",
    detail:
      "Scrape, sand and feather all failing paint. Caulk gaps at trim and penetrations. Spot-prime every bare or patched area.",
    vague: "\u201CPrep walls\u201D",
  },
  {
    label: "Coating system",
    detail:
      "Named product, sheen and coat count per surface — e.g. Sherwin-Williams Duration, satin, two finish coats over primer.",
    vague: "\u201CPremium paint\u201D",
  },
  {
    label: "Scope by surface",
    detail:
      "Walls, ceilings, trim, doors, closets and jambs listed room by room, with anything excluded stated plainly.",
    vague: "\u201CPaint interior\u201D",
  },
  {
    label: "Repairs called out separately",
    detail:
      "Drywall, wood rot and stucco cracks priced as their own lines so you can see what is repair and what is paint.",
    vague: "Bundled into one number",
  },
  {
    label: "Schedule",
    detail:
      "Start date, working days on site, daily hours, and who your point of contact is for the duration.",
    vague: "\u201CAbout a week\u201D",
  },
  {
    label: "Warranty terms",
    detail: `${BUSINESS.trust.warrantyYears}-year written warranty covering peeling, blistering and coating failure.`,
    vague: "Verbal assurance",
  },
]

/**
 * Case studies shown in the gallery — an explicit allow-list, not a slice.
 *
 * Only pairs verified as genuine photographs of the same property before and
 * after our work belong here. Both of these check out: the Memorial dining room
 * is a real interior photo, and the River Oaks pair is unmistakably the same
 * house from the same spot on the same day (identical cloud cover, planting and
 * the "1923" plaque) with the stucco taken from tan to white.
 *
 * The other four entries in PROJECTS are deliberately excluded until their
 * photography is confirmed:
 *   - west-university…cabinet-refinishing — the "before" is a four-panel
 *     collage of already-finished kitchens and the "after" is a different
 *     kitchen entirely (wood vs. blue), so the pair cannot be a before/after.
 *   - bellaire…stucco, heights…wallpaper, cypress…wood-rot — seamless
 *     synthetic-looking textures rather than photographs of Houston jobs.
 *
 * Every verified image is a .jpg straight off a phone while all four excluded
 * ones are .png. Useful smell test, not a rule — check new photos by eye
 * before adding a slug here.
 *
 * This page sells estimates on the promise that nothing is hidden, so an
 * invented before/after would undercut the one thing it is arguing.
 */
const GALLERY_SLUGS = ["memorial-whole-home-interior-repaint", "river-oaks-exterior-restoration"]

const GALLERY_PROJECTS = PROJECTS.filter((project) => GALLERY_SLUGS.includes(project.slug))

/** Comparison-shopper ammunition. Useful whether or not they hire us. */
const QUESTIONS = [
  "Which specific product, sheen and how many coats — by name, on each surface?",
  "What preparation is included, and what happens if you find rot or failing paint?",
  "Is the crew employed by you, or subcontracted?",
  "Are you carrying general liability insurance, and for how much?",
  "What is in writing about the warranty, and what voids it?",
  "Who is on site each day, and who do I call if something is wrong?",
]

const PRICE_BANDS = [
  { scope: "Interior — 1 to 2 rooms", range: "$650 – $1,800" },
  { scope: "Interior — whole home (2,000 sq ft)", range: PRICES_2026.fullInterior2000 },
  { scope: "Exterior — single-story", range: "$3,500 – $7,500" },
  { scope: "Exterior — two-story", range: "$6,500 – $14,000" },
  { scope: "Cabinet refinishing — kitchen", range: PRICES_2026.cabinetsPerKitchen },
]

const FAQS = [
  {
    question: "How much does a painting estimate cost in Houston?",
    answer:
      "Nothing. Our estimates are free and carry no obligation. We provide a written, itemized estimate after a walkthrough of your property, and you are free to take it to other contractors for comparison.",
  },
  {
    // This array feeds both the visible FAQ and the FAQPage JSON-LD, so the old
    // "we contact you within one business day" answer was being served to
    // Google as well as to visitors — while the form on this same page lets
    // people pick their own walkthrough slot instantly. Describes the real
    // sequence now: you book the time, we show up, the estimate follows.
    question: "How long does it take to get an estimate?",
    answer:
      "You choose your own walkthrough time on this page — pick a slot that suits you and it is confirmed straight away, with no waiting for a call back. The walkthrough itself takes about 45 minutes, and your written, itemized estimate follows within 24 hours of that visit.",
  },
  {
    question: "Do I need to be home for the estimate?",
    answer:
      "For interior work, yes — we need to see the rooms and discuss the scope with you. For exterior-only projects we can often measure and assess without you present, then review the estimate by phone or email.",
  },
  {
    question: "Why are painting quotes in Houston so different from each other?",
    answer:
      "Almost always because the scope differs, not the labor rate. A lower quote often excludes preparation, uses a builder-grade coating, applies one coat instead of two, or leaves repairs off entirely. Comparing quotes is only meaningful when each one lists its products, coat counts and preparation in writing.",
  },
  {
    question: "What areas do you provide estimates in?",
    answer:
      "Houston and the surrounding areas including Cypress, Katy, Spring, Tomball, The Woodlands, Sugar Land and Jersey Village. If you are unsure whether you are in range, call us and we will tell you honestly.",
  },
]

/**
 * Hero benefit list + credentials row.
 *
 * Placed twice — inside the copy column on desktop, and after the form on
 * mobile so the first screen is headline + form. Only one copy is ever visible
 * at a given breakpoint.
 */
function HeroSupportingDetail() {
  return (
    <>
      <ul className="flex flex-col gap-3">
        {[
          "Itemized in writing — every product, coat count and repair listed separately",
          "A real estimator walks your property — not a number guessed over the phone",
          "Yours to keep and compare against any other Houston contractor",
        ].map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" aria-hidden="true" />
            <span className="leading-relaxed text-foreground">{benefit}</span>
          </li>
        ))}
      </ul>

      {/* A list rather than loose spans: screen readers announce the count and
          read each credential as a discrete item instead of running the
          numbers together into one string. */}
      <ul
        aria-label="Credentials"
        className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6"
      >
        <li className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
          <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
          {BUSINESS.trust.googleRating} on Google · {BUSINESS.trust.reviewCount}+ reviews
        </li>
        <li className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
          <ShieldCheck className="h-4 w-4 text-secondary" aria-hidden="true" />
          Insured &amp; bonded · {BUSINESS.trust.liabilityCoverage} liability
        </li>
        <li className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
          <BadgeCheck className="h-4 w-4 text-secondary" aria-hidden="true" />
          {BUSINESS.trust.warrantyYears}-year written warranty
        </li>
      </ul>
    </>
  )
}

export default function PaintingEstimatePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Minimal header: identity and a phone number, nothing to click away with. */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt={`${BUSINESS.name} logo`}
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
            <span className="font-display text-sm font-bold leading-tight text-foreground sm:text-base">
              {BUSINESS.name}
            </span>
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{BUSINESS.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────────── */}
        {/* Defined once and placed twice (desktop: in the copy column; mobile:
            after the form) so the two never drift apart. */}
        <section className="border-b border-border bg-card">
          {/* max-w-7xl: at 1990px the old max-w-6xl left ~420px of dead cream
              on each side while the funnel column was cramped. The prose
              sections below stay narrower on purpose — a wide shell is right
              for a hero with a form beside it, wrong for body text. */}
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-8 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16 lg:py-20">
            {/* Column order is driven by the two direct grid children only.
                On mobile the copy block splits around the form via `order`
                (headline stays first, supporting detail drops below it); on
                desktop both revert to the natural two-column layout. */}
            <div className="order-1 flex flex-col justify-center lg:order-none">
              <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Free estimates · Houston, Katy &amp; Cypress
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-foreground text-balance sm:text-5xl lg:mt-4">
                Get a Detailed Houston Painting Estimate
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mt-5">
                Know exactly what&apos;s included before the project starts — preparation,
                coatings, scope, timeline and warranty. In writing, itemized, with no obligation.
              </p>

              {/* Rendered once here for desktop and again after the form for
                  mobile — see HeroSupportingDetail. */}
              <div className="hidden lg:mt-7 lg:block">
                <HeroSupportingDetail />
              </div>
            </div>

            {/* order-2 on mobile puts the form directly under the headline;
                natural order on desktop keeps it in the right-hand column. */}
            {/* min-w-0: as the grid child, its automatic minimum size is its
                content width, so the booking calendar's day strip widened this
                track past the max-w-6xl container and crushed the headline. */}
            {/* Deliberately not sticky.
                A `position: sticky` child can only travel inside its own
                containing block, and this form's parent is just the hero grid —
                554px of form in a 714px row, so it would unstick after ~160px
                and scroll away exactly like a static element. Making it follow
                the whole page would mean putting the funnel and every proof
                section inside one shared parent, which is a much larger
                restructure than the benefit justifies. The header keeps a Call
                button visible instead. */}
            <div id="estimate-form" className="order-2 min-w-0 lg:order-none lg:pl-2">
              <EstimateServicePicker />
            </div>

            {/* Mobile-only repeat of the supporting detail, below the form. */}
            <div className="order-3 lg:hidden">
              <HeroSupportingDetail />
            </div>
          </div>
        </section>

        {/* ── Signature: the specimen estimate ───────────────────── */}
        <section className="mx-auto w-full max-w-7xl px-5 py-20 lg:py-24">
          <div className="max-w-2xl">
            {/* Short orange rule above the eyebrow. The accent appears only as
                these rules and the eyebrow text, so it marks section starts
                without competing with the CTA buttons for attention. */}
            <div className="h-px w-12 bg-accent" aria-hidden="true" />
            <p className="mt-5 font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              What you actually receive
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
              Six things your estimate spells out
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
              Most painting quotes in Houston are a single number on a business card. Here is every
              line ours breaks out, next to the phrase it usually gets replaced with.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="hidden grid-cols-[1fr_1.5fr_0.9fr] gap-6 border-b border-border bg-muted/50 px-6 py-3 md:grid">
              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Line item
              </span>
              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What we write
              </span>
              <span className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What you usually get
              </span>
            </div>

            <ul className="divide-y divide-border">
              {ESTIMATE_LINES.map((line) => (
                <li
                  key={line.label}
                  className="grid gap-3 px-6 py-5 md:grid-cols-[1fr_1.5fr_0.9fr] md:items-start md:gap-6"
                >
                  <div className="flex items-start gap-2.5">
                    <FileText
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent md:hidden"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-foreground">{line.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{line.detail}</p>
                  <p className="inline-flex items-start gap-2 text-sm leading-relaxed text-muted-foreground/80">
                    <X
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-destructive"
                      aria-hidden="true"
                    />
                    <span className="italic">{line.vague}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Project gallery ────────────────────────────────────── */}
        {/* Real before/after pairs from lib/projects.ts. An estimate page is
            asking for trust before any money changes hands, and photographs of
            named Houston streets do more for that than any adjective. Each card
            links to its existing /projects/[slug] case study, which also gives
            this page genuine internal links rather than decorative ones. */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto w-full max-w-7xl px-5 py-20 lg:py-24">
            <div className="max-w-2xl">
              <div className="h-px w-12 bg-accent" aria-hidden="true" />
              <p className="mt-5 font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Recent Houston projects
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
                The work behind the estimate
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                Both of these were quoted the same way yours will be — itemized, in writing, before
                a brush was opened. Same house, same angle, before and after.
              </p>
            </div>

            {/* Two columns, not three: with two verified projects a 3-column
                grid leaves a conspicuous empty cell. Two wider cards fill the
                row and give the photographs more room, which suits a section
                whose whole job is letting people look closely. */}
            <ul className="mt-12 grid gap-8 sm:grid-cols-2">
              {GALLERY_PROJECTS.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-accent/60"
                  >
                    {/* Before and after side by side rather than a hover swap:
                        the comparison is the entire point, and a hover reveal
                        hides it on touch devices, which is most of this
                        page's traffic. */}
                    <div className="grid grid-cols-2 gap-px bg-border">
                      {[
                        { src: project.beforeImage, alt: project.beforeAlt, tag: "Before" },
                        { src: project.afterImage, alt: project.afterAlt, tag: "After" },
                      ].map((shot) => (
                        <div key={shot.tag} className="relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={shot.src || "/placeholder.svg"}
                            alt={shot.alt}
                            fill
                            loading="lazy"
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-cover"
                          />
                          <span className="absolute left-2 top-2 rounded bg-foreground/75 px-1.5 py-0.5 font-manrope text-[10px] font-semibold uppercase tracking-wider text-background">
                            {shot.tag}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                        {project.service}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-foreground text-pretty">
                        {project.neighborhood}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                        {project.summary}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-manrope text-sm font-semibold text-secondary">
                        See the full project
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* The funnel is back at the top and doesn't follow the page, so
                anyone persuaded by the photos would otherwise have to scroll
                back up to act. An in-page anchor rather than a new route: it
                returns them to the form they already saw, with no page load. */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href="#estimate-form">
                  Get my free estimate
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Link
                href="/projects"
                className="font-manrope text-sm font-semibold text-secondary underline-offset-4 hover:underline"
              >
                Browse all Houston projects
              </Link>
            </div>
          </div>
        </section>

        {/* ── Price transparency ─────────────────────────────────── */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-24">
            <div>
              <div className="h-px w-12 bg-accent" aria-hidden="true" />
              <p className="mt-5 font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Researching prices
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground text-balance">
                Typical Houston ranges, before we&apos;ve seen your place
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                These are real ranges from recent Houston-area projects. We publish them because a
                contractor who won&apos;t talk numbers until they&apos;re standing in your living
                room is managing you, not informing you.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Where a project lands inside its range depends on square footage, ceiling height,
                the condition of the existing paint, and how much repair work turns up. Your written
                estimate replaces the range with one number.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-2">
              <ul className="divide-y divide-border">
                {PRICE_BANDS.map((band) => (
                  <li
                    key={band.scope}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-4 py-4"
                  >
                    <span className="font-medium text-foreground">{band.scope}</span>
                    <span className="font-manrope font-semibold tabular-nums text-secondary">
                      {band.range}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Comparison-shopper aid ─────────────────────────────── */}
        <section className="mx-auto w-full max-w-7xl px-5 py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <div className="h-px w-12 bg-accent" aria-hidden="true" />
              <p className="mt-5 font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Comparing contractors
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground text-balance">
                Six questions to ask every painter you talk to
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
                Including us. If a contractor gets vague on any of these, that vagueness is the
                thing you&apos;d be paying for later.
              </p>
              <ol className="mt-7 flex flex-col gap-4">
                {QUESTIONS.map((question) => (
                  <li key={question} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed text-foreground">{question}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/painting-team.jpg"
                  alt="Houston Superior Painting crew preparing an interior wall before painting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-lg font-semibold leading-relaxed text-foreground text-pretty">
                  &ldquo;Old-school preparation. Premium long-lasting results.&rdquo;
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {BUSINESS.founder.name}, {BUSINESS.founder.jobTitle} — painting Houston homes
                  since {BUSINESS.founded}. He personally reviews every estimate that leaves our
                  office.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto w-full max-w-3xl px-5 py-20 lg:py-24">
            <div className="h-px w-12 bg-accent" aria-hidden="true" />
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
              Questions about estimates
            </h2>

            {/* Native <details>/<summary>, not a JS accordion.
                The answers ship inside the server HTML either way, which keeps
                the visible text in step with the FAQPage JSON-LD built from this
                same FAQS array — a JS-gated accordion would render answers only
                after hydration and risk a schema/content mismatch. It also
                gives keyboard and screen-reader support for free.
                The first is open so the section doesn't read as empty. */}
            <div className="mt-10 divide-y divide-border border-t border-border">
              {FAQS.map((faq, i) => (
                <details key={faq.question} open={i === 0} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold text-foreground text-pretty [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <Plus
                      className="mt-1 h-4 w-4 flex-shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTA ────────────────────────────────────────── */}
        <section className="bg-primary">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-16 text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-primary-foreground text-balance sm:text-4xl">
              Ready for a number you can actually compare?
            </h2>
            {/* Was "answer three quick questions and we'll reach out within one
                business day" — wrong on both counts. The funnel is four
                questions plus photos and contact details, and it ends in the
                visitor booking their own slot, not in us calling them. */}
            <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/75 text-pretty">
              Answer a few quick questions, then pick the walkthrough time that suits you. Confirmed
              on the spot — no waiting for a call back.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-base font-semibold text-secondary-foreground hover:bg-secondary/90"
              >
                <a href="#estimate-form">
                  Schedule My Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/25 bg-transparent text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={PHONE_HREF}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {BUSINESS.phone}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
