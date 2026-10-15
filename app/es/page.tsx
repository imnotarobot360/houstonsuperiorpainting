import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CalendarDays, ShieldCheck, FileText, Award } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd, ORG_ID } from "@/components/structured-data"
import { QuickEstimateForm } from "@/components/quick-estimate-form"
import { breadcrumbNode } from "@/components/aeo/blocks"
import { BUSINESS, PHONE_HREF } from "@/lib/business"

// Spanish page (owner brief 2026-10-14; Juan confirmed the office handles Spanish
// calls and texts). One page with a section per service, linked by anchors.
// Insurance and warranty sentences are the owner-approved Spanish wording from
// BUSINESS / the brief. "Houston Superior Painting" is never translated. The root
// layout sets <html lang="en">, so this page's content is wrapped in lang="es".
// No reviews or customer quotes are translated here.

const PATH = "/es"
const URL = `${BUSINESS.url}${PATH}`
const TITLE = "Pintores en Houston | Houston Superior Painting (Español)"
const DESCRIPTION =
  "Pintura interior y exterior, gabinetes, drywall, estuco y pintura comercial en Houston. Estimados por escrito gratis. Garantía escrita de cinco años. Hablamos español."

const WARRANTY_ES =
  "Ofrecemos una garantía escrita de cinco años sobre la mano de obra, sujeta a los términos, exclusiones y alcance incluidos en el estimado."
const PAYMENT_ES =
  "Cada cliente recibe por escrito el alcance, el precio total, el depósito requerido y el calendario de pagos antes de aprobar el proyecto."

const SERVICES: { id: string; title: string; text: string; en: string }[] = [
  {
    id: "pintura-interior",
    title: "Pintura interior",
    text: "Paredes, techos, molduras y puertas, desde un cuarto hasta toda la casa. Protegemos pisos y muebles, reparamos y preparamos las superficies, y aplicamos los productos y colores que usted aprueba por escrito.",
    en: "/interior-painting-houston-tx",
  },
  {
    id: "pintura-exterior",
    title: "Pintura exterior",
    text: "Lavado, raspado, sellado (caulk), reparación de madera y primer antes de la pintura final, con productos pensados para el sol, el calor y la humedad de Houston.",
    en: "/exterior-painting-houston-tx",
  },
  {
    id: "gabinetes",
    title: "Pintura y acabado de gabinetes",
    text: "Desengrasamos, lijamos y aplicamos un primer de adherencia, y luego un acabado duradero como Benjamin Moore Command o Sherwin-Williams Emerald Urethane. El curado completo tarda de 7 a 10 días.",
    en: "/cabinet-refinishing-houston-tx",
  },
  {
    id: "pintura-comercial",
    title: "Pintura comercial",
    text: "Oficinas, tiendas, restaurantes, consultorios y áreas comunes de HOA y multifamiliares, con trabajo por fases o fuera de horario cuando el edificio sigue abierto.",
    en: "/commercial-painting-houston-tx",
  },
  {
    id: "drywall",
    title: "Reparación de drywall",
    text: "Parches, daños por agua y textura igualada antes de pintar, para que la reparación no se note.",
    en: "/drywall-repair-houston-tx",
  },
  {
    id: "papel-tapiz",
    title: "Remoción de papel tapiz",
    text: "Quitamos el papel, reparamos la pared y aplicamos primer para dejarla lista para pintar.",
    en: "/wallpaper-removal-houston-tx",
  },
  {
    id: "limewash",
    title: "Limewash para ladrillo",
    text: "Limewash, German smear y ladrillo pintado para cambiar el look de la fachada.",
    en: "/limewash-brick-painting-houston-tx",
  },
  {
    id: "lavado-suave",
    title: "Lavado suave",
    text: "Limpieza a baja presión para quitar moho y suciedad de estuco, siding y superficies pintadas.",
    en: "/soft-washing-houston-tx",
  },
  {
    id: "madera",
    title: "Reparaciones de madera",
    text: "Cambiamos molduras, fascia y siding podridos antes de pintar, y corregimos la causa de la humedad cuando es posible.",
    en: "/wood-rot-repair-houston-tx",
  },
  {
    id: "colores",
    title: "Consulta de colores",
    text: "Le ayudamos a elegir colores y brillo según la luz, los pisos, los gabinetes y las reglas de su HOA, y confirmamos con muestras reales.",
    en: "/paint-color-consultation-houston",
  },
]

