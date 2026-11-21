import assert from "node:assert/strict";
import { test } from "node:test";
import { frontmatterError } from "./check-frontmatter.mjs";

test("accepts valid multiline YAML with Windows line endings", () => {
  assert.equal(
    frontmatterError(
      "---\r\nname: example\r\ndescription: >\r\n  A skill: useful.\r\n---\r\n# Example\r\n",
    ),
    undefined,
  );
});

test("rejects malformed YAML, missing fields, and frontmatter below the title", () => {
  const validBlock = "---\nname: example\ndescription: Example skill\n---";
  assert.match(
    frontmatterError(validBlock.replace("skill", "skill: example")),
    /mapping/i,
  );
  assert.match(
    frontmatterError(validBlock.replace("description: Example skill\n", "")),
    /description/,
  );
  assert.match(
    frontmatterError("# Example\n" + validBlock),
    /missing YAML frontmatter/,
  );
});
