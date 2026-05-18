"use client";

import * as React from "react";
import Link from "next/link";
import {
  AlertCircle,
  ChevronRight,
  Search,
  User,
  Calendar as CalIcon,
  Settings,
  LogOut,
} from "lucide-react";

import { Section } from "@/components/site/section";
import { ThemeToggle } from "@/components/site/theme-toggle";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function PrimitivesPage() {
  const [progress, setProgress] = React.useState(64);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main>
      <header className="border-b border-border">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)] py-10 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-primary mb-2">
              SHADCN PRIMITIVES · ATLAS THEME
            </div>
            <h1 className="font-serif text-[40px] font-semibold tracking-[-0.022em] leading-[1.1]">
              Theme coverage across the surface.
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant="ghost" asChild>
              <Link href="/showcase">← Atlas components</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/showcase/charts">Charts →</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <Block label="Card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Cohort throughput</CardTitle>
              <CardDescription>Last 24h, primary pipeline</CardDescription>
            </CardHeader>
            <CardContent className="font-serif text-3xl font-semibold tracking-[-0.02em]">
              12.4k <span className="text-text-dim text-base font-normal">events/s</span>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" size="sm">Drill in</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Error budget</CardTitle>
              <CardDescription>Rolling 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progress} />
              <div className="mt-2 font-mono text-xs text-text-dim">{progress}% remaining</div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm" onClick={() => setProgress((p) => Math.max(0, p - 8))}>burn</Button>
              <Button variant="secondary" size="sm" onClick={() => setProgress((p) => Math.min(100, p + 8))}>restore</Button>
            </CardFooter>
          </Card>
        </div>
      </Block>

      <Block label="Alert · AlertDialog · Dialog · Sheet">
        <div className="flex flex-col gap-3">
          <Alert>
            <AlertCircle />
            <AlertTitle>Queue depth above threshold.</AlertTitle>
            <AlertDescription>
              The primary cohort backlog is 2,142 messages (threshold: 2,000). Consider promoting the standby worker pool.
            </AlertDescription>
          </Alert>
          <div className="flex flex-wrap gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="danger" size="sm">Decommission cohort</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Decommission primary cohort?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This drains all workers and removes the cohort from the pool. Cannot be undone in this session.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Decommission</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Attach evidence</DialogTitle>
                  <DialogDescription>Drop files or paste a URL to link to this incident.</DialogDescription>
                </DialogHeader>
                <Input placeholder="Paste a URL…" />
                <DialogFooter>
                  <Button variant="secondary" size="sm">Cancel</Button>
                  <Button size="sm">Attach</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">Open sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Cohort details</SheetTitle>
                  <SheetDescription>Inspection panel for the selected cohort.</SheetDescription>
                </SheetHeader>
                <div className="px-4 py-2 text-sm text-text-muted">Sheet body slot.</div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Block>

      <Block label="Form inputs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <div className="grid gap-2">
            <Label htmlFor="email">Operator email</Label>
            <Input id="email" type="email" placeholder="s.placeholder@maniple.research" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cohort">Default cohort</Label>
            <Select>
              <SelectTrigger id="cohort"><SelectValue placeholder="Choose a cohort" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="primary">Primary</SelectItem>
                <SelectItem value="standby">Standby</SelectItem>
                <SelectItem value="canary">Canary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2 md:col-span-2">
            <Label htmlFor="notes">Incident notes</Label>
            <Textarea id="notes" placeholder="What did you observe?" rows={4} />
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="page" />
            <Label htmlFor="page" className="font-normal">Page on-call</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="auto" />
            <Label htmlFor="auto" className="font-normal">Auto-promote on success</Label>
          </div>
          <div className="md:col-span-2">
            <Label className="mb-2 block">Severity</Label>
            <RadioGroup defaultValue="sev2" className="flex gap-4">
              <div className="flex items-center gap-2"><RadioGroupItem id="sev1" value="sev1" /><Label htmlFor="sev1" className="font-normal">SEV1</Label></div>
              <div className="flex items-center gap-2"><RadioGroupItem id="sev2" value="sev2" /><Label htmlFor="sev2" className="font-normal">SEV2</Label></div>
              <div className="flex items-center gap-2"><RadioGroupItem id="sev3" value="sev3" /><Label htmlFor="sev3" className="font-normal">SEV3</Label></div>
            </RadioGroup>
          </div>
          <div className="md:col-span-2 grid gap-2">
            <Label>Throughput cap</Label>
            <Slider defaultValue={[40]} max={100} step={1} />
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-2">
            <Toggle>Italics</Toggle>
            <ToggleGroup type="single" defaultValue="left">
              <ToggleGroupItem value="left">Left</ToggleGroupItem>
              <ToggleGroupItem value="center">Center</ToggleGroupItem>
              <ToggleGroupItem value="right">Right</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </Block>

      <Block label="Tabs · Accordion · Collapsible">
        <Tabs defaultValue="overview" className="max-w-3xl">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-text-muted">
            High-level status for the primary cohort. Health, throughput, alert posture.
          </TabsContent>
          <TabsContent value="metrics" className="text-text-muted">
            Charts and trend lines, sampled every 60s.
          </TabsContent>
          <TabsContent value="logs" className="text-text-muted">
            Live stream of structured worker events.
          </TabsContent>
        </Tabs>
        <Accordion type="single" collapsible className="mt-6 max-w-3xl">
          <AccordionItem value="a">
            <AccordionTrigger>What does promote-on-success do?</AccordionTrigger>
            <AccordionContent>
              When a canary run reports zero errors for the dwell period, its workers are promoted to the primary pool.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Can I roll back a promotion?</AccordionTrigger>
            <AccordionContent>
              Yes — promotions are versioned. Use <code className="font-mono text-primary">ops rollback</code>.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Collapsible className="mt-6">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm"><ChevronRight />Toggle details</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="text-text-muted mt-2">
            Hidden panel content — useful for inline disclosure.
          </CollapsibleContent>
        </Collapsible>
      </Block>

      <Block label="Menus · Popover · HoverCard · Tooltip · Command">
        <div className="flex flex-wrap gap-2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="sm">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>s.placeholder</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User />Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><LogOut />Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" size="sm">Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-text-dim mb-2">SHORTCUTS</div>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between"><span>Search</span><kbd className="font-mono text-xs text-text-muted">⌘K</kbd></li>
                <li className="flex justify-between"><span>Promote</span><kbd className="font-mono text-xs text-text-muted">⌘↑</kbd></li>
              </ul>
            </PopoverContent>
          </Popover>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="sm">Hover me</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="font-semibold">Atlas Console</div>
              <div className="text-text-muted text-sm">A research-grade ops surface.</div>
            </HoverCardContent>
          </HoverCard>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Settings /></Button>
            </TooltipTrigger>
            <TooltipContent>Open settings</TooltipContent>
          </Tooltip>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <div className="border border-dashed border-border px-4 py-2 text-text-muted text-sm cursor-default">Right-click me</div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Copy</ContextMenuItem>
              <ContextMenuItem>Paste</ContextMenuItem>
              <ContextMenuItem>Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
        <div className="mt-6 max-w-md border border-border">
          <Command>
            <CommandInput placeholder="Type a command…" />
            <CommandList>
              <CommandEmpty>No results.</CommandEmpty>
              <CommandGroup heading="Pipelines">
                <CommandItem><Search />Search runs</CommandItem>
                <CommandItem><CalIcon />Schedule</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Workers">
                <CommandItem>Restart cohort</CommandItem>
                <CommandItem>Promote canary</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </Block>

      <Block label="Avatar · Breadcrumb · Pagination · Separator">
        <div className="flex items-center gap-4 flex-wrap">
          <Avatar>
            <AvatarImage src="" alt="" />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
          <Separator orientation="vertical" className="h-8" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Ops</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Pipelines</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Primary</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Separator className="my-4" />
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </Block>

      <Block label="Table">
        <Table>
          <TableCaption>Recent runs (last 5).</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Run</TableHead>
              <TableHead>Cohort</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {RUNS.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-mono">{r.id}</TableCell>
                <TableCell>{r.cohort}</TableCell>
                <TableCell>{r.dur}</TableCell>
                <TableCell className="text-right font-mono text-xs uppercase tracking-[0.14em]" style={{ color: r.tone }}>{r.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Block>

      <Block label="ScrollArea · Skeleton · AspectRatio · Calendar">
        <p className="text-text-muted text-sm max-w-[68ch] mb-4">
          These primitives are intentionally transparent — they&apos;re structural and
          inherit the surface they&apos;re placed in. Each demo below sits on{" "}
          <code className="font-mono text-primary">bg-card</code> to show the
          theme at work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ScrollArea className="h-40 bg-card border border-border p-3">
            <ul className="space-y-1 text-sm">
              {Array.from({ length: 30 }, (_, i) => (
                <li key={i} className="font-mono">log entry #{i + 1}</li>
              ))}
            </ul>
          </ScrollArea>
          <div className="bg-card border border-border p-3 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-20 w-full" />
          </div>
          <div className="bg-card border border-border p-3">
            <AspectRatio ratio={16 / 9} className="bg-surface-3 flex items-center justify-center text-text-dim font-mono text-xs">
              16 : 9 slot
            </AspectRatio>
          </div>
        </div>
        <div className="mt-4 bg-card border border-border inline-block p-2">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </Block>

      <footer className="border-t border-border py-10">
        <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)] flex items-center justify-between text-text-dim font-mono text-[10.5px] tracking-[0.16em] uppercase">
          <span>Maniple Research · Atlas Console</span>
          <Link href="/" className="hover:text-primary">← Home</Link>
        </div>
      </footer>
    </main>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Section label={label} title="">
      {children}
    </Section>
  );
}

const RUNS = [
  { id: "run-4128", cohort: "primary", dur: "00:12:04", status: "OK", tone: "var(--success)" },
  { id: "run-4127", cohort: "canary", dur: "00:08:51", status: "OK", tone: "var(--success)" },
  { id: "run-4126", cohort: "primary", dur: "00:14:22", status: "WARN", tone: "var(--warning)" },
  { id: "run-4125", cohort: "standby", dur: "00:00:43", status: "ERR", tone: "var(--danger)" },
  { id: "run-4124", cohort: "primary", dur: "00:11:09", status: "OK", tone: "var(--success)" },
];
