import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

/**
 * Single shared pg Pool for the app.
 *
 * Uses DATABASE_URL (the pooled Neon endpoint) rather than DATABASE_URL_UNPOOLED
 * because every query here runs from a short-lived serverless invocation, where
 * opening a fresh direct connection per request would exhaust Postgres slots
 * under ad traffic.
 */
export const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export const db = drizzle(pool, { schema })
