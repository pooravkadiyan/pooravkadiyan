import Link from "next/link";

const links = [
  { href: "/intelligence", label: "Intelligence" },
  { href: "/thinking", label: "Thinking" },
  { href: "/work", label: "Work" },
  { href: "/signal", label: "Signal" },
  { href: "/engage", label: "Engage" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--bg-border)] bg-[var(--bg-primary)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1fr_auto] md:items-start">
        <div className="space-y-3">
          <div className="font-[var(--font-display)] text-[13px] font-semibold tracking-[0.07em] text-[var(--text-primary)]">
            POORAV KADIYAN
          </div>
          <div className="max-w-md text-[13px] leading-[1.65] text-[var(--text-secondary)]">
            Intelligence systems from data → deployed models → operational
            workflows. Built for mid-market India and global teams that want
            decisions to improve within days—not quarters.
          </div>
          <div className="text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
            © {new Date().getFullYear()} Poorav Kadiyan
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-3 md:grid-cols-1 md:justify-items-end">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-blue)]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:hello@pooravkadiyan.com"
            className="col-span-2 mt-2 text-[11px] font-normal tracking-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--accent-gold)] md:col-span-1 md:justify-self-end"
          >
            hello@pooravkadiyan.com
          </a>
        </div>
      </div>
    </footer>
  );
}

