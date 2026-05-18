import * as React from "react";

import { cn } from "@/lib/utils";

const AppFrame = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-card border border-border overflow-hidden",
        "shadow-[0_1px_0_var(--border-soft),0_30px_60px_-30px_rgba(0,0,0,0.6)]",
        className,
      )}
      {...props}
    />
  ),
);
AppFrame.displayName = "AppFrame";

const AppFrameBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative bg-card px-9 pt-9 pb-11",
      "before:content-[''] before:absolute before:inset-0 before:pointer-events-none",
      "before:bg-[repeating-linear-gradient(0deg,transparent_0_31px,var(--grid-minor)_31px_32px),repeating-linear-gradient(90deg,transparent_0_31px,var(--grid-major)_31px_32px)]",
      className,
    )}
    {...props}
  >
    <div className="relative">{children}</div>
  </div>
));
AppFrameBody.displayName = "AppFrameBody";

export { AppFrame, AppFrameBody };
