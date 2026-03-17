# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 14** static portfolio/marketing site (single app, no backend, no database, no Docker).

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |

- **Package manager**: npm (lockfile: `package-lock.json`).
- **No automated tests** exist in this repo — there is no test script or test framework configured.
- **No `.env` required** — the app has zero environment variables or secrets.
- The contact form on `/engage` uses `mailto:` links (client-side only); no server-side form handler exists.
- Tailwind CSS v4 is used via `@tailwindcss/postcss`; there is no `tailwind.config` file — configuration lives in `app/globals.css`.
