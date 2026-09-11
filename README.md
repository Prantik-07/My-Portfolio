# Prantik — Portfolio

Personal portfolio site for Prantik, an AI/ML & Automation Engineer. Built as a single-page React app with scroll-driven animations, a live GitHub commit widget, and a smooth-scrolling experience throughout.

**Live sections:** Hero → About → Work → Capabilities → Process → Contact

## Tech stack

- **React 19** + **Vite** — app shell and dev/build tooling
- **Tailwind CSS v4** — styling (CSS-first config via `@theme` in `src/index.css`, no `tailwind.config.js`)
- **Framer Motion** — entrance transitions, reveals, and UI micro-interactions
- **GSAP** (`ScrollTrigger`) — pinned/scrubbed scroll animations (hero name roll-out, horizontal project carousel)
- **Lenis** — smooth scrolling, synced to GSAP's ticker
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
  components/
    sections/        # Hero, Statement (About), Work, Capabilities, Process, Contact
    ui/               # small reusable UI primitives (stepper, dock, hover button, etc.)
    icons/
  data/               # profile.js, projects.js — all site copy/content lives here
  lib/                # SmoothScroll (Lenis + GSAP wiring), utils
```

To update the site's content (name, bio, stats, process steps, projects), edit `src/data/profile.js` and `src/data/projects.js` — the components read from these files rather than hardcoding copy.

## Notes

- Scroll restoration is disabled (`index.html`) so a page reload always starts at the top instead of resuming mid-animation.
- The GitHub commit counter (`CommitBattery`) calls the public GitHub Search API client-side and refreshes every 5 minutes.
