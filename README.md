# Mohamed Marwen Maalawi — Engineering Portfolio

> A premium software engineering portfolio that is itself a demonstration of engineering excellence.

**Live:** [marwenmaalawi.dev](https://marwenmaalawi.dev)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | TailwindCSS + Custom CSS |
| Animations | Framer Motion |
| Analytics | Vercel Analytics |
| Deployment | Vercel |
| i18n | Custom (EN / FR) |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Root → language redirect
│   ├── layout.tsx                  # Root layout
│   ├── sitemap.ts                  # Localized sitemap
│   ├── robots.ts                   # robots.txt
│   ├── select-language/            # Premium language selection screen
│   └── [lang]/
│       ├── layout.tsx              # Localized SEO layout
│       └── page.tsx                # Main portfolio page
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Sticky nav with scroll blur
│   │   ├── Footer.tsx              # Footer with language toggle
│   │   └── LanguageSwitcher.tsx    # EN/FR switcher
│   └── sections/
│       ├── HeroSection.tsx         # Full-viewport hero
│       ├── AboutSection.tsx        # Positioning & summary
│       ├── ExperienceSection.tsx   # Vertical timeline
│       ├── FeaturedProjectSection.tsx  # Antigravity case study (flagship)
│       ├── CaseStudiesSection.tsx  # Interactive case studies
│       ├── PhilosophySection.tsx   # Engineering philosophy
│       ├── EngineeringSection.tsx  # Practices & tech stack
│       ├── GitHubSection.tsx       # GitHub & workflow
│       ├── ResumeSection.tsx       # PDF downloads
│       └── ContactSection.tsx      # Contact links
├── content/
│   └── resume.ts                   # ← Single source of truth (all data)
├── features/
│   └── language/
│       └── index.ts                # Language persistence
├── lib/
│   ├── i18n.ts                     # Translation utilities
│   └── utils.ts                    # cn(), type helpers
└── translations/
    ├── en.json                     # English UI strings
    └── fr.json                     # French UI strings
```

---

## Key Design Decisions

### Single Source of Truth
All resume content lives in `src/content/resume.ts`. The website, both language versions, and PDF generation all reference this file. To update content, modify **one file only**.

### Language Architecture
- First visit → `/select-language` (mandatory, premium animated screen)
- Language stored in `localStorage` key `mmm-preferred-lang`
- Returning visitors → auto-redirected to their preferred locale
- Language switcher available on every page
- All routes: `/en` and `/fr`

### i18n Strategy
- UI strings: `src/translations/en.json` / `fr.json`
- Content data: bilingual fields in `src/content/resume.ts`
- Server Components load translations at build time
- No runtime translation library dependency

### Performance
- Server Components by default — Client Components only where interaction is required
- `next/image` for all images with proper `sizes` attributes
- Google Fonts preloaded in `<head>`
- Static generation for `/en` and `/fr` routes

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Start dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO | Recommended |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID | Optional |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID | Optional |

---

## PDF Resumes

PDF files are served as static assets from `public/resumes/`.

| File | Description |
|---|---|
| `resume-en.pdf` | English resume |
| `resume-fr.pdf` | French resume |
| `resume-executive.pdf` | Executive-focused resume |
| `resume-technical.pdf` | Technical deep-dive resume |

To update PDFs: regenerate from `src/content/resume.ts` and replace the files in `public/resumes/`.

---

## Deployment to Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git remote add origin https://github.com/marwenmaalawi/portfolio.git
git push -u origin main
```

### Step 2 — Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework preset: **Next.js** (auto-detected)
4. Configure environment variables (see table above)
5. Click **Deploy**

### Step 3 — Configure Custom Domain

In Vercel project settings → Domains → Add `marwenmaalawi.dev`

### Automatic Deployments

Every push to `main` triggers a production deployment.
Every pull request gets a unique preview URL.

---

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server locally
npm run lint      # ESLint check
```

---

## SEO

- Localized `<title>` and `<meta description>` per language
- Open Graph tags with localized content
- Canonical URLs with `alternates.languages`
- `sitemap.xml` generated at `/sitemap.xml`
- `robots.txt` generated at `/robots.txt`
- `<html lang>` set per locale

---

## Architecture Notes

This portfolio is intentionally built to demonstrate engineering practices:

- **Enterprise folder structure** — scalable as the project grows
- **Strict TypeScript** — all content is fully typed
- **Server Components first** — minimal client JavaScript
- **Single data source** — `resume.ts` drives everything
- **Security headers** — configured in both `next.config.ts` and `vercel.json`
- **Accessibility** — semantic HTML, proper `alt` text, ARIA labels

---

## Author

**Mohamed Marwen Maalawi**
Senior Full-Stack Software Engineer — Tunis, Tunisia

- Email: mohamedmarwen.maalawi@gmail.com
- GitHub: [github.com/marwenmaalawi](https://github.com/marwenmaalawi)
- LinkedIn: [linkedin.com/in/mohamed-marwen-maalawi-61692620b](https://linkedin.com/in/mohamed-marwen-maalawi-61692620b)
