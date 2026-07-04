import { Laptop, Phone, Cpu, Paintbrush, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const services: ServiceItem[] = [
  {
    icon: <Laptop className="h-6 w-6 text-primary" />,
    title: "Phát triển Web & Ứng dụng Web",
    description: "Xây dựng các hệ thống web tối ưu tốc độ tải trang, tương thích thiết bị di động và có kiến trúc dữ liệu vững chắc.",
    points: [
      "Kiến trúc React / Next.js tối ưu SEO",
      "Tải trang dưới 1.5s trên thiết bị di động",
      "Bảo mật dữ liệu chuẩn mã hóa SSL/TLS",
      "Hệ thống CMS quản trị nội dung trực quan",
    ],
  },
  {
    icon: <Phone className="h-6 w-6 text-secondary" />,
    title: "Phát triển Ứng dụng Di động",
    description: "Thiết kế và lập trình các ứng dụng native iOS & Android (ví dụ như sản phẩm chăm sóc sức khỏe CareMate).",
    points: [
      "Ứng dụng Cross-Platform React Native / Flutter",
      "Đồng bộ hóa dữ liệu thời gian thực",
      "Tích hợp cảnh báo & Notification đẩy tự động",
      "Hỗ trợ chế độ hoạt động offline không cần mạng",
    ],
  },
  {
    icon: <Cpu className="h-6 w-6 text-secondary" />,
    title: "Phần mềm Tự động hóa Quy trình",
    description: "Xây dựng các công cụ chuyên dụng tự động hóa luồng làm việc phức tạp (như ứng dụng phân tích pháp lý LegalDiff).",
    points: [
      "Thuật toán so sánh phiên bản tài liệu tự động",
      "Phân tích dữ liệu văn bản lớn bằng AI",
      "Tích hợp API kết nối hệ thống sẵn có",
      "Dashboard thống kê dữ liệu trực quan",
    ],
  },
  {
    icon: <Paintbrush className="h-6 w-6 text-primary" />,
    title: "Thiết kế Hệ thống UI/UX & Nhận diện",
    description: "Thiết lập hệ thống thiết kế đồng bộ (Design System), tối ưu trải nghiệm và kiểm thử khả năng tiếp cận chuẩn WCAG AA.",
    points: [
      "Nghiên cứu hành vi và xây dựng User Persona",
      "Thiết kế giao diện High-Fidelity Figma",
      "Thiết lập Design Tokens đồng bộ mã code",
      "Kiểm toán khả năng tiếp cận người khuyết tật (A11y)",
    ],
  },
];

export default function Capabilities() {
  return (
    <div className="flex flex-col flex-1 w-full py-16 lg:py-24 space-y-16">
      {/* 1. Header Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
          Dịch vụ của chúng tôi
        </span>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl text-balance">
          Năng lực cốt lõi mang lại sự an tâm
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
          Chúng tôi mang lại giải pháp công nghệ toàn diện từ thiết kế ý tưởng ban đầu đến lúc triển khai vận hành thực tế.
        </p>
      </section>

      {/* 2. Capabilities Cards Bento Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <Card key={idx} className="border border-border bg-card rounded-2xl shadow-card-subtle flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-accent/60 flex items-center justify-center">
                    {svc.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {svc.description}
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-border/80">
                  {svc.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2.5 text-sm text-foreground/90">
                      <Check className="h-4.5 w-4.5 shrink-0 text-secondary mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
