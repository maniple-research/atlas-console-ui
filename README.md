# Atlas Console

A shadcn theme + component registry derived from the **Atlas Console** design treatment for Maniple Research. Light + dark tokens, mono-rectangle status language, sanctum-azure accent, plus the bespoke chrome (`AppFrame`, `AppBar`, `TerminalPlate`).

## What this is

This repo is **two things in one**:

1. **A shadcn registry** — consumable from any Tailwind v4 + shadcn project via `npx shadcn add <url>`.
2. **A Next.js docs site** — renders the spec at `/spec.html`, a live `/showcase`, and serves the built registry JSON from `/r/*.json`.

## Registry items

| Item | Type | What it adds |
| --- | --- | --- |
| `atlas-console` | `style` | All light + dark tokens, font wiring, shadcn variable mapping, atlas-specific extensions. Targets `app/globals.css`. |
| `button` | `ui` | shadcn Button extended with `primary` · `secondary` · `ghost` · `danger` variants and an `sm` size. Mono-uppercase typography. |
| `badge` | `ui` | shadcn Badge extended with `ok` · `warn` · `error` · `neutral` · `active` dot variants, plus a sans-dot `BadgeFlat` for boolean flags. |
| `app-frame` | `component` | Bordered chrome shell with lift-shadow and a body grid overlay. Pairs with `AppBar`. |
| `app-bar` | `component` | Top nav with brand, link list (with active-strip indicator), and right-aligned meta slot. |
| `terminal-plate` | `component` | Recessed mono code/terminal block with an optional label strip. |

## Install (consumer)

In a Tailwind v4 + shadcn project:

```bash
# Tokens only
npx shadcn@latest add https://atlas-console-ui.example/r/atlas-console.json

# Individual components
npx shadcn@latest add https://atlas-console-ui.example/r/button.json
npx shadcn@latest add https://atlas-console-ui.example/r/app-frame.json
```

Then add `className="dark"` to `<html>` (or toggle via the included `ThemeToggle` pattern) for dark mode.

## Develop (this repo)

