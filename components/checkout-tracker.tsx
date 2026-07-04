"use client";

import * as React from "react";
import { Check, ArrowRight, ArrowLeft, CreditCard, ShieldCheck, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckoutTrackerProps {
  cartItemsCount: number;
  totalAmount: string;
  onSuccess: () => void;
}

type Step = "shipping" | "payment" | "confirm" | "success";

export function CheckoutTracker({ cartItemsCount, totalAmount, onSuccess }: CheckoutTrackerProps) {
  const [currentStep, setCurrentStep] = React.useState<Step>("shipping");
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === "shipping") {
      if (!formData.name.trim()) newErrors.name = "Họ tên không được để trống";
      if (!formData.phone.trim()) {
        newErrors.phone = "Số điện thoại không được để trống";
      } else if (!/^[0-9]{10,11}$/.test(formData.phone.trim())) {
        newErrors.phone = "Số điện thoại không hợp lệ (phải từ 10-11 số)";
      }
      if (!formData.address.trim()) newErrors.address = "Địa chỉ nhận hàng không được để trống";
      if (!formData.city.trim()) newErrors.city = "Tỉnh/Thành phố không được để trống";
    } else if (currentStep === "payment") {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Số thẻ không được để trống";
      } else if (!/^[0-9\s]{12,19}$/.test(formData.cardNumber.trim())) {
        newErrors.cardNumber = "Số thẻ không hợp lệ";
      }
      if (!formData.cardExpiry.trim()) {
        newErrors.cardExpiry = "Hạn dùng không được để trống";
      } else if (!/^[0-9]{2}\/[0-9]{2}$/.test(formData.cardExpiry.trim())) {
        newErrors.cardExpiry = "Định dạng phải là MM/YY";
      }
      if (!formData.cardCvc.trim()) {
        newErrors.cardCvc = "CVC không được để trống";
      } else if (!/^[0-9]{3}$/.test(formData.cardCvc.trim())) {
        newErrors.cardCvc = "CVC gồm 3 chữ số";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep === "shipping") setCurrentStep("payment");
      else if (currentStep === "payment") setCurrentStep("confirm");
      else if (currentStep === "confirm") {
        setCurrentStep("success");
        onSuccess();
      }
    }
  };

  const handleBack = () => {
    if (currentStep === "payment") setCurrentStep("shipping");
    else if (currentStep === "confirm") setCurrentStep("payment");
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const stepsList = [
    { key: "shipping", label: "Vận chuyển" },
    { key: "payment", label: "Thanh toán" },
    { key: "confirm", label: "Xác nhận" },
    { key: "success", label: "Hoàn thành" },
  ];

  const getStepIndex = (step: Step) => {
    if (step === "shipping") return 0;
    if (step === "payment") return 1;
    if (step === "confirm") return 2;
    return 3;
  };

  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="space-y-8 text-left">
      {/* Steps Connector Header */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/60 -translate-y-1/2 z-0" />
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{ width: `${(currentIndex / 3) * 100}%` }}
        />
        
        <div className="relative flex justify-between z-10">
          {stepsList.map((st, idx) => {
            const isCompleted = currentIndex > idx;
            const isActive = currentIndex === idx;
            
            return (
              <div key={st.key} className="flex flex-col items-center space-y-2">
                <div
                  className={cn(
                    "h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500",
                    isCompleted
                      ? "bg-primary text-primary-foreground scale-100"
                      : isActive
                      ? "bg-secondary text-secondary-foreground ring-4 ring-secondary/20 scale-105"
                      : "bg-muted text-muted-foreground border border-border"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4.5 w-4.5" />
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "text-[10px] uppercase tracking-wider font-bold",
                    isActive ? "text-secondary font-extrabold" : "text-muted-foreground"
                  )}
                >
                  {st.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Form Area */}
      <div className="bg-card border border-border/70 rounded-[20px] shadow-card-subtle overflow-hidden">
        {currentStep === "shipping" && (
          <div className="p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Thông tin vận chuyển
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground" htmlFor="name">
                  Họ và tên người nhận *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className={cn(
                    "w-full bg-muted/50 border border-border/70 focus:ring-1 focus:ring-primary focus:border-primary rounded-[12px] px-4 py-3.5 text-sm transition-all focus:outline-none",
                    errors.name && "border-secondary focus:ring-secondary focus:border-secondary"
                  )}
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && <p className="text-xs font-semibold text-secondary">{errors.name}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground" htmlFor="phone">
                  Số điện thoại *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="0901234567"
                  className={cn(
                    "w-full bg-muted/50 border border-border/70 focus:ring-1 focus:ring-primary focus:border-primary rounded-[12px] px-4 py-3.5 text-sm transition-all focus:outline-none",
                    errors.phone && "border-secondary focus:ring-secondary focus:border-secondary"
                  )}
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
                {errors.phone && <p className="text-xs font-semibold text-secondary">{errors.phone}</p>}
              </div>

              {/* Address */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground" htmlFor="address">
                  Địa chỉ chi tiết (Số nhà, đường...) *
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="456 Đường Sáng Tạo"
                  className={cn(
                    "w-full bg-muted/50 border border-border/70 focus:ring-1 focus:ring-primary focus:border-primary rounded-[12px] px-4 py-3.5 text-sm transition-all focus:outline-none",
                    errors.address && "border-secondary focus:ring-secondary focus:border-secondary"
                  )}
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                />
                {errors.address && <p className="text-xs font-semibold text-secondary">{errors.address}</p>}
              </div>

              {/* City */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground" htmlFor="city">
                  Tỉnh / Thành phố *
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="TP. Hồ Chí Minh"
                  className={cn(
                    "w-full bg-muted/50 border border-border/70 focus:ring-1 focus:ring-primary focus:border-primary rounded-[12px] px-4 py-3.5 text-sm transition-all focus:outline-none",
                    errors.city && "border-secondary focus:ring-secondary focus:border-secondary"
                  )}
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
                {errors.city && <p className="text-xs font-semibold text-secondary">{errors.city}</p>}
              </div>
            </div>
          </div>
        )}

        {currentStep === "payment" && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Thông tin thanh toán
              </h3>
              <div className="flex space-x-1.5 text-muted-foreground">
                <CreditCard className="h-5 w-5 text-primary" />
                <ShieldCheck className="h-5 w-5 text-secondary" />
              </div>
            </div>

            <div className="space-y-4">
              {/* Card Number */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground" htmlFor="cardNumber">
                  Số thẻ tín dụng *
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="4111 2222 3333 4444"
                  className={cn(
                    "w-full bg-muted/50 border border-border/70 focus:ring-1 focus:ring-primary focus:border-primary rounded-[12px] px-4 py-3.5 text-sm transition-all focus:outline-none",
                    errors.cardNumber && "border-secondary focus:ring-secondary focus:border-secondary"
                  )}
                  value={formData.cardNumber}
                  onChange={(e) => handleChange("cardNumber", e.target.value)}
                />
                {errors.cardNumber && <p className="text-xs font-semibold text-secondary">{errors.cardNumber}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Card Expiry */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground" htmlFor="cardExpiry">
                    Hạn dùng (MM/YY) *
                  </label>
                  <input
                    id="cardExpiry"
                    type="text"
                    placeholder="12/28"
                    maxLength={5}
                    className={cn(
                      "w-full bg-muted/50 border border-border/70 focus:ring-1 focus:ring-primary focus:border-primary rounded-[12px] px-4 py-3.5 text-sm transition-all focus:outline-none",
                      errors.cardExpiry && "border-secondary focus:ring-secondary focus:border-secondary"
                    )}
                    value={formData.cardExpiry}
                    onChange={(e) => handleChange("cardExpiry", e.target.value)}
                  />
                  {errors.cardExpiry && <p className="text-xs font-semibold text-secondary">{errors.cardExpiry}</p>}
                </div>

                {/* Card Cvc */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-bold text-muted-foreground" htmlFor="cardCvc">
                    Mã bảo mật CVC *
                  </label>
                  <input
                    id="cardCvc"
                    type="text"
                    placeholder="123"
                    maxLength={3}
                    className={cn(
                      "w-full bg-muted/50 border border-border/70 focus:ring-1 focus:ring-primary focus:border-primary rounded-[12px] px-4 py-3.5 text-sm transition-all focus:outline-none",
                      errors.cardCvc && "border-secondary focus:ring-secondary focus:border-secondary"
                    )}
                    value={formData.cardCvc}
                    onChange={(e) => handleChange("cardCvc", e.target.value)}
                  />
                  {errors.cardCvc && <p className="text-xs font-semibold text-secondary">{errors.cardCvc}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "confirm" && (
          <div className="p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Xác nhận đơn hàng
            </h3>

            {/* Double-Bezel layout for Summary */}
            <div className="bg-muted border border-border p-2 rounded-[20px]">
              <div className="bg-card border border-border/30 rounded-[14px] p-5 space-y-4">
                <div className="flex items-center justify-between text-sm pb-3 border-b border-border/60">
                  <span className="text-muted-foreground flex items-center gap-1.5"><ShoppingCart className="h-4 w-4" /> Số lượng sản phẩm:</span>
                  <span className="font-bold text-foreground">{cartItemsCount}</span>
                </div>
                
                {/* Shipping summary */}
                <div className="text-sm space-y-1 pb-3 border-b border-border/60">
                  <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground block">Địa chỉ nhận hàng:</span>
                  <p className="font-semibold text-foreground">{formData.name} • {formData.phone}</p>
                  <p className="text-muted-foreground text-xs">{formData.address}, {formData.city}</p>
                </div>

                {/* Total amount */}
                <div className="flex items-center justify-between text-base pt-1">
                  <span className="font-bold text-foreground">Tổng cộng (Đã tính VAT):</span>
                  <span className="font-mono font-extrabold text-lg text-secondary font-variant-numeric: tabular-nums">
                    {totalAmount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "success" && (
          <div className="p-8 sm:p-12 text-center space-y-6 flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center animate-bounce">
              <Check className="h-8 w-8 stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-3xl font-extrabold text-foreground">
                Đặt hàng thành công!
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Cảm ơn bạn đã lựa chọn HopeRise. Đơn hàng của bạn đang được xử lý và sẽ sớm vận chuyển tới bạn trong vòng 2-3 ngày làm việc.
              </p>
            </div>
            <div className="bg-muted p-4 rounded-[12px] border border-border/60 text-xs text-muted-foreground max-w-xs">
              Mã vận đơn của bạn: <span className="font-mono font-bold text-primary">HR-2026-89745</span>
            </div>
          </div>
        )}

        {/* Buttons Footer */}
        {currentStep !== "success" && (
          <div className="px-6 py-4 bg-muted/40 border-t border-border/80 flex justify-between items-center">
            {currentIndex > 0 ? (
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-muted-foreground hover:text-foreground cursor-pointer transition-all active:scale-95 py-2"
                onClick={handleBack}
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại
              </button>
            ) : (
              <div />
            )}

            {/* Proceed Action Button (Button-in-Button) */}
            <button
              type="button"
              className="bg-secondary text-secondary-foreground font-bold rounded-full py-2.5 pl-6 pr-2.5 text-sm flex items-center gap-4 group/btn cursor-pointer transition-all duration-300 hover:opacity-95 active:scale-[0.98] shadow-button"
              onClick={handleNext}
            >
              <span>
                {currentStep === "confirm" ? "Thanh toán ngay" : "Tiếp tục"}
              </span>
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
