export type CaseStudy = {
  title: string;
  body: string;
  tags: string[];
  outcome: string;
  timeframe: string;
  context: string;
  artifact: string;
};

export const caseStudyHighlights: CaseStudy[] = [
  {
    title: "AI Debt Recovery Command Center",
    tags: ["7 ML models", "FastAPI", "WhatsApp automation", "Ops stack"],
    body: "Collections teams moved from static allocation reports to a live next-action queue that prioritized calls, messaging, and escalation paths.",
    outcome: "+18% recovery lift",
    timeframe: "in 90 days",
    context: "Mid-market NBFC collections",
    artifact: "Live command center with decision queue and call outcomes",
  },
  {
    title: "Multi-Model Revenue Prediction API",
    tags: ["KMeans", "Churn", "Risk", "CLV", "Propensity"],
    body: "A single production endpoint replaced disconnected model scripts and gave growth, finance, and ops teams one contract for risk and revenue signals.",
    outcome: "-41% manual decision time",
    timeframe: "in 8 weeks",
    context: "B2B recurring revenue team",
    artifact: "Unified inference API with scored actions and explainability output",
  },
  {
    title: "Haryana Land Intelligence",
    tags: ["RTI pipeline", "Gov records", "Extraction", "Search"],
    body: "Public land records were converted from fragmented files into a searchable entity-resolved system used for faster due-diligence decisions.",
    outcome: "-63% analyst prep time",
    timeframe: "in 6 weeks",
    context: "Gov-data due diligence workflow",
    artifact: "Entity resolution workflow map with source-to-record lineage",
  },
  {
    title: "RTI Engine",
    tags: ["Automation", "Filing", "Tracking", "Workflow"],
    body: "RTI filing and follow-up actions were automated into a repeatable pipeline so teams could track deadlines and responses without manual spreadsheets.",
    outcome: "3.2x case throughput",
    timeframe: "in 10 weeks",
    context: "Legal-ops and research team",
    artifact: "Workflow board with filing status, SLA timers, and triggers",
  },
  {
    title: "Patent Data Processing",
    tags: ["IP intelligence", "Extraction", "Analytics"],
    body: "Patent ingestion moved from ad hoc pulls to scheduled processing and structured mappings, making competitive scans materially faster.",
    outcome: "-37% cycle time",
    timeframe: "in 7 weeks",
    context: "IP intelligence operations",
    artifact: "Automated ingestion pipeline with monitored taxonomy outputs",
  },
  {
    title: "HiveMind + EvoMesh",
    tags: ["Distributed agents", "Architecture", "Experiments"],
    body: "Agent orchestration experiments were standardized into reusable patterns for routing, retries, and cross-agent coordination.",
    outcome: "+29% task completion reliability",
    timeframe: "in 5 weeks",
    context: "Internal multi-agent platform",
    artifact: "Orchestration schema showing handoffs, retries, and observability",
  },
];

