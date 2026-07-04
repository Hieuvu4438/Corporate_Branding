import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-auto transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Philosophy */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                H
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                HopeRise
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs text-balance">
              Giải pháp xây dựng nhận diện thương hiệu và ứng dụng kỹ thuật số toàn diện, giúp doanh nghiệp tạo dựng niềm tin và sự hài lòng bền vững.
            </p>
          </div>

          {/* Nav Links Quicklist */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-primary transition-colors">
                  Năng lực cốt lõi
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Dự án tiêu biểu
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  Q&A / Hỏi đáp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Thông tin liên hệ
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-balance">123 Đường Sáng Tạo, Quận 1, TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 shrink-0 text-secondary" />
                <span>+84 (0) 28 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <span>contact@hoperise.agency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Custom Copyright Line */}
        <div className="mt-12 pt-8 border-t border-border/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Copyright &copy; 2026. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-primary fill-primary" /> for visual excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
