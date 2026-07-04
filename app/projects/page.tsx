import Link from "next/link";
import { ArrowRight, Check, Star, Sparkles, Smartphone, FileText, HeartPulse, ShieldCheck, Zap, MoveUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-x-hidden bg-background text-foreground py-24 space-y-32">
      {/* 1. Header Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-6">
        <ScrollReveal duration={800}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/40 px-3.5 py-1.5 text-xs font-semibold text-secondary ring-1 ring-border">
            <Star className="h-3.5 w-3.5 fill-secondary" />
            <span className="uppercase tracking-widest">Tác phẩm chọn lọc</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={150} duration={800}>
          <h1 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-6xl max-w-4xl mx-auto text-balance leading-[1.1]">
            Chế tác giao diện đạt tiêu chuẩn <span className="text-primary italic font-serif">Mỹ thuật & Kỹ thuật</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300} duration={800}>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed text-balance">
            Tuyển tập các case study thực tế được thiết kế và tối ưu hóa tỉ mỉ bởi HopeRise, kết hợp hoàn hảo giữa thẩm mỹ và trải nghiệm số.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. LegalDiff Showcase (Web App) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary font-sans">
                <FileText className="h-3.5 w-3.5" />
                <span>NỀN TẢNG WEB</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground tracking-tight leading-tight">
                LegalDiff — Tối ưu hóa so sánh văn bản pháp quy song song
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Nền tảng giúp các văn phòng luật và cố vấn pháp lý so sánh các phiên bản nghị định, thông tư phức tạp chỉ trong vài giây, hiển thị trực quan các dòng chỉnh sửa chi tiết.
              </p>
            </div>

            <ul className="space-y-3.5 text-sm text-foreground/80 font-sans">
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Highlight chi tiết các dòng sửa đổi, xóa bỏ hoặc thêm mới tức thời.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Tự động kết xuất báo cáo sai khác dưới dạng file PDF/Docx bảo mật.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Hạ tầng đám mây cho phép tải lên cùng lúc nhiều tập tài liệu dung lượng lớn.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-between font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-primary text-primary-foreground hover:brightness-105 active:scale-[0.98] shadow-button h-12 pl-6 pr-2 rounded-full gap-6 text-sm group"
              >
                <span>Xem Case Study đầy đủ</span>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <MoveUpRight className="h-4 w-4 text-primary-foreground" />
                </div>
              </Link>
            </div>
          </div>

          {/* Visual Showcase side (Double-Bezel) */}
          <div className="lg:col-span-7 bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md group hover:border-primary/20 transition-colors duration-500 shadow-card-subtle">
            <div className="bg-card border border-white/40 p-6 rounded-[18px] backdrop-blur-lg flex flex-col space-y-4">
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-border/60 bg-background/50">
                <img
                  src="/asset/img/Screenshot 2026-07-04 143200.png"
                  alt="Giao diện LegalDiff"
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-102 filter grayscale mix-blend-luminosity brightness-95 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:brightness-100"
                />
              </div>
              <div className="text-center font-sans">
                <span className="text-xs text-muted-foreground font-light">Giao diện phân tích song song hai phiên bản Luật Quy hoạch Việt Nam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CareMate Showcase (Mobile App) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual Mockups Grid (Asymmetric Bento display of mobile screens) */}
          <div className="lg:col-span-7 order-last lg:order-first grid grid-cols-12 gap-4 items-end">
            <div className="col-span-4 bg-muted border border-border p-1.5 rounded-[18px] backdrop-blur-md shadow-sm">
              <div className="bg-card border border-white/40 rounded-[12px] overflow-hidden aspect-[9/16] relative">
                <img
                  src="/asset/img/Screenshot 2026-07-04 143925.png"
                  alt="SOS & Medication Screen"
                  className="object-cover w-full h-full filter brightness-95"
                />
              </div>
            </div>
            
            <div className="col-span-4 bg-muted border border-border p-1.5 rounded-[18px] backdrop-blur-md shadow-md -translate-y-4">
              <div className="bg-card border border-white/40 rounded-[12px] overflow-hidden aspect-[9/16] relative">
                <img
                  src="/asset/img/Screenshot 2026-07-04 144033.png"
                  alt="Reminders Advance Screen"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="col-span-4 bg-muted border border-border p-1.5 rounded-[18px] backdrop-blur-md shadow-sm">
              <div className="bg-card border border-white/40 rounded-[12px] overflow-hidden aspect-[9/16] relative">
                <img
                  src="/asset/img/Screenshot 2026-07-04 144059.png"
                  alt="Healthy Diet Plan Screen"
                  className="object-cover w-full h-full filter brightness-95"
                />
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-bold text-secondary font-sans">
                <Smartphone className="h-3.5 w-3.5" />
                <span>ỨNG DỤNG DI ĐỘNG</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground tracking-tight leading-tight">
                CareMate — Trợ lý theo dõi sức khỏe gia đình và SOS thông minh
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Ứng dụng di động tối ưu hóa cho người cao tuổi, tích hợp cảnh báo khẩn cấp một chạm, tự động hóa nhắc lịch trình y tế và gợi ý thực đơn dinh dưỡng lành mạnh.
              </p>
            </div>

            <ul className="space-y-3.5 text-sm text-foreground/80 font-sans">
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <HeartPulse className="h-3.5 w-3.5 text-secondary" />
                </div>
                <span>Phát tín hiệu SOS khẩn cấp tới bác sĩ gia đình qua kết nối một chạm.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                </div>
                <span>Đạt chứng nhận bảo mật dữ liệu sức khỏe HIPAA, an tâm lưu trữ thông tin.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <Zap className="h-3.5 w-3.5 text-secondary" />
                </div>
                <span>Tùy chỉnh lịch trình dùng thuốc nâng cao và tự động hóa cảnh báo liều lượng.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/booking"
                className="inline-flex items-center justify-between font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-border bg-card/65 text-foreground hover:bg-muted/80 active:scale-[0.98] h-12 pl-6 pr-2 rounded-full gap-6 text-sm group"
              >
                <span>Nhận tư vấn thiết kế app</span>
                <div className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4 text-foreground" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
