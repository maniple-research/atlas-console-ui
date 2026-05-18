"use client";

import * as React from "react";
import Link from "next/link";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  XAxis,
  YAxis,
} from "recharts";

import { Section } from "@/components/site/section";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const throughput = [
  { t: "00:00", primary: 9200, canary: 1100 },
  { t: "01:00", primary: 9800, canary: 1240 },
  { t: "02:00", primary: 10400, canary: 1320 },
  { t: "03:00", primary: 9100, canary: 1180 },
  { t: "04:00", primary: 8800, canary: 1090 },
  { t: "05:00", primary: 9600, canary: 1210 },
  { t: "06:00", primary: 11200, canary: 1450 },
  { t: "07:00", primary: 12400, canary: 1610 },
  { t: "08:00", primary: 13100, canary: 1720 },
  { t: "09:00", primary: 12800, canary: 1680 },
  { t: "10:00", primary: 12200, canary: 1540 },
  { t: "11:00", primary: 11800, canary: 1490 },
];

const throughputConfig = {
  primary: { label: "Primary", color: "var(--chart-1)" },
  canary: { label: "Canary", color: "var(--chart-2)" },
} satisfies ChartConfig;

const errorMix = [
  { day: "Mon", upstream: 12, retry: 3, fatal: 1 },
  { day: "Tue", upstream: 18, retry: 6, fatal: 0 },
  { day: "Wed", upstream: 9, retry: 2, fatal: 2 },
  { day: "Thu", upstream: 24, retry: 8, fatal: 1 },
  { day: "Fri", upstream: 31, retry: 12, fatal: 4 },
  { day: "Sat", upstream: 8, retry: 1, fatal: 0 },
  { day: "Sun", upstream: 4, retry: 0, fatal: 0 },
];

const errorMixConfig = {
  upstream: { label: "Upstream", color: "var(--chart-1)" },
  retry: { label: "Retry", color: "var(--chart-3)" },
  fatal: { label: "Fatal", color: "var(--chart-4)" },
} satisfies ChartConfig;

const errorBudget = [
  { wk: "W-5", value: 96 },
  { wk: "W-4", value: 93 },
  { wk: "W-3", value: 91 },
  { wk: "W-2", value: 88 },
  { wk: "W-1", value: 86 },
  { wk: "W0", value: 84 },
];

const errorBudgetConfig = {
  value: { label: "Remaining %", color: "var(--chart-2)" },
} satisfies ChartConfig;

const cohortShare = [
  { name: "Primary", value: 62, fill: "var(--chart-1)" },
  { name: "Canary", value: 18, fill: "var(--chart-2)" },
  { name: "Standby", value: 14, fill: "var(--chart-3)" },
  { name: "Replay", value: 6, fill: "var(--chart-4)" },
];

const cohortShareConfig = {
  value: { label: "Share %" },
  Primary: { label: "Primary", color: "var(--chart-1)" },
  Canary: { label: "Canary", color: "var(--chart-2)" },
  Standby: { label: "Standby", color: "var(--chart-3)" },
  Replay: { label: "Replay", color: "var(--chart-4)" },
} satisfies ChartConfig;

const slo = [{ name: "primary", value: 84, fill: "var(--chart-1)" }];
const sloConfig = {
  value: { label: "Budget" },
} satisfies ChartConfig;

