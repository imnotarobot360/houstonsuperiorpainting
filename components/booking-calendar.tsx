"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Check, Loader2, Phone } from "lucide-react"
import { BUSINESS, PHONE_HREF } from "@/lib/business"
import { formatSlotLabel, type ErpDay, type SlotsResponse } from "@/lib/booking"
import { trackAppointmentScheduled, trackFunnelStep } from "@/lib/analytics"
import { cn } from "@/lib/utils"

/**
 * Native in-funnel appointment picker.
 *
 * Renders real ERP availability inline instead of the vendor iframe, which
 * re-asked for the name, phone and address the funnel already collected.
 *
 * `onUnavailable` is not optional by accident: the availability API is an
 * unofficial contract (see lib/booking.ts), so every embedding surface must
 * have somewhere to fall back to. This component reports failure upward rather
 * than rendering a dead end.
 */

interface BookingCalendarProps {
  service: string
  publicToken: string | null
  zip?: string
  /** Match-quality signal for the appointment conversion. Not displayed. */
  email?: string
  /** Called when availability can't be loaded, so the parent can show the iframe. */
  onUnavailable: () => void
  onBooked: (startIso: string) => void
}

type LoadState = "loading" | "ready" | "empty"

export function BookingCalendar({ service, publicToken, zip, email, onUnavailable, onBooked }: BookingCalendarProps) {
  const [state, setState] = useState<LoadState>("loading")
  const [days, setDays] = useState<ErpDay[]>([])
  const [timezone, setTimezone] = useState("America/Chicago")
  const [activeDate, setActiveDate] = useState<string | null>(null)
  const [selected, setSelected] = useState<{ start: string; date: string; time: string } | null>(null)
  /**
   * Street address, asked here rather than on the contact step.
   *
   * The ERP refuses to book without it, but it is the highest-friction field in
   * the funnel — requiring it earlier would cost leads from everyone who never
   * reaches scheduling. At this point the customer has already picked a time,
   * so the ask is both justified and clearly worth it to them.
   */
  const [address, setAddress] = useState("")
  const [booking, setBooking] = useState(false)
  const [booked, setBooked] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  /**
   * Whether the day strip is scrolled to its right edge, to hide the fade cue.
   *
   * Starts true so no fade is painted before the strip has measured itself —
   * if the days happen to fit, a fade would appear then vanish on mount.
   */
  const [atStripEnd, setAtStripEnd] = useState(true)
  const stripRef = useRef<HTMLDivElement | null>(null)

  /**
   * Holds `onUnavailable` so `load` doesn't depend on its identity.
   *
   * The parent passes an inline arrow, so its identity changes on every parent
   * render. With it in `load`'s dependency array, `load` was recreated each
   * time and the mount effect refired — re-requesting availability whenever the
   * parent re-rendered, including right after a successful booking. The ERP
   * rate-limits (HTTP 429, hit during testing), so those redundant calls were
   * spending a budget real customers need.
   */
  const onUnavailableRef = useRef(onUnavailable)
  useEffect(() => {
    onUnavailableRef.current = onUnavailable
  }, [onUnavailable])

  /**
   * Recompute whether the strip is at its right edge.
   *
   * The 2px tolerance absorbs sub-pixel scroll positions from fractional
   * layout widths, which otherwise leave `scrollLeft + clientWidth` a hair
   * short of `scrollWidth` and keep the fade painted at the true end.
   */
  const updateStripEnd = useCallback(() => {
    const el = stripRef.current
    if (!el) return
    setAtStripEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }, [])

  const load = useCallback(async () => {
    setState("loading")
    setError(null)
    try {
      const url = new URL("/api/booking/slots", window.location.origin)
      url.searchParams.set("service", service)
      if (zip) url.searchParams.set("zip", zip)

      const res = await fetch(url, { cache: "no-store" })
      if (!res.ok) throw new Error(`slots ${res.status}`)

      const data = (await res.json()) as SlotsResponse
      const withSlots = (data.days ?? []).filter((d) => d.slots.length > 0)

      setTimezone(data.timezone || "America/Chicago")
      setDays(withSlots)

      if (withSlots.length === 0) {
        // Genuinely nothing bookable is a different situation from a broken
        // API: the vendor iframe would show the same emptiness, so stay put
        // and offer the phone instead of bouncing the customer to an iframe.
        setState("empty")
        return
      }

      setActiveDate(withSlots[0].date)
      setState("ready")
    } catch (err) {
      console.log("[v0] availability load failed:", err instanceof Error ? err.message : err)
      onUnavailableRef.current()
    }
    // Intentionally excludes the callback: see onUnavailableRef above.
  }, [service, zip])

  useEffect(() => {
    void load()
  }, [load])

  // Measure once the days actually render, since overflow can't be known until
  // the buttons exist. Also re-measures on resize, where the strip may stop or
  // start overflowing.
  useEffect(() => {
    if (days.length === 0) return
    updateStripEnd()
    window.addEventListener("resize", updateStripEnd)
    return () => window.removeEventListener("resize", updateStripEnd)
  }, [days, updateStripEnd])

  const activeDay = useMemo(() => days.find((d) => d.date === activeDate) ?? null, [days, activeDate])

  async function confirm() {
    if (!selected || !publicToken || booking) return

    if (!address.trim()) {
      setError("We need the street address so the estimator knows where to go.")
      return
    }

    setBooking(true)
    setError(null)
    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicToken, start: selected.start, address: address.trim() }),
      })

      if (res.status === 409) {
        // Someone took the slot while this calendar was open. Reload real
        // availability rather than leaving a stale grid on screen.
        setError("That time was just taken. Here are the latest openings.")
        setSelected(null)
        setBooking(false)
        void load()
        return
      }

      if (res.status === 429) {
        // Transient throttle. The iframe posts to the same endpoint, so falling
        // back would fail identically — keep the slot selected and let them retry.
        setError("The calendar is busy right now. Give it a few seconds and tap confirm again.")
        setBooking(false)
        return
      }

      if (!res.ok) {
        // A real failure. Hand over to the vendor iframe rather than leaving the
        // customer with a dead confirm button.
        console.log("[v0] booking failed, falling back to iframe:", res.status)
        onUnavailable()
        return
      }

      // Only reachable once the backend has CONFIRMED the booking — every
      // failure mode above returns early. That placement is deliberate: the 409,
      // 429, !res.ok and network-throw paths must not report a conversion, so
      // reported appointments can never exceed appointments actually on the
      // calendar.
      //
      // Previously this was a bare GA4 `trackEvent`, which is why ChatGPT Ads
      // recorded zero appointment conversions. `trackAppointmentScheduled` still
      // fires that same GA4 event, and adds the OpenAI pixel + server relay.
      //
      // `void`, not `await`: the customer's confirmation must not wait on a
      // tracking round-trip.
      void trackAppointmentScheduled({ publicToken, service, zip, email })

      setBooked(formatSlotLabel(selected.date, selected.time))
      onBooked(selected.start)
    } catch (err) {
      // Network-level failure (offline, DNS, CORS). Same reasoning as above.
      console.log("[v0] booking request failed:", err instanceof Error ? err.message : err)
      onUnavailable()
    } finally {
      setBooking(false)
    }
  }

  // ── Booked ───────────────────────────────────────────────────────────────
  if (booked) {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-4" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-foreground">You&apos;re booked for {booked}</p>
            {/* Says only what we can guarantee. The previous copy promised a
                confirmation text and a next-day reminder, but whether those go
                out is an InsightPaint office setting we can't verify from here
                — and a promised reminder that never arrives costs more trust
                than never promising one. Same reason it was removed from the
                confirmation page. */}
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              It&apos;s on the calendar — nothing else needed. Need to move it? Just call us.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ── Loading ──────────────────────────────────────────────────────────────
  if (state === "loading") {
    return (
      <div className="rounded-xl border border-border p-6" aria-busy="true">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          Finding the next available visits…
        </div>
        <div className="mt-5 flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 w-16 shrink-0 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-11 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
      </div>
    )
  }

  // ── Nothing bookable ─────────────────────────────────────────────────────
  if (state === "empty") {
    return (
      <div className="rounded-xl border border-border p-6">
        <p className="font-semibold text-foreground">The calendar is full for the next few weeks</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
          Your request is already with us, so nothing is lost — we&apos;ll call to find a time. Want it sooner? Give us a
          ring.
        </p>
        <a
          href={PHONE_HREF}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <Phone className="size-4" aria-hidden="true" />
          {BUSINESS.phone}
        </a>
      </div>
    )
  }

  // ── Picker ───────────────────────────────────────────────────────────────
  return (
    <div className="rounded-xl border border-border p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-semibold text-foreground">Pick a day</h3>
        <p className="text-xs text-muted-foreground">All times {shortZone(timezone)} · 30-minute visit</p>
      </div>

      {/* Day strip. Horizontal scroll keeps three weeks reachable on a phone
          without a month grid, which would need paging for the same range.

          The wrapper carries a right-edge fade so the strip reads as
          scrollable. Without it the last button is sliced clean off at the
          card edge, which looks like a layout bug rather than an invitation
          to scroll — and nothing else hints that later dates exist.

          `min-w-0` is load-bearing, not cosmetic: `overflow-x-auto` alone
          doesn't constrain a flex/grid descendant, whose automatic minimum
          size is its content width. Three weeks of buttons widened the whole
          funnel column past the page's max-w-6xl and crushed the headline
          beside it to ~190px. Letting it shrink is what engages the scroll. */}
      <div className="relative mt-3 min-w-0">
        <div
          ref={stripRef}
          onScroll={updateStripEnd}
          className="-mx-1 flex min-w-0 gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]"
          role="tablist"
          aria-label="Available days"
        >
        {days.map((day) => {
          const isActive = day.date === activeDate
          return (
            <button
              key={day.date}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiveDate(day.date)
                setSelected(null)
              }}
              className={cn(
                "flex min-w-16 shrink-0 flex-col items-center gap-0.5 rounded-lg border px-3 py-2 transition-colors",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-muted",
              )}
            >
              <span className="text-[11px] font-medium uppercase tracking-wide opacity-80">{weekday(day.date)}</span>
              <span className="text-lg font-semibold leading-none">{dayNum(day.date)}</span>
              <span className="text-[11px] opacity-80">
                {day.slots.length} {day.slots.length === 1 ? "slot" : "slots"}
              </span>
            </button>
          )
        })}
        </div>

        {/* Fade cue. Pointer-events-none so it never blocks the button beneath
            it, and it disappears at the end of the strip so it isn't left as a
            permanent smudge over the final day. */}
        {!atStripEnd && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card to-transparent"
          />
        )}
      </div>

      <h3 className="mt-5 font-semibold text-foreground">Pick a time</h3>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {activeDay?.slots.map((slot) => {
          const isActive = selected?.start === slot.start
          return (
            <button
              key={slot.start}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setSelected({ start: slot.start, date: slot.date, time: slot.time })
                // Fires on every pick, including changes of mind. The gap
                // between this and appointment_booked is what reveals people
                // lost at the address field — the last thing standing between
                // a chosen time and a booked visit.
                trackFunnelStep("appointment_time_selected", service)
              }}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-muted",
              )}
            >
              {to12h(slot.time)}
            </button>
          )
        })}
      </div>

      {/* Revealed only once a time is chosen, so the picker stays a two-tap
          interaction and the address never reads as another form to fill in. */}
      {selected && (
        <div className="mt-5 flex flex-col gap-1.5">
          <label htmlFor="booking-address" className="text-sm font-medium text-foreground">
            Where should we meet you?
          </label>
          <input
            id="booking-address"
            type="text"
            autoComplete="street-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street address"
            className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <p className="text-xs text-muted-foreground">
            {zip ? `Houston area · ${zip}` : "Houston area"} — just the street, we have the rest.
          </p>
        </div>
      )}

      {error && (
        <p role="status" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={confirm}
        disabled={!selected || booking}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {booking && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {selected ? `Confirm ${formatSlotLabel(selected.date, selected.time)}` : "Select a time"}
      </button>

      <p className="mt-3 text-center text-xs text-muted-foreground text-pretty">
        Free, no obligation. Reschedule any time by phone.
      </p>
    </div>
  )
}

// ── Date helpers ───────────────────────────────────────────────────────────
// All parse the ERP's business-local "YYYY-MM-DD" / "HH:MM" strings as UTC so
// the viewer's own timezone can never shift the displayed day or time.

function utcFromDate(date: string) {
  const [y, m, d] = date.split("-").map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}

function weekday(date: string) {
  return utcFromDate(date).toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" })
}

function dayNum(date: string) {
  return utcFromDate(date).toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" })
}

function to12h(time: string) {
  const [hh, mm] = time.split(":").map(Number)
  const suffix = hh >= 12 ? "PM" : "AM"
  const hour = hh % 12 === 0 ? 12 : hh % 12
  return `${hour}:${String(mm).padStart(2, "0")} ${suffix}`
}

/** "America/Chicago" → "CT". Falls back to the raw value for other zones. */
function shortZone(tz: string) {
  return tz === "America/Chicago" ? "CT" : tz
}
