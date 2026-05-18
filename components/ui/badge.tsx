import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-[7px] whitespace-nowrap border font-mono font-semibold uppercase leading-[1.4] tracking-[0.16em] px-2 py-[3px] text-[10px] [&>svg]:size-3",
  {
    variants: {
      variant: {
        ok: "text-success bg-[var(--success-tint)] border-[rgba(91,198,138,0.28)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-success before:shadow-[0_0_0_3px_rgba(91,198,138,0.18)]",
        warn: "text-warning bg-[var(--warning-tint)] border-[rgba(232,181,71,0.32)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-warning",
        error:
          "text-danger bg-[var(--danger-tint)] border-[rgba(229,91,113,0.32)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-danger",
        neutral:
          "text-muted-foreground bg-surface-2 border-border before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-text-dim",
        active:
          "text-primary bg-[var(--accent-tint)] border-[rgba(111,165,240,0.32)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary before:shadow-[0_0_0_3px_var(--accent-glow)]",
        // shadcn-compatible aliases
        default:
          "text-primary bg-[var(--accent-tint)] border-[rgba(111,165,240,0.32)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary",
        secondary:
          "text-muted-foreground bg-surface-2 border-border before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-text-dim",
        destructive:
          "text-danger bg-[var(--danger-tint)] border-[rgba(229,91,113,0.32)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-danger",
        outline: "text-foreground border-border",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

const badgeFlatVariants = cva(
  "inline-block font-mono font-semibold uppercase tracking-[0.14em] text-[10px] px-2 py-[3px] border",
  {
    variants: {
      tone: {
        true: "text-success border-[rgba(91,198,138,0.32)] bg-[var(--success-tint)]",
        false: "text-text-dim border-border bg-surface-2",
        neutral: "text-muted-foreground border-border bg-surface-2",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export interface BadgeFlatProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeFlatVariants> {}

function BadgeFlat({ className, tone, ...props }: BadgeFlatProps) {
  return (
    <span
      className={cn(badgeFlatVariants({ tone }), className)}
      {...props}
    />
  );
}

export { Badge, BadgeFlat, badgeVariants, badgeFlatVariants };
