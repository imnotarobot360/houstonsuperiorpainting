// Rebuild data/blog-photos-manifest.json from the photos on disk (run after
// deleting a photo by hand; generate.mjs and ingest.mjs run it automatically).
import { writeManifest } from "./lib.mjs"

writeManifest()
