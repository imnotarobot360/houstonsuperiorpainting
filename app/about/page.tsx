// app/about/page.tsx
// About Houston Superior Painting — owner Juan Serra, founded 2019, Cypress HQ,
// five offices. See docs/aeo-seo-plan-2026-09.md ("About" row + linking map).
//
// Schema: AboutPage only. The Organization (ORG_ID) and the owner Person
// (OWNER_ID) are emitted sitewide by the root layout, so this page references
// them by @id instead of redefining them. No LocalBusiness, no aggregateRating.

import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { MapPin, Phone, ShieldCheck, Languages, ClipboardList, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  BUSINESS,
  PHONE_HREF,
  OFFICE_PAGES,
  officeForPage,
  officeAddressLine, publicAddressLine, servingLine,
  officeMapsUrl,
} from "@/lib/business"
import { JsonLd, ORG_ID, OWNER_ID, WEBSITE_ID } from "@/components/structured-data"
import { breadcrumbNode, ESTIMATE_PATH, CtaBlock } from "@/components/aeo/blocks"

const PAGE_URL = "https://houstonsuperiorpainting.com/about"
const TITLE = "About Houston Superior Painting | Juan Serra, Owner, Since 2019"
const DESCRIPTION =
  "Founded in 2019 by Juan Serra in Cypress: a Houston painting company built on careful prep, written scopes and a 5-year written workmanship warranty."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    siteName: BUSINESS.name,
  },
}

const ABOUT_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": ORG_ID },
      about: [{ "@id": ORG_ID }, { "@id": OWNER_ID }],
      author: { "@id": OWNER_ID },
    },
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ],
}

// Offices in OFFICE_PAGES order (HQ first), each resolved to its BUSINESS.locations entry.
const OFFICES = OFFICE_PAGES.map((p) => ({ page: p, office: officeForPage(p.slug)! }))

const SERVICES = [
  { label: "Interior painting", href: "/interior-painting-houston-tx", text: "Walls, ceilings, trim, doors, and accent walls." },
  { label: "Exterior painting", href: "/exterior-painting-houston-tx", text: "Brick, stucco, HardiePlank, and wood siding." },
  { label: "Cabinet refinishing", href: "/cabinet-refinishing-houston-tx", text: "Degrease, sand, bonding primer, sprayed enamel." },
  { label: "Drywall repair", href: "/drywall-repair-houston-tx", text: "Patches, water damage, and texture matching before paint." },
  { label: "Limewash and brick painting", href: "/limewash-brick-painting-houston-tx", text: "Limewash, German smear, and painted brick." },
  { label: "Stucco painting and repair", href: "/stucco-painting-houston-tx", text: "Crack repair and elastomeric stucco coatings." },
  { label: "Soft washing", href: "/soft-washing-houston-tx", text: "Low-pressure mildew removal before exterior painting." },
  { label: "Fine finish painting", href: "/fine-finish-painting-houston", text: "Trim, doors, crown molding, built-ins and millwork." },
  { label: "Commercial painting", href: "/commercial-painting-houston-tx", text: "Offices, retail, restaurants, HOAs and multifamily." },
  { label: "Wallpaper removal", href: "/wallpaper-removal-houston-tx", text: "Removal, wall repair and priming before paint." },
  { label: "Wood rot repair", href: "/wood-rot-repair-houston-tx", text: "Rotted trim, fascia and siding replaced before paint." },
  { label: "Color consultation", href: "/paint-color-consultation-houston", text: "Free color and sheen guidance with your estimate." },
]

/**
 * Owner-supplied founder extras. Everything here is empty until Juan provides
 * approved content in BUSINESS.founderProfile, and nothing renders while empty.
 */
