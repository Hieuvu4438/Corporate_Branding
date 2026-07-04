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

### G. Specific Product/Service (Danh mục sản phẩm/dịch vụ chuyên biệt) - Route `/services` (`app/services/page.tsx`)
- **Interactive Mind Map**: Visual map mapping services to practical customer problems.
- **Comparison Table**: Package comparison grids displaying details of Start-up, Business, and Enterprise SLA levels.
- **Service Specific FAQ**: Collapsible Q&A targeted at specific service lines.

### H. Detailed Project Case Study (Chi tiết nghiên cứu điển hình chiều sâu) - Route `/case-studies` (`app/case-studies/page.tsx`)
- **Linear Storytelling Flow**: Sequential chapters detailing Context, Challenge, Solution, and Results.
- **Before/After Image Slider**: Interactive visual comparison of previous and current designs.
- **Quantified Metrics Dashboard**: Double-bezel cards displaying speed improvements and cost savings.

### I. Legal & Regulatory Compliance (Hồ sơ pháp lý và tuân thủ định danh) - Route `/legal` (`app/legal/page.tsx`)
- **Document Categories**: Grouped legal files including 1/500 plans, construction permits, and land allocations.
- **In-browser Viewer**: Embedded PDF previews for direct reading.
- **Transparency Alert**: Warning/info container displaying current mortgage and guarantee details.

### J. Live Construction Progress (Tiến độ thi công & Nhật ký công trình) - Route `/construction` (`app/construction/page.tsx`)
- **Live Feeds & Drone Footage**: Weekly aerial snapshots and camera live feed mockups.
- **Gantt Project Timeline**: Visual timeline indicating current construction progress.
- **Site Stats Dashboard**: Real-time counter of on-site workers, machinery, and safety hours.

### K. Proprietary Methodological Process (Quy trình & Phương pháp luận) - Route `/methodology` (`app/methodology/page.tsx`)
- **Step-by-step Flowchart**: Visual timeline representing the 5 key phases of delivery.
- **Interactive Calculator**: Interactive slider mapping expected timeline adjustments based on project complexity.
- **Quality Gates Checklist**: Outlines key control points for design-build execution.

### L. Executive Board & SME Bios (Ban lãnh đạo & Đội ngũ chuyên gia) - Route `/team` (`app/team/page.tsx`)
- **Professional Grid Cards**: Uniform portrait profiles of the leadership and key subject-matter experts.
- **Interactive Profile Drawer**: Slide-out drawer revealing professional backgrounds, credentials, and work philosophies.
- **Expertise Filters**: Categorized tabs segmenting by design, architecture, engineering, and management.

### M. Accreditations & Technical Standards (Chứng nhận & Tiêu chuẩn) - Route `/certifications` (`app/certifications/page.tsx`)
- **Honor Roster Bento Grid**: Visual badges for ISO, LEED, EDGE, and local safety standards.
- **Document Inspector Dialog**: Click to inspect high-resolution verification certificates.
- **B2B Credentials Pack**: Action button to download the complete compliance documents package.

### N. Strategic Partners & External Reviews (Đối tác chiến lược & Minh chứng xã hội) - Route `/partners` (`app/partners/page.tsx`)
- **Partner Showcase**: Elegant grayscale grids of banking, builder, and design partners.
- **Testimonial Slider**: Real client feedback with verified social links and positions.
- **Independent Reviews Grid**: Integration mockup of LinkedIn and Trustpilot independent ratings.

### O. Knowledge Portal & Resource Library (Thư viện tài nguyên nghiên cứu) - Route `/resources` (`app/resources/page.tsx`)
- **Knowledge Search**: Search bar with real-time text query filtering.
- **Resource Topics & Formats**: Categorized chips filtering by Sách trắng (Whitepaper), Ebook, and market reports.
- **Gated Download Flow**: Click-to-register forms for downloading free premium PDF research.

### P. Bottom-of-Funnel Conversion & Booking (Đặt lịch tư vấn chuyên biệt) - Route `/booking` (`app/booking/page.tsx`)
- **Distraction-Free Layout**: Minimal, focused layout designed to remove friction.
- **Calendar Time Scheduler**: Interactive scheduler grid showing available time slots.
- **SLA Promise Dashboard**: Guaranteed response SLA clock highlighting quick response commitments.

---

## 3. Aesthetic Style: HopeRise Design Theme

Our style matches the modern, warm, and highly clean look of the **HopeRise Charity Landing Page**:
- **Warm & Optimistic Tone**: Blending warm gray backgrounds with soft coral/peach and sage-teal accents.
- **Accessible Card Structures**: Rounded, light container cards (radii max 16px to maintain professional proportions) displaying metrics, text blocks, and project showcases.
- **Frictionless Forms**: Clean, distraction-free input elements.
- **Storytelling Layouts**: Alternating text and imagery to guide the reader's eye smoothly.
