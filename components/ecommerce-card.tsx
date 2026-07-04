"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface SwatchOption {
  name: string;
  colorClass: string;
}

interface EcommerceCardProps {
  id: string;
  title: string;
  price: string;
  imageSrc: string;
  category: string;
  swatches?: SwatchOption[];
  sizes?: string[];
  onAddToCart?: (id: string, size: string, swatch: string) => void;
}

export function EcommerceCard({
  id,
  title,
  price,
  imageSrc,
  category,
  swatches = [],
  sizes = ["S", "M", "L"],
  onAddToCart,
}: EcommerceCardProps) {
  const [selectedSize, setSelectedSize] = React.useState<string>(sizes[0] || "M");
  const [selectedSwatch, setSelectedSwatch] = React.useState<number>(0);
  const [added, setAdded] = React.useState<boolean>(false);

  const handleAdd = () => {
    setAdded(true);
    if (onAddToCart) {
      onAddToCart(id, selectedSize, swatches[selectedSwatch]?.name || "");
    }
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    /* Outer Shell: Bezel base */
    <div className="bg-muted/50 border border-border p-2 rounded-[24px] group transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
      {/* Inner Core */}
      <div className="bg-card border border-border/40 p-6 rounded-[18px] shadow-card-subtle flex flex-col h-full justify-between space-y-5">
        {/* Product Visual Container */}
        <div className="relative aspect-[3/4] w-full rounded-[12px] overflow-hidden bg-muted border border-border/30">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            priority
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-primary uppercase tracking-[0.1em] border border-border/50">
              {category}
            </span>
          </div>
        </div>

        {/* Content Info */}
        <div className="space-y-3 text-left">
          <div className="flex justify-between items-start">
            <h4 className="font-display text-xl font-bold text-foreground text-balance">
              {title}
            </h4>
            <span className="font-mono text-base font-medium tracking-tight text-foreground/90 font-variant-numeric: tabular-nums">
              {price}
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
            Được chế tác thủ công bởi các nghệ nhân với chất liệu cao cấp và thiết kế tối giản, tinh tế.
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            {/* Swatches Selection */}
            {swatches.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Màu:</span>
                <div className="flex space-x-1.5">
                  {swatches.map((swatch, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Chọn màu ${swatch.name}`}
                      className={cn(
                        "h-5.5 w-5.5 rounded-full border flex items-center justify-center cursor-pointer transition-all active:scale-90",
                        selectedSwatch === idx
                          ? "border-primary ring-1 ring-primary/40 scale-105"
                          : "border-border/60 hover:border-muted-foreground"
                      )}
                      onClick={() => setSelectedSwatch(idx)}
                    >
                      <span className={cn("h-3.5 w-3.5 rounded-full block", swatch.colorClass)} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes Selection */}
            {sizes.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Size:</span>
                <div className="flex rounded-md bg-muted p-0.5 border border-border/60">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={cn(
                        "px-2 py-0.5 text-[10px] font-bold rounded transition-all cursor-pointer active:scale-95",
                        selectedSize === size
                          ? "bg-card text-foreground shadow-sm font-extrabold"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic CTA Button (Button-in-Button) */}
        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            "w-full font-semibold rounded-full py-3.5 pl-6 pr-3.5 text-sm flex items-center justify-between group/btn cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
            added
              ? "bg-secondary text-secondary-foreground"
              : "bg-primary text-primary-foreground hover:opacity-95 shadow-button"
          )}
        >
          <span>{added ? "Đã thêm vào giỏ!" : "Thêm vào giỏ hàng"}</span>
          <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
            {added ? (
              <Check className="h-4.5 w-4.5 animate-in fade-in zoom-in-50" />
            ) : (
              <ShoppingBag className="h-4 w-4" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