export default function ChartsPage() {
  return (
    <main>
      <header className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)] py-10 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-primary mb-2">
              CHARTS · ATLAS THEME
            </div>
            <h1 className="font-serif text-[40px] font-semibold tracking-[-0.022em] leading-[1.1]">
              Line, area, bar, pie — themed.
            </h1>
            <p className="text-text-muted mt-3 max-w-[60ch]">
              Charts pick up the Atlas palette through the{" "}
              <code className="font-mono text-primary">--chart-1..5</code>{" "}
              tokens — a categorical ramp distinct from status colors: azure ·
              teal · violet · bronze · slate. Tooltip, legend, and grid surfaces
              inherit from the theme.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant="ghost" asChild>
              <Link href="/showcase/primitives">← Primitives</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <Section label="Throughput · multi-series line">
        <Card>
          <CardHeader>
            <CardTitle>Events / second</CardTitle>
            <CardDescription>Last 12 hours, primary vs canary</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={throughputConfig} className="h-[280px] w-full">
              <LineChart data={throughput} margin={{ left: 8, right: 16, top: 8, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border-soft)" />
                <XAxis dataKey="t" tickLine={false} axisLine={false} tickMargin={8} className="font-mono" />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} className="font-mono" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line dataKey="primary" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
                <Line dataKey="canary" stroke="var(--color-canary)" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Section>

      <Section label="Error budget · single-series area">
        <Card>
          <CardHeader>
            <CardTitle>Remaining budget</CardTitle>
            <CardDescription>SLO compliance window, last 6 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={errorBudgetConfig} className="h-[240px] w-full">
              <AreaChart data={errorBudget} margin={{ left: 8, right: 16, top: 8, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillBudget" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border-soft)" />
                <XAxis dataKey="wk" tickLine={false} axisLine={false} className="font-mono" />
                <YAxis domain={[80, 100]} tickLine={false} axisLine={false} className="font-mono" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-value)"
                  fill="url(#fillBudget)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Section>

      <Section label="Error mix · stacked bar">
        <Card>
          <CardHeader>
            <CardTitle>Failures by class</CardTitle>
            <CardDescription>Daily totals, this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={errorMixConfig} className="h-[260px] w-full">
              <BarChart data={errorMix} margin={{ left: 8, right: 16, top: 8, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border-soft)" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} className="font-mono" />
                <YAxis tickLine={false} axisLine={false} className="font-mono" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="upstream" stackId="a" fill="var(--color-upstream)" />
                <Bar dataKey="retry" stackId="a" fill="var(--color-retry)" />
                <Bar dataKey="fatal" stackId="a" fill="var(--color-fatal)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </Section>

      <Section label="Cohort share · pie + radial">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Cohort share</CardTitle>
              <CardDescription>% of total throughput, current hour</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={cohortShareConfig} className="h-[260px] w-full">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                  <Pie
                    data={cohortShare}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={56}
                    outerRadius={92}
                    paddingAngle={2}
                    stroke="var(--background)"
                    strokeWidth={2}
                  >
                    {cohortShare.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>SLO posture</CardTitle>
              <CardDescription>Primary cohort, this window</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={sloConfig} className="mx-auto aspect-square h-[260px]">
                <RadialBarChart
                  data={slo}
                  startAngle={90}
                  endAngle={90 - (360 * slo[0].value) / 100}
                  innerRadius={80}
                  outerRadius={120}
                >
                  <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          const cx = viewBox.cx ?? 0;
                          const cy = viewBox.cy ?? 0;
                          return (
                            <text
                              x={cx}
                              y={cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={cx}
                                y={cy - 6}
                                className="fill-foreground"
                                style={{
                                  fontFamily: "var(--font-serif)",
                                  fontSize: "36px",
                                  fontWeight: 600,
                                  letterSpacing: "-0.02em",
                                }}
                              >
                                {slo[0].value}%
                              </tspan>
                              <tspan
                                x={cx}
                                y={cy + 18}
                                className="fill-muted-foreground"
                                style={{
                                  fontFamily: "var(--font-mono)",
                                  fontSize: "10.5px",
                                  letterSpacing: "0.18em",
                                  textTransform: "uppercase",
                                }}
                              >
                                budget remaining
                              </tspan>
                            </text>
                          );
                        }
                        return null;
                      }}
                    />
                  </PolarRadiusAxis>
                  <RadialBar
                    dataKey="value"
                    background={{ fill: "var(--surface-3)" }}
                    cornerRadius={4}
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)] flex items-center justify-between text-text-dim font-mono text-[10.5px] tracking-[0.16em] uppercase">
          <span>Maniple Research · Atlas Console</span>
          <Link href="/" className="hover:text-primary">← Home</Link>
        </div>
      </footer>
    </main>
  );
}
