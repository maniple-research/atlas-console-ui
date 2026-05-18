import * as React from "react";

import { cn } from "@/lib/utils";

interface TerminalPlateProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
}

const TerminalPlate = React.forwardRef<HTMLDivElement, TerminalPlateProps>(
  ({ className, label, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-surface-code border border-border-soft",
        "font-mono text-[12px] leading-[1.55] text-foreground",
        "shadow-[inset_0_1px_0_rgba(0,0,0,0.04)]",
        className,
      )}
      {...props}
    >
      {label ? (
        <div className="px-3 py-1.5 border-b border-border-soft text-text-dim text-[10.5px] uppercase tracking-[0.18em]">
          {label}
        </div>
      ) : null}
      <div className="px-3 py-2.5 overflow-x-auto">{children}</div>
    </div>
  ),
);
TerminalPlate.displayName = "TerminalPlate";

export { TerminalPlate };
