# Cloudflare Pages deployment

Repository: https://github.com/SairaammBharadwaj/demo-interior-website-1

This is a static React/Vite site. No server, database, mailbox or hosted form service is required. Public contact links open the visitor's phone, email, WhatsApp or maps application.

## Git integration settings

In Cloudflare, select Workers & Pages → Create application → Pages → Connect to Git, and connect this repository.

- Production branch: `main`
- Framework preset: React (Vite), or None with the settings below
- Root directory: leave blank (repository root)
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22, pinned by `.node-version`
- Runtime secrets and environment variables: none required
- Suggested project name: `dream-space-interiors-preview` (subject to availability)

Choose the Free plan and use the provided `pages.dev` address. A custom domain is optional and unnecessary for this preview. Only grant the GitHub integration access to this repository if prompted to select repositories.

Pushes to `main` can trigger automatic production deployments. The site does not expire automatically after 24 hours. If it is intended only for a one-day demonstration, take it offline in Cloudflare afterward.

## Release checks

Run `npm ci`, `npm run lint` and `npm run build` when preparing a clean release. Publish the contents of `dist`, not the source directory. Source-only PNG masters, retired people images and local review screenshots are excluded from Git.

All active imagery and fonts are self-hosted in `public/assets/editorial` and `public/assets/fonts`. Generated interiors are labelled as inspiration. Confirm the existing public business contact details with the studio before sharing the final customer-facing website.
