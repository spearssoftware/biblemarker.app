# BibleMarker Website

Product site for BibleMarker: marketing landing page, privacy policy, documentation (Starlight), and contact form. Used for App Store / Play Store support and privacy URLs.

Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Structure

- `src/pages/index.astro` — Home: hero, features, downloads
- `src/pages/privacy.astro` — Privacy Policy (required for app stores)
- `src/pages/contact.astro` — Contact form (Turnstile + Postmark)
- `src/pages/support.astro` — 301 redirect to docs (preserves App Store URL)
- `src/content/docs/` — Starlight documentation (getting started, how-to guides, shortcuts)
- `functions/api/contact.js` — Cloudflare Worker for contact form

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

### Cloudflare (Workers with static assets)

```bash
npx wrangler deploy
```

Requires environment variables:
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile verification
- `POSTMARK_SERVER_TOKEN` — Postmark API key for email delivery

Add custom domain `biblemarker.app` in the Cloudflare dashboard. Configure `biblemarker.org` to redirect to `biblemarker.app`.

## App Store / Play Store URLs

- **Privacy policy URL:** https://biblemarker.app/privacy/
- **Support URL:** https://biblemarker.app/support/ (redirects to docs)
- **Marketing URL:** https://biblemarker.app
