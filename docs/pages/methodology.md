# Specification: Proprietary Methodological Process Page (Trang quy trình và phương pháp luận độc quyền)

## 1. Objective
Cụ thể hóa các dịch vụ trừu tượng thành một lộ trình hợp tác chi tiết, giúp khách hàng hiểu rõ các mốc thời gian, mục tiêu chuyển giao và các điểm kiểm soát chất lượng nhằm giảm thiểu rủi ro hiểu lầm.

---

## 2. Page Structure & Route
- **Path**: `/methodology`
- **Linear Step-by-Step Flowchart**:
  - **Overview Header**: Display serif typography outlining the agency's signature execution philosophy.
  - **Flow diagram (Sơ đồ các bước)**: A sequence of connected horizontal or vertical steps with detailed sub-cards.
  - **Phase Detail Cards (Chi tiết giai đoạn)**: Content blocks detailing target durations, inputs, deliverables, and specific customer feedback points for each phase.
  - **Quality Gates & Control Board (Điểm kiểm soát chất lượng)**: A dedicated section outlining how we monitor parameters at each transition node.

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Aesthetic**: Structured structuralism, clean connecting lines, numeric indicator accents.
- **Connecting Layout**: Connect steps with thin dotted lines (`border-t border-dashed border-border/80`). 
- **Double-Bezel Phase Containers**: Each phase detailed in:
  - Outer: `bg-muted/30 border border-border/80 p-2 rounded-[24px]`
  - Inner: `bg-card border border-border/40 p-6 rounded-[18px]`
- **Icons**: Restrained Lucide React icons with strokeWidth `1.5` in muted sage green.

---

## 4. Interactive Capabilities
1. **Interactive Phase Selector**: Click on a flowchart step to highlights or scroll down to the respective detailed phase panel.
2. **Timeline Calculator Mockup**: A interactive slider allowing users to adjust expected project scale and see simulated phase durations adjust.
3. **Collaboration FAQ Accordion**: Interactive Q&A mapping how clients interact with the team (e.g. revisions, review cycles).

---

## 5. Core Content (Vietnamese)
- **Các giai đoạn quy trình cốt lõi**:
  - *Giai đoạn 1: Tiếp nhận thông tin & Khởi động*: Lắng nghe yêu cầu, định hình phạm vi công việc bước đầu (Dự kiến: 1 - 2 tuần).
  - *Giai đoạn 2: Khảo sát thực địa & Phân tích chuyên sâu*: Đánh giá hiện trạng mặt bằng, dữ liệu hiện trường và nghiên cứu đối thủ cạnh tranh (Dự kiến: 2 - 3 tuần).
  - *Giai đoạn 3: Thiết lập phương án & Ý tưởng thiết kế*: Xây dựng bản phác thảo ý tưởng, đề xuất giải pháp kiến trúc hoặc hệ thống (Dự kiến: 4 - 6 tuần).
  - *Giai đoạn 4: Thi công & Triển khai chi tiết*: Chế tác chi tiết, xây dựng hoặc lập trình theo thiết kế đã duyệt (Dự kiến: Theo quy mô dự án).
  - *Giai đoạn 5: Nghiệm thu, Kiểm thử & Bàn giao*: Vận hành thử nghiệm, đo đạc chất lượng thực tế và bàn giao hồ sơ lưu hành (Dự kiến: 2 - 4 tuần).
- **Cơ chế tương tác khách hàng**: Quy định rõ ràng chu kỳ báo cáo tuần, số lượt sửa đổi thiết kế hợp lệ, và quy trình phê duyệt (Sign-off) kết quả tại mỗi giai đoạn.
