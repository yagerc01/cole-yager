# Project: Cole M. Yager Personal Website

## What This App Does
A professional personal website — a supplement to LinkedIn. Showcases background,
experience, and projects. Multi-section single-page layout: Hero, About, Experience,
Projects, Contact.

## Project Structure
- index.html  — page structure and content
- style.css   — all styling (CSS custom properties for easy theming)
- script.js   — interactivity and scroll effects
- assets/     — images, icons (to be created)
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
- CSS custom properties (--color-*, --font-*) are the single source of truth for theming
- Design preferences TBD — see decisions.md in Obsidian for choices made

## Known Decisions
- Separate CSS file (vs single HTML) — better for a real multi-file website
- CSS custom properties for all tokens so theme changes are one-line edits
- Sections: Hero, About, Experience, Projects, Contact — content TBD
