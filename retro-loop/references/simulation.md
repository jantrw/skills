# Simulation

Simulate each selected, accepted improvement separately. Confirm that the scenario can run in a temporary directory, isolated worktree, or equivalent disposable environment using synthetic or otherwise authorized test data. Keep production systems, shared resources, unrelated workspaces, and other sessions out of reach. Check command side effects as well as file paths. If safe isolation is unavailable, explain why and ask whether to defer the finding, approve a safe alternative, or explicitly waive simulation for the unchanged proposal. Pause that finding until the human answers.

For each isolated run:

1. Define the failure, the expected signal, and the checks for likely side effects.
2. Reproduce the original failure on the unfixed baseline where feasible. Record setup, commands, and observed behavior. If reproduction is infeasible, identify the missing evidence and any comparable baseline that supports a conclusion.
3. Apply the accepted change inside the isolated environment. Repeat the scenario under comparable conditions and run the side-effect checks.
4. Record what changed, what was observed, and what the evidence supports.

| Result | Criterion |
|--------|-----------|
| **Passed** | The failure was prevented or reliably detected, supported by meaningful evidence. |
| **Failed** | The failure still occurred without effective prevention or detection, and the expected improvement was absent, or the change caused a regression. |
| **Partial** | The change reduced the problem but left a material failure path or inconsistent detection. |
| **Unverifiable** | Setup, reproduction, or available evidence could not support a conclusion. |

A pass clears the selected proposal for implementation within its accepted scope. For a failed, partial, or unverifiable outcome, stop that finding. Report the result, what failed or could not be established, which assumption was disproved or remains unverified, and what additional change or evidence might help. Ask “Should I revise the solution and simulate it again?” Wait for an explicit reply before revising or retrying. A revised remedy or wider scope returns to proposal approval and a separate simulation decision. A retry of the unchanged remedy requires explicit authorization for that attempt. Keep retries finite by stopping after each attempt that does not pass. If the human declines or defers a retry, close the finding without implementation.
