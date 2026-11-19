# Agent Skills

Reusable skills for coding agents. Start with a session retrospective and turn a recurring mistake into a fix your project can verify, such as running an existing check in CI.

## Skills

| Skill | Use it when |
| --- | --- |
| [`retro-loop`](retro-loop/README.md) | A retrospective has surfaced improvements you want to refine, approve, and optionally test in isolation before applying them. |

## Quick start

Run these commands from your project with Node.js and `npx` available. Choose the same Agent Skills-compatible agent for both installations.

```sh
npx skills@latest add mattpocock/skills --skill retro --skill writing-for-agents
npx skills@latest add jantrw/skills --skill retro-loop
```

The first command installs Matt Pocock's `retro` skill and the writing guide it uses. [Matt Pocock's skills collection](https://github.com/mattpocock/skills)

1. Invoke `retro` using your agent's skill selector or invocation syntax and wait for the report.
2. Invoke `retro-loop` in the same conversation.
3. Decide which proposals to accept, reject, or revise. When asked separately about simulation, you can reply in your own words, for example, “Try the first two approved changes in isolation.”

## License

[MIT](LICENSE)
