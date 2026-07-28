# Design System: Quiet Index

## Direction

Quiet Index is a restrained engineering notebook: editorial, calm, and useful.
It borrows the clarity and generous pacing of minimal personal sites without
copying their exact structure. Vux's identity comes from muted wood-element
greens, dark mode, and precise technical metadata.

- Density: 3/10
- Visual variance: 3/10
- Motion: 2/10
- Voice: precise, warm, technically grounded

## Color

Light mode:

- Paper canvas: `#FAFBF8`
- Quiet surface: `#F0F3EF`
- Strong surface: `#E7ECE7`
- Forest ink: `#202822`
- Moss copy: `#687169`
- Quiet line: `#E2E7E1`
- Deep jade: `#2F6B4F`

Dark mode:

- Night canvas: `#111713`
- Night surface: `#18201B`
- Strong night surface: `#202B24`
- Mist ink: `#EDF2EE`
- Soft copy: `#A4AFA7`
- Quiet line: `#29342D`
- Soft jade: `#73A98A`

Jade is a status and interaction color, not decoration. There are no gradients,
neon colors, glows, metallic effects, or literal leaf imagery.

## Typography

- Geist for interface and prose
- Geist Mono only for dates, stacks, and technical metadata
- Body baseline: 16px with a relaxed 1.65 line height
- Page titles: 32–44px, used sparingly
- Section titles: 23–26px
- Reading measure: approximately 42rem

Mobile keeps readable type rather than shrinking the entire system.

## Layout

- One centered editorial column: `min(100% - 2rem, 42rem)`
- Generous section rhythm: roughly 72–112px
- Static two-line identity header with only a color-mode control
- Project rows use a quiet hover surface; experience entries have no borders
- Detail pages remain linear and readable

The site does not use a giant hero, a 12-column landing-page grid, sticky glass
navigation, oversized CTA blocks, or a generic card dashboard.

## Interaction

Motion for Vue is the only choreography library.

- Entry reveal: opacity plus 6px vertical travel
- Duration: 350ms with a restrained ease-out curve
- Row hover: background color only, 150ms
- Global reduced-motion preference is respected

No parallax, scroll-jacking, custom cursor, hover lift, typewriter effect, or
continuous ambient animation.

## Signature Elements

- A plain text Vux wordmark
- Compact project metadata without decorative status labels
- A small static Spotify status in the footer
- Light and dark modes built from the same muted wood palette

## Content Rules

- No fabricated metrics or unverifiable impact claims
- Qualgo descriptions remain public, high-level, and implementation-safe
- No portrait, résumé download, stock imagery, fake terminal, or logo wall
- Links and repositories are the source of truth
