import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

export const metadata = {
  title: "Signals",
  description:
    "Field signals and operator notes from live decision-system deployments.",
};

const posts = [
  {
    title: "Most AI projects fail because they stop at inference.",
    tags: ["Action layer", "Ops", "Feedback loops"],
    body: "The compounding advantage isn’t the model—it’s the closed loop from decision → action → measured outcome → retrain.",
  },
  {
    title: "India MSME intelligence is behavioral, not just financial.",
    tags: ["Trust", "Power structures", "Informality"],
    body: "Relationships beat contracts. Incentives beat rules. Your system must reflect the real operating environment to be useful.",
  },
  {
    title: "Simulation-first strategy turns uncertainty into speed.",
    tags: ["Agents", "War-gaming", "Decision design"],
    body: "Before spending big, run the decision 1,000 times. Find the assumptions that actually drive outcomes—then execute.",
  },
] as const;

export default function SignalPage() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <PageShell className="py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <SectionLabel tone="blue">SIGNALS</SectionLabel>
          <h1 className="font-[var(--font-display)] text-[44px] leading-[1.1] text-[var(--text-primary)] md:text-[58px]">
            Field notes from live systems.
          </h1>
          <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)]">
            Short updates on architecture decisions, operating constraints, and
            what actually worked in production.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag active>Systems</Tag>
            <Tag>Strategy</Tag>
            <Tag>India market</Tag>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Card key={p.title} accent="blue">
              <div className="font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                {p.title}
              </div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
                {p.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-6">
                <Button href="/engage" variant="secondary" className="h-10">
                  Apply to your business
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </PageShell>
    </div>
  );
}

