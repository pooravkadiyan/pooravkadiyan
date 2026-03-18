export const site = {
  name: "Poorav Kadiyan",
  title: "Intelligence Architect",
  domain: "pooravkadiyan.com",
  email: "hello@pooravkadiyan.com",
  oneLiner:
    "I build executive-grade intelligence systems—from decision-ready data to deployed models to operational workflows—at the intersection of AI engineering, business strategy, and India market intelligence.",
  positioning: {
    why:
      "Most firms deliver analysis. Most engineers deliver components. Very few deliver deployed intelligence systems that change how decisions get made.",
    claim:
      "Strategy + engineering + India market depth—delivered as deployed systems, not decks.",
  },
} as const;

export const homeCopy = {
  hero: {
    label: "SYSTEM THESIS",
    lead:
      "I design and ship decision systems—data foundation, model layer, and operational workflows—with consulting-grade rigor and operator-grade speed.",
    tags: ["Systems thinking", "Fast execution", "India MSME depth", "Multi-agent + MLOps"],
    ctas: {
      primary: { href: "/engage", label: "Book a build sprint" },
      secondary: { href: "/work", label: "See case studies" },
      premium: { href: "/intelligence", label: "Explore services" },
    },
    proof: {
      eyebrow: "RECENT PROOF",
      headline: "Deployed systems with visible operating lift.",
      metricValue: "31%",
      metricLabel: "faster decision cycle in 8 weeks",
      miniFlow: ["Data layer", "Inference API", "Action workflow"],
      bullets: [
        "9 live dashboards tied to action workflows (not slideware)",
        "47 daily inference calls embedded into operator routines",
        "Weekly feedback loop that improves rankings and triggers",
      ],
      link: { href: "/work", label: "Browse evidence" },
    },
  },
  metrics: [
    { kpi: "Time-to-decision", value: "weeks → days" },
    { kpi: "Ops throughput", value: "+20–40%" },
    { kpi: "Forecast error", value: "-10–25%" },
    { kpi: "Automation coverage", value: "3–10x" },
  ],
  artifacts: [
    { label: "Command center", meta: "ops dashboard + actions" },
    { label: "Inference API", meta: "unified scoring endpoint" },
    { label: "WhatsApp ops", meta: "workflow automation" },
    { label: "RTI pipeline", meta: "source → decision" },
    { label: "Patent intel", meta: "monitor + alerting" },
    { label: "Land records", meta: "entity resolution" },
  ],
  pillars: [
    {
      tone: "blue",
      sectionLabel: "WHAT I BUILD",
      title: "The Intelligence Stack",
      body: "Data foundation, model layer, unified inference API, action layer, feedback loops. Most vendors stop at three layers.",
      href: "/intelligence",
      cta: "View services",
    },
    {
      tone: "blue",
      sectionLabel: "HOW I THINK",
      title: "Simulation-first strategy",
      body: "Before spending ₹10Cr, run the decision 1,000 times. Model actors, incentives, uncertainty—then execute with conviction.",
      href: "/thinking",
      cta: "Explore frameworks",
    },
    {
      tone: "gold",
      sectionLabel: "EVIDENCE",
      title: "Real systems shipped",
      body: "Debt recovery command centers, revenue prediction APIs, WhatsApp automation, RTI pipelines, patent intelligence, land records.",
      href: "/work",
      cta: "See the work",
    },
  ],
} as const;

