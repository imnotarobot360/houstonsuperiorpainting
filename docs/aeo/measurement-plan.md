# AI-visibility measurement plan

How we measure whether AI assistants (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews / AI Mode, Copilot) mention, recommend or cite Houston Superior Painting when Greater Houston homeowners ask about painting and remodeling, and how we track that over time.

| File | What it is |
|---|---|
| `data/aeo/prompts.json`, `data/aeo/prompts.csv` | The 210 non-branded prompts (7 cities x 6 services x 5 intents). Stable ids like `AEO-KAT-CAB-COST`. |
| [prompt-catalog.md](./prompt-catalog.md) | The same prompts, readable, grouped by city and service. |
| `data/aeo/results-schema.json` | The shape of one observation (one answer, one prompt, one platform, one moment). |
| `data/aeo/results/<runId>.jsonl` | Observations, one JSON object per line, one file per run. `EXAMPLE.jsonl` is a placeholder and is ignored. |
| `scripts/aeo/run.mjs` | API sampler. Dry run by default. |
| `scripts/aeo/report.mjs` | Computes the rates and writes [report-latest.md](./report-latest.md). |

## Read this first: AI answers are not rankings

An AI answer is a sample from a probabilistic system, not a fixed position like a search ranking. The same question can get a different answer:

- **from a different model**: ChatGPT, Claude, Gemini and Perplexity use different models and search back-ends, and each provider changes models without notice;
- **from a different account**: logged-in users with history, memory or custom instructions get personalized answers;
- **from a different location**: the IP address, device location or stated city changes which local businesses appear;
- **on a different day**: the web index, the model and the business data behind it all change;
- **with different wording**: "best painters in Katy" and "who should I hire to paint my house in Katy" can return different companies;
- **with or without browsing**: an answer from training data alone and an answer from a live web search can disagree completely;
- **on a second try**: the same prompt in the same session, asked twice, can name different companies.

So:

- **Never treat one answer as a ranking.** "ChatGPT recommended us today" or "Perplexity didn't list us" is one draw, not a result. Screenshots of single answers are anecdotes.
- Report **rates over many samples** (we ask every prompt 3 times per platform per run) and look at **trends across runs**, not individual answers.
- Small groups are noisy. With 15 answers in a cell, one answer moves the rate by about 7 points. Don't act on a city/service cell with fewer than about 30 observations, and treat changes under about 10 points in small groups as noise.
- Compare like with like: the same prompts, platforms, session type and location method as the baseline. A change in method is not a change in visibility.
- API results and consumer-app results are different measurements. Keep them in separate platforms (`openai-api` vs `chatgpt`) and never average them together.

## Schedule

| When | Run id | What |
|---|---|---|
| Before the next content or schema release goes live | `YYYY-MM-baseline` | Full baseline. Every later run is compared against this. Do it before publishing, or the baseline already contains the change. |
| Day 7 after release | `YYYY-MM-day7` | Early check, mostly Perplexity and Google AI Overviews (live web search picks up changes fastest). Expect little change. |
| Day 30 | `YYYY-MM-day30` | Full run. |
| Day 60 | `YYYY-MM-day60` | Full run. |
| Day 90 | `YYYY-MM-day90` | Full run. This is the first point where a trend means something. |
| Monthly after that | `YYYY-MM-monthly` | Full run, same week each month. |

