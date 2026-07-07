# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install     # install dependencies (Node 20+; react-router 7 requires it)
npm run dev     # dev server at http://localhost:5173
npm run build   # production build to /dist
npm run preview # serve the built /dist to verify a production build
```

There is no test suite, linter, or formatter configured. `npm run build` (Vite) is the only automated check — use it to confirm changes compile.

## Architecture

Content-driven personal website (React 18 + Vite + React Router 7, plain JavaScript). No state management, no CSS framework — deliberately minimal. **All user-facing copy is in Spanish (es-ES); keep it that way.**

- **`src/App.jsx`** is the shared layout: `ScrollManager → Header → <Routes> → NewsletterCta → Footer`. Every page renders inside `<main>`; the newsletter band and footer appear on all pages. Add new routes here.
- **`src/pages/`** — one component per route, each with a co-located `.css`: `/` (Home), `/articulos` (list with category filter), `/conferencias`, `/formacion`, `/recursos`, `/sobre-mi`, plus a `*` 404. Home just composes the section components (`Hero`, `FocusAreas`, `FeaturedContent`).
- **`src/data/site.js`** is the single source of copy and content: `nav`, `focusAreas`, `articles` (first 3 featured on Home), `framework`, `talks`/`talkFormats`/`talksApproach` (conferences), `programs` (training), `resources`, `bio` (about page, incl. `bio.research`), `footerLinks`, and the URL constants `newsletterUrl` (Substack), `linkedinUrl`, `bookUrl`, `testUrl`. Edit text and list items here — components map over these arrays and should not hardcode content. The README's "Guía de edición manual" documents this file for the site owner; keep both in sync when the data shape changes.
- **`src/index.css`** is the design system: CSS custom properties for the palette (`--cream`, `--paper`, `--ink`, `--gold`, `--tan`) and fonts (`--serif` Fraunces, `--sans` Inter), plus shared utility classes: `.container`, `.eyebrow`, `.btn`/`.btn--primary`/`.btn--ghost`, `.text-link`, `.panel` (bordered card), `.section-head` (section title with gold tick). Change colors/spacing/typography globally here.
- **`src/components/`** — section and shared components, each with a **co-located `.css` file**. CSS is plain (not CSS Modules); class names are namespaced per component (`.hero__title`, `.post__meta`) to avoid collisions. Each CSS file owns its own responsive `@media` breakpoints.

### Images

- The real portrait is `src/img/juanvi.webp`, ES-imported in `Hero.jsx` and `pages/SobreMi.jsx`.
- Article illustrations use an **optional `image` field** on each entry in `articles`: put the file in `src/img/articulos/`, import it at the top of `site.js`, set `image: theImport`. Components (`FeaturedContent.jsx`, `pages/Articulos.jsx`) render an `<img>` when `image` exists and fall back to **`Placeholder.jsx`** (tone `cream`/`dark`/`tan` from the article's `tone` field) when it doesn't. Follow this same pattern if other content types gain images.
- **`PageHeader.jsx`** — standard interior-page header (eyebrow + serif title + lead) used by all pages except Home and Sobre mí.
- **`Icon.jsx`** — all icons are inline SVG line-glyphs in a `paths` map keyed by name; `<Icon name="brain" />`. No icon dependency. Add new icons to the map; a `name` that isn't in the map renders nothing (silently), so double-check names used in `site.js`.
- **`usePageMeta.js`** (in `src/hooks/`) — sets `document.title` and meta description per page; call it in every new page.
- **`useScrollReveal.js`** (in `src/hooks/`) — IntersectionObserver that fades in elements carrying the `.reveal` class (optional `.reveal-d1`/`.reveal-d2` stagger delays, defined in `index.css`). Called once in `App` (re-runs per route); pages that re-render `.reveal` elements without a route change must call it with their own deps (see the filter in `pages/Articulos.jsx`). Respects `prefers-reduced-motion`. Add `reveal` classes to new card grids to keep the motion language consistent.

### Navigation and links

Two kinds of nav targets, distinguished in `nav` data by whether `to` contains `#`:
- **Hash links** (`/#ideas`, `/#frameworks`) scroll to sections on Home (`id`s live on the section components). `ScrollManager.jsx` handles cross-page hash navigation and scroll-to-top on route change; `[id] { scroll-margin-top }` in `index.css` offsets the sticky header.
- **Page links** use `NavLink` and get an `is-active` class.

External links use `target="_blank" rel="noopener noreferrer"`. **Contact CTAs (availability requests, custom training) point to `linkedinUrl`; content/subscription CTAs point to `newsletterUrl`.** Article `href`s point to the Substack until real per-article URLs exist.

The header collapses to the burger menu below **1200px** (the 7-item nav doesn't fit narrower); the mobile menu locks body scroll while open. The header gains an `is-scrolled` class (translucent + blur + shadow) past 8px of scroll. `App` renders a `.skip-link` targeting `<main id="contenido">`.

## SEO assets

The canonical domain is `siteUrl` in `src/data/site.js` (**assumed `https://jvmanjon.com`**) and is also hardcoded in the static files — if it changes, update: `site.js`, `index.html` (OG + JSON-LD), `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt` (the README documents this for the owner).

- `usePageMeta` sets per-route `<title>`, meta description, `<link rel="canonical">`, `og:title`, `og:description`, `og:url`. New pages must call it.
- `index.html` carries the static defaults: full Open Graph (absolute image `https://…/og.jpg`, 720×377, generated from the portrait) and JSON-LD `@graph` (`WebSite` + `Person` + `Book`).
- `public/`: `sitemap.xml` (add new routes here too), `robots.txt` (points to sitemap), `llms.txt` (llmstxt.org format, for AI crawlers — update when pages or key links change).

## Deployment

Deploys to Vercel (auto-detected Vite). `vercel.json` provides a SPA catch-all rewrite (required for React Router paths). Build command `npm run build`, output `dist`.

## Git note

The commit author email is set **locally** in this repo (`git config user.email`) to the GitHub `noreply` address, because the account has email-privacy protection that rejects pushes carrying a private email. Keep using the noreply email for commits here.
