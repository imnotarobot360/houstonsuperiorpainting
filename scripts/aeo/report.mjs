#!/usr/bin/env node
// AI-visibility report.
//
// Reads every data/aeo/results/*.jsonl file, skips placeholder rows ("example": true)
// and failed calls ("error" set), and computes:
//   mention rate, citation rate, recommendation rate, first-position rate,
//   share of voice (our mentions / all company mentions), accuracy rate,
//   with breakdowns by city, service, platform and intent, branded vs non-branded,
//   and the change against a baseline run.
// Prints a table and writes docs/aeo/report-latest.md. Runs cleanly with zero results.
//
// Usage:
//   node scripts/aeo/report.mjs                       # all runs pooled; latest run vs earliest run
//   node scripts/aeo/report.mjs --run 2026-11-day30   # only that run
//   node scripts/aeo/report.mjs --run 2026-11-day30 --baseline 2026-10-baseline
//   node scripts/aeo/report.mjs --all                 # pool every run (no run filter)
//   node scripts/aeo/report.mjs --out docs/aeo/report-2026-11.md
//
// Rates are sample proportions over a probabilistic system. Read docs/aeo/measurement-plan.md
// before drawing conclusions from small samples.

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const RESULTS_DIR = process.env.AEO_RESULTS_DIR ? resolve(process.env.AEO_RESULTS_DIR) : join(ROOT, "data", "aeo", "results"); // override for tests
const PROMPTS_FILE = join(ROOT, "data", "aeo", "prompts.json");

// ---------- args ----------
const args = process.argv.slice(2);
const argVal = (name) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : null;
};
const OUT = resolve(ROOT, argVal("--out") || "docs/aeo/report-latest.md");
const POOL_ALL = args.includes("--all");
let RUN = argVal("--run");
let BASELINE = argVal("--baseline");

// ---------- load ----------
const promptMeta = new Map();
if (existsSync(PROMPTS_FILE)) {
  try {
    const p = JSON.parse(readFileSync(PROMPTS_FILE, "utf8"));
    for (const r of p.prompts || []) promptMeta.set(r.id, r);
  } catch (e) {
    console.warn(`warn: could not parse prompts.json (${e.message}); city/service/intent come from rows only`);
  }
}

const rows = [];
let skippedExample = 0, skippedError = 0, badLines = 0;
const files = existsSync(RESULTS_DIR) ? readdirSync(RESULTS_DIR).filter((f) => f.endsWith(".jsonl")).sort() : [];
for (const f of files) {
  const lines = readFileSync(join(RESULTS_DIR, f), "utf8").split(/\r?\n/);
  lines.forEach((line, n) => {
    if (!line.trim()) return;
    let r;
    try { r = JSON.parse(line); } catch { badLines++; console.warn(`warn: ${f}:${n + 1} is not valid JSON, skipped`); return; }
    if (r.example === true) { skippedExample++; return; }
    if (r.error) { skippedError++; return; }
    const m = promptMeta.get(r.promptId) || {};
    rows.push({
      ...r,
      city: r.city || m.city || "unknown",
      service: r.service || m.service || "unknown",
      intent: r.intent || m.intent || "unknown",
      branded: r.branded === true || m.branded === true,
      platform: r.platform || "unknown",
      runId: r.runId || f.replace(/\.jsonl$/, ""),
    });
  });
}

// run ordering = earliest timestamp in each run
const runStart = new Map();
for (const r of rows) {
  const t = Date.parse(r.timestamp) || 0;
  if (!runStart.has(r.runId) || t < runStart.get(r.runId)) runStart.set(r.runId, t);
}
const runsOrdered = [...runStart.entries()].sort((a, b) => a[1] - b[1]).map(([id]) => id);
if (!RUN && !POOL_ALL && runsOrdered.length) RUN = runsOrdered[runsOrdered.length - 1];
if (!BASELINE && runsOrdered.length > 1) BASELINE = runsOrdered[0] !== RUN ? runsOrdered[0] : null;
if (BASELINE && BASELINE === RUN) BASELINE = null;

