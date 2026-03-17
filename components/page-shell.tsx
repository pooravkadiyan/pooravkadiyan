import * as React from "react";
import { cn } from "@/lib/cn";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </main>
  );
}

