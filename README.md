# R/Pharma 2026 AI Keynote

HTML slide deck for Jeremy Wildfire's R/Pharma 2026 keynote.

Published deck: https://obot-claw.github.io/RPharma2026-AIKeynote/

Working frame:

1. **Historical context** — how clinical trial pipelines shifted from company-specific SAS macro libraries to hybrid SAS/R/Python workflows and open frameworks with company-specific customization.
2. **SafetyGraphics and GSM** — open, shareable, pre-competitive frameworks for safety monitoring, RBQM, and statistical monitoring.
3. **Agentic engineering** — the emerging shift from code assist toward bounded AI workers that help with clinical operations workflows across study setup, conduct, closeout, and submission.

Current draft notes are in `notes/keynote-direction-2026-06-06.md`. The latest source dictation transcript cuts off mid-thought during the transition into agentic AI, so the final section is intentionally marked as draft scaffolding.

Open `index.html` locally or publish with GitHub Pages to review the current draft.


## Publishing

The deck is a static HTML/CSS/JS site. GitHub Pages is published by `.github/workflows/publish-pages.yml` on pushes to `main`, and can also be run manually with `workflow_dispatch`.


## Release cadence

Each meaningful slide update gets an incremental GitHub release: `v0.1`, `v0.2`, `v0.3`, etc. The title slide should link to the current release and show the release date.

Visual assets are staged under `assets/screenshots/` and `assets/images/`; the image transition plan lives in `docs/visual-asset-plan.md`.
