#!/usr/bin/env node
// AI-visibility measurement runner. Official APIs only, Node built-ins + fetch, no dependencies.
//
// DEFAULT IS A DRY RUN: it prints how many requests each platform would get and a rough cost
// range, and makes no network calls. Paid calls need BOTH --confirm AND an explicit --limit N
// (N = maximum total requests across all platforms). A limit above 50 also needs
// --i-understand-cost.
//
//   node scripts/aeo/run.mjs                                  # dry run, whole catalog, 3 samples, 4 platforms
//   node scripts/aeo/run.mjs --platform openai,perplexity --city Katy --service "cabinet painting"
//   node scripts/aeo/run.mjs --platform anthropic --intent REC --samples 3 --confirm --limit 21 --run-id 2026-10-baseline
//
// Flags
//   --platform  openai,anthropic,perplexity,gemini  (comma list; default all four)
//   --city      name or code (Katy or KAT; comma list)
//   --service   name or code (interior painting or INT; comma list)
//   --intent    name or code (recommendation or REC; comma list)
//   --prompt    one or more prompt ids (comma list)
//   --samples N repeated asks of the same prompt in one run (default 3)
//   --limit N   hard cap on total requests (required with --confirm)
//   --run-id X  results go to data/aeo/results/X.jsonl (default <date>-api-<random>)
//   --confirm   actually call the APIs
//   --i-understand-cost  allow --limit above 50
//
// Keys come ONLY from environment variables and are never printed:
//   OPENAI_API_KEY, ANTHROPIC_API_KEY, PERPLEXITY_API_KEY, GEMINI_API_KEY
// Models and endpoints are configurable because they change often:
//   OPENAI_MODEL (default gpt-5.5), ANTHROPIC_MODEL (default claude-sonnet-5),
//   PERPLEXITY_PRESET (default fast) or PERPLEXITY_MODEL (provider/model, e.g. openai/gpt-5.5),
//   PERPLEXITY_API_MODE (agent | sonar-legacy), GEMINI_MODEL (default gemini-3.8-flash),
//   GEMINI_API_MODE (interactions | generateContent), AEO_CONCURRENCY (1 or 2, default 1),
//   AEO_DELAY_MS (per-platform delay between calls, default 2500).
//
// Request shapes were checked against the official docs on 2026-10-08:
//   OpenAI     POST https://api.openai.com/v1/responses
//              { model, input, tools:[{ type:"web_search", user_location:{type:"approximate",country,region,city,timezone} }] }
//              Answer: output[type=message].content[].text; citations: content[].annotations[type=url_citation].url
//              (developers.openai.com/api/docs/guides/tools-web-search). Pricing page: gpt-5.5 $5/$30 per MTok,
//              web search $10 per 1k calls.
//   Anthropic  POST https://api.anthropic.com/v1/messages, headers x-api-key + anthropic-version: 2023-06-01
//              tools:[{ type:"web_search_20250305", name:"web_search", max_uses, user_location:{type:"approximate",...} }]
//              Citations: content[type=text].citations[type=web_search_result_location].url; results in
//              web_search_tool_result blocks. Handles stop_reason "pause_turn" by re-sending.
//              (platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool). $10 per 1k searches;
//              claude-sonnet-5 $2/$10 per MTok.
//   Perplexity Sonar Chat Completions support ended 2026-09-27 per Perplexity's docs, so the default is the
//              Agent API: POST https://api.perplexity.ai/v1/agent { preset:"fast", input } (preset "fast" is
//              Perplexity's documented mapping for Sonar). Answer: output[type=message].content[type=output_text]
//              .text with annotations[type=url_citation].url; also output[type=search_results].results[].url.
//              PERPLEXITY_API_MODE=sonar-legacy uses POST /chat/completions { model:"sonar", messages } and reads
//              citations[] / search_results[].url, in case your account still has it.
//              User location: the Agent API documents a user_location object, but where it goes in the body
//              was not clear from the docs, so it is NOT sent; the city is already in every prompt.
//   Gemini     Current docs use the Interactions API: POST https://generativelanguage.googleapis.com/v1beta/interactions
//              header x-goog-api-key, { model, input, tools:[{ type:"google_search" }] }. Sources: steps[type=model_output]
//              .content[type=text].annotations[type=url_citation].url. GEMINI_API_MODE=generateContent uses
//              POST v1beta/models/{model}:generateContent { contents, tools:[{ google_search:{} }] } and reads
//              candidates[].groundingMetadata.groundingChunks[].web.uri (often vertexaisearch redirect links; the
//              chunk title holds the real domain, which is what the cited check uses). No user-location field is
//              sent; the city is in the prompt.
//
// Auto-detected per answer: companyMentioned (case-insensitive "Houston Superior Painting"), companyCited
// (a cited URL or source title on houstonsuperiorpainting.com, exact host or subdomain; the unaffiliated
// look-alike houstonsuperiorpaintingmagnoliatx.com does NOT count and is flagged in reviewerNotes), sourceUrls.
// Left for a human: sentiment, accuracyIssues, competitorsMentioned, positionInAnswer, and upgrading
// recommendationType from "mentioned" to "recommended".

