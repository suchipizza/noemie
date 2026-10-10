# PRD — Noémie's Personal Website

**Owner:** Noémie Rakotomalala
**Date:** 10 October 2026
**Audience:** A coding agent that will build the site, push it to GitHub and deploy it.
**Status:** Ready to build. Items marked `TODO(owner)` need input from Noémie. Ship with clearly marked placeholders rather than blocking on them.

---

## 1. Goal

A single-page personal website that introduces Noémie, lists her projects, writing and favourite books, and gives people a way to contact her. It will later host gary.js as a live showcase, so it must stay simple and fast and have room for an embedded script. gary.js itself is **out of scope** for this PRD. Only a disabled hook is required (§9).

**Principles:** simple, fast, personal, dark-mode first, easy to update by editing data files (no CMS).

---

## 2. Tech stack and deployment

| Decision | Choice | Notes |
|---|---|---|
| Framework | **Astro** (latest stable), static output | Zero JS by default. Content lives in typed data files |
| Styling | Plain CSS with custom properties (one global stylesheet + component-scoped styles) | No Tailwind, no UI framework |
| JS | Vanilla, minimal: theme toggle, nav active state, book interaction | No React/Vue |
| Fonts | Self-hosted via `@fontsource` (see §6) | No Google Fonts requests |
| Icons | Inline SVG (LinkedIn, GitHub, mail, sun/moon, external-link) | Simple Icons paths are fine for brand logos |
| Hosting | **GitHub Pages**, deployed by GitHub Actions (`withastro/action`) on push to `main` | |
| Repo | `TODO(owner)`: confirm the repo name. Default: `suchipizza/suchipizza.github.io` → served at `https://suchipizza.github.io/` | If the repo is not a user site, set Astro `base` accordingly |
| Custom domain | `TODO(owner)`: optional. If provided, add `public/CNAME` | |
| Package manager | npm | Commit the lockfile |

**Deliverables:** a working repo with README (how to run, how to add a book/project/article, how to deploy), the Actions workflow, and a live URL.

---

## 3. Information architecture

One page (`/`) with a sticky top navigation bar linking to in-page anchors. Order on the page:

1. **Header / Hero + About** (`#about`)
2. **Projects** (`#projects`)
3. **Writing** (`#writing`), the blog section
4. **Books** (`#books`)
5. **Contact** (`#contact`), including the LinkedIn and GitHub links
6. **Footer**

**Top nav:** `About · Projects · Writing · Books · Contact`, plus the theme toggle on the right.
- Sticky, translucent background with backdrop blur and a 1px bottom border.
- Smooth scroll to anchors (disabled under `prefers-reduced-motion`). Anchor targets get `scroll-margin-top` equal to the nav height.
- Active-section highlighting via `IntersectionObserver`.
- Mobile (< 640px): links collapse into a simple menu button or a horizontally scrollable row. Choose the scrollable row for simplicity unless it overflows badly.

Also required: a `404.html` page in the same style with a link home. It will be a natural home for Gary later.

---

## 4. Section requirements and content

Use the copy below. Light editorial fixes are already applied (capitalisation, punctuation). Do not rewrite the meaning.

### 4.1 About (`#about`)

**Layout:** a small circular photo (≈96–120px, 2px accent ring) next to or above the heading. Below it, the text.

- Photo: `public/images/noemie.jpg`. `TODO(owner)`: provide the photo. Until then, use a neutral placeholder (initials "N" on an accent background). Provide `alt="Portrait of Noémie"`, explicit `width`/`height`, and serve an optimised version through Astro's `<Image>`.

**Copy:**

