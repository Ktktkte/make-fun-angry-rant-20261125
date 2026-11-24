import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rant =
  "Every morning at 9 a.m. someone reheats last night's fish in the office microwave, and the whole floor has to pretend the smell is just the building. The beep keeps going a full minute after the door opens, like the machine is bragging. We all stand in line behind it, holding our lunches, silently agreeing that one day we will unplug it and deny everything.";

// Gate: the rant must fit the competition's 1-400 character limit.
if (rant.length < 1 || rant.length > 400) {
  throw new Error(`rant is ${rant.length} chars, outside the 1-400 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), rant, "utf8");
