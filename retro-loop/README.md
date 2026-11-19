# retro-loop

`retro-loop` turns findings from Matt Pocock's `retro` skill into changes you can approve and verify. Coding agents can repeat the same mistakes across sessions, and adding a rule to `AGENTS.md` every time makes it harder to see which rules matter. `retro-loop` checks the evidence, looks for the cause, and prefers a fix that can catch the mistake again, such as wiring an existing check into CI.

You decide what changes. You can also ask the agent to reproduce a failure in isolation and check that the proposed fix catches it before it touches your project.

## Quick start

Run the install commands from your project with Node.js and `npx` available.

### 1. Install Matt Pocock's retro skill

This uses [Matt's skills.sh install command](https://github.com/mattpocock/skills#installation-30-second-setup) with a filter for `retro` and the `writing-for-agents` skill it uses.

```sh
npx skills@latest add mattpocock/skills --skill retro --skill writing-for-agents
```

### 2. Install retro-loop

```sh
npx skills@latest add jantrw/skills --skill retro-loop
```

Choose your coding agent when prompted.

### 3. Run both skills in the same conversation

1. Invoke `$retro` in Codex, or use your agent's skill selector. Wait for the retrospective report.
2. Invoke `$retro-loop` in the **same conversation**. It requires the completed `retro` run and its findings.

## Approve changes and choose what to simulate

The agent presents numbered proposals with evidence, scope, and verification steps. Reply with a decision for each proposal, for example, “Accept #1, reject #2, and revise #3.”

Once those decisions are settled, the agent asks which accepted proposals to simulate:

| Option | What happens |
| --- | --- |
| **A** | Simulate every accepted proposal separately. |
| **B** | Simulate the accepted proposals you select, for example, “B, #1.” |
| **C** | Implement the accepted proposals directly and run the agreed checks. |

The agent applies only approved changes. If a simulation fails, the affected proposal stays out of the project and the agent asks before revising or retrying. The final report records what changed, what was verified, and what remains open. See [SKILL.md](SKILL.md) for the workflow.
