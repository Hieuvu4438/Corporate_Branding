import { Award, ShieldCheck, Heart, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-secondary" />,
    title: "Sự an tâm tuyệt đối",
    description: "Chúng tôi tuân thủ các nguyên tắc thiết kế tối ưu, cấu trúc bảo mật thông tin và khả năng vận hành chuẩn xác giúp giảm thiểu rủi ro vận hành.",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Chất lượng hoàn thiện",
    description: "Không bao giờ bàn giao sản phẩm dang dở. Mọi màn hình, mọi tính năng đều trải qua quy trình kiểm thử chất lượng gắt gao trước khi xuất xưởng.",
  },
  {
    icon: <Heart className="h-6 w-6 text-secondary" />,
    title: "Thấu cảm sâu sắc",
    description: "Chúng tôi đặt mình vào vị thế của người dùng cuối để thấu hiểu nỗi đau và thiết kế các giao diện đơn giản nhất có thể.",
  },
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Nguyễn Minh Khôi",
    role: "Co-Founder & Creative Director",
    bio: "Hơn 8 năm kinh nghiệm thiết kế giao diện trong lĩnh vực HealthTech, đam mê xây dựng hệ sinh thái số nhân văn.",
  },
  {
    name: "Trần Mai Phương",
    role: "Lead UI/UX Architect",
    bio: "Chuyên gia nghiên cứu hành vi người dùng, đảm bảo mọi luồng trải nghiệm đạt tỷ lệ chuyển đổi cao nhất.",
  },
  {
    name: "Phạm Hải Đăng",
    role: "Technical Lead Engineer",
    bio: "Chuyên gia phát triển ứng dụng React/Next.js tối ưu hiệu năng và kiến trúc bảo mật cấp doanh nghiệp.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col flex-1 w-full py-16 lg:py-24 space-y-20 lg:space-y-28">
      {/* 1. Brand Story */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Câu chuyện HopeRise
            </span>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl text-balance leading-tight">
              Giúp doanh nghiệp số mang lại <span className="text-primary">sự an tâm</span>
            </h1>
          </div>
          <div className="lg:col-span-7 text-base sm:text-lg text-muted-foreground space-y-6 leading-relaxed">
            <p>
              Được thành lập từ năm 2021, **HopeRise** đặt ra sứ mệnh phá vỡ rào cản giữa công nghệ phức tạp và trải nghiệm người dùng tự nhiên. Chúng tôi nhận thấy các giải pháp y tế và tài chính số thường gây bối rối cho người dùng vì các thủ tục rườm rà.
            </p>
            <p>
              Đó là lý do chúng tôi tập trung xây dựng năng lực thiết kế thương hiệu và phát triển ứng dụng dựa trên sự thấu cảm sâu sắc. Chúng tôi thiết lập các tiêu chuẩn cao nhất về khả năng truy cập (Accessibility đạt chuẩn WCAG AA), giúp các sản phẩm số trở nên trực quan, đáng tin cậy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Values Grid */}
      <section className="bg-muted/40 py-20 lg:py-24 border-y border-border/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Giá trị cốt lõi dẫn lối thành công
            </h2>
            <p className="text-base text-muted-foreground text-balance">
              Phương châm làm việc giúp đội ngũ thiết kế và kỹ sư của HopeRise đồng nhất suy nghĩ và hành động.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <Card key={idx} className="border border-border/80 rounded-2xl bg-card shadow-card-subtle">
                <CardContent className="p-8 space-y-4">
                  <div className="h-10 w-10 rounded-full bg-accent/60 flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Team Showcase */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Đội ngũ chuyên gia từ HopeRise
          </h2>
          <p className="text-base text-muted-foreground text-balance">
            Những con người nhiệt huyết cống hiến để hiện thực hóa ước mơ chuyển đổi số an tâm của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-muted/30 border border-border p-8 rounded-2xl flex flex-col space-y-4 items-start text-left">
              {/* Member placeholder image */}
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-secondary">
                <User className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider">{member.role}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/80 w-full">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
