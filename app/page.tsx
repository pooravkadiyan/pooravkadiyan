import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { ScrollReveal } from "@/components/scroll-reveal";
import { homeCopy } from "@/content/site-copy";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <PageShell className="py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <ScrollReveal className="space-y-7">
            <SectionLabel tone="blue">{homeCopy.hero.label}</SectionLabel>
            <h1 className="font-[var(--font-display)] text-[44px] leading-[1.02] tracking-[-0.03em] text-[var(--text-primary)] md:text-[78px]">
              {homeCopy.hero.headline}
            </h1>
            <p className="max-w-2xl text-[17px] leading-[1.65] text-[var(--text-secondary)]">
              {homeCopy.hero.lead}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={homeCopy.hero.ctas.primary.href} variant="primary">
                {homeCopy.hero.ctas.primary.label}
              </Button>
              <Button href={homeCopy.hero.ctas.secondary.href} variant="secondary">
                {homeCopy.hero.ctas.secondary.label}
              </Button>
              <a
                href={homeCopy.hero.ctas.premium.href}
                className="text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {homeCopy.hero.ctas.premium.label} →
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {homeCopy.hero.tags.map((t, idx) => (
                <Tag key={t} active={idx === 0}>
                  {t}
                </Tag>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <Card accent="blue" className="glass p-7">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--accent-blue)]">
                    {homeCopy.hero.proof.eyebrow}
                  </div>
                  <div className="mt-3 font-[var(--font-display)] text-[22px] font-semibold leading-[1.15] text-[var(--text-primary)]">
                    {homeCopy.hero.proof.headline}
                  </div>
                </div>
                <div className="hidden h-10 w-10 rounded-[var(--radius-2)] border border-[rgba(45,227,255,0.25)] bg-[rgba(45,227,255,0.06)] md:block" />
              </div>
              <ul className="mt-5 space-y-3 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                {homeCopy.hero.proof.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--accent-blue)] shadow-[0_0_0_3px_rgba(45,227,255,0.12)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={homeCopy.hero.proof.link.href} variant="secondary" className="h-10 px-5">
                  {homeCopy.hero.proof.link.label}
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={160} className="mt-14">
          <div className="grid gap-4 md:grid-cols-4">
            {homeCopy.metrics.map((m) => (
              <div
                key={m.kpi}
                className="rounded-[var(--radius-2)] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.018)] px-5 py-4"
              >
                <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {m.kpi}
                </div>
                <div className="mt-2 font-[var(--font-display)] text-[18px] font-semibold text-[var(--text-primary)]">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <ScrollReveal className="md:col-span-7">
            <Card accent="blue">
              <SectionLabel tone="blue">THE INTELLIGENCE STACK</SectionLabel>
              <div className="mt-4 font-[var(--font-display)] text-[28px] font-semibold text-[var(--text-primary)]">
                From decision-ready data to deployed workflows.
              </div>
              <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                Build the smallest system that improves a decision today—then add
                layers that compound: models, APIs, action surfaces, feedback.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "Data", body: "clean schema + governance + sources" },
                  { title: "Models", body: "forecasting + ranking + agents" },
                  { title: "Workflow", body: "dashboards + actions + feedback" },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-[var(--radius-2)] border border-[var(--bg-border)] bg-[rgba(255,255,255,0.02)] p-4"
                  >
                    <div className="font-[var(--font-display)] text-[14px] font-semibold text-[var(--text-primary)]">
                      {x.title}
                    </div>
                    <div className="mt-1 text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                      {x.body}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Button href="/intelligence" variant="secondary" className="h-10">
                  View services
                </Button>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delayMs={80} className="md:col-span-5">
            <Card accent="gold" className="h-full">
              <SectionLabel tone="gold">ARTIFACTS</SectionLabel>
              <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                Real outputs teams actually use.
              </div>
              <div className="mt-5 grid gap-3">
                {homeCopy.artifacts.slice(0, 6).map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center justify-between gap-4 rounded-[var(--radius-2)] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.016)] px-4 py-3"
                  >
                    <div className="text-[13px] font-medium text-[var(--text-primary)]">
                      {a.label}
                    </div>
                    <div className="text-[12px] text-[var(--text-muted)]">
                      {a.meta}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Button href="/work" variant="secondary" className="h-10">
                  See the work
                </Button>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-6">
            <Card accent="blue">
              <SectionLabel tone="blue">SIMULATION-FIRST</SectionLabel>
              <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                Run the decision 1,000 times before spending ₹10Cr.
              </div>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                Model incentives, constraints, and uncertainty—then ship the
                minimal system that changes behavior in the real world.
              </p>
              <div className="mt-7">
                <Button href="/thinking" variant="secondary" className="h-10">
                  Explore frameworks
                </Button>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delayMs={80} className="md:col-span-6">
            <Card accent="gold">
              <SectionLabel tone="gold">ENGAGE</SectionLabel>
              <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                Start with a build sprint.
              </div>
              <p className="mt-3 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                Ship the first intelligence layer fast, validate ROI, then expand
                into a compounding system.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/engage" variant="primary" className="h-10 px-5">
                  Get a sprint plan
                </Button>
                <Button href="/work" variant="secondary" className="h-10 px-5">
                  Review evidence
                </Button>
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
                  Book a scoping call—or send a structured intro.
                </div>
                <p className="max-w-xl text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  If you share the decision, data availability, and operational constraints,
                  I’ll reply with a fast assessment and next steps.
                </p>
                <div className="text-[13px] leading-[1.7] text-[var(--text-muted)]">
                  Best fit: mid-market India operators, global teams shipping decision systems,
                  founders building intelligence into products.
                </div>
              </div>

              <div className="rounded-[var(--radius-3)] border border-[rgba(255,255,255,0.07)] bg-[rgba(0,0,0,0.18)] p-6">
                <ContactForm
                  toEmail="hello@pooravkadiyan.com"
                  subject="Project inquiry — scoping call"
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
