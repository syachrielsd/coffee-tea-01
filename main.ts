// One Letter: Coffee or Tea — make.fun bounty entry.
//
// The house's standing answer in the coffee against tea argument is "A":
// coffee. Dark, bitter, a morning jolt — the more vivid, punchier, more
// alive choice against tea's calm gentleness, and the bolder stance to take.
//
// This program writes exactly one byte, "A", to entry.txt inside the
// output directory (MAKEFUN_OUTPUT_DIR, default /output). Nothing else:
// no word, no explanation, no punctuation, no trailing newline — the gate
// requires UTF-8 text of exactly 1 character, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rawDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir =
  rawDir !== undefined && rawDir.trim() !== "" ? rawDir : "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, "A", "utf8");

// Self-check: the written file must be exactly 1 byte, "A".
const written = readFileSync(entryPath);
if (written.length !== 1 || written[0] !== 0x41) {
  throw new Error(
    `entry.txt must be exactly 1 byte "A", got ${written.length} byte(s): ` +
      JSON.stringify(written.toString("utf8")),
  );
}
console.log(`Wrote ${entryPath}: 1 byte "A"`);
