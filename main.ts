import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence absurd invention pitch: a washing machine that returns your
// missing sock with a handwritten apology, blaming everyone but itself.
const ENTRY =
  "A washing machine that returns your missing sock with a handwritten apology blaming the dryer, the cat, and — worst of all — you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
