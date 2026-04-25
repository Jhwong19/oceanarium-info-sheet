# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page kids' (ages 6-9) fact sheet for the Singapore Oceanarium. Distributed via a QR code that points at the GitHub Pages URL, and also intended to be printed / saved as PDF for hard copies. See `README.md`.

## Stack & workflow

- Pure static HTML — everything lives in `index.html` (~1700 lines). No build step, no package manager, no tests, no linter.
- Fonts (`Fredoka`, `Quicksand`) are pulled from Google Fonts at runtime.
- Preview locally by opening `index.html` in a browser, or `python3 -m http.server` from the repo root.
- Deployed via GitHub Pages from `main` (remote: `Jhwong19/oceanarium-info-sheet`). Pushing to `main` ships it.
- "Download as PDF" = the user prints from the browser. Print styling is in the `@media print` block (each `<section class="page">` becomes one printed page via `break-after:page`). Verify any layout change still prints cleanly to one page per section.

## Document structure

The body is one `.book` container holding 8 `<section class="page">` blocks in narrative order: cover, then six themed pages (In the Beginning → At the Surface → Sunlight → Into the Deep → The Abyss → A New Horizon), then a final Ocean Explorer Challenge. Each themed page reuses the same building blocks:

- `.head-row` — number circle (`.num`) + `.pill` tag + `<h2>` title.
- `.split` (optionally `.flip`) — two-column grid pairing a `.scene` SVG illustration with body copy. Collapses to one column under 560px.
- `.lookout` — "look out for" bullet list with yellow dot markers.
- `.funfacts` — cream-card list with star bullets.
- `.quiz` — `<details>`/`<summary>` Q&A blocks; the `?` marker flips to `!` via `.qa[open] summary::before` when opened.

Decorative SVG shapes (`blobShape`, `softBlob`, `squig`, `swirl`, `bubbles`, plus per-page fish/creature symbols) are defined once in hidden `<svg>` `<symbol>` blocks and reused with `<use href="#id">`. When adding a new creature, add the `<symbol>` to the relevant defs block rather than inlining a fresh SVG each time.

Theming is driven by CSS custom properties on `:root` (`--blue`, `--coral`, `--peach`, `--cream`, etc.). Page 6 (The Abyss) overrides the page background inline (`style="background:#04335c"`); follow that pattern for any one-off page tinting.

## ⚠ Smart-quote landmine in the CSS

Large stretches of the `<style>` block use Unicode smart quotes and en-dashes instead of ASCII — e.g. `var(–coral)` (en-dash, not hyphen), `'Fredoka'` (curly apostrophes), `content:""` (curly quotes). These are silently invalid CSS, so the affected rules currently do nothing; the page renders on browser defaults + the rules that did survive. There are ~90 such occurrences across the file.

Implications when editing:

- Don't "fix" them in passing — that changes the visual output and is a separate decision. If the user wants the styling actually applied, replace them deliberately and review the result in a browser.
- When adding new CSS, use plain ASCII (`-`, `'`, `"`) so your rules actually apply. Don't copy-paste from existing broken rules expecting them to work.
- If you intentionally want to match the existing (non-functional) style for consistency, copy the exact characters from the file — typing `-` will produce a hyphen, not the en-dash already in the file.
