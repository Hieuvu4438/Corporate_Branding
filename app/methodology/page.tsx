"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Settings, CheckSquare, Search, Award, HelpCircle, ArrowRight, Activity, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const methodologySteps = [
  {
    phase: 1,
    title: "Tiếp nhận & Khởi động",
    icon: MessageSquare,
    baseWeeks: 1,
    description: "Lắng nghe nhu cầu kinh doanh, xác lập bài toán và thống nhất phạm vi công việc cùng các tiêu chí nghiệm thu ban đầu.",
    input: "Yêu cầu từ khách hàng & Tài liệu thương hiệu hiện tại",
    output: "Biên bản phạm vi dự án & Kế hoạch triển khai sơ bộ",
    qualityGate: "Duyệt Biên bản phạm vi (Sign-off Scope of Work)"
  },
  {
    phase: 2,
    title: "Khảo sát & Phân tích",
    icon: Search,
    baseWeeks: 2,
    description: "Đánh giá thực địa hiện trường, phân tích dữ liệu đối thủ cạnh tranh và khảo sát hành vi người dùng cuối.",
    input: "Dữ liệu hiện trường, Khảo sát đối thủ cạnh tranh",
    output: "Báo cáo nghiên cứu thị trường & Đề xuất kiến trúc sản phẩm",
    qualityGate: "Duyệt Kiến trúc sản phẩm & Sơ đồ UX"
  },
  {
    phase: 3,
    title: "Ý tưởng & Thiết kế",
    icon: Settings,
    baseWeeks: 3,
    description: "Phát triển ý tưởng thiết kế độc bản, xây dựng các wireframe chi tiết và hệ thống Design System theo OKLCH.",
    input: "Báo cáo khảo sát, Sơ đồ UX đã duyệt",
    output: "Bản vẽ thiết kế Figma độ phân giải cao & Thiết kế tương tác",
    qualityGate: "Duyệt Thiết kế chi tiết & Design System"
  },
  {
    phase: 4,
    title: "Triển khai & Chế tác",
    icon: Activity,
    baseWeeks: 4,
    description: "Lập trình mã nguồn sạch sử dụng Next.js, xây dựng phần thô và lắp ráp kết cấu cơ điện hoặc phần cứng thực tế.",
    input: "Bản thiết kế Figma chi tiết & Tài liệu kỹ thuật",
    output: "Hạ tầng kỹ thuật xây dựng hoặc Mã nguồn hoàn chỉnh",
    qualityGate: "Nghiệm thu kiểm thử nội bộ & Rà soát bảo mật"
  },
  {
    phase: 5,
    title: "Kiểm thử & Bàn giao",
    icon: CheckSquare,
    baseWeeks: 2,
    description: "Đo đạc kiểm định chất lượng thực tế, chạy thử nghiệm hệ thống cùng đối tác và thực hiện bàn giao đầy đủ hồ sơ.",
    input: "Hệ thống đã triển khai, kế hoạch kiểm thử",
    output: "Hồ sơ hoàn công hoàn chỉnh & Bàn giao quyền sở hữu trí tuệ",
    qualityGate: "Ký kết Biên bản bàn giao nghiệm thu chính thức"
  }
];

