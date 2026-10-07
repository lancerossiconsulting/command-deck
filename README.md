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
| Mail | Curated list in `data/mail.json`. Only `attention` and `recent-reply` rows. A row opens that message in Apple Mail (`message://`). Empty copy is “Nothing needs you” |
| Calendar | Curated appointments and holds in `data/calendar.json`. A row opens that time in Apple Calendar (`calshow:`). Empty copy is “Nothing on the calendar” |
| Todos | **Local only**, on this phone, including the Home checkboxes |
| Household Ledger | Live `GET /api/deck-summary` when that host answers (default `http://localhost:5181`, every 60s). Otherwise an offline snapshot — no invented dollars. Change the host under Ledger → Sources |
| Vantage | Same pattern, default `http://localhost:8765`, every 90s. Read-only. No trading |
| Vincent & Kayla | Live status light from the same opt-in Pantry basket as MK III. Level and age only, never dollar amounts. “No signal” when the light is off |
| Projects | Command Deck, Ledger, and Vantage stay linked. Rossi Kitchen is still an unwired personal slot. Meta Muse is a personal backlog placeholder. Firm rows are Who Picks Up the Phone (in progress), Golden Rule HCCS (active), and Command Deck Pages catch-up (backlog) |
| Firm deconflict | Personal is the default and the only owner unless `owner` is `"firm"`. The strip is “nothing double-owned” because each project has one owner. Set `firmOwner` when a real person owns firm work. Shipped firm rows are still unassigned |
| Capacity | Optional dimmer on More (1–2 dims projects and extras). Shares the `deck.cap` value with MK III |
| Dispatch | Optional queue on More. Shares `deck.dq` with MK III |
| Decisions | System of record in `data/decisions.json`. Open items that are not part of Weekly Sync render on Home as single-select choices. Weekly Sync streams render on the stage at `#weekly-sync`. A closed item with `choice` is a locked call, not an open ask. **Confirm** posts a Linear comment. The first confirm on a phone asks for a personal API key inline and saves it in `localStorage` (`deck.v2.linearKey`). The same key can be pasted under More → Sources. No backend, and no key in the repo. A faint “Email picks JSON” link is an export, not the confirm path |

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
- `data/decisions.json` — decisions waiting on a choice, including the Weekly Sync stage
- `data/mail.json` — curated mail (attention and recent replies only)
- `data/calendar.json` — curated appointments and holds
- `deck-mk3.html` — desktop MK III
- `deck-classic.html` — archived MK I
- `manifest.webmanifest`, `sw.js`, `icon.svg`, `icon-180.png`, `icon-192.png`, `icon-512.png` — home-screen install
- `wallpapers.html`, `globe-loader.html` — shader demos MK III still carries inline
- `robots.txt`

No build step and no secret-bearing backend.

## Curated mail (`data/mail.json`)

The Mail tab is not an inbox. Chloe’s feed should include only mail that needs Lance and mail he just replied to. Tapping a row opens **Apple Mail** on iPhone. The deck never uses `ms-outlook://` and never sends him to outlook.office.com.

Each item:

| Field | Required | Meaning |
| --- | --- | --- |
| `id` | yes | Stable id. Keep the Exchange REST id here so the row can be matched later. This is not a Message-ID. |
| `title` | yes | Subject |
| `snippet` | no | One short line |
| `whyShown` | yes | `attention` or `recent-reply` |
| `mailbox` | yes | `personal` or `consulting` |
| `internetMessageId` | for the specific message | RFC 5322 Message-ID (Graph `internetMessageId`, or the `Message-ID` header). Example: `<CABx2+user@mail.gmail.com>`. Angle brackets are optional. It must contain `@`. |
| `deepLink` | no | Prefer leaving this to the deck. If set, it must already be an Apple Mail URL: `message://%3Clocal-part@domain%3E` (`<` and `>` percent-encoded, `@` left as `@`). `message://` alone opens the Mail app. |
| `updatedAt` | no | ISO timestamp used for sort order |

The deck builds the tap target from `internetMessageId`:

`<local-part@domain>` → `message://%3Clocal-part@domain%3E`

Until `internetMessageId` is filled in, the row still opens the Mail app (`message://`) and does not pick a message. Exchange REST ids (`AQMk…`) cannot be turned into that link. Do not put `ms-outlook://` or an `https://outlook.office.com` URL in `deepLink`; those are ignored.

## Curated calendar (`data/calendar.json`)

