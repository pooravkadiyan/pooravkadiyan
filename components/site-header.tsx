"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/work", label: "Case systems" },
  { href: "/thinking", label: "Playbooks" },
  { href: "/signal", label: "Signals" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] border-b border-[rgba(255,255,255,0.08)] bg-[var(--glass-bg)] backdrop-blur-[18px]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex flex-col gap-0.5">
          <span className="font-[var(--font-display)] text-[13px] font-semibold tracking-[0.07em] text-[var(--text-primary)]">
            POORAV KADIYAN
          </span>
          <span className="hidden text-[10px] font-light uppercase tracking-[0.12em] text-[var(--accent-blue)] sm:inline">
            Consulting rigor. Operator speed.
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative text-[11px] font-medium uppercase tracking-[0.12em] transition-colors",
                pathname === item.href
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              ].join(" ")}
            >
              {item.label}
              {pathname === item.href ? (
                <span className="pointer-events-none absolute -bottom-3 left-0 h-[2px] w-full bg-[linear-gradient(90deg,rgba(45,227,255,0.0),rgba(45,227,255,0.9),rgba(216,177,90,0.55),rgba(45,227,255,0.0))]" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-[var(--radius-2)] border border-[var(--bg-border)] bg-[rgba(255,255,255,0.02)] px-3 text-[12px] font-medium tracking-[0.08em] text-[var(--text-primary)] transition-[border-color,background-color,box-shadow] duration-[var(--dur-1)] ease-[var(--ease-out)] hover:border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.03)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <Button href="/engage" variant="primary" className="h-10 px-5">
            Start pilot
          </Button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={[
          "md:hidden",
          menuOpen ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="border-t border-[rgba(255,255,255,0.08)] bg-[rgba(8,8,12,0.72)] backdrop-blur-[18px]">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="grid gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-[var(--radius-2)] border px-4 py-3 text-[13px] font-medium tracking-[0.02em] transition-[border-color,background-color,color] duration-[var(--dur-1)] ease-[var(--ease-out)]",
                    pathname === item.href
                      ? "border-[rgba(45,227,255,0.35)] bg-[rgba(45,227,255,0.06)] text-[rgba(235,248,255,0.95)]"
                      : "border-[var(--bg-border)] bg-[rgba(255,255,255,0.01)] text-[var(--text-secondary)] hover:border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.02)] hover:text-[var(--text-primary)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <a
                href="mailto:hello@pooravkadiyan.com"
                className="text-[13px] text-[var(--text-secondary)] underline decoration-[rgba(255,255,255,0.25)] underline-offset-[6px] transition-colors hover:text-[var(--text-primary)]"
              >
                hello@pooravkadiyan.com
              </a>
              <Button href="/engage" variant="primary" className="h-10 px-5">
                Start
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

