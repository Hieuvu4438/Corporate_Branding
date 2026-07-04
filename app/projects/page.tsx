import Link from "next/link";
import { ArrowRight, Star, MoveUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

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

      {/* 2. LegalDiff Showcase (Web App - Browser Layout) */}
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

          {/* Visual Showcase (Browser window design) */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={200} className="relative bg-muted/20 p-3 sm:p-5 rounded-2xl border border-border/40 shadow-sm flex items-center justify-center overflow-hidden">
              <div className="w-full bg-card border border-border/80 rounded-xl overflow-hidden shadow-card-subtle flex flex-col group/browser transition-all duration-500 hover:scale-[1.01]">
                {/* Window Header */}
                <div className="bg-muted/30 border-b border-border/80 px-4 py-2.5 flex items-center gap-3 shrink-0 select-none">
                  {/* Window controls */}
                  <div className="flex gap-1.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-[#FF5F56]/90 shadow-sm"></div>
                    <div className="h-2 w-2 rounded-full bg-[#FFBD2E]/90 shadow-sm"></div>
                    <div className="h-2 w-2 rounded-full bg-[#27C93F]/90 shadow-sm"></div>
                  </div>
                  {/* Address bar */}
                  <div className="mx-auto w-1/2 bg-background/50 border border-border/60 text-[9px] sm:text-[10px] text-muted-foreground py-0.5 px-3 rounded-full text-center truncate font-mono select-all tracking-wide">
                    https://legaldiff.vn/analysis
                  </div>
                </div>
                {/* Screen */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src="/asset/img/Screenshot 2026-07-04 143200.png"
                    alt="Giao diện LegalDiff"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover/browser:scale-[1.02]"
                  />
                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.05] pointer-events-none z-10" />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. CareMate Showcase (Mobile App - Staggered Card Showcase) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Showcase (3-Column Staggered App Screenshot Grid) */}
          <div className="lg:col-span-7 order-last lg:order-first w-full flex items-center justify-center">
            <ScrollReveal className="relative w-full max-w-lg select-none py-8 px-5 bg-muted/20 rounded-2xl border border-border/40 flex items-center justify-center overflow-hidden">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
                {/* Left Phone Screen */}
                <div className="relative aspect-[9/18.5] rounded-2xl overflow-hidden border border-border/80 shadow-md bg-zinc-950 group/img transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] scale-[0.92] -rotate-3 translate-x-2">
                  <img src="/asset/img/Screenshot 2026-07-04 143925.png" alt="SOS Screen" className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.08] pointer-events-none z-10" />
                </div>
                {/* Center Phone Screen */}
                <div className="relative aspect-[9/18.5] rounded-2xl overflow-hidden border border-border/80 shadow-xl bg-zinc-950 z-20 group/img transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] -translate-y-2">
                  <img src="/asset/img/Screenshot 2026-07-04 144033.png" alt="Reminders Screen" className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/[0.1] pointer-events-none z-10" />
                </div>
                {/* Right Phone Screen */}
                <div className="relative aspect-[9/18.5] rounded-2xl overflow-hidden border border-border/80 shadow-md bg-zinc-950 group/img transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] scale-[0.92] rotate-3 -translate-x-2">
                  <img src="/asset/img/Screenshot 2026-07-04 144059.png" alt="Healthy Diet Screen" className="object-cover w-full h-full transition-transform duration-500 group-hover/img:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.08] pointer-events-none z-10" />
                </div>
              </div>
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

      {/* 4. Ethnosoul Legacy (Artistic Storytelling Collage) */}
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

          {/* Visual Showcase (Landscape Clean overlapping collage) */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal delay={200} className="relative bg-muted/20 p-4 sm:p-6 rounded-2xl border border-border/40 shadow-sm aspect-[16/11] flex items-center justify-center overflow-hidden">
              {/* Primary Landscape Image */}
              <div className="w-[82%] -translate-x-6 relative z-10 rounded-xl overflow-hidden border border-border/80 shadow-lg group/es1 transition-all duration-500 hover:scale-[1.01]">
                <img src="/asset/img/ethnosoul_legacy_01.png" alt="Ethnosoul Legacy Home" className="object-cover w-full h-full transition-transform duration-700 group-hover/es1:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.06] pointer-events-none z-10" />
              </div>
              {/* Secondary Overlapping Landscape Image */}
              <div className="absolute bottom-[10%] right-[8%] w-[45%] z-20 shadow-2xl rounded-xl overflow-hidden border border-border/90 group/es2 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="aspect-[4/3] w-full">
                  <img src="/asset/img/ethnosoul_legacy_02.png" alt="Ethnosoul Legacy Story" className="object-cover w-full h-full transition-transform duration-700 group-hover/es2:scale-[1.02]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.07] pointer-events-none z-10" />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 5. School LMS Showcase (Education Platform Collage) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 w-full border-t border-border/40 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Visual Showcase (Clean overlapping collage) */}
          <div className="lg:col-span-7 order-last lg:order-first w-full">
            <ScrollReveal delay={200} className="relative bg-muted/20 p-4 sm:p-6 rounded-2xl border border-border/40 shadow-sm aspect-[16/11] flex items-center justify-center overflow-hidden">
              {/* Primary Landscape Image */}
              <div className="w-[80%] -translate-x-8 -translate-y-4 relative z-10 rounded-xl overflow-hidden border border-border/80 shadow-lg group/lms1 transition-all duration-500 hover:scale-[1.01]">
                <img src="/asset/img/school_lms_01.png" alt="School LMS Dashboard" className="object-cover w-full h-full transition-transform duration-700 group-hover/lms1:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.06] pointer-events-none z-10" />
              </div>
              {/* Secondary Overlapping Portrait Image */}
              <div className="absolute bottom-[6%] right-[8%] w-[32%] z-20 shadow-2xl rounded-xl overflow-hidden border border-border/90 group/lms2 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="aspect-[3/4] w-full">
                  <img src="/asset/img/school_lms_02.png" alt="School LMS Mobile Courses" className="object-cover w-full h-full transition-transform duration-700 group-hover/lms2:scale-[1.02]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.07] pointer-events-none z-10" />
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
