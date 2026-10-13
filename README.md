# Faceless Reels — waitlist landing page

Single marketing page for **Faceless Reels**: one prompt in, a finished, fact-checked
short-form history reel out. Pre-launch, so the page's only job is collecting
waitlist emails.

Next.js (App Router) · TypeScript · Tailwind CSS · static export.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run build        # static site -> ./out
```

## Waitlist endpoint

Signups POST `{ email, source, timestamp }` to one env var. `source` is `"hero"`
or `"closing"` so you can tell which section converts.

```bash
cp .env.example .env.local
# then set your real endpoint:
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://formspree.io/f/abcdefgh
```

Any service taking a JSON POST works — Formspree, Tally, ConvertKit, Mailchimp.

While the value still contains `REPLACE_ME`, the form short-circuits in dev so the
page stays demoable, and shows an error in production rather than silently
dropping signups. On Vercel, set the same variable in **Project → Settings →
Environment Variables** (it is read at build time, so redeploy after changing it).

Anti-spam is a honeypot field (`_gotcha`). There is no rate limit because there is
no backend route — if you later move to a Next route handler, add one there.

## Swapping in real reel media

Every video surface is one component — [`ReelSurface`](src/components/ReelCard.tsx) —
driven by a `media` prop. Layout does not change when you swap media. Edit the
`media` values in [`src/content/content.ts`](src/content/content.ts):

```ts
// gradient placeholder (current)
media: { kind: 'gradient', gradient: 'linear-gradient(155deg, #3a1f14, #0b1530)' }

// real thumbnail
media: { kind: 'image', src: '/reels/centralia.jpg', alt: 'Centralia mine fire' }

// real video
media: { kind: 'video', src: '/reels/centralia.mp4', poster: '/reels/centralia.jpg' }
```

Put files in `public/reels/`. Shoot them 1080×1920 (9:16). Three places use media:
`marqueeReels` (hero marquee), `showcase.reels` (3 big cards), `publishMock.media`.

## Editing content

- **All copy** — [`src/content/content.ts`](src/content/content.ts). No strings live in JSX.
- **Pricing** — `pricing.tiers` in the same file, keyed by audience (`Individual` /
  `Business`) with `{ monthly, yearly, features }` per tier. `Business` currently
  mirrors `Individual`; put different numbers there and the toggle picks them up
  with no component changes. `yearly` is the per-month figure and already reflects
  ~2 months free.
- **Brand tokens** — CSS variables in [`src/app/globals.css`](src/app/globals.css),
  exposed to Tailwind in [`tailwind.config.ts`](tailwind.config.ts).

## Notes

- **Dark mode** follows the OS setting (`prefers-color-scheme`), authored as a
  second theme rather than an inversion. Light is the primary design.
- **Reduced motion** disables the marquee animation and smooth scrolling.
- The marquee renders the card set twice so `translateX(-50%)` lands on the
  duplicate and loops seamlessly. Duplicates are `aria-hidden`.

## Deploy

Static export — `npm run build` writes `./out`, which any host will serve.

- **Vercel** — import the repo, set `NEXT_PUBLIC_WAITLIST_ENDPOINT`, deploy.
- **Hostinger VPS** — upload `out/` to your web root.

This repo keeps no local build artifacts: `node_modules/`, `.next/` and `out/` are
gitignored, so a clean checkout is a few hundred KB.
