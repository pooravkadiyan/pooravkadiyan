import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { frameworks } from "@/content/frameworks";

export const metadata = {
  title: "Thinking",
  description:
    "How I think: frameworks for building compounding intelligence systems and executing in the Indian market.",
};

export default function ThinkingPage() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <PageShell className="py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          <SectionLabel tone="blue">HOW I THINK</SectionLabel>
          <h1 className="font-[var(--font-display)] text-[44px] leading-[1.1] text-[var(--text-primary)] md:text-[58px]">
            Frameworks that turn uncertainty into execution.
          </h1>
          <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)]">
            This is how I connect business outcomes to systems architecture—so
            teams can ship intelligence that keeps getting better.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Tag active>Systems thinking</Tag>
            <Tag>Business framing</Tag>
            <Tag>Execution speed</Tag>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {frameworks.map((f) => (
            <Card key={f.title} accent={f.tone === "blue" ? "blue" : "gold"}>
              <SectionLabel tone={f.tone}>
                {f.tone === "blue" ? "TECHNICAL" : "STRATEGIC"}
              </SectionLabel>
              <div className="mt-4 font-[var(--font-display)] text-[24px] font-semibold text-[var(--text-primary)]">
                {f.title}
              </div>
              <ul className="mt-4 space-y-2 text-[15px] leading-[1.65] text-[var(--text-secondary)]">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-[9px] h-[5px] w-[5px] rounded-full bg-[var(--accent-blue)] opacity-80" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="/work" variant="secondary">
            See how this ships
          </Button>
          <Button href="/engage" variant="primary">
            Apply to your business
          </Button>
        </div>
      </PageShell>
    </div>
  );
}

