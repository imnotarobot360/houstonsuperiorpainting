// AI crawler report (owner brief 2026-10-26, ChatGPT Search measurement).
//
// proxy.ts writes one JSON line per request from an AI crawler / assistant user
// agent ({"aiBotHit": "...", "path": "...", "ip": "..."}) to the Vercel runtime
// logs. This script pulls those lines with the Vercel CLI and checks every
// OpenAI hit against OpenAI's published IP ranges, so a spoofed user agent is
// reported as UNVERIFIED instead of being counted as OpenAI.
//
//   node scripts/ai-bot-report.mjs            # last 24h
//   node scripts/ai-bot-report.mjs 72h        # longer window (limited by the plan's log retention)
//
// Read-only. Needs the Vercel CLI logged in to the account that owns the project.
// Vercel keeps runtime logs only for a short time, so run it on a schedule (or
// add a Log Drain) and save the output if you want a monthly history.
import { execFileSync } from "node:child_process"

const SINCE = process.argv[2] || "24h"
const PROJECT = "v0-calendly-integration"
const SCOPE = "info-10397368s-projects"
// Official lists: https://developers.openai.com/api/docs/bots
const OPENAI_LISTS = {
  "OAI-SearchBot": "https://openai.com/searchbot.json",
  "ChatGPT-User": "https://openai.com/chatgpt-user.json",
  GPTBot: "https://openai.com/gptbot.json",
  "OAI-AdsBot": "https://openai.com/adsbot.json",
}

const toInt = (ip) => ip.split(".").reduce((n, o) => (n << 8) + Number(o), 0) >>> 0
function inCidr(ip, cidr) {
  const [base, bits] = cidr.split("/")
  if (!/^\d+\.\d+\.\d+\.\d+$/.test(ip) || !/^\d+\.\d+\.\d+\.\d+$/.test(base)) return false
  const mask = Number(bits) === 0 ? 0 : (~0 << (32 - Number(bits))) >>> 0
  return (toInt(ip) & mask) === (toInt(base) & mask)
}

const ranges = {}
for (const [bot, url] of Object.entries(OPENAI_LISTS)) {
  try {
    const j = await (await fetch(url)).json()
    ranges[bot] = j.prefixes.map((p) => p.ipv4Prefix).filter(Boolean)
  } catch (e) {
    ranges[bot] = null
    console.warn(`could not load ${url}: ${e.message}`)
  }
}

const vercel = process.platform === "win32" ? "vercel.cmd" : "vercel"
const raw = execFileSync(
  vercel,
  ["logs", "-p", PROJECT, "-S", SCOPE, "--environment", "production", "--since", SINCE, "-n", "5000", "--json", "--non-interactive"],
  { encoding: "utf8", maxBuffer: 64 * 1024 * 1024, shell: process.platform === "win32" },
)

const hits = []
for (const line of raw.split("\n")) {
  if (!line.includes("aiBotHit")) continue
  let entry
  try {
    entry = JSON.parse(line)
  } catch {
    continue
  }
  const messages = [entry.message, ...(entry.logs || []).map((l) => (typeof l === "string" ? l : l.message))]
  for (const m of messages) {
    const at = typeof m === "string" ? m.indexOf('{"aiBotHit"') : -1
    if (at < 0) continue
    try {
      hits.push({ ...JSON.parse(m.slice(at)), time: new Date(entry.timestamp).toISOString(), status: entry.responseStatusCode })
    } catch {
      // Truncated line: skip.
    }
  }
}

const rows = new Map()
for (const h of hits) {
  const list = ranges[h.aiBotHit]
  const verified = list === undefined ? "n/a (not OpenAI)" : list === null ? "list unavailable" : list.some((c) => inCidr(h.ip, c)) ? "verified" : "UNVERIFIED IP"
  const key = `${h.aiBotHit} | ${verified}`
  const r = rows.get(key) || { hits: 0, paths: new Map(), statuses: new Map(), last: "" }
  r.hits++
  r.paths.set(h.path, (r.paths.get(h.path) || 0) + 1)
  r.statuses.set(h.status, (r.statuses.get(h.status) || 0) + 1)
  if (h.time > r.last) r.last = h.time
  rows.set(key, r)
}

console.log(`AI crawler hits on production, last ${SINCE}: ${hits.length}`)
if (!hits.length) console.log("(none in the retained logs; Vercel log retention may be shorter than the window)")
for (const [key, r] of [...rows].sort((a, b) => b[1].hits - a[1].hits)) {
  const top = [...r.paths].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([p, n]) => `${p} (${n})`).join(", ")
  const st = [...r.statuses].map(([s, n]) => `${s}×${n}`).join(" ")
  console.log(`- ${key}: ${r.hits} hits, last ${r.last}, status ${st}\n    top paths: ${top}`)
}
