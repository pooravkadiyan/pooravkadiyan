import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { homeCopy } from "@/content/site-copy";
import { LazyContactForm } from "@/components/lazy-contact-form";

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <PageShell className="py-20 md:py-28">
        <section className="grid gap-10 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
          <div className="space-y-8 md:col-span-7">
            <SectionLabel tone="blue">{homeCopy.hero.label}</SectionLabel>
            <h1 className="max-w-[11.2ch] font-[var(--font-display)] text-[44px] leading-[1] tracking-[-0.035em] text-[var(--text-primary)] [text-wrap:balance] md:text-[74px]">
              <span className="block">Intelligence systems</span>
              <span className="block">that upgrade</span>
              <span className="block">decisions fast.</span>
            </h1>
            <p className="max-w-[58ch] text-[18px] leading-[1.76] text-[var(--text-secondary)] md:pr-2">
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
                className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)] underline decoration-[rgba(240,243,255,0.24)] underline-offset-[6px] transition-[color,decoration-color] duration-[var(--dur-1)] ease-[var(--ease-out)] hover:text-[var(--text-primary)] hover:decoration-[rgba(240,243,255,0.7)]"
              >
                {homeCopy.hero.ctas.premium.label} →
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {homeCopy.hero.tags.map((t, idx) => (
                <Tag key={t} active={idx === 0}>
                  {t}
                </Tag>
              ))}
            </div>

            <a
              href="#impact-snapshot"
              className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)] transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] hover:text-[var(--accent-blue)]"
            >
              <span className="h-px w-6 bg-current opacity-80" />
              Scroll for impact snapshot
            </a>
          </div>

          <div className="md:col-span-5 md:pt-11">
            <Card
              accent="blue"
              className="group glass border-[rgba(255,255,255,0.14)] bg-[linear-gradient(180deg,rgba(22,24,38,0.88),rgba(10,10,16,0.8))] p-8"
            >
              <SectionLabel tone="blue" size="sm">
                {homeCopy.hero.proof.eyebrow}
              </SectionLabel>
              <div className="mt-3 font-[var(--font-display)] text-[24px] font-semibold leading-[1.18] text-[var(--text-primary)]">
                {homeCopy.hero.proof.headline}
              </div>

              <div className="mt-5 rounded-[var(--radius-2)] border border-[rgba(45,227,255,0.2)] bg-[rgba(45,227,255,0.07)] px-4 py-3.5">
                <div className="font-[var(--font-display)] text-[34px] leading-none tracking-[-0.03em] text-[rgba(214,247,255,0.98)]">
                  {homeCopy.hero.proof.metricValue}
                </div>
                <div className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-[rgba(214,247,255,0.82)]">
                  {homeCopy.hero.proof.metricLabel}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {homeCopy.hero.proof.miniFlow.map((step) => (
                    <span
                      key={step}
                      className="rounded-[var(--radius-1)] border border-[rgba(45,227,255,0.24)] bg-[rgba(255,255,255,0.03)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.11em] text-[rgba(230,249,255,0.82)]"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-5 space-y-3.5 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                {homeCopy.hero.proof.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] group-hover:text-[var(--text-primary)]"
                  >
                    <span className="mt-[9px] h-2 w-2 rounded-full bg-[rgba(238,242,255,0.86)] shadow-[0_0_0_4px_rgba(45,227,255,0.16)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-[rgba(255,255,255,0.1)] pt-5">
                <Button
                  href={homeCopy.hero.proof.link.href}
                  variant="secondary"
                  className="h-10 border-[rgba(45,227,255,0.45)] text-[rgba(223,248,255,0.96)] hover:border-[rgba(45,227,255,0.75)]"
                >
                  {homeCopy.hero.proof.link.label}
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <div id="impact-snapshot" className="mt-14 scroll-mt-24">
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
        </div>

        <div className="defer-render mt-16 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
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
          </div>

          <div className="md:col-span-5">
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
          </div>

          <div className="md:col-span-6">
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
          </div>

          <div className="md:col-span-6">
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
          </div>
        </div>

        <div className="defer-render mt-16">
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
                <LazyContactForm
                  toEmail="hello@pooravkadiyan.com"
                  subject="Project inquiry — scoping call"
                  ctaLabel="Draft the intro email"
                />
              </div>
            </div>
          </Card>
        </div>
      </PageShell>
    </div>
  );
}
