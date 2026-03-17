import * as React from "react";
import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  tone = "blue",
  className,
}: {
  children: React.ReactNode;
  tone?: "blue" | "gold";
  className?: string;
}) {
  const color =
    tone === "blue" ? "text-[var(--accent-blue)]" : "text-[var(--accent-gold)]";

  return (
    <div
      className={cn(
        "flex items-center gap-3 font-[var(--font-display)] text-[12px] font-medium uppercase tracking-[0.12em]",
        color,
        className,
      )}
    >
      <span className={cn("h-px w-6 bg-current opacity-90")} />
      <span>{children}</span>
    </div>
  );
}

