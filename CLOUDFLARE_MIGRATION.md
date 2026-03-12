# Cloudflare Migration

## Status: CODE COMPLETE — Awaiting Cloudflare Dashboard Setup

---

## Overview

Migrated from Netlify to Cloudflare Workers (via the OpenNext adapter). The site is largely statically generated — the only dynamic piece is the contact form API. The email service was also changed from Nodemailer + Gmail SMTP to Resend (required because Cloudflare's edge runtime does not support Node.js native modules like Nodemailer).

> **Note on "Cloudflare Pages" vs "Cloudflare Workers":** The OpenNext adapter (the official Cloudflare/Next.js adapter) targets Cloudflare Workers, not Cloudflare Pages. These are essentially the same runtime — Workers is the platform, Pages was the git-connected product built on top of it. Cloudflare is converging the two. For this deployment, you will connect your repo to **Cloudflare Workers** (not Pages), which supports full git integration and CI/CD just like Pages did.

---

## What Changed

| Area | Before (Netlify) | After (Cloudflare) |
|---|---|---|
| Hosting config | `netlify.toml` | `wrangler.toml` |
| Contact API | `netlify/functions/contact.ts` + proxy route | Single `app/api/contact/route.ts` |
| Email service | Nodemailer + Gmail SMTP | Resend API |
| Security headers | `netlify.toml [[headers]]` | `public/_headers` |
| Build adapter | `@netlify/plugin-nextjs` | `@opennextjs/cloudflare` |
| Build output | `output: 'standalone'` | Removed (OpenNext handles this) |
| Next.js version | 14.2.x | 16.1.6 (upgrade was required) |

---

## Files Changed

| File | Action |
|---|---|
| `netlify.toml` | **Deleted** |
| `netlify/` (entire directory) | **Deleted** |
| `next.config.js` | Removed `output: 'standalone'` |
| `app/api/contact/route.ts` | Full rewrite — direct Resend implementation with edge runtime |
| `package.json` | Removed `@netlify/functions`, `nodemailer`, `@types/nodemailer`; Added `resend`, `@opennextjs/cloudflare`, `wrangler` |
| `wrangler.toml` | **Created** — Cloudflare Workers config |
| `public/_headers` | **Created** — Security headers (ported from netlify.toml) |
| `open-next.config.ts` | **Created** — Required by OpenNext adapter |

---

## Tasks

### Code Changes ✅
- [x] Remove `netlify.toml`
- [x] Remove `netlify/` directory
- [x] Remove Netlify-specific packages (`@netlify/functions`, `nodemailer`, `@types/nodemailer`)
- [x] Remove `output: 'standalone'` from `next.config.js`
- [x] Add `@opennextjs/cloudflare`, `wrangler`, `resend`
- [x] Create `wrangler.toml`
- [x] Create `open-next.config.ts`
- [x] Rewrite `app/api/contact/route.ts` with Resend + edge runtime
- [x] Create `public/_headers` with security headers
- [x] Upgrade Next.js 14 → 16.1.6 (required by OpenNext)
- [x] Verify `npm run build` succeeds
- [x] Verify `npx @opennextjs/cloudflare build` succeeds

### Cloudflare Dashboard (Manual Steps) ⏳
- [ ] Set up Resend account and get API key
- [ ] (Recommended) Verify `wngr.dev` domain in Resend to send from `noreply@wngr.dev`
- [ ] Connect GitHub repo to Cloudflare Workers
- [ ] Configure build settings (see below)
- [ ] Add environment variables
- [ ] Deploy and test
- [ ] Point `wngr.dev` / `wngr.pro` DNS to Cloudflare Workers deployment
- [ ] Remove site from Netlify

---

## Cloudflare Dashboard Setup

### 1. Connect your repo

- Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
- Navigate to **Workers & Pages** → **Create** → **Workers** tab
- Connect to Git → select your repository

### 2. Build Settings

| Setting | Value |
|---|---|
| Build command | `npm run build:cf` |
| Build output directory | `.open-next/assets` |
| Node.js version | `18` or higher |

> The `build:cf` script runs `next build && npx @opennextjs/cloudflare build`, which produces the `.open-next/` directory.

### 3. Environment Variables

Add these in the Cloudflare dashboard under **Settings → Variables and Secrets**:

| Variable | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | From resend.com dashboard |
| `CONTACT_EMAIL` | `trewenger@gmail.com` | Where to receive contact form emails |
| `NEXT_PUBLIC_SITE_URL` | `https://wngr.dev` | Your domain |
| `NEXT_PUBLIC_SITE_NAME` | `Tre Wenger's Portfolio` | Site name |

**Do NOT add:**
- `GMAIL_USER` (no longer used)
- `GMAIL_APP_PASSWORD` (no longer used)

---

## Resend Setup

1. Sign up at [resend.com](https://resend.com) (free: 3,000 emails/month)
2. Go to **API Keys** → Create a key → copy it
3. **Recommended — verify your domain:**
   - In Resend: Domains → Add Domain → enter `wngr.dev`
   - Resend will give you DNS records to add in Cloudflare
   - Add them in Cloudflare DNS (TXT + DKIM CNAME records)
   - This lets emails send `from: noreply@wngr.dev`
   - Without verification, Resend uses `onboarding@resend.dev` as the sender (less professional, may hit spam)

---

## Local Development

Local dev still works the same way with `npm run dev`. The `resend` package makes a real API call, so for local testing of the contact form you'll need `RESEND_API_KEY` in your `.env.local`.

To test the full Cloudflare build locally:
```bash
npm run build:cf    # builds Next.js + OpenNext bundle
npm run preview     # runs the Worker locally via Wrangler
```

---

## Notes

- **Windows warning**: OpenNext logs a warning about Windows compatibility when building locally. This does not affect the Cloudflare deployment — CI runs on Linux.
- **`baseline-browser-mapping` warnings**: Pre-existing, unrelated to this migration. Can be resolved separately with `npm i baseline-browser-mapping@latest -D`.
- **Next.js upgrade**: The jump from 14 → 16 was required by OpenNext. The build and all pages confirmed clean — no breaking changes were introduced by the upgrade in this codebase.
- **`wrangler.toml` is for local dev / CLI deploys.** Cloudflare's git integration reads the build command and output dir from the dashboard settings, not from `wrangler.toml`. The `wrangler.toml` is still useful for `wrangler deploy` and `wrangler dev`.
