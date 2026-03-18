export const site = {
  name: "Poorav Kadiyan",
  title: "Intelligence Architect",
  domain: "pooravkadiyan.com",
  email: "hello@pooravkadiyan.com",
  oneLiner:
    "I design and deploy decision systems for operators who need measurable business movement in weeks, not quarters.",
  credential:
    "Built 52 production systems across collections, revenue forecasting, workflow automation, and India market intelligence.",
  contrastLine: "Top-tier consulting rigor. Operator-speed execution.",
  positioning: {
    why:
      "Most firms deliver analysis. Most engineers deliver components. Very few deliver deployed intelligence systems that change how decisions get made.",
    claim:
      "Strategy + engineering + India market depth—delivered as deployed systems, not decks.",
  },
} as const;

export const homeCopy = {
  hero: {
    label: "FOR OPERATORS WHO OWN P&L OUTCOMES",
    headline: "Intelligence systems that upgrade decisions in days.",
    lead:
      "Built for mid-market operators in NBFC, manufacturing, and B2B services: fix one high-stakes decision flow first, then compound gains across the business.",
    support:
      "From messy operational data to deployed decision workflows in production.",
    tags: ["NBFC collections", "Manufacturing planning", "B2B operations"],
    ctas: {
      primary: { href: "/engage", label: "Start a 10-day pilot" },
      secondary: { href: "/work", label: "See quantified case systems" },
    },
    outcomes: [
      {
        metric: "-41%",
        detail: "manual decision time in collections workflows",
      },
      {
        metric: "+18%",
        detail: "recovery lift inside the first 90 days",
      },
      {
        metric: "-23%",
        detail: "inventory variance after demand workflow rollout",
      },
    ],
    proof: {
      eyebrow: "RECENT OUTCOMES",
      headline: "Concrete impact from deployed systems",
      bullets: [
        "Debt operations: triage + next-action scoring deployed to daily teams",
        "Revenue forecasting: one API serving risk, churn, and propensity calls",
        "Ops automation: WhatsApp and dashboard actions wired to feedback loops",
      ],
      quote:
        "\"We stopped debating reports and started acting on a live decision queue every morning.\"",
      attribution: "COO, anonymized mid-market operator",
      link: { href: "/work", label: "Open case systems" },
    },
    pathways: [
      {
        title: "Case systems",
        body: "Before/after metrics, operating context, and shipped artifacts.",
        href: "/work",
      },
      {
        title: "Playbooks",
        body: "Decision frameworks used to scope and ship in tight cycles.",
        href: "/thinking",
      },
      {
        title: "Signals",
        body: "Short operator notes from active builds and field constraints.",
        href: "/signal",
      },
    ],
    pilot: {
      eyebrow: "FIRST STEP",
      headline: "Start with a 10-day pilot tied to one business metric.",
      bullets: [
        "Day 1-2: map the decision and baseline the current leak",
        "Day 3-6: ship scoring logic + action surface for one team",
        "Day 7-10: run live and measure movement against baseline",
      ],
      cta: { href: "/engage", label: "Design your first AI workflow" },
    },
    trust: {
      eyebrow: "OPERATING CONTEXT",
      title: "Built for messy, high-stakes environments",
      items: [
        "NBFC debt recovery and call-center queues",
        "Manufacturing demand planning and inventory decisions",
        "Founder-led teams scaling decision quality without large data teams",
      ],
    },
  },
} as const;

