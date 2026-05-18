# Oceanarium Info Sheet — BHP Fun Day 2026

Aquarium Adventure Challenge: a scavenger-hunt landing page for BHP Fun Day at the Singapore Oceanarium. Guests scan a QR code, get 8 mystery photos, and find/replicate each spot around the aquarium.

Live: https://jhwong19.github.io/oceanarium-info-sheet/

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Vite is configured with `base: '/oceanarium-info-sheet/'` so the built output works under the GitHub Pages project URL. Update that base in `vite.config.ts` if you switch to a custom domain.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Vite app and publishes `dist/` to GitHub Pages.

One-time repo setting: **Settings → Pages → Source → "GitHub Actions"**.

## Print / PDF

The page is print-styled. Open the browser print dialog (Cmd/Ctrl+P) → "Save as PDF". The bubble animation and lightbox are hidden in print, and each main card breaks onto its own page.
