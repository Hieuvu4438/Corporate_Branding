import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, Award, Star, MoveUpRight, Sparkles, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-x-hidden bg-background text-foreground">
      {/* 1. Attention: Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden py-32">
        {/* Background Image with Filter */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/asset/img/hero-bg.jpg"
            alt="Warm Plaster Creative Background"
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

      {/* 2. Interest: Asymmetric Bento Grid (Showcase & Details) */}
      <section className="py-32 md:py-48 border-t border-border/50 relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal duration={1000} className="mb-20 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-6xl text-balance">
              Năng lực chế tác sản phẩm kỹ thuật số
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Mỗi chi tiết đều được thiết kế tỉ mỉ để tạo ra trải nghiệm độc bản, kết hợp tinh tế giữa nghệ thuật số và cấu trúc kỹ thuật.
            </p>
          </ScrollReveal>

          {/* Gapless Bento Grid */}
          <div className="grid grid-cols-12 gap-8 grid-flow-dense">
            {/* Bento Card 1: Large Showcase (LegalDiff) */}
            <div className="col-span-12 lg:col-span-8 bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md group hover:border-primary/20 transition-colors duration-500">
              <div className="bg-card border border-white/40 p-8 rounded-[18px] shadow-card-subtle backdrop-blur-lg flex flex-col justify-between h-full space-y-8">
                <div className="space-y-4 text-left">
                  <span className="text-[11px] font-bold text-secondary uppercase tracking-widest font-sans">Dự án nổi bật</span>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-foreground tracking-tight">
                    LegalDiff — Nền tảng phân tích hợp đồng tự động
                  </h3>
                  <p className="text-sm text-muted-foreground font-light max-w-xl">
                    Đơn giản hóa quy trình pháp lý phức tạp bằng giao diện tối giản, trực quan, hỗ trợ đội ngũ pháp chế so sánh văn bản tức thời và chính xác tuyệt đối.
                  </p>
                </div>
                <div className="relative aspect-[16/9] rounded-[12px] overflow-hidden bg-background/50 border border-border/30">
                  <img
                    src="/asset/img/vase.jpg"
                    alt="LegalDiff Mockup"
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-102 filter grayscale mix-blend-luminosity brightness-95 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:brightness-100"
                  />
                </div>
              </div>
            </div>

            {/* Bento Card 2: Small Stats (Double-Bezel) */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md group hover:border-secondary/20 transition-colors duration-500">
              <div className="bg-card border border-white/40 p-8 rounded-[18px] shadow-card-subtle backdrop-blur-lg flex flex-col justify-between h-full text-left space-y-8">
                <span className="text-[11px] font-bold text-primary uppercase tracking-widest font-sans">Thông số uy tín</span>
                <div className="space-y-6">
                  <div className="border-b border-border/40 pb-4">
                    <span className="block font-display text-5xl font-light text-primary">50+</span>
                    <span className="text-xs text-muted-foreground tracking-wide font-sans">Dự án hoàn thành xuất sắc</span>
                  </div>
                  <div className="border-b border-border/40 pb-4">
                    <span className="block font-display text-5xl font-light text-secondary">98%</span>
                    <span className="text-xs text-muted-foreground tracking-wide font-sans">Khách hàng hài lòng và đồng hành</span>
                  </div>
                  <div>
                    <span className="block font-display text-5xl font-light text-foreground">AA</span>
                    <span className="text-xs text-muted-foreground tracking-wide font-sans">Tiêu chuẩn tiếp cận Web Accessibility</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Creative Quote / Highlight */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md group hover:border-primary/20 transition-colors duration-500">
              <div className="bg-card border border-white/40 p-8 rounded-[18px] shadow-card-subtle backdrop-blur-lg flex flex-col justify-between h-full text-left space-y-12">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="space-y-4">
                  <h4 className="font-display text-xl font-light text-foreground tracking-tight">Tốc độ & Hiệu năng</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Kiến trúc Headless & Composable mang lại tốc độ tải trang dưới 1 giây, gia tăng đáng kể tỷ lệ chuyển đổi và trải nghiệm lướt mượt mà.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-1.5 hover:text-foreground transition-colors duration-300 font-sans"
                >
                  Khám phá giải pháp <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 4: Second Showcase (CareMate) */}
            <div className="col-span-12 lg:col-span-8 bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md group hover:border-secondary/20 transition-colors duration-500">
              <div className="bg-card border border-white/40 p-8 rounded-[18px] shadow-card-subtle backdrop-blur-lg flex flex-col justify-between h-full space-y-8">
                <div className="space-y-4 text-left">
                  <span className="text-[11px] font-bold text-secondary uppercase tracking-widest font-sans">Dự án y tế số</span>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-foreground tracking-tight">
                    CareMate — Ứng dụng theo dõi sức khỏe thông minh
                  </h3>
                  <p className="text-sm text-muted-foreground font-light max-w-xl">
                    Chăm sóc sức khỏe kỷ nguyên số bằng các biểu đồ trực quan hóa dữ liệu y tế, tương tác thời gian thực và đạt tiêu chuẩn bảo mật dữ liệu y tế HIPAA nghiêm ngặt.
                  </p>
                </div>
                <div className="relative aspect-[16/9] rounded-[12px] overflow-hidden bg-background/50 border border-border/30">
                  <img
                    src="/asset/img/candle.jpg"
                    alt="CareMate Mockup"
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-102 filter grayscale mix-blend-luminosity brightness-95 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:brightness-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Desire: Pinned-style Asymmetric Philosophy & Values */}
      <section className="py-32 md:py-48 border-t border-border/50 bg-muted/10 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            {/* Left side: Sticky Content */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left">
              <span className="text-[11px] font-bold text-primary uppercase tracking-widest font-sans">Triết lý của chúng tôi</span>
              <h2 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight text-balance">
                Cân bằng hoàn hảo giữa Mỹ thuật và Cấu trúc
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Chúng tôi không chỉ thiết kế giao diện; chúng tôi điêu khắc nên không gian trải nghiệm kỹ thuật số an tâm, giúp tối ưu hóa giá trị lâu dài cho thương hiệu của doanh nghiệp.
              </p>
            </div>

            {/* Right side: Staggered values cards list with ScrollReveal */}
            <div className="lg:col-span-7 space-y-12">
              <ScrollReveal delay={100} duration={800}>
                <div className="bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md group hover:border-primary/20 transition-colors duration-500">
                  <div className="bg-card border border-white/40 p-8 rounded-[18px] shadow-card-subtle backdrop-blur-lg flex gap-6 text-left items-start">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                      <Compass className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-semibold text-foreground tracking-tight">Sáng tạo dựa trên Dữ liệu</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Mọi ý tưởng thị giác đều xuất phát từ nghiên cứu thói quen hành vi người dùng, đảm bảo giao diện vừa mang tính thẩm mỹ cao vừa đạt hiệu quả chuyển đổi thực tế.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200} duration={800}>
                <div className="bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md group hover:border-secondary/20 transition-colors duration-500">
                  <div className="bg-card border border-white/40 p-8 rounded-[18px] shadow-card-subtle backdrop-blur-lg flex gap-6 text-left items-start">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-semibold text-foreground tracking-tight">Xuất sắc trong Chế tác</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Từ lưới bố cục, tỷ lệ khoảng trống, phong cách kiểu chữ cho đến các tương tác động, tất cả được trau chuốt tinh xảo tạo cảm giác cao cấp đồng điệu.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300} duration={800}>
                <div className="bg-muted border border-border p-2 rounded-[24px] backdrop-blur-md group hover:border-primary/20 transition-colors duration-500">
                  <div className="bg-card border border-white/40 p-8 rounded-[18px] shadow-card-subtle backdrop-blur-lg flex gap-6 text-left items-start">
                    <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                      <ShieldAlert className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-semibold text-foreground tracking-tight">Sự An Tâm làm Kim Chỉ Nam</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Mọi thành phẩm kỹ thuật số đều tuân thủ nghiêm ngặt các chỉ số chất lượng từ tính bảo mật thông tin, chuẩn SEO bền vững cho đến khả năng vận hành ổn định.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action: Bottom CTA Section */}
      <section className="py-32 md:py-48 border-t border-border/50 relative overflow-hidden bg-background">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,oklch(0.48_0.11_35_/_0.06)_0%,transparent_60%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10">
          <ScrollReveal duration={800}>
            <h2 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight text-balance">
              Sẵn sàng nâng tầm dự án số tiếp theo?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200} duration={800}>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed text-balance">
              Đồng hành cùng đội ngũ chuyên gia của chúng tôi để kiến tạo giải pháp thiết kế an tâm và tạo khác biệt vượt trội cho vị thế thương hiệu của bạn.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400} duration={800} className="flex justify-center pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-primary text-primary-foreground hover:brightness-105 active:scale-95 shadow-button h-16 px-10 rounded-full gap-4 group text-base"
            >
              <span>Bắt đầu thảo luận ngay</span>
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <MoveUpRight className="h-4 w-4 text-primary-foreground" />
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
