# Analysis and proposals

Account for every finding and its proposed remedy in the completed retro, including findings that warrant no persistent change. For each finding:

1. State the observed behavior and cite the relevant files, logs, or session events. Compare the retro's claim with available primary evidence from the coding session.
2. Trace the behavior to its cause. Separate symptoms, verified causes, hypotheses, and open questions. Check whether instructions, tool use, configuration, or an existing safeguard contributed. Mark missing evidence and leave the cause open when the evidence is insufficient.
3. Classify the finding independently by cause. Use the closest categories: missing technical safeguard, conflicting or faulty agent instructions, inadequate process or worktree isolation, incorrect tool use, missing automated tests, unsuitable workflow, missing documentation, inefficient tool or test calls, flawed review strategy, or other. Use “undetermined” where needed.
4. Assess recurrence risk and impact. Identify the conditions under which the same cause can produce another failure and check why existing safeguards would miss it. Defer a persistent change if the evidence supports only an isolated incident with no reusable remedy.
5. Evaluate the retro's remedy against that class of failures, existing safeguards, and project constraints. Keep or refine its mechanism if it covers the class at the smallest applicable scope. Repair or consolidate the existing rule or check where it is maintained whenever possible. Use incident details to explain the evidence and use affected files or components to specify implementation scope. Define when the remedy applies using the conditions that let the failure recur.
6. Develop your own remedy only if the retro offers none or its proposal still leaves a material failure path, exceeds the needed scope, or is infeasible after refinement. State the gap and research the most effective persistent fix for the class of failures. Check the project's architecture, build, tests, CI, and environment. Consult current primary documentation when tool behavior matters. Check for an existing capability before proposing new code. Prefer, in order of suitability:
   1. Repair or reuse the mechanism at the cause.
   2. Add a deterministic safeguard using existing tests, lint, hooks, CI, sandboxing, or equivalent controls.
   3. Improve a tool workflow or add a reusable script when existing tools lack the needed behavior.
   4. Adjust a skill.
   5. Adjust project documentation.
   6. Adjust `AGENTS.md` or equivalent always-loaded context only when the other remedies cannot cover the need. Check first whether removing or correcting an existing rule solves the problem.
      Weigh coverage, effort, maintenance, and effects on other workflows. Prefer existing components and one source of truth. Compare trade-offs when a materially different alternative is viable. If the cause or remedy cannot be substantiated, propose deferring the change or gathering specific evidence.

Before recommending a persistent change, explain how it would prevent or detect both the observed failure and a plausible second case with different incident details but the same cause. Give an observable verification signal for each case. Use one check if it covers both. Revise or defer a remedy that fails this comparison.

Order findings by recurrence risk, impact, and expected benefit. Number them consecutively as `1`, `2`, `3`, and so on. Use those plain numbers in headings, tables, and follow-ups, and keep them stable through revision, approval, simulation, and reporting. Give each recommendation and alternative a distinct description so the human can select it. Specify enough scope for approval, including affected files or components, changes to behavior, and any needed workspace setup.

## Proposal format

**1. Short description**

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

| No. | Finding | Recommended solution | Effort | Risk | Decision |
| --- | ------- | -------------------- | ------ | ---- | -------- |
| 1   | …       | …                    | …      | …    | Pending  |

Ask for a decision on each proposal. If the user selects an alternative whose scope is underspecified, spell it out and ask for approval.
