# Blog featured photos

Every blog post has one featured photo. It shows on the /blog card, at the top of the article, in link previews (Facebook, X, iMessage, Slack), in the article's structured data, and in the sitemap, so Google can find it. Google decides whether to show it in search results; that is never guaranteed.

## How it works

| What | Where |
|---|---|
| Photo files (1600×900, 16:9) | `public/images/blog/photos/<slug>.jpg` |
| Description of each photo (its alt text, and the prompt used to generate it) | `data/blog-photos.json` |
| Which posts have a photo (written by the scripts) | `data/blog-photos-manifest.json` |
| The one lookup every page uses | `lib/blog-images.ts` |

`<slug>` is the part of the post's URL after `/blog/`, for example `why-paint-touch-ups-dont-match`.

A post without a photo keeps its current image (the title card or older picture) everywhere, so nothing ever shows broken.

## Generate photos with OpenAI (first run, or for new posts)

You need an OpenAI API key with billing enabled (https://platform.openai.com/api-keys). In PowerShell, from `C:\sites\houstonsuperiorpainting`:

```powershell
$env:OPENAI_API_KEY = "sk-..."          # only for this PowerShell window; never saved
node scripts/blog-photos/generate.mjs --dry-run    # shows how many and the estimated cost
node scripts/blog-photos/generate.mjs --limit 3    # make 3 first and look at them
node scripts/blog-photos/generate.mjs              # make the rest
```

About $0.06 per photo at the default quality (about $10–11 for all 169). Photos are saved and assigned automatically.

**Review before pushing.** Open `public/images/blog/photos/` and look at each photo. If one is wrong (odd hands, text in the image, doesn't match the article), adjust its description in `data/blog-photos.json` and redo just that one:

```powershell
node scripts/blog-photos/generate.mjs --only why-paint-touch-ups-dont-match --force
```

These photos are illustrative. They are not pictures of Houston Superior Painting jobs; real job photos belong on the Projects pages.

## Replace a photo with your own

1. Make a folder `blog-photos-inbox` in `C:\sites\houstonsuperiorpainting` (not committed).
2. Put the photo in it, named after the post: `blog-photos-inbox\why-paint-touch-ups-dont-match.jpg` (jpg, png or webp, any size; landscape works best).
3. In `data/blog-photos.json`, change that post's description so it describes your photo (this is the alt text people with screen readers hear).
4. Run `node scripts/blog-photos/ingest.mjs`.

The photo is cropped to 16:9 around its most interesting area, resized to 1600×900, and saved with camera and GPS data removed.

## New blog post

Add one line to `data/blog-photos.json`: `"<slug>": "what the photo should show"`. Then generate it (`--only <slug>`) or add your own. `pnpm test` fails if a published post has no description.

## Then push

Commit `public/images/blog/photos/`, `data/blog-photos-manifest.json` and any changes to `data/blog-photos.json`, and push as usual.
