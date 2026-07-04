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

---

## Phase 5: Brand Website Expansion (10 Pages)

## Task 13: Build Route `/services`

**Description:** Build Trang 1 (Specific Product/Service Page) with an interactive mind map and package grids.

**Acceptance criteria:**
- [x] Responsive `/services` route populated with the detailed services copy.
- [x] Render an interactive "Mind Map" linking services to client problems.
- [x] Packages comparison table styling matches Editorial Luxury double-bezel cards.

**Verification:**
- [x] Route compiles without warnings and is accessible at `/services`.
- [x] Clicking on a node in the mind map highlights its service card.

**Dependencies:** Checkpoint: Complete

**Files likely touched:**
- `app/services/page.tsx`

**Estimated scope:** Medium: 1-2 files

---

## Task 14: Build Route `/case-studies`

**Description:** Build Trang 2 (Detailed Project Case Study Page) with linear storytelling and before/after slider.

**Acceptance criteria:**
- [x] `/case-studies` route implemented following a clean, storytelling chapter-based layout.
- [x] Before/After slider component allows user to drag and see visual comparison.
- [x] Direct links back to booking page with selected template pre-filled.

**Verification:**
- [x] Navigating page by chapter sections is functional.
- [x] Dragging visual slider shifts before/after divider.

**Dependencies:** Task 13

**Files likely touched:**
- `app/case-studies/page.tsx`
- `components/before-after-slider.tsx`

**Estimated scope:** Medium: 2-3 files

---

## Task 15: Build Route `/legal`

**Description:** Build Trang 3 (Legal & Regulatory Compliance Page) with documents folders and in-browser previewer.

**Acceptance criteria:**
- [x] `/legal` route lists categorised legal documents with instant search filters.
- [x] In-browser Document Viewer Dialog previews PDFs inline.
- [x] Detailed disclosure panel outlining project mortgage status and guarantee information.

**Verification:**
- [x] Searching document names dynamically filters listed rows.
- [x] Clicking a document row displays preview dialog with iframe/embed.

**Dependencies:** Task 14

**Files likely touched:**
- `app/legal/page.tsx`

**Estimated scope:** Small: 1 file

---

## Task 16: Build Route `/construction`

**Description:** Build Trang 4 (Live Construction Progress & Site Diary Page) with site stats, reverse timeline, and Gantt chart.

**Acceptance criteria:**
- [x] `/construction` route displays reverse chronological site logs.
- [x] Stats grid displays machinery and workforce counts in double-bezel styling.
- [x] Embedded Gantt scheduler displays phase progression.
- [x] Camera stream mockup with feed selector.

**Verification:**
- [x] Timeline entries display latest on top.
- [x] Selecting different camera streams updates mock video frame.

**Dependencies:** Task 15

**Files likely touched:**
- `app/construction/page.tsx`

**Estimated scope:** Medium: 1 file

---

## Task 17: Build Route `/methodology`

**Description:** Build Trang 5 (Proprietary Methodological Process Page) with step-by-step flowchart and duration slider.

**Acceptance criteria:**
- [x] `/methodology` route displays flowchart of the 5 project delivery steps.
- [x] Timeline calculator adjusts estimated milestone durations based on project scale slider.
- [x] Explicit quality gates and communication checkpoints highlighted.

**Verification:**
- [x] Moving project scale slider updates the estimated times in each step.
- [x] Clicking steps scrolls page to detailed sections.

**Dependencies:** Task 16

**Files likely touched:**
- `app/methodology/page.tsx`

**Estimated scope:** Medium: 1 file

---

## Task 18: Build Route `/team`

**Description:** Build Trang 6 (Executive Board & SME Bios Page) with profile grids and SME filter.

**Acceptance criteria:**
- [x] `/team` route renders uniform cards with professional team photos.
- [x] SME Filter buttons allow toggling between Design, Architecture, and Engineering.
- [x] Profile bios click-to-activate a Drawer or Dialog component displaying full credentials.

**Verification:**
- [x] Toggling filters hides/shows corresponding cards immediately.
- [x] Clicking profile card displays bios drawer.

**Dependencies:** Task 17

**Files likely touched:**
- `app/team/page.tsx`

**Estimated scope:** Medium: 1-2 files

---

## Task 19: Build Route `/certifications`

**Description:** Build Trang 7 (Accreditations, Certifications & Standards Page) with credentials bento gallery.

**Acceptance criteria:**
- [x] `/certifications` route showcases ISO, LEED, EDGE badges inside double-bezel bento grids.
- [x] Credentials download row triggers PDF download or verification dialog.

**Verification:**
- [x] Clicking a certification opens the inspection dialog with issuer information.

**Dependencies:** Task 18

**Files likely touched:**
- `app/certifications/page.tsx`

**Estimated scope:** Small: 1 file

---

## Task 20: Build Route `/partners`

**Description:** Build Trang 8 (Strategic Partners & External Social Proof Page) with partner grayscale logos and verified testimonials.

**Acceptance criteria:**
- [x] `/partners` route lists grayscale partners logos with smooth hover opacity effects.
- [x] Testimonials grid displays client feedback with verified profile labels.

**Verification:**
- [x] Partner logos fade in on hover.
- [x] Testimonials are grouped by category (Financial, Construction, etc.).

**Dependencies:** Task 19

**Files likely touched:**
- `app/partners/page.tsx`

**Estimated scope:** Small: 1 file

---

## Task 21: Build Route `/resources`

