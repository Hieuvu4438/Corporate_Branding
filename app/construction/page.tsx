"use client";

import React, { useState } from "react";
import { Camera, Calendar, HardHat, ShieldCheck, Play, UserCheck, Video, Clock, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const cameraFeeds = [
  { id: "feed-1", name: "Cổng chính & Trạm trộn", url: "Camera 01 - Main Gate Entrance", time: "Live 10:45 AM" },
  { id: "feed-2", name: "Tháp Cẩu Block A", url: "Camera 02 - Crane View Block A", time: "Live 10:45 AM" },
  { id: "feed-3", name: "Hạ tầng Công viên & Cảnh quan", url: "Camera 03 - Landscape Park Area", time: "Live 10:45 AM" }
];

const ganttPhases = [
  { name: "San lấp mặt bằng", start: "Th1/2025", end: "Th3/2025", status: "100%", color: "bg-primary" },
  { name: "Thi công phần móng", start: "Th4/2025", end: "Th7/2025", status: "100%", color: "bg-primary" },
  { name: "Khung kết cấu thô (Lên tầng)", start: "Th8/2025", end: "Th3/2026", status: "85%", color: "bg-primary/80" },
  { name: "Hoàn thiện mặt ngoài", start: "Th4/2026", end: "Th9/2026", status: "30%", color: "bg-secondary" },
  { name: "Cơ điện & Nội thất Bàn giao", start: "Th10/2026", end: "Th12/2026", status: "10%", color: "bg-muted-foreground/30" }
];

const journalLogs = [
  {
    week: "Tuần 26 (28/06 - 04/07/2026)",
    milestone: "Đổ bê tông sàn tầng 18 Block A",
    details: "Hoàn thành đổ 1200m³ bê tông mác 400 sàn tầng 18 trong vòng 16 giờ làm việc liên tục. Đảm bảo an toàn lao động tuyệt đối.",
    staff: "185 Công nhân, 14 Kỹ sư giám sát",
    machinery: "2 Cẩu tháp Zoomlion, 4 Xe bồn bơm bê tông",
    images: ["Drone view Block A tầng 18", "Công nhân đổ sàn ban đêm"]
  },
  {
    week: "Tuần 25 (21/06 - 27/06/2026)",
    milestone: "Lắp đặt kính hộp cách âm tầng 10",
    details: "Khởi động lắp đặt hệ thống vách kính Unitized Low-E cách âm chống tia UV Block B. Đã lắp đạt hoàn thành 75% khối lượng mặt dựng tầng 10.",
    staff: "42 Công nhân chuyên môn cao",
    machinery: "Hệ thống sàn treo Gondola chuyên dụng",
    images: ["Lắp đặt kính mặt đứng", "Góc nhìn kính Low-E"]
  },
  {
    week: "Tuần 24 (14/06 - 20/06/2026)",
    milestone: "Hoàn thành cất nóc khu Shophouse",
    details: "Chính thức cất nóc dãy 24 căn Shophouse thương mại thuộc phân khu trung tâm, chuyển sang giai đoạn tô trát ngoài và lợp ngói.",
    staff: "96 Công nhân xây tô",
    machinery: "Máy phun vữa tự động, xe nâng hàng",
    images: ["Lễ cất nóc dãy Shophouse"]
  }
];

export default function ConstructionPage() {
  const [activeFeed, setActiveFeed] = useState("feed-1");
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  return (
    <div className="flex flex-col flex-1 w-full bg-background">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 border-b border-border/80 bg-background/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-secondary">Giám Sát Hiện Trường & Minh Chứng Thực Địa</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance">
            Tiến độ thi công & Nhật ký công trình
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            Cập nhật thời gian thực các số liệu nhân sự, luồng camera công trường trực tuyến và nhật ký khối lượng bàn giao để tối ưu hóa giám sát dòng vốn đầu tư.
          </p>
        </div>
      </section>

      {/* Stats Dashboard (Double Bezel) */}
      <section className="py-12 bg-muted/20 border-b border-border/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-muted/50 border border-border p-2 rounded-2xl">
              <div className="bg-card border border-border/40 p-5 rounded-xl text-center space-y-2 shadow-card-subtle">
                <HardHat className="h-6 w-6 text-primary mx-auto" />
                <span className="block text-2xl font-bold text-foreground">227 Nhân sự</span>
                <p className="text-xs text-muted-foreground">Đang tích cực thi công hôm nay</p>
              </div>
            </div>

            <div className="bg-muted/50 border border-border p-2 rounded-2xl">
              <div className="bg-card border border-border/40 p-5 rounded-xl text-center space-y-2 shadow-card-subtle">
                <Navigation className="h-6 w-6 text-primary mx-auto" />
                <span className="block text-2xl font-bold text-foreground">18 Thiết bị</span>
                <p className="text-xs text-muted-foreground">Cẩu tháp, máy xúc, xe bơm active</p>
              </div>
            </div>

            <div className="bg-muted/50 border border-border p-2 rounded-2xl">
              <div className="bg-card border border-border/40 p-5 rounded-xl text-center space-y-2 shadow-card-subtle">
                <ShieldCheck className="h-6 w-6 text-primary mx-auto" />
                <span className="block text-2xl font-bold text-foreground">285.000 Giờ</span>
                <p className="text-xs text-muted-foreground">Lao động an toàn không tai nạn</p>
              </div>
            </div>

            <div className="bg-muted/50 border border-border p-2 rounded-2xl">
              <div className="bg-card border border-border/40 p-5 rounded-xl text-center space-y-2 shadow-card-subtle">
                <Clock className="h-6 w-6 text-primary mx-auto" />
                <span className="block text-2xl font-bold text-foreground">Tầng 18</span>
                <p className="text-xs text-muted-foreground">Chiều cao kết cấu sàn Block A hiện tại</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main interactive section */}
      <section className="py-20 lg:py-28 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Camera Feed & Gantt Schedule */}
          <div className="lg:col-span-7 space-y-12">
            {/* Live Camera Stream */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Video className="h-5 w-5 text-secondary" /> Luồng Camera Trực Tuyến (Mockup)
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-primary font-bold bg-[#E9EFE9] px-2.5 py-0.5 rounded-full border border-primary/10">
                  <span className="h-2 w-2 rounded-full bg-red-600 animate-ping" /> Live Stream
                </span>
              </div>

              {/* Player Container */}
              <div className="bg-muted/50 border border-border p-2 rounded-2xl shadow-card-subtle">
                <div className="relative aspect-[16/9] bg-zinc-950 rounded-xl overflow-hidden flex flex-col justify-center items-center text-center">
                  <div className="absolute inset-0 bg-radial-gradient opacity-10" />
                  
                  {/* Camera overlay texts */}
                  <div className="absolute top-4 left-4 text-xs font-mono bg-black/60 text-emerald-400 px-3 py-1 rounded">
                    {cameraFeeds.find(f => f.id === activeFeed)?.url}
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-mono bg-black/60 text-white px-3 py-1 rounded">
                    {cameraFeeds.find(f => f.id === activeFeed)?.time}
                  </div>

                  {/* Play Button Icon */}
                  <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer">
                    <Play className="h-8 w-8 fill-white ml-1" />
                  </div>
                  <p className="mt-4 text-xs text-white/60">Bấm để tải luồng phát trực tiếp từ máy ảnh</p>
                </div>
              </div>

              {/* Feed Switcher */}
              <div className="flex gap-2">
                {cameraFeeds.map((feed) => (
                  <button
                    key={feed.id}
                    onClick={() => setActiveFeed(feed.id)}
                    className={cn(
                      "flex-1 text-xs font-semibold py-2 px-3 rounded-full border transition-all duration-300",
                      activeFeed === feed.id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-muted/40 border-border hover:bg-muted text-muted-foreground"
                    )}
                  >
                    {feed.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Gantt Timeline Scheduler */}
            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Tiến độ tổng thể & Gantt Chart
              </h3>

              <div className="bg-muted/50 border border-border p-2 rounded-2xl">
                <div className="bg-card border border-border/40 p-6 rounded-xl shadow-card-subtle space-y-4">
                  {ganttPhases.map((phase, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedPhase(selectedPhase === phase.name ? null : phase.name)}
                      className={cn(
                        "space-y-1.5 cursor-pointer p-2.5 rounded-lg transition-colors",
                        selectedPhase === phase.name ? "bg-accent/40" : "hover:bg-muted/30"
                      )}
                    >
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-foreground">{phase.name}</span>
                        <span className="text-muted-foreground">{phase.start} - {phase.end} ({phase.status})</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full rounded-full transition-all duration-1000", phase.color)} 
                          style={{ width: phase.status }} 
                        />
                      </div>
                      {selectedPhase === phase.name && (
                        <p className="text-[11px] text-muted-foreground leading-relaxed pt-1 animate-fade-in">
                          Giai đoạn {phase.name} bắt đầu từ {phase.start} đến {phase.end}. Hiện đã hoàn thành {phase.status}. Nhấp lại để đóng chi tiết.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reverse site activity journal log */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-lg font-bold text-foreground">Nhật ký thực địa (Ngược)</h3>
            
            <div className="relative border-l border-border pl-6 space-y-10">
              {journalLogs.map((log, idx) => (
                <div key={idx} className="relative space-y-3">
                  {/* Timeline dot */}
                  <span className={cn(
                    "absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-background flex items-center justify-center shadow-sm",
                    idx === 0 ? "bg-secondary" : "bg-primary"
                  )} />

                  <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block">
                    {log.week}
                  </span>
                  <h4 className="text-base font-bold text-foreground leading-snug">
                    {log.milestone}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {log.details}
                  </p>
                  
                  <div className="pt-2 flex flex-col space-y-1.5 text-[11px] text-muted-foreground border-t border-border/40">
                    <div className="flex gap-2">
                      <span className="font-bold text-foreground">Nhân sự huy động:</span>
                      <span>{log.staff}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-foreground">Máy móc thiết bị:</span>
                      <span>{log.machinery}</span>
                    </div>
                  </div>

                  {/* Images placeholders */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {log.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="bg-muted/50 border border-border/80 rounded-lg py-4 px-2 text-[10px] text-center text-muted-foreground italic font-medium">
                        {img}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
