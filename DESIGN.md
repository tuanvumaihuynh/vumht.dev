# Design System: Quiet Canopy

## 1. Visual Theme & Atmosphere

Quiet Canopy is a restrained systems journal: gallery-airy, confidently
asymmetric, and calm. Wood-element symbolism appears through deep evergreen,
muted jade, and branching data paths rather than literal leaf imagery.

- Density: 4/10
- Variance: 6/10
- Motion: 3/10
- Voice: precise, warm, technically grounded

## 2. Color Palette & Roles

- Paper Canvas (`#F4F6F1`) — light page background
- Soft Surface (`#FBFCF8`) — elevated content surface
- Forest Ink (`#17221D`) — primary light-mode text
- Moss Copy (`#5B665F`) — secondary light-mode text
- Quiet Line (`#D9E0D8`) — structural dividers
- Deep Jade (`#2F6B4F`) — the single light-mode accent
- Night Canopy (`#0F1713`) — dark page background
- Night Surface (`#151F1A`) — dark elevated surface
- Mist Ink (`#EDF3EE`) — primary dark-mode text
- Soft Jade (`#69A884`) — the single dark-mode accent

No lime, neon, purple, blue glow, metallic palette, or decorative gradients.

## 3. Typography

- Display and body: Geist, controlled weight, tight display tracking
- Metadata and system labels: Geist Mono
- Display scale: `clamp(3rem, 7vw, 6.25rem)`
- Body: 17–19px, relaxed leading, maximum 65 characters per line

## 4. Components

- Buttons are pill-shaped, flat, and tactile. One primary CTA per section.
- Project entries are alternating editorial rows, not equal card grids.
- Surfaces use 1px borders and at most a faint canvas-tinted shadow.
- Navigation is compact, sticky, and keyboard accessible.

## 5. Layout

- Desktop hero uses a 60/40 asymmetric grid.
- Content stays within a 72rem container.
- Multi-column sections collapse to one column below 768px.
- No overlapping content and no horizontal scrolling.

## 6. Motion

Motion for Vue is the only choreography engine.

- Section reveal: opacity and 10px vertical translation
- Spring baseline: stiffness 100, damping 20
- Project hover: maximum 3px translation
- System trace: one slow signal, one loop at a time
- Global `MotionConfig` respects the operating system reduced-motion setting

No parallax, typewriter, scroll-jacking, custom cursor, or continuous shimmer.

## 7. Banned Patterns

- No fabricated metrics or fake system dashboards
- No three equal cards in a row
- No generic AI copywriting
- No oversized logo wall
- No portrait placeholder or stock photography
- No rainbow stack badges
- No decorative terminal window without real content
