import { globSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseDocument } from "yaml";

export function frontmatterError(markdown) {
  const block = /^---\r?\n([\s\S]*?)^---[ \t]*\r?$/m.exec(markdown);
  if (block?.index !== 0) return "missing YAML frontmatter";

  const document = parseDocument(block[1]);
  if (document.errors.length) return document.errors[0].message;

  for (const key of ["name", "description"]) {
    const value = document.get(key);
    if (typeof value !== "string" || value.trim() === "") {
      return `expected a non-empty string for ${key}`;
    }
  }
}

if (import.meta.main) {
  const root = fileURLToPath(new URL("..", import.meta.url));
  const files = globSync("**/SKILL.md", {
    cwd: root,
    exclude: [".git", "node_modules"],
  });

  if (files.length === 0) {
    console.error("No SKILL.md files found.");
    process.exitCode = 1;
  } else {
    for (const file of files) {
      const error = frontmatterError(readFileSync(join(root, file), "utf8"));
      if (error) {
        console.error(`${file}: ${error}`);
        process.exitCode = 1;
      }
    }
    if (!process.exitCode) console.log("All SKILL.md frontmatter is valid.");
  }
}
