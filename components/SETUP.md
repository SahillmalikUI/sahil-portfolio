# Portfolio redesign — Next.js port

Drop-in replacement for your current portfolio. Same structure you already use
(`app/` + `components/`), built with `motion/react`. No new heavy dependencies.

## 1. Place the files

Copy into your project, replacing the old ones:

```
app/layout.tsx      → replace
app/globals.css     → replace
app/page.tsx        → replace
components/*.tsx     → add the new components
```

You can delete the old components that are no longer imported
(Navbar, TechMarquee, CredibilityStrip, SelectedWork, HorizontalShowcase,
VitalsCaseStudy, DesignLab, StackExperience, ScrollProgress, and the old
Hero/About/Contact/Process). `page.tsx` now imports only the new set.

## 2. Fonts

`layout.tsx` loads them with `next/font/google` (Bricolage Grotesque, Instrument
Sans, IBM Plex Mono) — no manual `<link>` needed, no Arial fallback anymore.

## 3. Screenshots — just name your files to match

Every screenshot slot shows a labeled placeholder until a file exists at its
path. Add these under `public/` and they appear automatically:

| Path                          | What goes there                          |
|-------------------------------|------------------------------------------|
| `public/work/bluai-vitals.png`| BluAi vitals screen (card thumb)         |
| `public/work/novamind.png`    | NovaMind tasks + AI chat (card thumb)    |
| `public/work/vitalslog.png`   | VitalsLog app screens                    |
| `public/work/design-lab.png`  | Figma exploration board                  |
| `public/work/brand-system.png`| Brand board / logo sheet                 |
| `public/work/landing-studies.png` | Landing page mockup                  |
| `public/cases/bluai-vitals.png` | BluAi dashboard, wide (~1600px, 16:10) |
| `public/cases/novamind-app.png` | NovaMind phone screens, side by side   |

Also drop your `public/resume.pdf` for the hero button.

Card thumbnails read best at 16:10 (e.g. 1600×1000). Case-study shots can be
larger; they're object-fit: cover.

## 4. The live heartbeat

`components/BackendStatusContext.tsx` pings your NovaMind backend every 30s. A
resolved request (even the root 404) means "live" and the ECG line beats; a
timeout means "down" and it flatlines. To point it at a different URL, change
`BACKEND` in that file.

## Notes

- Everything is responsive to mobile, respects `prefers-reduced-motion`, and has
  visible keyboard focus.
- GSAP isn't used in this version (the pinned horizontal section was cut). If you
  want a scroll-driven moment back later, it's easy to add — otherwise you can
  drop the gsap dependency and trim it from the footer copy.
