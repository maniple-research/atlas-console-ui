import * as React from "react";

import { cn } from "@/lib/utils";

const AppBar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-stretch h-14 bg-surface-code border-b border-border",
        className,
      )}
      {...props}
    />
  ),
);
AppBar.displayName = "AppBar";

interface AppBrandProps extends React.HTMLAttributes<HTMLDivElement> {
  glyph?: React.ReactNode;
  name: React.ReactNode;
}

const AppBrand = React.forwardRef<HTMLDivElement, AppBrandProps>(
  ({ className, glyph, name, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-[11px] px-[22px] h-full border-r border-border",
        className,
      )}
      {...props}
    >
      {glyph ? (
        <span className="w-4 h-4 shrink-0 block text-primary [&>svg]:w-full [&>svg]:h-full">
          {glyph}
        </span>
      ) : null}
      <span className="font-semibold text-sm tracking-[-0.01em] text-foreground">
        {name}
      </span>
    </div>
  ),
);
AppBrand.displayName = "AppBrand";

const AppNav = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("flex flex-1 items-stretch", className)}
      {...props}
    />
  ),
);
AppNav.displayName = "AppNav";

interface AppNavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const AppNavLink = React.forwardRef<HTMLAnchorElement, AppNavLinkProps>(
  ({ className, active, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center px-[18px] font-mono uppercase tracking-[0.16em] text-[10.5px]",
        "border-r border-border-soft transition-colors duration-150 relative",
        active
          ? "text-primary bg-card after:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:h-0.5 after:bg-primary"
          : "text-muted-foreground hover:text-foreground hover:bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  ),
);
AppNavLink.displayName = "AppNavLink";

const AppMeta = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "ml-auto flex items-center pr-[22px] gap-[14px] font-mono text-[10.5px] tracking-[0.1em] text-text-dim [&_strong]:text-muted-foreground [&_strong]:font-medium",
        className,
      )}
      {...props}
    />
  ),
);
AppMeta.displayName = "AppMeta";

export { AppBar, AppBrand, AppNav, AppNavLink, AppMeta };
