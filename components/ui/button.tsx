import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          // Variants
          {
            "bg-primary text-primary-foreground hover:opacity-90 active:scale-95 shadow-button":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:opacity-90 active:scale-95":
              variant === "secondary",
            "border border-border bg-card text-foreground hover:bg-muted active:scale-95":
              variant === "outline",
            "text-foreground hover:bg-muted active:scale-95":
              variant === "ghost",
            "text-primary underline-offset-4 hover:underline":
              variant === "link",
          },
          // Sizes
          {
            "h-9 px-3 text-sm rounded-sm": size === "sm",
            "h-12 px-6 text-base rounded-md": size === "md",
            "h-14 px-8 text-lg rounded-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
