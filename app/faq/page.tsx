import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Thời gian hoàn thành một dự án thiết kế thương hiệu là bao lâu?",
    answer: "Thông thường, một dự án thiết kế nhận diện thương hiệu số cơ bản kéo dài từ 4 đến 6 tuần. Đối với các dự án bao gồm cả phát triển Web App/Mobile App phức tạp như CareMate hay LegalDiff, thời gian bàn giao đầy đủ dao động từ 10 đến 16 tuần, bao gồm cả giai đoạn nghiên cứu UI/UX và lập trình phát triển.",
  },
  {
    question: "HopeRise áp dụng công nghệ gì cho việc lập trình phát triển ứng dụng?",
    answer: "Chúng tôi tập trung sử dụng các công nghệ hiện đại, có độ ổn định và bảo mật cao bao gồm React, Next.js (cho web), React Native và Flutter (cho ứng dụng di động), kết hợp các giải pháp Tailwind CSS, Shadcn UI và hệ cơ sở dữ liệu Postgres/MySQL chuẩn hóa nhằm tối ưu hiệu suất tải trang và tương thích đa nền tảng.",
  },
  {
    question: "Làm thế nào để đo lường độ thành công của một dự án UI/UX thiết kế?",
    answer: "Chúng tôi đo lường qua ba nhóm chỉ số cốt lõi: 1) Tốc độ phản hồi và tải trang của hệ thống ứng dụng; 2) Chỉ số thân thiện người dùng qua khả năng tiếp cận người khuyết tật (WCAG AA Accessibility Check); và 3) Tỷ lệ chuyển đổi biểu mẫu của khách hàng thông qua thiết kế phễu giao dịch tối ưu.",
  },
  {
    question: "Bàn giao dự án bao gồm những gì và có hỗ trợ sau bàn giao không?",
    answer: "HopeRise bàn giao đầy đủ file thiết kế Figma gốc (Design System, UI Components), mã nguồn lập trình sạch trên GitHub, tài liệu hướng dẫn vận hành chi tiết. Chúng tôi cung cấp chính sách hỗ trợ kỹ thuật và bảo hành sửa lỗi miễn phí trong vòng 12 tháng kể từ ngày chính thức bàn giao dự án.",
  },
];

export default function Faq() {
  return (
    <div className="flex flex-col flex-1 w-full py-16 lg:py-24 space-y-16">
      {/* Header Intro */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
          Hỏi đáp thường gặp
        </span>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl text-balance">
          Giải đáp thắc mắc của bạn
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
          Tìm hiểu thêm về quy trình làm việc, công nghệ phát triển ứng dụng và dịch vụ hỗ trợ của HopeRise.
        </p>
      </section>

      {/* Accordion List wrapper */}
      <section className="mx-auto max-w-3xl w-full px-6 lg:px-8">
        <div className="bg-card border border-border p-6 sm:p-10 rounded-2xl shadow-card-subtle">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