**Description:** Build Trang 9 (Knowledge Portal & Resource Library Page) with instant text search and topic filters.

**Acceptance criteria:**
- [x] `/resources` route provides search inputs and format filters (Ebook, Whitepaper, Report).
- [x] Gated download dialog captures user email and name before starting mock PDF download.

**Verification:**
- [x] Search dynamically filters resources list.
- [x] Clicking download opens registration popup.

**Dependencies:** Task 20

**Files likely touched:**
- `app/resources/page.tsx`

**Estimated scope:** Medium: 1 file

---

## Task 22: Build Route `/booking`

**Description:** Build Trang 10 (Bottom-of-Funnel Conversion & Booking Page) with slot selector calendar and SLA guarantee card.

**Acceptance criteria:**
- [x] `/booking` route renders distraction-free booking form.
- [x] Interactive date-time grid allows selecting slots.
- [x] Direct SLA counter highlights "2 hours response guarantee".

**Verification:**
- [x] Form displays error alerts for invalid fields.
- [x] Submitting form displays success toast.

**Dependencies:** Task 21

**Files likely touched:**
- `app/booking/page.tsx`

**Estimated scope:** Medium: 1 file

---

## Task 23: Global Integration & Final Build Validation

**Description:** Integrate links to all 10 new routes inside the Navbar / Menu structure and verify the build passes.

**Acceptance criteria:**
- [x] Responsive navigation menu expanded to support submenus or links to the new 10 pages.
- [x] Production build succeeds without any warnings or typescript type checks failing.

**Verification:**
- [x] All pages linkable from Navbar.
- [x] Command compiles successfully: `npm run build`

**Dependencies:** Task 22

**Files likely touched:**
- `components/navbar.tsx`
- Entire workspace

**Estimated scope:** Medium: 2-3 files

---

### Checkpoint: Expansion Completed
- [x] All 10 routes successfully loaded on local dev server.
- [x] All interactive mock elements function without hydration error or console logs.
- [x] Next production build completes with zero lint or typescript warnings.

---

## Phase 6: Homepage Redesign & Obsidian Glassmorphic Theme Update

## Task 24: Global Theme Migration to Obsidian Dark Theme

**Description:** Migrate theme variables in `app/globals.css` to the Obsidian Minimalist deep dark theme with translucent glass variables.

**Acceptance criteria:**
- [x] Obsidian dark background OKLCH tokens set.
- [x] Platinum text and emerald/copper accents set.
- [x] Card backgrounds use semi-transparent OKLCH with glass blur variables.

**Verification:**
- [x] Check color application on global pages.

**Dependencies:** Checkpoint: Expansion Completed

**Files likely touched:**
- `app/globals.css`

**Estimated scope:** Small: 1 file

---

## Task 25: Implement Full-Bleed Hero Background Image

**Description:** Download/fetch a high-resolution abstract aesthetic background image from a public copyright-free provider and place it under `public/asset/img/` to use as the hero background.

**Acceptance criteria:**
- [x] Downloaded high-res dark/abstract design image saved under `public/asset/img/hero-bg.jpg`.
- [x] Image loads in layout without causing layout shifts.

**Verification:**
- [x] Check image file existence and load success.

**Dependencies:** Task 24

**Files likely touched:**
- `public/asset/img/hero-bg.jpg`

**Estimated scope:** Small: 1 file

---

## Task 26: Create Custom Scroll Animation Hook

**Description:** Build a custom React hook `useIntersectionObserver` or wrapper component to handle viewport-entry scroll reveals cleanly without external dependencies.

**Acceptance criteria:**
- [x] Hook/component returns visibility/intersection state.
- [x] Integrates smoothly with Tailwind transition utilities (fade, translation, blur).

**Verification:**
- [x] Components reveal when entering viewport.

**Dependencies:** Task 24

**Files likely touched:**
- `lib/hooks.ts` or `components/scroll-reveal.tsx`

**Estimated scope:** Small: 1 file

---

## Task 27: Redesign Home Page layout to Bento Glassmorphism

**Description:** Redesign the landing page (`app/page.tsx`) to match the "Obsidian Minimalist & Cinematic Glassmorphism" system. Include a 2-line hero, asymmetric bento layout, scroll reveals, zero emojis, and zero cheap labels.

**Acceptance criteria:**
- [x] Hero is centered, displaying text in 2 lines inside an ultra-wide container, overlaying the full-bleed image with radial dark overlay.
- [x] Content uses double-bezel glass cards.
- [x] No cheap labels ("ABOUT US", etc.) and zero emojis in layout.
- [x] Bento grids are gapless using `grid-flow-dense` and clean column/row spans.

**Verification:**
- [x] Confirm layout spacing, readability, and contrast in desktop & mobile viewports.

**Dependencies:** Tasks 25, 26

**Files likely touched:**
- `app/page.tsx`

**Estimated scope:** Medium: 1 file

---

## Task 28: Production Build & QA Verification

**Description:** Verify typescript compile and build process, checking for ESLint warnings or layout bugs.

**Acceptance criteria:**
- [x] Command compiles successfully: `npm run build`
- [x] Page renders without console warnings or layout breakages.

**Verification:**
- [x] Run `npm run build` and test.

**Dependencies:** Task 27

**Files likely touched:**
- Entire workspace

**Estimated scope:** Small: 1 file

---

### Checkpoint: Obsidian Redesign Completed
- [x] Visual verification of the obsidian dark theme and smooth scroll entry animation reveals.
- [x] Production build succeeds.


