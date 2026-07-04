# Task List: Corporate Branding Portfolio Website (Next.js Conversion)

Follow this checklist sequentially to initialize, code, and test the modern React & Next.js web application.

---

## Phase 1: Environment & Foundations

## Task 1: Next.js Workspace Initialization

**Description:** Initialize the Next.js workspace using TypeScript, ESLint, and Tailwind CSS.

**Acceptance criteria:**
- [x] Standard Next.js configuration files (`package.json`, `tsconfig.json`, `next.config.js`) generated.
- [x] Root directories created with strict directory rules.

**Verification:**
- [x] Build succeeds: `npm run build` (initial build)
- [x] Dev succeeds: `npm run dev` starts dev server without crash

**Dependencies:** None

**Files likely touched:**
- `package.json`
- `tsconfig.json`
- `next.config.js`

**Estimated scope:** Medium: 3-5 files

---

## Task 2: HopeRise Theme & Tailwind Config

**Description:** Set up CSS files and globals to support custom HopeRise OKLCH theme variables.

**Acceptance criteria:**
- [x] Global OKLCH variables injected for background, foreground, border, primary and secondary brand accents.
- [x] Base background color set to soft, warm-toned off-white.

**Verification:**
- [x] Styles load correctly inside the browser dev tools.
- [x] OKLCH colors reflect accurately across primary styles.

**Dependencies:** Task 1

**Files likely touched:**
- `app/globals.css`

**Estimated scope:** Small: 1-2 files

---

## Task 3: Shadcn UI Integration

**Description:** Set up Shadcn UI component configuration and initialize basic component primitives.

**Acceptance criteria:**
- [x] `components.json` config created.
- [x] Shadcn/Radix components initialized (Button, Accordion, Input, Textarea, Card).

**Verification:**
- [x] Code builds without errors: `npm run build`
- [x] Primitive components load in source directory under `components/ui/`.

**Dependencies:** Task 2

**Files likely touched:**
- `components.json`
- `components/ui/button.tsx`
- `components/ui/accordion.tsx`

**Estimated scope:** Small: 1-2 files

---

### Checkpoint: Foundation
- [x] Dev server spins up.
- [x] Custom OKLCH color rules load correctly in global styling.

---

## Phase 2: Core Routing & Layout

## Task 4: Shared Navigation Header & Copyright Footer

**Description:** Implement custom Navbar and Footer components including the persistent footer copyright: `Copyright © 2026. All rights reserved.`

**Acceptance criteria:**
- [x] Navbar contains active link markers for pages.
- [x] Footer has the exact custom copyright string.

**Verification:**
- [x] Footer copyright displays the exact required text.
- [x] Links navigate safely.

**Dependencies:** Task 3

**Files likely touched:**
- `components/navbar.tsx`
- `components/footer.tsx`

**Estimated scope:** Small: 1-2 files

---

## Task 5: Root Layout Construction

**Description:** Build the Next.js root layout page, wrapping pages with font files, styles, and Navbar/Footer wrappers.

**Acceptance criteria:**
- [x] Montserrat/Outfit display fonts and Inter body fonts loaded.
- [x] Root HTML uses shared layout design wrappers.

**Verification:**
- [x] Navigating between pages keeps navigation header and footer static and visible.

**Dependencies:** Task 4

**Files likely touched:**
- `app/layout.tsx`

**Estimated scope:** Small: 1-2 files

---

## Task 6: Home (Trang chủ) & About Us routes

**Description:** Implement content pages for `/` (Home) and `/about` with values grids, storytelling blocks, and clean structured layout blocks.

**Acceptance criteria:**
- [x] Story sections, team grid highlights, and core values (Sáng tạo - Xuất sắc - Hợp tác) display with realistic copy.
- [x] Core layout follows HopeRise warm container structures.

**Verification:**
- [x] Visual view check at mobile, tablet, and wide desktop breakpoints.

