import Link from "next/link";
import { ArrowRight, Check, Star, FileText, Smartphone, Laptop, GraduationCap, HeartPulse, ShieldCheck, Zap, MoveUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface BrowserMockupProps {
  src: string;
  url: string;
  alt: string;
  className?: string;
}

function BrowserMockup({ src, url, alt, className = "" }: BrowserMockupProps) {
  return (
    <div className={`w-full bg-card border border-border rounded-xl overflow-hidden shadow-card-subtle flex flex-col group/browser transition-colors duration-300 ${className}`}>
      {/* Window Header */}
      <div className="bg-muted/40 border-b border-border px-4 py-3 flex items-center gap-3 shrink-0 select-none">
        {/* Window controls */}
        <div className="flex gap-1.5 shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/80"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/80"></div>
        </div>
        {/* Address bar */}
        <div className="mx-auto w-2/3 bg-background border border-border/80 text-[10px] text-muted-foreground py-1 px-3 rounded-full text-center truncate font-mono select-all">
          {url}
        </div>
      </div>
      {/* Screen Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full transition-transform duration-700 group-hover/browser:scale-[1.01]"
        />
      </div>
    </div>
  );
}

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

function PhoneMockup({ src, alt, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative w-[220px] aspect-[9/19] bg-zinc-900 rounded-[38px] p-2 border-[5px] border-zinc-800 ring-1 ring-zinc-700/40 shadow-2xl ${className}`}>
      {/* Speaker/Notch */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-zinc-900 rounded-full z-20 flex items-center justify-center">
        <div className="w-6 h-0.5 bg-zinc-800 rounded-full"></div>
      </div>
      {/* Screen Frame */}
      <div className="w-full h-full rounded-[28px] overflow-hidden bg-zinc-950 relative border border-zinc-800/80">
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-x-hidden bg-background text-foreground py-24 space-y-32">
      
      {/* 1. Header Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-6">
        <ScrollReveal duration={800}>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-primary">
            <Star className="h-3.5 w-3.5 fill-primary" />
            <span className="uppercase tracking-widest">Tác phẩm chọn lọc</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={150} duration={800}>
          <h1 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-6xl max-w-4xl mx-auto text-balance leading-[1.1]">
            Chế tác giao diện đạt tiêu chuẩn <span className="text-primary italic font-serif">Mỹ thuật & Kỹ thuật</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300} duration={800}>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-light leading-relaxed text-balance">
            Tuyển tập các case study thực tế được thiết kế và tối ưu hóa tỉ mỉ bởi HopeRise, kết hợp hoàn hảo giữa thẩm mỹ di sản và trải nghiệm số.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. LegalDiff Showcase (Web App in Browser Mockup) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary font-sans">
                <FileText className="h-3.5 w-3.5" />
                <span>NỀN TẢNG PHÁP LÝ</span>
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

          {/* Visual Showcase (Browser Mockup) */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={200}>
              <BrowserMockup
                src="/asset/img/Screenshot 2026-07-04 143200.png"
                url="https://legaldiff.vn/analysis"
                alt="Giao diện LegalDiff"
              />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. CareMate Showcase (Mobile App in realistic staggered phones) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Showcase (Staggered Overlapping Phones) */}
          <div className="lg:col-span-7 order-last lg:order-first w-full flex items-center justify-center">
            <ScrollReveal className="relative w-full max-w-md h-[460px] flex items-center justify-center select-none py-8">
              {/* Left Phone (SOS Screen) */}
              <PhoneMockup
                src="/asset/img/Screenshot 2026-07-04 143925.png"
                alt="SOS Screen"
                className="absolute -translate-x-20 scale-90 -rotate-6 z-10 opacity-90 transition-all duration-500 hover:z-30 hover:scale-100 hover:rotate-0"
              />
              {/* Center Phone (Reminders) */}
              <PhoneMockup
                src="/asset/img/Screenshot 2026-07-04 144033.png"
                alt="Reminders Screen"
                className="absolute z-20 scale-100 shadow-2xl transition-all duration-500 hover:scale-105"
              />
              {/* Right Phone (Diet Plan) */}
              <PhoneMockup
                src="/asset/img/Screenshot 2026-07-04 144059.png"
                alt="Healthy Diet Screen"
                className="absolute translate-x-20 scale-90 rotate-6 z-10 opacity-90 transition-all duration-500 hover:z-30 hover:scale-100 hover:rotate-0"
              />
            </ScrollReveal>
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
                className="inline-flex items-center justify-between font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-border bg-card text-foreground hover:bg-muted/80 active:scale-[0.98] h-12 pl-6 pr-2 rounded-full gap-6 text-sm group"
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

      {/* 4. Ethnosoul Legacy (Web App with layered browser mockups) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary font-sans">
                <Laptop className="h-3.5 w-3.5" />
                <span>TRẢI NGHIỆM THƯƠNG HIỆU</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground tracking-tight leading-tight">
                Ethnosoul Legacy — Chế tác di sản văn hóa kỹ thuật số
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Không gian nghệ thuật số tôn vinh trang phục truyền thống và chất liệu di sản văn hóa Việt Nam. Kết hợp hiệu ứng thị giác điện ảnh và trải nghiệm tương tác chiều sâu.
              </p>
            </div>

            <ul className="space-y-3.5 text-sm text-foreground/80 font-sans">
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Tương tác 3D mượt mà tái hiện sinh động từng thớ sợi, hoa văn dệt tay thổ cẩm.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Hành trình kể chuyện nghệ thuật dẫn dắt độc giả trải nghiệm nguồn gốc lịch sử di sản.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Thiết kế tối ưu hóa chuyển động tinh xảo và tốc độ tải trang ấn tượng.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-primary text-primary-foreground hover:brightness-105 active:scale-[0.98] shadow-button h-12 pl-6 pr-2 rounded-full gap-6 text-sm group"
              >
                <span>Yêu cầu tư vấn thiết kế</span>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <MoveUpRight className="h-4 w-4 text-primary-foreground" />
                </div>
              </Link>
            </div>
          </div>

          {/* Visual Showcase (Layered Browser Mockups) */}
          <div className="lg:col-span-7 w-full pb-8">
            <ScrollReveal delay={200} className="relative w-full aspect-[16/10]">
              {/* Main Browser Mockup */}
              <BrowserMockup
                src="/asset/img/ethnosoul_legacy_01.png"
                url="https://ethnosoul.vn/legacy"
                alt="Ethnosoul Legacy Home"
                className="w-full relative z-10"
              />
              {/* Layered Second Browser Mockup */}
              <BrowserMockup
                src="/asset/img/ethnosoul_legacy_02.png"
                url="https://ethnosoul.vn/legacy/story"
                alt="Ethnosoul Legacy Story"
                className="absolute -bottom-8 -right-6 w-[55%] z-20 shadow-2xl border border-border/80 scale-95 hover:scale-100 transition-transform duration-500"
              />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 5. School LMS Showcase (Education Platform with layered mockups) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Showcase (Layered Browser Mockups) */}
          <div className="lg:col-span-7 order-last lg:order-first w-full pb-8">
            <ScrollReveal delay={200} className="relative w-full aspect-[16/10]">
              {/* Main Browser Mockup */}
              <BrowserMockup
                src="/asset/img/school_lms_01.png"
                url="https://schoollms.edu.vn/dashboard"
                alt="School LMS Dashboard"
                className="w-full relative z-10"
              />
              {/* Layered Second Browser Mockup */}
              <BrowserMockup
                src="/asset/img/school_lms_02.png"
                url="https://schoollms.edu.vn/courses"
                alt="School LMS Courses"
                className="absolute -bottom-8 -left-6 w-[55%] z-20 shadow-2xl border border-border/80 scale-95 hover:scale-100 transition-transform duration-500"
              />
            </ScrollReveal>
          </div>

          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-bold text-secondary font-sans">
                <GraduationCap className="h-3.5 w-3.5 text-secondary" />
                <span>NỀN TẢNG GIÁO DỤC</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground tracking-tight leading-tight">
                School LMS — Hệ thống quản lý học tập toàn diện thế hệ mới
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Hệ thống LMS được tối ưu hóa giao diện cho cả học sinh và nhà trường, tinh gọn quy trình giao bài tập, chấm điểm tự động và theo dõi tiến trình cá nhân hóa.
              </p>
            </div>

            <ul className="space-y-3.5 text-sm text-foreground/80 font-sans">
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </div>
                <span>Bảng điều khiển trực quan giúp học sinh dễ dàng nắm bắt lịch học, deadline.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </div>
                <span>Công cụ chấm điểm bài viết bằng AI và kết xuất thống kê báo cáo tiến bộ.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </div>
                <span>Hỗ trợ giáo viên xây dựng giáo án điện tử đa phương tiện thông minh.</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/booking"
                className="inline-flex items-center justify-between font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-border bg-card text-foreground hover:bg-muted/80 active:scale-[0.98] h-12 pl-6 pr-2 rounded-full gap-6 text-sm group"
              >
                <span>Nhận tư vấn thiết kế LMS</span>
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
