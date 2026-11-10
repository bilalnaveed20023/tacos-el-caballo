# Tacos El Caballo · demo site

Sales demo for the Springwells St taco truck in Southwest Detroit. Mobile first, no backend.

- Next.js 15 (App Router), React 19, hand-written CSS (Tailwind v4 is only the reset)
- Fonts: Alfa Slab One, Barlow, Barlow Condensed, Yellowtail (next/font/google)
- Everything editable lives in `src/lib/content.ts`
- Notable bits: the price board rebuilt from the truck's real sign, and an order calculator (`OrderBuilder.tsx`) that totals a call-in order and lets the customer copy it

```bash
npm install
npm run dev -- -p 3100        # http://localhost:3100
PAGES=1 npm run build         # static export for GitHub Pages into .next-pages
```

Do not run `npm run build` while the dev server is running; it corrupts `.next`. Stop dev, delete `.next`, restart.

See `PLACEHOLDERS.md` for what is verified and what still needs the owner.
