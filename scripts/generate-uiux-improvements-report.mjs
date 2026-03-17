import fs from "node:fs";
import path from "node:path";

const workspaceRoot = process.cwd();
const reportsDir = path.join(workspaceRoot, "reports");
const outputPath = path.join(reportsDir, "ui-ux-improvements-suggestions-report.md");

const desktopManifestPath = path.join(workspaceRoot, ".lighthouseci", "manifest.json");
const mobileManifestPath = path.join(workspaceRoot, ".lighthouseci-mobile", "manifest.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function formatScore(score) {
  if (typeof score !== "number") return "n/a";
  return score.toFixed(2);
}

function toMs(value) {
  if (typeof value !== "number") return "n/a";
  return `${Math.round(value)} ms`;
}

function summarizeRunSet(label, manifestPath) {
  const manifest = readJson(manifestPath);
  const runs = manifest.map((entry) => {
    const report = readJson(entry.jsonPath);
    return {
      url: new URL(entry.url).pathname || "/",
      summary: entry.summary,
      lcp: report.audits["largest-contentful-paint"]?.numericValue,
      tbt: report.audits["total-blocking-time"]?.numericValue,
      cls: report.audits["cumulative-layout-shift"]?.numericValue,
      failingAccessibilityAudits: (report.categories.accessibility?.auditRefs ?? [])
        .map((ref) => ref.id)
        .filter((auditId) => {
          const score = report.audits[auditId]?.score;
          return typeof score === "number" && score < 1;
        }),
      opportunityAudits: Object.values(report.audits)
        .filter(
          (audit) =>
            typeof audit?.details?.overallSavingsMs === "number" &&
            audit.details.overallSavingsMs > 10,
        )
        .sort((a, b) => b.details.overallSavingsMs - a.details.overallSavingsMs)
        .slice(0, 3)
        .map((audit) => ({
          id: audit.id,
          title: audit.title,
          savingsMs: Math.round(audit.details.overallSavingsMs),
        })),
    };
  });

  return { label, runs };
}

function collectSuggestions(desktop, mobile) {
  const suggestions = [];

  const allRuns = [...desktop.runs, ...mobile.runs];
  const maxLcp = Math.max(...allRuns.map((r) => r.lcp ?? 0));
  const maxTbt = Math.max(...allRuns.map((r) => r.tbt ?? 0));
  const maxCls = Math.max(...allRuns.map((r) => r.cls ?? 0));

  const hasColorContrastIssue = allRuns.some((run) =>
    run.failingAccessibilityAudits.includes("color-contrast"),
  );

  if (hasColorContrastIssue) {
    suggestions.push({
      priority: "P0",
      area: "Accessibility contrast",
      recommendation:
        "Raise low-contrast text tokens (`--text-secondary`, `--text-muted`) against dark surfaces to consistently pass WCAG AA in footer, tags, and small text.",
      expectedImpact:
        "Reduces serious accessibility issues and improves readability in low-light/mobile contexts.",
    });
  }

  if (maxTbt > 200) {
    suggestions.push({
      priority: "P1",
      area: "Main-thread responsiveness",
      recommendation:
        "Trim client-side JS in above-the-fold sections (defer non-critical animation/interactive code, lazy-load lower-page components).",
      expectedImpact:
        "Lower Total Blocking Time and better interaction responsiveness on constrained devices.",
    });
  }

  if (maxLcp > 1200) {
    suggestions.push({
      priority: "P1",
      area: "Largest Contentful Paint",
      recommendation:
        "Optimize hero rendering path: preload key fonts, ensure critical hero styles are minimal, and keep initial payload lean.",
      expectedImpact:
        "Faster first impression and improved conversion opportunity on landing pages.",
    });
  }

  if (maxCls > 0.05) {
    suggestions.push({
      priority: "P2",
      area: "Visual stability",
      recommendation:
        "Add explicit dimensions/reserved space for all dynamically rendered content around hero and card grids.",
      expectedImpact: "Lower layout shifts and smoother perceived UX during load.",
    });
  }

  if (suggestions.length === 0) {
    suggestions.push({
      priority: "P2",
      area: "Regression hardening",
      recommendation:
        "Introduce visual regression snapshots (Chromatic or Playwright snapshots) for hero, cards, and mobile nav states.",
      expectedImpact: "Prevents UI drift while keeping current quality baseline stable.",
    });
  }

  return suggestions;
}

