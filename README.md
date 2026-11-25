# Agent Skills

Reusable skills for coding agents.

## Install skills

Requires Node.js 22.20 or later. Run the interactive commands in your terminal.

### Install all skills globally with prompts

```sh
npx skills@latest add jantrw/skills --skill "*" -g
```

### Install one skill with prompts

```sh
npx skills@latest add jantrw/skills --skill retro-loop
```

Replace `retro-loop` with the name of the skill you want.

<details>
<summary>Choose skills and installation scope interactively</summary>

```sh
npx skills@latest add jantrw/skills
```

</details>

<details>
<summary>Install all skills globally without prompts</summary>

```sh
npx skills@latest add jantrw/skills --all -g
```

</details>

<details>
<summary>List available skills</summary>

```sh
npx skills@latest add jantrw/skills --list
```

</details>

## Contributing

Use Node.js 22 and run `npm ci` to install the development tools. Run `npm run format` to format files and `npm run check-frontmatter` to validate skill metadata.

For a release-worthy change, run `npm run changeset` and commit the generated file with your change. Changesets opens a version PR after the changeset reaches `main`. Merging the version PR updates the repository-wide version and changelog, and the release workflow creates the Git tag and GitHub Release.

In the repository's **Settings → Actions → General**, enable **Allow GitHub Actions to create and approve pull requests** before the first release. On a generated version PR, use **Approve workflows to run** if GitHub requires it.

## License

[MIT](LICENSE)
