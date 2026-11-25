# Implementation and reporting

Before writing, confirm the accepted proposal and its target. In Git, verify the repository root, worktree path, branch or detached commit, current status, and approved paths against the intended scope. Preserve pre-existing edits. Use a separate worktree for concurrent sessions and follow the repository's branch rules. If the target differs or the required setup exceeds the accepted scope, pause and ask. Keep simulation edits in the disposable environment and project edits in the approved workspace.

Make the smallest change that addresses the accepted cause. Prefer existing components and follow project conventions. Add only guards, tests, or documentation needed to deliver the approved remedy. Keep unrelated fixes out. Commits, pushes, and production changes are outside this workflow unless separately and explicitly requested. Check the proposed change against the approved scope before and after writing.

Run the agreed verification in the project context. Check the actual diff, the prevention or detection behavior, and relevant regressions. Distinguish a simulation pass from project verification. If a check fails or cannot run, record the result and its impact. Request a new approval before making any necessary change outside the accepted solution or scope.

## Final report

Give every finding a row. Distinguish implementation status from simulation status and verification. Include rejected, deferred, blocked, and unverified findings.

| No. | Finding | Solution | Implemented | Simulated | Result                                       |
| --- | ------- | -------- | ----------- | --------- | -------------------------------------------- |
| 1   | …       | …        | Yes         | Yes       | Passed in simulation and verified in project |
| 2   | …       | …        | Yes         | No        | Not simulated. Project verification passed   |
| 3   | …       | …        | No          | No        | Rejected                                     |

List the files actually changed, technical mechanisms added or repaired, checks and observed results, unresolved findings, known limitations, and remaining risks. Claim a demonstrated improvement only where the checks support it.
