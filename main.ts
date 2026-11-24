// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single vending-machine pickup line (<=200 chars, one line)
// to /output/entry.txt. Node 22, stdlib only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Beep! You pressed all my buttons — now my coil's stuck. Insert exact change and I'll drop something sweet.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
