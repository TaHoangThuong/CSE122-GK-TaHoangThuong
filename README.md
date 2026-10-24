# BTL-32 – EventPulse: Thiết kế trải nghiệm sự kiện nhiều phiên

## 1. Thông tin sinh viên

- **Họ và tên:** Tạ Hoàng Thương
- **Mã sinh viên:** 2451170948
- **Vai trò phụ trách chính:** Người tham dự

---

## 2. Phát biểu vấn đề & Giải pháp

Trong các sự kiện lớn (nhiều track/session), người tham dự thường gặp khó khăn khi lịch trình bị trùng lặp, bỏ lỡ các session phù hợp với chuyên môn, hoặc khó theo dõi các thay đổi từ Ban tổ chức.

**Phân hệ Người tham dự của EventPulse** giải quyết bằng cách:

- Cung cấp **Session Catalog** trực quan để dễ dàng lọc và tìm kiếm.
- Tích hợp **AI Agenda Recommender** để cá nhân hóa lịch trình theo sở thích.
- Tích hợp **AI Conflict Resolver** để tự động phát hiện và gợi ý xử lý trùng lịch.

---

## 3. Bảng kiểm kê

| #   | Màn hình         | Tệp giao diện                    | Mục tiêu / CRUD chính                                  | Hoàn thành |
| --- | ---------------- | -------------------------------- | ------------------------------------------------------ | :--------: |
| 1   | Khám phá Session | `attendee-session-catalog.html`  | Xem danh sách, lọc, gợi ý AI Recommender               |     ✅     |
| 2   | Chi tiết Session | `attendee-session-detail.html`   | Xem chi tiết, diễn giả, tải tài liệu tải liệu, đặt chỗ |     ✅     |
| 3   | Agenda của tôi   | `attendee-my-agenda.html`        | Quản lý lịch cá nhân, xuất .ics, AI xử lý trùng lịch   |     ✅     |
| 4   | Phản hồi Session | `attendee-session-feedback.html` | Đánh giá, chấm điểm ẩn danh, Validate form             |     ✅     |

---

## 4. Các tính năng AI mô phỏng

Trải nghiệm AI được thiết kế theo đúng quy tắc: `Nhập -> Đang xử lý -> Kết quả -> Giải thích -> Người dùng kiểm soát`.

1. **AI-1: Agenda Recommender**
   - **Vị trí:** Trang Khám phá Session.
   - **Mô phỏng:** Phân tích từ khóa sở thích do người dùng nhập, chấm điểm độ phù hợp của session. AI tự động loại trừ các session đã hết chỗ và kiểm tra khoảng cách di chuyển (tối thiểu 8 phút) giữa 2 session.
2. **AI-2: Conflict Resolver**
   - **Vị trí:** Trang Agenda của tôi.
   - **Mô phỏng:** Quét mảng `agenda` để phát hiện trùng giờ. Gợi ý phương án: Gỡ session nhường chỗ, xem bản ghi (nếu có), hoặc giữ nguyên để tự xử lý thủ công.

---

## 5. Công nghệ & Kiến trúc mã nguồn

- **Thiết kế UI/UX:** Figma.
- **HTML5:** Semantic HTML, đảm bảo khả năng tiếp cận.
- **CSS3:** Áp dụng phương pháp Hướng thành phần. Dùng Flexbox/Grid, biến `:root` và Media Queries Responsive đa thiết bị (`attendee.css`, `attendee-responsive.css`).
- **JavaScript:**
  - Kiến trúc Event Delegation.
  - Quản lý State tập trung.
- **Lưu trữ dữ liệu:** Sử dụng `LocalStorage` và `IndexedDB`.
- **Quản lý phiên bản:** Git & GitHub.

---

## 6. Danh mục minh chứng

- **Link bản thiết kế Figma:** (https://www.figma.com/design/jfZKB5gs2q49Zt4ZQi0ruk/EventPulse--Ng%C6%B0%E1%BB%9Di-tham-d%E1%BB%B1-?node-id=0-1&t=5uhJriKon5JJPnZO-1)
- **Link GitHub:** (https://github.com/Do-Loc-tech/EventPulse/tree/nguoi-tham-du)

### Danh sách Video OBS

1. **Khám phá Session:** (https://www.youtube.com/watch?v=AqiPbzTfcF0&list=PLMo1Vi5U124Y&index=1)
2. **Chi tiết Session:** [Chèn link YouTube Video 2]
3. **Agenda của tôi:** [Chèn link YouTube Video 3]
4. **Phản hồi Session:** [Chèn link YouTube Video 4]
