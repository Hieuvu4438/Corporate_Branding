"use client";

import * as React from "react";
import Image from "next/image";
import { FileText, Smartphone, Check, ArrowRight, HeartPulse, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ProjectType = "legaldiff" | "caremate";

export function ProjectSwitcher() {
  const [activeProject, setActiveProject] = React.useState<ProjectType>("legaldiff");
  const [caremateActiveScreen, setCaremateActiveScreen] = React.useState<number>(0);

  const caremateScreens = [
    {
      title: "Màn hình SOS & Lịch thuốc",
      src: "/asset/img/Screenshot 2026-07-04 143925.png",
      description: "Giao diện chính nhắc nhở uống thuốc định kỳ tích hợp nút bấm khẩn cấp SOS một chạm nhanh chóng.",
    },
    {
      title: "Thiết lập nhắc nhở nâng cao",
      src: "/asset/img/Screenshot 2026-07-04 144033.png",
      description: "Hệ thống tùy chỉnh liều lượng thuốc, thời gian uống chi tiết và thông tin liên hệ bác sĩ gia đình.",
    },
    {
      title: "Thực đơn dinh dưỡng lành mạnh",
      src: "/asset/img/Screenshot 2026-07-04 144059.png",
      description: "Thư viện công thức các món ăn, salad lành mạnh được chọn lọc kỹ càng hỗ trợ tăng cường hệ miễn dịch.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Switcher Buttons */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full bg-muted p-1.5 border border-border/80">
          <button
            type="button"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all cursor-pointer",
              activeProject === "legaldiff"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setActiveProject("legaldiff")}
          >
            <FileText className="h-4.5 w-4.5 text-primary" />
            LegalDiff (Web App)
          </button>
          <button
            type="button"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all cursor-pointer",
              activeProject === "caremate"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setActiveProject("caremate")}
          >
            <Smartphone className="h-4.5 w-4.5 text-secondary" />
            CareMate (Mobile App)
          </button>
        </div>
      </div>

      {/* Project Panels */}
      <div className="transition-all duration-500 ease-out-expo">
        {activeProject === "legaldiff" ? (
          /* LegalDiff Page Panel */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Hệ thống so sánh pháp lý</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                LegalDiff: Tối ưu so sánh văn bản pháp quy
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                LegalDiff là ứng dụng nền tảng web giúp các văn phòng luật và cố vấn pháp lý so sánh các phiên bản nghị định, thông tư phức tạp chỉ trong vài giây.
              </p>
              <ul className="space-y-2.5 text-sm text-foreground/90">
                <li className="flex items-start space-x-2">
                  <Check className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                  <span>Highlight chi tiết các dòng sửa đổi, xóa bỏ hoặc thêm mới.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                  <span>Tự động xuất báo cáo sai khác dưới dạng file PDF/Docx.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                  <span>Hỗ trợ tải lên cùng lúc nhiều tập tài liệu định dạng lớn.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Button variant="outline" className="rounded-full gap-2 group">
                  Đọc Case Study đầy đủ <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Showcase Screenshot */}
            <div className="lg:col-span-7 bg-muted p-4 sm:p-6 rounded-2xl border border-border/80 shadow-card-subtle relative overflow-hidden group">
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-border bg-card">
                <Image
                  src="/asset/img/Screenshot 2026-07-04 143200.png"
                  alt="Giao diện LegalDiff"
                  fill
                  sizes="(max-w-1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                  priority
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-muted-foreground">Hình 1: Giao diện so sánh song song hai phiên bản Luật Quy hoạch Việt Nam.</span>
              </div>
            </div>
          </div>
        ) : (
          /* CareMate Page Panel */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                <HeartPulse className="h-3.5 w-3.5" />
                <span>Trợ lý sức khỏe thông minh</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                CareMate: Trợ lý uống thuốc & SOS di động
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ứng dụng di động giúp người cao tuổi và gia đình quản lý lịch trình sử dụng thuốc hàng ngày, tra cứu thực đơn healthy và gửi cảnh báo khẩn cấp khi gặp sự cố.
              </p>

              {/* Screens Tabs */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">Các tính năng chính</span>
                <div className="flex flex-col space-y-2">
                  {caremateScreens.map((scr, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={cn(
                        "w-full text-left p-3.5 rounded-lg border text-sm transition-all flex items-start space-x-3 cursor-pointer",
                        caremateActiveScreen === idx
                          ? "bg-accent/40 border-secondary/60 text-foreground"
                          : "border-border/60 hover:bg-muted/50 text-muted-foreground"
                      )}
                      onClick={() => setCaremateActiveScreen(idx)}
                    >
                      <span className={cn(
                        "h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5",
                        caremateActiveScreen === idx
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted text-muted-foreground border border-border"
                      )}>
                        {idx + 1}
                      </span>
                      <div>
                        <span className="font-bold block text-foreground">{scr.title}</span>
                        {caremateActiveScreen === idx && (
                          <span className="text-xs text-muted-foreground mt-1 block leading-relaxed">{scr.description}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Mockup Screenshot */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="bg-muted p-6 sm:p-8 rounded-2xl border border-border/80 shadow-card-subtle w-full max-w-sm relative overflow-hidden group">
                <div className="relative aspect-[9/16] w-full rounded-xl overflow-hidden border border-border/80 bg-card shadow-lg">
                  <Image
                    src={caremateScreens[caremateActiveScreen].src}
                    alt={caremateScreens[caremateActiveScreen].title}
                    fill
                    sizes="(max-w-1024px) 100vw, 30vw"
                    className="object-cover transition-all duration-300"
                    priority
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold text-secondary">
                    {caremateScreens[caremateActiveScreen].title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
