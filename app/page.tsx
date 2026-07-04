import Link from "next/link";
import { ArrowRight, MoveUpRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-x-hidden bg-background text-foreground">
      
      {/* 1. Attention: Hero Section (Restored Centered Layout) */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-32">
        {/* Background Image with Filter */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/asset/img/hero_bg_minimal.jpg"
            alt="Minimalist Architectural Background"
            className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] saturate-[0.9] scale-102"
          />
          {/* Radial warm wash overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,oklch(0.985_0.004_70)_85%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-12 flex flex-col items-center">
          <ScrollReveal delay={100} duration={1000}>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-accent/30 backdrop-blur-md px-4 py-2 text-xs font-semibold text-primary ring-1 ring-border">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="uppercase tracking-widest">Nâng Tầm Nhận Diện Số</span>
            </div>
          </ScrollReveal>

          {/* H1 Display Title (2-Line Iron Rule) */}
          <ScrollReveal delay={300} duration={1000} className="w-full">
            <h1 className="font-display text-5xl font-light tracking-tight text-foreground sm:text-7xl lg:text-8xl leading-[1.05] text-balance max-w-5xl mx-auto">
              Thiết kế trải nghiệm số <span className="text-primary italic font-serif">chạm cảm xúc</span> và kiến tạo niềm tin
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={500} duration={1000}>
            <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground font-light leading-relaxed text-balance mx-auto">
              Đồng hành cùng các doanh nghiệp y tế và công nghệ để xây dựng những sản phẩm số đẳng cấp, trực quan và đáp ứng các tiêu chuẩn kỹ thuật nghiêm ngặt nhất.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={700} duration={1000}>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-between font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-primary text-primary-foreground hover:brightness-105 active:scale-[0.98] shadow-button h-14 pl-8 pr-3 rounded-full gap-8 group"
              >
                <span className="tracking-wide">Xem dự án tiêu biểu</span>
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <MoveUpRight className="h-4 w-4 text-primary-foreground" />
                </div>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-between font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-border bg-card/65 backdrop-blur-md text-foreground hover:bg-muted/80 active:scale-[0.98] h-14 pl-8 pr-3 rounded-full gap-8 group"
              >
                <span className="tracking-wide">Nhận báo giá dự án</span>
                <div className="h-8 w-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4 text-foreground" />
                </div>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Asymmetric Structural Grid Section (Năng Lực & Projects) */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <ScrollReveal duration={1000} className="mb-20 text-left max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Dịch vụ & Dự án</span>
            <h2 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-6xl text-balance">
              Năng lực chế tác sản phẩm kỹ thuật số
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              Mỗi chi tiết đều được thiết kế tỉ mỉ để tạo ra trải nghiệm độc bản, kết hợp tinh tế giữa nghệ thuật số và cấu trúc kỹ thuật.
            </p>
          </ScrollReveal>

          {/* Blueprint Grid divided by thin 1px lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border/80">
            
            {/* Cell 1: Large Project Showcase (LegalDiff) */}
            <div className="md:col-span-2 border-r border-b border-border/80 p-8 md:p-12 flex flex-col justify-between group hover:bg-muted/20 transition-colors duration-500">
              <div className="space-y-4 text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-widest font-sans">01 / Dự án nổi bật</span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-foreground tracking-tight">
                  LegalDiff — Nền tảng phân tích hợp đồng tự động
                </h3>
                <p className="text-sm text-muted-foreground font-light max-w-xl">
                  Tối giản hóa quy trình pháp lý bằng giao diện trực quan cao cấp, hỗ trợ so sánh văn bản tức thời và chính xác tuyệt đối.
                </p>
              </div>
              <div className="relative aspect-[16/9] mt-8 rounded-xl overflow-hidden bg-background/50 border border-border/40">
                <img
                  src="/asset/img/project_legaldiff.jpg"
                  alt="LegalDiff Studio Workspace mockup"
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-102"
                />
              </div>
            </div>

            {/* Cell 2: Stats (No decorations, just pure typography) */}
            <div className="border-r border-b border-border/80 p-8 md:p-12 flex flex-col justify-between hover:bg-muted/20 transition-colors duration-500">
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-sans">02 / Thông số kỹ thuật</span>
              <div className="space-y-8 my-8 text-left">
                <div>
                  <span className="block font-display text-6xl font-light text-primary">50+</span>
                  <span className="text-xs text-muted-foreground tracking-wide font-sans">Dự án hoàn thành xuất sắc</span>
                </div>
                <div className="border-t border-border/60 pt-4">
                  <span className="block font-display text-6xl font-light text-secondary">98%</span>
                  <span className="text-xs text-muted-foreground tracking-wide font-sans">Khách hàng hài lòng đồng hành</span>
                </div>
                <div className="border-t border-border/60 pt-4">
                  <span className="block font-display text-6xl font-light text-foreground">AA</span>
                  <span className="text-xs text-muted-foreground tracking-wide font-sans">Tiêu chuẩn Web Accessibility</span>
                </div>
              </div>
            </div>

            {/* Cell 3: Secondary Project Showcase (CareMate) */}
            <div className="md:col-span-2 border-r border-b border-border/80 p-8 md:p-12 flex flex-col justify-between group hover:bg-muted/20 transition-colors duration-500">
              <div className="space-y-4 text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-widest font-sans">03 / Y tế kỹ thuật số</span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-foreground tracking-tight">
                  CareMate — Ứng dụng quản lý sức khỏe cá nhân
                </h3>
                <p className="text-sm text-muted-foreground font-light max-w-xl">
                  Ứng dụng hiển thị sinh trắc học trực quan, bảo mật chuẩn HIPAA nghiêm ngặt và tương tác thời gian thực mượt mà.
                </p>
              </div>
              <div className="relative aspect-[16/9] mt-8 rounded-xl overflow-hidden bg-background/50 border border-border/40">
                <img
                  src="/asset/img/project_caremate.jpg"
                  alt="CareMate medical dashboard mockup"
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-102"
                />
              </div>
            </div>

            {/* Cell 4: Tech & Performance Promise */}
            <div className="border-r border-b border-border/80 p-8 md:p-12 flex flex-col justify-between hover:bg-muted/20 transition-colors duration-500">
              <span className="text-xs font-bold text-primary uppercase tracking-widest font-sans">04 / Cam kết hiệu năng</span>
              <div className="space-y-4 my-8 text-left">
                <h4 className="font-display text-2xl font-light text-foreground tracking-tight">Tốc độ & Tiếp cận</h4>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Kiến trúc tối ưu hóa mang lại tốc độ tải trang dưới 1 giây, gia tăng đáng kể hiệu năng vận hành và xếp hạng tìm kiếm.
                </p>
              </div>
              <Link
                href="/services"
                className="text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1.5 hover:text-foreground transition-colors duration-300 font-sans mt-4"
              >
                Khám phá dịch vụ <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Philosophy & Values (Split Layout, No Cards, No Icons) */}
      <section className="py-24 md:py-32 border-t border-border/60 bg-muted/30 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* Left side: Sticky Content */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Triết lý thiết kế</span>
              <h2 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight text-balance">
                Cân bằng hoàn hảo giữa Mỹ thuật và Cấu trúc
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Chúng tôi thiết kế không gian số an tâm, tinh gọn và vững chắc, giúp tối ưu hóa giá trị lâu dài cho thương hiệu của doanh nghiệp.
              </p>
            </div>

            {/* Right side: Staggered values rows divided by lines */}
            <div className="lg:col-span-7 divide-y divide-border border-t border-b border-border">
              
              <ScrollReveal delay={100} duration={800}>
                <div className="py-8 flex gap-8 items-start text-left group">
                  <span className="font-display text-4xl italic text-primary/40 group-hover:text-primary transition-colors duration-300 font-serif w-12 shrink-0">
                    01
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      Sáng tạo dựa trên Dữ liệu
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Mọi ý tưởng thị giác đều xuất phát từ nghiên cứu thói quen hành vi người dùng, đảm bảo giao diện vừa mang tính thẩm mỹ cao vừa đạt hiệu quả chuyển đổi thực tế.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200} duration={800}>
                <div className="py-8 flex gap-8 items-start text-left group">
                  <span className="font-display text-4xl italic text-primary/40 group-hover:text-primary transition-colors duration-300 font-serif w-12 shrink-0">
                    02
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      Xuất sắc trong Chế tác
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Từ lưới bố cục, tỷ lệ khoảng trống, phong cách kiểu chữ cho đến các tương tác động, tất cả được trau chuốt tinh xảo tạo cảm giác cao cấp đồng điệu.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300} duration={800}>
                <div className="py-8 flex gap-8 items-start text-left group">
                  <span className="font-display text-4xl italic text-primary/40 group-hover:text-primary transition-colors duration-300 font-serif w-12 shrink-0">
                    03
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      Sự An Tâm làm Kim Chỉ Nam
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Mọi thành phẩm kỹ thuật số đều tuân thủ nghiêm ngặt các chỉ số chất lượng từ tính bảo mật thông tin, chuẩn SEO bền vững cho đến khả năng vận hành ổn định.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 md:py-32 border-t border-border bg-background relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,oklch(0.38_0.18_260_/_0.04)_0%,transparent_60%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10">
          <ScrollReveal duration={800}>
            <h2 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight text-balance">
              Sẵn sàng nâng tầm dự án số tiếp theo?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200} duration={800}>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-light leading-relaxed text-balance">
              Đồng hành cùng đội ngũ chuyên gia của chúng tôi để kiến tạo giải pháp thiết kế an tâm và tạo khác biệt vượt trội cho vị thế thương hiệu của bạn.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400} duration={800} className="flex justify-center pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-semibold bg-primary text-primary-foreground hover:opacity-95 active:scale-[0.98] transition-all h-16 px-10 rounded-full gap-3 group text-base shadow-button"
            >
              <span>Bắt đầu thảo luận ngay</span>
              <MoveUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