Log in `reviewerNotes` anything that changed between runs on our side (pages published, Google Business Profile edits, reviews, schema changes) or theirs (a platform's new model or interface), so a jump can be matched to its likely cause.

A "full run" is all 210 prompts x 3 samples on each platform we track. If that is too much manual work, use a fixed rotating subset (for example all 7 cities x the 2 services we care most about this quarter x all 5 intents = 70 prompts) and use **the same subset** at every point in that cycle.

## Two ways to sample

### 1. Manual sampling in the consumer apps (what homeowners actually see)

This is the closest to what a homeowner sees, and the only option for Google AI Overviews / AI Mode and the ChatGPT, Claude, Gemini and Perplexity apps themselves.

1. **Clean session.** Use a private / incognito browser window, logged out where the app allows it. Where it requires a login, use a dedicated measurement account with memory and chat history turned off and no custom instructions. Record `sessionType: "new"`. If you deliberately test a normal logged-in account, record `sessionType: "personalized"` and report it separately.
2. **Location.** Note where the device actually is. Run from the Houston area, and turn off any VPN unless testing a specific city on purpose. Record it in `locationContext` (`method: "device-location"` or `"vpn"`). Every prompt already names its city, so location mostly affects the map pack and local results.
3. **Paste the prompt exactly** from the catalog. Do not reword it. One prompt per new chat.
4. **Ask 3 times** (`sampleIndex` 1, 2, 3), each in a new chat or new private window.
5. **Capture**: screenshot the full answer including sources (`screenshotRef`), copy the answer text into `rawResponse`, record the model shown in the app (or `"unknown"`), and the time.
6. **Fill the fields**: `companyMentioned`, `companyCited`, `positionInAnswer` (our order among companies named), `recommendationType`, `competitorsMentioned` (in order), `sourceUrls`, `sentiment`, `accuracyIssues` (check every fact about us against `lib/business.ts`: phone, warranty, services, areas, prices, website), then set `reviewed: true`.
7. Append one line per answer to `data/aeo/results/<runId>.jsonl`. A spreadsheet export converted to JSONL is fine, as long as every line matches `results-schema.json`.

Watch in particular for answers that send people to the unaffiliated look-alike domain `houstonsuperiorpaintingmagnoliatx.com`, or that state wrong facts about us. Those are accuracy issues, logged with severity.

### 2. API sampling (`scripts/aeo/run.mjs`)

Cheaper to repeat and fully logged, but it is **not** the consumer app: the API model, its search settings and the absence of personalization all differ. Use it for consistent trends, not as "what ChatGPT shows people".

```bash
# 1. Always dry-run first: shows request counts per platform and a rough cost range. No calls, no cost.
node scripts/aeo/run.mjs
node scripts/aeo/run.mjs --platform perplexity,openai --city Katy,Fulshear --samples 3

# 2. Paid run: needs --confirm AND --limit (total requests). Above 50 also needs --i-understand-cost.
OPENAI_API_KEY=... node scripts/aeo/run.mjs --platform openai --intent REC --samples 3 \
  --confirm --limit 21 --run-id 2026-10-baseline

# 3. Review the file (sentiment, accuracy, competitors, position), then report.
node scripts/aeo/report.mjs --run 2026-10-baseline
node scripts/aeo/report.mjs --run 2026-11-day30 --baseline 2026-10-baseline
```

- Keys come only from environment variables (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `PERPLEXITY_API_KEY`, `GEMINI_API_KEY`). Never put them in files in this repo; `.env*` is git-ignored, but the safest place is your shell session.
- Model names are set by `OPENAI_MODEL`, `ANTHROPIC_MODEL`, `PERPLEXITY_PRESET` / `PERPLEXITY_MODEL` and `GEMINI_MODEL`. Pin them for a whole measurement cycle; changing the model mid-cycle breaks the comparison. The request shapes and the date they were checked are in the comments at the top of `run.mjs`. Re-check the providers' docs before each baseline; these APIs change often.
- The runner is deliberately slow: 1 request at a time (2 at most with `AEO_CONCURRENCY=2`), a delay per platform, retries with backoff on rate limits and server errors. Each answer is appended as one complete line, so a crash never corrupts earlier results. Failed calls are written with `error` set and excluded from the rates.
- API calls send the city through `user_location` where the API supports it (OpenAI, Anthropic). For Perplexity and Gemini the city is only in the prompt text. Every API call is a new session.
- The runner auto-fills `companyMentioned` (case-insensitive "Houston Superior Painting"), `companyCited` (a cited source on houstonsuperiorpainting.com) and `sourceUrls`, and sets `recommendationType` to `mentioned` or `none`. A person still has to review each answer: upgrade to `recommended` where it actually recommends us, fill `positionInAnswer`, `competitorsMentioned`, `sentiment` and `accuracyIssues`, and set `reviewed: true`.
- The cost estimate is a rough range. Check each provider's pricing page and your usage dashboard after the first small run, and start with `--limit 10`.

## Metrics (computed by `report.mjs`)

| Metric | Definition |
|---|---|
| Mention rate | answers naming us / all answers |
| Citation rate | answers citing a houstonsuperiorpainting.com URL / all answers |
| Recommendation rate | answers that recommend us / all answers |
| First-position rate | answers where we are the first company named / all answers |
| Share of voice | our mentions / (our mentions + all competitor mentions) |
| Accuracy rate | reviewed answers mentioning us with no factual errors / reviewed answers mentioning us |

Broken down by platform, city, service and intent, with non-branded and branded prompts reported separately, and the change in percentage points against a baseline run. The catalog is non-branded only. If we add branded prompts ("Is Houston Superior Painting legit?"), give them `BR-` ids and `"branded": true` so they never inflate the discovery numbers.

## What not to do

- Don't quote a single answer as proof of ranking, in reports or in marketing.
- Don't edit a prompt's wording in place. Retire the id and add a new one.
- Don't mix API and app results, new and personalized sessions, or branded and non-branded prompts in one number.
- Don't change prompts, models or the location method between the baseline and the follow-ups of one cycle.
- Don't publish visibility numbers on the website. They are internal measurement, not a claim.
