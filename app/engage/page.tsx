import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { LazyContactForm } from "@/components/lazy-contact-form";
import { engagementTiers, rateCard } from "@/content/pricing";
import { site } from "@/content/site-copy";

export const metadata = {
  title: "Engage",
  description:
    "How to work with Poorav: engagement models, process, and next steps to ship an intelligence system.",
};

export default function EngagePage() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <PageShell className="py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <SectionLabel tone="gold">ENGAGE</SectionLabel>
          <h1 className="font-[var(--font-display)] text-[44px] leading-[1.1] text-[var(--text-primary)] md:text-[58px]">
            Let’s build your intelligence layer.
          </h1>
          <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)]">
            If you have data, decisions, and operational friction—there’s a
            compounding system waiting to be built.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag active>Outcome-first</Tag>
            <Tag>System delivery</Tag>
            <Tag>India reality</Tag>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {engagementTiers.map((m) => (
            <Card key={m.title} accent="gold">
              <div className="font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                {m.title}
              </div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
                {m.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card accent="blue">
            <SectionLabel tone="blue">PROCESS</SectionLabel>
            <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
              How the work runs
            </div>
            <ol className="mt-4 space-y-3 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
              <li>
                <span className="text-[var(--text-primary)]">1) Decision map:</span>{" "}
                clarify the operational decision that must improve.
              </li>
              <li>
                <span className="text-[var(--text-primary)]">
                  2) Intelligence design:
                </span>{" "}
                pick the minimal models + data schema that move KPIs.
              </li>
              <li>
                <span className="text-[var(--text-primary)]">3) Ship:</span>{" "}
                deploy the inference API + action workflow.
              </li>
              <li>
                <span className="text-[var(--text-primary)]">4) Feedback:</span>{" "}
                measure outcomes and iterate for compounding advantage.
              </li>
            </ol>
          </Card>

          <Card accent="gold">
            <SectionLabel tone="gold">CALL TO ACTION</SectionLabel>
            <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
              Start with a short scoping call.
            </div>
            <p className="mt-3 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
              If it’s a fit, we’ll define the decision, scope the first layer, and
              map the fastest path to real operational impact.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${site.email}`} variant="primary">
                Email for a call
              </Button>
              <Button href="/work" variant="secondary">
                Review evidence
              </Button>
            </div>
            <div className="mt-5 text-[13px] text-[var(--text-muted)]">
              Prefer WhatsApp? Available on request after first email intro.
            </div>
          </Card>
        </div>

        <div className="defer-render mt-12">
          <Card accent="blue" className="glass">
            <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
              <div className="space-y-4">
                <SectionLabel tone="blue">CONTACT</SectionLabel>
                <div className="font-[var(--font-display)] text-[28px] font-semibold leading-[1.15] text-[var(--text-primary)]">
                  Send context, get a clear next step.
                </div>
                <p className="max-w-xl text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                  Share the decision, data sources, and constraints. I’ll reply with a fast
                  assessment and whether a scoping call makes sense.
                </p>
                <div className="text-[13px] leading-[1.7] text-[var(--text-muted)]">
                  Typical reply: within 24 hours. If urgent, include “URGENT” in the subject.
                </div>
              </div>

              <div className="rounded-[var(--radius-3)] border border-[rgba(255,255,255,0.07)] bg-[rgba(0,0,0,0.18)] p-6">
                <LazyContactForm
                  toEmail={site.email}
                  subject="Engagement inquiry — scoping call"
                  ctaLabel="Draft the email"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="defer-render mt-12 rounded-[4px] border border-[var(--bg-border)] bg-[var(--bg-surface)] p-8">
          <SectionLabel tone="blue">PRICING</SectionLabel>
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <div className="font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                Transparent scope-based pricing.
              </div>
              <p className="mt-2 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
                {rateCard.note}
              </p>
            </div>
            <div className="space-y-2 text-[13px] leading-[1.65] text-[var(--text-secondary)] md:text-right">
              {rateCard.placeholders.map((p) => (
                <div key={p} className="font-[var(--font-mono)]">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </div>
  );
}

