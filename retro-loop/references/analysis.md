# Analysis and proposals

Account for every finding and its proposed remedy in the completed retro, including findings that warrant no persistent change. For each finding:

1. State the observed behavior and cite the relevant files, logs, or session events. Compare the retro's claim with available primary evidence from the coding session.
2. Trace the behavior to its cause. Separate symptoms, verified causes, hypotheses, and open questions. Check whether instructions, tool use, configuration, or an existing safeguard contributed. Mark missing evidence and leave the cause open when the evidence is insufficient.
3. Classify the finding independently by cause. Use the closest categories: missing technical safeguard, conflicting or faulty agent instructions, inadequate process or worktree isolation, incorrect tool use, missing automated tests, unsuitable workflow, missing documentation, inefficient tool or test calls, flawed review strategy, or other. Use “undetermined” where needed.
4. Assess recurrence risk and impact. Inspect existing safeguards and whether they run where the failure occurs. A one-off issue that cannot be usefully generalized warrants no persistent change.
5. Evaluate the retro's remedy against the evidence, existing safeguards, and project constraints. If it addresses the cause with a suitable scope, keep its mechanism and make it easy for the user to assess. Explain in plain language what would change, where it would take effect, and how to verify it. Clarify or narrow the proposal where that is enough.
6. Develop your own remedy only if the retro offers none or its proposal still leaves a material failure path, exceeds the needed scope, or is infeasible after refinement. State the gap and research the most effective persistent fix for that finding. Check the project's architecture, build, tests, CI, and environment. Consult current primary documentation when tool behavior matters. Check for an existing capability before proposing new code. Prefer, in order of suitability:
   1. Repair or reuse the mechanism at the cause.
   2. Add a deterministic safeguard using existing tests, lint, hooks, CI, sandboxing, or equivalent controls.
   3. Improve a tool workflow or add a reusable script when existing tools lack the needed behavior.
   4. Adjust a skill.
   5. Adjust project documentation.
   6. Adjust `AGENTS.md` or equivalent always-loaded context only when the other remedies cannot cover the need. Check first whether removing or correcting an existing rule solves the problem.
   Weigh coverage, effort, maintenance, and effects on other workflows. Prefer existing components and one source of truth. Compare trade-offs when a materially different alternative is viable. If the cause or remedy cannot be substantiated, propose deferring the change or gathering specific evidence.

Order findings by recurrence risk, impact, and expected benefit. Assign stable IDs. Label recommendations and alternatives so the human can select one. Specify enough scope for approval, including affected files or components, changes to behavior, and any needed workspace setup.

## Proposal format

**Finding #ID: Short description**

- **Observation** — What happened.
- **Cause** — Why it happened, classification, and recurrence risk.
- **Evidence** — Files, logs, or session events, with gaps called out.
- **Recommended solution** — The remedy in plain language. Explain any material change to the retro proposal or why the finding should be deferred.
- **Alternative** — A viable alternative and its trade-offs, when applicable.
- **Technical implementation** — Affected components, behavior, and scope.
- **Persistence** — How the remedy remains effective across sessions, if applicable.
- **Verification** — The behavior and checks that would demonstrate effectiveness.
- **Effort and risks** — Cost, side effects, and maintenance.

End with the decision table. Use one row per finding, including any recommendation to defer.

| ID | Finding | Recommended solution | Effort | Risk | Decision |
|----|---------|----------------------|--------|------|----------|
| 1 | … | … | … | … | Pending |

Ask for a decision on each proposal. If the user selects an alternative whose scope is underspecified, spell it out and ask for approval.
