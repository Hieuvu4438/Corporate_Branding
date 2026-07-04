# Design Guidelines: Corporate Branding (Cool Editorial & Cobalt Grid)

This document establishes the color palette, typography, structural grid layout, and custom motion guidelines for the redesigned digital experience. It transitions the website into an elite, award-tier digital experience, following the "Cool Editorial" and "Structural Grid" design systems.

---

## 1. Aesthetic Identity & Style Family

- **Style Family**: **Cool Editorial & Structural Grid**. A high-end light theme using cool chalk backgrounds, deep graphite near-black text, refined cobalt blue accents, elegant display headings, and clean sans-serif body text.
- **Mood**: Precise, editorial, trustworthy, and architectural.
- **Design Configuration (The Dials)**:
  * `DESIGN_VARIANCE`: 9 (Asymmetric layouts, blueprint grid structures, offset whitespace)
  * `MOTION_INTENSITY`: 5 (Restrained cinematic reveals, smooth hover transitions)
  * `VISUAL_DENSITY`: 3 (Spacious layouts, macro-whitespace, clear headers)

---

## 2. Color System & CSS Theme Variables

We map our theme variables in `app/globals.css` to these values:

```css
@theme inline {
  /* Surface Palette (Warm Plaster & Cream) */
  --background: oklch(0.985 0.004 70);       /* Soft paper-cream background (#FAF8F5) */
  --foreground: oklch(0.24 0.01 70);         /* Deep graphite near-black text (#22201E) */
  
  --card: oklch(1 0 0 / 0.85);               /* Translucent white card with glass blur */
  --card-foreground: oklch(0.24 0.01 70);
  
  --popover: oklch(1 0 0 / 0.85);
  --popover-foreground: oklch(0.24 0.01 70);

  /* Brand Accents */
  --primary: oklch(0.48 0.11 35);           /* Terracotta / Burnt Copper (#B0503B) */
  --primary-foreground: oklch(0.985 0.004 70);

  --secondary: oklch(0.42 0.06 140);         /* Refined Sage/Olive Green (#2E483E) */
  --secondary-foreground: oklch(0.985 0.004 70);

  --muted: oklch(0.965 0.005 70 / 0.7);      /* Sandstone translucent gray */
  --muted-foreground: oklch(0.52 0.01 70);   /* Muted taupe gray label text (#827E7A) */

  --accent: oklch(0.94 0.015 140 / 0.5);     /* Soft sage highlights */
  --accent-foreground: oklch(0.24 0.01 70);

  --border: oklch(0.91 0.006 70 / 0.6);      /* Soft warm-gray border (#E6E1DC) */
  --input: oklch(0.965 0.005 70);
  --ring: oklch(0.48 0.11 35);              /* Terracotta focus ring */

  /* Structural Radius scale (Not bubbly) */
  --radius-outer: 16px;                     /* Re-proportioned radius */
  --radius-inner: 12px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
}
```

---

## 3. Typography & Pairings

We pair an elegant display serif with a geometric sans-serif body for a custom, bespoke feel, ensuring full Vietnamese diacritic support.
- **Display Headings (`font-display`)**: `Cormorant Garamond` (with subset `vietnamese` and `latin`).
- **Body & UI Elements (`font-sans`)**: `Plus Jakarta Sans` (with subset `vietnamese` and `latin`).
- **Conventions**:
  - Display title letter-spacing: `-0.02em` (`tracking-tight`) to `-0.04em` (`tracking-tighter`).
  - H1 Hero text must NOT exceed 2 lines. Keep it wide and horizontal.
  - Italic/bold emphasis: Apply italics or bold weights of the *same* font family. Never mix serif and sans in a single word-by-word highlight.
  - Clear descender clearance (minimum `leading-[1.1]` for display headlines with italic descenders to prevent Vietnamese accent clipping).

---

## 4. Blueprint Grid Architecture

We reject double-bezel glassmorphism cards and instead structure layouts using clean grid lines:
- **Hairline Dividers**: Grid borders are defined by thin `1px` lines (`border-border`) dividing content like blueprint tiles.
- **Backgrounds**: Surfaces are flat white or light gray. No gradient washes or excessive card shadows.

---

## 5. Number-Driven Content (Removing Icon Slop)

We avoid generic icons (e.g. `Compass`, `Award`, `ShieldAlert`, `Zap`) for descriptive points. Instead, we use:
- **Macro Numbers**: Serial numbers (`01`, `02`, `03`) in large, italic, serif fonts (`font-display`) to sequence services, values, or metrics.
- **Typographic Details**: Clean text headings and labels that speak for themselves.

---

## 6. Layout Upgrades

- **Asymmetric Grid Layouts**: Alternate between single column, double column, and three-column grids.
- **Whitespace Maximization**: Spacious padding (`py-24 md:py-32`) to allow sections to breathe.
- **No cheap tags**: Let the design speak for itself.
