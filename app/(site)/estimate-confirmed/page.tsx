import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, Phone, MessageSquare, Clock, ClipboardList, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BUSINESS, PHONE_HREF, SMS_HREF } from "@/lib/business"

/**
 * Post-submission confirmation for the paid-traffic funnel.
 *
 * `noindex` is mandatory here, not optional. A crawlable thank-you page is a
 * classic conversion-tracking leak: it collects organic impressions for
 * "painting estimate" queries, and any bot or curious visitor that lands on it
 * directly inflates the conversion count that Ads bidding depends on.
 * `nofollow` keeps it from passing authority out of a dead-end URL.
 */
export const metadata: Metadata = {
  title: "Estimate Request Received — Houston Superior Painting",
  description:
    "Your painting estimate request has been received. We'll reach out within one business day to schedule your free walkthrough.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

const NEXT_STEPS = [
  {
    icon: Phone,
    title: "We call you within one business day",
    body: "A real estimator from our team — not a call center. We confirm the scope and answer questions before anyone visits.",
  },
  {
    icon: ClipboardList,
    title: "We schedule the walkthrough",
    body: "Usually 30–45 minutes at your place, at a time that suits you. Evenings and Saturdays are available.",
  },
  {
    icon: Clock,
    title: "You get a written, itemized estimate",
    body: "Preparation, coatings, scope, timeline and warranty — all in writing, with no pressure to sign anything.",
  },
]

export default async function EstimateConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; service?: string }>
}) {
  // searchParams is async in Next.js 16 and must be awaited.
  const { name, service } = await searchParams
  const firstName = name?.trim().slice(0, 40)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 py-14 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <CheckCircle2 className="h-8 w-8 text-secondary" aria-hidden="true" />
          </div>
          <p className="mt-6 font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Request received
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl">
            {firstName ? `Thanks, ${firstName} — we've got it.` : "Thanks — we've got your request."}
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            {service
              ? `Your ${service.toLowerCase()} painting request is with our estimating team. `
              : "Your request is with our estimating team. "}
            We&apos;ll reach out within one business day to confirm details and schedule your free
            on-site estimate.
          </p>
        </div>

        {/* Urgency path. Some ad traffic converts because they need someone
            today — make the phone the obvious next move rather than making
            them wait for the callback. */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-7">
          <h2 className="font-display text-lg font-bold text-foreground">Need it sooner?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Call or text us directly and we&apos;ll get you on the schedule now.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="flex-1 bg-secondary text-base font-semibold text-secondary-foreground hover:bg-secondary/90"
            >
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1 text-base font-semibold">
              <a href={SMS_HREF}>
                <MessageSquare className="mr-2 h-4 w-4" aria-hidden="true" />
                Text us photos
              </a>
            </Button>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-foreground">What happens next</h2>
          <ol className="mt-5 flex flex-col gap-4">
            {NEXT_STEPS.map((item) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                  <item.icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to Houston Superior Painting
          </Link>
        </div>
      </main>
    </div>
  )
}
