import * as React from "react";
import { cn } from "@/lib/cn";

type Accent = "none" | "blue" | "gold";

export function Card({
  className,
  accent = "none",
  children,
}: {
  className?: string;
  accent?: Accent;
  children: React.ReactNode;
}) {
  const accentGlow =
    accent === "none"
      ? ""
      : accent === "blue"
        ? "hover:shadow-[var(--shadow-glow-blue)]"
        : "hover:shadow-[var(--shadow-glow-gold)]";

  const accentBorder =
    accent === "none"
      ? ""
      : accent === "blue"
        ? "hover:border-[rgba(45,227,255,0.35)]"
        : "hover:border-[rgba(216,177,90,0.35)]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-3)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] border border-[var(--bg-border)] p-8 transition-[transform,border-color,box-shadow] duration-[var(--dur-2)] ease-[var(--ease-out)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-soft)]",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-[var(--dur-2)] before:ease-[var(--ease-out)] before:[background:radial-gradient(800px_200px_at_10%_0%,rgba(45,227,255,0.14),transparent_55%)] hover:before:opacity-100",
        accentGlow,
        accentBorder,
        className,
      )}
    >
      {children}
    </div>
  );
}

