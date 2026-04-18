# Vishal Jaiswal — Portfolio

Personal portfolio website built with Angular 17, standalone components, and SCSS.

---

## Tech Stack
- Angular 17 (Standalone Components)
- TypeScript
- SCSS
- Angular Router

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Open http://localhost:4200

### 3. Build for production
```bash
npm run build
```
Output goes to `dist/portfolio/browser/`

---

## Deploy to Vercel (Free)

### Option A — Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Build first
npm run build

# Deploy
vercel --prod
```
When prompted:
- Set **Output Directory** to: `dist/portfolio/browser`
- Framework: `Other`

### Option B — Vercel Dashboard (No CLI)
1. Push this project to a GitHub repo
2. Go to https://vercel.com and sign in with GitHub
3. Click **Add New Project** → import your repo
4. Set these in Build & Output Settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/portfolio/browser`
5. Click **Deploy** — done!

The `vercel.json` in this project already handles Angular routing (all routes redirect to index.html).

---

## Project Structure
```
src/
  app/
    components/
      home/        → Home page with typing animation
      about/       → About me + achievements
      education/   → Education cards with college links
      skills/      → Skills grid + progress bars
      projects/    → Project cards with slide animations
      contact/     → Contact info + certifications
      nav/         → Sticky navbar
    app.component.ts
    app.config.ts
    app.routes.ts
  styles.scss      → Global dark theme styles
  index.html
  main.ts
vercel.json        → SPA routing config for Vercel
```

---

## Customization
- Update your LinkedIn URL in `contact.component.ts`
- Update your LinkedIn URL in `nav` if needed  
- Add a profile photo by replacing the `VJ` avatar in `about.component.ts`
- Add more projects in `projects.component.ts`

---

Built with Angular 17 · Deployed on Vercel
