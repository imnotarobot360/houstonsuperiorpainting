import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { eq } from "drizzle-orm"
import { Check, Phone } from "lucide-react"
import { Footer } from "@/components/footer"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { getFunnel } from "@/lib/funnel-config"

/**
 * Receipt for a submitted estimate request, reached by unguessable token.
 *
 * Shows what we received so the customer can see nothing was lost, and states
 * what happens next in plain terms.
 */

export const metadata: Metadata = {
  title: "Estimate request received",
  // Contains customer details — must never be indexed.
  robots: { index: false, follow: false },
}

export default async function ConfirmedPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params

  const [lead] = await db
    .select({
      publicToken: leads.publicToken,
      service: leads.service,
      answers: leads.answers,
      name: leads.name,
      phone: leads.phone,
      zip: leads.zip,
      photoPaths: leads.photoPaths,
      appointmentStart: leads.appointmentStart,
      createdAt: leads.createdAt,
    })
    .from(leads)
    .where(eq(leads.publicToken, token))
    .limit(1)

  if (!lead) notFound()

  const config = getFunnel(lead.service)
  const answers = (lead.answers ?? {}) as Record<string, string>
  const photos = (lead.photoPaths ?? []) as string[]

  /**
   * The confirmed appointment, formatted in the business's own timezone.
   *
   * Rendered in America/Chicago rather than the reader's locale: the estimator
   * arrives at a Houston address at a Houston time, so showing 9:00 AM to
   * someone reading this on holiday in another zone would be actively wrong.
   */
  const appointment = lead.appointmentStart
    ? new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/Chicago",
      }).format(lead.appointmentStart)
    : null

  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-12 sm:px-6 lg:py-16">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <Check className="size-4" aria-hidden="true" />
              {appointment ? "Appointment confirmed" : "Request received"}
            </span>
            <h1 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
              Thanks {lead.name.split(" ")[0]} — we have your {config?.label.toLowerCase() ?? "estimate"} request
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              {/* Spacing kept inside the expression: relying on JSX text
                  adjacent to an expression let the separating space collapse
                  and rendered "…0177to confirm".

                  Two genuinely different states. A slot booked in-funnel is
                  confirmed on the real calendar, so calling it "pencilled in"
                  and promising a confirmation call would understate it and
                  invite a pointless phone call. Without a slot, a call really
                  is the next step. */}
              {/* Deliberately does not promise a reminder call or text: whether
                  InsightPaint sends one is an office setting we can't verify
                  from here, and a reminder that never arrives is worse than
                  none. It states only what is certainly true. */}
              {appointment
                ? `Your estimator is booked for ${appointment}. Nothing else is needed from you — we have the address and your project details.`
                : `A member of the team will call you on ${lead.phone} to arrange a time that suits you.`}
            </p>
          </div>

          {/* The single most important fact on the page when a slot was booked,
              so it gets its own block above the recap rather than being buried
              in the detail list. */}
          {appointment && (
            <div className="flex flex-col gap-1 rounded-2xl border border-accent bg-card p-6">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">Your appointment</span>
              <p className="font-serif text-2xl leading-tight text-foreground text-balance">{appointment}</p>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                Central Time · about 30 minutes. Need to move it? Just call and we&apos;ll reschedule.
              </p>
            </div>
          )}

          {/* What we received. Reassures the customer nothing was dropped. */}
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-serif text-xl text-foreground">What you told us</h2>
            <dl className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-sm text-muted-foreground">Service</dt>
                <dd className="text-sm font-medium text-foreground sm:text-right">
                  {config?.label ?? lead.service}
                </dd>
              </div>

              {config?.questions.map((q) =>
                answers[q.id] ? (
                  <div key={q.id} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <dt className="text-sm text-muted-foreground text-pretty">{q.question}</dt>
                    <dd className="text-sm font-medium text-foreground sm:text-right">{answers[q.id]}</dd>
                  </div>
                ) : null,
              )}

              {lead.zip && (
                <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-sm text-muted-foreground">ZIP</dt>
                  <dd className="text-sm font-medium text-foreground sm:text-right">{lead.zip}</dd>
                </div>
              )}

              <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-sm text-muted-foreground">Photos attached</dt>
                <dd className="text-sm font-medium text-foreground sm:text-right">{photos.length}</dd>
              </div>
            </dl>

            {photos.length > 0 && (
              <ul className="flex flex-wrap gap-3 border-t border-border pt-4">
                {photos.map((pathname) => (
                  <li key={pathname}>
                    {/* Private blobs stream through our own route, gated on this
                        lead's token. A raw blob URL would not load. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/api/lead-photo?pathname=${encodeURIComponent(pathname)}&token=${encodeURIComponent(lead.publicToken)}`}
                      alt="Photo you attached to this estimate request"
                      className="size-20 rounded-lg border border-border object-cover"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-muted p-6">
            <h2 className="font-serif text-xl text-foreground">What happens next</h2>
            <ol className="flex flex-col gap-2.5">
              {[
                // Step one differs by state: "before we call" is simply untrue
                // once the visit is already on the calendar.
                appointment
                  ? "We review your answers and photos before the visit, so the estimator arrives already briefed."
                  : "We review your answers and photos before we call, so the conversation starts with the details.",
                "We walk the space, measure, and talk through options with no pressure.",
                `You get a written line-item estimate with a ${BUSINESS.trust.warrantyYears}-year warranty — no lump sums.`,
              ].map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground text-pretty">{line}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground text-pretty">
              Need to change something or add detail? Give us a call.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Phone className="size-4" aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
