import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

/**
 * Where /api/leads sends a plain HTML form post (JavaScript off or failed)
 * that could not be saved (owner brief 2026-10-27). With JavaScript the form
 * shows its errors inline and never lands here. Not indexed.
 */
export const metadata: Metadata = {
  title: "Estimate request not sent",
  description: "Your estimate request could not be sent. Call or text Houston Superior Painting at (346) 594-5960.",
  alternates: { canonical: "https://houstonsuperiorpainting.com/estimate/not-sent" },
  robots: { index: false, follow: false },
}

const TEXT = {
  en: {
    title: "We couldn't send your request",
    received: "Thanks, your request was received.",
    reasons: {
      name: "Please go back and enter your name.",
      phone: "Please go back and enter a 10-digit phone number.",
      email: "Please go back and check your email address.",
      invalid: "Something was missing from the form.",
      error: "Something went wrong on our side.",
    } as Record<string, string>,
    call: "Call or text us and we'll take your details:",
    back: "Back to the estimate form",
  },
  es: {
    title: "No pudimos enviar su solicitud",
    received: "Gracias, recibimos su solicitud.",
    reasons: {
      name: "Regrese e ingrese su nombre.",
      phone: "Regrese e ingrese un número de teléfono de 10 dígitos.",
      email: "Regrese y revise su correo electrónico.",
      invalid: "Faltaba información en el formulario.",
      error: "Ocurrió un error de nuestro lado.",
    } as Record<string, string>,
    call: "Llámenos o envíenos un mensaje y tomaremos sus datos:",
    back: "Volver al formulario de estimado",
  },
}

export default async function EstimateNotSentPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string; lang?: string }>
}) {
  const { reason = "error", lang } = await searchParams
  const es = lang === "es"
  const t = es ? TEXT.es : TEXT.en
  const received = reason === "received"

  return (
    <>
      <Header />
      <main lang={es ? "es" : "en"} className="bg-background">
        <div className="mx-auto max-w-xl px-4 py-20 text-center">
          <h1 className="font-display text-3xl">{received ? t.received : t.title}</h1>
          {!received && <p className="mt-4 text-muted-foreground">{t.reasons[reason] ?? t.reasons.error}</p>}
          <p className="mt-6">{t.call}</p>
          <a
            href={PHONE_HREF}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-secondary-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}
          </a>
          <p className="mt-6">
            <Link href={es ? "/es" : "/painting-estimate-houston"} className="underline">
              {t.back}
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
