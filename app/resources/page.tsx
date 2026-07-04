"use client";

import React, { useState } from "react";
import { Search, Download, BookOpen, FileText, Compass, X, Check, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const resourceTopics = [
  { id: "all", label: "Tất cả chủ đề" },
  { id: "trends", label: "Xu hướng thị trường" },
  { id: "technical", label: "Hướng dẫn kỹ thuật" },
  { id: "investment", label: "Cẩm nang đầu tư" }
];

const resourceFormats = [
  { id: "all", label: "Tất cả định dạng" },
  { id: "whitepaper", label: "Sách trắng (Whitepaper)" },
  { id: "ebook", label: "Ebook cẩm nang" },
  { id: "report", label: "Báo cáo nghiên cứu" }
];

const resources = [
  {
    id: "res-1",
    title: "Báo cáo Xu hướng Phát triển Đô thị thông minh Việt Nam 2026",
    topic: "trends",
    format: "report",
    summary: "Nghiên cứu chi tiết về sự chuyển dịch cơ cấu hạ tầng số, ứng dụng IoT và xu hướng đầu tư đô thị thông minh chuẩn sinh thái tại Đông Nam Á.",
    details: "Tài liệu dài 85 trang cung cấp dữ liệu phân tích độc quyền từ ban cố vấn chuyên gia xây dựng của HopeRise, chỉ rõ các cơ hội và rủi ro chu kỳ đầu tư mới.",
    size: "4.8 MB",
    pages: "85 Trang",
    downloadCount: "1,240+"
  },
  {
    id: "res-2",
    title: "Sách trắng: Vật liệu Xanh & Tiêu chuẩn LEED Gold trong kiến trúc hiện đại",
    topic: "technical",
    format: "whitepaper",
    summary: "Hướng dẫn thực thi chi tiết các nhóm vật liệu xây dựng thân thiện, tối ưu chỉ số tiết kiệm năng lượng đạt chuẩn vàng của Hội đồng Xây dựng Xanh Hoa Kỳ.",
    details: "Tài liệu kỹ thuật tổng hợp quy chuẩn ứng dụng vật liệu kính Low-E, bê tông sinh thái và các giải pháp cách nhiệt tối ưu giúp giảm tải điện năng.",
    size: "3.2 MB",
    pages: "42 Trang",
    downloadCount: "850+"
  },
  {
    id: "res-3",
    title: "Cẩm nang Pháp lý Bất động sản và Quy hoạch 1/500 cho nhà đầu tư",
    topic: "investment",
    format: "ebook",
    summary: "Hướng dẫn từng bước phân tích hồ sơ pháp lý sạch, tra cứu quy hoạch chi tiết tỷ lệ 1/500 và các quy định an toàn bảo lãnh tiến độ ngân hàng.",
    details: "Ebook cẩm nang cung cấp cái nhìn thực tế và các lưu ý pháp lý theo Luật Nhà ở và Luật Kinh doanh Bất động sản mới nhất.",
    size: "2.1 MB",
    pages: "30 Trang",
    downloadCount: "2,150+"
  }
];

export default function ResourcesPage() {
  const [activeTopic, setActiveTopic] = useState("all");
  const [activeFormat, setActiveFormat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Gated download states
  const [selectedRes, setSelectedRes] = useState<typeof resources[0] | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [formErrors, setFormErrors] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredResources = resources.filter((res) => {
    const matchesTopic = activeTopic === "all" || res.topic === activeTopic;
    const matchesFormat = activeFormat === "all" || res.format === activeFormat;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesFormat && matchesSearch;
  });

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerEmail.trim()) {
      setFormErrors("Vui lòng điền đầy đủ họ tên và email doanh nghiệp.");
      return;
    }
    if (!customerEmail.includes("@") || !customerEmail.includes(".")) {
      setFormErrors("Email không đúng định dạng.");
      return;
    }

    setFormErrors(null);
    setIsSuccess(true);
    setTimeout(() => {
      // Simulate download initiation
      alert(`Đang khởi động tải xuống tệp: ${selectedRes?.title}.pdf`);
      // Reset
      setSelectedRes(null);
      setCustomerName("");
      setCustomerEmail("");
      setIsSuccess(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col flex-1 w-full bg-background relative">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Thư Viện Tài Nguyên & Tri Thức Chuyên Ngành</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Thư viện tài nguyên nghiên cứu
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Cổng thông tin tri thức cung cấp sách trắng, báo cáo phân tích xu hướng thị trường và cẩm nang kỹ thuật độc quyền do đội ngũ chuyên gia nghiên cứu.
          </p>
        </div>
      </section>

      {/* Main Library Dashboard */}
      <section className="py-20 lg:py-28 mx-auto max-w-7xl px-6 lg:px-8 w-full space-y-12">
        {/* Search Bar & Filters */}
        <div className="bg-muted/30 border border-border/60 p-6 rounded-2xl space-y-6">
          {/* Search input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Tìm kiếm tài liệu, sách trắng, báo cáo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-full pl-12 pr-6 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary shadow-sm"
            />
          </div>

          {/* Filters Grid */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center pt-2 border-t border-border/60">
            {/* Topic Filters */}
            <div className="flex flex-wrap gap-1.5">
              {resourceTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopic(topic.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300",
                    activeTopic === topic.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border/60 hover:bg-muted text-muted-foreground"
                  )}
                >
                  {topic.label}
                </button>
              ))}
            </div>

            {/* Format Filters */}
            <div className="flex flex-wrap gap-1.5">
              {resourceFormats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => setActiveFormat(format.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300",
                    activeFormat === format.id
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : "bg-background border-border/60 hover:bg-muted text-muted-foreground"
                  )}
                >
                  {format.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid (Double-Bezel Bento Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.length > 0 ? (
            filteredResources.map((res) => (
              <div
                key={res.id}
                className="bg-muted/50 border border-border p-2 rounded-2xl flex flex-col justify-between hover:border-primary/20 transition-colors duration-300"
              >
                <div className="bg-card border border-border/40 p-6 rounded-xl shadow-card-subtle flex flex-col justify-between h-[380px] relative">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center text-primary border border-primary/5">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-secondary uppercase bg-accent px-2 py-0.5 rounded-full">
                        {res.format}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-bold text-foreground line-clamp-2 leading-snug">
                        {res.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-4 leading-relaxed">
                        {res.summary}
                      </p>
                    </div>
                  </div>

                  {/* Footer actions inside card */}
                  <div className="pt-4 border-t border-border/60 flex justify-between items-center text-xs">
                    <div className="text-[10px] text-muted-foreground">
                      <span>Tải về: {res.downloadCount} lượt</span>
                    </div>
                    
                    <button
                      onClick={() => {
                        setSelectedRes(res);
                        setFormErrors(null);
                        setIsSuccess(false);
                      }}
                      className="inline-flex items-center gap-1.5 font-bold text-primary hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Tải PDF ({res.size}) <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-sm text-muted-foreground">
              Không tìm thấy tài nguyên nào phù hợp với bộ lọc tìm kiếm hiện tại.
            </div>
          )}
        </div>
      </section>

      {/* Gated Registration Dialog for Downloads */}
      {selectedRes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-card w-full max-w-md rounded-2xl border border-border p-2 shadow-2xl relative animate-scale-up">
            <div className="bg-background border border-border/40 p-6 rounded-xl space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-secondary tracking-widest flex items-center gap-1">
                    <Lock className="h-3.5 w-3.5" /> Thư viện tài nguyên bảo mật
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground leading-snug">Đăng ký tải tài nguyên miễn phí</h3>
                </div>
                <button
                  onClick={() => setSelectedRes(null)}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form fields */}
              {!isSuccess ? (
                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <div className="p-3.5 bg-accent/40 border border-primary/10 rounded-xl space-y-1">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest block">Tài liệu chuẩn bị tải:</span>
                    <p className="text-xs text-foreground font-semibold leading-normal">{selectedRes.title}</p>
                    <span className="text-[10px] text-muted-foreground block pt-1">Quy mô: {selectedRes.pages} • Dung lượng: {selectedRes.size}</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">Họ và tên *</label>
                    <input
                      type="text"
                      placeholder="Họ và tên của bạn"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">Email doanh nghiệp *</label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  {formErrors && (
                    <p className="text-xs text-secondary font-semibold bg-secondary/5 p-3 rounded-lg border border-secondary/10">
                      {formErrors}
                    </p>
                  )}

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRes(null)}
                      className="flex-1 h-11 rounded-full border border-border bg-card text-foreground hover:bg-muted text-xs font-bold transition-all"
                    >
                      Hủy bỏ
                    </button>
                    <button
                      type="submit"
                      className="flex-1 h-11 rounded-full bg-primary text-primary-foreground hover:opacity-90 text-xs font-bold transition-all"
                    >
                      Đăng ký & Tải PDF
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-[#E9EFE9] border border-primary/10 text-primary flex items-center justify-center mx-auto">
                    <Check className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">Đăng ký thành công</p>
                    <p className="text-xs text-muted-foreground">Tệp PDF đang được chuẩn bị để khởi động tải xuống...</p>
                  </div>
                </div>
              )}

              {/* Policy footer */}
              <div className="pt-4 border-t border-border/60 text-center">
                <span className="text-[10px] text-muted-foreground leading-normal flex justify-center items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                  Tuân thủ bảo mật thông tin theo Nghị định 13/2023/NĐ-CP
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
