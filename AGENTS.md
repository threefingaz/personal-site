# Repository Guidelines

## Project Structure & Module Organization
- Root is a static site entrypoint: `index.html`, `styles.css`, and `script.js`.
- Subprojects live in folders like `work/`, `portfolioV19/`, `portfolioV24/`, `letters/`, `banki/`, `grcropper/`, and `multiply/`.
- Shared assets and media are in `resources/` and `static/` (fonts, icons, images, compiled bundles).
- Third-party or generated files exist under `letters/bower_components/` and `*/static/`; avoid editing these directly unless there is no source alternative.

## Build, Test, and Development Commands
- This repo is primarily prebuilt static files; there is no build toolchain checked in.
- Local preview (simple static server):
  - `python3 -m http.server 8000` then open `http://localhost:8000/`.
- You can also open specific pages directly (for example `portfolioV19/index.html`) for quick checks.

## Coding Style & Naming Conventions
- Match the file you edit: HTML and CSS mostly use 4-space indents, while `script.js` uses 2 spaces.
- Keep CSS custom properties in `styles.css` grouped under `:root` when adding new theme values.
- Use descriptive, kebab-case file names for new assets (for example `project-preview.png`).
- Avoid reformatting minified bundles in `*/static/` and keep changes scoped to the source HTML/CSS/JS files.

## Testing Guidelines
- There are no automated tests in this repository.
- Manual checks are expected: load the affected page in a browser, verify layout, links, and hover/scroll behaviors.
- For visual changes, spot-check at least desktop and one mobile width.

## Commit & Pull Request Guidelines
- Recent history uses short, imperative summaries (for example `H1 fix`, `Copy changes`).
- PRs should include a clear description, list the pages touched, and add screenshots for visual updates.
- Link related issues or tickets when applicable.

## Configuration & Deployment Notes
- The site is hosted via GitHub Pages; `CNAME` defines the custom domain.
- Keep external analytics or embed snippets (such as PostHog in `index.html`) intact unless the change is intentional.
