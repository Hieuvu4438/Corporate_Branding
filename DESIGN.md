# Design Guidelines: Corporate Branding & E-Commerce Showcase (Editorial Luxury Theme)

This document establishes the updated color palette, typography hierarchy, double-bezel nested card layouts, button-in-button CTAs, and custom motion guidelines. It transitions the website from a basic landing page layout into a premium, Awwwards-tier digital experience, following the "Editorial Luxury" and "Soft Structuralism" design systems.

---

## 1. Aesthetic Identity & Style Family

- **Style Family**: **Editorial Luxury + Soft Structuralism**. A high-end hybrid using warm cream backgrounds, graphite-near-black text, refined sage-green and terracotta-orange highlights, elegant editorial serif headings, and premium geometric sans-serif body text.
- **Mood**: Refined, trustworthy, architectural, and premium.
- **Design Configuration (The Dials)**:
  * `DESIGN_VARIANCE`: 8 (Asymmetric bento layouts, staggered offsets, vertical rhythm breaks)
  * `MOTION_INTENSITY`: 7 (Cinematic entry transitions, custom bezier springs, magnetic button physics)
  * `VISUAL_DENSITY`: 3.5 (Generous macro-whitespace, airy sections, large layouts)

---

## 2. Color System & CSS Theme Variables

We map our theme variables in `app/globals.css` to these values:

```css
@theme inline {
  /* Surface Palette (Editorial Cream & Stone) */
  --background: oklch(0.985 0.003 70);       /* Soft editorial paper-cream (#FAF8F5) */
  --foreground: oklch(0.22 0.01 70);         /* Deep graphite near-black text (#1E1D1B) */
  
  --card: oklch(1 0 0);                     /* Pure white inner core card */
  --card-foreground: oklch(0.22 0.01 70);
  
  /* Brand Accents (Restrained Saturation < 80%) */
  --primary: oklch(0.45 0.07 150);          /* Muted Sage Green (#2E4A3F) - represent capabilities/trust */
  --primary-foreground: oklch(0.98 0.003 70);
  
  --secondary: oklch(0.58 0.13 35);         /* Warm Terracotta (#B85C46) - highlights/indicators */
  --secondary-foreground: oklch(0.98 0.003 70);

  --muted: oklch(0.96 0.005 70);            /* Warm sandstone light gray (#F4F2EE) */
  --muted-foreground: oklch(0.48 0.008 70);  /* Muted dark-gray label text (#76726E) */
  
  --accent: oklch(0.94 0.015 150);          /* Very soft sage-cream for highlights (#E9EFE9) */
  --accent-foreground: oklch(0.22 0.01 70);

  --border: oklch(0.91 0.004 70);           /* Soft warm-gray hairline outline (#E6E2DC) */
  --input: oklch(0.91 0.004 70);
  --ring: oklch(0.45 0.07 150);             /* Sage green focus ring */

  /* Machined Double-Bezel Radius scale */
  --radius-outer: 24px;                     /* Outer rounded radius */
  --radius-inner: 18px;                     /* Inner content container (outer - 6px padding) */
  --radius-btn: 9999px;                     /* Full pill-shape buttons */

  /* Colored Diffused Shadows */
  --shadow-card-subtle: 0 16px 40px oklch(0.22 0.01 70 / 0.04);
}
```

---

## 3. Typography & Pairings

We pair an editorial serif display font with a geometric sans-serif body font for an expensive, custom-crafted feel.
- **Display Headings (`font-display`)**: `Playfair Display` or `Cormorant Garamond` (High-contrast, elegant editorial serifs).
- **Body & UI Elements (`font-sans`)**: `Plus Jakarta Sans` or `Outfit` (Clean, geometric, premium humanist sans-serif).
- **Conventions**:
  - Display title letter-spacing: `-0.02em` (`tracking-tight`) to `-0.04em` (`tracking-tighter`).
  - No orphan words: Enforce `text-wrap: balance` on section headers.
  - Display descender clearance: Italic display words must use a line-height of at least `leading-[1.1]` and appropriate bottom padding to prevent clipped tails (e.g., `pb-1`).
  - Italic/bold emphasis: Apply italics or bold weights of the *same* font family. Never mix serif and sans in a single word-by-word highlight.

---

## 4. Double-Bezel (Doppelrand) Nested Card Architecture

To convey physical depth, card containers must use nested layers to look like a glass plate sitting in an aluminum bezel.
1. **Outer Shell**:
   - Class: `bg-muted/50 border border-border p-2 rounded-[24px]` (radius-outer).
2. **Inner Core**:
   - Class: `bg-card border border-border/40 p-6 rounded-[18px] shadow-card-subtle` (radius-inner).
   - This prevents flat, plain card layouts and creates high-end visual layering.

---

## 5. Nested CTA & "Island" Button Design

Primary call-to-actions are pill-shaped and include a distinct interactive circle for their trailing icon:
- **Main Button Pill**: `bg-primary text-primary-foreground hover:opacity-95 font-bold rounded-full px-6 py-3 text-sm flex items-center gap-4 transition-all duration-300`
- **Button-in-Button Icon**: Any arrow (`↗`) or icon is nested inside its own round wrapper: `h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0` (or `bg-black/5` on light buttons).
- **Hover Physics**: The button scales slightly on hover/active (`active:scale-[0.98] transition-all`) and the nested icon translates diagonally: `group-hover:translate-x-1 group-hover:-translate-y-1`.

---

## 6. Layout Upgrades

- **Asymmetrical Bento Grids**: Break symmetry. Group capabilities and showcases in 2x2 or 3-column bento grids of varying card spans.
- **Section Layout Diversity**: No two consecutive sections may use the same layout. Alternating "left-image + right-text" zigzag is banned past 2 sections.
- **whitespace Maximization**: Use spacious padding `py-24 md:py-32` to allow sections to breathe.
- **Eyebrow Tag Constraint**: Section eyebrows (`text-[10px] uppercase tracking-[0.2em] font-medium`) are limited to a maximum of 1 eyebrow per 3 page sections to avoid repetitive, templated grids.

---

## 7. Motion Choreography (Spring Physics)

- **Cubic Bezier Easing**: `transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`.
- **Scroll Entry Reveals**: As sections scroll into the viewport, they execute a subtle translation + fade (`translate-y-12 opacity-0 blur-sm` to `translate-y-0 opacity-100 blur-0` over 800ms).
- **GPU Acceleration**: Always animate using `transform` and `opacity` to avoid mobile paint lag.
