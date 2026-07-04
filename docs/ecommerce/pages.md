# E-Commerce Frontend: Page & Routing Blueprints (Editorial Luxury Style)

This document specifies the routing structures, component trees, and visual hierarchy for the six foundational pages of a premium brand e-commerce storefront.

---

## 1. Page Map & Layout Layouts

```
Route Path         | Page Template Name             | Primary Focus
-------------------|--------------------------------|-------------------------------------
/                  | Homepage / Editorial Front     | Brand Narrative & Hero Drops
/shop              | Product Listing Page (PLP)     | Asymmetrical Catalog & Filters
/product/[slug]    | Product Detail Page (PDP)      | Machine-grade Specs & Details
/cart              | Cart Drawer / Cart Page        | Frictionless Order Summary
/checkout          | Multi-step Checkout            | Secure, distraction-free payments
/account           | Customer Portal                | Order history & subscription models
```

---

## 2. Page Specifications

### A. Homepage (Trang chủ)
The Homepage acts as an editorial magazine cover, setting the brand's tone.
- **Section 1: Hero Display**
  - *Layout*: Asymmetric split. Left-aligned title in large serif typeface (`Cormorant Garamond`), overlapping a high-fidelity lifestyle product image on the right.
  - *Key Components*: Fully rounded CTA button with diagonal arrow offset (`↗`) and inner button wrapper.
- **Section 2: The Manifesto**
  - *Layout*: Massive centered typography (max 65ch width) expressing the brand’s core material philosophy. No card containers — just whitespace and typography.
- **Section 3: Featured Bento Collection**
  - *Layout*: Bento grid (3 cells: one large `col-span-2` card highlighting a signature product, next to two stacked `col-span-1` category cards).

### B. Product Listing Page (PLP / Shop)
Designed to encourage browsing while keeping categorization intuitive.
- **Header Section**: Clean, text-based title. Max 1 eyebrow per section.
- **Interactive Filter Sidebar**: Floating column on the left (collapses on mobile). Allows users to refine products by material, size, price, and availability.
- **Asymmetric Grid**: Instead of repeating 4-column cards, use a staggered 3-column bento style, where selected items span wider sizes to spotlight new drops.

### C. Product Detail Page (PDP)
A highly detailed page focusing on conversion rate optimization and material transparency.
- **Left Column**: Infinite-scroll gallery showcasing high-resolution product photography (with hover zoom states).
- **Right Column (Sticky Panel)**:
  - Product title in Cormorant Garamond, pricing in a monospace/tabular font to reflect premium engineering, and short description (max 20 words).
  - Swatch selector (wood, brass, ceramic) using custom circular swatches.
  - Add to Cart CTA using the Nested Island button structure with an active click-press scale.
- **Spec Sheet Accordion**: Underneath, using the HopeRise double-bezel cards layout, displaying materials, sourcing origins, and warranty certifications.

### D. Cart Drawer & Overlay
A sliding overlay panel keeping the user inside their browsing flow.
- **Slide-over Panel**: Transitions from the right side of the screen using the custom cubic-bezier curve.
- **Mini-Cart Items**: Compact layout showing product thumbnails, variant details, and a tactile quantity selector.
- **Subtotal & Progress Bar**: Highlight free shipping thresholds using a terracotta secondary color indicator.

### E. Checkout Wizard
A isolated, distraction-free environment without header navbar distraction to prevent cart abandonment.
- **Step Visualizer**: Progress indicator (Billing -> Shipping -> Payment -> Success).
- **Double-Bezel inputs**: Nested clean input fields with soft border outlines and high-contrast error warnings.

### F. Customer Portal (Account)
- **Order Cards**: Double-bezel layout panels grouping purchase history, invoice PDF downloads, and active subscription adjustments.
