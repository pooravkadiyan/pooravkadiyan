export type EngagementTier = {
  title: string;
  body: string;
  tags: string[];
};

export const engagementTiers: EngagementTier[] = [
  {
    title: "Build Sprint (7–14 days)",
    tags: ["Fast", "High leverage", "Prototype → production path"],
    body: "Ship the core intelligence layer with a clear scope: data schema + model baseline + unified API + an action workflow. Designed to produce something usable immediately.",
  },
  {
    title: "System Build (4–8 weeks)",
    tags: ["Full stack", "Ops integration", "Measurable outcomes"],
    body: "End-to-end delivery across the Intelligence Stack: data pipelines, multiple models, inference API, dashboard/ops triggers, monitoring and iteration cadence.",
  },
  {
    title: "Fractional Intelligence Architect",
    tags: ["Ongoing", "Strategy + engineering", "Team enablement"],
    body: "High-context partnership for founders/heads of ops: roadmap, architecture, reviews, rapid builds, and decision systems—without hiring a full team upfront.",
  },
];

export const rateCard = {
  note: "Rate card can be finalized after the first decision map call.",
  placeholders: [
    "Build Sprint: ₹X–₹Y (scope-based)",
    "System Build: ₹X/week for 4–8 weeks",
    "Fractional: ₹X/month",
  ],
} as const;

