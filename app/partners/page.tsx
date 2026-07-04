"use client";

import React, { useState } from "react";
import { Quote, Star, CheckCircle, ExternalLink, ArrowRight, ShieldCheck, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const partnerTypes = [
  { id: "all", label: "Tất cả đối tác" },
  { id: "financial", label: "Đối tác Tài chính" },
  { id: "contractor", label: "Nhà thầu & Thiết kế" },
  { id: "client", label: "Khách hàng B2B" }
];

const mockLogos = [
  { name: "VietinBank", role: "Bảo lãnh tài chính" },
  { name: "Coteccons", role: "Tổng thầu xây dựng" },
  { name: "SGS International", role: "Kiểm định chất lượng" },
  { name: "BSI Group", role: "Tiêu chuẩn bảo mật" },
  { name: "NUS Design Lab", role: "Tư vấn thiết kế" },
  { name: "LegalDiff Corp", role: "Công nghệ pháp lý" }
];

const reviews = [
  {
    id: "rev-1",
    author: "Trần Minh Đức",
    title: "Trưởng phòng Tín dụng dự án",
    company: "Ngân hàng Thương mại Cổ phần Công Thương",
    type: "financial",
    content: "Chúng tôi đánh giá cao tính minh bạch hồ sơ pháp lý sạch của dự án do HopeRise tư vấn. Đây là lý do chính giúp các hồ sơ cấp tín dụng dự án và cam kết bảo lãnh tiến độ được thông qua nhanh chóng, bảo đảm an toàn dòng tiền tối đa.",
    rating: 5,
    verified: true
  },
  {
    id: "rev-2",
    author: "Lê Quốc Huy",
    title: "Chỉ huy trưởng công trường",
    company: "Tập đoàn Xây dựng Việt Nam",
    type: "contractor",
    content: "Sự phối hợp chặt chẽ giữa ban quản lý thiết kế của HopeRise và đội ngũ kỹ sư hiện trường của nhà thầu xây dựng giúp giải quyết nhanh chóng các xung đột bản vẽ 1/500 trên thực tế. Điều này tối ưu hóa 15% thời gian thi công thực tế.",
    rating: 5,
    verified: true
  },
  {
    id: "rev-3",
    author: "Nguyễn Thu Hương",
    title: "Phó giám đốc Marketing",
    company: "CareMate HealthTech",
    type: "client",
    content: "Lập trình hệ thống giao diện số tuân thủ chặt chẽ khả năng tiếp cận WCAG AA là ưu điểm vượt trội giúp ứng dụng sức khỏe CareMate tiếp cận thành công phân khúc người dùng cao tuổi. Một dự án đầu tư xứng đáng.",
    rating: 5,
    verified: true
  }
];

export default function PartnersPage() {
  const [activeType, setActiveType] = useState("all");

  const filteredReviews = reviews.filter((rev) => {
    return activeType === "all" || rev.type === activeType;
  });

  return (
    <div className="flex flex-col flex-1 w-full bg-background">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Liên Kết Chiến Lược & Minh Chứng Xã Hội</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Đối tác chiến lược & Đánh giá khách quan
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Sự phối hợp cùng các tổ chức uy tín hàng đầu trong ngành tài chính, xây dựng và quản trị chất lượng giúp kiến tạo nền tảng vững vàng cho sự thành công của dự án.
          </p>
        </div>
      </section>

      {/* Partners Grayscale Logo Grid */}
      <section className="py-20 bg-muted/20 border-b border-border/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Mạng lưới liên kết rộng khắp</span>
            <h3 className="text-xl font-bold text-foreground">Hợp tác cùng những thương hiệu dẫn đầu</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {mockLogos.map((logo, idx) => (
              <div 
                key={idx}
                className="bg-card border border-border/60 hover:border-primary/20 p-6 rounded-xl flex flex-col justify-center items-center text-center space-y-2 group transition-all duration-300 shadow-sm"
              >
                {/* Grayscale text-logo simulation */}
                <span className="font-display text-base font-bold text-foreground/40 group-hover:text-primary transition-colors duration-300">
                  {logo.name}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                  {logo.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 lg:py-28 mx-auto max-w-7xl px-6 lg:px-8 w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Phản hồi thực tế từ đối tác
          </h2>
          <p className="text-base text-muted-foreground">
            Các đánh giá được xác thực trực tiếp và đăng tải công khai nhằm bảo đảm tính trung thực cao nhất.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center border-b border-border/60 pb-6">
          <div className="flex flex-wrap gap-2">
            {partnerTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveType(type.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300",
                  activeType === type.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                )}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid (Double-Bezel Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-muted/50 border border-border p-2 rounded-2xl flex flex-col justify-between"
            >
              <div className="bg-card border border-border/40 p-6 rounded-xl shadow-card-subtle flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  {/* Rating & Quote Icon */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-secondary/15 shrink-0" />
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    &quot;{rev.content}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex flex-col space-y-2">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{rev.author}</h4>
                    <p className="text-[10px] text-muted-foreground font-semibold leading-normal">{rev.title}</p>
                    <p className="text-[10px] text-primary font-bold">{rev.company}</p>
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-primary bg-[#E9EFE9] px-2 py-0.5 rounded-full w-max mt-1 border border-primary/5">
                      <UserCheck className="h-3 w-3" /> Hồ sơ đã xác thực
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book project redirection CTA */}
      <section className="bg-muted/30 py-20 lg:py-24 border-t border-border/80 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl font-bold text-foreground">Trở thành đối tác chiến lược của chúng tôi</h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Hợp tác cùng HopeRise để hiện thực hóa các giải pháp thương hiệu vững chắc và kiến tạo các giá trị phát triển bền vững cho cộng đồng.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => window.location.href = "/booking"}
              className="inline-flex items-center justify-between font-bold transition-all duration-300 bg-primary text-primary-foreground hover:opacity-95 active:scale-[0.98] shadow-button h-12 pl-6 pr-3 text-sm rounded-full gap-4 group cursor-pointer"
            >
              <span>Đăng ký thảo luận hợp tác</span>
              <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
