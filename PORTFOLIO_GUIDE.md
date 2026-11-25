# Keshav Dewan — Portfolio Maintenance & Publishing Guide

This document is the complete manual for editing content, adding project case studies, updating translations, customizing layouts/colors, previewing locally, and publishing updates to **`https://keshavdewan.github.io/`**.

---

## 1. Project Architecture & Folder Map

The site is built with **Astro** (static site generator) using TypeScript data modules and Markdown Content Collections. Every change builds into plain static HTML/CSS/JS inside `dist/` and deploys automatically via GitHub Actions.

```text
keshav-portfolio/
├── .github/workflows/deploy.yml   # GitHub Actions pipeline that builds & publishes to GitHub Pages
├── astro.config.mjs               # Astro site config (site URL, static output, trailing slashes)
├── package.json                   # Scripts (dev, build, preview) & dependencies (astro, Archivo font)
├── public/                        # Static files copied verbatim to the website root
│   ├── docs/
│   │   └── Keshav_Dewan_CV.pdf    # Downloadable PDF linked from CV & Contact sections
│   └── images/
│       ├── keshav-portrait.jpg    # Hero circular portrait
│       ├── companies/             # Employer logos (mediasoft.png, kitro.png, itu.svg, etc.)
│       ├── tech/                  # Product/tool SVG logos (powerbi.svg, fabric.svg, python.svg, etc.)
│       └── *.jpg / *.png          # Project dashboard screenshots
└── src/
    ├── components/
    │   ├── MicroStrip.astro       # Banknote micro-text strip in hero
    │   ├── Rosette.astro          # Animated SVG guilloche rosette around portrait
    │   ├── Waves.astro            # Banknote guilloche wave backgrounds per color band
    │   └── pages/                 # Shared multi-language page templates
    │       ├── HomePage.astro
    │       ├── WorkIndexPage.astro
    │       ├── WorkDetailPage.astro
    │       ├── WritingPage.astro
    │       └── CvPage.astro
    ├── content/
    │   ├── config.ts              # Strict schema validation for project Markdown files
    │   └── work/*.md              # English project case studies (1 file per project)
    ├── data/
    │   ├── profile.ts             # Core English data (contact, experience, stack, skills, articles, education)
    │   ├── i18n.ts                # EN / FR / DE UI strings, headings, Hero, About, Stats, Contact
    │   ├── localizedContent.ts    # FR & DE translations for Experience, Stack, Skills, Education & Projects
    │   └── logos.ts               # Maps company names & tech tools to logo files in public/images/
    ├── layouts/
    │   └── BaseLayout.astro       # HTML head, navbar, EN/FR/DE dropdown, Dark/Light toggle, footer
    ├── pages/                     # Route entrypoints (43 generated static pages)
    │   ├── index.astro, work/, writing/, cv/, 404.astro   # English routes (/...)
    │   ├── fr/...                                         # French routes (/fr/...)
    │   └── de/...                                         # German routes (/de/...)
    └── styles/
        └── global.css             # Complete design system, colors, grids, typography, responsive rules
```

---

## 2. How the Multi-Language System (`EN` / `FR` / `DE`) Works

The language dropdown in the top navigation bar (`BaseLayout.astro`) switches between pre-built static routes:
- English: `/`, `/work/`, `/work/<slug>/`, `/writing/`, `/cv/`
- French: `/fr/`, `/fr/work/`, `/fr/work/<slug>/`, `/fr/writing/`, `/fr/cv/`
- German: `/de/`, `/de/work/`, `/de/work/<slug>/`, `/de/writing/`, `/de/cv/`

**Rule of thumb when editing:**
1. **UI labels, Hero, About, Stats, Contact, CV profile:** Update all three keys (`en`, `fr`, `de`) in `src/data/i18n.ts` (`UI_COPY`).
2. **Experience, Stack, Skills, Education:** Update English in `src/data/profile.ts`, and update French/German in `src/data/localizedContent.ts`.
3. **Projects:** Update English in `src/content/work/<slug>.md`, and update French/German in `src/data/localizedContent.ts` (`WORK_TRANSLATIONS.fr['<slug>']` and `WORK_TRANSLATIONS.de['<slug>']`).

---

