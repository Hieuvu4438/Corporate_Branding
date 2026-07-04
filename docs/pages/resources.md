# Specification: Knowledge Portal & Resource Library Page (Cổng thông tin tri thức và thư viện tài nguyên nghiên cứu)

## 1. Objective
Định vị doanh nghiệp như một chuyên gia dẫn đầu trong ngành thông qua việc cung cấp các nghiên cứu chuyên sâu, sách trắng kỹ thuật, báo cáo thị trường độc quyền và các tài nguyên hướng dẫn thực tế cho cộng đồng.

---

## 2. Page Structure & Route
- **Path**: `/resources`
- **Scientific Portal Layout (Cổng thông tin khoa học)**:
  - **Hero Search Bar**: Large, distraction-free search input optimized for keyword indexing.
  - **Resource Filter Panel**: Lateral or horizontal category filter enabling users to filter resources by Topic (e.g. Xu hướng, Kỹ thuật, Đầu tư) and Format (e.g. Sách trắng, Ebook, Báo cáo, Bài viết).
  - **Asymmetric Knowledge Bento**: Grid displaying key featured resources with elegant typography and detailed description summaries.
  - **Document Roster & Download Row**: Clean list of downloadable documents with size indication, file format, and verified access gates (registration forms).

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Aesthetic**: Academic yet luxury-designed. Airy whitespaces, precise lines, serif headings.
- **Double-Bezel Resource Card**:
  - Outer: `bg-muted/50 border border-border p-2 rounded-[24px]`
  - Inner: `bg-card border border-border/40 p-6 rounded-[18px] flex flex-col justify-between h-[380px]`
- **Download CTA Style**: Custom pill-shaped button with a nested circle containing a downward arrow (`↓`).

---

## 4. Interactive Capabilities
1. **Instant Search Querying**: Client-side filtering of resources as the user types in the search field.
2. **Resource Category Filter Switcher**: Interactive category chips displaying items matching selected tags.
3. **Ebook/Whitepaper Gated Dialog**: Clicking download on premium files triggers a clean input popup form requesting email and name before initiating the file download.

---

## 5. Core Content (Vietnamese)
- **Danh mục tài nguyên công bố**:
  - *Xu hướng thị trường*: Các báo cáo nghiên cứu phân tích xu hướng quy hoạch đô thị thông minh, phát triển bền vững và xu hướng đầu tư theo chu kỳ.
  - *Hướng dẫn kỹ thuật*: Tài liệu kỹ thuật chi tiết phân tích vật liệu hoàn thiện thân thiện môi trường, tiêu chuẩn xây dựng an toàn.
  - *Cẩm nang đầu tư*: Bộ cẩm nang pháp lý, cẩm nang tài chính giúp nhà đầu tư cá nhân tự đánh giá rủi ro.
  - *Báo cáo & Sách trắng độc quyền*: Ebook hoặc Sách trắng chuyên đề (Whitepaper) được nghiên cứu bởi ban cố vấn chuyên gia, cung cấp định dạng PDF chất lượng cao tải về miễn phí.
