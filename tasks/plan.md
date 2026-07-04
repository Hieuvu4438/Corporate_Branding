# Implementation Plan: Corporate Branding Portfolio Website (Next.js Conversion)

## Overview
We are building a premium, responsive multi-page portfolio website for our branding agency using Next.js, React, TypeScript, Tailwind CSS, and Shadcn UI. The aesthetic is inspired by the warm, clean "HopeRise" Dribbble showcase, featuring a custom color palette defined in the OKLCH space. All routes will display a persistent layout with custom navigation and a footer carrying the mandatory copyright statement: `Copyright © 2026. All rights reserved.`

## Architecture Decisions
- **Next.js App Router (React 18/19)**: Selected for its file-system routing, out-of-the-box performance optimizations, and unified Server/Client Component paradigms.
- **TypeScript**: Enforces strict type-safety for components, properties, and forms.
- **Tailwind CSS**: Leveraged for modern CSS-first theme tokens, responsive breakpoints, and custom utility class combinations.
- **Shadcn UI & Radix UI**: Chosen for robust, accessible, unstyled interactive components (such as Accordions and Tabs) conforming to WCAG AA guidelines.

## Task List

### Phase 1: Foundation
- [ ] **Task 1: Next.js Workspace Initialization** - Scaffold the project framework and configurations.
- [ ] **Task 2: HopeRise Theme & Tailwind Config** - Define OKLCH tokens and base variables in global style sheets.
- [ ] **Task 3: Shadcn UI Integration** - Configure component JSON and pull primitive UI components.

### Checkpoint: Foundation
- [ ] Next.js development server spins up without compile warnings.
- [ ] Tailwind variables and OKLCH color rules load correctly in global CSS.

### Phase 2: Core Routing & Layout
- [ ] **Task 4: Shared Navigation Header & Copyright Footer** - Code Navbar/Footer with custom copyright strings.
- [ ] **Task 5: Root Layout Construction** - Assemble the global page layout wrapping pages with fonts, styles, and headers.
- [ ] **Task 6: Home (Trang chủ) & About Us routes** - Construct landing sections and values grids.
- [ ] **Task 7: Capabilities route** - Implement capabilities descriptions inside modern grid cards.

### Checkpoint: Core Routing & Layout
- [ ] Navigation transitions seamlessly between `/`, `/about`, and `/capabilities`.
- [ ] Custom layout (header, footer, fonts) displays consistently on all routes.

### Phase 3: Case Studies & Interactivity
- [ ] **Task 8: Projects Showcase & Screenshot Assets** - Build portfolio showcases for LegalDiff and CareMate.
- [ ] **Task 9: Interactive Project Switcher** - Create client-side tabs for switching case studies.
- [ ] **Task 10: FAQ Accordion Route** - Build interactive collapsible Q&A elements.
- [ ] **Task 11: Contact Route & Form Validation** - Code form inputs with dynamic client validation.

### Checkpoint: Interactive Features
- [ ] Client component switcher transitions between Case Studies without page reloads.
- [ ] FAQ accordion expands/collapses smoothly.
- [ ] Contact form alerts users of invalid inputs.

### Phase 4: Polish & Build Validation
- [ ] **Task 12: Production Build & Types Verification** - Resolve ESLint / TS warnings and build bundle.

### Checkpoint: Complete
- [ ] `npm run build` exits successfully.
- [ ] responsive rendering adapts properly down to 320px width.
- [ ] Accessibility contrast is validated for all primary and secondary actions.

### Phase 5: Brand Website Expansion (10 Pages)
- [ ] **Task 13: Build Route `/services`** - specific product/service page with interactive mind map and package grids.
- [ ] **Task 14: Build Route `/case-studies`** - detailed project case study with linear storytelling and before/after slider.
- [ ] **Task 15: Build Route `/legal`** - legal and compliance page with documents categorisation and in-browser previewer.
- [ ] **Task 16: Build Route `/construction`** - construction timeline page with reverse chronological site logs and Gantt chart.
- [ ] **Task 17: Build Route `/methodology`** - proprietary process step-by-step flowchart and duration slider estimator.
- [ ] **Task 18: Build Route `/team`** - leadership team grid with subject-matter expert filters and profile bios Drawer.
- [ ] **Task 19: Build Route `/certifications`** - quality standards bento gallery with credential inspection Dialog.
- [ ] **Task 20: Build Route `/partners`** - strategic partners grid with verified social testimonial cards.
- [ ] **Task 21: Build Route `/resources`** - knowledge portal with live-filtered search and gated download registration.
- [ ] **Task 22: Build Route `/booking`** - bottom-of-funnel booking calendar scheduler and SLA guarantee dashboard.
- [ ] **Task 23: Global Integration & Final Build Validation** - Add links to Navbar, compile production bundle.

### Checkpoint: Expansion Completed
- [ ] All 10 routes successfully loaded on local dev server.
- [ ] All interactive mock elements function without hydration error or console logs.
- [ ] Next production build completes with zero lint or typescript warnings.

### Phase 6: Homepage Redesign & Obsidian Glassmorphic Theme Update
- [ ] **Task 24: Global Theme Migration to Obsidian Dark Theme** - Update oklch color variables in `globals.css` to deep obsidian dark mode.
- [ ] **Task 25: Implement Full-Bleed Hero Background Image** - Curl/download a beautiful high-resolution abstract hero image and implement a full-screen, responsive landing page layout.
- [ ] **Task 26: Create Custom Scroll Animation Hook** - Build a custom React intersection observer hook for smooth scroll entry reveals.
- [ ] **Task 27: Redesign Home Page layout to Bento Glassmorphism** - Revamp `app/page.tsx` using `useIntersectionObserver`, asymmetric layouts, and glassmorphic double-bezel cards.
- [ ] **Task 28: Production Build & QA Verification** - Run type checks and build output checks.

### Checkpoint: Obsidian Redesign Completed
- [ ] The website renders in a dark obsidian luxury theme with emerald-green and warm copper highlights.
- [ ] Homepage hero is full-screen, displaying the abstract design image with high contrast and readable 2-line title.
- [ ] Sections fade and translate upwards smoothly on scroll.
- [ ] Cards have double-bezel glassmorphism (translucent core with glass blur).
- [ ] No cheap labels ("SECTION 01", etc.) and zero emojis in layout code.

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| SSR / Hydration Errors | Medium | Isolate client state variables to dedicated `"use client"` files. |
| Inaccessible Color Contrast | High | Audit OKLCH color token combinations against WCAG 4.5:1 ratio rules. |
| Slow Initial Page Loads | Low | Use Next.js `Image` and Font loaders to optimize bundle deliveries. |
| Visual AI Slop Defaults | Medium | Set strict card rounding limit (max `rounded-2xl` / 16px) and avoid border/shadow overlap. |
| Complex Hydration on calendar/Gantt | Medium | Use client-side components with custom hydration-safe initial states (e.g. `mounted` check). |
| Background Image Layout Shift | Low | Specify explicit dimensions and set up overlay to ensure typography stays high contrast. |

## Open Questions
- Do we want to set up an actual email backend service (like Resend) for the contact form, or should we keep it as a fully simulated frontend submission?
- What specific Unsplash high-res keyword fits the client's creative portfolio background? (Defaulting to "dark-abstract-design" or "modernist-architecture-detail").

