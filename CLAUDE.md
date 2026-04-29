# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project: Cole M. Yager Personal Website

Professional personal website — a LinkedIn supplement. Single-page, vanilla HTML/CSS/JS, no build tools.

## Running Locally

```bash
open index.html          # simplest — works for most things
python3 -m http.server 8080  # use this when CDN resources (Leaflet tiles) aren't loading
```

No install step, no build step, no dependencies to manage.

## Architecture

Three files own everything:

- **`index.html`** — all content and page structure. Sections in order: Nav, Hero, About, Experience, Travel, Outside of Work (Hobbies + Side Projects subsection), Contact, Footer.
- **`style.css`** — all styles. Design tokens live in `:root` as CSS custom properties — retheme by editing there only.
- **`script.js`** — one feature: the Leaflet travel map, wrapped in an IIFE. Adding new interactivity goes here.

### Design tokens (`:root` in `style.css`)
| Token | Value | Role |
|---|---|---|
| `--color-navy` | `#0B1F3A` | Headings, primary text, primary buttons |
| `--color-blue` | `#1D6FA4` | Links, company names, accents |
| `--color-pink` | `#F4B8C1` | Cherry blossom — personality accent only |
| `--font-heading` | Playfair Display | All `h1`–`h3` |
| `--font-body` | Inter | All body text |

Pink is intentionally used sparingly: section underlines (`h2::after`), card hover borders, map marker strokes, arrow bullets. Don't use it for primary text or large fills.

### Travel map (`script.js`)
Leaflet 1.9.4 via CDN (no SRI hashes — they caused silent load failures, do not re-add them). CartoDB Positron tile layer. Two `circleMarker` datasets: `homeCities` (pink) and `visitedPlaces` (navy). To add a location: append to the correct array in `script.js` AND update `travel-reference.md` AND the `<ul class="places-list">` in the Travel section of `index.html`.

## Content Reference Files

- **`travel-reference.md`** — master source of truth for all travel locations. Edit here first, then sync to the map and the HTML list.
- **`backlog.md`** — running feature/content backlog. Must be mirrored to Obsidian on every update:
  ```bash
  cp backlog.md "/Users/coleyager/Documents/Cole'sBrain/Projects/cole-yager/backlog.md"
  ```
- **`resume.md`** — markdown version of Cole's resume; use as reference when updating Experience or hero stat bins.

## Deployment

- Auto-deploys to Netlify on push to `main`
- Live URL: TBD (not yet configured in Netlify)
- GitHub: `git@github.com:yagerc01/cole-yager.git`

## Key Conventions

- **Projects is a subsection**, not a top-level nav item — it lives inside the "Outside of Work" section as "Side Projects."
- **Obsidian notes** live at `/Users/coleyager/Documents/Cole'sBrain/Projects/cole-yager/` — update `dev-log.md` and `decisions.md` there at the end of sessions.
- **`error-log.md`** in project root — log any errors encountered and fixed (date, description, root cause, fix).
- Institution logos for hero stat bins go in `assets/logos/`; headshot is `assets/headshot.jpg`.
