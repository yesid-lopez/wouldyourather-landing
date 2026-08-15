# Would You Rather — Landing

Landing page for the **Would You Rather** iOS app. Built with Next.js (App Router),
React 19, Tailwind CSS v4 and shadcn/ui, mirroring the setup of the Der Die Das landing site.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Structure

```
src/
  app/
    page.tsx           Home page, composes the sections below
    privacy/page.tsx   Privacy policy
    globals.css        Brand tokens, fonts and animation utilities
  components/
    navigation.tsx     Sticky nav with scroll + active-section tracking
    hero.tsx           Headline, CTAs and the playable card
    vote-card.tsx      Interactive "would you rather" card (client)
    app-showcase.tsx   Draggable screenshot carousel
    features.tsx       Bento grid
    packs.tsx          Question pack cards
    how-it-works.tsx   Three-step timeline
    download-cta.tsx   Dark call-to-action with stats
    footer.tsx         Footer
    phone-frame.tsx    Reusable phone bezel
    ui/                shadcn/ui primitives
  lib/
    site.ts            App name, App Store URL, nav links, stats
    questions.ts       Sample questions for the playable hero card
public/images/
  screens/             Placeholder app screenshots (390x844)
  icons/               Placeholder feature icons
  appstore/            Official Apple download badges
```

## Placeholders to replace before launch

- `site.appStoreUrl` and `site.supportEmail` in `src/lib/site.ts`
- The five screens in `public/images/screens/` — swap in real 390x844 screenshots
- The feature icons in `public/images/icons/`
- `public/images/logo.svg` and `src/app/icon.svg` — the real app icon
- The stats in `src/lib/site.ts` and the copy in each section
- `src/app/privacy/page.tsx` needs a legal review
- The disclaimer line in `footer.tsx` about placeholder screenshots

## Design tokens

Brand colors live in `@theme inline` in `src/app/globals.css`:

- `grape` — option A, primary brand violet
- `flame` — option B, coral
- `zest` — lime accent
- `ink` — neutral scale used for text and dark sections
- `mist` — the paper background for the light sections

Add shadcn components with `npx shadcn@latest add <component>`; paths are configured in
`components.json`.
