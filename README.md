# Noémie's personal website

A single-page personal site built with [Astro](https://astro.build), plain CSS and a tiny bit of vanilla JS.
Live at **https://suchipizza.github.io/noemie/**.

## Run it locally

```sh
npm install
npm run dev       # http://localhost:4321/noemie/
npm run build     # static output in dist/
npm run preview   # serve the build
```

Requires Node 22+.

## Editing content

Everything personal lives in `src/data/`. Adding an item is a one-object edit in a single file.

| What | File | Notes |
|---|---|---|
| Name, email, social links, languages | `src/data/site.ts` | Also holds the disabled `garyJs` hook |
| Projects | `src/data/projects.ts` | One line per description (≤ 120 chars). `tag` is optional |
| Articles | `src/data/articles.ts` | Sorted newest first automatically. Set `lang: 'de'` or `'fr'` to show a language badge |
| Books | `src/data/books.ts` | See below |
| Portrait | `src/assets/noemie.jpg` | Square image; Astro optimises it to WebP |

### Add a book

```ts
// src/data/books.ts
{ title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', note: 'Read it every year.', url: 'https://…' },
```

Covers, in order of preference:

1. **Local image**: drop a file in `src/assets/books/`, import it at the top of `books.ts`
   (`import petitPrince from '../assets/books/petit-prince.jpg';`) and set `cover: petitPrince`.
2. **ISBN**: set `isbn: '9780156012195'` to use the Open Library cover.
3. **Nothing**: a cover is generated from the title, author and `spineColor`.

### Add a project

```ts
// src/data/projects.ts
{ name: 'My tool', url: 'https://…', description: 'One line on what it does.', tag: 'Tool' },
```

### Add an article

```ts
// src/data/articles.ts
{ title: '…', url: 'https://…', outlet: 'NativeFold', date: '2026-10-01', summary: 'Optional one-liner.' },
```

To add a new outlet, extend the `Outlet` type and the `outlets` array in the same file.

## Deploying

Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`
(`withastro/action` + `actions/deploy-pages`). In the repo settings, **Pages → Source** must be set to
**GitHub Actions**.

The site is a GitHub *project* site, so `astro.config.mjs` sets `base: '/noemie'`.
For a custom domain, add `public/CNAME`, set `site` to the domain and `base` to `'/'`,
and update the sitemap URL in `public/robots.txt`.

## gary.js hook

Set `garyJs: { enabled: true, src: 'https://…/gary.js' }` in `src/data/site.ts`.
`Base.astro` then loads it with `defer` before `</body>`. No layout space is reserved.

## Regenerating the OG image and favicons

`public/images/og.png`, `public/favicon-32.png` and `public/apple-touch-icon.png` are static files.
`public/favicon.svg` is the source monogram. Replace the PNGs if the name or tagline changes.
