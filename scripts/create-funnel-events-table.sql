-- Server-side mirror of the funnel analytics events.
--
-- See lib/db/schema.ts (funnelEvents) for why this table exists: GA4 already
-- receives these events, but it samples, thresholds low-volume segments, and
-- cannot be joined to the `leads` table, so a drop-off rate computed there can
-- never be reconciled against the leads we actually hold.
--
-- Strictly no PII. Names, phone numbers, emails and addresses live in `leads`,
-- behind a token. `session_id` is a random per-tab value, not a user id, and
-- there is deliberately no column here that could hold one.
--
-- Safe to re-run.

CREATE TABLE IF NOT EXISTS funnel_events (
  id            SERIAL PRIMARY KEY,

  name          TEXT NOT NULL,
  service       TEXT,
  session_id    TEXT,
  -- Where on the page a click came from (funnel_header, mobile_sticky_bar, …).
  -- Fixed strings set by the clicked element, never visitor input.
  location      TEXT,
  step          TEXT,
  value         TEXT,

  -- Same attribution columns as `leads`, so the two can be joined on a
  -- campaign and drop-off can be read per ad group rather than per page.
  oppref        TEXT,
  utm_source    TEXT,
  utm_medium    TEXT,
  utm_campaign  TEXT,
  utm_term      TEXT,
  utm_content   TEXT,
  gclid         TEXT,
  landing_page  TEXT,

  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Columns added after the table first shipped. CREATE TABLE IF NOT EXISTS is a
-- no-op on an existing table, so new columns need their own idempotent ALTER
-- for this script to stay safe to re-run against an older database.
ALTER TABLE funnel_events ADD COLUMN IF NOT EXISTS location TEXT;

-- Matches how the drop-off report reads: "events of this name, for this
-- service, over this period" — rather than indexing each column separately.
CREATE INDEX IF NOT EXISTS funnel_events_name_service_created_at_idx
  ON funnel_events (name, service, created_at);

CREATE INDEX IF NOT EXISTS funnel_events_session_id_idx
  ON funnel_events (session_id);
