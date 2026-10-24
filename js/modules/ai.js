window.EventAI = {
  // ==========================================
  // PHẦN 1: CÁC HÀM TIỆN ÍCH DÙNG CHUNG
  // ==========================================
  overlap(a, b) {
    return a.date === b.date && a.start < b.end && b.start < a.end;
  },

  hasTravelConflict(a, b, minutes = 8) {
    if (a.date !== b.date) return false;
    const time = (value) =>
      Number(value.slice(0, 2)) * 60 + Number(value.slice(3, 5));
    return (
      time(a.start) < time(b.end) + minutes &&
      time(b.start) < time(a.end) + minutes
    );
  },

  // ==========================================
  // PHẦN 2: DÀNH CHO TRANG "KHÁM PHÁ SESSION"
  // ==========================================
  recommend(sessions, interests, agenda, preferences = {}) {
    // 1. Phân tích từ khóa
    const terms = interests
      .toLocaleLowerCase("vi")
      .split(/[,;\s]+/)
      .filter(Boolean);

    // 2. Chấm điểm và lọc
    const result = sessions
      .filter(
        (s) =>
          !agenda.some((a) => a.id === s.id) &&
          s.booked < s.capacity &&
          s.status !== "Đã hủy",
      )
      .map((s) => ({
        session: s,
        score: terms.filter((t) =>
          (s.topic + " " + s.title).toLocaleLowerCase("vi").includes(t),
        ).length,
        conflict: agenda.some((a) => this.overlap(a, s)),
      }))
      .filter((r) => r.score > 0 && !r.conflict)
      .sort((a, b) => b.score - a.score);

    // 3. Lọc thêm tiêu chí cá nhân và thời gian di chuyển
    const finalResult = result.filter(
      (r) =>
        (!preferences.date || r.session.date === preferences.date) &&
        (!preferences.start || r.session.start >= preferences.start) &&
        (!preferences.end || r.session.end <= preferences.end) &&
        !agenda.some((a) => this.hasTravelConflict(a, r.session)),
    );

    // 4. Loại bỏ các session trong chính kết quả gợi ý bị trùng nhau
    const selected = [];
    for (const item of finalResult) {
      if (
        !selected.some((a) => this.hasTravelConflict(a.session, item.session))
      )
        selected.push(item);
    }
    return selected;
  },

  // ==========================================
  // PHẦN 3: DÀNH CHO TRANG "AGENDA CỦA TÔI"
  // ==========================================
  conflicts(sessions) {
    // Tìm tất cả các cặp session bị trùng giờ
    return sessions.flatMap((a, i) =>
      sessions
        .slice(i + 1)
        .filter((b) => this.overlap(a, b))
        .map((b) => [a, b]),
    );
  },

  resolve(sessions) {
    // Gợi ý phương án giải quyết (Giữ session bắt đầu sớm hơn)
    const accepted = [],
      removed = [];
    [...sessions]
      .sort((a, b) => a.start.localeCompare(b.start))
      .forEach((s) =>
        (accepted.some((a) => this.overlap(a, s)) ? removed : accepted).push(s),
      );
    return { accepted, removed };
  },

  // ==========================================
  // PHẦN 4: DÀNH CHO CÁC VAI TRÒ KHÁC (BAN TỔ CHỨC / DIỄN GIẢ)
  // ==========================================
  forecast(sessions) {
    // AI dự báo sức chứa (Ban tổ chức)
    return sessions
      .filter((s) => s.status !== "Đã hủy")
      .map((s) => {
        const predicted = Math.round(
          s.booked * 0.7 + s.saves * 0.4 + s.feedbackCount * 0.3,
        );
        return {
          session: s,
          predicted,
          ratio: predicted / s.capacity,
          confidence: s.feedbackCount >= 10 ? "Trung bình" : "Thấp",
          reason: `${s.booked} đặt, ${s.saves} quan tâm, ${s.feedbackCount} phản hồi...`,
        };
      })
      .sort((a, b) => b.ratio - a.ratio);
  },

  summary(feedback) {
    // AI tóm tắt phản hồi (Diễn giả)
    const valid = feedback.filter(
      (f) => f.comment?.trim() && f.status === "Đã gửi",
    );
    const unique = [
      ...new Map(
        valid.map((f) => [f.comment.trim().toLowerCase(), f]),
      ).values(),
    ];
    const clean = (text) =>
      text
        .replace(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi, "[email]")
        .replace(/(?:\+?\d[\d .()-]{8,}\d)/g, "[phone]");
    const groups = [
      ["ví dụ thực tế", /thực tế|ví dụ|case/i],
      ["checklist", /checklist|kiểm thử/i],
    ];

    const counts = groups
      .map(([name, re]) => ({
        name,
        count: unique.filter((f) => re.test(clean(f.comment))).length,
      }))
      .filter((g) => g.count);
    return {
      text: unique.length ? `Từ ${unique.length} phản hồi...` : "",
      reason: `Loại ${valid.length - unique.length} phản hồi trùng...`,
      sources: unique.map((f) => f.id),
      comments: unique.map((f) => clean(f.comment)),
    };
  },
};
