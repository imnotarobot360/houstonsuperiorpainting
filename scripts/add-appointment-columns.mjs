import { Pool } from "pg"

// Additive and idempotent: both columns are nullable with no default, so this
// cannot fail on existing rows and can be re-run safely.
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

const sql = `
  ALTER TABLE leads
    ADD COLUMN IF NOT EXISTS appointment_start     timestamptz,
    ADD COLUMN IF NOT EXISTS appointment_booked_at timestamptz;
`

try {
  await pool.query(sql)
  const { rows } = await pool.query(
    `SELECT column_name, data_type, is_nullable
       FROM information_schema.columns
      WHERE table_name = 'leads' AND column_name LIKE 'appointment%'
      ORDER BY column_name`,
  )
  console.log("[v0] appointment columns:", rows)
} finally {
  await pool.end()
}
