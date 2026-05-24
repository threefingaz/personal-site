# Simplify alnikitin.com Interim Landing

## Overview

Strip the current alnikitin.com landing page (`index.html`) to a minimal interim version: header (logo + contacts) and an intro section with new positioning copy. This is the interim state for ~5 weeks until the full 4-project portfolio rebuild launches around end of June 2026 (planning doc: `/Users/alnikitin/portfolio-coach/aleksei-portfolio-starter.html`). All existing CSS/typography is preserved — dead rules in `styles.css` are deferred to the June rebuild.

## Context (from discovery)

- **`index.html`** (369 lines): single static page. Sections to keep: `<head>` (PostHog + meta), `#top.content` wrapper, header grid (`.col-1-2` logo + `.col-2-4` contacts), `.intro` with H1/H2 copy only.
- **`script.js`** (240 lines): contains DOMContentLoaded init for animations + workplace hover + image sequences (all silently dead after section deletions, guarded by null checks), plus a scroll handler at lines 216-239 that references `.advice` and **will throw a TypeError** after `.advice` deletion because it's not null-guarded.
- **`styles.css`** (14.5KB): `.db-logo` class is `width: 1rem; display: inline` — fits body text well; in the larger H2 of `.intro` it will look comparatively small (visual review during verification).
- **No test framework** in the repo. Verification is manual browser checks (per `AGENTS.md`).
- **Deployment**: GitHub Pages via `CNAME` (alnikitin.com). Out of scope: subproject folders (`work/`, `portfolioV19/`, `portfolioV24/`, `letters/`, `banki/`, `grcropper/`, `multiply/`).

## Development Approach

- **Testing approach**: Manual verification — no automated test framework exists in this repo. Each task ends with a browser-based check.
- Complete each task fully before the next.
- Keep `styles.css` untouched. Dead rules accepted for the ~5-week interim.
- Minimal `script.js` change: delete only the broken scroll handler block (lines 216-239). Other now-dead code stays for the June rebuild.

## Solution Overview

Final page is a single screen, top to bottom:

1. **Header row** — initials SVG (left), email + LinkedIn + "Berlin, Germany" (right). Unchanged markup, unchanged classes.
2. **Intro section** — H1 `Hi, I'm Aleksei` + H2 with positioning copy and inline Deutsche Bank SVG logo. The graph hero (right column of `.intro`) is removed.

Everything below `.intro` (process, testimonials, work history, photo + CTA) is deleted.

## Technical Details

### New intro copy

```html
<section class="col-all copy">
    <h1>Hi, I'm Aleksei</h1>
    <h2>
        Staff product designer specializing in making serious software clear and polished.
        Combining five years at&nbsp;<svg class="db-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46">
            <path fill="currentColor" d="M39.69,39.67v204.11h204.09V39.67H39.69z M0,0h283.46v283.46H0V0z M62.36,215.43L170.08,68.04h51.02L113.38,215.43H62.36z" />
        </svg>&nbsp;Deutsche&nbsp;Bank with a modern, AI-augmented design workflow.
    </h2>
</section>
```

Constraints: no em-dashes; `&nbsp;` separation around the inline logo matches the current `.db` block convention.

### script.js block to remove (lines 216-239)

The variable lookups for `linksElement`, `itialsElement`, `introElement`, `adviceElement`, the `handleScroll` function body, the `window.addEventListener("scroll", handleScroll)` registration, and the initial `handleScroll()` call. Removing the whole block in one shot is cleaner than null-guarding.

## What Goes Where

- **Implementation Steps** (checkboxes): edits to `index.html` and `script.js`, plus manual browser verification commands.
- **Post-Completion** (no checkboxes): observations for the user to act on outside this session — visual judgment on inline DB logo size, deferring `styles.css` cleanup to the June rebuild.

## Implementation Steps

### Task 1: Strip index.html sections and replace intro copy

**Files:**
- Modify: `index.html`

