import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { homeCopy, site } from "@/content/site-copy";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <PageShell className="py-20 md:py-28">
        <ScrollReveal className="space-y-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SectionLabel tone="blue">{homeCopy.hero.label}</SectionLabel>
            <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent-blue)]">
              {site.contrastLine}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div className="space-y-6">
              <h1 className="max-w-4xl font-[var(--font-display)] text-[44px] leading-[1.02] tracking-[-0.03em] text-[var(--text-primary)] md:text-[78px]">
                {homeCopy.hero.headline}
              </h1>
              <p className="max-w-3xl text-[18px] leading-[1.65] text-[var(--text-secondary)]">
                {homeCopy.hero.lead}
              </p>
              <p className="max-w-3xl text-[15px] leading-[1.7] text-[var(--text-muted)]">
                {homeCopy.hero.support}
              </p>
            </div>

            <div className="rounded-[var(--radius-3)] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6">
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--accent-gold)]">
                {site.name} - {site.title}
              </div>
              <div className="mt-3 text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                {site.credential}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {homeCopy.hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[var(--radius-2)] border border-[var(--bg-border)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeCopy.hero.outcomes.map((item) => (
              <div
                key={item.metric}
                className="rounded-[var(--radius-2)] border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.03)] px-5 py-4"
              >
                <div className="font-[var(--font-display)] text-[32px] font-semibold leading-none text-[var(--text-primary)] md:text-[38px]">
                  {item.metric}
                </div>
                <div className="mt-2 text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <Button href={homeCopy.hero.ctas.primary.href} variant="primary">
              {homeCopy.hero.ctas.primary.label}
            </Button>
            <Button href={homeCopy.hero.ctas.secondary.href} variant="secondary">
              {homeCopy.hero.ctas.secondary.label}
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={120} className="mt-12">
          <div className="grid gap-4 md:grid-cols-3">
            {homeCopy.hero.pathways.map((path, index) => (
              <Card key={path.title} accent={index === 0 ? "gold" : "blue"} className="p-6">
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Navigate
                </div>
                <div className="mt-3 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                  {path.title}
                </div>
                <p className="mt-3 text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                  {path.body}
                </p>
                <div className="mt-6">
                  <Button href={path.href} variant="secondary" className="h-10 px-5">
                    Open {path.title}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <ScrollReveal className="md:col-span-7">
            <Card accent="gold">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--accent-gold)]">
                    {homeCopy.hero.proof.eyebrow}
                  </div>
                  <div className="mt-3 font-[var(--font-display)] text-[22px] font-semibold leading-[1.15] text-[var(--text-primary)]">
                    {homeCopy.hero.proof.headline}
                  </div>
                </div>
                <div className="hidden h-10 w-10 rounded-[var(--radius-2)] border border-[rgba(216,177,90,0.32)] bg-[rgba(216,177,90,0.08)] md:block" />
              </div>
              <ul className="mt-5 space-y-3 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                {homeCopy.hero.proof.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--accent-gold)] shadow-[0_0_0_3px_rgba(216,177,90,0.15)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="mt-6 rounded-[var(--radius-2)] border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.2)] px-4 py-3">
                <p className="text-[14px] leading-[1.65] text-[var(--text-primary)]">
                  {homeCopy.hero.proof.quote}
                </p>
                <footer className="mt-2 text-[12px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {homeCopy.hero.proof.attribution}
                </footer>
              </blockquote>
              <div className="mt-6">
                <Button href={homeCopy.hero.proof.link.href} variant="secondary" className="h-10 px-5">
                  {homeCopy.hero.proof.link.label}
                </Button>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delayMs={80} className="md:col-span-5">
            <Card accent="blue" className="h-full">
              <SectionLabel tone="blue">{homeCopy.hero.pilot.eyebrow}</SectionLabel>
              <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                {homeCopy.hero.pilot.headline}
              </div>
              <ul className="mt-5 space-y-3 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                {homeCopy.hero.pilot.bullets.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_0_3px_rgba(45,227,255,0.12)]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href={homeCopy.hero.pilot.cta.href} variant="primary" className="h-10 px-5">
                  {homeCopy.hero.pilot.cta.label}
                </Button>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-6">
            <Card accent="blue">
              <SectionLabel tone="blue">{homeCopy.hero.trust.eyebrow}</SectionLabel>
              <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                {homeCopy.hero.trust.title}
              </div>
              <ul className="mt-5 space-y-3 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                {homeCopy.hero.trust.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_0_3px_rgba(45,227,255,0.12)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button href="/intelligence" variant="secondary" className="h-10 px-5">
                  Review service architecture
                </Button>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delayMs={80} className="md:col-span-6">
            <Card accent="gold">
              <SectionLabel tone="gold">INFORMATION FLOW</SectionLabel>
              <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                What the site gives a first-time visitor
              </div>
              <div className="mt-5 grid gap-3 text-[14px]">
                {[
                  {
                    label: "Case systems",
                    text: "exact metric movement and deployment constraints",
                    href: "/work",
                  },
                  {
                    label: "Playbooks",
                    text: "decision frameworks behind execution choices",
                    href: "/thinking",
                  },
                  {
                    label: "Signals",
                    text: "operator notes from current system builds",
                    href: "/signal",
                  },
                ].map((row) => (
                  <Link
                    key={row.label}
                    href={row.href}
                    className="rounded-[var(--radius-2)] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.016)] px-4 py-3 transition-colors hover:border-[rgba(216,177,90,0.35)]"
                  >
                    <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--text-primary)]">
                      {row.label}
                    </div>
                    <div className="mt-1 text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                      {row.text}
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-16">
          <Card accent="blue" className="glass">
            <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-start">
              <div className="space-y-4">
                <SectionLabel tone="blue">CONTACT</SectionLabel>
                <div className="font-[var(--font-display)] text-[28px] font-semibold leading-[1.15] text-[var(--text-primary)] md:text-[34px]">
                  Bring one decision bottleneck. Leave with a pilot plan.
                </div>
                <p className="max-w-xl text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Share your decision flow, baseline metric, and operational constraints.
                  I will reply with a tight pilot scope and expected ROI window.
                </p>
                <div className="text-[13px] leading-[1.7] text-[var(--text-muted)]">
                  Best fit: teams ready to instrument a real workflow, not only discuss AI strategy.
                </div>
              </div>

              <div className="rounded-[var(--radius-3)] border border-[rgba(255,255,255,0.07)] bg-[rgba(0,0,0,0.18)] p-6">
                <ContactForm
                  toEmail="hello@pooravkadiyan.com"
                  subject="Pilot inquiry - decision workflow scope"
                  ctaLabel="Draft the intro email"
                />
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </PageShell>
    </div>
  );
}
