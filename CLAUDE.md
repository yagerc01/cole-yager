# Project: Cole M. Yager Personal Website

## What This App Does
A professional personal website — a supplement to LinkedIn. Showcases background,
experience, and projects with some personality. Multi-section single-page layout.

## Sections
- Hero — big name, eyebrow title, tagline, credential stat bins, CTA buttons
- About — bio + headshot
- Experience — reverse-chron role list
- Projects — card grid
- Travel & Where I've Been — lived/visited lists + map (Leaflet.js, backlogged)
- Outside of Work (Hobbies) — hobby cards, concert ticker (backlogged)
- Contact — email, LinkedIn, GitHub

## Design System
- **Colors**: navy #0B1F3A (primary), blue #1D6FA4 (links/accents),
  pink #F4B8C1 (cherry blossom — personality accent), white bg, #F4F7FB surface
- **Typography**: Playfair Display (headings) + Inter (body)
- **Tone**: mostly professional, some personality
- **Style**: clean, minimal, no frameworks

## Project Structure
- index.html  — all page structure and content
- style.css   — all styles (CSS custom properties — change tokens in :root to retheme)
- script.js   — interactivity (scroll effects, etc.)
- assets/     — headshot, logos, resume PDF (to be populated)
- backlog.md  — running feature/content backlog
- README.md   — project documentation
- CLAUDE.md   — this file
- error-log.md — running log of errors and fixes

## Obsidian Notes Location
Mac: /Users/coleyager/Documents/Cole'sBrain/Projects/cole-yager/
Files to maintain there: dev-log.md, decisions.md

## Deployment
- GitHub repo: git@github.com:yagerc01/cole-yager.git
- Live URL: TBD — to be configured in Netlify
- Auto-deploys on push to main

## Conventions
- Content lives in index.html, styles in style.css, interactivity in script.js
- No frameworks, no build tools — vanilla HTML/CSS/JS only
- All design tokens (colors, fonts) are CSS custom properties in :root — change there only
- Cherry blossom pink (#F4B8C1) is a personality accent — use sparingly (underlines,
  borders, hover states, decorative elements). Not for primary text or backgrounds.
- Refer to backlog.md before starting new features

## File Sync Convention
- `backlog.md` is maintained in the project root AND mirrored to Obsidian at:
  `/Users/coleyager/Documents/Cole'sBrain/Projects/cole-yager/backlog.md`
- Whenever backlog.md is updated, copy it to Obsidian too (cp command or Write to both paths)
- `travel-reference.md` lives only in the project root — it is the master travel source of truth

## Key Links
- LinkedIn: https://www.linkedin.com/in/cole-m-yager/
- GitHub: https://github.com/yagerc01
- Email: cole.yager.m@gmail.com
