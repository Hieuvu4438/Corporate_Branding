# Design Guidelines: Corporate Branding & E-Commerce Showcase (Obsidian Minimalist & Cinematic Glassmorphism)

This document establishes the updated color palette, typography hierarchy, double-bezel nested glass card layouts, nested CTAs, and custom motion guidelines. It transitions the website into an elite, award-tier digital experience, following the "Obsidian Minimalist" and "Cinematic Glassmorphism" design systems.

---

## 1. Aesthetic Identity & Style Family

- **Style Family**: **Obsidian Minimalist & Cinematic Glassmorphism**. A high-end dark theme using deep obsidian backgrounds, soft platinum text, glowing emerald-green and warm copper highlights, elegant display headings, and premium geometric sans-serif body text.
- **Mood**: Cinematic, mysterious, trustworthy, and premium.
- **Design Configuration (The Dials)**:
  * `DESIGN_VARIANCE`: 8 (Asymmetric bento layouts, staggered offsets, vertical rhythm breaks)
  * `MOTION_INTENSITY`: 8 (Cinematic entry transitions, scale reveals, scroll triggers)
  * `VISUAL_DENSITY`: 3.5 (Generous macro-whitespace, airy sections, large layouts)

---

## 2. Color System & CSS Theme Variables

We map our theme variables in `app/globals.css` to these values:

```css
@theme inline {
  /* Surface Palette (Obsidian & Platinum Glass) */
  --background: oklch(0.12 0.015 250);       /* Deep obsidian black (#0B0D12) */
  --foreground: oklch(0.93 0.01 250);        /* Platinum near-white text (#EDEFF2) */
  
  --card: oklch(0.16 0.015 250 / 0.6);       /* Translucent dark core card with glass blur */
  --card-foreground: oklch(0.93 0.01 250);
  
  /* Brand Accents (Restrained Saturation < 80%) */
  --primary: oklch(0.75 0.14 150);          /* Glowing Mint/Emerald Green (#7BF1A8) */
  --primary-foreground: oklch(0.12 0.015 250);
  
  --secondary: oklch(0.68 0.18 45);         /* Warm Copper/Amber (#E68C5E) */
  --secondary-foreground: oklch(0.12 0.015 250);

  --muted: oklch(0.18 0.015 250 / 0.5);      /* Dark steel translucent gray */
  --muted-foreground: oklch(0.62 0.01 250);  /* Muted silver label text (#9EA3AD) */
  
  --accent: oklch(0.20 0.02 150 / 0.3);      /* Translucent mint-glow highlights */
  --accent-foreground: oklch(0.93 0.01 250);

  --border: oklch(0.24 0.015 250 / 0.4);     /* Soft glowing hairline border */
  --input: oklch(0.20 0.015 250 / 0.5);
  --ring: oklch(0.75 0.14 150);             /* Mint green focus ring */

  /* Machined Double-Bezel Radius scale */
  --radius-outer: 24px;                     /* Outer rounded radius */
  --radius-inner: 18px;                     /* Inner content container (outer - 6px padding) */
  --radius-btn: 9999px;                     /* Full pill-shape buttons */

  /* Colored Diffused Shadows & Blurs */
  --shadow-card-subtle: 0 16px 40px oklch(0 0 0 / 0.4);
  --glass-blur: blur(12px);
}
```

---

## 3. Typography & Pairings

We pair an elegant serif display font with a geometric sans-serif body font for an expensive, custom-crafted feel.
- **Display Headings (`font-display`)**: `Playfair Display` or `Cormorant Garamond` (High-contrast display serif).
- **Body & UI Elements (`font-sans`)**: `Plus Jakarta Sans` or `Outfit` (Clean, geometric, premium humanist sans-serif).
- **Conventions**:
  - Display title letter-spacing: `-0.02em` (`tracking-tight`) to `-0.04em` (`tracking-tighter`).
  - No orphan words: Enforce `text-wrap: balance` on section headers.
  - H1 Hero text must NOT exceed 2 to 3 lines. Keep it wide and horizontal.
  - Italic/bold emphasis: Apply italics or bold weights of the *same* font family. Never mix serif and sans in a single word-by-word highlight.

---

## 4. Double-Bezel (Doppelrand) Glass Card Architecture

To convey physical depth in dark mode, card containers must use nested layers to look like a glass plate sitting in an obsidian bezel.
1. **Outer Shell**:
   - Class: `bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md` (radius-outer).
2. **Inner Core**:
   - Class: `bg-card border border-white/5 p-6 rounded-[18px] shadow-card-subtle backdrop-blur-lg` (radius-inner).
   - This prevents flat, plain card layouts and creates high-end visual layering.

---

## 5. Nested CTA & "Island" Button Design

Primary call-to-actions are pill-shaped and include a distinct interactive circle for their trailing icon:
- **Main Button Pill**: `bg-primary text-primary-foreground hover:brightness-110 font-bold rounded-full px-6 py-3 text-sm flex items-center gap-4 transition-all duration-300 shadow-button`
- **Button-in-Button Icon**: Any arrow (`↗`) or icon is nested inside its own round wrapper: `h-8 w-8 rounded-full bg-black/10 flex items-center justify-center shrink-0` (or `bg-white/10` on dark/secondary buttons).
- **Hover Physics**: The button scales slightly on hover/active (`active:scale-[0.98] transition-all`) and the nested icon translates diagonally: `group-hover:translate-x-1 group-hover:-translate-y-1`.

---

## 6. Layout Upgrades

- **Asymmetrical Bento Grids**: Break symmetry. Group capabilities and showcases in 2x2 or 3-column bento grids of varying card spans. Use `grid-flow-dense` to ensure zero empty cells.
- **Section Layout Diversity**: No two consecutive sections may use the same layout. Alternating "left-image + right-text" zigzag is banned.
- **whitespace Maximization**: Use spacious padding `py-32 md:py-48` to allow sections to breathe.
- **No cheap labels**: BANNED FOREVER are labels like "SECTION 01", "ABOUT US", "FAQ". Let the content and layout speak for themselves.

---

## 7. Motion Choreography (Spring Physics)

- **Scroll Entry Reveals**: As sections scroll into the viewport, they execute a subtle transition + fade (`translate-y-12 opacity-0 blur-sm` to `translate-y-0 opacity-100 blur-0` over 800ms).
- **Hover Scale**: Every clickable card and image must react on hover. Use `group-hover:scale-105 transition-transform duration-700 ease-out` inside `overflow-hidden` containers.
- **GPU Acceleration**: Always animate using `transform` and `opacity` to avoid mobile paint lag.
- **No horizontal scroll**: Wrap the entire page in `overflow-x-hidden w-full max-w-full` to prevent horizontal scrollbars caused by off-screen animations.
