import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The competition gate requires /output/entry.txt to be UTF-8 text of
// 1–240 characters, so we refuse to write anything longer than that.
const MAX_CHARS = 240;

const PITCH =
  "You describe the app over coffee; an AI agent builds it while you finish the cup — your idea, working software, before lunch, no coding degree required.";

if (PITCH.length === 0 || PITCH.length > MAX_CHARS) {
  throw new Error(
    `Pitch must be 1–${MAX_CHARS} characters, got ${PITCH.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${join(outDir, "entry.txt")}`);
