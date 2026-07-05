# Cloud & Fire — Command Deck

Lance's "Jarvis" heads-up display. A single-page HUD over every active project line: priority stack, line health traffic lights, sprint gauge, writing pipeline, live flags, carry-forward ticker, live Manhattan KS weather, and a capacity dimmer.

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
3. Rewrite the data block only: set `updated` to today's date, re-triage `priorities` (any `nofail` entry flips the top-bar pill to NO-FAIL ACTIVE), refresh `lines`, `flags`, `carry`, `sprint`, and the per-line `pages`.
4. Do not touch the shell unless the deck needs a new capability.
5. Commit and push to `main` (private repo — history only, no live deploy).
6. If Lance keeps a copy elsewhere (e.g. `Downloads\command-deck.html`, a phone copy), refresh that copy too.

Line lights: `g` green · `y` yellow · `r` red · `d` dormant (back-burnered).
Priority tags: `nofail` · `behind` · `decision` · `next`.
Sprint score: `0–100`, or `null` when no sprint is running (shows an em-dash gauge).

## Controls

- **Number keys 0–9** jump between lines; click or Enter on the left nav also works.
- **Capacity slider** (bottom-left, persists): 1–2 dims everything except live panels and red flags.
- **W key** cycles the five shader wallpapers (Ember Flow, Liquid Orbs, Warp Field, Circuit Cells, Ripple Pool). Choice persists.
- **B key** replays the arc-reactor boot sequence; any key or click skips it.
- Last view, capacity, and wallpaper persist via localStorage.

## MK II shell (current)

The deck runs the MK II HUD shell — Iron Man-grade chrome over the same data and features:

- Arc-reactor boot: rotating reactor rings around the HUD-cyan wireframe globe, typed system log, progress arc. Auto-dismisses on a timer (never hangs). `BOOT_GLOBE_THEME='mono'` in the shell restores the off-white monochrome globe.
- Rajdhani display type, cyan/gold holographic accents, faint HUD grid + periodic scan sweep.
- Seconds ring around the clock, EKG pulse beside Rhythm, orbiting state-pill spinner, mini reactor brand mark.
- Panels stagger in with corner-bracket draw; page titles resolve with a character-scramble decrypt; sprint score and flag count tick up; pipeline bars fill on view.
- Chamfered (clip-path) badges, tags, and ticker lead; gold diamond separators in the ticker.
- All of it honors `prefers-reduced-motion` (static frames, no scramble/stagger) and conserve mode (sweep off, EKG still).

The previous MK I shell is preserved at `deck-classic.html` (same data schema — the DECK DATA block is interchangeable between shells).

## Built-in visual layer

- **Living wallpaper** — the background is one of five cursor-reactive WebGL shaders, retuned from `wallpapers.html` to stay subdued behind the data and flare bright/glowy on every transition, then ease back. Falls back to the body gradient if WebGL is unavailable; renders a static frame under prefers-reduced-motion.
- **Globe boot loader** — on load, the monochrome country-outline globe (from `globe-loader.html`) spins inside its whirl over the live wallpaper, then fades out after ~1.6s and fires a reveal flare. It dismisses on a timer regardless of network or globe state, so the deck never hangs.
- `wallpapers.html` and `globe-loader.html` remain as standalone files for fullscreen / wallpaper-engine use; the deck embeds copies so `index.html` stays self-contained and portable.
