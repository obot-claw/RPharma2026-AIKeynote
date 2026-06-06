# R/Pharma 2026 AI Keynote Outline

Working title: **Agentic AI for Clinical Trial Operations: What Open Source Can Do Next**

Target runtime: ~40 minutes

## Draft thesis

Agentic AI can streamline clinical trial operations and accelerate study data analysis across setup, conduct, closeout, and regulatory submission — but the highest-value path is open, inspectable, pre-competitive infrastructure with human-owned validation and accountability.

## Section 1 — History: open source and clinical trials (~10 minutes)

1. **Title** — Agentic AI for Clinical Trial Operations: What Open Source Can Do Next.
2. **Promise of the talk** — Connect clinical trials, open source, and agentic AI into a practical roadmap for R/Pharma.
3. **Clinical operations focus** — Setup, conduct, closeout, and submission all depend on faster, trustworthy study data analysis.
4. **The old model** — Every company maintained large internal SAS macro libraries and bespoke clinical reporting infrastructure.
5. **The hybrid era** — SAS remains important while R, Python, and open-source tools become part of the clinical trial pipeline.
6. **Open frameworks with local customization** — Pharmaverse-style ecosystems and company-specific extensions show how shared infrastructure can coexist with internal needs.
7. **SafetyGraphics** — Safety monitoring as an early proof point for open, reusable clinical review workflows.
8. **GSM** — RBQM and statistical monitoring as a broader framework for study quality and operations.
9. **Transition** — Clinical trial workflows are becoming software-shaped, open, and inspectable; that makes them better surfaces for agents.

## Section 2 — Current best practices: agentic engineering for GxP-ready clinical work (~15 minutes)

10. **What changed in the last few years** — LLMs moved from autocomplete/code assist toward bounded agentic work.
11. **The GSM anchor** — Use current GSM work as the practical example of open clinical operations infrastructure.
12. **Agentic engineering loop** — Issue → requirement → implementation → tests → rendered demo → PR → human review.
13. **Qualified and validated use cases** — Clinical AI work must be designed for GxP-ready evidence, not only developer productivity.
14. **Human ownership of AI-written code** — A person still owns requirements, interpretation, risk acceptance, and final accountability.
15. **Control and understanding** — Teams need to know what changed, why it changed, and what assumptions are embedded in the code.
16. **Evidence and documentation** — Tests, validation traces, demos, review notes, and linked decisions explain why the code is safe enough to use.
17. **Why this matters** — These workflows support medical research that affects real people, so rigor is part of the product.
18. **Current best-practice summary** — Agents can accelerate the work only when the process produces reviewable artifacts and defensible evidence.

## Section 3 — What comes next: obot, gsm.safety, and autonomous AI workers (~15 minutes)

19. **The next project** — Agentically combine SafetyGraphics and GSM into gsm.safety.
20. **Why this is a meaningful test** — Work expected to require significant human time may be achievable by Jeremy plus agents before the talk.
21. **From human-in-the-loop to delegated AI team** — Shift from tightly integrated code assist to a human-managed AI engineering team.
22. **obot as the demo thread** — GitHub issues, requirements, PM/design work, dev PRs, browser checks, memory, skills, and Telegram review loops.
23. **What the agents can own** — Draft requirements, create tasks, write tests, update docs, build demos, open PRs, summarize evidence.
24. **What Jeremy still owns** — Direction, scientific judgment, clinical/regulatory accountability, risk decisions, and final review.
25. **Show the work** — Demonstrate the process and artifacts, not just the final package.
26. **How far did we get?** — By October, report honestly on gsm.safety progress, wins, failures, and workflow lessons.
27. **Call to action** — Build open, auditable agentic systems where AI workers amplify expert clinical and statistical judgment.
28. **Q&A / links** — Repos, demos, contact information, and community invitations.

## Draft content notes

- Keep the talk grounded in clinical trial operations and study data analysis, not general AI excitement.
- Section 2 should be the largest section and will likely evolve substantially before October.
- Emphasize GxP-ready evidence, validation, and human accountability.
- Use SafetyGraphics/GSM as career/project anchors, but keep the main thesis broader: open-source clinical trial operations plus agentic AI.
- Use obot/gsm.safety as the forward-looking case study and demo thread.
- The deck will be built iteratively from Jeremy's dictation; this outline should be revised as he dictates concrete slides.
