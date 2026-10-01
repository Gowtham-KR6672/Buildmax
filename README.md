# Build Max Home Page Redesign

A ground-up Next.js home-page redesign for Build Max Infrastructure Private Limited.

## Included

- Premium responsive hero with dual CTAs
- Transparent-to-solid sticky navigation
- Mobile menu
- Rewritten "Who We Are" storytelling section
- Six-point living ecosystem grid
- Three detailed Build Max Advantage pillars
- "Why Build Max" benefits section
- OMR / ECR / GST Road development focus
- Priority homeowner registration form with a success state
- Refined footer
- Responsive desktop / tablet / mobile layouts
- Reduced-motion accessibility support
- Semantic headings and form labels
- No third-party component dependency

## File structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  BuildMaxHome.tsx
next.config.ts
package.json
render.yaml        # Render blueprint (optional)
tsconfig.json
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production check: `npm run build && npm run start`.

## Deploy

The site is fully static (no API routes), so any Next.js-capable host works.

### Vercel (recommended)

```bash
npx vercel login
npx vercel --prod
```

Or push the repo to GitHub and import it at https://vercel.com/new. Next.js is
auto-detected; no settings are required.

### Render

1. Push the repo to GitHub.
2. In Render choose **New > Blueprint**, select the repo, and apply. Render reads
   `render.yaml` and creates a free Node web service (`npm ci && npm run build`,
   then `npm run start`).

Free Render web services sleep after inactivity; the first request after a
pause takes ~30-60 s. Vercel's Hobby tier does not sleep.

## What this site is for

A marketing landing page and lead-capture funnel for Build Max Infrastructure
Private Limited, a Chennai developer of sustainable, AI-enabled luxury homes
across the OMR, ECR and GST Road corridors. It explains the offering, builds
trust, and collects "priority homeowner" registrations (name, phone, email,
preferred corridor, consent).

**Before going live:** `handleRegister` in `components/BuildMaxHome.tsx` only
shows the success state; it does not send the form anywhere. Wire it to a CRM,
email service, or an API route so registrations are actually captured.

## Use in an existing Next.js App Router project

1. Copy `app/page.tsx`, `app/layout.tsx`, and `app/globals.css` into your project's `app` folder.
2. Copy `components/BuildMaxHome.tsx` into your project's `components` folder.
3. If your project does not support the `@/` path alias, change:
   `import BuildMaxHome from "@/components/BuildMaxHome";`
   to:
   `import BuildMaxHome from "../components/BuildMaxHome";`
4. Replace placeholder email addresses, Privacy/Terms URLs, and form submission logic with your live endpoints.
5. The demo uses remote editorial imagery via normal `<img>` tags so no `next/image` hostname config is required.

## Important implementation note

The supplied reference was a rendered Next.js HTML output, not the original source repository. This package therefore preserves the detected Next.js/React technology direction and recreates the home page as clean maintainable source rather than attempting to edit generated `_next` markup.
