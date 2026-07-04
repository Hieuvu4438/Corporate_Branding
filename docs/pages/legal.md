# Specification: Legal & Regulatory Compliance Page (Trang công khai hồ sơ pháp lý và tuân thủ định danh)

## 1. Objective
Xây dựng lòng tin tuyệt đối cho khách hàng và đối tác đầu tư bằng cách công khai toàn diện hệ thống hồ sơ pháp lý của dự án, bảo đảm tuân thủ nghiêm ngặt Luật Kinh doanh Bất động sản và Luật Nhà ở.

---

## 2. Page Structure & Route
- **Path**: `/legal`
- **Minimalist Clean Layout**:
  - **Compliance Indexing Header**: A minimal typography section declaring compliance policies and certification standards.
  - **Dynamic Legal Document Finder**: A searchable, categorised interface allowing users to filter files by type (Quyết định chủ trương, Giao đất, Quy hoạch 1/500, Giấy phép xây dựng, Nghiệm thu hạ tầng).
  - **In-Browser Document Viewer**: A seamless PDF preview panel integrated directly into the page layout so users can read files without leaving the browser tab.
  - **Property Mortgage & Restrictions Disclosure**: Clear alert-box disclosure detailing the current mortgage status of the project, bank guarantees, and ownership restrictions.

---

## 3. Design & Styling (Editorial Luxury Theme)
- **Aesthetic**: Highly structured, high readability, avoiding visual noise. Soft warm gray backgrounds.
- **Alert Container (For Mortgage Status)**: Soft yellow/amber warning alert built with minimal styling (no generic bright red or green warnings):
  - Class: `bg-accent/40 border border-amber-900/10 p-5 rounded-[18px]`
- **Document List Grid**: Structured row lists using thin borders (`border-b border-border`) with interactive hover lines indicating clickable rows.

---

## 4. Interactive Capabilities
1. **Interactive Categorised Tabs**: Filter documents by legal categories.
2. **Dynamic In-Browser PDF Previewer**: Click a document link to open an embedded reader modal or side panel displaying the document.
3. **Instant Search Filter**: Quick text search on document name or date.

---

## 5. Core Content (Vietnamese)
- **Tập hồ sơ công khai bắt buộc**:
  - *Chủ trương đầu tư*: Văn bản phê duyệt chủ trương đầu tư từ Cơ quan có thẩm quyền.
  - *Giao đất*: Quyết định giao đất và biên bản giao đất thực địa của dự án.
  - *Phê duyệt quy hoạch 1/500*: Bản vẽ và Quyết định phê duyệt quy hoạch chi tiết tỷ lệ 1/500.
  - *Giấy phép xây dựng*: Giấy phép xây dựng được cấp kèm bản vẽ phê duyệt.
  - *Nghiệm thu phần móng / hạ tầng kỹ thuật*: Văn bản xác nhận hoàn thành phần móng và nghiệm thu hạ tầng kỹ thuật tương ứng.
- **Tình trạng thế chấp**: Công bố minh bạch tình trạng thế chấp dự án tại các tổ chức tín dụng và thông tin ngân hàng bảo lãnh tiến độ.
