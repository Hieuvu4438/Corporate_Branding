"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Về chúng tôi", href: "/about" },
  { name: "Năng lực cốt lõi", href: "/capabilities" },
  { name: "Dự án", href: "/projects" },
  { name: "E-Commerce", href: "/ecommerce" },
  { name: "Hỏi đáp", href: "/faq" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                H
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                HopeRise
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-1",
                    isActive
                      ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-primary text-primary-foreground hover:opacity-90 active:scale-95 shadow-button h-9 px-4 text-sm rounded-full gap-2"
            >
              Liên hệ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/80 bg-background transition-all duration-300">
          <div className="space-y-1 px-6 pb-4 pt-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-3 text-base font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-accent/40 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-primary text-primary-foreground hover:opacity-90 active:scale-95 shadow-button h-12 px-6 text-base w-full rounded-full gap-2 justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Liên hệ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
