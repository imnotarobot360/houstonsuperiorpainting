/**
 * Inspect the most recent leads and whether they hold an appointment.
 *
 * Read-only. Uses `pg` to match the rest of the project's scripts.
 * Run with:
 *   node --env-file=.env.development.local scripts/check-appointments.mjs
 */
import { Pool } from "pg"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

try {
  const { rows } = await pool.query(
    `SELECT id, name, phone, zip, address, service,
            appointment_start, appointment_booked_at, created_at
       FROM leads
      ORDER BY created_at DESC
      LIMIT 6`,
  )

  for (const r of rows) {
    console.log(
      JSON.stringify({
        id: r.id,
        name: r.name,
        zip: r.zip,
        address: r.address,
        service: r.service,
        appointment_start: r.appointment_start,
        booked: Boolean(r.appointment_booked_at),
      }),
    )
  }
} finally {
  await pool.end()
}
