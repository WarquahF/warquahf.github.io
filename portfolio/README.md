# Warquah Faiz — Portfolio v3

A rebuild of the portfolio on Astro + Svelte + TypeScript. Static-first;
Svelte only hydrates the three components that genuinely need client JS
(loading sequence, command palette, project detail panel).

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # static output to dist/
npm run preview   # preview the build
```

## Fonts

Site CSS uses system stacks only — no webfonts, no downloads. Display
and body use the Apple system stack (`SF Pro Display/Text`,
Helvetica/Arial fallback); labels, data and structure use the system
mono stack (`ui-monospace`, `SF Mono`, Menlo/Consolas fallback). See
`--font-display`, `--font-body` and `--font-mono` in `src/styles/global.css`.

The woff2 files in `public/fonts/` (Fraunces, Inter, IBM Plex Mono) are
not loaded by the site. They exist for `npm run og`
(`scripts/generate-og.mjs`), which embeds them into `public/og-image.png`
via resvg — no system fonts needed for the social card.

## Design notes

- **Palette:** warm paper (`#faf8f3`) background, near-black ink, warm-gray
  hairlines, and a single restrained dark-gold "signal" color
  (`#7c5e10` in light, `#d9a648` in dark) used only for status dots,
  active states and quiet highlights. A dark studio theme exists for the
  theme toggle; light warm paper is the default.
- **Type:** system display stack for headlines, system body stack for copy,
  system mono for labels, data and structure — three roles, not one
  all-mono "hacker" treatment.
- **Signature element:** the left-edge "document gutter" — a fixed rail
  with tick marks per section that brightens as you scroll, via a single
  `IntersectionObserver`. It's meant to make the whole page read like one
  continuous document rather than a stack of unrelated sections. Hidden
  under 780px in favor of the standard top nav.
- **Motion:** a single-pass reveal-on-scroll (`data-reveal` + IO), plus
  hover/focus micro-interactions and the palette/panel transitions.
  Nothing loops or floats. `prefers-reduced-motion` disables all of it.
- **Marquee removed:** the old scrolling name/role ticker is gone and was
  not replaced with any other ticker/ribbon effect, per the brief.

## Structure

```
src/
  components/          Astro components (static)
  components/svelte/    Svelte components (interactive only)
  layouts/              Base HTML shell + document gutter
  pages/                index.astro assembles the page
  data/                 Project + nav content as typed data
  styles/               Design tokens + base styles
```

## Content

Project details, focus areas, and contact links are pulled from your
existing site (github.com/WarquahF, warquah.dev@proton.me, @warquah35 on
X) — nothing invented. Edit `src/data/projects.ts` and `src/data/nav.ts`
to update content without touching markup.