- [x] Inside `.grid-container.intro`, remove the entire `<div class="graph-wrapper">` block (graph SVGs, `.me-line`, `.lettering`, `.with-me`, `.without-me`, graph-label x/y, animated curves).
- [x] Replace the H1 and H2 inside `<section class="col-all copy">` with the new copy (see Technical Details above), including inline `<svg class="db-logo">` next to "Deutsche Bank".
- [x] Delete entire `<div class="grid-container process">` block (4 numbered process steps).
- [x] Delete entire `<div class="grid-container testimonials">` block (chocolate + dev lead quotes).
- [x] Delete entire `<div class="grid-container work">` block: the "Right now at Deutsche Bank" paragraph, `.image-sequence` div, and all 6 `work-place` sections (Sber 2018–2021, Pik 2017–2018, Sbertech 2016–2017, Ru-Center 2015–2016, Action 2013–2015, Art. Lebedev 2011–2012).
- [x] Delete entire `<div class="grid-container advice">` block (photo `<picture>`, "Let's talk about how I can help" H2, book-meeting CTA with hover SVG, footer contacts).
- [x] verify (manual - orchestrator runs in final verification task)

### Task 2: Remove dead scroll handler from script.js

**Files:**
- Modify: `script.js`

- [ ] Delete `script.js` lines 216-239 (`const linksElement = ...` through the final `handleScroll();` call, inclusive).
- [ ] Verify in browser: reload `http://localhost:8000/` with DevTools console open. Confirm zero errors on initial load and zero errors when scrolling.

### Task 3: Final verification

- [ ] Desktop width: layout matches Solution Overview, no horizontal scroll, no visual artifacts where deleted sections used to be.
- [ ] Mobile width (≤ 555px and ≤ 680px breakpoints from `styles.css`): header collapses correctly, H2 wraps cleanly, inline DB logo stays visually attached to "Deutsche Bank".
- [ ] Links: clicking email opens mail client; clicking LinkedIn opens `linkedin.com/in/alnikitin-work` in new tab.
- [ ] DevTools console: no JS errors, no 404s for removed image sequences (sber, pik, etc. should never be requested now).
- [ ] PostHog snippet in `<head>` still present and not broken.
- [ ] Move plan: `mkdir -p docs/plans/completed && mv docs/plans/20260524-simplify-landing.md docs/plans/completed/`.

## Post-Completion

*No checkboxes — items for user judgment or deferred work.*

**Visual review (user judgment):**
- The `.db-logo` is `width: 1rem` — designed for body text. In the larger H2 of `.intro` it may appear undersized relative to the surrounding text. If it bothers you, add a one-off override in `styles.css` (e.g. `.intro .copy .db-logo { width: 0.7em; }`) at your discretion. Out of scope for this plan since you asked to leave styles alone.

**Deferred to June 2026 portfolio rebuild:**
- `styles.css` cleanup: rules for `.graph`, `.me-line`, `.lettering`, `.with-me`, `.without-me`, `.graph-wrapper`, `.work-place`, `.image-sequence`, `.work-period`, `.photo`, `.advice`, `.book-meeting`, `.line-hover`, `.sticky-b-l`, `.sticky-t-l`, `.fade`, the workplace-specific classes (`.sber`, `.pik`, `.sbertech`, `.rucenter`, `.action`, `.artlebedev`), `.db.fade`, `.testimonials`, `.process`, `.work` become unused. Leave for the rebuild.
- `script.js` cleanup: `animatePath`, `animateLettering`, `handlePathHover`, `createObserver`, workplace hover handlers, image sequence loop, book-meeting hover handlers all become unused. Leave for the rebuild.
- `resources/img/{sber,pik,sbertech,rucenter,action,artlebedev}/` image sequences are no longer referenced. Leave on disk — keeps git history simple; revisit during rebuild.

**Out of scope (won't change in this plan):**
- `<meta name="description">` text mentions "enterprise applications" — still accurate, no edit needed.
- Subproject folders untouched.
- No "looking for work" status added.
- No portfolio-coming-soon teaser added.
