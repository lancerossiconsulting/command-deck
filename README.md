# Cloud & Fire — Command Deck

Lance's "Jarvis" heads-up display, reset to essentials. As of 2026-07-17 the
side projects were retired, so the deck now carries only the things worth
keeping on a glanceable screen: the clock and local weather, a live finance
rail, and the daily Bible-reading calendar — all inside the same MK III HUD
chrome (access gate, arc-reactor boot, living wallpaper).

Repo: https://github.com/lancerossiconsulting/command-deck
Hosted on GitHub Pages: https://lancerossiconsulting.github.io/command-deck/

## What the deck shows now

- **Top bar** — local clock with seconds ring, date, live Manhattan KS
  weather (Open-Meteo, no key), rhythm pill, last-synced date.
- **Left rail** — dispatch capture (typed or voice, queued to localStorage),
  a finance-links menu (command-deck, ledger, vantage only), the wallpaper /
  boot / dispatch key legend, and the capacity dimmer.
- **Main column** — the Bible reading calendar: today's assignment keyed to
  the date, plus the next twelve upcoming readings. On rest days it points at
  what's next; when the plan ends it says so.
- **Real Financials rail (right)** — three read-only, live widgets (below).
- **Ticker** — a short ambient status line across the footer.

## Real Financials rail

All three widgets are read-only, poll on their own timers, and degrade to an
honest "not running / no signal" state when their source is offline.

- **Household Ledger** (`localhost:5181/api/deck-summary`, every 60s) — this
  month's income / outflow / savings-goal status plus per-tier spend bars.
  This is the personal ledger feed surfaced directly in the rail; it shows a
  "NOT RUNNING" chip if the Ledger dev server isn't up on this machine.
- **Vantage** (`localhost:8765/api/deck-summary`, every 90s) — top hot markets
  from the ranked feed and mock-portfolio equity / P&L / position counts. No
  trading. Shows a cold-start note when the profile has no calibrated opinions.
- **Vincent & Kayla** (Pantry basket, every 5 min) — a single LED status light
  (green / amber / red, or off) parsed down from the opt-in status the kids'
  budget worksheet publishes. Percentages/levels only, never dollar amounts.

The two `localhost` widgets require the companion app's dev server running on
the **same machine** as the browser. The Ledger, Vantage, and Vincent-budget
companion repos all remain live.

## Run it

**One file, fully portable.** Open `index.html` — no build step, no server, no
companion files. Weather and the finance rail need network / the local dev
servers; the clock, boot, wallpaper, and Bible calendar work offline.

An access gate (passphrase) guards the page; once unlocked it's remembered in
that browser's localStorage.

## Controls

- **W** cycles the five shader wallpapers (choice persists).
- **B** replays the arc-reactor boot sequence; any key or click skips it.
- **/** focuses the dispatch input.
- **Capacity slider** (bottom-left, persists): 1–2 dims everything except the
  live finance panels.

## Data block

Everything the deck renders lives in one `<script>` block in `index.html`
fenced by `DECK DATA START` / `DECK DATA END`. After the reset it carries only:

- `updated` — last-synced date (top bar)
- `rhythm` — one-word mode label (top bar)
- `verses` — scripture pool for the rail (one shown at random)
- `bibleCalendar` — `[{ date:"YYYY-MM-DD", ref, note }]`, the daily + upcoming
  reading source
- `githubProjects` — the finance-links menu (command-deck, ledger, vantage)
- `carry` — the footer ticker's ambient status lines

The finance widgets pull their numbers live from the companion apps at render
time; nothing about them is stored in the data block.

## Other files (unchanged)

- `deck-classic.html` — the archived MK I shell.
- `wallpapers.html`, `globe-loader.html` — standalone shader / globe demos the
  deck embeds copies of so `index.html` stays self-contained.
- `robots.txt`.
