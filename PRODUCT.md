# Product Description: Corporate Branding Portfolio Website (Next.js App Router)

This document describes the updated product requirements, multi-page routing structure, and section features for our agency's portfolio. The design is inspired by the modern, accessible, and warm aesthetic of the "HopeRise" Dribbble showcase, built as a modern Next.js single-page application structure with sub-page routing inspired by the comprehensive layouts of `nodesign.vn`.

---

## 1. Product Goals & Target Audience

### Core Objective
To showcase the agency's ability to ship high-fidelity, user-centered, and production-grade applications across a robust, routing-based React architecture. The site establishes the agency's brand identity, outlines its core capabilities ("năng lực cốt lõi"), highlights major projects, answers prospective clients' concerns, and gathers business leads.

### Custom Copyright & Content Philosophy
- **Copyright Control**: All pages feature the custom footer copyright: `Copyright © 2026. All rights reserved.`
- **Content Strategy**: Pages will initially contain highly structured, clean layout containers filled with realistic placeholder text ("Lorem ipsum...") and clear markers so the user can easily fill in their custom copy later.

---

## 2. Page Architecture & Routing (Inspired by nodesign.vn)

The website consists of six distinct, interconnected routes managed via the Next.js App Router:

### A. Home (Trang chủ) - Route `/` (`app/page.tsx`)
- **Hero Banner**: Warm, high-impact introduction welcoming clients.
- **Philosophy**: Empathy-driven service pillars (Creativity, Excellence, Collaboration).
- **Feature Highlights**: A brief overview of our capabilities and a link to view our work.
- **Call-to-Action**: Clear entry points to get a project estimate.

### B. About Us (Về chúng tôi) - Route `/about` (`app/about/page.tsx`)
- **Story Section**: Explaining who we are, our mission, and how we bring "relief" to clients.
- **Values Grid**: Rounded, modern cards presenting our working philosophy.
- **Team Showcase**: Grid of team members (with placeholder avatars).

### C. Core Capabilities (Năng lực cốt lõi) - Route `/capabilities` (`app/capabilities/page.tsx`)
Detailed look at the digital services we offer:
- **Web & Web App Development**: Custom performant web architectures.
- **Mobile Application Development**: iOS & Android apps (such as CareMate).
- **Custom Software & Automations**: Special workflow builds (such as LegalDiff).
- **UI/UX Design**: Visual system and accessibility audits.

### D. Projects & Portfolio (Dự án tiêu biểu) - Route `/projects` (`app/projects/page.tsx`)
Case studies presenting details of our delivered projects using screenshots in `asset/img`:
- **LegalDiff**: A web-based comparative analysis engine for regulatory files.
- **CareMate**: A mobile health assistant showing mood checks, pill reminders, and healthy recipes.
- Includes an interactive client component switcher for smooth panel transitions between these two showcase projects.

### E. Q&A (Hỏi đáp) - Route `/faq` (`app/faq/page.tsx`)
An interactive collection of answers to address potential client concerns regarding project timelines, estimation, technology stacks, and handoff procedures. Built using Shadcn UI Accordion components with smooth transition animations.

### F. Contact (Liên hệ) - Route `/contact` (`app/contact/page.tsx`)
- **Contact Details**: Official office address, contact numbers, and email details.
- **Form Component**: A clean React-based form featuring client name, project scope, budget ranges, validation warnings, and client feedback states upon submission.

---

## 3. Aesthetic Style: HopeRise Design Theme

Our style matches the modern, warm, and highly clean look of the **HopeRise Charity Landing Page**:
- **Warm & Optimistic Tone**: Blending warm gray backgrounds with soft coral/peach and sage-teal accents.
- **Accessible Card Structures**: Rounded, light container cards (radii max 16px to maintain professional proportions) displaying metrics, text blocks, and project showcases.
- **Frictionless Forms**: Clean, distraction-free input elements.
- **Storytelling Layouts**: Alternating text and imagery to guide the reader's eye smoothly.
