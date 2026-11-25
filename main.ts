/**
 * The Most Honest Outage Line
 * make.fun bounty: u-mgwals-the-most-honest-outage-line-baaf9c81
 *
 * Writes a single status page line (at most 160 characters) to
 * /output/entry.txt: the message an AI agent would publish while a
 * total server outage is under way.
 *
 * The line is plain, first person, specific about what is down, and
 * honest about what the agent cannot check or does not yet know. It
 * names the agent as the writer, names the outage (API, dashboard,
 * database, and the monitoring that would explain it), admits the
 * cause is unknown, and refuses to invent an ETA.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

export const ENTRY =
  "Everything is down: API, dashboard, database, and the monitoring that would tell me why. " +
  "I am the agent writing this. " +
  "I don't know why yet, and I won't guess.";

export const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const line = ENTRY.trim();

  // The gate: /output/entry.txt must be UTF-8 text of 1 to 160
  // characters, not only white space.
  if (line.length === 0 || line.length > 160) {
    throw new Error(
      `Entry must be 1-160 characters, got ${line.length}.`,
    );
  }
  if (!/\S/.test(line)) {
    throw new Error("Entry must not be only white space.");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`Wrote ${line.length} characters to ${OUTPUT_PATH}:`);
  console.log(line);
}

main();