const current = POOL_ALL ? rows : rows.filter((r) => r.runId === RUN);
const baseline = BASELINE ? rows.filter((r) => r.runId === BASELINE) : [];

// ---------- metrics ----------
function metrics(set) {
  const n = set.length;
  const mentioned = set.filter((r) => r.companyMentioned === true).length;
  const cited = set.filter((r) => r.companyCited === true).length;
  const recommended = set.filter((r) => r.recommendationType === "recommended").length;
  const first = set.filter((r) => r.companyMentioned === true && r.positionInAnswer === 1).length;
  const competitorMentions = set.reduce((s, r) => s + (Array.isArray(r.competitorsMentioned) ? r.competitorsMentioned.length : 0), 0);
  // accuracy: only answers that mention us AND have been reviewed (accuracyIssues is an array)
  const reviewedMentions = set.filter((r) => r.companyMentioned === true && Array.isArray(r.accuracyIssues));
  const accurate = reviewedMentions.filter((r) => r.accuracyIssues.length === 0).length;
  const div = (a, b) => (b > 0 ? a / b : null);
  return {
    n,
    mentioned,
    mentionRate: div(mentioned, n),
    citationRate: div(cited, n),
    recommendationRate: div(recommended, n),
    firstPositionRate: div(first, n),
    shareOfVoice: div(mentioned, mentioned + competitorMentions),
    accuracyRate: div(accurate, reviewedMentions.length),
    accuracyReviewed: reviewedMentions.length,
  };
}

const COLS = [
  ["n", "N"],
  ["mentionRate", "Mention"],
  ["citationRate", "Cited"],
  ["recommendationRate", "Recommended"],
  ["firstPositionRate", "1st position"],
  ["shareOfVoice", "Share of voice"],
  ["accuracyRate", "Accuracy*"],
];
const pct = (v) => (v === null || v === undefined ? "n/a" : `${(v * 100).toFixed(1)}%`);
const fmt = (k, v) => (k === "n" ? String(v) : pct(v));
const delta = (a, b) => {
  if (a === null || b === null || a === undefined || b === undefined) return "n/a";
  const d = (a - b) * 100;
  return `${d >= 0 ? "+" : ""}${d.toFixed(1)} pts`;
};

