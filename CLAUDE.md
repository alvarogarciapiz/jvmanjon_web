# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install     # install dependencies (Node 18+)
npm run dev     # dev server at http://localhost:5173
npm run build   # production build to /dist
npm run preview # serve the built /dist to verify a production build
```

There is no test suite, linter, or formatter configured. `npm run build` (Vite) is the only automated check — use it to confirm changes compile.

## Architecture

Single-page, content-driven personal website (React 18 + Vite, plain JavaScript). No router, no state management, no CSS framework — deliberately minimal.

- **`src/App.jsx`** composes the page from five section components in order: `Header → Hero → FocusAreas → FeaturedContent → Footer`. Adding/reordering a section happens here.
- **`src/data/site.js`** is the single source of copy and content (nav items, focus areas, articles, framework, footer columns). Edit text and list items here — components map over these arrays and should not hardcode content.
- **`src/index.css`** is the design system: CSS custom properties for the palette (`--cream`, `--paper`, `--ink`, `--gold`, `--tan`) and fonts (`--serif` Fraunces, `--sans` Inter), plus shared utility classes used across components: `.container`, `.eyebrow`, `.btn`/`.btn--primary`/`.btn--ghost`, `.text-link`. Change colors/spacing/typography globally here.
- **`src/components/`** — one component per section, each with a **co-located `.css` file** (e.g. `Hero.jsx` + `Hero.css`). CSS is plain (not CSS Modules); class names are namespaced by component (`.hero__title`, `.footer__col`) to avoid collisions. Each section's CSS file owns its own responsive `@media` breakpoints.

### Two shared building blocks

- **`Icon.jsx`** — all icons are inline SVG line-glyphs in a `paths` map keyed by name; `<Icon name="brain" />`. No icon dependency. Add new icons to the map.
- **`Placeholder.jsx`** — every image on the site is currently a styled placeholder box (`tone`: `cream`/`dark`/`tan`, plus `ratio`/`label`). When real images arrive, replace `<Placeholder .../>` with `<img src alt />` — primarily the hero portrait in `Hero.jsx` and the article illustrations in `FeaturedContent.jsx`.

### Navigation

Nav is anchor-based: links are `href="#id"` and the target section `id`s live on the section components themselves (e.g. `id="inicio"`, `id="articulos"`, `id="sobre-mi"`). The header includes a self-contained mobile menu (`useState`) that locks body scroll when open.

## Deployment

Deploys to Vercel (auto-detected Vite). `vercel.json` provides a SPA catch-all rewrite. Build command `npm run build`, output `dist`.

## Git note

The commit author email is set **locally** in this repo (`git config user.email`) to the GitHub `noreply` address, because the account has email-privacy protection that rejects pushes carrying a private email. Keep using the noreply email for commits here.
