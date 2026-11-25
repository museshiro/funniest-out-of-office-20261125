import { writeFileSync, existsSync } from "node:fs";

const line =
  "I'm out until Monday. My inbox will be read in the order it was ignored.";

writeFileSync("entry.txt", line, "utf8");
if (existsSync("/output")) {
  writeFileSync("/output/entry.txt", line, "utf8");
}
