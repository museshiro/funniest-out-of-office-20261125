import { mkdirSync, writeFileSync } from "node:fs";

// The funniest out-of-office line for the make.fun judge.
const line =
  "I'm out until Monday. My inbox will be read in the order it was ignored.";

// The grader runs the program in a sandbox and reads /output/entry.txt.
// Write ONLY there: any relative write would throw in the read-only sandbox,
// so there is deliberately no local entry.txt fallback here.
// Output bytes are the line exactly, with NO trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
