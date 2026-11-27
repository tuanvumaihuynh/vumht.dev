# Design System: Quiet Pine

## Direction

Quiet Pine is a restrained engineering index inspired by `egoist.dev` while retaining Vux's identity: a neutral carbon canvas punctuated by calibrated Pine Emerald signals, official product emblems, and generous breathing room.

- Density: 2/10
- Visual variance: 2/10
- Motion: 2/10
- Voice: direct, calm, technically grounded

## Color

Dark-only palette (`color-scheme: dark`):

- Carbon canvas: `#0F1110`
- Card surface: `#161917`
- Quiet surface: `#181C1A`
- Strong surface: `#202623`
- Primary ink: `#ECEEEA`
- Muted copy: `#8B938E`
- Faint metadata: `#58605B`
- Hairline border: `#222724`
- Pine Emerald accent: `#3ECF8E`

Green acts strictly as a calibrated signal and subtle ambient wash—never heavy gradients or decorative fills.

## Typography

- Geist for interface, prose, and `tabular-nums` experience periods
- Geist Mono only for minimal error codes and technical metadata
- Bio and prose: `0.975rem` with relaxed `1.68` line height and single-color primary ink
- Section labels: `0.84rem` muted prose weight (`400`)

## Layout

- Single narrow centered column: `min(100%, 36rem)` with `1.25rem` side padding (`536px` inner reading measure)
- Static single-row text header (`Vux` wordmark on the left; `About` and `GitHub` on the right, zero icons and no theme toggle)
- Projects grid: 2-column cards on desktop featuring official product logo icons (`Runcoil`, `Stint`), with cursor-tracking border spotlight and gentle ambient wash
- Experience list: single-line rows with company, role, and sans-serif `tabular-nums` period using focus-dimming on hover
- Static Spotify status and links in the footer
- Secondary `/about` page matching `egoist.dev/about` with short prose and a bulleted `Social` list

## Interaction

Pure CSS choreography with `@media (prefers-reduced-motion: reduce)` support:

- Entry reveal: staggered `0.65s` cubic-bezier opacity + `6px` vertical travel + subtle `2px` blur clear
- Project cards: `0.5s` ease-out cursor spotlight (`::before` + `::after` mask), gentle `-2px` lift, and icon tilt
- Experience list: sibling opacity dimming (`0.4`) on hover

## Content Rules

- No fabricated metrics or unverifiable impact claims
- Qualgo descriptions remain public, high-level, and implementation-safe
- Only official product logos (`public/projects/runcoil.svg`, `public/projects/stint.svg`); no extra decorative icons
- No portrait, résumé download, stock imagery, fake terminal, or logo wall
- Links and repositories are the source of truth
