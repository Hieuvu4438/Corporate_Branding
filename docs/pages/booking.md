# Specification: Bottom-of-Funnel Conversion & Booking Page (Trang chuyển đổi phễu cuối đặt lịch chuyên biệt)

## 1. Objective
Tối đa hóa tỷ lệ chuyển đổi cuối cùng bằng cách thiết kế một trang đặt lịch tư vấn chuyên sâu siêu tối giản, loại bỏ tất cả các yếu tố gây phân tâm, kết hợp biểu mẫu tinh gọn và lịch biểu trực quan để dẫn dắt khách hàng hoàn tất hành động.

---

## 2. Page Structure & Route
- **Path**: `/booking`
- **Distraction-Free Layout**:
  - **No Global Header/Footer Navigation (Tùy chọn/Nếu cần thiết có thể thu gọn)**: Clean layout focus without heavy dropdown links or promotion blocks to prevent user leaks.
  - **Consultation Scheduler Panel**: A side-by-side or stacked layout combining a visual calendar widget (date & time selection) and a concise profile/contact form.
  - **Trust/Legitimacy Columns**: Sidebar columns highlighting direct contact numbers, official email, physical maps of offices/sites, and direct SLA response promises (e.g. "Cam kết phản hồi trong 2 giờ làm việc").
  - **Privacy & Compliance Notice**: Prominent checkbox securing compliance with data protection policies (Nghị định 13/2023/NĐ-CP).

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Aesthetic**: Extreme simplicity, elegant beige backdrops, clean borders, high-contrast buttons.
- **Double-Bezel Booking Container**:
  - Outer: `bg-muted/50 border border-border p-3 rounded-[24px] max-w-4xl mx-auto`
  - Inner: `bg-card border border-border/40 p-8 rounded-[18px] shadow-card-subtle grid grid-cols-1 md:grid-cols-12 gap-8`
- **Form Controls**: Large input fields, soft focus indicators, floating labels.

---

## 4. Interactive Capabilities
1. **Interactive Calendar Datepicker**: Select days and open slots using a custom calendar grid showing real-time availability.
2. **Selected Slot Confirmation State**: Instantly renders chosen time and date badge with transitions.
3. **Response Guarantee Timer Mockup**: Animated counter or visual indicator confirming response commitments.

---

## 5. Core Content (Vietnamese)
- **Biểu mẫu đăng ký tinh gọn**:
  - *Thông tin tối giản*: Họ tên khách hàng, số điện thoại, hòm thư email, và nội dung cần tư vấn cốt lõi (ví dụ: tư vấn gói dịch vụ, đăng ký tham quan dự án).
  - *Thời gian cam kết phản hồi*: Quy định cụ thể thời gian phản hồi từ lúc đăng ký thành công (cam kết phản hồi trong tối đa 2 giờ làm việc).
- **Kênh liên hệ trực tiếp & Bản đồ thực tế**: Hotline tổng đài hỗ trợ 24/7, email doanh nghiệp chính thức, bản đồ định vị Google Maps chỉ dẫn chi tiết đường đi đến trụ sở văn phòng hoặc vị trí thực tế dự án.
- **Chính sách bảo mật**: Tuyên bố ngắn cam kết bảo mật tuyệt đối dữ liệu cá nhân theo các quy định hiện hành pháp luật Việt Nam.