function scoreRows(runs) {
  return runs
    .map(
      (run) =>
        `| \`${run.url}\` | ${formatScore(run.summary.performance)} | ${formatScore(run.summary.accessibility)} | ${formatScore(run.summary["best-practices"])} | ${formatScore(run.summary.seo)} |`,
    )
    .join("\n");
}

function metricRows(runs) {
  return runs
    .map(
      (run) =>
        `| \`${run.url}\` | ${toMs(run.lcp)} | ${toMs(run.tbt)} | ${
          typeof run.cls === "number" ? run.cls.toFixed(3) : "n/a"
        } |`,
    )
    .join("\n");
}

function opportunityRows(runs) {
  const rows = [];
  for (const run of runs) {
    if (run.opportunityAudits.length === 0) continue;
    for (const audit of run.opportunityAudits) {
      rows.push(`| \`${run.url}\` | \`${audit.id}\` | ${audit.title} | ${audit.savingsMs} ms |`);
    }
  }
  return rows.length > 0 ? rows.join("\n") : "| n/a | n/a | No significant opportunities detected | 0 ms |";
}

function buildMarkdown(desktop, mobile, suggestions) {
  const now = new Date().toISOString();

  const suggestionRows = suggestions
    .map(
      (s) => `| ${s.priority} | ${s.area} | ${s.recommendation} | ${s.expectedImpact} |`,
    )
    .join("\n");

  return `# Advanced UI/UX testing + improvement suggestions report

Generated: ${now}

## Scope

- Advanced Playwright checks: runtime errors, keyboard actionability, route reliability, mobile ARIA behavior.
- Lighthouse CI runs on desktop and mobile profiles for \`/\`, \`/work\`, and \`/engage\`.

## Desktop Lighthouse scores

| URL | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
${scoreRows(desktop.runs)}

## Mobile Lighthouse scores

| URL | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
${scoreRows(mobile.runs)}

## Core UX metrics snapshot

| URL | LCP | TBT | CLS |
| --- | --- | --- | --- |
${metricRows([...desktop.runs, ...mobile.runs])}

## Top performance opportunities from Lighthouse

| URL | Audit ID | Opportunity | Estimated savings |
| --- | --- | --- | --- |
${opportunityRows([...desktop.runs, ...mobile.runs])}

## Prioritized improvement suggestions

| Priority | Area | Recommendation | Expected impact |
| --- | --- | --- | --- |
${suggestionRows}

## Test strategy upgrades recommended next

1. Add visual regression snapshots for homepage hero, cards, and mobile menu states.
2. Tighten accessibility gate from \`no critical\` to \`no serious\` after contrast token adjustments.
3. Run advanced test matrix in CI on every PR using:
   - \`npm run test:ui\`
   - \`npm run test:advanced\`
`;
}

function main() {
  if (!fs.existsSync(desktopManifestPath)) {
    throw new Error("Desktop Lighthouse manifest not found. Run `npm run test:ux` first.");
  }
  if (!fs.existsSync(mobileManifestPath)) {
    throw new Error("Mobile Lighthouse manifest not found. Run `npm run test:ux:mobile` first.");
  }

  const desktop = summarizeRunSet("desktop", desktopManifestPath);
  const mobile = summarizeRunSet("mobile", mobileManifestPath);
  const suggestions = collectSuggestions(desktop, mobile);

  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(outputPath, buildMarkdown(desktop, mobile, suggestions), "utf8");
  console.log(`Generated ${path.relative(workspaceRoot, outputPath)}`);
}

main();
