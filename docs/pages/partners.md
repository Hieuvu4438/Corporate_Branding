# Specification: Strategic Partners & External Social Proof Page (Trang đối tác chiến lược và minh chứng xã hội bên ngoài)

## 1. Objective
Khẳng định uy tín và vị thế thương hiệu bằng cách liên kết hình ảnh với các đối tác chiến lược tên tuổi và giới thiệu các đánh giá khách quan, có thể xác thực từ khách hàng thực địa và các nền tảng đánh giá độc lập.

---

## 2. Page Structure & Route
- **Path**: `/partners`
- **Double Grid Layout**:
  - **Brand Partner Showcase**: Logo list of premier banking, construction, design, and supplier partners.
  - **Case Testimonial Grid**: Asymmetric layout of card testimonials containing real profile metadata.
  - **Platform Review Widgets**: Custom visual cards mirroring social reviews from LinkedIn, Trustpilot, or industry specific review sites to guarantee objectivity.

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Aesthetic**: Warm and collaborative. Elegant grid alignment.
- **Partner Logos Style**: Restrained design—logos displayed in gray-monochrome tint with an opacity fade (`opacity-60 hover:opacity-100 transition-all duration-300`). 
- **Double-Bezel Testimonial Cards**:
  - Outer: `bg-muted/50 border border-border p-2 rounded-[24px]`
  - Inner: `bg-card border border-border/40 p-6 rounded-[18px] shadow-card-subtle flex flex-col justify-between`
- **Quote Symbol**: Large, elegant display font double quotes in terracotta (`text-secondary/15`).

---

## 4. Interactive Capabilities
1. **Interactive Review Filters**: Filter reviews by "Đối tác tài chính", "Nhà thầu", "Nhà cung cấp thiết bị", "Khách hàng cá nhân".
2. **Review Verification Link**: Testimonial cards include a verified icon linking directly to the partner's official LinkedIn profile or project reference document.
3. **Live Counter Dashboard**: Display metrics like "Total Partners: 40+", "Customer Retain Rate: 98%".

---

## 5. Core Content (Vietnamese)
- **Danh sách đối tác chiến lược**:
  - *Đối tác tài chính*: Các ngân hàng thương mại uy tín hàng đầu cung cấp tín dụng dự án và cam kết bảo lãnh tiến độ thi công.
  - *Nhà thầu xây dựng*: Tổng thầu thi công xây lắp có thứ hạng năng lực cấp I.
  - *Đơn vị thiết kế*: Các văn phòng thiết kế kiến trúc và cảnh quan nổi bật trong nước và quốc tế.
  - *Nhà cung cấp thiết bị*: Các thương hiệu thiết bị hoàn thiện nội thất và hạ tầng MEP tiêu chuẩn cao cấp.
- **Phản hồi từ khách hàng & Đối tác**: Các bài đánh giá bằng văn bản có đầy đủ chữ ký hoặc xác nhận trực tiếp từ người đại diện pháp luật, nêu rõ họ tên, chức vụ chính thức, và tên doanh nghiệp/đơn vị công tác để bảo đảm tính chân thực cao nhất.
