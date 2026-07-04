# Design Guidelines: Corporate Branding Portfolio (HopeRise Aesthetic)

This document establishes the color palette, typography hierarchy, card layouts, and motion guidelines modeled after the warm, empathetic, and modern **HopeRise Dribbble style**, integrated into our React and Tailwind CSS theme structure.

---

## 1. Aesthetic Identity: HopeRise Style

### Physical Scene
- **Audience**: Client partners, healthcare startup founders, enterprise product managers.
- **Mood**: Empathetic, trustworthy, hopeful, and modern. 
- **Core Aesthetic Elements**:
  - Soft, warm-neutral backgrounds instead of sterile corporate blues or cold grays.
  - Saturated accent colors (coral-orange and sage green) that pop for CTAs and critical states.
  - Highly rounded, spacious card-based sections (card border-radius = 16px).
  - Clean, borderless input fields with soft-toned background surfaces.

---

## 2. Color System & Tailwind Configuration

We define our color variables in the OKLCH color space for uniform chroma and lightness. These variables are placed in `app/globals.css` and mapped to Tailwind configuration tokens.

### globals.css Theme Variables
```css
@theme {
  /* Surfaces (Warm-Neutral Palette) */
  --color-background: oklch(0.985 0.005 60);      /* Soft, warm-toned off-white */
  --color-card: oklch(1 0 0);                     /* Pure white for primary floating cards */
  --color-muted: oklch(0.96 0.008 60);            /* Very light warm-gray for section containers */
  
  /* Typography (High Contrast >= 4.5:1) */
  --color-foreground: oklch(0.2 0.015 60);        /* Deep warm-charcoal for title and body copy */
  --color-muted-foreground: oklch(0.45 0.01 60);  /* Muted brown-gray for labels and help text */
  --color-reverse: oklch(0.98 0.005 60);          /* Light off-white text for dark modes/overlays */

  /* HopeRise Accents */
  --color-primary: oklch(0.68 0.16 25);           /* Optimistic Coral-Orange (primary CTA buttons, hope indicator) */
  --color-secondary: oklch(0.55 0.12 165);        /* Calming Sage Green (representing healing, capabilities, success) */
  --color-accent: oklch(0.95 0.02 165);           /* Soft sage surface for badges or light highlights */
  
  /* Borders and Interactive States */
  --color-border: oklch(0.9 0.008 60);            /* Soft border outline */
  
  /* Border Radius & Styling Constraints */
  --radius-sm: 8px;                               /* Small inputs, tags */
  --radius-md: 12px;                              /* Buttons, minor elements */
  --radius-lg: 16px;                              /* Card containers (max rounding constraint) */
  
  /* Custom Shadows */
  --shadow-card-subtle: 0 8px 24px oklch(0.2 0.015 60 / 0.03);
}
```

### Shadcn UI Mapping Guidelines
When using Shadcn components (e.g., Accordion, Input, Button), we make sure their default styles inherit from the HopeRise OKLCH variables:
- Primary button classes resolve to `bg-primary text-reverse hover:opacity-90`.
- Accordion borders match `border-border`.
- Input focus rings match the primary accent: `focus-visible:ring-primary`.

---

## 3. Typography & Typesetting

- **Typography Stack**:
  - Headings (`font-display`): `Montserrat` or `Outfit` (clean, geometric humanist sans-serif).
  - Body & UI (`font-sans`): `Inter` or system-ui sans-serif.
- **Rules**:
  - Max body line width: Tailwind `max-w-2xl` or `max-w-prose` (`65–75ch`).
  - Display heading letter-spacing floor: `-0.03em` (`tracking-tight`).
  - Enforce `text-wrap: balance` on headers using Tailwind `text-balance`.
  - Line-height: `leading-relaxed` for paragraphs, `leading-tight` for heading elements.

---

## 4. Cards & Container Layout

- **Asymmetric Grid**: Avoid identical repeating columns. We layout lists and showcases in staggered sizes (e.g., `md:grid-cols-3` where cards span `col-span-1` and `col-span-2` in a bento pattern).
- **Solid Borders vs. Shadows**: To prevent the AI-characteristic "ghost card" pattern, cards must use either a single soft border (`border border-border`) or a subtle shadow (`shadow-card-subtle`), never both.
- **Thumb-Friendly Elements**: Buttons must be large and rounded (full pill shape `rounded-full` for CTAs). Click targets are at least `h-12` (48px tall).

---

## 5. Motion Guidelines

- **Easing Curve**: `cubic-bezier(0.16, 1, 0.3, 1)` (`ease-out-expo` or dynamic custom transition).
- **Staggered Reveals**: Portfolio grid elements transition with incremental delays (e.g., using Tailwind's transition utilities with inline style/Framer Motion delay variables).
- **Reduced Motion Support**: Ensure styling handles reduced motion preferences automatically:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
  ```
