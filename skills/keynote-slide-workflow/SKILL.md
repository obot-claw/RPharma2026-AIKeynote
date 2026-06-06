---
name: keynote-slide-workflow
description: Use when updating the R/Pharma 2026 AI Keynote deck, adding screenshots/images, publishing GitHub Pages, or cutting incremental slide releases v0.1, v0.2, etc.
---

# Keynote Slide Workflow

## Before editing

- Check branch, dirty state, and active PR.
- Determine next release tag by reading GitHub releases; increment minor: `v0.1`, `v0.2`, `v0.3`.
- If updating slides, plan the release note before editing.

## Release update steps

1. Update slide content/assets.
2. Update the title slide release link/date.
3. If adding screenshots/images, place them in `assets/screenshots/` or `assets/images/` and document source/use in `docs/visual-asset-plan.md`.
4. Commit and push the branch.
5. Create GitHub release for the new tag against the release commit.
6. Run `.github/workflows/publish-pages.yml` with the release branch/ref.
7. Verify public Pages deck, CSS, JS, and release link.
8. Comment on the active PR with release, Pages, checks, and known gaps.

## Guardrails

- Do not publish private/client screenshots without explicit approval.
- Do not skip release increments for meaningful slide changes.
- Do not merge draft PRs unless Jeremy explicitly approves.
