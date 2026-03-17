export type CaseStudy = {
  title: string;
  body: string;
  tags: string[];
};

export const caseStudyHighlights: CaseStudy[] = [
  {
    title: "AI Debt Recovery Command Center",
    tags: ["7 ML models", "FastAPI", "WhatsApp automation", "Ops stack"],
    body: "A full collections intelligence system: multiple models, unified API, messaging automation, and operational dashboards designed for real recovery workflows.",
  },
  {
    title: "Multi-Model Revenue Prediction API",
    tags: ["KMeans", "Churn", "Risk", "CLV", "Propensity"],
    body: "One endpoint serving multiple revenue and risk models with consistent IO, observability, and explainability—built to plug into growth + finance decisions.",
  },
  {
    title: "Haryana Land Intelligence",
    tags: ["RTI pipeline", "Gov records", "Extraction", "Search"],
    body: "Government records extraction and data structuring into a pipeline that enables analysis and decision-ready insights—built for messy, real-world datasets.",
  },
  {
    title: "RTI Engine",
    tags: ["Automation", "Filing", "Tracking", "Workflow"],
    body: "Automated RTI filing and tracking system—workflow-first design that turns public data access into a reliable operational capability.",
  },
  {
    title: "Patent Data Processing",
    tags: ["IP intelligence", "Extraction", "Analytics"],
    body: "Patent ingestion and processing into structured intelligence—built to support search, mapping, and strategic decision-making.",
  },
  {
    title: "HiveMind + EvoMesh",
    tags: ["Distributed agents", "Architecture", "Experiments"],
    body: "Distributed AI architecture experiments exploring orchestration, coordination, and system-level performance—built as reusable infrastructure patterns.",
  },
];

