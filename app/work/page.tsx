import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { caseStudyHighlights } from "@/content/case-studies";

export const metadata = {
  title: "Work",
  description:
    "Evidence: case studies and real intelligence systems built across AI, ops automation, and India market data.",
};

export default function WorkPage() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <PageShell className="py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <SectionLabel tone="gold">EVIDENCE</SectionLabel>
          <h1 className="font-[var(--font-display)] text-[44px] leading-[1.1] text-[var(--text-primary)] md:text-[58px]">
            Real systems. Real outcomes. Real constraints.
          </h1>
          <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)]">
            52 repositories across AI engineering, ops automation, dashboards,
            and India market intelligence. Below are the flagship builds.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag active>Production-first</Tag>
            <Tag>Ops-integrated</Tag>
            <Tag>Decision-driven</Tag>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudyHighlights.map((c) => (
            <Card key={c.title} accent="gold">
              <div className="font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                {c.title}
              </div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
                {c.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Button href="/engage" variant="secondary" className="h-10">
                  Build something similar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-[4px] border border-[var(--bg-border)] bg-[var(--bg-surface)] p-8">
          <SectionLabel tone="blue">PORTFOLIO</SectionLabel>
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                Want the full repository map?
              </div>
              <p className="mt-2 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
                I can share a curated walkthrough of the 52 builds, organized by
                outcome and system layer.
              </p>
            </div>
            <Button href="/engage" variant="primary">
              Request walkthrough
            </Button>
          </div>
        </div>
      </PageShell>
    </div>
  );
}

