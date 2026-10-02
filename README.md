# Desyns Scales — Website

A production-ready marketing site for Desyns Scales, built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, Button, ServiceCard,
                   AnimatedGoldLines, DashboardPreview, Reveal, SectionHeading
  sections/       One file per homepage section (Hero, Introduction,
                   Services, HowWeWork, WhyUs, Showcase, Outcomes, FinalCTA)
  data/           Copy and structured content sourced from the Desyns
                   Scales proposal (services, approach, why-us, outcomes)
  assets/         Processed logo/mark artwork (transparent, dark-mode ready)
  styles/         Design tokens (tokens.css) and global reset (global.css)
  App.jsx         Page composition
  main.jsx        Entry point
```

## Notes on design decisions

- **Palette & type**: near-black/charcoal backgrounds with a metallic gold
  accent (`--gold` family in `styles/tokens.css`), paired with **Fraunces**
  (editorial display serif) and **Inter** (body/UI sans). Both load from
  Google Fonts in `index.html`.
- **Flowing gold lines**: `components/AnimatedGoldLines.jsx` renders slow,
  looping SVG paths with a travelling gradient highlight — pure CSS
  animation (`stroke-dashoffset`), no JS ticking, so it stays GPU-friendly.
  Respects `prefers-reduced-motion`.
- **Hero visual**: rather than a stock photo (explicitly avoided per brief),
  the hero and showcase use an original CSS/SVG "dashboard" mockup
  (`components/DashboardPreview.jsx`) in the CoinSphere-style tech language,
  layered over an abstract gold mesh gradient for the AP-style cinematic feel.
- **Services**: grouped into exactly the four categories from the brief —
  AI & Automation, Digital Identity, Growth & Visibility, Business Systems.
  Custom software, web development and mobile app development are
  intentionally excluded everywhere, per the content restriction in the brief.
- **Content source**: headings, the six-stage approach, "Why Desyns Scales"
  pillars and outcomes are adapted from `Desyns Scales — Professional
  Service Proposal.docx`.

## Extending

- Update copy/services in `src/data/services.js` — components re-render
  automatically from that single source of truth.
- Swap the contact `mailto:` links in `FinalCTA.jsx` / `Footer.jsx` for a
  real form or booking link when one exists.
- Logo art lives in `src/assets/` — `logo-dark.png` (full lockup) and
  `mark-dark.png` (icon only), both already prepared for dark backgrounds.
