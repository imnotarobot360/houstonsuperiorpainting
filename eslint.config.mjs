// ESLint flat config (Next.js 16 defaults: core web vitals + TypeScript).
import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

// The react-hooks plugin as registered by eslint-config-next (not a direct dependency).
const reactHooks = nextVitals.find((c) => c.plugins?.["react-hooks"])?.plugins["react-hooks"]

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // The React Compiler rules flag existing, working effects (visualizer,
    // booking calendar, shadcn hooks). Warn until each one is refactored.
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
  },
  {
    // CommonJS build scripts.
    files: ["**/*.cjs"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "node_modules/**", "Claude outputs/**", "public/**"]),
])
