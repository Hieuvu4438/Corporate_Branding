# Design Guidelines: Corporate Branding & E-Commerce Showcase (Warm Editorial & Glassmorphism)

This document establishes the updated color palette, typography hierarchy, double-bezel nested warm glass card layouts, nested CTAs, and custom motion guidelines. It transitions the website into an elite, award-tier digital experience, following the "Warm Editorial" and "Structural Glassmorphism" design systems.

---

## 1. Aesthetic Identity & Style Family

- **Style Family**: **Warm Editorial & Glassmorphism**. A high-end light theme using warm paper-cream backgrounds, deep graphite near-black text, rich terracotta-copper and refined olive-green highlights, elegant display headings, and premium geometric sans-serif body text.
- **Mood**: Elegant, warm, trustworthy, and architectural.
- **Design Configuration (The Dials)**:
  * `DESIGN_VARIANCE`: 8 (Asymmetric layouts, bento structures, offset whitespace)
  * `MOTION_INTENSITY`: 7 (Cinematic entry transitions, scale reveals, scroll triggers)
  * `VISUAL_DENSITY`: 3 (Spacious layouts, macro-whitespace, clear headers)

---

## 2. Color System & CSS Theme Variables

We map our theme variables in `app/globals.css` to these values:

```css
@theme inline {
  /* Surface Palette (Warm Cream & Chalk Glass) */
  --background: oklch(0.985 0.004 70);       /* Soft paper-cream background (#FAF8F5) */
  --foreground: oklch(0.24 0.01 70);         /* Deep graphite near-black text (#22201E) */
  
  --card: oklch(1 0 0 / 0.85);               /* Semi-translucent white card with glass blur */
  --card-foreground: oklch(0.24 0.01 70);
  
  --popover: oklch(1 0 0 / 0.85);
  --popover-foreground: oklch(0.24 0.01 70);
  
  /* Brand Accents (Restrained Saturation < 80%) */
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

  /* Machined Double-Bezel Radius scale */
  --radius-outer: 24px;                     /* Outer rounded radius */
  --radius-inner: 18px;                     /* Inner content container */
  --radius-btn: 9999px;                     /* Full pill-shape buttons */

  /* Soft Ambient Shadows & Blurs */
  --shadow-card-subtle: 0 16px 40px oklch(0.24 0.01 70 / 0.03);
  --glass-blur: blur(16px);
}
```

---

## 3. Typography & Pairings

We pair an elegant display serif with a geometric sans-serif body for a custom, bespoke feel.
- **Display Headings (`font-display`)**: `Playfair Display` or `Cormorant Garamond` (High-contrast display serif).
- **Body & UI Elements (`font-sans`)**: `Plus Jakarta Sans` or `Outfit` (Clean, geometric sans-serif).
- **Conventions**:
  - Display title letter-spacing: `-0.02em` (`tracking-tight`) to `-0.04em` (`tracking-tighter`).
  - H1 Hero text must NOT exceed 2 to 3 lines. Keep it wide and horizontal.
  - Italic/bold emphasis: Apply italics or bold weights of the *same* font family. Never mix serif and sans in a single word-by-word highlight.

---

## 4. Double-Bezel Glass Card Architecture

To convey physical depth in light mode, card containers must use nested layers to look like a glass plate sitting in a warm sand bezel.
1. **Outer Shell**:
   - Class: `bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md` (radius-outer).
2. **Inner Core**:
   - Class: `bg-card border border-white/40 p-6 rounded-[18px] shadow-card-subtle backdrop-blur-lg` (radius-inner).

---

## 5. Nested CTA & "Island" Button Design

Primary call-to-actions are pill-shaped and include a distinct interactive circle for their trailing icon:
- **Main Button Pill**: `bg-primary text-primary-foreground hover:brightness-105 font-bold rounded-full px-6 py-3 text-sm flex items-center gap-4 transition-all duration-300 shadow-button`
- **Button-in-Button Icon**: Any arrow (`↗`) or icon is nested inside its own round wrapper: `h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0` (or `bg-black/5` on light/secondary buttons).
- **Hover Physics**: The button scales slightly on hover/active (`active:scale-[0.98] transition-all`) and the nested icon translates diagonally: `group-hover:translate-x-1 group-hover:-translate-y-1`.

---

## 6. Layout Upgrades

- **Asymmetrical Bento Grids**: Break symmetry. Group capabilities and showcases in 2x2 or 3-column bento grids. Use `grid-flow-dense` to ensure zero empty cells.
- **Section Layout Diversity**: No two consecutive sections may use the same layout. Alternating "left-image + right-text" zigzag is banned.
- **whitespace Maximization**: Use spacious padding `py-32 md:py-48` to allow sections to breathe.
- **No cheap labels**: BANNED FOREVER are labels like "SECTION 01", "ABOUT US", "FAQ". Let the content and layout speak for themselves.

---

## 7. Motion Choreography (Spring Physics)

- **Scroll Entry Reveals**: As sections scroll into the viewport, they execute a subtle transition + fade (`translate-y-12 opacity-0 blur-sm` to `translate-y-0 opacity-100 blur-0` over 800ms).
- **Hover Scale**: Every clickable card and image must react on hover. Use `group-hover:scale-102 transition-transform duration-700 ease-out` inside `overflow-hidden` containers.
- **GPU Acceleration**: Always animate using `transform` and `opacity` to avoid mobile paint lag.
- **No horizontal scroll**: Wrap the entire page in `overflow-x-hidden w-full max-w-full` to prevent horizontal scrollbars.