The Calendar tab is the short list of appointments and holds that matter. It is not a full Outlook calendar. Tapping a row opens **Apple Calendar** on iPhone at that event’s start. The deck does not use `ms-outlook://` and does not send him to outlook.office.com.

Apple has no public URL that selects one calendar event by id. The iOS scheme that lands on a time is `calshow:` plus seconds since 2001-01-01 00:00:00 UTC. `calshow:` alone opens the Calendar app. The deck builds that from `startsAt`. A `deepLink` that is already `calshow:<seconds>` is used as-is.

Each item:

| Field | Required | Meaning |
| --- | --- | --- |
| `id` | yes | Stable id. The seeded rows use the Exchange id of the mail item they came from. |
| `title` | yes | Event name |
| `startsAt` | yes | ISO 8601 start, with a numeric offset. Date-only (`2026-10-05`) is an all-day row. |
| `endsAt` | no | ISO 8601 end, when known. Leave it off rather than guessing a duration. |
| `location` | no | Place name already known. Do not invent an address. |
| `note` | no | One short line |
| `whyShown` | yes | `appointment` or `hold` |
| `calendar` | yes | `personal` or `consulting` |
| `deepLink` | no | Leave empty. If set, it must be `calshow:` or `calshow:<seconds>`. |
| `updatedAt` | no | ISO timestamp |

The first three rows are the upcoming appointments already stated in `data/mail.json` (EKART Automotive installation, the Junction City VA visit, and the Kansas driver’s license office). Clock times in those messages had no zone; they are stored as America/Chicago (`-05:00` in October). Past dates drop off the phone automatically. Chloe should replace or extend this list with the real calendar feed and drop items that are no longer ahead.

## Weekly Sync (`#weekly-sync`)

Phone surface only. Decisions already live on `index.html`, so the stage is there. MK III links across with Phone v2 and does not render this list.

Open https://lancerossiconsulting.github.io/command-deck/#weekly-sync

Home keeps a short row per stream. Locked calls show the letter and “Decided.” Open streams still show the courses of action. The stage is the last card on Home. Each card shows the Linear issue id and a `gloss` line.

ROS-13 and ROS-17 sit under Also. They are status, not choices. ROS-26 is shipped and is not on the stage.

The 2026-10-07 sync is locked in `data/decisions.json`: ROS-16 choice C, ROS-8 choice B, ROS-21 choice C. Those cards render as decided.

A pick on an open stream is stored on this phone as soon as the radio changes (`cf-deck-picks`). **Confirm** posts it:

1. If this phone already has a Linear personal API key, the page `POST`s `https://api.linear.app/graphql` and creates a comment on `linearIssueId`. The Pages origin is allowed by Linear’s CORS response. The key stays in `localStorage` under `deck.v2.linearKey`. It is not in git.
2. If no key is saved, Confirm opens a one-time paste on that card, saves it, then posts. More → Sources edits the same key.
3. If Linear refuses the key or does not answer, the card says so and the pick stays. “Copy and open issue” is the last resort. Confirm does not email anyone.

There is no keyless Linear comment from this static page. `commentCreate` without an `Authorization` header returns 401. An OAuth client secret cannot live in a public repo, and this deck has no backend.

One-time key: Linear → Settings → Account → Security & access → a personal API key that can create comments. A full-access key works. A read-only key does not.

Items keep the existing fields (`id`, `title`, `prompt`, `status`, `allowNote`, `options`). Weekly Sync adds:

| Field | Required | Meaning |
| --- | --- | --- |
| `section` | no | `weekly-sync` places the item on the stage instead of the Home radio list |
| `gloss` | no | One line the title does not already say |
| `choice` | no | Locked COA id, such as `C`, used when `status` is `closed` |
| `decidedAt` | no | ISO date the call was locked |
| `linearIssueId` | no | Issue identifier, such as `ROS-16`. Confirm comments on it |
| `linearUrl` | no | `http` or `https` link shown on the stage |
| `owner` | no | Lane label |
| `leftOff` | no | One line under the title on an open stream |
| `where` | no | Optional second line on an open stream |
| `previewUrl` | no | `http` or `https` link for the preview slot on an open stream. Empty leaves the slot open |
| `options[].id` | yes | `A`, `B`, or `C` on the staged streams |

`stage.notes` holds status rows (`role` `building` or `status`, `title`, `status`, `detail`, `linearIssueId`, `linearUrl`). A note is not a decision.

The service worker cache name is in `sw.js`. Bump it when the shell changes so an installed Deck drops the old cache.

