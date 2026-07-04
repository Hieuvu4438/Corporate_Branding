# Specification: Specific Product/Service Page (Trang danh mục sản phẩm và dịch vụ chuyên biệt)

## 1. Objective
Trang danh mục sản phẩm và dịch vụ chuyên biệt đóng vai trò là một phòng trưng bày giải pháp hướng tới khách hàng, không chỉ liệt kê các dịch vụ mà còn tối ưu hóa SEO và cung cấp thông tin chi tiết để khách hàng tự đánh giá mức độ phù hợp trước khi liên hệ.

---

## 2. Page Structure & Route
- **Path**: `/services`
- **Wireframe Layout**:
  - **Hero Header**: Warm cream background, editorial display serif title describing the overall value proposition of the agency's solutions.
  - **Visual Solution Mind Map (Sơ đồ tư duy trực quan)**: An interactive component displaying service hierarchies and how each service maps to specific real-world client problems.
  - **Services Bento Grid**: Dynamic cards for each service featuring asymmetrical offsets, clean titles, problem statements, and localized CTAs.
  - **Service Comparison Matrix (Bảng so sánh gói dịch vụ)**: Tabular comparison detailing features, SLA commitments, and target audience fit.
  - **Service-Specific Q&A (Hỏi đáp chuyên biệt)**: Collapsible accordion sections addressing precise service-related doubts.

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Theme Color**: Cream background (`--background`), primary graphite text (`--foreground`), sage green (`--primary`) accents for structure, terracotta (`--secondary`) indicators for the comparison grid.
- **Card Design**: Double-Bezel nested containers:
  - Outer bezel: `bg-muted/50 border border-border p-2 rounded-[24px]`
  - Inner core: `bg-card border border-border/40 p-6 rounded-[18px] shadow-card-subtle`
- **Micro-Animations**: Hover states on services cards scale the bezel slightly; mind map items fade and expand upon active interaction.

---

## 4. Interactive Capabilities
1. **Interactive Solution Mind Map**: Users can click nodes in the mind map to highlights the corresponding service card below.
2. **Comparison Matrix Toggle**: Quick filter/switch to compare different pricing/tier packages.
3. **Dedicated CTAs**: Each service has a custom button redirecting to the booking page `/booking` with the selected service pre-filled in the query parameters.

---

## 5. Core Content (Vietnamese)
- **Thông điệp cốt lõi**: Giải pháp thiết kế & phát triển thương hiệu toàn diện.
- **Các dịch vụ & Vấn đề giải quyết**:
  - *Tư vấn định vị thương hiệu*: Giải quyết bài toán thiếu bản sắc độc bản và thông điệp truyền thông không nhất quán.
  - *Thiết kế hệ thống nhận diện*: Giải quyết bài toán giao diện thương hiệu lỗi thời, không tối ưu cho môi trường số.
  - *Phát triển Web & Web App cao cấp*: Giải quyết bài toán hiệu suất tải trang kém, trải nghiệm UX phức tạp và tỷ lệ chuyển đổi thấp.
- **Bảng so sánh gói dịch vụ**: Phân định rõ ràng các gói Start-up, Business, Enterprise về mặt quyền lợi, số lần phản hồi, và mức độ cam kết thời gian bàn giao (SLA).
- **FAQ tích hợp**: Câu hỏi về thời gian thực hiện trung bình, chính sách bảo hành mã nguồn, và quy trình bàn giao tài sản thiết kế.
