/**
 * Convert per-page inline `localBusinessSchema` objects on city pages over to
 * the shared generateLocationBusinessSchema() helper.
 *
 * Why: each inline copy omitted `address`, which Google REQUIRES for
 * LocalBusiness rich results, so every one of those pages was ineligible
 * despite shipping valid JSON-LD. Fixing 19 hand-written copies invites drift,
 * so they all move to the single helper instead.
 *
 * Safety notes:
 *  - Brace-matched extraction, not a line-count guess.
 *  - String.replace is called with a FUNCTION replacer everywhere. A previous
 *    scripted pass in this repo corrupted a file because a literal "$7-$11" in
 *    the replacement string was interpreted as a `$1` capture-group
 *    backreference. Function replacers never interpret `$`.
 *  - Pass --write to apply; default is a dry run.
 */
import fs from 'node:fs'
import path from 'node:path'

const WRITE = process.argv.includes('--write')
const appDir = path.join(process.cwd(), 'app')

/** Extract a balanced `{...}` object literal starting at the first `{` after `from`. */
function extractObject(src, from) {
  const start = src.indexOf('{', from)
  if (start === -1) return null
  let depth = 0
  let inStr = null
  for (let i = start; i < src.length; i++) {
    const c = src[i]
    const prev = src[i - 1]
    if (inStr) {
      if (c === inStr && prev !== '\\') inStr = null
      continue
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue }
    if (c === '{') depth++
    else if (c === '}') {
      depth--
      if (depth === 0) return { start, end: i + 1, body: src.slice(start, i + 1) }
    }
  }
  return null
}

/** Pull a top-level string property value out of an object literal source. */
function readProp(objSrc, key) {
  const re = new RegExp('"?' + key + '"?\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"')
  const m = objSrc.match(re)
  return m ? m[1] : null
}

const results = []

for (const entry of fs.readdirSync(appDir)) {
  if (!/^painters-.*-tx$/.test(entry)) continue
  const file = path.join(appDir, entry, 'page.tsx')
  if (!fs.existsSync(file)) continue

  let src = fs.readFileSync(file, 'utf8')
  if (src.includes('generateLocationBusinessSchema')) {
    results.push({ slug: entry, status: 'already-helper' })
    continue
  }

  // Two shapes exist in this repo:
  //   (a) `const localBusinessSchema = { ... }` hoisted above the component
  //   (b) the object written inline in JSX as
  //       JSON.stringify({ ... }) inside dangerouslySetInnerHTML
  // Detect which one this file uses.
  let declIdx = src.search(/const\s+localBusinessSchema\s*=\s*\{/)
  let mode = 'const'
  if (declIdx === -1) {
    // Find a JSON.stringify({...}) whose object contains a LocalBusiness type.
    const re = /JSON\.stringify\(\s*\{/g
    let m
    while ((m = re.exec(src))) {
      const probe = extractObject(src, m.index)
      if (probe && probe.body.includes('LocalBusiness')) {
        declIdx = m.index
        mode = 'jsx'
        break
      }
    }
  }
  if (declIdx === -1) {
    results.push({ slug: entry, status: 'no-inline-schema' })
    continue
  }

  const obj = extractObject(src, declIdx)
  if (!obj) {
    results.push({ slug: entry, status: 'SKIP: unbalanced braces' })
    continue
  }

  // Only migrate if this really is the LocalBusiness node.
  if (!obj.body.includes('LocalBusiness')) {
    results.push({ slug: entry, status: 'SKIP: not LocalBusiness' })
    continue
  }

  const description = readProp(obj.body, 'description')

  // The canonical city comes from the "Name - City" pattern, NOT from
  // areaServed[0]: pages covering several municipalities (Memorial Villages)
  // list every village in areaServed, so taking the first would silently
  // rename the page's city to "Bunker Hill Village".
  let city = null
  const nm = readProp(obj.body, 'name')
  if (nm && nm.includes(' - ')) city = nm.split(' - ').slice(1).join(' - ').trim()

  // Collect every served place name so multi-city pages keep full coverage.
  const areaNames = []
  const areaIdx = obj.body.indexOf('areaServed')
  if (areaIdx !== -1) {
    const areaObj = extractObject(obj.body, areaIdx)
    // areaServed may be an array; scan the whole slice after the key for
    // City nodes rather than only the first balanced object.
    const slice = obj.body.slice(areaIdx, areaObj ? undefined : obj.body.length)
    const cityRe = /"@type"\s*:\s*"City"\s*,\s*"?name"?\s*:\s*"((?:[^"\\]|\\.)*)"/g
    let cm
    while ((cm = cityRe.exec(slice))) areaNames.push(cm[1])
  }
  if (!city && areaNames.length === 1) city = areaNames[0]
  if (!city) {
    results.push({ slug: entry, status: 'SKIP: could not determine city' })
    continue
  }

  const parts = [`  city: ${JSON.stringify(city)}`, `  slug: ${JSON.stringify(entry)}`]
  if (description) parts.push(`  description: ${JSON.stringify(description)}`)
  // Only pass `areas` when it genuinely differs from [city].
  if (areaNames.length > 1) {
    parts.push(`  areas: [${areaNames.map((a) => JSON.stringify(a)).join(', ')}]`)
  }

  const call = 'generateLocationBusinessSchema({\n' + parts.join(',\n') + ',\n' +
    (mode === 'jsx' ? '          })' : '})')

  const before = src.slice(0, declIdx)
  const after = src.slice(obj.end)
  src = before + (mode === 'const' ? 'const localBusinessSchema = ' + call : 'JSON.stringify(' + call) + after

  // Ensure the helper is imported.
  if (!/generateLocationBusinessSchema/.test(before.split('\n').slice(0, 30).join('\n'))) {
    const importRe = /import\s*\{([^}]*)\}\s*from\s*["']@\/components\/structured-data["']/
    if (importRe.test(src)) {
      src = src.replace(importRe, (full, names) => {
        if (names.includes('generateLocationBusinessSchema')) return full
        const cleaned = names.trim().replace(/,$/, '')
        return `import { ${cleaned}, generateLocationBusinessSchema } from "@/components/structured-data"`
      })
    } else {
      const lines = src.split('\n')
      let last = 0
      for (let i = 0; i < lines.length; i++) if (/^import\s/.test(lines[i])) last = i
      lines.splice(last + 1, 0, 'import { generateLocationBusinessSchema } from "@/components/structured-data"')
      src = lines.join('\n')
    }
  }

  if (WRITE) fs.writeFileSync(file, src, 'utf8')
  results.push({ slug: entry, status: WRITE ? 'MIGRATED' : 'would migrate', city })
}

const width = Math.max(...results.map((r) => r.slug.length))
for (const r of results) {
  console.log('  ' + r.slug.padEnd(width) + '  ' + r.status + (r.city ? '  (city: ' + r.city + ')' : ''))
}
const n = results.filter((r) => r.status === 'MIGRATED' || r.status === 'would migrate').length
console.log(`\n  ${WRITE ? 'migrated' : 'would migrate'}: ${n}`)
console.log(`  skipped/other: ${results.length - n}`)
if (!WRITE) console.log('\n  dry run — pass --write to apply')
