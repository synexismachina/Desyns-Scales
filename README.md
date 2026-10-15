# Desyns Scales Website

A responsive marketing website for Desyns Scales, built with React, Vite and React Router. The visual system uses a dark charcoal base, champagne-gold accents, Fraunces display typography and Inter for UI/body copy.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL, usually `http://localhost:5173`.

## Build and preview

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Routes

- `/` — Main marketing page
- `/about` — Company story, approach, capabilities, sectors and current proof status
- `/services/ai-automation` — Long-form AI automation landing page covering receptionists, chatbots, messaging, lead handling, workflow automation, integrations, governance, measurement and FAQs
- `/services/digital-identity` — Brand identity service page
- `/services/growth-visibility` — SEO and visibility service page
- `/services/business-systems` — CRM, dashboard and process/system work
- `/privacy-policy` and `/terms-of-service` — Legal pages
- `/insights` — Placeholder page; marked `noindex` until publishable articles exist

## Project structure

```text
src/
  assets/       Brand marks and logo assets
  components/   Shared navigation, layouts, buttons, visuals and cards
  data/         Service, FAQ, about-page and SEO content
  hooks/        Per-route SEO metadata helper
  pages/        About, Insights, legal and service pages
  sections/     Reusable home-page sections
  styles/       Global reset and design tokens
public/         Favicon, Netlify SPA redirects, robots.txt and sitemap.xml
  App.jsx       Routes and page-level scroll handling
  main.jsx      React entry point
```

## Content and SEO editing

- `src/data/services.js` — Home-page services, process and positioning content
- `src/data/aiAutomationPage.js` — AI automation page navigation, service overview and FAQ content
- `src/data/about.js` — About-page copy, structured data and approved project list
- `src/hooks/useSeo.js` — Page title, description, canonical URL, Open Graph/Twitter metadata and JSON-LD
- `index.html` — Default home-page metadata and organization structured data

Contact calls to action currently use `mailto:info@desynsscales.com`; no backend contact form is configured. The Desyns Scales AI platform is described as in development, not as a currently available product. The About page intentionally avoids inventing case studies: add projects only after details and outcomes are confirmed and approved for publication.

Before launch, verify the canonical domain, legal/company details, email address, third-party account permissions and each page's metadata. The sitemap currently excludes `/insights` because that placeholder is marked `noindex`. Add published articles to the sitemap before removing `noindex` from `/insights`.
