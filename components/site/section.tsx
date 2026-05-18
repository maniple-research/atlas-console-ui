import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  num?: string;
  label?: string;
  title?: string;
  blurb?: React.ReactNode;
}

export function Section({
  num,
  label,
  title,
  blurb,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "border-t border-border py-14 first:border-t-0",
        className,
      )}
      {...props}
    >
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,56px)]">
        {(num || label) && (
          <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-text-dim mb-3 flex items-center gap-3">
            {num && <span className="text-primary font-semibold">{num}</span>}
            {label && <span>{label}</span>}
            <span className="flex-1 border-t border-dashed border-border max-w-80" />
          </div>
        )}
        {title && (
          <h2 className="font-serif text-[34px] font-semibold tracking-[-0.022em] leading-[1.1] mb-3">
            {title}
          </h2>
        )}
        {blurb && (
          <p className="text-text-muted text-[14.5px] leading-[1.6] max-w-[68ch] mb-8">
            {blurb}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
