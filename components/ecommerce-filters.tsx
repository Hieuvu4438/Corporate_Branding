"use client";

import * as React from "react";
import { Search, X, SlidersHorizontal, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface EcommerceFiltersProps {
  activeCategory: string;
  onChangeCategory: (category: string) => void;
  searchQuery: string;
  onChangeSearch: (query: string) => void;
  priceRange: number;
  onChangePrice: (price: number) => void;
  onClearAll: () => void;
}

export function EcommerceFilters({
  activeCategory,
  onChangeCategory,
  searchQuery,
  onChangeSearch,
  priceRange,
  onChangePrice,
  onClearAll,
}: EcommerceFiltersProps) {
  const categories = [
    { label: "Tất cả sản phẩm", value: "all" },
    { label: "Gốm sứ cao cấp (Ceramic)", value: "ceramic" },
    { label: "Nến thơm Organic", value: "candle" },
    { label: "Dụng cụ cà phê (Stoneware)", value: "stoneware" },
  ];

  return (
    <div className="bg-card border border-border/70 p-6 rounded-[20px] shadow-card-subtle space-y-6 text-left">
      {/* Filters Title */}
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center space-x-2 text-foreground font-bold font-display">
          <SlidersHorizontal className="h-4.5 w-4.5 text-primary" />
          <span>Bộ lọc sản phẩm</span>
        </div>
        {(activeCategory !== "all" || searchQuery !== "" || priceRange < 200) && (
          <button
            type="button"
            className="text-xs font-semibold text-secondary hover:text-secondary/80 flex items-center gap-1 cursor-pointer transition-colors active:scale-95"
            onClick={onClearAll}
          >
            Xóa lọc <X className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* Search Input */}
      <div className="space-y-2">
        <label htmlFor="search" className="text-xs uppercase tracking-wider font-bold text-muted-foreground block">
          Tìm kiếm
        </label>
        <div className="relative flex items-center bg-muted/60 border border-border/50 rounded-[12px] px-3.5 focus-within:ring-1 focus-within:ring-primary focus-within:border-primary/60 transition-all">
          <Search className="h-4.5 w-4.5 text-muted-foreground shrink-0" />
          <input
            id="search"
            type="text"
            placeholder="Tìm bình gốm, nến..."
            className="w-full bg-transparent border-0 py-3.5 pl-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
            value={searchQuery}
            onChange={(e) => onChangeSearch(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="text-muted-foreground hover:text-foreground cursor-pointer"
              onClick={() => onChangeSearch("")}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category List */}
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground block">
          Danh mục
        </span>
        <div className="flex flex-col space-y-1.5">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                className={cn(
                  "w-full text-left px-3.5 py-3 rounded-[10px] text-sm transition-all flex items-center justify-between cursor-pointer active:scale-99",
                  isSelected
                    ? "bg-primary/10 text-primary font-bold border-l-2 border-primary pl-2.5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                )}
                onClick={() => onChangeCategory(cat.value)}
              >
                <span>{cat.label}</span>
                {isSelected && <Check className="h-4 w-4 text-primary shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="space-y-3.5">
        <div className="flex justify-between items-center">
          <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground block">
            Mức giá tối đa
          </span>
          <span className="font-mono text-xs font-bold text-primary font-variant-numeric: tabular-nums">
            {priceRange}.000đ
          </span>
        </div>
        <div className="space-y-2">
          <input
            type="range"
            min="50"
            max="200"
            step="10"
            className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            value={priceRange}
            onChange={(e) => onChangePrice(Number(e.target.value))}
          />
          <div className="flex justify-between text-[10px] font-mono text-muted-foreground font-variant-numeric: tabular-nums">
            <span>50.000đ</span>
            <span>200.000đ</span>
          </div>
        </div>
      </div>

      {/* Status Info Block */}
      <div className="bg-accent/40 border border-primary/20 rounded-[12px] p-4 text-xs text-muted-foreground space-y-1 leading-relaxed">
        <p className="font-bold text-primary font-display">Chính sách vận chuyển:</p>
        <p>Giao hàng miễn phí toàn quốc cho đơn hàng từ 500.000đ. Đảm bảo đóng gói chống va đập chuyên dụng.</p>
      </div>
    </div>
  );
}