const FAQS_ES = [
  {
    q: "¿El estimado es gratis?",
    a: "Sí. Le entregamos un estimado por escrito gratis con el alcance, los productos y el precio. " + PAYMENT_ES,
  },
  {
    q: "¿Ustedes hablan español?",
    a: `Sí. Puede llamarnos o enviarnos un mensaje de texto en español al ${BUSINESS.phone}.`,
  },
  {
    q: "¿Tienen seguro?",
    a: `Sí. Tenemos ${BUSINESS.trust.liabilityCoverage} en seguro de responsabilidad general y compensación para trabajadores. ${BUSINESS.insuranceProof.es}`,
  },
  {
    q: "¿Qué garantía ofrecen?",
    a: WARRANTY_ES,
  },
  {
    q: "¿Necesitan licencia los pintores en Texas?",
    a: "Texas no emite una licencia estatal para contratistas de pintura. Por eso lo importante es pedir el comprobante de seguro.",
  },
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "en-us": `${BUSINESS.url}/`, "es-US": URL, "x-default": `${BUSINESS.url}/` },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    locale: "es_US",
    alternateLocale: ["en_US"],
    images: [{ url: BUSINESS.ogImage, width: 1200, height: 630, alt: BUSINESS.name }],
  },
}

export default function SpanishPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${URL}#webpage`,
              url: URL,
              name: TITLE,
              description: DESCRIPTION,
              inLanguage: "es-US",
              about: { "@id": ORG_ID },
            },
            {
              "@type": "FAQPage",
              inLanguage: "es-US",
              mainEntity: FAQS_ES.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            breadcrumbNode([
              { name: "Home", path: "/" },
              { name: "Español", path: PATH },
            ]),
          ],
        }}
      />
      <Header />
      <main lang="es" className="bg-background">
        <section className="bg-midnight py-14 md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
            <div>
              <p className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-4">
                Hablamos español · Desde {BUSINESS.founded}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-soft-white text-balance leading-[1.1]">
                Pintores en Houston
              </h1>
              <p className="quick-answer mt-6 text-lg text-soft-white/90 leading-relaxed">
                {BUSINESS.name} pinta casas y negocios en el área de Houston desde {BUSINESS.founded}, con oficina
                principal en Cypress. Le entregamos un estimado por escrito gratis, trabajamos con seguro de{" "}
                {BUSINESS.trust.liabilityCoverage} y compensación para trabajadores, y ofrecemos una garantía escrita
                de cinco años sobre la mano de obra.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  data-contact-location="es_hero"
                  className="flex items-center justify-center gap-2 rounded-md bg-secondary px-6 py-4 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Llámenos: {BUSINESS.phone}
                </a>
                <a
                  href={BUSINESS.scheduler.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md border border-gold px-6 py-4 text-sm font-semibold text-soft-white hover:bg-soft-white/10"
                >
                  <CalendarDays className="h-4 w-4" aria-hidden="true" /> Agendar una cita (página en inglés)
                </a>
              </div>
            </div>
            <QuickEstimateForm location="es_hero" tone="dark" lang="es" heading="Pida su estimado gratis" />
          </div>
        </section>

        <nav aria-label="Servicios" className="container mx-auto max-w-6xl px-4 py-8">
          <ul className="flex flex-wrap gap-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-block rounded-full border border-border px-3 py-1.5 hover:border-primary">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="container mx-auto max-w-6xl px-4 pb-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: FileText, title: "Estimados por escrito", text: PAYMENT_ES },
              { icon: ShieldCheck, title: "Seguro", text: BUSINESS.insuranceProof.es },
              { icon: Award, title: "Garantía escrita de cinco años", text: WARRANTY_ES },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-5">
                <b.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2 className="mt-3 font-semibold text-foreground">{b.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-4 py-10">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Nuestros servicios</h2>
          <div className="space-y-8">
            {SERVICES.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-foreground/85 leading-relaxed">{s.text}</p>
                <p className="mt-1 text-sm">
                  <Link href={s.en} hrefLang="en" className="text-primary underline underline-offset-2">
                    Más información (en inglés)
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-4 py-10">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Preguntas frecuentes</h2>
          <dl className="space-y-5">
            {FAQS_ES.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold text-foreground">{f.q}</dt>
                <dd className="mt-1 text-foreground/85">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="estimado" className="scroll-mt-24 bg-champagne py-14">
          <div className="mx-auto max-w-xl px-4">
            <QuickEstimateForm location="es_bottom" lang="es" heading="¿Listo para su estimado?" />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              O llámenos o envíenos un texto al{" "}
              <a href={PHONE_HREF} data-contact-location="es_bottom" className="font-semibold text-primary">
                {BUSINESS.phone}
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