## 3. Updating Personal Info, Hero, About, Impact Numbers & Contact

### A. Contact Links, Email, Phone & Micro-Text Strip
Edit `SITE` at the top of `src/data/profile.ts`:
- `name`: Display name across navbar, hero, and CV.
- `email`: Email address (`keshavdewan06@gmail.com`).
- `phone` & `phoneHref`: Displayed phone number and `tel:` link.
- `location`: City/country label.
- `github`, `linkedin`, `medium`, `tableau`: External profile links.
- `cvPdf`: Path to downloadable CV (`/docs/Keshav_Dewan_CV.pdf`).
- `microStrip`: Repeating micro-text line at the very top of the purple hero band.

### B. Hero, About Paragraphs, Impact Numbers & Contact Intro
Edit `UI_COPY.en`, `UI_COPY.fr`, and `UI_COPY.de` in `src/data/i18n.ts`:
- `hero.role`, `hero.focus`, `hero.lede`, `hero.ctaWork`, `hero.ctaCv`
- `sections.aboutP1`, `sections.aboutP2`, `sections.languagesValue`, `sections.volunteeringValue`
- `sections.stats`: The 3 large numbers in the About section (`30+`, `40%`, `8M sq ft`). Each item has `{ value, label, sub }`.
- `sections.contactLede`: Intro sentence above the Contact columns.

---

## 4. Updating Experience, Stack, Skills, Education & Writing

### A. Experience Timeline (`EXPERIENCE` / `EXPERIENCE_I18N`)
- **English:** `EXPERIENCE` array in `src/data/profile.ts`.
- **French & German:** `EXPERIENCE_I18N.fr` and `EXPERIENCE_I18N.de` in `src/data/localizedContent.ts`.
- **Important behavior:**
  - The **Homepage (`#experience`)** automatically displays the **first 4 roles** (`EXPERIENCE.slice(0, 4)`) in a 2×2 grid.
  - The **CV page (`/cv/`)** displays **all roles** in the array.
  - Keep your 4 most important/recent roles at the top of the array.
  - Each role object has: `title`, `company`, `location`, `period`, `bullets` (array of strings), and optional `stack`.

### B. The Stack Section (`STACK_PILLARS` / `STACK_I18N`)
- **English:** `STACK_PILLARS` in `src/data/profile.ts` (4 pillars displayed in 4 columns).
- **French & German:** `STACK_I18N.fr` and `STACK_I18N.de` in `src/data/localizedContent.ts`.
- **Product Logo Pill Strip:** Controlled by `TECH_STACK_LOGOS` in `src/data/logos.ts`.

### C. CV Core Competencies & Education
- **English:** `SKILL_GROUPS` and `EDUCATION` in `src/data/profile.ts`.
- **French & German:** `SKILLS_I18N` and `EDUCATION_I18N` in `src/data/localizedContent.ts`.

### D. Writing / Medium Articles
- Edit `ARTICLES` in `src/data/profile.ts`.
- The **Homepage (`#writing`)** shows the **first 4 articles**, while **`/writing/`** shows the complete list.
- Allowed `category` values: `'BI & Dashboards'` or `'SQL Case Study'`.

---

## 5. Managing Project Case Studies (`src/content/work/`)

Each project is a Markdown file inside `src/content/work/` (for example, `src/content/work/mediasoft-fabric-bi.md`). The filename (without `.md`) becomes its URL: `/work/mediasoft-fabric-bi/`.

### A. Frontmatter Fields (Validated by `src/content/config.ts`)

```yaml
---
title: "Project Title"
descriptor: "Short 1-line subtitle under the title"
tagline: "1-2 sentence summary shown on cards and page header"
organization: "Company or Challenge Name"
year: "2026"
category: "BI & Governance"     # MUST be one of: "AI & Automation" | "BI & Governance" | "Data Engineering" | "SQL & Analytics"
status: "Production delivery"
color: "blue"                   # MUST be one of: "purple" | "blue" | "green" | "brown"
featured: true                  # true = appears in "Selected work" on Homepage; false = appears in /work/ archive only
order: 2                        # Controls sort order (smaller number = higher up)
image: "/images/my-shot.png"    # Optional screenshot path inside public/
imageCaption: "Caption text"    # Optional caption under screenshot
builtWith:
  - "Microsoft Fabric"          # Automatically paired with matching icon in src/data/logos.ts
  - "Power BI"
capabilities:
  - "Star-schema semantic modeling"
stats:                          # Optional big KPI numbers in the project header
  - value: "40%"
    label: "Workflow efficiency improvement"
links:                          # Optional CTA buttons & sidebar links
  - label: "GitHub Repository"
    url: "https://github.com/..."
---
```

