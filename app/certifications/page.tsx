"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, ChevronRight, Download, X, Eye, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const filterCategories = [
  { id: "all", label: "Tất cả tiêu chuẩn" },
  { id: "quality", label: "Chất lượng & Quy trình" },
  { id: "green", label: "Công trình Xanh" },
  { id: "safety", label: "An toàn & Bảo mật" }
];

const credentials = [
  {
    id: "cert-1",
    name: "Hệ thống quản lý chất lượng ISO 9001:2015",
    category: "quality",
    authority: "Tổ chức Chứng nhận Quốc tế SGS",
    date: "Đăng ký lần đầu: 2024 (Hạn dùng: 2027)",
    code: "VN24/859382",
    details: "Hệ thống quản lý quy chuẩn xây dựng, thiết kế và phát triển dự án công nghệ đáp ứng toàn diện chất lượng kiểm duyệt khắt khe quốc tế.",
    parameters: [
      "Quản trị quy trình khép kín",
      "Hệ thống đo lường rủi ro vận hành",
      "Chu kỳ cải tiến quy trình liên tục"
    ]
  },
  {
    id: "cert-2",
    name: "Chứng nhận công trình xanh LEED Gold (v4)",
    category: "green",
    authority: "Hội đồng Xây dựng Xanh Hoa Kỳ (USGBC)",
    date: "Đạt chuẩn: Tháng 03/2026",
    code: "US-LEED-2026-948",
    details: "Xác thực khả năng tối ưu hóa sử dụng năng lượng, nước, quản lý chất thải bền vững và duy trì chất lượng không khí trong lành vượt trội.",
    parameters: [
      "Giảm tiêu thụ năng lượng tối thiểu 25%",
      "Tái sử dụng 50% lượng nước sinh hoạt hiện hữu",
      "Sử dụng vật liệu xây dựng thân thiện tự nhiên"
    ]
  },
  {
    id: "cert-3",
    name: "Chứng chỉ Công trình Xanh EDGE Advanced",
    category: "green",
    authority: "Tổ chức Tài chính Quốc tế (IFC - World Bank Group)",
    date: "Đạt chuẩn: Tháng 05/2026",
    code: "EDGE-IFC-VN-2026",
    details: "Giải pháp công nghệ xanh tiên tiến giúp tiết kiệm năng lượng, nước và năng lượng tự thân của vật liệu vượt mức 40%.",
    parameters: [
      "Tiết kiệm năng lượng: 42%",
      "Tiết kiệm nước sinh hoạt: 38%",
      "Giảm năng lượng tự thân vật liệu: 45%"
    ]
  },
  {
    id: "cert-4",
    name: "Giấy phép Thẩm duyệt & Nghiệm thu PCCC số 295/GP-PCCC",
    category: "safety",
    authority: "Cục Cảnh sát PCCC và CHCN",
    date: "Nghiệm thu chính thức: 11/2025",
    code: "PCCC-HN-29528",
    details: "Báo cáo nghiệm thu thẩm duyệt toàn diện hệ thống báo cháy tự động, cửa chống cháy, vòi phun nước áp lực cao và đường thoát hiểm khẩn cấp.",
    parameters: [
      "Hệ thống Sprinkler tự động bao phủ 100%",
      "Cửa ngăn cháy chịu nhiệt chuẩn EI 90 phút",
      "Lối thoát hiểm độc lập có màng ngăn khói"
    ]
  },
  {
    id: "cert-5",
    name: "Hệ thống An toàn thông tin ISO/IEC 27001:2022",
    category: "safety",
    authority: "Tổ chức Đánh giá độc lập British Standards Institution (BSI)",
    date: "Đạt chuẩn: Tháng 02/2026",
    code: "IS-784920-BSI",
    details: "Bảo đảm quy trình an toàn bảo mật thông tin tối đa cho dữ liệu khách hàng theo Nghị định 13/2023/NĐ-CP của Chính phủ.",
    parameters: [
      "Mã hóa dữ liệu đầu cuối SHA-256",
      "Quy trình kiểm soát truy cập phân quyền chặt chẽ",
      "Kế hoạch khắc phục sự cố khẩn cấp định kỳ"
    ]
  }
];

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedCert, setSelectedCert] = useState<typeof credentials[0] | null>(null);

  const filteredCerts = credentials.filter((cert) => {
    return activeCategory === "all" || cert.category === activeCategory;
  });

  return (
    <div className="flex flex-col flex-1 w-full bg-background relative">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Hồ Sơ Độc Lập & Uy Tín Thương Hiệu</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Chứng nhận, Giải thưởng & Tiêu chuẩn
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Tổng hợp các minh chứng khách quan được chứng thực bởi các tổ chức kiểm duyệt hàng đầu thế giới về chất lượng công trình và an toàn bảo mật.
          </p>
        </div>
      </section>

      {/* Accreditations Gallery Section */}
      <section className="py-20 lg:py-28 mx-auto max-w-7xl px-6 lg:px-8 w-full space-y-12">
        {/* Category Filters */}
        <div className="flex justify-center border-b border-border/60 pb-6">
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-muted/50 border border-border p-2 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 group cursor-pointer"
            >
              <div className="bg-card border border-border/40 p-6 rounded-xl shadow-card-subtle flex flex-col justify-between h-[340px] relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-primary border border-primary/10">
                      <Award className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground font-bold">Mã số: {cert.code}</span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{cert.details}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex justify-between items-center text-xs">
                  <div className="text-[10px] text-muted-foreground font-medium">
                    <span>Cấp bởi: {cert.authority}</span>
                  </div>
                  <span className="text-secondary font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Chi tiết <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B2B Download Credentials Row */}
      <section className="bg-muted/30 py-16 border-y border-border/80 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6">
          <h3 className="font-display text-2xl font-bold text-foreground">Hồ sơ năng lực B2B</h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Tải xuống tập hồ sơ pháp lý, các quyết định quy hoạch và hệ thống chứng chỉ kỹ thuật đã xác thực chữ ký số phục vụ hoạt động đấu thầu doanh nghiệp.
          </p>
          <div className="pt-2">
            <button
              onClick={() => alert("Hồ sơ năng lực B2B PDF sẽ được gửi qua email. Vui lòng đăng ký tại trang đặt lịch.")}
              className="inline-flex items-center justify-between font-bold transition-all duration-300 bg-primary text-primary-foreground hover:opacity-95 active:scale-[0.98] shadow-button h-12 pl-6 pr-3 text-sm rounded-full gap-4 group cursor-pointer"
            >
              <span>Tải Credentials Pack (12.4 MB)</span>
              <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:translate-y-0.5">
                <Download className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Badge Verification Inspector Dialog */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-card w-full max-w-lg rounded-2xl border border-border p-2 shadow-2xl relative animate-scale-up">
            <div className="bg-background border border-border/40 p-6 rounded-xl space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-secondary tracking-widest flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Tiêu chuẩn đã thẩm duyệt
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground leading-snug">{selectedCert.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Certificate Details */}
              <div className="space-y-4 text-xs text-muted-foreground">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border/60">
                  <div>
                    <span className="font-bold text-foreground block">Cơ quan cấp chứng nhận:</span>
                    <span>{selectedCert.authority}</span>
                  </div>
                  <div>
                    <span className="font-bold text-foreground block">Mã hiệu chứng nhận:</span>
                    <span className="font-mono">{selectedCert.code}</span>
                  </div>
                </div>

                <div className="pb-4 border-b border-border/60">
                  <span className="font-bold text-foreground block mb-1">Mô tả quy chuẩn:</span>
                  <p className="leading-relaxed">{selectedCert.details}</p>
                </div>

                {/* Parameters lists */}
                <div className="space-y-2">
                  <span className="font-bold text-foreground block">Các chỉ số đáp ứng thực tế:</span>
                  <div className="space-y-2">
                    {selectedCert.parameters.map((param, pIdx) => (
                      <div key={pIdx} className="flex gap-2 items-start text-xs">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{param}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-4 border-t border-border/60">
                <span className="text-[10px] text-muted-foreground font-mono">{selectedCert.date}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="h-10 px-4 rounded-full border border-border bg-card text-foreground hover:bg-muted text-xs font-bold transition-all"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
