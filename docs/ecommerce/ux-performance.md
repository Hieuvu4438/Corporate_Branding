# E-Commerce Frontend: UX & Performance Guidelines (Editorial Luxury Style)

This document contains guidelines for designing high-conversion, accessible, and ultra-fast e-commerce interfaces. It outlines the visual and behavioral metrics required to build user trust.

---

## 1. Core Web Vitals & Optimization

Speed directly impacts the conversion funnel. We target sub-second response times:

```
[User Request] ──▶ [Edge Resolves Localization] ──▶ [RSC Streamed] ──▶ [Interactive Island Hydrated]
   < 50ms                   < 100ms                      < 400ms                < 800ms (Total TTI)
```

### A. Image Optimization
- **Next-Gen Formats**: All product media must be served in WebP or AVIF format.
- **Next.js Image Component**: Always use Next.js `<Image>` with explicit width/height layouts to eliminate Layout Shift (CLS). Use the `priority` attribute for above-the-fold hero banners.
- **Lazy Loading**: Secondary product detail sheets and carousel images must use lazy loading.

### B. JavaScript Weight Reduction
- **No Heavy Libraries**: Avoid heavy utility bundles (e.g., Moment.js, Lodash). Use native APIs (e.g., `Intl` for formatting prices).
- **Dynamic Imports**: Large components like the Checkout payment gateways are loaded dynamically on demand (`next/dynamic`) when the user reaches that checkout step.

---

## 2. Accessibility (WCAG 2.1 AA Compliance)

A premium site must be usable by everyone. We enforce the following checks:

- **Contrast Ratios**: Body text has a contrast ratio of at least 4.5:1 against the cream background. Primary sage green buttons (`#2E4A3F`) feature high-contrast light text (`#FAF8F5`).
- **Focus Rings**: Interactive elements feature high-visibility outline states on keyboard tab focus: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
- **Screen Reader Support**: All visual components (such as swatch buttons and cart counts) contain descriptive `aria-label` tags. Product images use meaningful `alt` descriptions instead of plain filenames.

---

## 3. Search Engine Optimization (SEO) Best Practices

- **Semantic Document Hierarchy**: Ensure exactly one `<h1>` tag resides on each page. Structural headers are mapped sequentially (`<h2>` -> `<h3>`).
- **Schema.org Structured Data**: Inject Product and Offer JSON-LD schema into the PDP template, allowing search engines to parse prices, ratings, and availability directly.
- **SEO Metadata**: Utilize Next.js dynamic metadata generation to customize HTML titles, open-graph image assets, and search snippet descriptions for all category and product routes.
