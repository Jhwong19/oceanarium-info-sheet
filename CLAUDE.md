# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page **Aquarium Adventure Challenge** landing page for BHP Fun Day 2026 at the Singapore Oceanarium. Guests scan a QR code, get 8 mystery photos, and find/replicate the spots around the aquarium. The page is also printable as a PDF for hard-copy distribution. Originated from a Figma design (see `README.md` for the source link).

## Stack

- **React 18 + Vite 6 + Tailwind CSS v4** (via `@tailwindcss/vite`).
- **shadcn/ui** primitives in `src/app/components/ui/` (Radix-based). Today only `Card` is imported by `App.tsx`; the rest are kept to mirror the Figma export 1:1.
- **`motion/react`** for the bubble + sea-creature animation.
- **`lucide-react`** for icons.

## Entry points

- `index.html` — Vite entry, mounts `<div id="root">` and loads `src/main.tsx`.
- `src/main.tsx` — renders `<App />` and imports `src/styles/index.css`.
- `src/app/App.tsx` — the entire page (~200 lines): BHP logo + 5 cards (header / How the Game Works / Winning / Lucky Draw / Pro Tips) + 8-photo grid + lightbox modal.
- `src/app/components/BubbleAnimation.tsx` — full-screen animated background (bubbles + emoji sea creatures + bottom plants).

## Local workflow

- `npm install`, `npm run dev` to preview.
- `npm run build` produces `dist/`.
- Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages.

## Vite base path

`vite.config.ts` sets `base: '/oceanarium-info-sheet/'` because the site is served from the GitHub Pages project URL `https://jhwong19.github.io/oceanarium-info-sheet/`. If a custom domain is added (via a CNAME), change this to `'/'`.

## Print / PDF support

Print rules live in `src/styles/print.css` (imported from `src/styles/index.css`). Key behaviours:

- `.print-hide` — wrap the `BubbleAnimation` and lightbox; removed in print.
- `.print-card` — applied to each top-level `<Card>` (and the header div). Forces white background, drops blur/shadows, and adds `break-after: page` so each section becomes one printed page. Add this class to any new top-level card you introduce.
- `.print-photo-grid` — locks the photo grid to 4 columns in print so all 8 photos fit on one page.

When adding or removing sections, keep `print-card` on the wrappers so the one-page-per-section structure stays predictable.

## Styling

Tailwind v4 + the shadcn theme in `src/styles/theme.css` (CSS variables in `oklch`). Use Tailwind utility classes in JSX rather than extending the theme unless needed.
