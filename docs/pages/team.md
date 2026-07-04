# Specification: Executive Board & SME Bios Page (Trang ban lãnh đạo và đội ngũ chuyên gia chuyên môn)

## 1. Objective
Nhân hóa thương hiệu, kiến tạo lòng tin vững chắc và khẳng định năng lực thực thi đỉnh cao bằng cách giới thiệu chi tiết về ban lãnh đạo cùng đội ngũ chuyên gia chủ chốt sở hữu đầy đủ chứng chỉ chuyên môn và triết lý làm việc chuẩn mực.

---

## 2. Page Structure & Route
- **Path**: `/team`
- **Clean Profile Grid Layout**:
  - **Philosophy & Vision Hero**: Large display serif layout conveying the core human values of the team.
  - **Executive Board Section**: Symmetrical rows of premium profile cards representing the founding board.
  - **SME & Specialist Directory**: Filterable roster of Subject Matter Experts (SMEs, Architects, Lead Developers, Project Managers) including credential badges.
  - **Interactive Detail Drawer/Modal**: When clicking a team member card, a beautiful slide-out panel reveals their complete biography, education, notable career highlights, and personal code of ethics.

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Profile Image Rules**: Uniform portrait photography using custom monochromatic or warm sepia tones. No generic cartoon avatars or low-res images. High quality rendering.
- **Double-Bezel Profile Cards**:
  - Outer: `bg-muted/50 border border-border p-2 rounded-[24px] group`
  - Inner: `bg-card border border-border/40 p-6 rounded-[18px] flex flex-col items-center relative overflow-hidden`
- **Social Links Integration**: Clean LinkedIn and email icons positioned inside a subtle bottom corner island.

---

## 4. Interactive Capabilities
1. **Bio Drawer (Slide-out panel)**: Click a profile card to activate a Radix Drawer revealing comprehensive credentials and background.
2. **SME Specialty Filter**: Fast button tabs allowing users to filter the expert list by specialty (e.g. "Thiết kế", "Kiến trúc", "Lập trình", "Giám sát").
3. **Work Philosophy Highlight**: Hovering over a card shows a subtle quote overlay representing their work philosophy.

---

## 5. Core Content (Vietnamese)
- **Hồ sơ thành viên bao gồm**:
  - *Thông tin cá nhân*: Tên, chức vụ, ảnh chân dung thực tế đồng bộ.
  - *Hồ sơ năng lực*: Số năm kinh nghiệm hoạt động, học vị/quá trình đào tạo chính quy, và các dự án tiêu biểu từng chỉ huy trực tiếp.
  - *Bằng cấp & Chứng chỉ hành nghề*: Chứng chỉ kiến trúc sư hạng I, chứng chỉ giám sát thi công, chứng chỉ quản lý dự án quốc tế (PMP), v.v.
  - *Triết lý làm việc*: Châm ngôn cá nhân hướng tới khách hàng, ví dụ: "Chất lượng không nằm ở bản vẽ vẽ đẹp, mà nằm ở công trình bền vững ngoài thực tế."
- **Liên kết xã hội**: Tài khoản mạng xã hội chuyên nghiệp LinkedIn, hòm thư email trực thuộc tổ chức.
