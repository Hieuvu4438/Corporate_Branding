# Specification: Live Construction Progress & Site Diary Page (Trang tiến độ thi công và nhật ký công trình thực địa)

## 1. Objective
Tạo niềm tin và sự minh bạch tuyệt đối về tốc độ triển khai thực tế bằng cách cập nhật liên tục tiến độ thi công, khối lượng công việc hoàn thành, và dữ liệu trực địa sống động cho khách hàng cùng nhà đầu tư.

---

## 2. Page Structure & Route
- **Path**: `/construction`
- **Reverse Chronological Timeline Layout**:
  - **Live Camera Stream Wrapper**: Multi-feed video container displaying live streams or time-lapse captures from different field cameras.
  - **Interactive Gantt Scheduler**: A visual project scheduler showing the completion status of key phases (e.g., Móng, Thân, Hoàn thiện, Bàn giao).
  - **Site Activity Dashboard**: Grid of active counts (Engineers, Construction workers, Machinery items active on site).
  - **Reverse Construction Journal (Nhật ký thực địa ngược)**: Timeline list with the latest updates at the top, integrating weekly work logs, drone photos, and short video clips.

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Visuals**: Earthy tones, Sage green (`--primary`) timeline nodes, warm sand cards.
- **Double-Bezel Field Stats Grid**:
  - Outer: `bg-muted/50 border border-border p-2 rounded-[24px]`
  - Inner: `bg-card border border-border/40 p-6 rounded-[18px] text-center`
  - Used for showing "Workers: 245", "Machinery: 18 units", "Current Phase: Structural Frame".
- **Timeline Path Line**: Vertical hairline connector using `border-l border-border` with custom terracotta accents (`bg-secondary`) for the active phase node.

---

## 4. Interactive Capabilities
1. **Interactive Gantt Chart**: Click on individual tasks to check specific start dates, end dates, and detailed task notes.
2. **Camera Stream Switcher**: Choose different site feeds (e.g., Block A, Block B, Main Gate) inside the streaming panel.
3. **Filterable Construction Logs**: Toggle between "Tất cả", "Hình ảnh Drone", "Nhật ký Tuần", and "Video".

---

## 5. Core Content (Vietnamese)
- **Nhật ký hàng tuần & Số liệu thực địa**:
  - *Nhân sự huy động*: Thống kê nhân sự bao gồm chỉ huy trưởng, giám sát an toàn, kỹ sư hiện trường và công nhân thi công.
  - *Thiết bị huy động*: Cẩu tháp, máy đào, xe trộn bê tông, máy lu rung hiện hữu.
  - *Khối lượng công việc*: Đã hoàn thành đổ bê tông sàn tầng 15, bắt đầu thi công xây dựng tường bao tầng 12, đang lắp đặt hệ thống cơ điện (MEP) tầng 8.
- **Dữ liệu Drone & Time-lapse**: Các tệp đa phương tiện ghi lại toàn cảnh từ trên cao hàng tuần, chứng thực tiến độ vật lý trùng khớp với cam kết tiến trình.
