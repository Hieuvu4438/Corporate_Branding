"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, Award, Star, Quote, ArrowDown, ChevronRight, Sliders } from "lucide-react";
import { cn } from "@/lib/utils";

const chapters = [
  { id: "context", title: "Bối cảnh" },
  { id: "challenge", title: "Thách thức" },
  { id: "solution", title: "Giải pháp" },
  { id: "process", title: "Quy trình" },
  { id: "results", title: "Kết quả" }
];

export default function CaseStudiesPage() {
  const [activeChapter, setActiveChapter] = useState("context");
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Before/After Slider drag handlers
  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col flex-1 w-full bg-background">
      {/* 1. Hero & Summary Header */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Nghiên cứu điển hình chiều sâu</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Tái cấu trúc hệ thống LegalDiff
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Hành trình cải tiến công cụ so sánh văn bản pháp quy từ một sản phẩm nội bộ phức tạp thành một nền tảng SaaS tinh gọn dành cho các tập đoàn tài chính lớn.
          </p>
          
          {/* Metadata Grid */}
          <div className="pt-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left border-t border-border/60 mt-10">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Khách hàng</span>
              <p className="text-sm font-semibold text-foreground">LegalDiff SaaS</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Lĩnh vực</span>
              <p className="text-sm font-semibold text-foreground">RegTech & Pháp lý</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Thời gian</span>
              <p className="text-sm font-semibold text-foreground">4 Tháng (Năm 2026)</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Nhiệm vụ chính</span>
              <p className="text-sm font-semibold text-foreground">UX/UI Audit & Next.js Rebuild</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Before/After Visual Slider Section */}
      <section className="py-20 bg-muted/20 border-b border-border/80">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Sự chuyển dịch trực quan
            </h2>
            <p className="text-base text-muted-foreground">
              Kéo thanh trượt ở giữa để so sánh giao diện cũ (Flat UI) và giao diện mới (Editorial Luxury + Soft Structuralism).
            </p>
          </div>

          {/* Slider Container */}
          <div className="bg-muted/50 border border-border p-2 rounded-2xl max-w-4xl mx-auto shadow-card-subtle">
            <div 
              ref={sliderRef}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden select-none cursor-ew-resize border border-border/40"
            >
              {/* After: New Design (Background) */}
              <div className="absolute inset-0 bg-background flex flex-col justify-center items-center text-center p-8">
                <div className="max-w-md w-full bg-muted border border-border p-2 rounded-2xl shadow-lg backdrop-blur-md">
                  <div className="bg-card border border-white/5 p-6 rounded-xl space-y-4 text-left backdrop-blur-lg">
                    <div className="flex items-center space-x-2 text-primary">
                      <Star className="h-4 w-4 fill-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Phiên bản mới 2026</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">LegalDiff Dashboard</h3>
                    <p className="text-xs text-muted-foreground">Hệ thống phân tích tài liệu tự động sử dụng trí tuệ nhân tạo cục bộ.</p>
                    <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                      <span className="text-[11px] font-mono font-bold text-secondary bg-accent px-2 py-0.5 rounded">Tốc độ +150%</span>
                      <span className="text-xs font-semibold text-white flex items-center gap-1">Khám phá <ArrowRight className="h-3 w-3" /></span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                  Sau (Premium UI)
                </div>
              </div>

              {/* Before: Old Design (Foreground) */}
              <div 
                className="absolute inset-y-0 left-0 right-0 bg-zinc-200 overflow-hidden flex flex-col justify-center items-center text-center p-8"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="w-[800px] flex flex-col justify-center items-center">
                  <div className="max-w-md w-[400px] bg-zinc-100 border border-zinc-300 p-6 rounded shadow text-left space-y-4">
                    <div className="text-xs text-zinc-500 uppercase font-bold">Phiên bản cũ v1.0</div>
                    <h3 className="text-xl font-bold text-zinc-800">So sánh tệp tin</h3>
                    <p className="text-xs text-zinc-600">Công cụ so sánh tài liệu pháp lý trực tuyến tải lên tệp PDF hoặc DOCX.</p>
                    <button className="bg-zinc-700 text-white text-xs px-4 py-2 rounded">Bắt đầu ngay</button>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-zinc-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                  Trước (Cũ/Flat)
                </div>
              </div>

              {/* Handlebar Line */}
              <div 
                className="absolute inset-y-0 w-0.5 bg-secondary"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Handlebar Drag Circle */}
                <div 
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-secondary text-secondary-foreground border-4 border-background flex items-center justify-center cursor-ew-resize shadow-md hover:scale-105 active:scale-95 transition-transform"
                >
                  <Sliders className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Linear Chapters Content Section */}
      <section className="py-20 lg:py-28 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Lateral Chapter Directory */}
          <div className="lg:col-span-3 flex flex-col space-y-2 sticky top-24 self-start">
            <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground pb-2">Mạch truyện dự án</span>
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChapter(ch.id);
                  const el = document.getElementById(ch.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={cn(
                  "w-full text-left py-2 px-3 rounded-md text-sm transition-all duration-300 flex items-center justify-between border-l-2",
                  activeChapter === ch.id
                    ? "border-primary text-primary font-bold bg-accent/40"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                <span>{ch.title}</span>
                <ChevronRight className={cn("h-4 w-4 opacity-0 transition-opacity", activeChapter === ch.id && "opacity-100")} />
              </button>
            ))}
          </div>

          {/* Chapters Details */}
          <div className="lg:col-span-9 space-y-16">
            {/* Context */}
            <div id="context" className="space-y-6 pt-4 border-b border-border/40 pb-12">
              <span className="text-[10px] uppercase font-mono font-bold text-secondary">01 / Context</span>
              <h3 className="font-display text-3xl font-bold text-foreground">Bối cảnh dự án</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                LegalDiff được thành lập bởi một nhóm chuyên gia luật và kỹ sư máy tính với mục tiêu ban đầu là giảm thời gian so sánh các dự thảo luật và các điều khoản hợp đồng thương mại. Tuy nhiên, phiên bản đầu tiên chỉ tập trung vào chức năng kỹ thuật cơ bản, thiếu sự tối ưu trong hành trình trải nghiệm người dùng dẫn tới việc các chuyên viên pháp chế gặp khó khăn khi thao tác trên các màn hình làm việc lớn.
              </p>
            </div>

            {/* Challenge */}
            <div id="challenge" className="space-y-6 pt-4 border-b border-border/40 pb-12">
              <span className="text-[10px] uppercase font-mono font-bold text-secondary">02 / Challenge</span>
              <h3 className="font-display text-3xl font-bold text-foreground">Thách thức đối mặt</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Bài toán lớn nhất đặt ra là làm thế nào để hiển thị sự khác biệt giữa hai văn bản có độ dài hàng trăm trang mà không gây mỏi mắt cho chuyên viên pháp lý. Đồng thời, cấu trúc dữ liệu lưu trữ cần tuân thủ bảo mật tuyệt đối, ngăn chặn tình trạng rò rỉ các hợp đồng mua bán sáp nhập lớn lên các máy chủ bên ngoài trong suốt tiến trình so sánh văn bản chéo.
              </p>
              <div className="bg-accent/40 border border-secondary/15 p-5 rounded-xl flex items-start gap-4">
                <ShieldAlert className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <strong>Rủi ro cao:</strong> Chậm trễ trong việc phản hồi sai sót ở các điều khoản phạt trong hợp đồng có thể gây thiệt hại hàng triệu USD cho đối tác B2B.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div id="solution" className="space-y-6 pt-4 border-b border-border/40 pb-12">
              <span className="text-[10px] uppercase font-mono font-bold text-secondary">03 / Solution</span>
              <h3 className="font-display text-3xl font-bold text-foreground">Giải pháp đề xuất & Kiến trúc</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                HopeRise đã thiết kế lại toàn diện giao diện sản phẩm theo phong cách <strong>Soft Structuralism</strong>, sử dụng gam màu tương phản cao nhưng dịu mắt để giảm căng thẳng thị lực. Chúng tôi đề xuất chuyển dịch mã nguồn sang kiến trúc Next.js App Router, giúp thực hiện thuật toán xử lý khác biệt tài liệu ngay trên biên trình duyệt của khách hàng mà không cần gửi dữ liệu thô về server trung tâm.
              </p>
            </div>

            {/* Process */}
            <div id="process" className="space-y-6 pt-4 border-b border-border/40 pb-12">
              <span className="text-[10px] uppercase font-mono font-bold text-secondary">04 / Process</span>
              <h3 className="font-display text-3xl font-bold text-foreground">Quy trình triển khai chi tiết</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Quy trình bao gồm 4 giai đoạn nối tiếp:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-muted/40 border border-border p-5 rounded-xl space-y-2">
                  <h4 className="font-bold text-foreground text-sm flex gap-2"><span className="text-primary font-display font-bold">P1</span> UX Auditing & Prototyping</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Phỏng vấn sâu 20 luật sư của các tập đoàn đối tác để xác lập sơ đồ nhiệt của hành trình đọc văn bản.</p>
                </div>
                <div className="bg-muted/40 border border-border p-5 rounded-xl space-y-2">
                  <h4 className="font-bold text-foreground text-sm flex gap-2"><span className="text-primary font-display font-bold">P2</span> Local Diff Engine Coding</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">Lập trình thuật toán so sánh văn bản song song trên luồng Web Workers của trình duyệt để tối đa tốc độ kết xuất.</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div id="results" className="space-y-6 pt-4 pb-12">
              <span className="text-[10px] uppercase font-mono font-bold text-secondary">05 / Results</span>
              <h3 className="font-display text-3xl font-bold text-foreground">Kết quả đạt được</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Dự án đã nâng tỷ lệ chuyển đổi sử dụng thử của LegalDiff lên gấp 3 lần và được ký kết hợp tác dài hạn với 3 ngân hàng lớn tại Việt Nam.
              </p>

              {/* Stats Cards (Double Bezel) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-muted/50 border border-border p-2 rounded-2xl">
                  <div className="bg-card border border-border/40 p-6 rounded-xl text-center space-y-2 shadow-card-subtle">
                    <span className="text-3xl font-display font-bold text-primary">70%</span>
                    <p className="text-xs text-muted-foreground">Tiết kiệm thời gian rà soát</p>
                  </div>
                </div>
                <div className="bg-muted/50 border border-border p-2 rounded-2xl">
                  <div className="bg-card border border-border/40 p-6 rounded-xl text-center space-y-2 shadow-card-subtle">
                    <span className="text-3xl font-display font-bold text-primary">&lt;1%</span>
                    <p className="text-xs text-muted-foreground">Tỷ lệ sai sót điều khoản phạt</p>
                  </div>
                </div>
                <div className="bg-muted/50 border border-border p-2 rounded-2xl">
                  <div className="bg-card border border-border/40 p-6 rounded-xl text-center space-y-2 shadow-card-subtle">
                    <span className="text-3xl font-display font-bold text-primary">100%</span>
                    <p className="text-xs text-muted-foreground">Độ bảo mật dữ liệu đầu-cuối</p>
                  </div>
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="bg-muted/50 border border-border p-2 rounded-2xl mt-8">
                <div className="bg-card border border-border/40 p-8 rounded-xl shadow-card-subtle space-y-4">
                  <div className="h-8 w-8 text-secondary/30"><Quote className="h-full w-full" /></div>
                  <p className="text-sm italic text-muted-foreground leading-relaxed">
                    &quot;HopeRise đã không chỉ đem lại một diện mạo mới cho LegalDiff mà còn giúp tối ưu thuật toán xử lý dữ liệu ngay tại máy khách. Đây là bước đột phá trong hành trình cung cấp giải pháp an tâm tuyệt đối của chúng tôi.&quot;
                  </p>
                  <div className="pt-4 border-t border-border/50 flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-bold text-foreground">Nguyễn Văn Đạt</h4>
                      <p className="text-muted-foreground">Giám đốc Pháp chế - LegalDiff Corp</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-secondary bg-accent px-2 py-0.5 rounded">Đã xác minh LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom of Funnel Soft CTA */}
      <section className="bg-muted/30 py-20 lg:py-24 border-t border-border/80 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Áp dụng giải pháp tương tự cho sản phẩm của bạn
          </h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground">
            Hãy liên hệ với đội ngũ chuyên gia của chúng tôi để cùng phân tích bài toán thực tế và xây dựng hệ thống trải nghiệm số an tâm cho chính doanh nghiệp của bạn.
          </p>
          <div className="pt-4">
            <Link
              href="/booking?template=legaldiff"
              className="inline-flex items-center justify-between font-bold transition-all duration-300 bg-primary text-primary-foreground hover:opacity-95 active:scale-[0.98] shadow-button h-14 pl-8 pr-3 text-sm rounded-full gap-6 text-base group"
            >
              <span>Đặt lịch trao đổi chi tiết</span>
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
