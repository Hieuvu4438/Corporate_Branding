"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Layers, CheckCircle2, ChevronRight, Activity, Network, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "brand-consulting",
    title: "Tư vấn Định vị Thương hiệu",
    description: "Giải quyết bài toán thiếu bản sắc độc bản và thông điệp truyền thông không nhất quán trong môi trường cạnh tranh khốc liệt.",
    problems: ["Thông điệp rời rạc", "Không có bản sắc độc bản", "Thiếu lòng tin từ khách hàng B2B"],
    features: [
      "Khảo sát định vị cạnh tranh & phân khúc",
      "Xác lập tính cách thương hiệu & Voice Guidelines",
      "Xây dựng câu chuyện thương hiệu (Brand Story)",
      "Bộ tài liệu quy chuẩn định vị thương hiệu chi tiết"
    ],
    icon: Compass,
  },
  {
    id: "digital-identity",
    title: "Thiết kế Hệ thống Nhận diện Số",
    description: "Khắc phục tình trạng giao diện thương hiệu lỗi thời, không tối ưu cho thiết bị di động và thiếu nhất quán trên các nền tảng kỹ thuật số.",
    problems: ["Giao diện lỗi thời", "Không đồng bộ trên mobile/web", "Tải trang chậm do đồ họa nặng"],
    features: [
      "Hệ thống Design System nhất quán (Figma)",
      "Thiết kế giao diện thích ứng (Responsive UI)",
      "Tối ưu hóa khả năng tiếp cận chuẩn WCAG AA",
      "Hệ thống typography và bảng màu OKLCH cao cấp"
    ],
    icon: Layers,
  },
  {
    id: "app-development",
    title: "Phát triển Web & Web App Cao Cấp",
    description: "Giải quyết triệt để bài toán hiệu suất tải trang kém, trải nghiệm khách hàng phức tạp và tỷ lệ chuyển đổi đơn hàng thấp.",
    problems: ["Tỷ lệ thoát trang cao", "Lỗi lập trình & Hydration", "Bảo mật thông tin khách hàng kém"],
    features: [
      "Kiến trúc Next.js App Router hiệu năng cao",
      "Lập trình TypeScript hoàn toàn bảo mật",
      "Tối ưu tốc độ tải trang Core Web Vitals (LCP < 1.5s)",
      "Tích hợp API và hệ thống quản trị dữ liệu"
    ],
    icon: Activity,
  }
];

