# BibleMarker Website

Product site for BibleMarker: privacy policy, support, and desktop download links. Used for App Store / Play Store support and privacy URLs.

## Structure

- `index.html` — Home: hero, features, translations, desktop downloads (GitHub Releases), CTA
- `privacy.html` — Privacy Policy (required for Apple/Google app stores)
- `support.html` — Support / contact (Support URL for app stores)
- `styles.css` — Shared styles (matches Spears Software branding)

## Before Deploying

1. **GitHub download links:** Desktop download URLs in `index.html` point to https://github.com/spearssoftware/biblemarker/releases. Update if your repo is elsewhere.
2. **Support email:** Update the contact email in `support.html` if you prefer a different address (e.g. support@biblemarker.app).

## Deployment

### Cloudflare (Workers with static assets)

Same approach as spearssoftware.com. From the project root:

```bash
npx wrangler deploy
```

Then add custom domain `biblemarker.app` as primary in the Cloudflare dashboard (Workers & Pages → your worker → Custom domains). Add `biblemarker.org` and set it to redirect to `biblemarker.app`.

### Cloudflare Pages

1. Push this repo to GitHub.
2. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create project → Connect to Git.
3. Select the repo. Build settings: **Build command** (leave empty), **Build output directory** (leave empty or `/`).
4. Add custom domain `biblemarker.app` as primary. Add `biblemarker.org` and configure it to redirect to `biblemarker.app` in the project’s Custom domains.

### Other hosts

The site is static HTML/CSS. Upload the files to any host (GitHub Pages, Netlify, Vercel, or your own server) and point `biblemarker.app` to it. Configure `biblemarker.org` to redirect to `biblemarker.app`.

## App Store / Play Store URLs

Once live at https://biblemarker.app (biblemarker.org redirects here):

- **Privacy policy URL:** https://biblemarker.app/privacy.html
- **Support URL:** https://biblemarker.app/support.html
- **Marketing URL:** https://biblemarker.app

## Local Preview

```bash
python3 -m http.server 8000
# or: npx serve .
```

Then open http://localhost:8000
