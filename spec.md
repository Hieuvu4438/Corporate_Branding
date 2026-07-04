# Spec: Corporate Branding Portfolio Website (Next.js & React)

## Objective
To build a premium, responsive multi-page portfolio website for our agency using a modern React & Next.js framework. The visual design is inspired by the modern, warm "HopeRise" Dribbble showcase, and the structure is adapted from `nodesign.vn`. The pages will contain custom header/footer layout, interactive components (accordions, switchers), and clean, realistic placeholder content for sections the client will fill in later.

---

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (v4/v3 with CSS variables and OKLCH color space config)
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Icons**: Lucide React
- **Development Tooling**:
  - Package Manager: `npm`
  - Linting: `eslint` (Strict React/TS rules)
  - Formatting: `prettier`

---

## Commands
```bash
# Setup: Install dependencies
npm install

# Dev: Run local development server
npm run dev

# Build: Compile production bundle
npm run build

# Start: Run production server locally
npm run start

# Lint: Run ESLint and check types
npm run lint
```

---

## Project Structure
We adhere to Next.js App Router patterns:

```
/
├── app/
│   ├── layout.tsx         # Shared root layout (Navbar, Footer, Providers)
│   ├── page.tsx           # Home (Trang chủ)
│   ├── about/
│   │   └── page.tsx       # About Us (Về chúng tôi)
│   ├── capabilities/
│   │   └── page.tsx       # Core Capabilities (Năng lực cốt lõi)
│   ├── projects/
│   │   └── page.tsx       # Portfolio & Showcase (Dự án)
│   ├── faq/
│   │   └── page.tsx       # Q&A (Hỏi đáp)
│   ├── contact/
│   │   └── page.tsx       # Contact (Liên hệ)
│   └── globals.css        # Tailwind directives + HopeRise OKLCH tokens
├── components/
│   ├── ui/                # Shadcn UI primitives (button, accordion, dialog, input, etc.)
│   ├── navbar.tsx         # Shared header navigation
│   ├── footer.tsx         # Persistent footer with custom copyright
│   ├── project-card.tsx   # Card component for projects showcase
│   └── contact-form.tsx   # Interactive contact form component
├── lib/
│   └── utils.ts           # Tailwind CSS class merging helper
├── asset/
│   └── img/               # Image screenshots (LegalDiff, CareMate)
├── PRODUCT.md             # Product description
├── DESIGN.md              # Styling rules and design tokens
├── spec.md                # This technical specification
└── tasks/
    ├── plan.md            # Implementation plan
    └── todo.md            # Checklist of tasks
```

---

## Code Style
We enforce clean, type-safe development using functional React paradigms:

### TypeScript & React Conventions
- Use functional components with explicit `React.FC` or return types.
- Strict type definitions for all props, states, and event handlers.
- Server Components by default; add `"use client"` only when interactive state (e.g., `useState`, `useEffect`) is required.

### Tailwind & CSS Conventions
- Centralized OKLCH theme variables in `app/globals.css` mapped to Tailwind configuration.
- Use `cn()` utility from `lib/utils.ts` for conditional class joining.
- Keep card corner rounding limited to standard values (max `rounded-2xl` or `16px`).
- Do not mix border lines and card shadows on the same card surface.

---

## Testing & Quality Strategy
1. **Routing Verification**: Check that Next.js file-system paths resolve correctly.
2. **Accessibility (A11y)**: Enforce standard Radix/Shadcn aria labels, keyboard focus indicators, and strict WCAG AA contrast.
3. **Responsive Testing**: Verify layout layouts adapt seamlessly across mobile (320px+), tablet (768px+), and desktop (1440px+) screen widths.
4. **Form State Validation**: Validate user contact input client-side using React state or React Hook Form before submitting.

---

## Boundaries
- **Always do**: Preserve the custom copyright string: `Copyright © 2026. All rights reserved.` in the persistent footer. Ensure WCAG contrast levels.
- **Ask first**: Installing heavy third-party UI state or animation libraries.
- **Never do**: Hardcode client secrets or API credentials in code files. Use Tailwind values outside the defined HopeRise OKLCH system.

---

## Success Criteria
- [ ] Working Next.js App Router project initialized with TypeScript and Tailwind CSS.
- [ ] Set up Shadcn UI component library and configured the HopeRise theme in OKLCH.
- [ ] Six functional pages created under `app/` structure (`/`, `/about`, `/capabilities`, `/projects`, `/faq`, `/contact`).
- [ ] The global layout (`app/layout.tsx`) includes a responsive header navigation and the custom persistent footer.
- [ ] Projects page features interactive showcase switcher between LegalDiff and CareMate, rendering high-fidelity screenshot assets.
- [ ] FAQ page uses Shadcn/Radix Accordion component for smooth collapsible Q&A items.
- [ ] Contact page contains interactive client-side form validation with visual feedback states.
- [ ] Responsive design scales correctly across mobile, tablet, and desktop breakpoints.

---

## Open Questions
1. Do we want to set up an actual email backend service (like Resend) for the contact form, or should we keep it as a fully simulated frontend submission?
