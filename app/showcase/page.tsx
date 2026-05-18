import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge, BadgeFlat } from "@/components/ui/badge";
import { Section } from "@/components/site/section";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { AppFrame, AppFrameBody } from "@/components/atlas/app-frame";
import {
  AppBar,
  AppBrand,
  AppNav,
  AppNavLink,
  AppMeta,
} from "@/components/atlas/app-bar";
import { TerminalPlate } from "@/components/atlas/terminal-plate";

export default function ShowcasePage() {
  return (
    <main>
      <header className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)] py-10 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-primary mb-2">
              SHOWCASE
            </div>
            <h1 className="font-serif text-[40px] font-semibold tracking-[-0.022em] leading-[1.1]">
              Live components.
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant="ghost" asChild>
              <Link href="/">← Home</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/showcase/primitives">shadcn primitives →</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <Section num="01" label="Buttons" title="">
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Button variant="primary" size="sm">Small primary</Button>
          <Button variant="secondary" size="sm">Small secondary</Button>
          <Button variant="ghost" size="sm">Small ghost</Button>
        </div>
      </Section>

      <Section num="02" label="Badges" title="">
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="ok">OK</Badge>
          <Badge variant="warn">Warn</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="active">Active</Badge>
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-4">
          <BadgeFlat tone={true}>true</BadgeFlat>
          <BadgeFlat tone={false}>false</BadgeFlat>
          <BadgeFlat tone="neutral">unknown</BadgeFlat>
        </div>
      </Section>

      <Section num="03" label="Terminal plate" title="">
        <TerminalPlate label="/var/log/atlas/ingest.log">
          <div>
            <span className="text-text-dim">2026-05-18T07:23:04Z</span>{" "}
            <span className="text-success">INFO</span>{" "}
            <span>worker.boot pid=4128 cohort=primary</span>
          </div>
          <div>
            <span className="text-text-dim">2026-05-18T07:23:04Z</span>{" "}
            <span className="text-warning">WARN</span>{" "}
            <span>queue.backlog depth=2142 (threshold=2000)</span>
          </div>
          <div>
            <span className="text-text-dim">2026-05-18T07:23:05Z</span>{" "}
            <span className="text-danger">ERR </span>{" "}
            <span>upstream.timeout host=api-04 retry=2/3</span>
          </div>
        </TerminalPlate>
      </Section>

      <Section num="04" label="App frame" title="">
        <AppFrame>
          <AppBar>
            <AppBrand
              glyph={
                <svg viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="6" y="6" width="4" height="4" fill="currentColor" />
                </svg>
              }
              name={
                <>
                  ATLAS<span className="text-primary">.</span>CONSOLE
                </>
              }
            />
            <AppNav>
              <AppNavLink href="#" active>Overview</AppNavLink>
              <AppNavLink href="#">Cohorts</AppNavLink>
              <AppNavLink href="#">Pipelines</AppNavLink>
              <AppNavLink href="#">Telemetry</AppNavLink>
            </AppNav>
            <AppMeta>
              <span className="who"><strong>OPS</strong> · s.placeholder</span>
              <Badge variant="active">live</Badge>
            </AppMeta>
          </AppBar>
          <AppFrameBody>
            <div className="flex items-end justify-between flex-wrap gap-4 pb-4 mb-7 border-b border-dashed border-border">
              <div>
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-text-dim mb-2">
                  <span className="text-primary">/</span> ops / pipelines /{" "}
                  <span className="text-primary">primary</span>
                </div>
                <h1 className="font-serif text-[32px] font-semibold tracking-[-0.022em] leading-[1.1]">
                  Primary cohort
                </h1>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">Pause</Button>
                <Button variant="primary" size="sm">Promote</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="border border-border bg-surface-2 p-4">
                  <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-text-dim mb-2">
                    {s.label}
                  </div>
                  <div className="font-serif text-[28px] font-semibold tracking-[-0.02em]">
                    {s.value}
                  </div>
                  <div className="mt-2">
                    <Badge variant={s.tone}>{s.note}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </AppFrameBody>
        </AppFrame>
      </Section>
    </main>
  );
}

const STATS = [
  { label: "Ingest rate", value: "12.4k/s", tone: "ok" as const, note: "Healthy" },
  { label: "Queue depth", value: "2,142", tone: "warn" as const, note: "Above threshold" },
  { label: "Error budget", value: "84.2%", tone: "active" as const, note: "Within SLO" },
];
