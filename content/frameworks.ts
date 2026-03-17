export type FrameworkTone = "blue" | "gold";

export type Framework = {
  title: string;
  tone: FrameworkTone;
  points: string[];
};

export const frameworks: Framework[] = [
  {
    title: "The Intelligence Stack",
    tone: "blue",
    points: [
      "Data foundation: schema designed for decisions",
      "Model layer: multiple models answering operational questions",
      "Inference API: unified, fast, explainable",
      "Action layer: triggers real operations (WhatsApp, dashboards, limits)",
      "Feedback loop: outcomes retrain models → compounding system",
    ],
  },
  {
    title: "Behavioral MSME Map",
    tone: "gold",
    points: [
      "Power structures: who controls credit and access",
      "Trust dynamics: relationships > contracts",
      "Credit psychology: repayment behavior is contextual",
      "Digital readiness gaps: tooling must match reality",
      "Family governance: incentives and authority matter",
    ],
  },
  {
    title: "Simulation-First Strategy",
    tone: "blue",
    points: [
      "Map real actors + objectives",
      "Build agent populations with behavioral parameters",
      "Run decisions through simulation (1,000+ iterations)",
      "Extract probability distributions",
      "Identify the 3 critical assumptions that drive outcomes",
    ],
  },
  {
    title: "The Reusability Filter",
    tone: "gold",
    points: [
      "Priority score = Impact × Reusability × Speed",
      "High all three: build as infrastructure",
      "High impact + low reuse: do once, don’t build",
      "Low impact: cut or pause",
    ],
  },
];

