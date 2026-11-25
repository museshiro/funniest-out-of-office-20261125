import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office reply: exactly one line, no trailing newline.
const line =
  "Out until Monday. If it's urgent, I'll be back before your panic has time to become a calendar invite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
