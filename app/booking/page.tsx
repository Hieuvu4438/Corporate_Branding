"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, ShieldCheck, Check, Info, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const availableSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM"
];

const calendarDays = [
  { day: "Thứ 2", date: "06/07", available: true },
  { day: "Thứ 3", date: "07/07", available: true },
  { day: "Thứ 4", date: "08/07", available: true },
  { day: "Thứ 5", date: "09/07", available: true },
  { day: "Thứ 6", date: "10/07", available: true },
  { day: "Thứ 7", date: "11/07", available: false }
];

export default function BookingPage() {
  const [selectedDay, setSelectedDay] = useState<string>("06/07");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM");
  
  // Form States
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientDetails, setClientDetails] = useState("");
  const [serviceQuery, setServiceQuery] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  // Pre-fill query parameters if any
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const service = searchParams.get("service") || searchParams.get("package") || searchParams.get("template");
      if (service) {
        setServiceQuery(service);
      }
    }
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim() || !clientEmail.trim() || !clientDetails.trim()) {
      setFormError("Vui lòng nhập đầy đủ các trường thông tin bắt buộc.");
      return;
    }
    if (!clientEmail.includes("@") || !clientEmail.includes(".")) {
      setFormError("Địa chỉ email doanh nghiệp không hợp lệ.");
      return;
    }
    if (!termsAccepted) {
      setFormError("Vui lòng đồng ý với chính sách bảo mật thông tin cá nhân.");
      return;
    }

    setFormError(null);
    setFormSuccess(true);
  };

  return (
    <div className="flex flex-col flex-1 w-full bg-background relative py-12 md:py-20">
      {/* Back button to clear layout */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full mb-6">
        <a 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-semibold"
        >
          <ArrowLeft className="h-4 w-4" /> Quay lại Trang chủ
        </a>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Hành Động Chuyển Đổi Cuối Cùng</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl text-balance">
            Đặt lịch tư vấn chuyên sâu
          </h1>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
            Chọn khung giờ thuận tiện nhất để gặp gỡ trực tuyến cùng chỉ huy thiết kế và chuyên gia công nghệ của chúng tôi.
          </p>
        </div>

        {/* Distraction-free Double-Bezel Booking Module */}
        <div className="bg-muted/50 border border-border p-2 rounded-[24px] max-w-5xl mx-auto shadow-card-subtle">
          <div className="bg-card border border-border/40 p-6 md:p-8 rounded-[18px] grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Input Form & Calendar (col-span-8) */}
            <div className="lg:col-span-8 space-y-8">
              {!formSuccess ? (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Calendar Widget Section */}
                  <div className="space-y-4">
                    <span className="text-xs uppercase font-bold tracking-wider text-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" /> 1. Chọn Ngày Hẹn Gặp
                    </span>
                    
                    {/* Day selector grid */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {calendarDays.map((day) => (
                        <button
                          key={day.date}
                          type="button"
                          disabled={!day.available}
                          onClick={() => setSelectedDay(day.date)}
                          className={cn(
                            "py-3 px-2 rounded-xl border text-center transition-all duration-300 flex flex-col justify-center items-center gap-1",
                            !day.available && "opacity-40 cursor-not-allowed bg-muted/20 border-border/50",
                            day.available && selectedDay === day.date
                              ? "bg-primary text-primary-foreground border-primary font-bold scale-[1.02]"
                              : "bg-background border-border/50 hover:bg-muted text-muted-foreground"
                          )}
                        >
                          <span className="text-[10px] uppercase font-semibold">{day.day}</span>
                          <span className="text-sm font-bold font-mono">{day.date}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Slots selector Section */}
                  <div className="space-y-4 pt-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" /> 2. Chọn Khung Giờ Rảnh
                    </span>
                    
                    {/* Hour slots grid */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {availableSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={cn(
                            "py-2.5 px-1 rounded-full border text-center text-xs transition-all duration-300 font-semibold font-mono",
                            selectedSlot === slot
                              ? "bg-secondary text-secondary-foreground border-secondary font-bold scale-[1.02]"
                              : "bg-background border-border/50 hover:bg-muted text-muted-foreground"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Profile inputs Section */}
                  <div className="space-y-4 pt-4 border-t border-border/60">
                    <span className="text-xs uppercase font-bold tracking-wider text-foreground">
                      3. Thông Tin Liên Hệ Của Bạn
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-foreground tracking-wider">Họ và tên *</label>
                        <input
                          type="text"
                          placeholder="Nguyễn Văn A"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-foreground tracking-wider">Số điện thoại *</label>
                        <input
                          type="text"
                          placeholder="0901234567"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-foreground tracking-wider">Email doanh nghiệp *</label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold text-foreground tracking-wider">Dịch vụ yêu cầu (Tùy chọn)</label>
                        <input
                          type="text"
                          placeholder="Ví dụ: Thiết kế hệ thống SaaS / Next.js Rebuild"
                          value={serviceQuery}
                          onChange={(e) => setServiceQuery(e.target.value)}
                          className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-bold text-foreground tracking-wider">Nội dung bài toán cần tư vấn cụ thể *</label>
                      <textarea
                        rows={4}
                        placeholder="Hãy mô tả ngắn gọn bối cảnh và thách thức hiện tại của doanh nghiệp của bạn..."
                        value={clientDetails}
                        onChange={(e) => setClientDetails(e.target.value)}
                        className="w-full bg-muted/40 border border-border rounded-lg p-4 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                      />
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2.5 pt-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="h-4.5 w-4.5 text-primary border-border rounded mt-0.5"
                      />
                      <label htmlFor="terms" className="text-[11px] text-muted-foreground leading-normal">
                        Tôi đồng ý bảo mật thông tin cuộc trao đổi và chấp thuận chính sách bảo mật dữ liệu cá nhân theo quy định của pháp luật.
                      </label>
                    </div>
                  </div>

                  {formError && (
                    <p className="text-xs text-secondary font-semibold bg-secondary/5 p-3 rounded-lg border border-secondary/10">
                      {formError}
                    </p>
                  )}

                  {/* Submission CTA */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center font-bold transition-all duration-300 bg-primary text-primary-foreground hover:opacity-95 active:scale-[0.98] shadow-button h-12 px-6 text-sm rounded-full gap-2 cursor-pointer"
                    >
                      Xác nhận Đặt lịch tư vấn ngày {selectedDay} lúc {selectedSlot}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-16 text-center space-y-6 animate-scale-up">
                  <div className="h-16 w-16 rounded-full bg-[#E9EFE9] border border-primary/10 text-primary flex items-center justify-center mx-auto shadow-inner">
                    <Check className="h-8 w-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-display text-2xl font-bold text-foreground">Đặt lịch hẹn thành công</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Cảm ơn <strong>{clientName}</strong>. Hệ thống đã xác nhận đặt lịch hẹn vào ngày <strong>{selectedDay}</strong> lúc <strong>{selectedSlot}</strong>.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Mã phòng họp trực tuyến Google Meet đã được gửi tới hòm thư <strong>{clientEmail}</strong> của bạn.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setFormSuccess(false)}
                      className="h-11 px-6 rounded-full border border-border bg-card text-foreground hover:bg-muted text-xs font-bold transition-all"
                    >
                      Đặt một lịch hẹn khác
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right: SLA, Contacts & Map Details (col-span-4) */}
            <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-border/60 lg:pl-8">
              {/* SLA Response Guarantee Dashboard */}
              <div className="p-5 bg-accent/40 border border-primary/10 rounded-xl space-y-3">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" /> Cam kết phản hồi SLA
                </span>
                <div className="space-y-1">
                  <span className="text-3xl font-display font-bold text-foreground">Trong 2 Giờ</span>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    Chúng tôi cam kết phản hồi xác thực và liên hệ lại trực tiếp qua điện thoại trong tối đa 2 giờ làm việc kể từ lúc đăng ký.
                  </p>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 pt-2">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest block">Kênh liên hệ trực tiếp</span>
                
                <div className="space-y-3.5 text-xs text-muted-foreground">
                  <div className="flex gap-3 items-start">
                    <Phone className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Đường dây nóng 24/7:</span>
                      <a href="tel:19008585" className="hover:text-primary transition-colors">1900 8585 (Hỗ trợ khẩn cấp)</a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Mail className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Hòm thư chính thức:</span>
                      <a href="mailto:contact@hoperise.vn" className="hover:text-primary transition-colors">contact@hoperise.vn</a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <MapPin className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Địa chỉ văn phòng chính:</span>
                      <span>Tòa nhà HopeRise Center, Số 12 Đường Số 3, Phân khu Đô thị mới, Quận 1, TP. Hồ Chí Minh</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Maps Preview Placeholder */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest block">Bản đồ thực tế</span>
                <div className="bg-muted border border-border/80 rounded-xl p-6 text-center italic text-[11px] text-muted-foreground font-medium">
                  [Google Maps Embed Location]
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
