# DECISIONS.md

## 1. Why this approach?

I chose a **single-page React application with component-rendered product UI** instead of the common alternative: a static marketing page with placeholder screenshots.

The dashboard preview and "Try a Question" card are built entirely with React components and local state — not images. This makes them interactive, responsive at every breakpoint, and demonstrates the actual product concept rather than describing it with marketing copy. The "Try a Question" section is the strongest example: visitors experience the product rather than reading about it.

The alternative was a static page with mockup images or heavy animation. I rejected that because: (a) images break at different viewports, (b) animation-heavy pages feel like templates, not products, and (c) the assignment specifically evaluates product understanding — interactive product previews communicate that more effectively than screenshots or copy.

Tech choices follow the same principle: Tailwind for consistent spacing/tokens without a heavy design system, Lucide for a unified icon set, CSS transitions instead of Framer Motion (fewer dependencies, easier to explain, sufficient for the restrained interactions), and all demo data centralized in one file.

## 2. One trade-off

I did not implement **dark mode**. The assignment states that half-implemented dark mode is worse than none. Building a complete dark theme — with proper color tokens for every surface, border, progress bar, and code element — would require a parallel design pass. Given the constraint, I chose one polished light theme over two mediocre themes.

With a full week, I would build dark mode as a CSS custom-property system (`--color-surface`, `--color-border`, etc.) toggled via a class on `<html>`, with each component consuming variables instead of hardcoded Tailwind colors. That approach scales cleanly but requires touching every component.

## 3. AI usage

AI tools (Claude) were used to generate the initial component structure, Tailwind configuration, and copy. Every component was reviewed for: correct responsive behavior at 390/768/1440px, consistent design tokens, no fabricated claims, accessible markup, and interaction correctness. The dashboard interaction logic, "Try a Question" quiz mechanics, scroll-reveal observer, and Konami Code easter egg were reviewed and tested in a browser at multiple breakpoints. The overall architecture, section ordering, design direction, and product decisions were human decisions.
