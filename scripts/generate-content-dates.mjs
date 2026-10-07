/**
 * Generates lib/content-dates.json — a committed snapshot of the last real
 * content-change date for every page file under app/.
 *
 * Why this exists
 * ---------------
 * app/sitemap.ts wants an honest <lastmod> per URL. It used to resolve that at
 * build time with `git log -1 -- <file>`, falling back to the file's mtime.
 * That works locally (full history) but NOT on Vercel: the build checkout is a
 * shallow clone, so `git log -- <path>` returns nothing for almost every file
 * and the mtime fallback takes over. Every file is written at checkout time, so
 * all 166 URLs ended up stamped with the same deploy instant — the sitemap
 * claimed the entire site changed on every deploy.
 *
 * That is actively harmful. Google only trusts <lastmod> when it looks
 * consistently accurate; a sitemap that reports "everything changed just now"
 * on every deploy teaches it to discount the signal site-wide, which slows
 * recrawl of the pages that genuinely did change.
 *
 * Running this in an environment WITH full git history and committing the
 * result means production reads real per-page dates and never needs git.
 *
 * Usage:  node scripts/generate-content-dates.mjs
 * Re-run when you want the sitemap to reflect new content edits.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const repoRoot = process.cwd()
const appDir = path.join(repoRoot, 'app')
const outFile = path.join(repoRoot, 'lib', 'content-dates.json')

const PAGE_RE = /^page\.(tsx|ts|jsx|js|mdx)$/

/** Last commit date that touched a path, or null when history is unavailable. */
function gitDate(relPath) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relPath], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
      cwd: repoRoot,
    }).trim()
    if (!out) return null
    const d = new Date(out)
    return Number.isNaN(d.getTime()) ? null : d.toISOString()
  } catch {
    return null
  }
}

/**
 * Walk app/ and record route -> ISO date for every page file.
 * Mirrors sitemap.ts's traversal rules so the keys line up: dynamic segments,
 * route groups, private folders and api/ are skipped.
 */
function walk(dir, prefix, acc) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  const pageFile = entries.find((e) => e.isFile() && PAGE_RE.test(e.name))
  if (pageFile) {
    const abs = path.join(dir, pageFile.name)
    const rel = path.relative(repoRoot, abs)
    const date = gitDate(rel)
    if (date) acc[prefix] = date
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const name = entry.name
    if (
      name.startsWith('[') ||
      name.startsWith('(') ||
      name.startsWith('_') ||
      name === 'api'
    ) {
      continue
    }
    walk(path.join(dir, name), prefix ? `${prefix}/${name}` : name, acc)
  }
}

/** Last commit date that changed a line range of a file (git log -L), or null. */
function gitLineRangeDate(relPath, start, end) {
  try {
    const out = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '-s', `-L${start},${end}:${relPath}`],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], cwd: repoRoot },
    ).trim()
    const first = out.split('\n')[0]
    if (!first) return null
    const d = new Date(first)
    return Number.isNaN(d.getTime()) ? null : d.toISOString()
  } catch {
    return null
  }
}

/**
 * Per-project dates for /projects/[slug]. Every project page is rendered by
 * one dynamic page file, so dating them by that file stamped all case studies
 * with the same date — a newly added project inherited whatever the template
 * last changed. Instead, date each project by the later of: the last commit
 * that changed its own entry in lib/projects.ts, and the last commit that
 * changed any of its photos.
 */
function projectDates(acc) {
  const rel = 'lib/projects.ts'
  const lines = fs.readFileSync(path.join(repoRoot, rel), 'utf8').split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^\s{4}slug: "([^"]+)",$/)
    if (!m) continue
    let start = i
    while (start > 0 && !/^\s{2}\{\s*$/.test(lines[start])) start--
    let end = i
    while (end < lines.length - 1 && !/^\s{2}\},?\s*$/.test(lines[end])) end++
    const block = lines.slice(start, end + 1).join('\n')
    const candidates = [gitLineRangeDate(rel, start + 1, end + 1)]
    for (const img of new Set(block.match(/\/images\/[^"]+\.(?:jpe?g|png|webp)/g) ?? [])) {
      candidates.push(gitDate(`public${img}`))
    }
    const best = candidates.filter(Boolean).sort().pop()
    if (best) acc[`projects/${m[1]}`] = best
  }
}

const dates = {}
walk(appDir, '', dates)
projectDates(dates)

// Sort keys so the committed file has a stable diff between runs.
const sorted = Object.fromEntries(Object.keys(dates).sort().map((k) => [k, dates[k]]))

const distinct = new Set(Object.values(sorted)).size
if (distinct <= 1) {
  console.error(
    `[content-dates] Refusing to write: resolved ${distinct} distinct date(s) for ` +
      `${Object.keys(sorted).length} routes. That means git history is shallow or ` +
      `missing here, and writing this snapshot would bake in the same bogus ` +
      `"everything changed at once" signal it exists to prevent. Run this from a ` +
      `full clone (git rev-list --count HEAD should be > 1).`,
  )
  process.exit(1)
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, `${JSON.stringify(sorted, null, 2)}\n`)

console.log(
  `[content-dates] Wrote ${Object.keys(sorted).length} routes ` +
    `(${distinct} distinct dates) to ${path.relative(repoRoot, outFile)}`,
)
