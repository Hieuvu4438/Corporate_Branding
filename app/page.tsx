import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/60 px-3.5 py-1.5 text-sm font-semibold text-secondary ring-1 ring-border">
                <Star className="h-4 w-4 fill-secondary" />
                <span>Nâng Tầm Nhận Diện Số</span>
              </div>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance leading-[1.1]">
                Thiết kế trải nghiệm số{" "}
                <span className="text-primary">mang lại sự an tâm</span> cho khách hàng
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance">
                Chúng tôi đồng hành cùng các doanh nghiệp y tế và công nghệ để xây dựng những sản phẩm số đẳng cấp, dễ tiếp cận, đáp ứng các tiêu chuẩn kỹ thuật nghiêm ngặt nhất.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-primary text-primary-foreground hover:opacity-90 active:scale-95 shadow-button h-14 px-8 text-lg rounded-full gap-2 text-base"
                >
                  Xem dự án tiêu biểu <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-border bg-card text-foreground hover:bg-muted active:scale-95 h-14 px-8 text-lg rounded-full text-base"
                >
                  Nhận báo giá dự án
                </Link>
              </div>
            </div>

            {/* Hero Visual Mockup */}
            <div className="lg:col-span-5 relative w-full aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative w-full max-w-md p-8 bg-card border border-border rounded-2xl shadow-card-subtle flex flex-col space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="h-4 w-4 rounded-full bg-primary" />
                  <span className="h-4 w-4 rounded-full bg-secondary" />
                  <span className="h-4 w-4 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
                <div className="pt-4 border-t border-border flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-secondary font-bold text-xs">HR</span>
                    <span className="text-xs text-muted-foreground">HopeRise Metrics</span>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-accent/60 px-2.5 py-1 rounded-full">+98.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Core Values */}
      <section className="bg-muted/50 py-20 lg:py-28 border-y border-border/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Triết lý hoạt động của chúng tôi
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Mỗi sản phẩm thiết kế tại HopeRise là sự cân bằng tuyệt đối giữa yếu tố sáng tạo nghệ thuật và sự chuẩn xác kỹ thuật để mang lại cảm giác &quot;an tâm&quot; cao nhất cho đối tác.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value card 1 */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-card-subtle flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-secondary mb-2">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Sáng tạo có định hướng</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chúng tôi không sáng tạo ngẫu hứng. Mọi ý tưởng thiết kế đều dựa trên dữ liệu người dùng thực tế và mục tiêu cụ thể của thương hiệu.
              </p>
            </div>

            {/* Value card 2 */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-card-subtle flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Xuất sắc từng chi tiết</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Từ grid layout, typography cho đến những micro-interaction nhỏ nhất, tất cả đều được trau chuốt tỉ mỉ để đạt sự hoàn hảo cao nhất.
              </p>
            </div>

            {/* Value card 3 */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-card-subtle flex flex-col items-center text-center space-y-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-secondary mb-2">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Hợp tác tin cậy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chúng tôi coi khách hàng là người đồng hành. Mọi quy trình công việc đều minh bạch, rõ ràng và đề cao tinh thần trách nhiệm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Agency Stats Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Con số định hình độ tin cậy của thương hiệu
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Với hơn nhiều năm cống hiến xây dựng hạ tầng nhận diện thương hiệu số, chúng tôi hân hạnh đồng hành cùng các đơn vị khởi nghiệp y tế và công nghệ hàng đầu khu vực.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-muted p-8 rounded-2xl border border-border/80 flex flex-col justify-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-primary">50+</span>
                <span className="text-sm text-muted-foreground mt-2">Dự án hoàn thành</span>
              </div>
              <div className="bg-muted p-8 rounded-2xl border border-border/80 flex flex-col justify-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-secondary">98%</span>
                <span className="text-sm text-muted-foreground mt-2">Khách hàng hài lòng</span>
              </div>
              <div className="bg-muted p-8 rounded-2xl border border-border/80 flex flex-col justify-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-secondary">15+</span>
                <span className="text-sm text-muted-foreground mt-2">Đối tác y tế số</span>
              </div>
              <div className="bg-muted p-8 rounded-2xl border border-border/80 flex flex-col justify-center">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-primary">AA</span>
                <span className="text-sm text-muted-foreground mt-2">Đạt chuẩn Accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="bg-accent/30 py-20 lg:py-24 border-t border-border/80">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance leading-[1.2]">
            Sẵn sàng nâng tầm dự án số tiếp theo của bạn?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Hãy liên hệ với chúng tôi hôm nay để được tư vấn thiết kế, lập lộ trình xây dựng và nhận ước lượng báo giá chi tiết trong vòng 24 giờ.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-primary text-primary-foreground hover:opacity-90 active:scale-95 shadow-button h-14 px-8 text-lg rounded-full gap-2 text-base"
            >
              Bắt đầu thảo luận ngay <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