function FounderExtras() {
  const p = BUSINESS.founderProfile
  const any = p.photo || p.videoUrl || p.statement || p.timeline.length || p.community.length
  if (!any) return null
  return (
    <div className="mb-8 space-y-6">
      {p.photo && (
        <Image
          src={p.photo.src}
          alt={p.photo.alt}
          width={p.photo.width}
          height={p.photo.height}
          className="rounded-xl border border-border"
        />
      )}
      {p.statement && (
        <blockquote className="border-l-4 border-gold pl-5 text-lg italic text-foreground/90">{p.statement}</blockquote>
      )}
      {p.videoUrl && (
        <video src={p.videoUrl} controls preload="none" className="w-full rounded-xl border border-border" />
      )}
      {p.timeline.length > 0 && (
        <ol className="space-y-2">
          {p.timeline.map((t) => (
            <li key={t.year + t.text}>
              <strong>{t.year}</strong> · {t.text}
            </li>
          ))}
        </ol>
      )}
      {p.community.length > 0 && (
        <ul className="list-disc pl-5">
          {p.community.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function AboutPage() {
  const { trust } = BUSINESS
  return (
    <>
      <JsonLd data={ABOUT_JSONLD} />
      <Header />
      <main className="bg-background text-foreground">
        {/* ─── HERO ─── */}
        <section className="relative bg-midnight py-14 md:py-20">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <div className="container mx-auto px-4 max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-soft-white/70">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-gold">Home</Link>
                </li>
                <li aria-hidden>›</li>
                <li className="text-soft-white">About</li>
              </ol>
            </nav>
            <p className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-4">
              Founded {BUSINESS.founded} · Headquartered in Cypress, TX
            </p>
            <h1 className="hero-h1 font-display text-4xl md:text-5xl font-bold text-soft-white text-balance leading-[1.1]">
              About Houston Superior Painting
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl">
          <p className="quick-answer text-lg md:text-xl leading-relaxed text-foreground border-l-4 border-gold bg-secondary/10 px-6 py-5 my-10 rounded-r-lg">
            Houston Superior Painting is a residential and commercial painting contractor founded in{" "}
            {BUSINESS.founded} by {BUSINESS.founder.name}. We are headquartered in Cypress, TX, and serve Greater
            Houston, including Cypress, Houston, Katy, Sugar Land and Magnolia. {BUSINESS.insurance.sentence}{" "}
            {BUSINESS.warranty.summary} {BUSINESS.paymentPolicy.sentence}
            Call <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a>.
          </p>
        </div>

        {/* ─── OWNER ─── */}
        <section className="container mx-auto px-4 max-w-4xl mb-14" id="juan-serra">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Who runs Houston Superior Painting</h2>
          <p className="font-display text-2xl text-foreground mb-5 text-balance">
            A Houston painting company built around preparation, written expectations and finishes designed for
            Houston conditions.
          </p>
          {/* Owner photo, video, statement, timeline and community items render only
              when Juan supplies them (BUSINESS.founderProfile); empty values show nothing. */}
          <FounderExtras />
          <div className="space-y-4 text-lg leading-relaxed text-foreground/85">
            <p>
              <strong className="text-foreground">{BUSINESS.founder.name}</strong> founded Houston Superior Painting
              in {BUSINESS.founded} and is the company&apos;s owner. He runs it from our Cypress headquarters, and the
              company serves Greater Houston.
            </p>
            <p>
              The company was built on one idea: in Houston&apos;s heat and humidity, paint only lasts as long as the
              prep underneath it. That is why our estimates spell out the prep work line by line, and why our
              slogan is &ldquo;{BUSINESS.slogan}&rdquo;
            </p>
          </div>
        </section>

        {/* ─── APPROACH ─── */}
        <section className="container mx-auto px-4 max-w-4xl mb-14" id="approach">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">How we approach a project</h2>
          <div className="space-y-4 text-lg leading-relaxed text-foreground/85">
            <p>
              <strong className="text-foreground">Written scopes.</strong> The estimate names every surface included and
              excluded, the preparation for each, the primer, the product line, the sheen and the number of coats or
              the coverage standard. If something isn&apos;t written down, ask for it to be added before you approve.
            </p>
            <p>
              <strong className="text-foreground">Product selection.</strong> Products are chosen for the surface and
              for Houston&apos;s heat, sun and humidity: {BUSINESS.paintPartners.join(", ")} lines on walls and
              exteriors, and on cabinets and trim {BUSINESS.cabinetFinish.sentence}.
            </p>
            <p>
              <strong className="text-foreground">Final walkthrough.</strong> When the work is done we walk it with you,
              note anything that needs attention and finish it before the job is closed out.
            </p>
            <p>
              <strong className="text-foreground">Communication.</strong> You can reach the office by phone or text at{" "}
              <a href={PHONE_HREF} className="text-primary underline underline-offset-2">{BUSINESS.phone}</a>. The start
              date and schedule are agreed before work begins, and any extra work found during the job is priced and
              approved in writing before it is done.
            </p>
          </div>
        </section>

        {/* ─── OFFICES ─── */}
        <section className="container mx-auto px-4 max-w-4xl mb-14" id="offices">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Where we work</h2>
          <p className="text-lg text-foreground/80 mb-6">
            We serve Greater Houston. Each of these areas has its own Google Business Profile. Estimates happen at your
            home or business; phone hours: {BUSINESS.hoursSummary.map((h) => `${h.label} ${h.value}`).join(" · ")}.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {OFFICES.map(({ page, office }) => (
              <div key={office.slug} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  <Link href={`/${page.slug}`} className="hover:text-primary">
                    House painters in {office.city}, TX
                  </Link>
                  {"isHeadquarters" in office && office.isHeadquarters ? (
                    <span className="ml-2 text-xs font-manrope uppercase tracking-wider text-gold-deep">HQ</span>
                  ) : null}
                </h3>
                {publicAddressLine(office) && (
                  <p className="flex items-start gap-2 text-foreground/85">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" aria-hidden />
                    <span>Headquarters: {publicAddressLine(office)}</span>
                  </p>
                )}
                <p className="mt-1 text-sm text-muted-foreground">
                  {servingLine(office)}, including {office.areaServed.join(", ")}.
                </p>
                <a
                  href={officeMapsUrl(office)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Star className="h-4 w-4" aria-hidden /> {office.city} Google Business Profile
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ─── WHAT WE DO ─── */}
        <section className="container mx-auto px-4 max-w-4xl mb-14" id="services">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">What we do</h2>
          <p className="text-lg text-foreground/80 mb-6">
            Most of our work is full interior repaints, exterior repaints, and kitchen cabinet refinishing for
            homeowners. We also paint offices, retail, and light commercial buildings.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {SERVICES.map((s) => (
              <li key={s.href} className="bg-card border border-border rounded-lg p-4">
                <Link href={s.href} className="font-semibold text-foreground hover:text-primary">
                  {s.label}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── HOW WE WORK ─── */}
        <section className="container mx-auto px-4 max-w-4xl mb-14" id="how-we-work">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">How we work</h2>
          <p className="text-lg text-foreground/85 mb-4">
            Every estimate is written and itemized so you can compare bids line by line.{" "}
            <Link href={ESTIMATE_PATH} className="text-primary underline underline-offset-2">
              Request a free painting estimate in Houston
            </Link>
            .
          </p>
          <ul className="space-y-4 text-lg text-foreground/85">
            <li className="flex gap-3">
              <ClipboardList className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" aria-hidden />
              <span>
                <strong className="text-foreground">Prep first.</strong> Pressure washing, scraping, sanding,
                wood-rot replacement, caulking, and priming come before any finish coat.
              </span>
            </li>
            <li className="flex gap-3">
              <ClipboardList className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" aria-hidden />
              <span>
                <strong className="text-foreground">Clear Written Payment Terms.</strong> The estimate is free. Your written estimate identifies the complete scope, total price, required deposit and payment schedule before you approve the project.
              </span>
            </li>
            <li className="flex gap-3">
              <ShieldCheck className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" aria-hidden />
              <span>
                <strong className="text-foreground">{trust.warrantyYears}-year written workmanship warranty.</strong>{" "}
                {BUSINESS.warrantyTermsSentence}{" "}
                <Link href="/warranty" className="text-primary underline underline-offset-2">
                  Read our painting warranty
                </Link>
                .
              </span>
            </li>
            <li className="flex gap-3">
              <ShieldCheck className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" aria-hidden />
              <span>
                <strong className="text-foreground">Insured, not &ldquo;licensed.&rdquo;</strong>{" "}
                {BUSINESS.insurance.licenseNote} {BUSINESS.insuranceProof.en}{" "}
                <Link href="/insurance-and-warranty#request-proof-of-insurance" className="text-primary underline underline-offset-2">
                  Request proof of insurance
                </Link>
                . Texas does not issue a state license for painting contractors, so we don&apos;t claim one, and you
                should be wary of any painter who does.
              </span>
            </li>
            <li className="flex gap-3">
              <Languages className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" aria-hidden />
              <span>
                <strong className="text-foreground">English and Spanish.</strong> We can talk through your project in English or
                Spanish. Hablamos español.
              </span>
            </li>
          </ul>
        </section>

        {/* ─── TRACK RECORD ─── */}
        <section className="container mx-auto px-4 max-w-4xl mb-14" id="track-record">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our track record</h2>
          <p className="text-lg text-foreground/85 leading-relaxed">
            Since {BUSINESS.founded} we have painted homes and businesses across Greater
            Houston. See before-and-after photos and the full scope of real jobs in our{" "}
            <Link href="/projects" className="text-primary underline underline-offset-2">
              Houston painting projects
            </Link>
            , and read what customers say on{" "}
            <Link href="/reviews" className="text-primary underline underline-offset-2">
              each location&apos;s Google profile
            </Link>
            .
          </p>
        </section>

        {/* ─── OFFICIAL SITE ─── */}
        <section className="container mx-auto px-4 max-w-4xl mb-14" id="official-website">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Our official website</h2>
          <p className="text-lg text-foreground/85 leading-relaxed border border-border bg-card rounded-xl p-5">
            {BUSINESS.officialSiteDisclaimer}
          </p>
        </section>

        {/* ─── CONTACT ─── */}
        <section className="container mx-auto px-4 max-w-4xl mb-10">
          <p className="flex items-center gap-2 text-lg">
            <Phone className="h-5 w-5 text-primary" aria-hidden />
            <a href={PHONE_HREF} className="font-semibold text-foreground hover:text-primary">
              {BUSINESS.phone}
            </a>
            <span className="text-muted-foreground">· {BUSINESS.email}</span>
          </p>
        </section>

        <CtaBlock title="Get a free painting estimate from Houston Superior Painting" />
      </main>
      <Footer />
    </>
  )
}