export default function MethodologyPage() {
  const [projectScale, setProjectScale] = useState<number>(2); // 1 = Small, 2 = Medium, 3 = Large, 4 = Mega

  const getScaleMultiplier = () => {
    switch (projectScale) {
      case 1: return 0.7; // Small
      case 2: return 1.0; // Medium
      case 3: return 1.5; // Large
      case 4: return 2.5; // Mega
      default: return 1.0;
    }
  };

  const getScaleLabel = () => {
    switch (projectScale) {
      case 1: return "Nhỏ (Start-up / Landing page)";
      case 2: return "Trung bình (Website Doanh nghiệp / SaaS cơ bản)";
      case 3: return "Lớn (Cổng thông tin / E-commerce đa kênh)";
      case 4: return "Rất lớn (Hệ thống Core / Quy mô Đại đô thị)";
      default: return "Trung bình";
    }
  };

  const multiplier = getScaleMultiplier();

  return (
    <div className="flex flex-col flex-1 w-full bg-background">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Quy Trình Chuẩn Hóa & Chuyên Nghiệp</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Phương pháp luận & Quy trình làm việc
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Chúng tôi cụ thể hóa hành trình hợp tác thành 5 giai đoạn rõ ràng, thiết lập các điểm kiểm soát chất lượng nghiêm ngặt để đảm bảo sản phẩm bàn giao đúng kỳ vọng.
          </p>
        </div>
      </section>

      {/* Interactive Timeline Calculator */}
      <section className="py-12 bg-muted/20 border-b border-border/80">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Bộ công cụ dự toán tiến độ</span>
            <h3 className="text-xl font-bold text-foreground">Ước tính thời gian theo quy mô dự án</h3>
            <p className="text-sm text-muted-foreground">Kéo thanh trượt để thay đổi quy mô và xem ước tính thời gian thực hiện của từng giai đoạn.</p>
          </div>

          <div className="bg-muted/50 border border-border p-2 rounded-2xl max-w-2xl mx-auto shadow-card-subtle">
            <div className="bg-card border border-border/40 p-6 rounded-xl space-y-6 text-left">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-muted-foreground">Quy mô dự kiến:</span>
                  <span className="text-primary font-bold">{getScaleLabel()}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={projectScale}
                  onChange={(e) => setProjectScale(parseInt(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="pt-4 border-t border-border flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Tổng thời gian ước tính:</span>
                <span className="text-base font-bold text-secondary font-display">
                  {Math.round(methodologySteps.reduce((acc, step) => acc + step.baseWeeks * multiplier, 0))} Tuần
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Flowchart Section */}
      <section className="py-20 lg:py-28 mx-auto max-w-7xl px-6 lg:px-8 w-full space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lộ trình triển khai 5 Giai đoạn
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Sự phối hợp nhịp nhàng giữa khách hàng và đội ngũ chuyên gia của chúng tôi tại từng cột mốc.
          </p>
        </div>

        {/* Vertical Flow Steps */}
        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-border/80 -translate-x-1/2 hidden md:block" />

          {methodologySteps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;
            const estimatedWeeks = Math.max(1, Math.round(step.baseWeeks * multiplier));

            return (
              <div 
                key={step.phase}
                className={cn(
                  "flex flex-col md:flex-row items-center gap-8 relative",
                  isEven ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Visual Step Bubble */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-primary border-4 border-background text-primary-foreground flex items-center justify-center font-bold text-sm shadow z-10">
                  {step.phase}
                </div>

                {/* Content Card (Double-Bezel) */}
                <div className="w-full md:w-[calc(50%-24px)] ml-12 md:ml-0">
                  <div className="bg-muted/50 border border-border p-2 rounded-2xl hover:border-primary/30 transition-all duration-300">
                    <div className="bg-card border border-border/40 p-6 rounded-xl shadow-card-subtle space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="font-display text-lg font-bold text-foreground">{step.title}</h4>
                      </div>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                      
                      <div className="flex justify-between items-center text-[11px] font-mono font-bold text-secondary bg-accent px-3 py-1 rounded-full border border-primary/5">
                        <span>Thời lượng ước tính:</span>
                        <span>~{estimatedWeeks} Tuần</span>
                      </div>

                      <div className="pt-3 border-t border-border/60 space-y-2 text-xs">
                        <div className="flex gap-2">
                          <span className="font-bold text-foreground">Đầu vào:</span>
                          <span className="text-muted-foreground">{step.input}</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-bold text-foreground">Đầu ra bàn giao:</span>
                          <span className="text-muted-foreground">{step.output}</span>
                        </div>
                      </div>

                      {/* Quality Gate */}
                      <div className="p-3 bg-accent/40 border border-primary/10 rounded-lg text-xs space-y-1">
                        <span className="font-bold text-primary block">Điểm kiểm soát chất lượng (Quality Gate):</span>
                        <p className="text-muted-foreground text-[11px]">{step.qualityGate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacing placeholder for layout */}
                <div className="w-full md:w-[calc(50%-24px)] hidden md:block" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Communication Loop */}
      <section className="bg-muted/30 py-20 lg:py-28 border-t border-border/80 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Cơ chế tương tác khách hàng liên tục
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground">
            Báo cáo tiến độ hàng tuần, các phiên họp duyệt ý tưởng thiết kế định kỳ và cổng phản hồi trực tiếp giúp loại bỏ hoàn toàn các rủi ro hiểu lầm trong suốt hành trình xây dựng.
          </p>
          <div className="pt-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-between font-bold transition-all duration-300 bg-primary text-primary-foreground hover:opacity-95 active:scale-[0.98] shadow-button h-14 pl-8 pr-3 text-sm rounded-full gap-6 text-base group"
            >
              <span>Bắt đầu dự án cùng chúng tôi</span>
              <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
