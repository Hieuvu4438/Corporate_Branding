# Spec: E-Commerce Frontend Showcase & Documentation (Editorial Luxury Theme)

## Objective
To expand the HopeRise agency website with comprehensive domain knowledge and interactive capabilities for building modern, high-performance E-Commerce frontend solutions. Following the **Editorial Luxury** and **Soft Structuralism** style guidelines, this expansion will introduce:
1. A suite of detailed `.md` research and architecture documents detailing modern e-commerce frontends.
2. A new, interactive showcase route `/ecommerce` (`app/ecommerce/page.tsx`) containing interactive e-commerce components (such as a dynamic Product Card, a Category Filter panel, and a step-by-step Checkout tracker) designed using double-bezel nested layouts, button-in-button CTAs, and custom spring motion curves.
3. Integration with the existing Navbar and Home page to make the site feel rich and complete.

---

## Tech Stack & Fonts
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 (with existing OKLCH color variables configured in `globals.css`)
- **Icons**: Lucide React (configured with custom strokeWidth `1.2` or `1.5` to emulate thin Phosphor/Remix icons)
- **Fonts**:
  - Headings: `Cormorant Garamond` (editorial serif loaded from Google Fonts via `next/font/google` in `layout.tsx`)
  - Body/UI: `Outfit` (clean geometric sans loaded from Google Fonts)

---

## Commands
- Setup: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`

---

## Project Structure
We will add documentation files under `docs/ecommerce/` and add the route/components:

```
docs/ecommerce/
├── overview.md            # Headless & Composable E-Commerce Architecture
├── pages.md               # Page Blueprints (Home, Search, PDP, Cart, Checkout, Account)
├── components.md          # Component Specifications (Filters, Cards, Drawer, Form)
└── ux-performance.md      # Performance optimization, SEO & accessibility guidelines
app/
├── ecommerce/
│   └── page.tsx           # New Interactive E-Commerce Showcase Route
components/
├── ecommerce-card.tsx     # Custom interactive product card component (Double-bezel, button-in-button)
├── ecommerce-filters.tsx  # Interactive catalog category filters mockup
└── checkout-tracker.tsx   # Live step-by-step checkout progress visualizer
```

---

## Code & Design Style
We will adhere to the updated `DESIGN.md` rules:
- **Colors**: Tinted cream background (`#FAF8F5`), graphite near-black text (`#1E1D1B`), muted sage green (`#2E4A3F`) for primary items, warm terracotta (`#B85C46`) for highlights.
- **Card Elements**: Double-Bezel nested architecture:
  - Outer `div`: `bg-muted/50 border border-border p-2 rounded-[24px]`
  - Inner `div`: `bg-card border border-border/40 p-6 rounded-[18px] shadow-card-subtle`
- **CTAs**: Island button layout with trailing icon nested inside its own round wrapper. Arrow rotates and translates diagonally on hover.
- **Animations**: Transition cubic-bezier: `transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]`. Add gentle fade-up entry reveals on load.

---

## Testing Strategy
1. **Interactive State Verification**: Verify all client hooks (cart count, filters, checkout progress) update immediately without compile warnings or console errors.
2. **Responsive Rendering**: Ensure the new `/ecommerce` dashboard scales correctly across mobile (320px+), tablet, and desktop viewports.
3. **Build Integrity**: Ensure `npm run build` compiles with zero typescript and next.js bundle errors.

---

## Boundaries
- **Always do**: Wrap all content in standard HopeRise page wrappers, utilize existing navbar/footer layouts, and preserve the copyright: `Copyright © 2026. All rights reserved.`
- **Ask first**: If we need to install any external checkout validation library (we'll stick to native state/types for simplicity).
- **Never do**: Use raw Tailwind color codes; always map colors to CSS variables. Never overlap solid borders and harsh shadows.

---

## Success Criteria
- [ ] Four documentation files successfully created under `docs/ecommerce/`.
- [ ] New page at `/ecommerce` developed, rendering the live interactive mockups.
- [ ] Product Card component tracks client cart quantity addition and triggers toast-like notification state.
- [ ] Filter Sidebar allows user to interactively filter products (e.g. by category or price range).
- [ ] Checkout Tracker advances through sequential billing, shipping, payment, and success screens.
- [ ] Navbar links modified to include "E-Commerce" capability.
- [ ] Next.js production build completes without warnings or errors.
