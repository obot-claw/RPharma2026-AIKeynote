# R/Pharma 2026 AI Keynote Outline

Working title: **From Open Source Safety Graphics to Autonomous AI Workers**

Target runtime: ~40 minutes

## Section 1 — Open source foundation (~10 minutes)

1. **Title** — From Open Source Safety Graphics to Autonomous AI Workers.
2. **Promise of the talk** — Show the path from safety visualization tooling to AI-assisted clinical software engineering.
3. **Why safety graphics matter** — Clinical teams need transparent, repeatable, inspectable safety review workflows.
4. **SafetyGraphics origin** — Standardize safety review displays and make interactive review accessible in R.
5. **The SafetyGraphics pattern** — Data standards, reusable renderers, examples, and extensible workflows.
6. **GSM motivation** — Move from one-off dashboards toward a broader reporting and quality-monitoring framework.
7. **Open-source operating model** — Public repos, examples, documentation, and community feedback as quality infrastructure.
8. **Transition** — Open source created the surface area; now AI changes how we build and maintain it.

## Section 2 — Current work: GSM + Agentic Engineering (~15 minutes)

9. **Current GSM focus** — Reusable reporting workflows, safety summaries, static + interactive outputs, and package automation.
10. **From dashboards to pipelines** — Reports should be generated, reviewed, tested, and versioned like software.
11. **Agentic Engineering definition** — Humans set direction; agents execute bounded engineering loops with evidence.
12. **A concrete workflow** — Issue → requirements → implementation → tests → demo → PR → review.
13. **What works well** — Fast scaffolding, repetitive package work, documentation passes, GitHub automation, and demo generation.
14. **What still fails** — Vague requirements, hidden assumptions, untested UI behavior, and false progress reporting.
15. **Requirements as the contract** — Wikis, functional specs, and regression tests become the source of truth for agents.
16. **Browser-based validation** — UI refactors need rendered-page checks, not just static code review.
17. **Human feedback loop** — Interviews, grill-me questions, and concise Telegram prompts keep decisions moving.
18. **Agent workspace** — Memory, skills, heartbeats, dreams, and project pages become part of the engineering system.
19. **Quality bar** — Agents are useful only when outputs are inspectable, reproducible, and tied to evidence.
20. **Transition** — Today this is assisted engineering; next is autonomous workers with clearer boundaries.

## Section 3 — Looking forward: autonomous AI workers (~15 minutes)

21. **Future framing** — AI workers as persistent collaborators, not chatbots.
22. **What autonomous should mean** — Bounded goals, explicit permissions, durable memory, auditable actions, and rollback paths.
23. **obot demo setup** — A dedicated open-source development agent working through GitHub, Telegram, browser QA, and project reporting.
24. **Worker anatomy** — Workspace, skills, cron/heartbeats, GitHub, browser, memory, and public reporting hub.
25. **Dreaming and reflection** — Offline synthesis can improve planning without pretending implementation happened.
26. **Guardrails** — Privacy, no unauthorized external writes, clear progress evidence, and human approval for promotion.
27. **Clinical software implications** — Agents can maintain examples, docs, tests, validation evidence, and release workflows.
28. **Where this could go** — Static and interactive safety displays aligned with submission outputs and continuous trial monitoring.
29. **Risks and open questions** — Qualification, accountability, model drift, audit trails, and organizational trust.
30. **Closing call to action** — Build open, auditable systems where AI workers amplify expert judgment.
31. **Q&A / links** — Repos, demos, and contact information.

## Draft content notes

- Keep Section 1 grounded in established open-source work.
- Keep Section 2 concrete with current GSM/package refactor examples.
- Keep Section 3 forward-looking but evidence-based; obot should be a working demo, not a magic claim.
