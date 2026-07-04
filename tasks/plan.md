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

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| SSR / Hydration Errors | Medium | Isolate client state variables to dedicated `"use client"` files. |
| Inaccessible Color Contrast | High | Audit OKLCH color token combinations against WCAG 4.5:1 ratio rules. |
| Slow Initial Page Loads | Low | Use Next.js `Image` and Font loaders to optimize bundle deliveries. |
| Visual AI Slop Defaults | Medium | Set strict card rounding limit (max `rounded-2xl` / 16px) and avoid border/shadow overlap. |

## Open Questions
- Do we want to set up an actual email backend service (like Resend) for the contact form, or should we keep it as a fully simulated frontend submission?