import { readFileSync, appendFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const PROMPTS_FILE = join(ROOT, "data", "aeo", "prompts.json");
const RESULTS_DIR = join(ROOT, "data", "aeo", "results");

const COMPANY_NAME_RE = /houston\s+superior\s+painting/i;
const OUR_HOST = "houstonsuperiorpainting.com";
const LOOKALIKE_HOST = "houstonsuperiorpaintingmagnoliatx.com";

// ---------- args ----------
const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const val = (n) => {
  const i = argv.indexOf(n);
  if (i < 0) return null;
  const v = argv[i + 1];
  if (v === undefined || v.startsWith("--")) die(`${n} needs a value`);
  return v;
};
function die(msg) { console.error(`error: ${msg}`); process.exit(1); }
const list = (v) => (v ? v.split(",").map((s) => s.trim()).filter(Boolean) : null);

const CONFIRM = flag("--confirm");
const UNDERSTAND = flag("--i-understand-cost");
const samplesRaw = val("--samples");
const SAMPLES = samplesRaw === null ? 3 : Number(samplesRaw);
if (!Number.isInteger(SAMPLES) || SAMPLES < 1 || SAMPLES > 10) die("--samples must be an integer 1-10");
const limitRaw = val("--limit");
const LIMIT = limitRaw === null ? null : Number(limitRaw);
if (LIMIT !== null && (!Number.isInteger(LIMIT) || LIMIT < 1)) die("--limit must be a positive integer");
const RUN_ID = val("--run-id") || `${new Date().toISOString().slice(0, 10)}-api-${randomBytes(3).toString("hex")}`;
if (!/^[A-Za-z0-9._-]+$/.test(RUN_ID)) die("--run-id may only contain letters, digits, dot, dash, underscore");
const CONCURRENCY = Math.min(2, Math.max(1, Number(process.env.AEO_CONCURRENCY) || 1));
const DELAY_MS = Math.max(500, Number(process.env.AEO_DELAY_MS) || 2500);

// ---------- platforms ----------
// cost per request in USD [low, high]: rough, assumes ~3k-25k input tokens incl. search content,
// 0.5k-2k output tokens, 1-3 searches. Check current pricing pages before trusting it.
const PLATFORMS = {
  openai: {
    key: "OPENAI_API_KEY",
    platform: "openai-api",
    model: () => process.env.OPENAI_MODEL || "gpt-5.5",
    cost: [0.04, 0.2],
  },
  anthropic: {
    key: "ANTHROPIC_API_KEY",
    platform: "anthropic-api",
    model: () => process.env.ANTHROPIC_MODEL || "claude-sonnet-5",
    cost: [0.02, 0.12],
  },
  perplexity: {
    key: "PERPLEXITY_API_KEY",
    platform: "perplexity-api",
    model: () => process.env.PERPLEXITY_MODEL || `preset:${process.env.PERPLEXITY_PRESET || "fast"}`,
    cost: [0.005, 0.03],
  },
  gemini: {
    key: "GEMINI_API_KEY",
    platform: "gemini-api",
    model: () => process.env.GEMINI_MODEL || "gemini-3.8-flash",
    cost: [0.01, 0.06],
  },
};
const selectedPlatforms = list(val("--platform")) || Object.keys(PLATFORMS);
for (const p of selectedPlatforms) if (!PLATFORMS[p]) die(`unknown platform "${p}" (use ${Object.keys(PLATFORMS).join(", ")})`);

// ---------- prompts ----------
if (!existsSync(PROMPTS_FILE)) die("data/aeo/prompts.json not found");
const catalog = JSON.parse(readFileSync(PROMPTS_FILE, "utf8"));
const codeOrName = (items, wanted) => {
  if (!wanted) return null;
  const set = new Set();
  for (const w of wanted) {
    const hit = items.find((i) => i.code.toLowerCase() === w.toLowerCase() || i.name.toLowerCase() === w.toLowerCase());
    if (!hit) die(`unknown value "${w}" (valid: ${items.map((i) => `${i.code}/${i.name}`).join(", ")})`);
    set.add(hit.name);
  }
  return set;
};
const cityF = codeOrName(catalog.cities, list(val("--city")));
const serviceF = codeOrName(catalog.services, list(val("--service")));
const intentF = codeOrName(catalog.intents, list(val("--intent")));
const idF = list(val("--prompt"));
const prompts = catalog.prompts.filter(
  (p) => (!cityF || cityF.has(p.city)) && (!serviceF || serviceF.has(p.service)) &&
    (!intentF || intentF.has(p.intent)) && (!idF || idF.includes(p.id)),
);
if (!prompts.length) die("no prompts match those filters");

// ---------- plan ----------
// order: sample 1 of every prompt on every platform first, then sample 2, ... so a --limit
// cut still spreads across prompts and platforms instead of exhausting one.
const plan = [];
for (let s = 1; s <= SAMPLES; s++)
  for (const p of prompts)
    for (const pf of selectedPlatforms) plan.push({ prompt: p, platformKey: pf, sampleIndex: s });

const usd = (n) => `$${n.toFixed(2)}`;
function printPlan(items, title) {
  console.log(title);
  let lo = 0, hi = 0;
  for (const pf of selectedPlatforms) {
    const n = items.filter((x) => x.platformKey === pf).length;
    const [cl, ch] = PLATFORMS[pf].cost;
    lo += n * cl; hi += n * ch;
    const hasKey = process.env[PLATFORMS[pf].key] ? "key set" : "key NOT set";
    console.log(`  ${pf.padEnd(11)} ${String(n).padStart(5)} requests  model ${PLATFORMS[pf].model().padEnd(22)} ~${usd(n * cl)}-${usd(n * ch)}  (${hasKey})`);
  }
  console.log(`  ${"total".padEnd(11)} ${String(items.length).padStart(5)} requests  estimated ${usd(lo)}-${usd(hi)} (rough; tokens and searches per answer vary)`);
}

console.log(`prompts: ${prompts.length}, samples per prompt: ${SAMPLES}, platforms: ${selectedPlatforms.join(", ")}`);
printPlan(plan, "\nPlanned requests:");

if (!CONFIRM) {
  console.log("\nDRY RUN: no API calls were made. To run for real add --confirm and --limit N (N <= 50 unless --i-understand-cost).");
  process.exit(0);
}
if (LIMIT === null) die("--confirm requires an explicit --limit N");
if (LIMIT > 50 && !UNDERSTAND) die(`--limit ${LIMIT} is above 50; add --i-understand-cost if you really mean it`);

const missing = selectedPlatforms.filter((p) => !process.env[PLATFORMS[p].key]);
if (missing.length) console.warn(`\nwarn: skipping ${missing.join(", ")}: API key env var not set`);
const queue = plan.filter((x) => !missing.includes(x.platformKey)).slice(0, LIMIT);
if (!queue.length) die("nothing to run (no keys set for the selected platforms)");
printPlan(queue, `\nRunning (capped at --limit ${LIMIT}):`);

mkdirSync(RESULTS_DIR, { recursive: true });
const OUT = join(RESULTS_DIR, `${RUN_ID}.jsonl`);
console.log(`\nwriting to data/aeo/results/${RUN_ID}.jsonl (append-only, one line per answer)\n`);

// ---------- http ----------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const lastCall = new Map();
async function throttle(pf) {
  const wait = (lastCall.get(pf) || 0) + DELAY_MS - Date.now();
  if (wait > 0) await sleep(wait);
  lastCall.set(pf, Date.now());
}
class HttpError extends Error { constructor(status, body, retryAfter) { super(`HTTP ${status}: ${body.slice(0, 300)}`); this.status = status; this.retryAfter = retryAfter; } }

async function postJson(url, headers, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(180_000),
  });
  const text = await res.text();
  if (!res.ok) throw new HttpError(res.status, redact(text), Number(res.headers.get("retry-after")) || null);
  try { return JSON.parse(text); } catch { throw new Error(`non-JSON response: ${redact(text).slice(0, 200)}`); }
}
// make sure no key ever lands in a log line or a results file
function redact(s) {
  let out = String(s);
  for (const p of Object.values(PLATFORMS)) {
    const k = process.env[p.key];
    if (k && k.length > 6) out = out.split(k).join("[REDACTED]");
  }
  return out;
}
async function withRetry(fn, label) {
  const MAX = 4;
  for (let attempt = 1; ; attempt++) {
    try { return await fn(); } catch (e) {
      const retryable = !(e instanceof HttpError) || e.status === 429 || e.status >= 500;
      if (!retryable || attempt >= MAX) throw e;
      const backoff = e.retryAfter ? e.retryAfter * 1000 : Math.min(60_000, 2000 * 2 ** (attempt - 1)) + Math.floor(Math.random() * 1000);
      console.warn(`  retry ${attempt}/${MAX - 1} ${label} in ${Math.round(backoff / 1000)}s (${redact(e.message).slice(0, 120)})`);
      await sleep(backoff);
    }
  }
}

