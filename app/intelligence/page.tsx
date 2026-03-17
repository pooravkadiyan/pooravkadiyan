import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

export const metadata = {
  title: "Intelligence",
  description:
    "What I build: intelligence systems across data, models, APIs, and operational workflows.",
};

const services = [
  {
    title: "Intelligence Stack Build",
    tags: ["Data", "Models", "Inference API", "Action Layer", "Feedback Loops"],
    body: "End-to-end architecture and delivery: schema designed for decisions, multiple models for operational questions, unified inference API, triggers into ops, and measurable feedback loops.",
  },
  {
    title: "Multi-Model Decision APIs",
    tags: ["Churn", "Risk", "CLV", "Propensity", "Explainability"],
    body: "A single endpoint that serves multiple models with consistent inputs/outputs, observability, and fast iteration—built to plug into product, ops, and finance workflows.",
  },
  {
    title: "WhatsApp + Ops Automation",
    tags: ["MCP", "Collections", "Field Ops", "Workflows"],
    body: "Operational systems that move teams: messaging automation, recovery workflows, dashboards, and orchestration—designed for the reality of mid-market India.",
  },
  {
    title: "India Market Intelligence Pipelines",
    tags: ["RTI", "Land Records", "Gov Data", "Patents"],
    body: "Structured data extraction from messy sources (government records, filings, patents), engineered into reliable pipelines that support search, analysis, and decision-making.",
  },
] as const;

export default function IntelligencePage() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <PageShell className="py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <SectionLabel tone="blue">WHAT I BUILD</SectionLabel>
          <h1 className="font-[var(--font-display)] text-[44px] leading-[1.1] text-[var(--text-primary)] md:text-[58px]">
            The intelligence menu.
          </h1>
          <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)]">
            You don’t need another report. You need systems that connect data →
            models → APIs → operations → outcomes.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag active>Blue = technical</Tag>
            <Tag>Gold = strategic</Tag>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.title} accent="blue">
              <div className="font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                {s.title}
              </div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
                {s.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-[4px] border border-[var(--bg-border)] bg-[var(--bg-surface)] p-8">
          <SectionLabel tone="gold">NEXT STEP</SectionLabel>
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                If you want decisions to move faster, start here.
              </div>
              <p className="mt-2 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
                I’ll map your decision workflow, identify the missing
                intelligence layer, and propose a build plan that ships in days,
                not quarters.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/engage" variant="primary">
                Work with me
              </Button>
              <Button href="/work" variant="secondary">
                Evidence
              </Button>
            </div>
          </div>
        </div>
      </PageShell>
    </div>
  );
}

