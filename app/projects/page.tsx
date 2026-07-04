import Link from "next/link";
import { ArrowRight, Star, FileText, Smartphone, Laptop, GraduationCap, HeartPulse, ShieldCheck, Zap, MoveUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface BrowserMockupProps {
  src: string;
  url: string;
  alt: string;
  className?: string;
}

function BrowserMockup({ src, url, alt, className = "" }: BrowserMockupProps) {
  return (
    <div className={`w-full bg-card border border-border rounded-xl overflow-hidden shadow-card-subtle flex flex-col group/browser transition-all duration-500 hover:-translate-y-1 ${className}`}>
      {/* Window Header */}
      <div className="bg-muted/30 border-b border-border px-4 py-3 flex items-center gap-3 shrink-0 select-none">
        {/* Window controls */}
        <div className="flex gap-1.5 shrink-0">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/90 shadow-sm"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/90 shadow-sm"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/90 shadow-sm"></div>
        </div>
        {/* Address bar */}
        <div className="mx-auto w-1/2 bg-background border border-border/80 text-[10px] text-muted-foreground py-1 px-3 rounded-full text-center truncate font-mono select-all tracking-wide">
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
        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/2 to-white/5 pointer-events-none z-10" />
      </div>
    </div>
  );
}

interface IPhone17ProMaxMockupProps {
  src: string;
  alt: string;
  className?: string;
}

function IPhone17ProMaxMockup({ src, alt, className = "" }: IPhone17ProMaxMockupProps) {
  return (
    <div className={`relative aspect-[421/852] bg-[#E4E4E7] dark:bg-[#18181B] rounded-[11.5%] p-[1.5%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 hover:shadow-primary/10 select-none ${className}`}>
      {/* Outer steel band highlight */}
      <div className="absolute inset-0 rounded-[11.5%] border border-[#D4D4D8] dark:border-[#27272A] pointer-events-none" />
      
      {/* Black Bezel container */}
      <div className="relative w-full h-full bg-black rounded-[10%] p-[2.5%] overflow-hidden flex flex-col">
        {/* Screen Glass Panel */}
        <div className="relative w-full h-full bg-zinc-950 rounded-[8.5%] overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full transition-transform duration-700 hover:scale-[1.02]"
          />
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/[0.1] pointer-events-none z-10" />
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-[4.5%] left-1/2 -translate-x-1/2 w-[28%] h-[3.5%] bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-[12%] aspect-square rounded-full bg-zinc-900 border border-zinc-800/50"></div>
        </div>
      </div>
    </div>
  );
}

interface MacbookProMockupProps {
  src: string;
  url: string;
  alt: string;
  className?: string;
}

function MacbookProMockup({ src, url, alt, className = "" }: MacbookProMockupProps) {
  return (
    <div className={`relative w-full aspect-[2812/1788] select-none ${className}`}>
      {/* Laptop Lid (Outer Aluminum Shell) */}
      <div className="absolute top-[8.5%] left-[11%] right-[11%] bottom-[16%] bg-[#D4D4D8] dark:bg-[#1C1917] rounded-[2%] p-[0.6%] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden">
        {/* Lid bezel border */}
        <div className="absolute inset-0 rounded-[2%] border border-[#E4E4E7] dark:border-[#2E2A27] pointer-events-none" />
        
        {/* Screen Bezel (Black Border) */}
        <div className="relative w-full h-full bg-black rounded-[1.5%] p-[1.2%] flex flex-col justify-between overflow-hidden">
          {/* Active Screen Display Area */}
          <div className="relative w-full h-full overflow-hidden bg-zinc-950 rounded-[0.8%] border border-zinc-900/50">
            <img
              src={src}
              alt={alt}
              className="object-cover w-full h-full"
            />
            {/* Screen Glare Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.06] pointer-events-none z-10" />
          </div>

          {/* Top Camera Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[8%] h-[3.5%] bg-black rounded-b-[4px] z-30 flex items-center justify-center">
            <div className="w-[10%] aspect-square rounded-full bg-zinc-900 border border-zinc-800/40"></div>
          </div>
        </div>
      </div>
      
      {/* Aluminum Hinge Connection */}
      <div className="absolute bottom-[14.5%] left-[15%] right-[15%] h-[1.5%] bg-[#1c1917] dark:bg-[#0c0a09] rounded-t-sm"></div>
      
      {/* Keyboard Base / Deck */}
      <div className="absolute bottom-[9.5%] left-[2%] right-[2%] h-[5%] bg-[#C3C2C0] dark:bg-[#44403C] border-t border-[#EAEAE8] dark:border-[#57534E] border-b border-[#9E9D9B] dark:border-[#2E2B28] rounded-t-[0.8%] rounded-b-[3%] shadow-2xl flex justify-center">
        {/* Screen Opening Notch */}
        <div className="w-[8%] h-[20%] bg-[#A8A29E] dark:bg-[#292524] rounded-b-[2px]"></div>
      </div>
      
      {/* Base shadow */}
      <div className="absolute bottom-[6%] left-[4%] right-[4%] h-[4%] bg-black/15 dark:bg-black/40 blur-md rounded-full -z-10"></div>
    </div>
  );
}

interface IPadProMockupProps {
  src: string;
  alt: string;
  orientation?: "portrait" | "landscape";
  className?: string;
}

function IPadProMockup({ src, alt, orientation = "portrait", className = "" }: IPadProMockupProps) {
  const isPortrait = orientation === "portrait";
  return (
    <div 
      className={`relative select-none ${className}`}
      style={{ aspectRatio: isPortrait ? "1612/2099" : "2099/1612" }}
    >
      {/* iPad Outer Bezel (Aluminum Ring + Screen Border) */}
      <div className={`absolute inset-0 bg-black rounded-[4.5%] shadow-2xl flex flex-col overflow-hidden ${isPortrait ? "p-[4.5%]" : "p-[3.5%]"}`}>
        {/* Outer Aluminum Edge highlight */}
        <div className="absolute inset-0 rounded-[4.5%] border border-[#3a3a3c] dark:border-[#27272a] pointer-events-none ring-[1px] ring-black/40" />

        {/* Screen Area */}
        <div className="relative w-full h-full overflow-hidden bg-zinc-950 rounded-[3%] border border-zinc-900">
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full"
          />
          {/* Screen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.07] pointer-events-none z-10" />
        </div>
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
            Chế tác giao diện đạt tiêu chuẩn <span className="text-primary italic">Mỹ thuật & Kỹ thuật</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300} duration={800}>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-light leading-relaxed text-balance">
            Tuyển tập các case study thực tế được thiết kế và tối ưu hóa tỉ mỉ bởi HopeRise, kết hợp hoàn hảo giữa thẩm mỹ di sản và trải nghiệm số.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. LegalDiff Showcase (Web App in Macbook Pro) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase font-mono">01 / PLATFORM</span>
              <h2 className="font-display text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight">
                LegalDiff — So sánh văn bản pháp lý song song
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Nền tảng giúp các văn phòng luật và cố vấn pháp lý so sánh các phiên bản nghị định, thông tư phức tạp chỉ trong vài giây, hiển thị trực quan các dòng chỉnh sửa chi tiết.
              </p>
            </div>

            <div className="space-y-4 font-sans text-sm text-foreground/80">
              <p className="flex items-start gap-4">
                <span className="font-display italic text-primary text-base font-semibold shrink-0">01</span>
                <span>Highlight chi tiết các dòng sửa đổi, xóa bỏ hoặc thêm mới tức thời.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="font-display italic text-primary text-base font-semibold shrink-0">02</span>
                <span>Tự động kết xuất báo cáo sai khác dưới dạng file PDF/Docx bảo mật.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="font-display italic text-primary text-base font-semibold shrink-0">03</span>
                <span>Hạ tầng đám mây cho phép tải lên cùng lúc nhiều tập tài liệu dung lượng lớn.</span>
              </p>
            </div>

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

          {/* Visual Showcase (Macbook Pro Mockup) */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={200} className="relative bg-muted/40 p-6 sm:p-10 rounded-2xl border border-border/80 shadow-sm flex items-center justify-center overflow-hidden">
              <MacbookProMockup
                src="/asset/img/Screenshot 2026-07-04 143200.png"
                url="https://legaldiff.vn/analysis"
                alt="Giao diện LegalDiff"
                className="w-full relative z-10"
              />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. CareMate Showcase (Mobile App in realistic iPhone 17 Pro Max Silver) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Showcase (Staggered Overlapping iPhone 17 Pro Max Silver) */}
          <div className="lg:col-span-7 order-last lg:order-first w-full flex items-center justify-center">
            <ScrollReveal className="relative w-full max-w-md h-[360px] sm:h-[480px] flex items-center justify-center select-none py-8 bg-muted/30 rounded-2xl border border-border/60">
              {/* Left Phone (SOS Screen) */}
              <IPhone17ProMaxMockup
                src="/asset/img/Screenshot 2026-07-04 143925.png"
                alt="SOS Screen"
                className="absolute w-[140px] sm:w-[200px] -translate-x-[45px] sm:-translate-x-[80px] scale-[0.88] -rotate-6 z-10 opacity-80 transition-all duration-500 hover:z-30 hover:scale-100 hover:rotate-0 hover:opacity-100"
              />
              {/* Center Phone (Reminders) */}
              <IPhone17ProMaxMockup
                src="/asset/img/Screenshot 2026-07-04 144033.png"
                alt="Reminders Screen"
                className="absolute w-[150px] sm:w-[210px] z-20 scale-100 shadow-2xl transition-all duration-500 hover:scale-105"
              />
              {/* Right Phone (Diet Plan) */}
              <IPhone17ProMaxMockup
                src="/asset/img/Screenshot 2026-07-04 144059.png"
                alt="Healthy Diet Screen"
                className="absolute w-[140px] sm:w-[200px] translate-x-[45px] sm:translate-x-[80px] scale-[0.88] rotate-6 z-10 opacity-80 transition-all duration-500 hover:z-30 hover:scale-100 hover:rotate-0 hover:opacity-100"
              />
            </ScrollReveal>
          </div>

          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase font-mono">02 / MOBILE APP</span>
              <h2 className="font-display text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight">
                CareMate — Trợ lý sức khỏe gia đình & SOS một chạm
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Ứng dụng di động tối ưu hóa cho người cao tuổi, tích hợp cảnh báo khẩn cấp một chạm, tự động hóa nhắc lịch trình y tế và gợi ý thực đơn dinh dưỡng lành mạnh.
              </p>
            </div>

            <div className="space-y-4 font-sans text-sm text-foreground/80">
              <p className="flex items-start gap-4">
                <span className="font-display italic text-secondary text-base font-semibold shrink-0">01</span>
                <span>Phát tín hiệu SOS khẩn cấp tới bác sĩ gia đình qua kết nối một chạm.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="font-display italic text-secondary text-base font-semibold shrink-0">02</span>
                <span>Đạt chứng nhận bảo mật dữ liệu sức khỏe HIPAA, an tâm lưu trữ thông tin.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="font-display italic text-secondary text-base font-semibold shrink-0">03</span>
                <span>Tùy chỉnh lịch trình dùng thuốc nâng cao và tự động hóa cảnh báo liều lượng.</span>
              </p>
            </div>

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

      {/* 4. Ethnosoul Legacy (Macbook Pro + iPad Pro Landscape) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase font-mono">03 / STORYTELLING</span>
              <h2 className="font-display text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight">
                Ethnosoul Legacy — Chế tác di sản văn hóa số
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Không gian nghệ thuật số tôn vinh trang phục truyền thống và chất liệu di sản văn hóa Việt Nam. Kết hợp hiệu ứng thị giác điện ảnh và trải nghiệm tương tác chiều sâu.
              </p>
            </div>

            <div className="space-y-4 font-sans text-sm text-foreground/80">
              <p className="flex items-start gap-4">
                <span className="font-display italic text-primary text-base font-semibold shrink-0">01</span>
                <span>Tương tác 3D mượt mà tái hiện sinh động từng thớ sợi, hoa văn dệt tay thổ cẩm.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="font-display italic text-primary text-base font-semibold shrink-0">02</span>
                <span>Hành trình kể chuyện nghệ thuật dẫn dắt độc giả trải nghiệm nguồn gốc lịch sử di sản.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="font-display italic text-primary text-base font-semibold shrink-0">03</span>
                <span>Thiết kế tối ưu hóa chuyển động tinh xảo và tốc độ tải trang ấn tượng.</span>
              </p>
            </div>

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

          {/* Visual Showcase (Macbook Pro + iPad Pro Landscape Collage) */}
          <div className="lg:col-span-7 w-full pb-8">
            <ScrollReveal delay={200} className="relative bg-muted/40 p-6 sm:p-10 rounded-2xl border border-border/80 shadow-sm aspect-[16/11] flex items-center justify-center overflow-hidden">
              {/* Macbook Pro Mockup */}
              <MacbookProMockup
                src="/asset/img/ethnosoul_legacy_01.png"
                url="https://ethnosoul.vn/legacy"
                alt="Ethnosoul Legacy Home"
                className="w-[85%] -translate-x-6 relative z-10"
              />
              {/* iPad Pro Landscape Mockup overlapping bottom right */}
              <div className="absolute bottom-[8%] right-[8%] w-[48%] z-20 shadow-2xl scale-95 hover:scale-100 transition-transform duration-500">
                <IPadProMockup
                  src="/asset/img/ethnosoul_legacy_02.png"
                  alt="Ethnosoul Legacy Story"
                  orientation="landscape"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 5. School LMS Showcase (Macbook Pro + iPad Pro Portrait) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Showcase (Macbook Pro + iPad Pro Portrait Collage) */}
          <div className="lg:col-span-7 order-last lg:order-first w-full pb-8">
            <ScrollReveal delay={200} className="relative bg-muted/40 p-6 sm:p-10 rounded-2xl border border-border/80 shadow-sm aspect-[16/11] flex items-center justify-center overflow-hidden">
              {/* Macbook Pro Mockup */}
              <MacbookProMockup
                src="/asset/img/school_lms_01.png"
                url="https://schoollms.edu.vn/dashboard"
                alt="School LMS Dashboard"
                className="w-[82%] -translate-x-8 -translate-y-4 relative z-10"
              />
              {/* iPad Pro Portrait Mockup overlapping bottom right */}
              <div className="absolute bottom-[4%] right-[8%] w-[34%] z-20 shadow-2xl scale-95 hover:scale-100 transition-transform duration-500">
                <IPadProMockup
                  src="/asset/img/school_lms_02.png"
                  alt="School LMS Mobile Courses"
                  orientation="portrait"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Content side */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary tracking-widest uppercase font-mono">04 / LMS PLATFORM</span>
              <h2 className="font-display text-3xl md:text-5xl font-light text-foreground tracking-tight leading-tight">
                School LMS — Hệ thống quản lý học tập toàn diện
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Hệ thống LMS được tối ưu hóa giao diện cho cả học sinh và nhà trường, tinh gọn quy trình giao bài tập, chấm điểm tự động và theo dõi tiến trình cá nhân hóa.
              </p>
            </div>

            <div className="space-y-4 font-sans text-sm text-foreground/80">
              <p className="flex items-start gap-4">
                <span className="font-display italic text-secondary text-base font-semibold shrink-0">01</span>
                <span>Bảng điều khiển trực quan giúp học sinh dễ dàng nắm bắt lịch học, deadline.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="font-display italic text-secondary text-base font-semibold shrink-0">02</span>
                <span>Công cụ chấm điểm bài viết bằng AI và kết xuất thống kê báo cáo tiến bộ.</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="font-display italic text-secondary text-base font-semibold shrink-0">03</span>
                <span>Hỗ trợ giáo viên xây dựng giáo án điện tử đa phương tiện thông minh.</span>
              </p>
            </div>

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