const packages = [
  {
    name: "Start-up",
    price: "Liên hệ tư vấn",
    description: "Phù hợp cho các doanh nghiệp mới bắt đầu xây dựng hình ảnh số và tối ưu hóa chuyển đổi.",
    sla: "Bàn giao sau 3-4 tuần",
    support: "Hỗ trợ kỹ thuật 3 tháng",
    revisions: "Tối đa 3 lần điều chỉnh lớn",
    features: ["Thiết kế 5 trang cơ bản", "Hệ thống UI/UX responsive", "Tối ưu hóa SEO cơ bản", "Bàn giao mã nguồn sạch"]
  },
  {
    name: "Business",
    price: "Liên hệ tư vấn",
    description: "Giải pháp toàn diện cho doanh nghiệp đang tăng trưởng cần định hình trải nghiệm chuyên sâu.",
    sla: "Bàn giao sau 6-8 tuần",
    support: "Hỗ trợ kỹ thuật 6 tháng",
    revisions: "Tối đa 5 lần điều chỉnh lớn",
    features: ["Thiết kế lên tới 15 trang", "Hệ thống Design System riêng biệt", "Tối ưu hiệu năng Core Web Vitals", "Tích hợp biểu mẫu và đặt lịch", "Đào tạo bàn giao quản trị"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Liên hệ tư vấn",
    description: "Kiến trúc thiết kế và công nghệ cao cấp cho các tập đoàn yêu cầu bảo mật và hiệu suất tuyệt đối.",
    sla: "Theo lộ trình cam kết riêng",
    support: "Hỗ trợ 24/7 trong 12 tháng",
    revisions: "Không giới hạn trong giai đoạn thiết kế",
    features: ["Giải pháp headless/composable riêng", "Kiểm thử bảo mật nâng cao", "Hệ thống quản trị đa kênh", "Bảo lãnh cam kết tiến độ và SLA hoàn tiền", "Thiết lập hạ tầng cloud tự động"]
  }
];

const serviceFaqs = [
  {
    question: "Thời gian bàn giao trung bình cho một dự án là bao lâu?",
    answer: "Thời gian bàn giao phụ thuộc vào quy mô dự án và gói dịch vụ lựa chọn. Gói Start-up thông thường mất 3-4 tuần, trong khi gói Business mất khoảng 6-8 tuần. Đối với các yêu cầu đặc biệt của gói Enterprise, chúng tôi sẽ lập kế hoạch phân kỳ cụ thể cùng các mốc bàn giao chi tiết."
  },
  {
    question: "Doanh nghiệp có được bàn giao toàn bộ mã nguồn và bản quyền thiết kế không?",
    answer: "Có, sau khi nghiệm thu hoàn tất và thanh toán đầy đủ, HopeRise sẽ bàn giao 100% bản quyền sở hữu trí tuệ đối với các thiết kế Figma và toàn bộ mã nguồn của trang web/ứng dụng cho đối tác của mình."
  },
  {
    question: "Quy trình sửa đổi thiết kế diễn ra như thế nào?",
    answer: "Tại mỗi giai đoạn (phác thảo, wireframe, thiết kế chi tiết), chúng tôi đều tổ chức buổi duyệt trực tuyến cùng đối tác. Số lượng chỉnh sửa lớn được quy định rõ ràng trong hợp đồng theo từng gói dịch vụ để bảo đảm tiến độ thi công toàn hệ thống."
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string>("brand-consulting");

  return (
    <div className="flex flex-col flex-1 w-full bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Giải Pháp Thiết Kế & Lập Trình</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Danh mục sản phẩm & dịch vụ chuyên biệt
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Chúng tôi không chỉ cung cấp dịch vụ thông thường. Mỗi giải pháp tại đây hoạt động như một phòng trưng bày kết quả thiết kế, giải quyết chính xác các thách thức thực tế của doanh nghiệp.
          </p>
        </div>
      </section>

      {/* 1. Interactive Mind Map Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Sơ đồ tư duy giải quyết vấn đề
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Bấm chọn từng nút trên sơ đồ để xem cách chúng tôi giải quyết các nỗi đau cụ thể của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Mind Map Controls */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              <div className="bg-muted/50 border border-border p-2 rounded-2xl">
                <div className="bg-card border border-border/40 p-6 rounded-xl shadow-card-subtle space-y-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground flex items-center gap-2">
                    <Network className="h-4 w-4 text-primary" /> Kết Nối Nỗi Đau Khách Hàng
                  </span>
                  <div className="flex flex-col space-y-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-xl border text-sm transition-all duration-300 flex items-center justify-between group",
                          selectedService === service.id
                            ? "bg-accent border-primary/30 text-foreground font-semibold"
                            : "bg-background border-border/50 text-muted-foreground hover:bg-muted"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <service.icon className={cn("h-5 w-5", selectedService === service.id ? "text-primary" : "text-muted-foreground")} />
                          <span>{service.title}</span>
                        </div>
                        <ChevronRight className={cn("h-4 w-4 opacity-0 transition-transform group-hover:opacity-100", selectedService === service.id && "opacity-100 translate-x-1")} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mind Map Details (Double-Bezel Display Panel) */}
            <div className="lg:col-span-7">
              {services.map((service) => {
                const Icon = service.icon;
                if (service.id !== selectedService) return null;
                return (
                  <div
                    key={service.id}
                    className="bg-muted/50 border border-border p-2 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] animate-fade-in"
                  >
                    <div className="bg-card border border-border/40 p-8 rounded-xl shadow-card-subtle space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary border border-primary/10">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-bold text-foreground">{service.title}</h3>
                          <span className="text-xs font-mono text-secondary">Giải pháp được định vị</span>
                        </div>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                      
                      {/* Sub-Problems Solved */}
                      <div className="space-y-3 pt-4 border-t border-border/60">
                        <h4 className="text-xs uppercase font-bold tracking-wider text-foreground">Vấn đề thực tế loại bỏ:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.problems.map((prob, idx) => (
                            <span key={idx} className="bg-accent/80 text-foreground text-xs px-3 py-1 rounded-full border border-primary/5">
                              {prob}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technical Features */}
                      <div className="space-y-3 pt-4 border-t border-border/60">
                        <h4 className="text-xs uppercase font-bold tracking-wider text-foreground">Tính năng & Đầu ra kỹ thuật:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6">
                        <Link
                          href={`/booking?service=${service.id}`}
                          className="inline-flex items-center justify-between font-bold transition-all duration-300 bg-primary text-primary-foreground hover:opacity-95 active:scale-[0.98] shadow-button h-12 pl-6 pr-3 text-sm rounded-full gap-4 group"
                        >
                          <span>Chọn giải pháp này</span>
                          <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Package Comparison Grid */}
      <section className="bg-muted/30 py-20 lg:py-28 border-y border-border/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Bảng so sánh các gói dịch vụ
            </h2>
            <p className="text-lg text-muted-foreground">
              Phân định rõ ràng quyền lợi, cam kết SLA và mức độ đáp ứng kỹ thuật.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={cn(
                  "bg-muted/50 border p-2 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 relative",
                  pkg.popular ? "border-primary/50" : "border-border"
                )}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-secondary/15">
                    Phổ biến nhất
                  </span>
                )}
                <div className="bg-card border border-border/40 p-8 rounded-xl shadow-card-subtle flex flex-col justify-between h-full space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{pkg.description}</p>
                    
                    <div className="mt-4 pb-4 border-b border-border/80">
                      <span className="text-xl font-bold text-primary font-display">{pkg.price}</span>
                    </div>

                    <ul className="mt-6 space-y-3.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border/80 space-y-3">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Thời gian cam kết:</span>
                      <span className="text-foreground">{pkg.sla}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Điều chỉnh thiết kế:</span>
                      <span className="text-foreground">{pkg.revisions}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">Hỗ trợ vận hành:</span>
                      <span className="text-foreground">{pkg.support}</span>
                    </div>

                    <Link
                      href={`/booking?package=${pkg.name.toLowerCase()}`}
                      className={cn(
                        "w-full inline-flex items-center justify-center font-bold transition-all duration-300 h-11 px-5 text-sm rounded-full mt-4",
                        pkg.popular
                          ? "bg-primary text-primary-foreground hover:opacity-95 shadow-button"
                          : "border border-border bg-card text-foreground hover:bg-muted"
                      )}
                    >
                      <span>Yêu cầu báo giá</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service FAQs */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Câu hỏi thường gặp về dịch vụ
            </h2>
            <p className="text-base text-muted-foreground">
              Giải đáp nhanh những thắc mắc trước khi triển khai dự án.
            </p>
          </div>

          <div className="bg-muted/50 border border-border p-2 rounded-2xl">
            <div className="bg-card border border-border/40 p-6 rounded-xl shadow-card-subtle space-y-4">
              {serviceFaqs.map((faq, idx) => (
                <div key={idx} className="pb-4 border-b border-border/60 last:border-0 last:pb-0">
                  <h3 className="text-base font-bold text-foreground flex gap-2 items-start">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
