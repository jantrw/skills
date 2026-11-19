# retro-loop

`retro-loop` turns proposals from Matt Pocock's `retro` skill into changes you can approve and verify. It checks the evidence and explains what each proposal would change and how you would verify it. If a proposal leaves a gap or reaches too far, `retro-loop` looks for a lasting fix, such as wiring an existing check into CI to catch the same mistake in future sessions.

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

Choose the same Agent Skills-compatible coding agent for both installations when prompted.

### 3. Run both skills in the same conversation

1. Invoke the `retro` skill using your agent's skill selector or invocation syntax. Wait for the retrospective report.
2. Invoke `retro-loop` in the **same conversation**. It requires the completed `retro` run and its findings.

## Approve changes and choose what to simulate

The agent presents numbered proposals with evidence, scope, and verification steps. Accept, reject, or request a revision for each proposal in your own words. You can refer to a proposal by ID, name, or a clear description.

Once those decisions are settled, the agent asks which accepted proposals to simulate. The option letters are shortcuts. Plain-language replies work too.

- “Simulate all the approved proposals.”
- “Simulate just the first two we approved.”
- “Skip simulation and implement the approved changes.”

The agent applies only approved changes. If a simulation fails, the affected proposal stays out of the project and the agent asks before revising or retrying. The final report records what changed, what was verified, and what remains open. See [SKILL.md](SKILL.md) for the workflow.
