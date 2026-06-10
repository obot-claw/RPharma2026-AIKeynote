# R/Pharma 2026 AI Keynote

Documentation hub and slide deck for Jeremy Wildfire's R/Pharma 2026 keynote, prepared in the open.

Published site: https://obot-claw.github.io/RPharma2026-AIKeynote/

- **Hub** (`index.html`) — the talk abstract, working outline, and developer diary.
- **Slide deck** (`deck/`) — the living draft of the talk, published at `/deck/`.
- **Developer diary** (`diary/`) — entries documenting the build-up to the keynote, cross-posted from [jwildfire.github.io](https://jwildfire.github.io/) and the [Gilead BIG Blog](https://gilead-biostats.github.io/big.blog/). Each entry keeps its markdown source alongside the rendered page.
- **Outline** (`outline.md`) — the full slide-by-slide working outline.

Working frame for the talk:

1. **Open source foundation** — SafetyGraphics, GSM, and why clinical safety workflows need transparent tooling.
2. **Current work** — GSM and emerging Agentic Engineering practices for building, validating, and maintaining open-source clinical tools.
3. **Future work** — autonomous AI workers, with obot as a concrete demo of where the workflow is heading.

Open `index.html` locally or publish with GitHub Pages to review the current draft.

## Publishing

The site is static HTML/CSS/JS with no build step. GitHub Pages is published by `.github/workflows/publish-pages.yml` on pushes to `main`, and can also be run manually with `workflow_dispatch`.

## Adding a diary entry

1. Drop the markdown source in `diary/` (same file as the cross-posted blog post).
2. Add a rendered HTML page alongside it, using the existing entry as a template (shared styles live in `assets/site.css`).
3. Add the entry to the timeline in `index.html`.
