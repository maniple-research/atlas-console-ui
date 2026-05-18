# Atlas Console — task runner
#
#   just            → list recipes
#   just setup      → first-clone setup (deps + git hooks)
#   just dev        → run the docs site
#   just check      → typecheck + lint + production build
#
# All node tools run via `npm run <script>` so the package.json stays the
# canonical source for tooling versions and flags.

set shell := ["bash", "-cu"]
set positional-arguments

# Default: print the recipe list.
default:
    @just --list --unsorted

# ── Setup ──────────────────────────────────────────────────────────────────

# First-clone setup: install deps and register the local git hooks path.
setup: install hooks
    @echo "✔ Ready. Run 'just dev' to start the docs site."

# Install node dependencies.
install:
    npm install

# Wire git to .githooks/ for shared hooks (pre-commit rebuilds registry).
hooks:
    @if [ -d .git ]; then \
        git config core.hooksPath .githooks; \
        echo "✔ Git hooks path: $(git config core.hooksPath)"; \
    else \
        echo "⚠ Not a git repo yet — run 'git init' first, then 'just hooks'."; \
    fi

# ── Day-to-day ─────────────────────────────────────────────────────────────

# Start the Next.js dev server on http://localhost:3000.
dev:
    npm run dev

# Production build (also runs spec:sync via prebuild).
build:
    npm run build

# Serve the production build locally.
start:
    npm run start

# Typecheck without emitting.
typecheck:
    npm run typecheck

# Run eslint.
lint:
    npm run lint

# Full pre-push gate: typecheck, lint, registry build, production build.
check: typecheck lint registry build
    @echo "✔ All checks passed."

# ── Registry ───────────────────────────────────────────────────────────────

# Build the shadcn registry JSONs into public/r/.
registry:
    npm run registry:build

# Add a stock shadcn primitive into components/ui/ (uses --yes).
#   just add card dialog input
add *components:
    npx shadcn@latest add {{components}} --yes

# Copy design/atlas-console-theme.html → public/spec.html.
sync-spec:
    npm run spec:sync

# Re-render design/header.svg → design/header.png at 2x via headless Chrome.
header:
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
        --headless=new --disable-gpu --hide-scrollbars \
        --window-size=1600,600 --force-device-scale-factor=2 \
        --virtual-time-budget=5000 \
        --screenshot=design/header.png \
        "file://$(pwd)/design/header.html"
    @echo "✔ Re-rendered design/header.png"

# ── Maintenance ────────────────────────────────────────────────────────────

# Show outdated package versions.
outdated:
    npm outdated || true

# Upgrade non-major package versions.
upgrade:
    npm update
    @echo "✔ Re-run 'just check' to verify."

# Clean build outputs and caches (keeps node_modules).
clean:
    rm -rf .next public/r public/spec.html tsconfig.tsbuildinfo
    @echo "✔ Cleaned. Run 'just build' to regenerate."

# Nuke node_modules in addition to build outputs.
clean-all: clean
    rm -rf node_modules
    @echo "✔ Fully cleaned. Run 'just setup' to reinstall."
