# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static personal research website for Anand K Prakash, served by GitHub Pages from the
`anandkp92/personal-website` repo at the custom domain in `CNAME` (anandkprakash.com).

There is no build step, no package manager, no test suite, and no dependencies. Files are
served exactly as they sit in the repo root.

## Development

Open `index.html` directly in a browser, or serve the directory:

```sh
python3 -m http.server 8000
```

Deployment = pushing to the branch GitHub Pages is configured to publish (currently
`claude/personal-research-website-...`, which is also the repo's default branch — there is no `main`).

## Structure

- `index.html` — the entire page. All sections (About, Publications, Contact) are hardcoded
  here *except* the publication entries, which are injected at runtime into
  `#publications-list`.
- `data.js` — plain global `const publications` array (no modules, no exports). Loaded via a
  `<script>` tag before `script.js`, which relies on it being a global. Each entry:
  `{ title, authors, venue, year, links: [{ label, url }] }`.
- `script.js` — renders `publications` into the DOM on `DOMContentLoaded`, sets the footer year,
  and wires smooth scrolling for the nav anchors. It only uses `links[0].url` — extra links in an
  entry are ignored by the current renderer.
- `styles.css` — CSS custom properties in `:root` for the palette; a single `max-width: 900px`
  container; one `@media (max-width: 768px)` block.

## Publication data

`citations.txt` (BibTeX) and `citations.csv` are the full Google Scholar export — the raw source
material, not used by the site at runtime. `data.js` holds a hand-curated subset shown as "Key
Publications", with the full list delegated to the Google Scholar link. When asked to add or
update publications, edit `data.js`; pull details from `citations.txt`/`citations.csv` if the paper
is already there.

Note: `data.js` also defines an unused `profile` object still containing placeholder values
(`"Add your bio here"`, `"your.email@example.com"`). Nothing reads it; the real bio and emails
live in `index.html`.

## Conventions

- `script.js` builds publication markup with template-literal `innerHTML`, so any string coming
  from `data.js` is interpolated as HTML. Keep that data hand-authored and trusted; if it ever
  becomes generated or user-supplied, switch to `textContent`/DOM construction.
- Vanilla JS/CSS only — do not introduce a framework, bundler, or npm dependency without asking.
  The only external resource is the Google Fonts stylesheet for Inter.
