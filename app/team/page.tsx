"use client";

import React, { useState } from "react";
import { Star, ShieldAlert, Award, Compass, X, Check, Globe, Mail, GraduationCap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const specialties = [
  { id: "all", label: "Tất cả đội ngũ" },
  { id: "board", label: "Ban lãnh đạo" },
  { id: "design", label: "Thiết kế & Mỹ thuật" },
  { id: "engineering", label: "Lập trình & Kỹ thuật" }
];

const teamMembers = [
  {
    id: "mem-1",
    name: "Phan Anh Tuấn",
    role: "Giám đốc Sáng lập & Chỉ huy thiết kế",
    specialty: "board",
    experience: "15 Năm kinh nghiệm",
    education: "Thạc sĩ Kiến trúc cảnh quan - Đại học Quốc gia Singapore (NUS)",
    achievements: "Giải thưởng Thiết kế Quốc tế Red Dot Design Award 2024",
    certs: ["Chứng chỉ Kiến trúc sư Hạng I", "Chứng chỉ Quản lý dự án PMI-PMP"],
    philosophy: "Chất lượng không nằm ở bản vẽ vẽ đẹp, mà nằm ở công trình bền vững ngoài thực tế.",
    bio: "Hơn 15 năm lãnh đạo các dự án thiết kế cảnh quan và kiến trúc đô thị thông minh. Anh Tuấn luôn đề cao triết lý thiết kế lấy con người làm trọng tâm, cân bằng giữa vẻ đẹp thẩm mỹ nghệ thuật và khả năng ứng dụng kỹ thuật thực tế.",
    avatarText: "AT",
    linkedin: "#",
    email: "tuan.phan@hoperise.vn"
  },
  {
    id: "mem-2",
    name: "Lê Minh Trang",
    role: "Giám đốc Công nghệ & Giải pháp số",
    specialty: "board",
    experience: "12 Năm kinh nghiệm",
    education: "Thạc sĩ Khoa học Máy tính - Đại học Bách khoa Hà Nội",
    achievements: "Cố vấn Kiến trúc kỹ thuật số cho 10+ dự án FinTech & SaaS lớn",
    certs: ["Chứng chỉ Kiến trúc sư đám mây AWS Professional", "Chứng chỉ An toàn thông tin CISSP"],
    philosophy: "Hệ thống số hoàn hảo phải hoạt động bền bỉ, bảo mật tuyệt đối trước khi nói về giao diện.",
    bio: "Trang dẫn dắt toàn bộ mảng phát triển ứng dụng và giải pháp tự động hóa tại HopeRise. Cô là người trực tiếp xây dựng kiến trúc Local Diff an toàn cho nền tảng LegalDiff.",
    avatarText: "MT",
    linkedin: "#",
    email: "trang.le@hoperise.vn"
  },
  {
    id: "mem-3",
    name: "Trần Hoàng Nam",
    role: "Chuyên gia Thiết kế UI/UX & Khả năng tiếp cận",
    specialty: "design",
    experience: "8 Năm kinh nghiệm",
    education: "Cử nhân Mỹ thuật công nghiệp - Đại học Mỹ thuật TP.HCM",
    achievements: "Thực hiện Auditing khả năng tiếp cận chuẩn WCAG cho 5 ứng dụng y tế lớn",
    certs: ["Chứng chỉ Chuyên gia UI/UX chuẩn Interaction Design Foundation (IDF)"],
    philosophy: "Thiết kế trải nghiệm số không chỉ để nhìn, mà là để tất cả mọi người có thể sử dụng dễ dàng.",
    bio: "Nam phụ trách mảng audit khả năng tiếp cận và thiết kế hệ thống tương tác cho các dự án y tế (như CareMate). Anh cam kết thiết kế giao diện tinh gọn chuẩn WCAG AA.",
    avatarText: "HN",
    linkedin: "#",
    email: "nam.tran@hoperise.vn"
  },
  {
    id: "mem-4",
    name: "Đặng Quốc Khánh",
    role: "Kỹ sư trưởng Lập trình Frontend",
    specialty: "engineering",
    experience: "7 Năm kinh nghiệm",
    education: "Cử nhân Công nghệ thông tin - Đại học Công nghệ (UET) - ĐHQGHN",
    achievements: "Tối ưu hóa Core Web Vitals giúp giảm 65% thời gian tải trang ban đầu",
    certs: ["Chứng chỉ Lập trình viên React & Next.js chuyên sâu"],
    philosophy: "Mã nguồn sạch, hiệu năng tải nhanh là món quà tuyệt vời nhất dành cho người dùng.",
    bio: "Khánh tập trung tối ưu hóa hiệu năng render phía client, xử lý các bài toán hydration và dựng layout bento bất đối xứng trên nền Next.js App Router.",
    avatarText: "QK",
    linkedin: "#",
    email: "khanh.dang@hoperise.vn"
  }
];

export default function TeamPage() {
  const [activeSpecialty, setActiveSpecialty] = useState("all");
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const filteredMembers = teamMembers.filter((member) => {
    return activeSpecialty === "all" || member.specialty === activeSpecialty;
  });

  return (
    <div className="flex flex-col flex-1 w-full bg-background relative">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Đội Ngũ Đồng Hành Cùng Dự Án</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Ban lãnh đạo & Đội ngũ chuyên gia
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Khám phá những con người thực tế đứng sau vận hành dự án, sở hữu chuyên môn vững vàng, cam kết đạo đức nghề nghiệp và triết lý hướng tới khách hàng.
          </p>
        </div>
      </section>

      {/* Main Team Directory */}
      <section className="py-20 lg:py-28 mx-auto max-w-7xl px-6 lg:px-8 w-full space-y-12">
        {/* Specialty Filter Switcher */}
        <div className="flex justify-center border-b border-border/60 pb-6">
          <div className="flex flex-wrap gap-2">
            {specialties.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveSpecialty(spec.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-300",
                  activeSpecialty === spec.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                )}
              >
                {spec.label}
              </button>
            ))}
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="bg-muted/50 border border-border p-2 rounded-[24px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 group cursor-pointer"
            >
              <div className="bg-card border border-border/40 p-6 rounded-[18px] shadow-card-subtle flex flex-col items-center text-center space-y-4 h-full relative overflow-hidden">
                {/* Mock Portrait Avatar (High Contrast Minimal Frame) */}
                <div className="h-28 w-28 rounded-full bg-accent border border-primary/10 flex items-center justify-center text-primary font-display text-3xl font-extrabold select-none shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {member.avatarText}
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium">{member.role}</p>
                </div>

                <span className="text-[10px] font-mono font-bold text-secondary bg-accent/80 px-2.5 py-0.5 rounded-full">
                  {member.experience}
                </span>

                <div className="text-[10px] text-muted-foreground line-clamp-2 px-2 italic pt-1">
                  &quot;{member.philosophy}&quot;
                </div>

                {/* Social Badges */}
                <div className="flex gap-3 pt-3 text-muted-foreground group-hover:text-foreground transition-colors">
                  <Globe className="h-4 w-4 hover:text-primary transition-colors" />
                  <Mail className="h-4 w-4 hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Biography Details Drawer Panel */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
          {/* Drawer Slide-out container */}
          <div className="bg-card w-full max-w-md h-full border-l border-border p-6 shadow-2xl relative flex flex-col justify-between animate-slide-in">
            {/* Header info */}
            <div className="space-y-6 overflow-y-auto pr-2">
              <div className="flex justify-between items-center pb-4 border-b border-border/60">
                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest">Hồ sơ chuyên gia</span>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-1.5 rounded-full hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Basic Portrait Panel */}
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-accent border border-primary/10 flex items-center justify-center text-primary font-display text-2xl font-bold select-none">
                  {selectedMember.avatarText}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground leading-snug">{selectedMember.name}</h3>
                  <p className="text-xs text-muted-foreground font-medium">{selectedMember.role}</p>
                </div>
              </div>

              {/* Bio description */}
              <p className="text-xs text-muted-foreground leading-relaxed">{selectedMember.bio}</p>

              {/* Qualifications */}
              <div className="space-y-4 pt-4 border-t border-border/60">
                <div className="flex gap-3 items-start">
                  <GraduationCap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-foreground">Học vị / Đào tạo</span>
                    <p className="text-xs text-muted-foreground leading-normal">{selectedMember.education}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Briefcase className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-foreground">Thành tựu nổi bật</span>
                    <p className="text-xs text-muted-foreground leading-normal">{selectedMember.achievements}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-foreground">Chứng chỉ chuyên môn</span>
                    <div className="flex flex-col gap-1.5 pt-1">
                      {selectedMember.certs.map((cert, certIdx) => (
                        <div key={certIdx} className="flex gap-1.5 items-center text-xs text-muted-foreground">
                          <Check className="h-3.5 w-3.5 text-secondary" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Philosophy Card */}
              <div className="p-4 bg-accent/40 border border-primary/10 rounded-xl space-y-2">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest block">Triết lý làm việc cá nhân</span>
                <p className="text-xs italic text-foreground/80 leading-relaxed">&quot;{selectedMember.philosophy}&quot;</p>
              </div>
            </div>

            {/* Footer actions inside Drawer */}
            <div className="pt-6 border-t border-border/80 flex gap-4">
              <a
                href={`mailto:${selectedMember.email}`}
                className="flex-1 h-11 rounded-full bg-primary text-primary-foreground hover:opacity-90 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                Gửi Email liên hệ
              </a>
              <button
                onClick={() => setSelectedMember(null)}
                className="h-11 px-5 rounded-full border border-border bg-card text-foreground hover:bg-muted text-xs font-bold transition-all"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
