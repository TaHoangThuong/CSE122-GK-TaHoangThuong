# BTL-32 – EventPulse: Phân hệ Người tham dự

**Họ và tên:** Tạ Hoàng Thương
**Mã sinh viên:** 2451170948
**Đề tài BTL:** BTL-32 - EventPulse - Thiết kế trải nghiệm sự kiện nhiều phiên  
**EventPulse - Người tham dự:** Dự án web độc lập cho workspace Người tham dự trong EventPulse.

---

## 1. Tổng quan phân hệ Người tham dự trong BTL-32

Trong đề tài **BTL-32 – EventPulse**, phân hệ **Người tham dự** giải quyết các vấn đề thực tế của khách tham gia sự kiện:

- Giúp người dùng duyệt danh sách session dài một cách dễ dàng.
- Tránh xung đột thời gian giữa các session bằng tính năng kiểm tra lịch cá nhân và gợi ý AI (`Conflict Resolver`, `Agenda Recommender`).
- Các trang và chức năng:
  - Khám phá session: tìm kiếm, lọc và mở chi tiết.
  - Chi tiết session: xem thông tin và thêm session vào agenda.
  - Agenda của tôi: theo dõi lịch, xử lý xung đột và danh sách chờ.
  - Phản hồi session: gửi và quản lý đánh giá.

---

## 2. Phần Bài Kiểm Tra Giữa Kỳ

- **Tên trang:** Khám phá Session
- **Tệp mã nguồn:** `pages/attendee-session-catalog.html`

### Các chức năng của trang:

- [x] **Tìm kiếm & Lọc dữ liệu:** Tự động cập nhật danh sách card khi gõ từ khóa hoặc chọn filter drop-down.
- [x] **Xử lý trạng thái sức chứa:** Hiển thị tiến trình và trạng thái.
- [x] **Mô phỏng trải nghiệm AI:** Khối gợi ý lịch trình cá nhân hóa dựa trên sở thích.
- [x] **Đặt lại bộ lọc:** Khôi phục trạng thái danh sách ban đầu chỉ bằng 1 cú click.
- [x] **Thiết kế Responsive:** Tối ưu hiển thị giao diện chuẩn trên cả Desktop và Điện thoại di động.

---

## 3. Công nghệ sử dụng

- **HTML5:** Cấu trúc Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`, `form`, `label`, `input`, `select`, `button`).
- **CSS3:** Flexbox, CSS Grid, Custom Properties (`:root`), thiết kế Responsive hoàn toàn cho Desktop, Tablet và Mobile (`attendee.css`, `attendee-responsive.css`).
- **JavaScript:** Quản lý trạng thái ứng dụng (`EP.state`), xử lý sự kiện DOM (`click`, `input`, `change`, `submit`), lưu trữ dữ liệu với `LocalStorage` và `IndexedDB`.

---

## 4. Nộp bài

- **Link Thiết kế Figma:** (https://www.figma.com/design/jfZKB5gs2q49Zt4ZQi0ruk/EventPulse--Ng%C6%B0%E1%BB%9Di-tham-d%E1%BB%B1-?node-id=0-1&t=5uhJriKon5JJPnZO-1)
- **Link Video YouTube:** (https://www.youtube.com/watch?v=AqiPbzTfcF0&list=PLMo1Vi5U124Y&index=1)
- **Link GitHub Repository:** (https://github.com/TaHoangThuong/CSE122-GK-TaHoangThuong)
