# MIST Landing

**Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4, static export  
**Deploy:** Static export via `next build` → `out/` directory (GitHub Pages)

## Commands

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start dev server                   |
| `npm run build`  | Build static export to `out/`      |
| `npm run lint`   | Run ESLint                         |
| `npm run start`  | Start production server            |

## Structure

```
public/          # Static assets (favicons, logo, manifest)
app/
  layout.tsx     # Root layout + metadata
  page.tsx       # Landing page
  not-found.tsx  # 404 page
  globals.css    # Tailwind import
```

## Notes

- Static export — no API routes, no `getServerSideProps`, no `imageOptimization`
- Deployed to GitHub Pages via `gh-pages` branch (or separate deploy workflow)
