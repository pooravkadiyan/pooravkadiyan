# Advanced UI/UX testing + improvement suggestions report

Generated: 2026-03-17T15:03:20.668Z

## Scope

- Advanced Playwright checks: runtime errors, keyboard actionability, route reliability, mobile ARIA behavior.
- Lighthouse CI runs on desktop and mobile profiles for `/`, `/work`, and `/engage`.

## Desktop Lighthouse scores

| URL | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| `/` | 0.93 | 0.96 | 1.00 | 0.91 |
| `/work` | 0.94 | 0.95 | 1.00 | 0.91 |
| `/engage` | 0.93 | 0.96 | 1.00 | 1.00 |

## Mobile Lighthouse scores

| URL | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| `/` | 0.68 | 0.96 | 1.00 | 0.91 |
| `/work` | 0.73 | 0.95 | 1.00 | 0.91 |
| `/engage` | 0.68 | 0.96 | 1.00 | 1.00 |

## Core UX metrics snapshot

| URL | LCP | TBT | CLS |
| --- | --- | --- | --- |
| `/` | 744 ms | 201 ms | 0.000 |
| `/work` | 616 ms | 196 ms | 0.000 |
| `/engage` | 744 ms | 202 ms | 0.000 |
| `/` | 3622 ms | 960 ms | 0.000 |
| `/work` | 3016 ms | 929 ms | 0.000 |
| `/engage` | 3613 ms | 973 ms | 0.000 |

## Top performance opportunities from Lighthouse

| URL | Audit ID | Opportunity | Estimated savings |
| --- | --- | --- | --- |
| `/` | `server-response-time` | Reduce initial server response time | 698 ms |
| `/` | `unused-javascript` | Reduce unused JavaScript | 80 ms |
| `/work` | `server-response-time` | Initial server response time was short | 156 ms |
| `/work` | `unused-javascript` | Reduce unused JavaScript | 80 ms |
| `/engage` | `server-response-time` | Initial server response time was short | 95 ms |
| `/engage` | `unused-javascript` | Reduce unused JavaScript | 80 ms |
| `/` | `server-response-time` | Reduce initial server response time | 667 ms |
| `/` | `unused-javascript` | Reduce unused JavaScript | 450 ms |
| `/work` | `unused-javascript` | Reduce unused JavaScript | 440 ms |
| `/work` | `unminified-javascript` | Minify JavaScript | 150 ms |
| `/work` | `server-response-time` | Initial server response time was short | 150 ms |
| `/engage` | `unused-javascript` | Reduce unused JavaScript | 450 ms |
| `/engage` | `server-response-time` | Initial server response time was short | 94 ms |

## Prioritized improvement suggestions

| Priority | Area | Recommendation | Expected impact |
| --- | --- | --- | --- |
| P0 | Accessibility contrast | Raise low-contrast text tokens (`--text-secondary`, `--text-muted`) against dark surfaces to consistently pass WCAG AA in footer, tags, and small text. | Reduces serious accessibility issues and improves readability in low-light/mobile contexts. |
| P1 | Main-thread responsiveness | Trim client-side JS in above-the-fold sections (defer non-critical animation/interactive code, lazy-load lower-page components). | Lower Total Blocking Time and better interaction responsiveness on constrained devices. |
| P1 | Largest Contentful Paint | Optimize hero rendering path: preload key fonts, ensure critical hero styles are minimal, and keep initial payload lean. | Faster first impression and improved conversion opportunity on landing pages. |

## Test strategy upgrades recommended next

1. Add visual regression snapshots for homepage hero, cards, and mobile menu states.
2. Tighten accessibility gate from `no critical` to `no serious` after contrast token adjustments.
3. Run advanced test matrix in CI on every PR using:
   - `npm run test:ui`
   - `npm run test:advanced`