### B. Writing the Case Study Body
Below the closing `---`, write standard Markdown (`## Headings`, bullet lists, bold text, code spans). You can also include multi-column pipeline diagrams using HTML inside Markdown:

```html
<figure data-diagram>
  <ol>
    <li>
      <strong>1. Source</strong>
      <ul>
        <li>ERP SQL<em>Validated tables</em></li>
      </ul>
    </li>
    <li>
      <strong>2. Model</strong>
      <ul>
        <li>Fabric<em>Star schema + RLS</em></li>
      </ul>
    </li>
  </ol>
  <figcaption>Pipeline summary caption.</figcaption>
</figure>
```

### C. Adding a Brand-New Project (Step-by-Step)
1. *(Optional)* Place any screenshot image in `public/images/`.
2. Create `src/content/work/my-new-project.md` using the frontmatter template above.
3. Add `'my-new-project'` entries under `WORK_TRANSLATIONS.fr` and `WORK_TRANSLATIONS.de` in `src/data/localizedContent.ts` (if omitted, Astro safely falls back to the English title/tagline, while custom FR/DE sections keep those pages fully translated).
4. Run `npm run build` to confirm Astro validates the frontmatter with zero errors.

### D. Reordering or Removing a Project
- **Reorder:** Adjust `order:` numbers across the `.md` files (e.g., `1`, `2`, `3`...).
- **Show/hide on Homepage:** Set `featured: true` or `featured: false`.
- **Remove:** Delete the `.md` file from `src/content/work/` (and optionally remove its entry in `WORK_TRANSLATIONS`).

---

## 6. Updating Logos, Portrait & Downloadable CV PDF

### A. Portrait Photo
Replace `public/images/keshav-portrait.jpg` with your updated headshot (square aspect ratio works best; `object-position: center top` is applied automatically).

### B. Downloadable CV PDF
1. Export your latest CV as PDF.
2. Overwrite `public/docs/Keshav_Dewan_CV.pdf` (keep the exact filename so all links across `/`, `/cv/`, `/fr/cv/`, and `/de/cv/` update automatically).

### C. Company Logos
1. Add the logo file (`.svg` or `.png`) to `public/images/companies/`.
2. Register a matching rule in `getCompanyLogo()` inside `src/data/logos.ts`:
   ```ts
   if (s.includes('newcompany')) {
     return { src: '/images/companies/newcompany.png', alt: 'NewCompany logo' };
   }
   ```
   Company badges appear automatically whenever `role.company` (Experience/CV) or `entry.data.organization` (Project Detail) matches that keyword.

### D. Product & Tech Logos
1. Add the SVG icon to `public/images/tech/`.
2. Map its keyword in `getTechLogo()` inside `src/data/logos.ts` (and optionally add it to `TECH_STACK_LOGOS` to show it in the `#stack` pill strip).

---

## 7. Customizing Columns, Colors, Dark Mode & Visuals

All styling lives in `src/styles/global.css`.

### A. Banknote Color Palette
Edit the CSS custom properties at the top of `src/styles/global.css`:
- `:root` controls **Light Mode** (`--paper`, `--paper-2`, `--ink`, `--purple`, `--blue`, `--green`, `--yellow`, `--red`, `--brown`).
- `:root[data-theme="dark"]` controls **Dark Mode**.

### B. Changing Column Counts
Look for `grid-template-columns` in `src/styles/global.css`:
- `.panels` → Experience cards on Home (`repeat(2, minmax(0, 1fr))` = 2 columns)
- `.machines` → Stack pillars (`repeat(4, minmax(0, 1fr))` = 4 columns)
- `.contact-grid` → Contact blocks (`repeat(4, minmax(0, 1fr))` = 4 columns)
- `.about` → About text vs. Stats (`minmax(0, 1.2fr) minmax(0, 1fr)` = 2 columns)
- `.body` → Project detail sidebar vs. Article (`17rem minmax(0, 1fr)`)
- `.cv-row` → CV section title vs. Content (`15rem minmax(0, 1fr)`)
- `.skill-groups` → CV skill groups (`repeat(2, minmax(0, 1fr))` = 2 columns)