function groupBy(set, key) {
  const g = new Map();
  for (const r of set) {
    const k = String(r[key] ?? "unknown");
    if (!g.has(k)) g.set(k, []);
    g.get(k).push(r);
  }
  return [...g.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

// ---------- render ----------
const mdTable = (head, body) =>
  [`| ${head.join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...body.map((r) => `| ${r.join(" | ")} |`)].join("\n");

function breakdown(set, key, label) {
  const groups = groupBy(set, key);
  if (!groups.length) return { md: `_No observations._`, rows: [] };
  const body = groups.map(([k, s]) => { const m = metrics(s); return [k, ...COLS.map(([c]) => fmt(c, m[c]))]; });
  return { md: mdTable([label, ...COLS.map(([, h]) => h)], body), rows: body };
}

const overall = metrics(current);
const base = baseline.length ? metrics(baseline) : null;
const nonBranded = metrics(current.filter((r) => !r.branded));
const branded = metrics(current.filter((r) => r.branded));

const now = new Date().toISOString();
const scopeLabel = POOL_ALL ? "all runs pooled" : RUN ? `run \`${RUN}\`` : "no runs yet";

let md = `# AI-visibility report

Generated ${now} by \`node scripts/aeo/report.mjs\`. Scope: ${scopeLabel}.${BASELINE ? ` Baseline: \`${BASELINE}\`.` : ""}

Observations counted: **${current.length}** (all results files: ${rows.length} usable, ${skippedExample} example rows skipped, ${skippedError} failed calls skipped${badLines ? `, ${badLines} unreadable lines` : ""}). Runs found: ${runsOrdered.length ? runsOrdered.map((r) => `\`${r}\``).join(", ") : "none"}.

> AI answers are probabilistic. They change with the model, the account, personalization, location, the date, the exact wording and whether the assistant browsed. These rates describe a sample, not a ranking. Small cells (N under about 30) swing by many points from noise alone. See [measurement-plan.md](./measurement-plan.md).

`;

if (!current.length) {
  md += `## No observations yet

Nothing to report. Add results to \`data/aeo/results/<runId>.jsonl\` (manual logging, or \`node scripts/aeo/run.mjs\`), then run this report again.
`;
} else {
  md += `## Overall

${mdTable(["Metric", "Current", ...(base ? ["Baseline", "Change"] : [])],
  COLS.map(([k, h]) => [h, fmt(k, overall[k]), ...(base ? [fmt(k, base[k]), k === "n" ? String(overall.n - base.n) : delta(overall[k], base[k])] : [])]))}

Definitions: **Mention** = answers naming Houston Superior Painting / all answers. **Cited** = answers citing a houstonsuperiorpainting.com URL / all answers. **Recommended** = answers that recommend us / all answers. **1st position** = answers where we are the first company named / all answers. **Share of voice** = our mentions / (our mentions + every competitor mention). **Accuracy\\*** = answers mentioning us with no factual errors / answers mentioning us that a human has reviewed (${overall.accuracyReviewed} reviewed).

## Non-branded vs branded

${mdTable(["Prompt set", ...COLS.map(([, h]) => h)], [
  ["Non-branded", ...COLS.map(([k]) => fmt(k, nonBranded[k]))],
  ["Branded", ...COLS.map(([k]) => fmt(k, branded[k]))],
])}

Non-branded prompts (the catalog) measure discovery. Branded prompts measure what AI says when someone already knows our name. Never mix them in one number.

## By platform

${breakdown(current, "platform", "Platform").md}

## By city

${breakdown(current, "city", "City").md}

## By service

${breakdown(current, "service", "Service").md}

## By intent

${breakdown(current, "intent", "Intent").md}
`;

  // top competitors
  const comp = new Map();
  for (const r of current) for (const c of r.competitorsMentioned || []) comp.set(c, (comp.get(c) || 0) + 1);
  const topComp = [...comp.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
  md += `
## Companies named most often (other than us)

${topComp.length ? mdTable(["Company", "Answers naming it"], topComp.map(([c, n]) => [c, String(n)])) : "_None recorded._"}

## Review backlog

${current.filter((r) => r.reviewed !== true).length} of ${current.length} observations have not been reviewed by a person yet (sentiment, accuracy, recommendation type).
`;
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, md);

// ---------- console ----------
const pad = (s, w) => String(s).padEnd(w);
console.log(`AI-visibility report  (${scopeLabel}${BASELINE ? `, baseline ${BASELINE}` : ""})`);
console.log(`usable rows: ${rows.length}, in scope: ${current.length}, example rows skipped: ${skippedExample}, failed calls skipped: ${skippedError}`);
if (!current.length) {
  console.log("No observations yet. Nothing to compute.");
} else {
  console.log(COLS.map(([, h]) => pad(h, 15)).join(""));
  console.log(COLS.map(([k]) => pad(fmt(k, overall[k]), 15)).join(""));
  if (base) console.log(COLS.map(([k]) => pad(k === "n" ? `base ${base.n}` : delta(overall[k], base[k]), 15)).join(""));
  for (const [key, label] of [["platform", "Platform"], ["intent", "Intent"]]) {
    console.log(`\nBy ${label.toLowerCase()}:`);
    for (const r of breakdown(current, key, label).rows) console.log(pad(r[0], 34) + r.slice(1).map((c) => pad(c, 13)).join(""));
  }
}
console.log(`\nwrote ${OUT.replace(ROOT + (process.platform === "win32" ? "\\" : "/"), "")}`);
