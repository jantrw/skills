# Agent Skills

Reusable skills for coding agents.

[![Latest release](https://img.shields.io/github/v/release/jantrw/skills?label=release)](https://github.com/jantrw/skills/releases/latest)
[![Checks on main](https://github.com/jantrw/skills/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/jantrw/skills/actions/workflows/check.yml)
[![Codex](https://img.shields.io/badge/Codex-3F4A6B)](https://developers.openai.com/codex/skills)
[![Claude Code](https://img.shields.io/badge/Claude_Code-A34831?logo=claude&logoColor=white)](https://code.claude.com/docs/en/skills)
[![Cursor](https://img.shields.io/badge/Cursor-303742?logo=cursor&logoColor=white)](https://cursor.com/docs/context/skills)
[![OpenCode](https://img.shields.io/badge/OpenCode-57437B?logo=opencode&logoColor=white)](https://opencode.ai/docs/skills)
[![Goose](https://img.shields.io/badge/Goose-365561)](https://goose-docs.ai/docs/guides/context-engineering/using-skills/)
[![Hermes Agent](https://img.shields.io/badge/Hermes_Agent-3C526A)](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills)
[![Oh My Pi](https://img.shields.io/badge/Oh_My_Pi-57437B)](https://github.com/can1357/oh-my-pi/blob/main/docs/config-usage.md)
[![T3 Code](https://img.shields.io/badge/T3_Code-465272)](https://github.com/pingdotgg/t3code/blob/main/docs/user/composer.md#commands-and-skills)
[![Gemini CLI](https://img.shields.io/badge/Gemini_CLI-33558C?logo=googlegemini&logoColor=white)](https://geminicli.com/docs/cli/skills/)
[![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-443F68?logo=githubcopilot&logoColor=white)](https://docs.github.com/en/copilot/concepts/customizations/agent-skills)
[![OpenClaw](https://img.shields.io/badge/OpenClaw-844D42)](https://docs.openclaw.ai/tools/skills)

See all [agents supported by the `skills` CLI](https://github.com/vercel-labs/skills/blob/main/docs/agents.md).

## Install skills

Requires Node.js 22.20 or later.

### Install all skills globally

```sh
npx skills@latest add jantrw/skills --all -g
```

`--all` selects every skill and all agents that support global installation.

<details>
<summary>Install skills interactively</summary>

```sh
npx skills@latest add jantrw/skills
```

</details>

<details>
<summary>Install one skill interactively</summary>

```sh
npx skills@latest add jantrw/skills --skill retro-loop
```

Replace `retro-loop` with the name of the skill you want.

</details>

<details>
<summary>Install all skills globally and choose the target agents</summary>

```sh
npx skills@latest add jantrw/skills --skill "*" -g
```

`--skill "*"` selects every skill. `-g` fixes the installation scope to global.

</details>

<details>
<summary>List all available skills</summary>

```sh
npx skills@latest add jantrw/skills --list
```

</details>

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, checks, and releases.

## License

[MIT](LICENSE)
