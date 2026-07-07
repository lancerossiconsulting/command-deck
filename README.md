# Cloud & Fire — Command Deck

Lance's "Jarvis" heads-up display. A single-page HUD: a GitHub project link menu on the left, every project line stacked in one scrolling column in the middle (priority stack, live flags, sprint/pipeline/formation, a daily Bible-reading prompt, then each project's brief), and a live Real Financials rail on the right (Household Ledger income/outflow/savings-goal + category spend, Vantage hot markets + mock-portfolio P&L). Plus carry-forward ticker, live Manhattan KS weather, and a capacity dimmer.

Repo (private): https://github.com/lancerossiconsulting/command-deck

**No hosted URL.** The repo is private, and GitHub Pages only serves private repos on paid plans — Lance chose to keep the repo private and drop hosting rather than upgrade or go public. The deck exists as files, git-tracked for history, not as a live website.

## Run it

**One file, fully portable.** Double-click `index.html` — or copy it anywhere (Downloads, iCloud, another machine) and double-click it there. No build step, no server, no companion files. (Weather needs internet; everything else works offline.)

**Mobile:** there's a phone-width layout built in (chip nav, scrolling column, PWA meta tags) — it just needs the file transferred to the device manually, e.g. AirDrop, OneDrive/iCloud sync, or emailing `index.html` to yourself and opening it in a mobile browser. Once open, Share → **Add to Home Screen** installs it as a dark full-screen app. The dispatch queue, wallpaper choice, and capacity live in each device's localStorage, so a phone copy and the desktop copy keep separate state.

## Architecture

Everything lives in `index.html`:

- **Shell** — layout, styles, behavior. Rarely changes.
- **Data block** — everything the deck renders, in one `<script>` block fenced by `DECK DATA START` / `DECK DATA END` markers. **Claude rewrites only this block on every sync.**

## Refresh protocol (for Claude sessions)

When Lance asks to "sync the deck" / "update the command deck":

1. Open `index.html` and find the block between `DECK DATA START` and `DECK DATA END` (schema notes are in its header comment).
2. Gather what changed — morning-brief logic, Linear/Notion state, project memories, this session's outcomes.
3. Rewrite the data block only: set `updated` to today's date, re-triage `priorities` (any `nofail` entry flips the top-bar pill to NO-FAIL ACTIVE), refresh `lines`, `flags`, `carry`, `sprint`, `githubProjects`, `bibleCalendar`, and the per-line `pages`.
4. Do not touch the shell unless the deck needs a new capability.
5. Commit and push to `main` (private repo — history only, no live deploy).
6. If Lance keeps a copy elsewhere (e.g. `Downloads\command-deck.html`, a phone copy), refresh that copy too.

Line lights: `g` green · `y` yellow · `r` red · `d` dormant (back-burnered).
Priority tags: `nofail` · `behind` · `decision` · `next`.
Sprint score: `0–100`, or `null` when no sprint is running (shows an em-dash gauge).

## Controls

- **Number keys 0–9** smooth-scroll to a project section in the main column (no more page-switching — everything is stacked and visible via scroll).
- The left nav is now a **GitHub project link menu** — click any repo name to open it on GitHub in a new tab. Public/private tags shown per repo.
- **Capacity slider** (bottom-left, persists): 1–2 dims everything except live panels and red flags.
- **W key** cycles the five shader wallpapers (Ember Flow, Liquid Orbs, Warp Field, Circuit Cells, Ripple Pool). Choice persists.
- **B key** replays the arc-reactor boot sequence; any key or click skips it.
- Capacity and wallpaper choice persist via localStorage.

## Real Financials rail (right column)

Two live, read-only widgets, polled every 60–90s, both fed by companion apps' own `/api/deck-summary` routes (same pattern: GET-only, CORS opened for that one route, aggregate data only):

- **Household Ledger** (`localhost:5181`) — this month's income/outflow/savings-goal status, plus category (tier) bars showing expected vs actual spend. Shows a "NOT RUNNING" chip if the Ledger dev server isn't up.
- **Vantage** (`localhost:8765`) — top hot markets from the ranked feed (question, advantage, verdict, link to Kalshi/Polymarket) and mock-portfolio equity/P&L/position counts. Read-only, no trading. Shows a cold-start note if the stance profile has no calibrated opinions yet rather than presenting zero-advantage numbers as real signal.

Both require the companion app's dev server running **on the same machine** as the browser — `localhost` means "this computer," not a shared service. Ledger auto-starts at Windows logon (see its own README); Vantage does not yet.

## Today's Reading (daily Bible-study prompt)

A panel at the top of the main column looks up today's date in `DATA.bibleCalendar` (empty by default) and shows the assignment, or an honest "no calendar loaded" placeholder if it's empty or today has no entry. To wire in real data, populate `bibleCalendar` in the DECK DATA block:

```js
bibleCalendar: [
  { date:"2026-07-08", ref:"Romans 7", note:"optional context" },
  ...
]
```

## MK III shell (current)

The deck runs the MK III HUD shell — same Iron Man-grade chrome as before, restructured layout:

- Arc-reactor boot: rotating reactor rings around the HUD-cyan wireframe globe, typed system log, progress arc. Auto-dismisses on a timer (never hangs). `BOOT_GLOBE_THEME='mono'` in the shell restores the off-white monochrome globe.
- Rajdhani display type, cyan/gold holographic accents, faint HUD grid + periodic scan sweep.
- Seconds ring around the clock, EKG pulse beside Rhythm, orbiting state-pill spinner, mini reactor brand mark.
- Panels stagger in with corner-bracket draw; page titles resolve with a character-scramble decrypt; sprint score and flag count tick up; pipeline bars fill on view.
- Chamfered (clip-path) badges, tags, and ticker lead; gold diamond separators in the ticker.
- All of it honors `prefers-reduced-motion` (static frames, no scramble/stagger) and conserve mode (sweep off, EKG still).

Only MK I is separately archived (`deck-classic.html`, same data schema). MK II was not preserved as a separate file — MK III replaced it directly in `index.html`; git history has the diff if you ever need to see MK II again.

The previous MK I shell is preserved at `deck-classic.html` (same data schema — the DECK DATA block is interchangeable between shells).

## Built-in visual layer

- **Living wallpaper** — the background is one of five cursor-reactive WebGL shaders, retuned from `wallpapers.html` to stay subdued behind the data and flare bright/glowy on every transition, then ease back. Falls back to the body gradient if WebGL is unavailable; renders a static frame under prefers-reduced-motion.
- **Globe boot loader** — on load, the monochrome country-outline globe (from `globe-loader.html`) spins inside its whirl over the live wallpaper, then fades out after ~1.6s and fires a reveal flare. It dismisses on a timer regardless of network or globe state, so the deck never hangs.
- `wallpapers.html` and `globe-loader.html` remain as standalone files for fullscreen / wallpaper-engine use; the deck embeds copies so `index.html` stays self-contained and portable.
