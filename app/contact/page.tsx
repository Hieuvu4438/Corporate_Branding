import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 w-full py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Office info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Liên hệ chúng tôi
              </span>
              <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl text-balance leading-tight">
                Hãy bắt đầu hành trình <span className="text-primary">sáng tạo</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground text-balance">
                Dù bạn đang sở hữu một ý tưởng sơ khởi hay một dự án sẵn sàng vận hành, HopeRise luôn chào đón cơ hội hợp tác và đồng hành cùng sự phát triển của bạn.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-border/80">
              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="h-10 w-10 rounded-full bg-accent/60 flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Văn phòng chính</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed text-balance">
                    123 Đường Sáng Tạo, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5">
                <div className="h-10 w-10 rounded-full bg-accent/60 flex items-center justify-center text-secondary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Số điện thoại</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    +84 (0) 28 1234 5678
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="h-10 w-10 rounded-full bg-accent/60 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Địa chỉ email</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    contact@hoperise.agency
                  </p>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex items-start space-x-3.5">
                <div className="h-10 w-10 rounded-full bg-accent/60 flex items-center justify-center text-secondary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Giờ làm việc</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Thứ 2 - Thứ 6: 09:00 - 18:00 <br />
                    Thứ 7, Chủ Nhật: Nghỉ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
