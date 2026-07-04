"use client";

import React, { useState } from "react";
import { Search, FileText, ExternalLink, ShieldCheck, HelpCircle, X, Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const documentCategories = [
  { id: "all", label: "Tất cả hồ sơ" },
  { id: "investment", label: "Chủ trương & Giao đất" },
  { id: "planning", label: "Quy hoạch 1/500" },
  { id: "construction", label: "Giấy phép & Nghiệm thu" }
];

const documents = [
  {
    id: "doc-1",
    name: "Quyết định Chấp thuận Chủ trương Đầu tư số 142/QĐ-UBND",
    category: "investment",
    date: "12/01/2025",
    authority: "Ủy ban Nhân dân Thành phố",
    size: "2.4 MB",
    status: "Đã phê duyệt",
    details: "Văn bản chính thức phê duyệt chủ trương triển khai dự án khu đô thị thông minh HopeRise, xác định ranh giới quy hoạch và chủ đầu tư chịu trách nhiệm thực thi."
  },
  {
    id: "doc-2",
    name: "Quyết định Giao đất và Thu tiền sử dụng đất số 852/QĐ-TNMT",
    category: "investment",
    date: "04/03/2025",
    authority: "Sở Tài nguyên và Môi trường",
    size: "4.1 MB",
    status: "Đã cấp quyết định",
    details: "Biên bản bàn giao đất thực địa, xác nhận hoàn thành nghĩa vụ tài chính thuế sử dụng đất của doanh nghiệp đối với ngân sách nhà nước."
  },
  {
    id: "doc-3",
    name: "Phê duyệt Bản vẽ Quy hoạch Chi tiết Tỷ lệ 1/500 số 1105/QD-SXD",
    category: "planning",
    date: "18/06/2025",
    authority: "Sở Xây dựng",
    size: "18.5 MB",
    status: "Đã phê duyệt bản vẽ",
    details: "Bản vẽ thiết kế quy hoạch chi tiết 1/500 chỉ rõ mật độ xây dựng, phân khu chức năng, hệ thống chỉ giới đường đỏ và chỉ giới xây dựng thực tế."
  },
  {
    id: "doc-4",
    name: "Giấy phép Xây dựng số 204/GPXD",
    category: "construction",
    date: "22/09/2025",
    authority: "Sở Xây dựng",
    size: "3.2 MB",
    status: "Đã cấp phép",
    details: "Giấy phép xây dựng chính thức cho phép khởi công phần móng và các kết cấu phần thân của tòa nhà hỗn hợp cao cấp."
  },
  {
    id: "doc-5",
    name: "Biên bản Nghiệm thu Hoàn thành Công trình Phần Móng số 12/NT-XD",
    category: "construction",
    date: "15/12/2025",
    authority: "Cục Giám định Nhà nước về chất lượng công trình xây dựng",
    size: "1.8 MB",
    status: "Đã nghiệm thu",
    details: "Văn bản kiểm duyệt nghiệm thu xác nhận kết cấu móng bê tông cốt thép đạt tiêu chuẩn chịu tải thiết kế, cho phép bắt đầu thi công các tầng tiếp theo."
  }
];

export default function LegalPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<typeof documents[0] | null>(null);

  const filteredDocuments = documents.filter((doc) => {
    const matchesCategory = activeCategory === "all" || doc.category === activeCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.authority.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col flex-1 w-full bg-background relative">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Tính Minh Bạch & Cam Kết Pháp Lý</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Hồ sơ pháp lý & Tuân thủ định danh
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Đảm bảo quyền lợi đầu tư bằng việc công khai minh bạch 100% hồ sơ quy hoạch, giấy phép xây dựng và báo cáo nghiệm thu theo đúng Luật Nhà ở.
          </p>
        </div>
      </section>

      {/* Main Compliance Directory */}
      <section className="py-20 lg:py-28 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Mortgage & Security Alert Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-muted/50 border border-border p-2 rounded-[24px]">
              <div className="bg-card border border-border/40 p-6 rounded-[18px] shadow-card-subtle space-y-6">
                <span className="text-xs uppercase font-bold tracking-wider text-secondary flex items-center gap-2">
                  <Lock className="h-4 w-4" /> Báo cáo Tình trạng sở hữu
                </span>
                
                <div className="space-y-4">
                  <div className="p-4 bg-accent/40 border border-amber-900/10 rounded-xl space-y-2">
                    <h4 className="text-sm font-bold text-foreground">Tình trạng thế chấp:</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Dự án hiện tại không nằm trong danh sách thế chấp tại các tổ chức tín dụng. Đảm bảo tính pháp lý sạch, sẵn sàng thực hiện thủ tục cấp giấy chứng nhận quyền sở hữu (sổ hồng) cho khách hàng khi bàn giao.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[10px] text-primary font-bold bg-[#E9EFE9] px-2 py-0.5 rounded mt-2">
                      <Check className="h-3 w-3" /> Đã kiểm duyệt độc lập
                    </div>
                  </div>

                  <div className="p-4 bg-accent/40 border border-amber-900/10 rounded-xl space-y-2">
                    <h4 className="text-sm font-bold text-foreground">Bảo lãnh ngân hàng:</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Tiến độ xây dựng và nghĩa vụ tài chính của dự án được bảo lãnh thanh toán đầy đủ bởi ngân hàng thương mại quốc gia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Search & Table Directory */}
          <div className="lg:col-span-8 space-y-8">
            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pb-4 border-b border-border/60">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {documentCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300",
                      activeCategory === cat.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Tìm tài liệu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-muted/40 border border-border rounded-full pl-10 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            {/* Document Roster */}
            <div className="space-y-4">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    className="p-4 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {doc.name}
                        </h4>
                        <div className="flex gap-4 text-[11px] text-muted-foreground font-medium">
                          <span>Cơ quan cấp: {doc.authority}</span>
                          <span>•</span>
                          <span>Ngày cấp: {doc.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden md:inline-flex bg-accent text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {doc.status}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-sm text-muted-foreground">
                  Không tìm thấy tài liệu phù hợp với bộ lọc hiện tại.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. In-Browser Document Previewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-card w-full max-w-2xl rounded-[24px] border border-border p-2 shadow-2xl relative animate-scale-up">
            <div className="bg-background border border-border/40 p-6 rounded-[18px] space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Xem tài liệu trực tiếp</span>
                  <h3 className="font-display text-2xl font-bold text-foreground leading-snug">{selectedDoc.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Document Mock View */}
              <div className="bg-muted/50 border border-border/60 rounded-xl p-8 aspect-[4/3] flex flex-col justify-center items-center text-center space-y-4">
                <FileText className="h-16 w-16 text-primary/40 animate-pulse" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">Trình đọc hồ sơ an toàn</p>
                  <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
                    {selectedDoc.details}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[10px] text-primary font-mono font-bold bg-[#E9EFE9] px-3 py-1 rounded-full border border-primary/10">
                  <ShieldCheck className="h-3.5 w-3.5" /> Chữ ký số mã hóa SHA-256 đã xác thực
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-muted-foreground">Kích thước tệp: {selectedDoc.size}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedDoc(null)}
                    className="h-10 px-4 rounded-full border border-border bg-card text-foreground hover:bg-muted text-xs font-bold transition-all"
                  >
                    Đóng
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Tính năng tải về hồ sơ PDF thật sẽ được hoàn thiện cùng backend.");
                    }}
                    className="h-10 px-5 rounded-full bg-primary text-primary-foreground hover:opacity-90 text-xs font-bold transition-all flex items-center justify-center"
                  >
                    Tải tệp PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
