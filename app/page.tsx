import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge, BadgeFlat } from "@/components/ui/badge";
import { Section } from "@/components/site/section";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { TerminalPlate } from "@/components/atlas/terminal-plate";

const REGISTRY_URL =
  "https://raw.githubusercontent.com/maniple-research/atlas-console-ui/main/public/r/atlas-console.json";

export default function Home() {
  return (
    <main>
      <header className="border-b border-border bg-[linear-gradient(180deg,var(--surface)_0%,var(--bg)_100%)] relative overflow-hidden">
        <div className="absolute -top-60 -right-60 w-[760px] h-[760px] bg-[radial-gradient(circle,var(--accent-glow),transparent_65%)] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)] py-16 relative">
          <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-primary mb-4 flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-primary" />
            ATLAS · CONSOLE · v0.1
            <span className="flex-1 border-t border-dashed border-border-hi max-w-80" />
          </div>

          <h1 className="font-serif text-[clamp(38px,5.5vw,64px)] font-semibold tracking-[-0.025em] leading-[1.05] mb-6">
            A shadcn theme for the <em className="text-primary not-italic font-semibold italic">Atlas Console</em> design treatment.
          </h1>

          <p className="text-text-muted text-[16px] leading-[1.65] max-w-[68ch] mb-8">
            Tokens, button + badge variants, and chrome components — install as
            a shadcn registry into any Tailwind v4 project. Light and dark, with
            the sanctum-azure accent system and mono-rectangle status language
            from the Maniple Research treatment.
          </p>

          <div className="flex flex-wrap gap-2 items-center">
            <Button>Install the theme</Button>
            <Button variant="secondary" asChild>
              <Link href="/showcase">Atlas components</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/showcase/primitives">shadcn primitives</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/showcase/charts">Charts</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/spec.html" target="_blank" rel="noreferrer">
                Read the spec ↗
              </a>
            </Button>
            <span className="ml-auto" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <Section
        num="01"
        label="Install"
        title="Drop the theme into any shadcn project."
        blurb={
          <>
            Requires <strong className="text-foreground">Tailwind v4</strong> and a
            shadcn project initialized with{" "}
            <code className="font-mono text-[12.5px] text-primary">npx shadcn init</code>.
            The style item replaces your <code className="font-mono text-[12.5px] text-primary">globals.css</code>{" "}
            tokens; component items add files under{" "}
            <code className="font-mono text-[12.5px] text-primary">components/ui</code>{" "}
            and <code className="font-mono text-[12.5px] text-primary">components/atlas</code>.
          </>
        }
      >
        <TerminalPlate label="Install">
          <div className="text-text-muted">
            <span className="text-primary">$</span> npx shadcn@latest add {REGISTRY_URL}
          </div>
          <div className="text-text-dim mt-2">
            # Add individual components
          </div>
          <div className="text-text-muted">
            <span className="text-primary">$</span> npx shadcn@latest add {REGISTRY_URL.replace("atlas-console.json", "app-frame.json")}
          </div>
        </TerminalPlate>
      </Section>

      <Section
        num="02"
        label="What's inside"
        title="Six registry items, ready to compose."
        blurb="One style item for the tokens, two ui items that extend shadcn primitives, and three new component items for the bespoke chrome."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ITEMS.map((it) => (
            <div
              key={it.name}
              className="border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <BadgeFlat tone="neutral">{it.kind}</BadgeFlat>
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-primary">
                  {it.name}
                </span>
              </div>
              <p className="text-text-muted text-[14px] leading-[1.55]">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        num="03"
        label="Status language"
        title="Mono-rectangle badges, dot or flat."
      >
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="ok">Healthy</Badge>
          <Badge variant="warn">Degraded</Badge>
          <Badge variant="error">Failed</Badge>
          <Badge variant="active">Live</Badge>
          <Badge variant="neutral">Idle</Badge>
          <span className="w-px h-5 bg-border mx-2" />
          <BadgeFlat tone={true}>true</BadgeFlat>
          <BadgeFlat tone={false}>false</BadgeFlat>
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)] flex items-center justify-between text-text-dim font-mono text-[10.5px] tracking-[0.16em] uppercase">
          <span>Maniple Research · Atlas Console</span>
          <Link href="/showcase" className="hover:text-primary">Showcase →</Link>
        </div>
      </footer>
    </main>
  );
}

const ITEMS: { name: string; kind: string; desc: string }[] = [
  {
    name: "atlas-console",
    kind: "style",
    desc: "All light + dark tokens, font wiring, shadcn variable mapping, atlas extensions, radii.",
  },
  {
    name: "button",
    kind: "ui",
    desc: "primary · secondary · ghost · danger variants, sm size, mono-uppercase typography.",
  },
  {
    name: "badge",
    kind: "ui",
    desc: "ok · warn · error · neutral · active dot badges, plus sans-dot BadgeFlat.",
  },
  {
    name: "app-frame",
    kind: "component",
    desc: "Bordered chrome shell with lift-shadow and a body grid overlay.",
  },
  {
    name: "app-bar",
    kind: "component",
    desc: "Top nav: brand slot, link list with active-strip indicator, right-aligned meta.",
  },
  {
    name: "terminal-plate",
    kind: "component",
    desc: "Recessed mono code/terminal block with optional label strip.",
  },
];