*(Responsive breakpoints at `960px`, `860px`, and `520px` automatically collapse multi-column grids to 2 columns or 1 column on tablets and phones.)*

---

## 8. Local Preview & Build Verification

Open PowerShell in the project folder:

```powershell
cd C:\Users\kesha\.gemini\antigravity\scratch\keshav-portfolio
```

| Command | Purpose |
|---|---|
| `npm run dev` | Starts a live development server (typically `http://localhost:4321`) that reloads automatically as you save files. |
| `npm run build` | Validates all TypeScript, Markdown frontmatter schemas, and builds all 43+ static HTML pages into `dist/`. **Always run this before pushing.** |
| `npm run preview` | Serves the exact production `dist/` build locally so you can test the final output before pushing. |

*(First time on a new computer? Run `npm install` once before the commands above.)*

---

## 9. Publishing to GitHub Pages (`https://keshavdewan.github.io/`)

### A. One-Time GitHub Repository Setup
1. On GitHub, open **`keshavdewan/keshavdewan.github.io` → Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. If pushing this Astro project for the first time over your older Jekyll repository:
   ```powershell
   cd C:\Users\kesha\.gemini\antigravity\scratch\keshav-portfolio

   # Optional: save a backup branch of the old Jekyll site on GitHub
   git push origin d3f4ac785fe7ce91b501686b880bdf99d3b5ce07:refs/heads/legacy-jekyll

   # Push the Astro portfolio to master
   git push -u origin master --force
   ```

### B. Day-to-Day Publishing Workflow (Every Future Update)
Whenever you make edits and verify them locally with `npm run build`:

```powershell
cd C:\Users\kesha\.gemini\antigravity\scratch\keshav-portfolio

# 1. Verify the production build passes locally
npm run build

# 2. Review what files changed
git status

# 3. Stage, commit, and push to GitHub
git add .
git commit -m "Describe your update here"
git push
```

### C. Verifying Deployment Live
1. Go to **`https://github.com/keshavdewan/keshavdewan.github.io/actions`**.
2. Watch **"Deploy Keshav Dewan Portfolio to GitHub Pages"** complete (`build` → `deploy`, usually ~45–60 seconds).
3. Visit **`https://keshavdewan.github.io/`** and press **`Ctrl + Shift + R`** (hard refresh) so your browser fetches the latest CSS and HTML instead of cached copies.

---

## 10. Troubleshooting Quick Reference

| Symptom | Cause & Fix |
|---|---|
| **`npm run build` fails on a `.md` file** | Check the YAML frontmatter in `src/content/work/<file>.md`: `category` must be exact (`"AI & Automation"`, `"BI & Governance"`, `"Data Engineering"`, or `"SQL & Analytics"`), `color` must be `"purple"`, `"blue"`, `"green"`, or `"brown"`, and quotes around strings with colons (`:`) must be balanced. |
| **JSON parse error (`Unexpected token` in `package.json`)** | Ensure `package.json` is saved as **UTF-8 without BOM** (avoid PowerShell `Out-File -Encoding utf8` on JSON files; edit with VS Code or a UTF-8 no-BOM editor). |
| **GitHub Pages still shows the old site after pushing** | Check the **Actions** tab on GitHub for a green checkmark, confirm **Settings → Pages → Source** is **GitHub Actions**, and hard-refresh the browser (`Ctrl + Shift + R`). |
| **Logo doesn't appear for a new company or tool** | Verify the file exists in `public/images/companies/` or `public/images/tech/` and that the matching keyword is added in `src/data/logos.ts`. |
| **Links break when adding a new page** | Keep `trailingSlash: 'always'` conventions: internal links should end with `/` (e.g. `/work/`, `/cv/`, `/fr/work/slug/`) and wrap routes with `localizedPath('/path/', lang)`. |