A [Justfile](https://just.systems) wraps the common commands. From a fresh clone:

```bash
just setup    # install deps + register the local git hooks path
just dev      # start the docs site on http://localhost:3000
```

Other recipes (`just --list` for the full set):

| Recipe | What it does |
| --- | --- |
| `just check` | Full pre-push gate: typecheck + lint + registry build + production build |
| `just build` | Production build (runs `spec:sync` automatically) |
| `just registry` | Rebuild the shadcn registry JSONs into `public/r/` |
| `just add card dialog input` | `npx shadcn add` shorthand for stock primitives |
| `just sync-spec` | One-shot copy `design/atlas-console-theme.html` → `public/spec.html` |
| `just outdated` / `just upgrade` | npm dependency hygiene |
| `just clean` / `just clean-all` | Reset build outputs (and optionally `node_modules`) |

Raw `npm` scripts still work if you prefer them — see `package.json`.

### Git hook

A pre-commit hook in `.githooks/pre-commit` rebuilds `public/r/*.json` whenever you stage a change to a registry source file (`registry.json`, `registry/**`, `app/globals.css`, or any `components/ui/*` or `components/atlas/*`). It auto-stages the regenerated JSONs so the published registry never drifts from the source. `just setup` (or `just hooks`) configures git to use this path — required once per clone.

Live routes when dev server is running:

| Route | What it shows |
| --- | --- |
| `/` | Landing page with install snippet + registry item list |
| `/showcase` | Atlas-specific components (AppFrame, AppBar, TerminalPlate, Button + Badge variants) |
| `/showcase/primitives` | All 36 shadcn primitives rendered with Atlas theme |
| `/showcase/charts` | Recharts coverage (line, area, stacked bar, pie, radial) |
| `/spec.html` | The full design treatment (served from design/atlas-console-theme.html) |

## Repo layout

```
design/
  atlas-console-theme.html   # ← SOURCE OF TRUTH for the spec. Edit here.
app/                         # Next.js docs site
  globals.css                # full theme source (mirrors registry style item)
  page.tsx                   # landing
  showcase/page.tsx          # Atlas components playground
  showcase/primitives/       # all shadcn primitives, themed
  showcase/charts/           # chart coverage (line/area/bar/pie/radial)
  spec/page.tsx              # redirects to /spec.html
components/
  ui/                        # shadcn primitives + Atlas-extended Button & Badge
  atlas/                     # bespoke components (app-frame, app-bar, terminal-plate)
  site/                      # docs-only chrome (Section, ThemeToggle)
registry/
  atlas-console/
    styles/atlas-console.css # style registry item source
registry.json                # registry manifest — drives `shadcn build`
public/
  spec.html                  # generated from design/* — gitignored
  r/                         # generated registry JSONs — gitignored
```

### Editing the spec

`design/atlas-console-theme.html` is the canonical source. The dev and build
scripts run `spec:sync` automatically, which copies the source into
`public/spec.html` so Next.js can serve it. Never edit `public/spec.html`
directly — it will be overwritten on the next `npm run dev` or `npm run build`.

```bash
npm run spec:sync   # manual one-shot if needed
```

## Tailwind v4 notes

- Tokens are CSS variables in `:root` and `.dark` selectors, exposed as Tailwind utilities via `@theme inline`.
- The atlas raw tokens (`--bg`, `--accent-rgb`, etc.) are preserved alongside shadcn standard names (`--background`, `--primary`, etc.) so existing CSS authored against the original spec keeps working.
- Colors are stored as hex for fidelity with the spec — convert to `oklch()` later if you want cleaner opacity math, but it's not required.
- Tailwind v4 requires modern browser baselines (Safari 16.4+, Chrome 111+, Firefox 128+).

## Color systems

Two **distinct** color systems live in the tokens. Don't cross them.

**Status colors** are semantic — they mean *good / warn / bad*. Use them for badges, alerts, posture indicators, single-series charts where the value carries semantic weight.

| Token | Light | Dark |
| --- | --- | --- |
| `--success` | `#2E8B5D` | `#5BC68A` |
| `--warning` | `#B8830A` | `#E8B547` |
| `--danger`  | `#B8423D` | `#E55B71` |

**Chart colors** are categorical — they distinguish *series*, not severity. A sanctum-azure-led ramp with analogous cools, one warm contrast, and a de-saturated neutral.

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--chart-1` | `#2C5BA0` sanctum azure | `#6FA5F0` azure lifted | Anchor (brand) |
| `--chart-2` | `#3E8B96` teal-azure | `#5FBDC8` teal lifted | Cool analogue |
| `--chart-3` | `#6A5B9D` sanctum violet | `#9B8FD4` violet lifted | Cool analogue |
| `--chart-4` | `#B8843E` sanctum bronze | `#E0B26E` bronze lifted | Warm contrast |
| `--chart-5` | `#607694` slate | `#8B9BB2` slate lifted | Neutral series |

Rules of thumb:
- **Never use status colors for categorical series.** Green + amber + red on a stacked bar reads as a stoplight legend.
- **Use status colors for single-series semantic charts** (e.g., error-budget remaining). Bypass `--chart-*` and reference `--success` / `--danger` directly.
- **Use `--chart-*` in token order.** chart-1 is the most prominent series; chart-5 is the least.

## Why these components and not others?

| Bucket | Choice | Examples from spec |
| --- | --- | --- |
| Promoted to registry UI | Real reusable components | `AppFrame`, `AppBar`, `TerminalPlate`, plus Button + Badge variants |
| Style-only | No new component, just retheme | Card, Input, Popover (use shadcn primitives — tokens carry them) |
| Gallery / docs only | Demonstrative, not API surfaces | Wordmark variants, glyph showcase, swatch + type specimens |
| Documentation chrome | Tied to the spec page itself | `.doc-header`, `.fig-label`, `.token-panel` |

The decision rule: if a consumer would import it by name in their app code, it's a registry item. If they'd just look at it to understand the system, it's docs.
