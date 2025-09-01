# TacticsMeta.com

A community-driven hub for **Clash Royale’s Merge Tactics** mode.  
Find the **best comps, troops, traits, rulers, and guides** — updated for the latest season.

[![Vercel](https://img.shields.io/badge/Hosted_on-Vercel-000?logo=vercel)](https://vercel.com)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

> Live site: **https://tacticsmeta.com**

---

## ✨ Features
- **Team Comps Tier List** (S → C) with compact descriptions.
- **Comp detail pages** with battlefield layouts, core units, and tips.
- **Troops database** with portraits, costs, and traits.
- **Traits & Modifiers** browser with thresholds/effects.
- **Rulers** overview (unlock info + abilities).
- **SEO ready** (title, description, OG image, robots, sitemap).

---

## 🖼 Screenshots
> Social preview used for link sharing
>
> ![OG Social Image](public/og-image.png)

---

## 🧰 Tech Stack
- **React 18 + TypeScript** (UI + types)
- **Vite** (dev server & build)
- **Tailwind CSS** (styling)
- **React Router** (routing)
- **lucide-react** (icons)
- **Vercel** (hosting & CI/CD)

---

## 📂 Project Structure
```
public/
  favicon.ico
  robots.txt
  sitemap.xml
  og-image.png
  modifiers/
  rulers/
  traits/
  units/

src/
  components/
    ui/                # Shadcn UI components
    BattlefieldGrid.tsx
    CompCard.tsx
    Header.tsx
    ScrollToTop.tsx
  data/                # Mock data sources
  hooks/
  lib/                 # Utilities (unitPortrait, traitIcon, etc.)
  pages/               # Route pages (Index, Comps, Traits, ...)
  App.tsx
  main.tsx

tailwind.config.ts
vite.config.ts
tsconfig*.json
postcss.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **npm** (or pnpm/yarn)

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Open http://localhost:5173

### Build
```bash
npm run build
```
The production build is emitted to `dist/`.

### Preview production build
```bash
npm run preview
```

---

## 🧭 Routing

The app is a single-page app (SPA) using React Router:

- `/` — Homepage
- `/comps` — All team comps grouped by tier
- `/comp/:id` — Comp detail page
- `/troops` — Troops database
- `/traits` — Traits overview
- `/modifiers` — League modifiers
- `/rulers` — Rulers overview
- `*` — 404 page

---

## 🧩 Content Sources

- **Comps / Traits / Modifiers**: `src/data/mockData.ts`
- **Unit portraits**: `/public/units/*.webp`
- **Trait icons**: `/public/traits/*.webp|svg`
- **Ruler images**: `/public/rulers/*.webp`
- **Modifier icons**: `/public/modifiers/*.webp|svg`

> Update assets in `/public/**` and push to `main` — Vercel redeploys automatically.

---

## 🔎 SEO & Social

- **Title/Meta**: `index.html` (`<head>`)
- **Robots**: `public/robots.txt`
- **Sitemap**: `public/sitemap.xml` (submit in Google Search Console)
- **Open Graph**: `public/og-image.png` referenced in `<meta property="og:image">`

Example head tags:
```html
<title>TacticsMeta.com — Merge Tactics Comps & Guides</title>
<meta name="description" content="Best Merge Tactics comps, tier lists, troops, traits, and guides." />
<link rel="canonical" href="https://tacticsmeta.com/" />
<meta property="og:title" content="TacticsMeta.com — Merge Tactics Comps & Guides" />
<meta property="og:description" content="Best Merge Tactics comps, tier lists, and guides." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://tacticsmeta.com/" />
<meta property="og:image" content="https://tacticsmeta.com/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://tacticsmeta.com/og-image.png" />
```

---

## ☁️ Deployment (Vercel)

1. Push to GitHub (`main` branch).
2. Import the repo in Vercel → Framework **Vite**.
3. Build command: `npm run build`  
   Output directory: `dist`
4. Add your custom domain in Vercel and set the DNS records at your registrar.
5. Vercel issues SSL automatically.

Every push to `main` triggers an automatic production deploy.  
Feature branches get preview URLs.

---

## 🧪 Quality
- Lint: _add ESLint if desired_
- Formatting: _add Prettier if desired_

---

## 🤝 Contributing
PRs and issues are welcome!  
Please open an issue for feature requests or bug reports.

---

## 📝 License
MIT © 2025 TacticsMeta.com contributors