**Dependencies:** Task 5

**Files likely touched:**
- `app/page.tsx`
- `app/about/page.tsx`

**Estimated scope:** Medium: 3-5 files

---

## Task 7: Capabilities route

**Description:** Implement services descriptions under the `/capabilities` route listing web/app design and custom tools.

**Acceptance criteria:**
- [x] Grid of capabilities cards matches the 16px corner constraints.
- [x] Colors use defined OKLCH accent tokens with high contrast ratio.

**Verification:**
- [x] Keyboard tabs focus capabilities items correctly.

**Dependencies:** Task 5

**Files likely touched:**
- `app/capabilities/page.tsx`

**Estimated scope:** Small: 1-2 files

---

### Checkpoint: Core Routing & Layout
- [x] Links transfer between route paths without broken anchors.
- [x] Layout renders correctly down to mobile viewports.

---

## Phase 3: Case Studies & Interactivity

## Task 8: Projects Showcase & Screenshot Assets

**Description:** Design basic layout frames in `/projects` route displaying case studies for LegalDiff and CareMate, mapping screenshot image assets.

**Acceptance criteria:**
- [x] Next.js optimized Image tags used for displaying image files.
- [x] Descriptive alt text present on all images.

**Verification:**
- [x] Images render in correct dimensions.

**Dependencies:** Task 5

**Files likely touched:**
- `app/projects/page.tsx`

**Estimated scope:** Small: 1-2 files

---

## Task 9: Interactive Project Switcher

**Description:** Develop the custom client switcher component to toggle display views between LegalDiff and CareMate showcases.

**Acceptance criteria:**
- [x] Clicking toggle button switches visible project case study.
- [x] Uses simple client-side React hook states for transition swaps.

**Verification:**
- [x] Transition swaps render immediately with zero delay.

**Dependencies:** Task 8

**Files likely touched:**
- `app/projects/page.tsx`
- `components/project-switcher.tsx`

**Estimated scope:** Small: 1-2 files

---

## Task 10: FAQ Accordion Route

**Description:** Build the interactive Q&A page under `/faq` route using custom Shadcn Accordion components.

**Acceptance criteria:**
- [x] Multi-item accordion collapses and expands with fluid transition timing.
- [x] Custom accordion styles conform to HopeRise border/shadow rules.

**Verification:**
- [x] Interacting with spaces/enters expands accordion items.

**Dependencies:** Task 3

**Files likely touched:**
- `app/faq/page.tsx`

**Estimated scope:** Small: 1-2 files

---

## Task 11: Contact Route & Form Validation

**Description:** Build form inputs under `/contact` route with client-side field validation and simulated feedback states.

**Acceptance criteria:**
- [x] Fields enforce name, email, and description formats.
- [x] Error highlights display on invalid entries.
- [x] Success state mockup triggers upon simulated submission.

**Verification:**
- [x] Submitting blank form locks action and triggers visual warning texts.

**Dependencies:** Task 3

**Files likely touched:**
- `app/contact/page.tsx`

**Estimated scope:** Medium: 3-5 files

---

### Checkpoint: Interactive Features
- [x] Client component switcher toggles case studies smoothly.
- [x] Accordion transitions function without error.
- [x] Form warns of empty inputs before submission.

---

## Phase 4: Polish & Build Validation

## Task 12: Production Build & Types Verification

**Description:** Run final bundle optimization validation, verify typescript compiler outputs, and confirm ESLint passes.

**Acceptance criteria:**
- [x] All code components build successfully without warnings.

**Verification:**
- [x] Build succeeds: `npm run build`
- [x] Lint succeeds: `npm run lint`

**Dependencies:** All preceding tasks

**Files likely touched:**
- Entire workspace

**Estimated scope:** Small: 1-2 files

---

### Checkpoint: Complete
- [x] Production build succeeds.
- [x] Color contrast passes WCAG audits.