const loc = (p) => ({ type: "approximate", city: p.city, region: "Texas", country: "US", timezone: "America/Chicago" });

// ---------- providers: each returns { model, raw, text, citedUrls, citedTitles, locationMethod } ----------
const providers = {
  async openai(p) {
    const body = { model: PLATFORMS.openai.model(), input: p.prompt, tools: [{ type: "web_search", user_location: loc(p) }] };
    const raw = await postJson("https://api.openai.com/v1/responses", { authorization: `Bearer ${process.env.OPENAI_API_KEY}` }, body);
    const texts = [], urls = [], titles = [];
    for (const item of raw.output || []) {
      if (item.type !== "message") continue;
      for (const c of item.content || []) {
        if (typeof c.text === "string") texts.push(c.text);
        for (const a of c.annotations || []) if (a.url) { urls.push(a.url); if (a.title) titles.push(a.title); }
      }
    }
    return { model: raw.model || body.model, raw, text: texts.join("\n"), citedUrls: urls, citedTitles: titles, locationMethod: "api-user-location" };
  },

  async anthropic(p) {
    const model = PLATFORMS.anthropic.model();
    const tools = [{ type: "web_search_20250305", name: "web_search", max_uses: 5, user_location: loc(p) }];
    const messages = [{ role: "user", content: p.prompt }];
    const headers = { "x-api-key": process.env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" };
    let raw, allContent = [];
    for (let turn = 0; turn < 4; turn++) {
      raw = await postJson("https://api.anthropic.com/v1/messages", headers, { model, max_tokens: 4096, messages, tools });
      allContent = allContent.concat(raw.content || []);
      if (raw.stop_reason !== "pause_turn") break;
      messages.push({ role: "assistant", content: raw.content }); // continue a paused server-tool turn
    }
    const texts = [], urls = [], titles = [];
    for (const b of allContent) {
      if (b.type === "text") {
        texts.push(b.text);
        for (const c of b.citations || []) if (c.url) { urls.push(c.url); if (c.title) titles.push(c.title); }
      }
    }
    return { model: raw.model || model, raw: { ...raw, content: allContent }, text: texts.join(""), citedUrls: urls, citedTitles: titles, locationMethod: "api-user-location" };
  },

  async perplexity(p) {
    const headers = { authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}` };
    if ((process.env.PERPLEXITY_API_MODE || "agent") === "sonar-legacy") {
      const model = process.env.PERPLEXITY_MODEL || "sonar";
      const raw = await postJson("https://api.perplexity.ai/chat/completions", headers, { model, messages: [{ role: "user", content: p.prompt }] });
      const urls = [...(raw.citations || []), ...((raw.search_results || []).map((r) => r.url))].filter(Boolean);
      return { model: raw.model || model, raw, text: raw.choices?.[0]?.message?.content || "", citedUrls: urls, citedTitles: (raw.search_results || []).map((r) => r.title).filter(Boolean), locationMethod: "prompt-only" };
    }
    const body = { input: p.prompt };
    if (process.env.PERPLEXITY_MODEL) { body.model = process.env.PERPLEXITY_MODEL; body.max_output_tokens = 4096; }
    else body.preset = process.env.PERPLEXITY_PRESET || "fast";
    const raw = await postJson("https://api.perplexity.ai/v1/agent", headers, body);
    const texts = [], urls = [], titles = [];
    for (const item of raw.output || []) {
      if (item.type === "message") {
        for (const c of item.content || []) {
          if (typeof c.text === "string") texts.push(c.text);
          for (const a of c.annotations || []) if (a.url) { urls.push(a.url); if (a.title) titles.push(a.title); }
        }
      } else if (item.type === "search_results") {
        for (const r of item.results || []) if (r.url) { urls.push(r.url); if (r.title) titles.push(r.title); }
      }
    }
    return { model: raw.model || body.model || body.preset, raw, text: texts.join("\n"), citedUrls: urls, citedTitles: titles, locationMethod: "prompt-only" };
  },

  async gemini(p) {
    const model = PLATFORMS.gemini.model();
    const headers = { "x-goog-api-key": process.env.GEMINI_API_KEY };
    if ((process.env.GEMINI_API_MODE || "interactions") === "generateContent") {
      const raw = await postJson(
        `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
        headers,
        { contents: [{ role: "user", parts: [{ text: p.prompt }] }], tools: [{ google_search: {} }] },
      );
      const cand = raw.candidates?.[0] || {};
      const text = (cand.content?.parts || []).map((x) => x.text || "").join("");
      const chunks = cand.groundingMetadata?.groundingChunks || [];
      return { model: raw.modelVersion || model, raw, text, citedUrls: chunks.map((c) => c.web?.uri).filter(Boolean), citedTitles: chunks.map((c) => c.web?.title).filter(Boolean), locationMethod: "prompt-only" };
    }
    const raw = await postJson("https://generativelanguage.googleapis.com/v1beta/interactions", headers, { model, input: p.prompt, tools: [{ type: "google_search" }] });
    const texts = [], urls = [], titles = [];
    for (const step of raw.steps || raw.outputs || []) {
      if (step.type && step.type !== "model_output") continue;
      for (const c of step.content || []) {
        if (c.type === "text" && typeof c.text === "string") texts.push(c.text);
        for (const a of c.annotations || []) if (a.url) { urls.push(a.url); if (a.title) titles.push(a.title); }
      }
    }
    return { model: raw.model || model, raw, text: texts.join("\n"), citedUrls: urls, citedTitles: titles, locationMethod: "prompt-only" };
  },
};

