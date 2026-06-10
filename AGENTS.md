# AGENTS.md - R/Pharma 2026 AI Keynote

This repo is an HTML-first slide deck. Treat slide updates as publishable releases.

## Release rule

- Every meaningful slide update gets a GitHub release: `v0.1`, `v0.2`, `v0.3`, etc.
- Update the title slide with the release tag link and release date before publishing.
- Publish GitHub Pages after the release commit.
- Comment on the active PR with release, Pages, and evidence links.

## Slide workflow

1. Edit slide content in `index.html`, styling in `style.css`, behavior in `script.js`.
2. Keep narrative notes in `notes/` and implementation plans in `docs/`.
3. Store future screenshots in `assets/screenshots/` and generated/illustrative images in `assets/images/`.
4. Prefer image-backed slides as the deck matures; keep text-heavy draft slides only until a screenshot or visual replaces them.
5. Verify the public Pages deck after each release with a cache-busted URL.

## Visual framework

- Screenshots should have descriptive names: `section-topic-source-date.png`.
- Add screenshot source/context in `docs/visual-asset-plan.md`.
- Use alt text for meaningful images.
- Avoid private screenshots unless Jeremy explicitly approves public use.

## Related skill

Use `skills/keynote-slide-workflow/SKILL.md` for release and slide-update procedure.
