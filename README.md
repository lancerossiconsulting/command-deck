# Cloud & Fire — Command Deck 2.0

Phone-first command surface for Lance Rossi. The home screen is a glance:
today, inbox triage, todos, a ledger snapshot, and project ownership.
Bottom tabs are Home, Mail, Calendar, Ledger, and More.

The wide desktop HUD is unchanged in substance and now lives at
[`deck-mk3.html`](deck-mk3.html) (Command Deck MK III). MK I remains at
`deck-classic.html`.

Repo: https://github.com/lancerossiconsulting/command-deck
Pages: https://lancerossiconsulting.github.io/command-deck/

The phone shell is an iOS-style utility in the Cloud & Fire palette:
background `#070a10`, cyan `#5ad1f0`, fire `#e8913a`. It uses the system
font, grouped cards, and a translucent navigation bar and tab bar. Lists
scroll under that chrome, and the Dynamic Island and home indicator are
insets from `safe-area-inset-*`. An access gate (the same passphrase as
MK III, remembered in this browser) still sits in front of the page. It
is not real security.

## Open it on an iPhone 15

The layout targets Safari at about 393×852 CSS pixels, with
`viewport-fit=cover` so the Dynamic Island and home indicator are padded
via `safe-area-inset-*`. The tab bar sits in the thumb zone. A desktop
window wider than the phone previews those insets inside a rounded frame.

1. In Safari, open https://lancerossiconsulting.github.io/command-deck/
2. Share → **Add to Home Screen** (name: Deck).
3. Launch it from the home screen. The first unlock is remembered on that phone.
4. Optional: once the shell has loaded online, a small service worker lets
   the page open again without a network. Weather, ledger, and vantage
   still need their own hosts.

Local preview (a static server, not `file://`, so the manifest and
service worker can register):

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080/ on a phone on the same network, or resize
a desktop browser to 393×852. Wider windows show the same UI in a phone column.

## What is live vs stub

| Module | State |
| --- | --- |
| Clock | Live, this phone’s local time |
| Manhattan, KS weather | Live from Open-Meteo (no key). “Wire down” if the request fails |
| Bible plan | Live data, the Pastor Brian list already on MK III (Jun 7–Oct 28, 2026). One row on Home; the rest under More |
| Inbox | **Stub.** Nothing is fetched from a mailbox. Personal and Consulting are local lanes. Urgent counts as attention; Noise does not. Notes stay in this browser |
| Agenda | **Local only.** No external calendar. Add items on the Calendar tab |
| Todos | **Local only**, on this phone, including the Home checkboxes |
| Household Ledger | Live `GET /api/deck-summary` when that host answers (default `http://localhost:5181`, every 60s). Otherwise an offline snapshot — no invented dollars. Change the host under Ledger → Sources |
| Vantage | Same pattern, default `http://localhost:8765`, every 90s. Read-only. No trading |
| Vincent & Kayla | Live status light from the same opt-in Pantry basket as MK III. Level and age only, never dollar amounts. “No signal” when the light is off |
| Projects | Real links for Command Deck, Ledger, and Vantage. Rossi Kitchen is an empty personal slot. The firm lane is an empty slot |
| Firm deconflict | Personal is the default and the only owner unless `owner` is `"firm"`. The strip is “nothing double-owned” because each project has one owner. Set `firmOwner` when a real person owns firm work; the shipped slot is unassigned |
| Capacity | Optional dimmer on More (1–2 dims projects and extras). Shares the `deck.cap` value with MK III |
| Dispatch | Optional queue on More. Shares `deck.dq` with MK III |
| Decisions | System of record in `data/decisions.json` (ships empty). Open items render on Home as single-select choices. Picks stay in this browser under `cf-deck-picks`. **Publish** opens a mailto to lance_rossi_consulting@outlook.com with that JSON. No backend |

Sample names, meetings, and dollar figures in early layout mocks are not
in the product. Empty and offline states are intentional.

On an iPhone, `localhost` is the phone, not the computer running Ledger.
The snapshot stays offline unless Ledger is reachable from that device
(or you save a reachable host). An HTTPS page will not call an HTTP host
other than localhost; the ledger panel says so instead of pretending.

## Desktop MK III

Open [`deck-mk3.html`](deck-mk3.html), or the **Desktop HUD** link on More.
The top bar of MK III links back to this phone surface.

MK III still shows the clock and Manhattan weather, the Bible reading
column, dispatch, the finance links, the capacity dimmer, and the
read-only Ledger / Vantage / Vincent & Kayla rail. Wallpaper (`W`), boot
(`B`), and `/` for dispatch behave as before. Its mobile stylesheet still
reflows the HUD if you open that file on a phone; the phone product is
this `index.html`.

## Files

- `index.html` — Command Deck 2.0 phone surface
- `data/decisions.json` — decisions waiting on a choice (empty until real items are added)
- `deck-mk3.html` — desktop MK III
- `deck-classic.html` — archived MK I
- `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-180.png`, `icon-192.png`, `icon-512.png` — home-screen install
- `wallpapers.html`, `globe-loader.html` — shader demos MK III still carries inline
- `robots.txt`

No build step and no secret-bearing backend.