// ---------- detection ----------
const hostOf = (u) => { try { return new URL(u).hostname.toLowerCase().replace(/^www\./, ""); } catch { return ""; } };
const isOurs = (h) => h === OUR_HOST || h.endsWith(`.${OUR_HOST}`);
function analyze(r) {
  const inText = (r.text.match(/https?:\/\/[^\s)\]>"'`]+/g) || []).map((u) => u.replace(/[.,;:]+$/, ""));
  const sourceUrls = [...new Set([...r.citedUrls, ...inText])];
  const titleHosts = r.citedTitles.map((t) => String(t).toLowerCase().trim().replace(/^www\./, ""));
  const companyCited = sourceUrls.some((u) => isOurs(hostOf(u))) || titleHosts.some((t) => isOurs(t));
  const lookalike = sourceUrls.some((u) => hostOf(u) === LOOKALIKE_HOST) || titleHosts.includes(LOOKALIKE_HOST) || r.text.toLowerCase().includes(LOOKALIKE_HOST);
  const companyMentioned = COMPANY_NAME_RE.test(r.text);
  return { sourceUrls, companyCited, companyMentioned, lookalike };
}

// ---------- run ----------
let done = 0, failed = 0, mentioned = 0, cited = 0;
function writeLine(obj) { appendFileSync(OUT, JSON.stringify(obj) + "\n"); } // one complete line per call

async function runOne(job) {
  const { prompt: p, platformKey: pf, sampleIndex } = job;
  const label = `${pf} ${p.id} #${sampleIndex}`;
  const base = {
    promptId: p.id, prompt: p.prompt, branded: p.branded === true, city: p.city, service: p.service, intent: p.intent,
    platform: PLATFORMS[pf].platform, sessionType: "new", runId: RUN_ID, sampleIndex,
    sentiment: null, accuracyIssues: null, competitorsMentioned: [], positionInAnswer: null,
    screenshotRef: null, reviewed: false,
  };
  await throttle(pf);
  try {
    const r = await withRetry(() => providers[pf](p), label);
    const a = analyze(r);
    writeLine({
      ...base, model: r.model, timestamp: new Date().toISOString(),
      locationContext: { city: p.city, region: "Texas", country: "US", method: r.locationMethod },
      companyMentioned: a.companyMentioned, companyCited: a.companyCited,
      recommendationType: a.companyMentioned ? "mentioned" : "none",
      sourceUrls: a.sourceUrls, answerText: r.text, rawResponse: r.raw,
      reviewerNotes: a.lookalike ? `AUTO: answer references the unaffiliated look-alike domain ${LOOKALIKE_HOST}. Check accuracy.` : null,
      error: null,
    });
    done++; if (a.companyMentioned) mentioned++; if (a.companyCited) cited++;
    console.log(`  ok   ${label}  mentioned=${a.companyMentioned} cited=${a.companyCited} sources=${a.sourceUrls.length}`);
  } catch (e) {
    failed++;
    writeLine({
      ...base, model: PLATFORMS[pf].model(), timestamp: new Date().toISOString(), locationContext: null,
      companyMentioned: false, companyCited: false, recommendationType: "none", sourceUrls: [],
      answerText: null, rawResponse: null, reviewerNotes: null, error: redact(e.message).slice(0, 500),
    });
    console.warn(`  FAIL ${label}  ${redact(e.message).slice(0, 160)}`);
  }
}

let next = 0;
async function worker() { while (next < queue.length) await runOne(queue[next++]); }
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, queue.length) }, worker));

console.log(`\nfinished: ${done} ok, ${failed} failed, mentioned in ${mentioned}, cited in ${cited}`);
console.log(`next: review data/aeo/results/${RUN_ID}.jsonl (sentiment, accuracyIssues, competitors, position), then node scripts/aeo/report.mjs --run ${RUN_ID}`);
