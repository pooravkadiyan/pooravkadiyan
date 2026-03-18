import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  tone = "blue",
  size = "md",
  className,
}: {
  children: React.ReactNode;
  tone?: "blue" | "gold";
  size?: "sm" | "md";
  className?: string;
}) {
  const color =
    tone === "blue" ? "text-[var(--accent-blue)]" : "text-[var(--accent-gold)]";
  const scale =
    size === "sm"
      ? "gap-2 text-[10px] tracking-[0.14em]"
      : "gap-3 text-[11px] tracking-[0.16em]";

  return (
    <div
      className={cn(
        "flex items-center font-[var(--font-display)] font-semibold uppercase",
        scale,
        color,
        className,
      )}
    >
      <span className={cn(size === "sm" ? "h-px w-4" : "h-px w-6", "bg-current opacity-90")} />
      <span>{children}</span>
    </div>
  );
}

