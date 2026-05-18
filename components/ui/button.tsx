import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-mono uppercase transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        // Atlas variants
        primary:
          "bg-primary text-primary-foreground border border-primary font-semibold hover:bg-accent-hi hover:border-accent-hi hover:shadow-[0_0_0_3px_var(--accent-glow)]",
        secondary:
          "bg-transparent text-foreground border border-border-hi hover:border-primary hover:text-primary",
        ghost:
          "bg-transparent text-muted-foreground border border-transparent hover:text-primary",
        danger:
          "border text-danger border-[rgba(229,91,113,0.35)] bg-[var(--danger-tint)] hover:border-danger",
        // shadcn-compatible aliases (so shadcn primitives that reference variant="default" still work)
        default:
          "bg-primary text-primary-foreground border border-primary font-semibold hover:bg-accent-hi hover:border-accent-hi hover:shadow-[0_0_0_3px_var(--accent-glow)]",
        outline:
          "bg-transparent text-foreground border border-border-hi hover:border-primary hover:text-primary",
        destructive:
          "border text-danger border-[rgba(229,91,113,0.35)] bg-[var(--danger-tint)] hover:border-danger",
        link: "text-primary underline-offset-4 hover:underline normal-case tracking-normal",
      },
      size: {
        default: "h-9 px-4 py-2 text-[11px] tracking-[0.14em] has-[>svg]:px-3",
        xs: "h-6 px-2 text-[9.5px] tracking-[0.12em] gap-1",
        sm: "h-7 px-[11px] py-[5px] text-[10px] tracking-[0.12em]",
        lg: "h-10 px-5 text-[12px] tracking-[0.14em]",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
