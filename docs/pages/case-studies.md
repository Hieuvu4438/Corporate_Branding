# Specification: Detailed Project Case Study Page (Trang chi tiết nghiên cứu điển hình chiều sâu)

## 1. Objective
Giải quyết triệt để các hoài nghi của khách hàng về năng lực thực thi thực tế của doanh nghiệp thông qua một mạch kể chuyện tuyến tính sinh động, chứng minh bằng số liệu lượng hóa cụ thể và những đánh giá được xác thực từ khách hàng thực tế.

---

## 2. Page Structure & Route
- **Path**: `/case-studies` (and individual sub-paths e.g., `/case-studies/legaldiff`, `/case-studies/caremate` if detail pages are requested)
- **Linear Storytelling Flow**:
  - **Hero & Project Summary**: Wide showcase banner, metadata grid (Client, Industry, Date, Scope).
  - **Context & Challenge (Bối cảnh & Thách thức)**: Deep dive into the client's original problems and constraints.
  - **Solution & Rationale (Giải pháp & Lý do lựa chọn)**: Detailed explanation of the architectural approach and creative strategies chosen.
  - **Before & After Visual Slider (Thanh trượt so sánh trực quan)**: An interactive component showcasing the contrast in layout or UI metrics before and after the solution.
  - **Implementation Roadmap (Quy trình triển khai)**: Timeline of milestones, sprint executions, and quality gates.
  - **Results & Client Testimonial (Kết quả & Đánh giá)**: Quantified performance indices (LCP speed, conversion rate, cost reduction) alongside signed testimonial.
  - **Soft Call to Action (CTA nhẹ nhàng)**: Guidance on how client can apply similar solutions to their own specific issues.

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Layout Rhythm**: Airy, large macro-whitespace (`py-24 md:py-32`) to support long-form readability. High typographic contrast with Cormorant Garamond headings and Outfit body texts.
- **Double-Bezel Metrics Panel**: Key result figures (e.g., "+150% Page Speed", "45% Reduction in Review Overhead") framed in the double-bezel cards:
  - Bezel: `bg-muted/50 border border-border p-2 rounded-[24px]`
  - Core: `bg-card border border-border/40 p-6 rounded-[18px] text-center`
- **Slider Physics**: Smooth drag physics with cursor hints (`← Drag →`) to sliding-reveal before/after screens.

---

## 4. Interactive Capabilities
1. **Interactive Before/After Slider**: Drag or swipe to interactively compare old vs. new designs or architectures.
2. **Project Index Navigation**: A sticky lateral menu indexing the storytelling chapters (Bối cảnh, Thách thức, Giải pháp, Quy trình, Kết quả) for fast jumping.
3. **Dynamic Resource Download**: A subtle CTA allowing readers to download a PDF copy of the case study.

---

## 5. Core Content (Vietnamese)
- **Mạch Kể Chuyện Chi Tiết**:
  - **Bối cảnh**: Khách hàng đang đối diện với hệ thống quản trị dữ liệu cồng kềnh, quy trình thủ công tốn thời gian.
  - **Thách thức**: Cần tối ưu hóa quy trình so sánh văn bản pháp quy mà không làm rò rỉ dữ liệu mật của khách hàng doanh nghiệp.
  - **Giải pháp**: Xây dựng engine phân tích văn bản cục bộ (LegalDiff) với giao diện trực quan và cơ chế mã hóa đầu-cuối.
  - **Quy trình triển khai**: Sprint 1 (Khảo sát & UX wireframe), Sprint 2 (Xây dựng Thuật toán so sánh song song), Sprint 3 (Tối ưu hóa UI/UX và bảo mật), Sprint 4 (Đánh giá & Triển khai Beta).
  - **Kết quả đạt được**: Tiết kiệm 70% thời gian kiểm tra chéo, tỷ lệ sai sót giảm về dưới 1%, được xác nhận trực tiếp bởi Ban giám đốc Pháp chế của đối tác.
