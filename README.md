# PrepIQ

Turn interview preparation into a measurable system.

A premium homepage for an AI-powered interview preparation platform — built as a submission for the Acdyon Technologies Frontend Challenge (Part 2).

## Live Demo

**https://prepiq-homepage.vercel.app**

## Tech Stack

- **React 18** — component architecture
- **Vite** — build tooling and dev server
- **TypeScript** — type safety
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **Lucide React** — consistent icon set

No Framer Motion, no UI frameworks, no unnecessary dependencies.

## Features

- **Interactive dashboard preview** — tabbed UI (Overview / Weak Areas / Practice History) with local React state
- **Responsive design** — tested at 390px, 768px, 1024px, and 1440px
- **Scroll reveal** — sections fade in on scroll via Intersection Observer
- **Sticky navbar** — compact on scroll with backdrop blur
- **"Try a Question" interaction** — answer a real coding question with visual feedback and explanation
- **Mobile navigation** — full-screen overlay menu
- **Konami Code easter egg** — ↑↑↓↓←→←→BA reveals a hidden toast
- **Logo hover micro-interaction** — subtle rotation on the "IQ" lettermark
- **Custom selection color** — accent-tinted text selection
- **No fabricated data** — no fake testimonials, user counts, company logos, or statistics
- **Accessible** — semantic HTML, keyboard navigation, reduced-motion support, proper ARIA attributes

## Running Locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deployment

The `dist/` folder can be deployed to any static hosting service:

```bash
# Vercel
npx vercel --prod

# Netlify
npx netlify deploy --prod --dir=dist

# Or drag-and-drop dist/ to Vercel/Netlify/Cloudflare Pages
```

## Project Structure

```
src/
  components/
    Navbar.tsx          # Sticky nav with mobile menu
    Hero.tsx            # Headline, copy, CTAs
    DashboardPreview.tsx # Interactive tabbed dashboard
    Features.tsx        # 4-feature grid
    HowItWorks.tsx      # 3-step flow
    TryQuestion.tsx     # Interactive quiz question
    ProductShowcase.tsx # Weak areas showcase card
    FinalCTA.tsx        # Closing CTA section
    Footer.tsx          # Footer with links
  data/
    demoData.ts         # All demo data and TypeScript types
  App.tsx               # App shell, scroll reveal, easter egg
  main.tsx              # React entry point
  index.css             # Global styles, Tailwind directives
```

## AI Usage

AI tools were used to scaffold components and generate initial copy. All code was reviewed for correctness, responsive behavior, accessibility, and honesty (no fabricated claims). Architecture, design direction, and section ordering were human decisions. See `DECISIONS.md` for details.
