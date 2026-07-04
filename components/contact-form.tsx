"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFields {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success";

export function ContactForm() {
  const [fields, setFields] = React.useState<FormFields>({
    name: "",
    email: "",
    service: "web-app",
    budget: "100-200m",
    message: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    // Clear error once user types
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined,
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!fields.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên của bạn.";
    }
    if (!fields.email.trim()) {
      newErrors.email = "Vui lòng nhập địa chỉ email.";
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      newErrors.email = "Địa chỉ email không đúng định dạng (VD: name@company.com).";
    }
    if (!fields.message.trim()) {
      newErrors.message = "Vui lòng nhập nội dung mô tả yêu cầu.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setFields({
      name: "",
      email: "",
      service: "web-app",
      budget: "100-200m",
      message: "",
    });
  };

  if (status === "success") {
    return (
      <div className="bg-card border border-border p-8 sm:p-12 rounded-2xl shadow-card-subtle text-center space-y-6 animate-fade-in">
        <div className="mx-auto h-16 w-16 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-bold text-foreground">
            Gửi thông tin thành công!
          </h3>
          <p className="text-muted-foreground text-balance">
            Cảm ơn bạn đã quan tâm đến HopeRise. Đội ngũ tư vấn dự án của chúng tôi sẽ xem xét thông tin và liên hệ lại với bạn qua email trong vòng 24 giờ tới.
          </p>
        </div>
        <div className="pt-4">
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() => setStatus("idle")}
          >
            Gửi yêu cầu khác
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border p-8 sm:p-10 rounded-2xl shadow-card-subtle space-y-6 text-left"
    >
      <h3 className="font-display text-xl font-bold text-foreground">
        Gửi yêu cầu tư vấn dự án
      </h3>

      {/* Name Field */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-foreground">
          Họ và tên *
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={fields.name}
          onChange={handleChange}
          placeholder="Nguyễn Văn A"
          className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
          disabled={status === "submitting"}
        />
        {errors.name && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-foreground">
          Địa chỉ Email *
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="name@company.com"
          className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
          disabled={status === "submitting"}
        />
        {errors.email && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Grid of Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service Option */}
        <div className="space-y-1.5">
          <label htmlFor="service" className="text-sm font-semibold text-foreground">
            Dịch vụ quan tâm
          </label>
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={handleChange}
            className="flex h-12 w-full rounded-sm border border-border bg-card px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
            disabled={status === "submitting"}
          >
            <option value="web-app">Phát triển Web & Web App</option>
            <option value="mobile-app">Phát triển Mobile App</option>
            <option value="automation">Tự động hóa Quy trình</option>
            <option value="branding">Thiết kế UI/UX & Thương hiệu</option>
          </select>
        </div>

        {/* Budget Option */}
        <div className="space-y-1.5">
          <label htmlFor="budget" className="text-sm font-semibold text-foreground">
            Ngân sách dự kiến
          </label>
          <select
            id="budget"
            name="budget"
            value={fields.budget}
            onChange={handleChange}
            className="flex h-12 w-full rounded-sm border border-border bg-card px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
            disabled={status === "submitting"}
          >
            <option value="under-100m">Dưới 100 triệu VNĐ</option>
            <option value="100-200m">100 - 200 triệu VNĐ</option>
            <option value="200-500m">200 - 500 triệu VNĐ</option>
            <option value="above-500m">Trên 500 triệu VNĐ</option>
          </select>
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Mô tả ngắn yêu cầu dự án *
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={fields.message}
          onChange={handleChange}
          placeholder="Hãy chia sẻ sơ lược về dự án của bạn (VD: mục tiêu, các trang cần có)..."
          className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
          disabled={status === "submitting"}
        />
        {errors.message && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full rounded-full gap-2 text-base justify-center cursor-pointer"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>Đang gửi yêu cầu...</>
          ) : (
            <>
              Gửi yêu cầu <Send className="h-4.5 w-4.5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
