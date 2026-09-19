import { boolean, index, integer, jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

/**
 * Every estimate request from the site, across all four services.
 *
 * Design notes:
 *
 * - `answers` is JSONB rather than a wide column set because each service asks
 *   different questions (an epoxy lead has a floor size, a cabinet lead has a
 *   door count). Adding a question to lib/funnel-config.ts must not require a
 *   migration, and a sparse table of nullable per-service columns would be
 *   mostly empty in every row.
 *
 * - `publicToken` is what the confirmation page looks a lead up by. It is a
 *   random 32-char token, never the serial `id`: a sequential id in the URL
 *   would let anyone increment `?id=` and read every customer's name, phone
 *   and street address.
 *
 * - No `userId` column and no foreign keys. This is an anonymous public form —
 *   there is no authenticated user to scope rows to. The per-user scoping rule
 *   in the Neon skill applies to logged-in user data; it does not apply here,
 *   and inventing a fake user id would imply access control that doesn't exist.
 *   Reads are protected by the unguessable token instead.
 */
export const leads = pgTable(
  "leads",
  {
    id: serial("id").primaryKey(),
    publicToken: text("public_token").notNull().unique(),

    /** One of the FunnelService keys: interior | exterior | cabinets | epoxy. */
    service: text("service").notNull(),
    /** Service-specific question answers, keyed by question id. */
    answers: jsonb("answers").notNull().default({}),

    name: text("name").notNull(),
    phone: text("phone").notNull(),
    email: text("email"),
    zip: text("zip"),
    address: text("address"),
    smsConsent: boolean("sms_consent").notNull().default(false),

    /**
     * Blob *pathnames*, not URLs. The store is private, so a raw blob URL is
     * not fetchable — photos are streamed through /api/lead-photo instead.
     */
    photoPaths: jsonb("photo_paths").notNull().default([]),

    /** Pipeline stage: new | contacted | quoted | won | lost. */
    status: text("status").notNull().default("new"),

    // ── Attribution ─────────────────────────────────────────────────────────
    // Stored per lead so a won job can later be traced back to the exact ad.
    // `oppref` is the ChatGPT Ads click id.
    oppref: text("oppref"),
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    utmTerm: text("utm_term"),
    utmContent: text("utm_content"),
    gclid: text("gclid"),
    fbclid: text("fbclid"),
    landingPage: text("landing_page"),
    referrer: text("referrer"),
    userAgent: text("user_agent"),

    /**
     * Whether the Web3Forms notification email went out. The DB insert and the
     * email are separate failure domains: if the email fails we still keep the
     * lead and flag it, so a delivery outage never silently loses work.
     */
    emailSent: boolean("email_sent").notNull().default(false),

    /**
     * The appointment the customer picked in-funnel, if they picked one.
     *
     * The booking itself lives in InsightPaint (the ERP owns the calendar and
     * the crew's schedule); this is a local copy so a lead can be read as
     * "booked" without calling the ERP, and so an ERP booking that succeeded
     * while our own write failed is still visible. NULL simply means the lead
     * never chose a slot — a lead is valid and workable without one.
     */
    appointmentStart: timestamp("appointment_start", { withTimezone: true }),
    appointmentBookedAt: timestamp("appointment_booked_at", { withTimezone: true }),

    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("leads_public_token_idx").on(table.publicToken),
    index("leads_service_created_at_idx").on(table.service, table.createdAt),
  ],
)

export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert

/**
 * Server-side mirror of the funnel analytics events.
 *
 * GA4 already receives all of these. This table exists because GA4 cannot
 * answer the question the business actually has: *which step is losing people,
 * on which service, for which ad group.* GA4 samples, thresholds low-volume
 * segments, applies its own attribution model, and cannot be joined to the
 * `leads` table — so a drop-off rate computed there can never be reconciled
 * against the leads we hold. Owning the rows makes that a SQL query.
 *
 * It is additive: GA4 remains the source of truth for ad platform reporting,
 * and nothing on the site reads this table yet. Writing it now means the
 * drop-off report has history to display when it is built, rather than starting
 * from zero on the day it ships.
 *
 * Privacy: strictly no PII. Names, phone numbers, emails and addresses live in
 * `leads`, gated behind a token. This table holds anonymous funnel telemetry
 * and must stay that way — `sessionId` is a random client-generated id, not a
 * user identifier, and there is deliberately no column that could hold one.
 */
export const funnelEvents = pgTable(
  "funnel_events",
  {
    id: serial("id").primaryKey(),

    /** GA4 event name, e.g. funnel_started, funnel_step_complete, phone_click. */
    name: text("name").notNull(),
    /** One of the FunnelService keys, when the event belongs to a funnel. */
    service: text("service"),

    /**
     * Random per-visit id from sessionStorage.
     *
     * The whole point of a server-side log is being able to follow one visit
     * across steps — without this every row is an isolated count and the
     * drop-off rate can only ever be computed in aggregate, which is exactly
     * the limitation of GA4 that this table exists to escape.
     */
    sessionId: text("session_id"),

    /**
     * Where on the page the click came from, for click events.
     *
     * Without this every `phone_click` row is identical, so the report can say
     * how many calls a service produced but not which number earned them — and
     * "should the sticky bar stay?" is exactly the kind of question this table
     * is meant to answer. Values are fixed strings set by the calling link
     * (e.g. funnel_header, mobile_sticky_bar), never visitor input.
     */
    location: text("location"),

    /** Question id for step events; null for events with no step. */
    step: text("step"),
    /**
     * The chosen option, for step events.
     *
     * Answer text only, never free-typed input — every value here comes from a
     * fixed option list in lib/funnel-config.ts, so it cannot contain anything
     * a visitor typed.
     */
    value: text("value"),

    // ── Attribution ─────────────────────────────────────────────────────────
    // Same columns as `leads`, so the two can be joined on a campaign and a
    // drop-off rate can be read per ad group rather than per page.
    oppref: text("oppref"),
    utmSource: text("utm_source"),
    utmMedium: text("utm_medium"),
    utmCampaign: text("utm_campaign"),
    utmTerm: text("utm_term"),
    utmContent: text("utm_content"),
    gclid: text("gclid"),
    landingPage: text("landing_page"),

    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    // The drop-off report reads "events of this name, for this service, over
    // this period", so the index matches that access pattern rather than
    // indexing each column separately.
    index("funnel_events_name_service_created_at_idx").on(table.name, table.service, table.createdAt),
    index("funnel_events_session_id_idx").on(table.sessionId),
  ],
)

export type FunnelEvent = typeof funnelEvents.$inferSelect
export type NewFunnelEvent = typeof funnelEvents.$inferInsert