> # Hi there, I'm Noémie
>
> I'm an AI-native software builder based in Zürich, Switzerland, and a senior R&D engineer with a decade of experience building computational models that predict how complex systems behave in the real world.
>
> These days, I build agentic benchmarks and experimentation frameworks to understand how AI agents behave when they're given room to explore, make decisions, fail, learn from outcomes, and try again. I also love building useful applications for myself and other people.
>
> I usually spend my free time exploring the Swiss Alps with my dog [Noushka](https://www.instagram.com/noushkathehusky/) and watching K-dramas. In a past life, I did computational mechanics research and a [PhD](https://hal.science/tel-01153585/).

- "Noushka" and "PhD" are inline links opening in a new tab (`target="_blank" rel="noopener noreferrer"`).
- Directly under the bio, add a row with the **LinkedIn** and **GitHub** icon buttons (same component as in Contact, §4.5), so they appear near the top as well as in Contact.

### 4.2 Projects (`#projects`)

A responsive grid of cards: 1 column on mobile, 2 on tablet and desktop. Each card has a name, a one-line description (≤ 120 characters), a domain or repo label, and an optional tag (e.g. `Company`, `Open source`, `Tool`). The whole card is clickable (one link per card, not nested links) and opens in a new tab.

Data file: `src/data/projects.ts` (or `.json`), in this order:

| Name | URL | Draft description | Tag |
|---|---|---|---|
| NativeFold | https://nativefold.com | Helping developer tools adapt to agentic environments, so AI coding agents can discover, select and use them. | Company |
| Pigtail | https://suchipizza.github.io/pigtail/ | Evidence-based forensics of how open-source projects on GitHub grow. | Open source |
| PawSociety | https://pawsociety.ch | `TODO(owner)` | — |
| Paperbase | https://paperbase.dev | `TODO(owner)` | — |
| Topoli | https://github.com/suchipizza/Topoli | `TODO(owner)` | Open source |
| BergBot | https://suchipizza.github.io/BergBot/en/ | Finds and audits Swiss hikes against live conditions: lifts, huts, passes and fire bans. | Tool |
| Cut the Crap | https://github.com/suchipizza/cut-the-crap | `TODO(owner)` | Open source |

**Instruction to agent:** for `TODO(owner)` descriptions, draft one line from each site's meta description or the repo README, and mark it in the data file with a `// DRAFT, confirm with owner` comment. List all drafts in the PR description. Do not invent features that aren't stated in the source.

### 4.3 Writing (`#writing`)

Articles Noémie wrote for other websites. Show them as a simple list, not cards: title (link, new tab), outlet name, date, and an optional one-line summary. Sort newest first. Group by outlet with small filter chips (`All · NativeFold · PawSociety · Paperbase`). The chips are optional. A plain list with an outlet label per item is acceptable.

Data file: `src/data/articles.ts` with fields `title`, `url`, `outlet` (`"NativeFold" | "PawSociety" | "Paperbase"`), `date` (ISO), `summary?`, `lang?` (`"en" | "de" | "fr"`). Show a small language badge when `lang` is not `en`.

Sources:
- NativeFold blog: nativefold.com blog. Include all articles.
- PawSociety: https://pawsociety.ch/de/blog. Include **mountain/hiking articles only**.
- Paperbase: paperbase.dev blog. Include all articles.

`TODO(owner)`: provide the final list of article URLs. **If not provided:** the agent may fetch the three blog index pages, propose candidates (for PawSociety, only clearly mountain-related posts), mark every entry `// DRAFT, confirm with owner`, and list them in the PR description. If the indexes can't be fetched, ship with an empty-state message ("Articles coming soon") and the data file schema in place.

### 4.4 Books (`#books`)

A shelf of favourite books, with covers and a playful animation (reference: the book section on https://www.darcyclarke.me/).

`TODO(owner)`: provide the book list. Ship with 3–4 placeholder entries using generic generated covers (title + author on a coloured background) so the layout and animation can be reviewed.

**Data file:** `src/data/books.ts` with fields `title`, `author`, `cover` (local path under `src/assets/books/`, preferred) or `isbn` (fallback: Open Library cover `https://covers.openlibrary.org/b/isbn/{ISBN}-L.jpg`, downloaded at build time if feasible, otherwise hot-linked with `loading="lazy"`), `url?` (where to find the book), `note?` (one short line on why she likes it), and `spineColor?` (hex; default derived from the palette).

**Presentation and animation:**
- Display books as **3D objects**: a cover face plus a visible spine and page edge, built with CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, a spine element rotated 90° on the Y axis).
- **Resting state:** books stand in a row on a "shelf" (a subtle horizontal line or shadow), each slightly rotated (≈ −20° to −30° rotateY) so the spine and cover both show.
- **Hover / focus:** the book lifts (`translateY(-8px)`), rotates to face the viewer (rotateY → 0°), and a soft shadow grows. Duration ≈ 300–400ms with an ease-out curve. Neighbours stay still.
- **Click / tap:** shows the note (if any) and the link in a small popover or an expanding caption under the shelf. Must work on touch (tap toggles), with keyboard (Enter/Space), and close with Esc or a click outside.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, render covers flat in a grid with no transforms or transitions. The note and link stay accessible.
- **Mobile:** horizontally scrollable shelf with `scroll-snap`, or a 2–3 column grid. Hover effects become the tap state.
- Each book is a `<button>` or link with an accessible name of the form `"{Title} by {Author}"`. Cover images use `alt=""` because the accessible name carries the information.
- The pure-CSS transform approach is required. No WebGL or animation libraries.

### 4.5 Contact (`#contact`)

- **Email:** `noemie.rakotomalala@nativefold.com` as a `mailto:` link, with a small "copy" button that copies the address and shows a "Copied" confirmation for 2s (`navigator.clipboard` in try/catch, falling back to selecting the text).
- **Languages:** "I speak French, English, German and Malagasy." Render this as text, optionally with small pill badges.
- **Social:** LinkedIn (https://www.linkedin.com/in/noemie-rkt/) and GitHub (https://github.com/suchipizza) as clickable logo buttons:
  - ≥ 40×40px hit target, `aria-label="Noémie on LinkedIn"` / `"Noémie on GitHub"`, open in a new tab.
  - Monochrome icons in the text colour that switch to the accent colour on hover/focus.
- No contact form (no backend).

### 4.6 Footer

One line: `© {current year} Noémie Rakotomalala · Built in Zürich`, plus the theme toggle (duplicate is fine) and a "Back to top" link.

---

## 5. Dark mode

- **Default:** follows `prefers-color-scheme`. **Dark is the designed-first theme.** Light mode must also look intentional.
- **Toggle** in the nav (sun/moon icon, `aria-label="Switch to light/dark theme"`, `aria-pressed`). Persist the choice in `localStorage` key `theme` (`"light" | "dark"`), and wrap every read and write in try/catch. Without a stored choice, follow the system.
- **No flash of the wrong theme:** an inline `<script>` in `<head>` sets `data-theme` on `<html>` before first paint.
- Implement all colours as CSS custom properties on `:root[data-theme="dark"]` and `:root[data-theme="light"]`, with a `prefers-color-scheme` fallback when no attribute is set.
- Set `color-scheme: dark` / `light` accordingly so form controls and scrollbars match.

---

## 6. Visual design

**Direction:** simple and calm, with the colour accents of https://trigger.dev/: a near-black charcoal background, a single vivid **lime/"electric green"** accent used sparingly, and a secondary **violet** accent for small details. Lots of whitespace, thin 1px borders, and slightly rounded corners. No heavy gradients or stock illustrations.

**Agent instruction:** inspect trigger.dev's CSS to sample their actual accent hexes and adjust the tokens below to match, while keeping the contrast requirements in §7. Don't copy their logo, illustrations or layout. Only the palette feeling is wanted.

**Starting tokens:**

| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | `#121317` | `#FAFAF7` | Page background |
| `--surface` | `#1A1B1F` | `#FFFFFF` | Cards, popovers |
| `--border` | `#2A2B31` | `#E4E4DF` | 1px borders, dividers |
| `--text` | `#E8E8EA` | `#18181B` | Body text |
| `--text-muted` | `#9A9BA3` | `#5B5C63` | Meta, dates, labels |
| `--accent` | `#A8FF53` (lime) | `#3F7A00` (darkened lime, for contrast on light) | Links on hover, active nav, focus rings, highlights |
| `--accent-2` | `#826DFF` (violet) | `#5B44E0` | Tags, small decorative details |
| `--accent-ink` | `#121317` | `#FFFFFF` | Text placed on an accent background |

- **Lime is a highlight, not a fill.** Use it for underlines, the active nav item, the focus ring, the photo ring, and one or two small elements per section. Never use it for body text on a light background.
- **Typography:** sans-serif headings and body in **Geist** (or **Inter** as a fallback), with **Geist Mono / JetBrains Mono** for small labels (dates, tags, section eyebrows such as `// projects`). Body text 17–18px, line-height 1.6, max text width ≈ 68ch. The H1 is ≈ 2.5–3rem on desktop.
- **Section headers:** a small monospace eyebrow in `--accent` (e.g. `01 / projects`) above a plain heading.
- **Cards:** `--surface` background, 1px `--border`, radius 12px. On hover, the border shifts toward `--accent` at partial opacity and the card lifts by 2px.
- **Links:** text colour with an underline in `--accent`. On hover, the text turns `--accent` (dark) or the underline thickens (light).
- **Background detail (optional):** a very faint dot grid or a soft radial glow of `--accent-2` at low opacity behind the hero. Skip it if it hurts contrast or performance.
- **Layout:** centred column, max-width ≈ 960px for grids and ≈ 680px for prose, with 16px side gutters on mobile and no horizontal scroll at 320px width.

---

## 7. Quality requirements

**Accessibility (WCAG 2.2 AA):**
- Body text contrast ≥ 4.5:1 in both themes. Verify the accent colours wherever they carry text.
- Visible `:focus-visible` rings (2px `--accent`, offset 2px). The whole page is keyboard-navigable, with a "Skip to content" link.
- Semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`) and correct heading order (one H1).
- All motion respects `prefers-reduced-motion`.
- External links indicate that they open in a new tab (icon + visually hidden text).

**Performance:**
- Lighthouse ≥ 95 for Performance, Accessibility, Best Practices and SEO (mobile).
- Total JS shipped < 10 KB gzipped (excluding the future gary.js).
- Images are optimised (AVIF/WebP), lazy-loaded below the fold, and have explicit dimensions (CLS ≈ 0).
- No third-party trackers, analytics or cookies. `TODO(owner)`: if analytics are wanted later, use a privacy-friendly option (e.g. Plausible or GoatCounter), added as a separate change.

**SEO / sharing:**
- `<title>`: "Noémie Rakotomalala — AI-native software builder". Include a meta description, canonical URL and `lang="en"`.
- Open Graph and Twitter card tags, with a generated 1200×630 OG image (name + one-liner on the dark palette).
- Favicon set (SVG + PNG + apple-touch-icon), a simple "N" monogram in lime on charcoal.
- `sitemap.xml` (via `@astrojs/sitemap`) and `robots.txt`.
- JSON-LD `Person` schema with `name`, `jobTitle`, `address` (Zürich, CH), `sameAs` (LinkedIn, GitHub) and `knowsLanguage`.

**Browser support:** the last two versions of Chrome, Safari, Firefox and Edge, plus iOS Safari 16+.

---

## 8. Project structure

```
/
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ images/            # noemie.jpg (TODO owner), og.png
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ CNAME              # only if a custom domain is provided
├─ src/
│  ├─ assets/books/      # book cover images
│  ├─ components/        # Nav, ThemeToggle, ProjectCard, ArticleList, Bookshelf, Book, SocialLinks, CopyEmail
│  ├─ data/              # projects.ts, articles.ts, books.ts, site.ts (name, email, links, languages)
│  ├─ layouts/Base.astro
│  ├─ pages/index.astro
│  ├─ pages/404.astro
│  └─ styles/global.css  # tokens, reset, typography
├─ astro.config.mjs
├─ README.md
└─ PRD.md
```

- All personal data (email, links, languages) lives in `src/data/site.ts`. No hard-coded strings are scattered across components.
- Each data file exports a typed array with a TypeScript interface, so adding an item is a one-object edit.

---

## 9. Hook for gary.js (placeholder only)

- `src/data/site.ts` contains `garyJs: { enabled: false, src: "" }`.
- When enabled, `Base.astro` adds `<script src={src} defer>` before `</body>`. Nothing else is required now.
- Reserve no layout space for it. Gary is an overlay.

---

## 10. Out of scope

- Building or styling gary.js itself.
- A blog engine or on-site articles (Writing links out only).
- A CMS, contact form, newsletter, comments or analytics.
- Internationalisation. The site is English-only for now.

---

## 11. Acceptance criteria

1. The site builds with `npm run build` with zero errors and deploys automatically to GitHub Pages on push to `main`. The live URL is reported in the PR or final message.
2. All five sections render in order. Nav links scroll to the correct anchors, and the active section is highlighted.
3. The theme defaults to the system setting, the toggle switches and persists, there is no flash on reload, and both themes pass contrast checks.
4. All links listed in §4 are present, correct and open in a new tab (except in-page anchors and `mailto:`).
5. LinkedIn and GitHub appear as clickable logo buttons with accessible labels, both under the bio and in Contact.
6. The email copy button works and shows confirmation.
7. The bookshelf shows 3D covers with the hover/focus lift-and-turn animation, works on touch and keyboard, and degrades to a flat grid under reduced motion.
8. Adding a project, article or book requires editing only its data file. The README documents how.
9. Lighthouse mobile scores are ≥ 95 in all four categories. There is no horizontal scroll at 320px width.
10. Every `TODO(owner)` and `DRAFT` item is listed in the final PR description, so Noémie can fill them in.

---

## 12. Inputs needed from Noémie

- [ ] Profile photo (square, ≥ 400×400px)
- [ ] Book list: title, author, optional ISBN or cover image, optional one-line note
- [ ] Article list (or approval of the agent's drafted list), with PawSociety restricted to mountain articles
- [ ] One-line descriptions for PawSociety, Paperbase, Topoli and Cut the Crap (or approval of the drafts)
- [ ] Repo name and optional custom domain
