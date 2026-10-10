// Shared layout for consumer guides (owner brief 2026-10-10): direct answer,
// headed sections, visible FAQs (the only FAQ schema), dates, author, a
// limitations note, sources, related links and an estimate CTA. Each article
// file supplies only its content.

import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import FAQ from "@/components/faq"
import { JsonLd } from "@/components/structured-data"
import { PageHero, QuickAnswer, Section, LinkGrid, CtaBlock, breadcrumbNode, articleNode, ESTIMATE_PATH, SITE } from "@/components/aeo/blocks"
import { TrustChecklist } from "@/components/trust-checklist"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

export type GuideArticleData = {
  path: string
  title: string
  description: string
  h1: string
  eyebrow: string
  /** ISO dates. */
  published: string
  updated: string
  quickAnswer: ReactNode
  sections: { title: string; id?: string; body: ReactNode }[]
  faqs: { q: string; a: string }[]
  limitations: ReactNode
  sources?: { label: string; url: string }[]
  related: { label: string; href: string }[]
  breadcrumbParent?: { name: string; path: string }
  ctaTitle?: string
}

const fmt = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })

export function guideMetadata(d: Pick<GuideArticleData, "path" | "title" | "description" | "h1" | "published" | "updated">): Metadata {
  const url = `${SITE}${d.path}`
  return {
    title: d.title,
    description: d.description,
    alternates: { canonical: url },
    openGraph: {
      title: d.h1,
      description: d.description,
      url,
      type: "article",
      publishedTime: d.published,
      modifiedTime: d.updated,
      authors: [BUSINESS.founder.name],
      images: [{ url: BUSINESS.ogImage, width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: { card: "summary_large_image", title: d.h1, description: d.description },
  }
}

export function GuideArticle({ d }: { d: GuideArticleData }) {
  const parent = d.breadcrumbParent ?? { name: "Blog", path: "/blog" }
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            articleNode({
              path: d.path,
              headline: d.h1,
              description: d.description,
              datePublished: d.published,
              dateModified: d.updated,
            }),
            breadcrumbNode([
              { name: "Home", path: "/" },
              parent,
              { name: d.h1, path: d.path },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <PageHero h1={d.h1} eyebrow={d.eyebrow}>
          <p className="mt-6 text-sm text-soft-white/80">
            By{" "}
            <Link href="/about#juan-serra" rel="author" className="font-medium text-soft-white underline">
              {BUSINESS.founder.name}
            </Link>
            , {BUSINESS.founder.jobTitle.toLowerCase()}, {BUSINESS.name} · <time dateTime={d.published}>Published {fmt(d.published)}</time>
            {d.updated !== d.published && (
              <>
                {" "}
                · <time dateTime={d.updated}>Updated {fmt(d.updated)}</time>
              </>
            )}
          </p>
        </PageHero>

        <QuickAnswer>{d.quickAnswer}</QuickAnswer>

        {d.sections.map((s) => (
          <Section key={s.title} id={s.id} title={s.title}>
            {s.body}
          </Section>
        ))}

        <FAQ items={d.faqs} title="Frequently asked questions" variant="compact" />

        <Section title="Limitations of this guide">
          <p>{d.limitations}</p>
        </Section>

        {d.sources && d.sources.length > 0 && (
          <Section title="Sources">
            <ul>
              {d.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title="Related pages">
          <LinkGrid links={d.related} />
        </Section>

        <TrustChecklist />

        <CtaBlock title={d.ctaTitle ?? "Get a free written estimate"}>
          Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
          <Link href={ESTIMATE_PATH} className="underline">
            request an estimate online
          </Link>
          . Written scope, named products, and nothing due until you approve it.
        </CtaBlock>
      </main>
      <Footer />
    </>
  )
}
