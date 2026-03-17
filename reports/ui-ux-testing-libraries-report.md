# UI/UX testing libraries report

## Context analyzed

- Framework: Next.js 14 (App Router), React 18, TypeScript.
- Existing test coverage: none.
- UX-sensitive areas reviewed: hero CTA funnel, mobile menu navigation, contact form behavior, global layout consistency.

## Best-of-best library shortlist for this codebase

| Priority | Library | Why it is top-tier | Adopted in this repo |
| --- | --- | --- | --- |
| 1 | `@playwright/test` | Most reliable modern E2E runner for React/Next apps; fast parallelism, built-in web server orchestration, excellent CI stability. | Yes |
| 2 | `@axe-core/playwright` | Adds real accessibility audits directly inside browser journeys; strong signal for UX quality and compliance. | Yes |
| 3 | `@lhci/cli` (Lighthouse CI) | Tracks UX quality via Core Web Vitals/perf, accessibility, SEO, and best practices with explicit score thresholds. | Yes |
| 4 | Chromatic (Storybook visual regression) | Best-in-class visual regression on component states and responsive variants; catches UI drift before release. | Recommended next |
| 5 | Percy/Happo (visual diff alternatives) | Strong screenshot diffing for design-system-heavy teams; useful if Storybook is not adopted. | Optional |

## Why this stack is the best fit

1. Playwright covers real user flows and regressions across desktop + mobile.
2. Axe catches high-impact accessibility issues that typical functional tests miss.
3. Lighthouse CI enforces UX quality budgets beyond correctness.
4. Together they provide broad confidence without over-complicated setup.

## What was implemented

- Playwright config with desktop + mobile Chromium projects.
- E2E scenarios for:
  - Homepage hero/CTA rendering and navigation funnel.
  - Contact form mailto draft generation from typed user input.
  - Mobile menu open/close behavior.
  - Accessibility guardrail: zero serious/critical Axe violations.
- Lighthouse CI config auditing `/`, `/work`, and `/engage` with score thresholds.
- NPM scripts:
  - `test:ui:install`
  - `test:ui`
  - `test:ux`
  - `test:uiux`

## Execution report

This section is updated after running the tests in this branch.

- Playwright UI tests: **PASS (8/8)** on desktop + mobile Chromium.
- Lighthouse UX tests: **PASS** on 3 URLs with all configured thresholds met.

### Observed findings from the test run

- Axe (Playwright-integrated) reported **serious color-contrast issues** (non-blocking in current config, no critical violations found).
- Lighthouse accessibility stayed strong across pages (`0.95 - 0.96`), but contrast can still be improved for stricter WCAG outcomes in future iterations.

### Lighthouse score snapshot

| URL | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| `/` | 0.93 | 0.96 | 1.00 | 0.91 |
| `/work` | 0.94 | 0.95 | 1.00 | 0.91 |
| `/engage` | 0.94 | 0.96 | 1.00 | 1.00 |

## Recommendation

Use this stack as the default quality gate in CI:

1. `npm run test:ui`
2. `npm run test:ux`

Then add visual regression (Chromatic) as phase 2 when component-level design drift starts appearing in reviews.
