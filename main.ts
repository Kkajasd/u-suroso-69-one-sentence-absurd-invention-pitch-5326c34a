import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch: a washing machine that returns your
// missing sock with a handwritten apology, blaming everyone but itself.
const ENTRY =
  "A washing machine that returns your missing sock with a handwritten apology blaming the dryer, the cat, and — worst of all — you.";

// Fail fast: the gate requires 1–220 characters.
if (ENTRY.length < 1 || ENTRY.length > 220) {
  throw new Error(`entry must be 1–220 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
