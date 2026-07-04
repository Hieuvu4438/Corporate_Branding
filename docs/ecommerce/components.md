# E-Commerce Frontend: Component Specifications (Editorial Luxury Style)

This document provides detailed design, markup, and accessibility specifications for the core interactive components of the HopeRise e-commerce showcase.

---

## 1. Double-Bezel Product Card (`EcommerceCard`)

Designed as a nesting container representing physical depth (the "Doppelrand" pattern).

```
┌──────────────────────────────────────────────────┐
│  Outer Shell (bg-muted/50, border-border, p-2)   │
│  ┌────────────────────────────────────────────┐  │
│  │  Inner Core (bg-card, border-border/40)     │  │
│  │  ┌──────────────────────────────────────┐  │  │
│  │  │  Product Image (Hover Zoom)          │  │  │
│  │  └──────────────────────────────────────┘  │  │
│  │  Title (Cormorant Garamond)              │  │
│  │  Price ($98.00 - Tabular Figures)       │  │
│  │  Size / Swatch selectors                │  │
│  │                                          │  │
│  │  ┌──────────────────────────────────────┐  │  │
│  │  │  Island Button: Add to Cart (Pill)  │  │  │
│  │  └──────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

### A. Markup & Tailwind Structure
```tsx
export function EcommerceCard({ title, price, imageSrc, swatches }) {
  return (
    // Outer Shell
    <div className="bg-muted/50 border border-border p-2 rounded-[24px] group">
      {// Inner Core}
      <div className="bg-card border border-border/40 p-6 rounded-[18px] shadow-card-subtle flex flex-col justify-between h-full space-y-4">
        {/* Image Container with Hover zoom */}
        <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden bg-muted">
          <img 
            src={imageSrc} 
            alt={title} 
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 w-full h-full"
          />
        </div>
        
        {/* Typography */}
        <div className="space-y-1.5 text-left">
          <h4 className="font-display text-lg font-bold text-foreground text-balance">
            {title}
          </h4>
          <span className="font-mono text-sm tracking-tight text-muted-foreground font-variant-numeric: tabular-nums">
            {price}
          </span>
        </div>

        {/* Dynamic CTA Button (Button-in-Button) */}
        <button className="w-full bg-primary text-primary-foreground font-bold rounded-full py-2.5 pl-6 pr-2.5 text-sm flex items-center justify-between group/btn cursor-pointer transition-all duration-300 hover:opacity-95 active:scale-[0.98]">
          <span>Thêm vào giỏ hàng</span>
          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </button>
      </div>
    </div>
  );
}
```

---

## 2. Category Filter Sidebar (`EcommerceFilters`)

A highly clean, borderless list layout avoiding excessive lines to reduce visual noise.

- **Layout**: Stacks filter groups vertically.
- **Components**:
  - Search Input: A borderless input box wrapping a light search icon: `bg-muted/60 border border-border/50 focus-within:ring-1 focus-within:ring-primary rounded-[12px] px-4 py-3 text-sm`.
  - Filter Checkboxes: Fully accessible custom input elements linked to focus states (`focus-visible:ring-offset-2`).
  - Active Pills: Selected tags display at the top in sage green badges with close icons (`×`) to allow rapid clearing.

---

## 3. Step-by-Step Checkout Visualizer (`CheckoutTracker`)

A step tracker guiding customers through Billing -> Shipping -> Payment -> Success.

- **Progress Header**:
  - Multi-step header: Connecting lines fade from muted gray to primary sage green as steps complete.
  - Active steps display a numeric identifier: Active step scales up slightly (`scale-105`) with a transition duration of 500ms.
- **Distraction-Free Forms**:
  - Fields are structured inside a single grid container to maintain visual alignment.
  - Submit actions use the terracotta accent color (`bg-secondary`) to distinguish checkout transactions from standard browsing inputs.
