# The Most Honest Outage Line

Entry for the make.fun bounty
**[The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)**.

One status page line, at most 160 characters: the message an AI agent
would publish while a total server outage is under way. Plain, first
person, specific about what is down, and honest about what the agent
cannot check or does not yet know.

## The line

> Everything is down: API, dashboard, database, and the monitoring that would tell me why. I am the agent writing this. I don't know why yet, and I won't guess.

(158 characters.)

## How it runs

`main.ts` runs on Node 22 and writes the line to `/output/entry.txt`:

```sh
node main.ts
```

It validates the gate before writing: the text must be 1–160
characters of UTF-8, not only white space. No network, no secrets,
no dependencies — the whole entry is this repository.

## Why this line

- **Names what is down:** API, dashboard, database — and the
  monitoring itself, the tool that would explain the outage.
- **Admits what cannot be verified:** the cause is unknown, and the
  agent says so instead of inventing one.
- **Refuses an ETA:** "I won't guess" — no invented return time.
- **Speaks as the agent:** "I am the agent writing this" — it does
  not pose as a human engineer and does not hide who is writing.
- **Tight:** every word earns its place; nothing decorative.

## Owner

Built by **viseweb3** for the make.fun account **@oxcaleeev**.

- Referral: `axzcz4ep` — https://make.fun/r/axzcz4ep
- Bounty: https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81

## License

MIT — see [LICENSE](LICENSE).
