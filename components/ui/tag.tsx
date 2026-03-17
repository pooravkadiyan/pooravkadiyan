import * as React from "react";
import { cn } from "@/lib/cn";

export function Tag({
  children,
  active = false,
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-2)] border px-[10px] py-[5px] text-[11px] font-medium uppercase tracking-[0.1em] font-[var(--font-display)] transition-[transform,border-color,background-color,color] duration-[var(--dur-1)] ease-[var(--ease-out)] hover:-translate-y-[1px]",
        active
          ? "bg-[rgba(45,227,255,0.10)] border-[rgba(45,227,255,0.55)] text-[rgba(235,248,255,0.92)]"
          : "bg-[rgba(255,255,255,0.02)] border-[var(--bg-border)] text-[var(--text-secondary)] hover:border-[rgba(255,255,255,0.14)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

