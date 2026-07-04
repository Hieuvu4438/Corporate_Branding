"use client";

import * as React from "react";
import { ShoppingBag, ArrowRight, BookOpen, Layers, CheckCircle2, ChevronRight } from "lucide-react";
import { EcommerceCard } from "@/components/ecommerce-card";
import { EcommerceFilters } from "@/components/ecommerce-filters";
import { CheckoutTracker } from "@/components/checkout-tracker";
import { cn } from "@/lib/utils";

// Mock documentation content to render beautifully
const docsData = [
  {
    id: "overview",
    title: "1. Kiến trúc Composable & Headless",
    subtitle: "Tốc độ và sự linh hoạt tối đa cho thương hiệu",
    content: (
      <div className="space-y-6">
        <p className="text-base text-muted-foreground leading-relaxed">
          Kiến trúc Headless tách biệt hoàn toàn lớp giao diện hiển thị (Frontend) khỏi hệ thống quản trị giao dịch phía sau (Backend Commerce). Điều này mang lại hiệu suất tối ưu và khả năng tùy biến vô hạn cho các thương hiệu cao cấp.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-muted p-5 rounded-[12px] border border-border/80">
            <span className="font-display font-bold text-foreground block mb-1">Tải trang tức thì</span>
            <p className="text-xs text-muted-foreground leading-relaxed">Các trang tĩnh được phân phối qua CDN Edge Network, giảm thiểu tối đa độ trễ phản hồi (TTFB &lt; 100ms).</p>
          </div>
          <div className="bg-muted p-5 rounded-[12px] border border-border/80">
            <span className="font-display font-bold text-foreground block mb-1">Tách biệt dữ liệu</span>
            <p className="text-xs text-muted-foreground leading-relaxed">Đơn hàng, thanh toán và khuyến mãi chạy độc lập, bảo vệ hệ thống khỏi sự cố sập trang khi lượng truy cập tăng đột biến.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "pages",
    title: "2. Sơ đồ luồng trang chuẩn UX",
    subtitle: "Dẫn dắt khách hàng hoàn tất thanh toán tự nhiên",
    content: (
      <div className="space-y-6">
        <p className="text-base text-muted-foreground leading-relaxed">
          Một thiết kế e-commerce thành công phải giảm thiểu tối đa số bước click không cần thiết. Chúng tôi xây dựng cấu trúc luồng trang chặt chẽ từ Home &rarr; PLP &rarr; PDP &rarr; Checkout:
        </p>
        <ul className="space-y-3 text-sm text-foreground">
          <li className="flex items-start gap-2.5">
            <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
            <span><strong>Homepage:</strong> Tập trung vào câu chuyện thương hiệu và các bộ sưu tập giới hạn (Featured Bento grids).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
            <span><strong>Listing & PDP:</strong> Sử dụng hệ thống so sánh thuộc tính, hình ảnh phong cách sống phóng to và thông số kỹ thuật rõ ràng.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
            <span><strong>Frictionless Checkout:</strong> Trình theo dõi thanh toán ẩn hoàn toàn thanh điều hướng chính, tập trung 100% sự chú ý vào biểu mẫu thanh toán.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "components",
    title: "3. Thư viện Component tác vụ",
    subtitle: "Khối dựng hoàn hảo kế thừa Design System",
    content: (
      <div className="space-y-6">
        <p className="text-base text-muted-foreground leading-relaxed">
          Tất cả các thành phần giao diện e-commerce đều được kế thừa các mã thông số thiết kế (Design Tokens) từ hệ thống chung để duy trì sự nhất quán tối đa.
        </p>
        <div className="space-y-3.5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0" />
            <span className="text-sm font-semibold">Khung viền kép (Double-Bezel) đem lại chiều sâu haptic.</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0" />
            <span className="text-sm font-semibold">Nút nhấn lồng nút (Button-in-Button) hướng sự chú ý vào hành động.</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0" />
            <span className="text-sm font-semibold">Phản hồi xúc giác qua các vi mô chuyển động lò xo (Spring Physics).</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "performance",
    title: "4. Tối ưu hóa & Khả năng tiếp cận",
    subtitle: "Đạt chuẩn tốc độ Google LCP & Khả năng truy cập WCAG AA",
    content: (
      <div className="space-y-6">
        <p className="text-base text-muted-foreground leading-relaxed">
          Chúng tôi coi khả năng tiếp cận và tốc độ tải trang là nghĩa vụ cơ bản trong kỹ thuật phần mềm:
        </p>
        <div className="bg-muted p-5 rounded-[12px] border border-border/80 space-y-3 text-xs text-muted-foreground leading-relaxed">
          <p>• <strong>Hình ảnh thế hệ mới:</strong> Tự động nén ảnh sang định dạng WebP/AVIF và tải lười (lazy loading) các ảnh ngoài màn hình.</p>
          <p>• <strong>WCAG 2.1 AA:</strong> Tất cả nút bấm và trường nhập liệu đều vượt độ tương phản 4.5:1 và tích hợp vòng nét tập trung (focus-visible rings) đầy đủ.</p>
          <p>• <strong>SEO chuẩn cấu trúc:</strong> Tự động nhúng sơ đồ định dạng dữ liệu có cấu trúc JSON-LD Product/Offer để hiển thị đánh giá sao và giá bán trực tiếp trên Google.</p>
        </div>
      </div>
    ),
  },
];

const mockProducts = [
  {
    id: "vase",
    title: "Bình gốm Ceramic Sola",
    price: "150.000đ",
    numericPrice: 150,
    imageSrc: "/asset/img/vase.jpg",
    category: "ceramic",
    swatches: [
      { name: "Chalk", colorClass: "bg-[#F3EFE9]" },
      { name: "Ochre", colorClass: "bg-[#D2B48C]" },
    ],
  },
  {
    id: "candle",
    title: "Nến thơm Amberwood Organic",
    price: "85.000đ",
    numericPrice: 85,
    imageSrc: "/asset/img/candle.jpg",
    category: "candle",
    swatches: [
      { name: "Amber", colorClass: "bg-[#FFBF00]" },
      { name: "Sage", colorClass: "bg-[#8FBC8F]" },
    ],
  },
  {
    id: "dripper",
    title: "Dripper Stoneware Cà phê",
    price: "195.000đ",
    numericPrice: 195,
    imageSrc: "/asset/img/dripper.jpg",
    category: "stoneware",
    swatches: [
      { name: "Stone", colorClass: "bg-[#708090]" },
      { name: "Clay", colorClass: "bg-[#CD853F]" },
    ],
  },
];

export default function EcommerceShowcase() {
  const [activeTab, setActiveTab] = React.useState<"demo" | "blueprint">("demo");
  
  // Showcase Live States
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [priceRange, setPriceRange] = React.useState<number>(200);
  const [cart, setCart] = React.useState<Array<{ id: string; size: string; color: string }>>([]);
  const [showCheckout, setShowCheckout] = React.useState<boolean>(false);
  const [successOrder, setSuccessOrder] = React.useState<boolean>(false);

  // Documentation States
  const [selectedDocIndex, setSelectedDocIndex] = React.useState<number>(0);

  const handleAddToCart = (id: string, size: string, color: string) => {
    setCart((prev) => [...prev, { id, size, color }]);
    setSuccessOrder(false); // reset success state if new item is added
  };

  const handleClearFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setPriceRange(200);
  };

  const filteredProducts = mockProducts.filter((prod) => {
    const matchCat = activeCategory === "all" || prod.category === activeCategory;
    const matchSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchPrice = prod.numericPrice <= priceRange;
    return matchCat && matchSearch && matchPrice;
  });

  const getCartTotalAmount = (): string => {
    let sum = 0;
    cart.forEach((item) => {
      const prod = mockProducts.find((p) => p.id === item.id);
      if (prod) sum += prod.numericPrice;
    });
    return `${sum}.000đ`;
  };

  return (
    <div className="flex flex-col flex-1 w-full py-16 lg:py-24 space-y-16">
      {/* 1. Page Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <span className="text-sm font-semibold text-secondary uppercase tracking-[0.2em] font-medium block">
          Khả năng kỹ thuật
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance leading-tight">
          Giải pháp <span className="text-primary italic font-normal font-serif">E-Commerce</span> Cao cấp
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
          Nghiên cứu kiến trúc Composable Headless kết hợp giao diện mô-đun tối giản, tối ưu chuyển đổi và khả năng truy cập cao.
        </p>

        {/* Tab Switcher */}
        <div className="flex justify-center pt-8">
          <div className="inline-flex rounded-full bg-muted p-1 border border-border">
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all cursor-pointer",
                activeTab === "demo"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab("demo")}
            >
              <ShoppingBag className="h-3.5 w-3.5 text-primary" />
              Trải nghiệm thực tế (Live Demo)
            </button>
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all cursor-pointer",
                activeTab === "blueprint"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveTab("blueprint")}
            >
              <BookOpen className="h-3.5 w-3.5 text-secondary" />
              Tài liệu kiến trúc (Blueprint)
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Area */}
      <section className="mx-auto max-w-7xl w-full px-6 lg:px-8">
        {activeTab === "demo" ? (
          /* Live Demo Grid Layout (Asymmetric bento pattern) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar Column (Grid Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <EcommerceFilters
                activeCategory={activeCategory}
                onChangeCategory={setActiveCategory}
                searchQuery={searchQuery}
                onChangeSearch={setSearchQuery}
                priceRange={priceRange}
                onChangePrice={setPriceRange}
                onClearAll={handleClearFilters}
              />

              {/* Cart Drawer Indicator Card */}
              <div className="bg-muted border border-border p-2 rounded-[24px]">
                <div className="bg-card border border-border/40 p-6 rounded-[18px] text-left space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-foreground">Giỏ hàng của bạn</span>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {cart.length} món
                    </span>
                  </div>
                  
                  {cart.length > 0 ? (
                    <div className="space-y-4">
                      <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                        {cart.map((item, idx) => {
                          const prod = mockProducts.find((p) => p.id === item.id);
                          return (
                            <div key={idx} className="flex justify-between items-center text-xs border-b border-border/40 pb-2">
                              <div>
                                <span className="font-bold text-foreground block">{prod?.title}</span>
                                <span className="text-muted-foreground text-[10px] uppercase">Size {item.size} • {item.color}</span>
                              </div>
                              <span className="font-mono font-semibold text-foreground">{prod?.price}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="flex justify-between text-sm pt-2 border-t border-border/80">
                        <span className="font-bold text-foreground">Tổng phụ:</span>
                        <span className="font-mono font-bold text-secondary">{getCartTotalAmount()}</span>
                      </div>

                      {!showCheckout ? (
                        <button
                          type="button"
                          className="w-full bg-secondary text-secondary-foreground font-bold rounded-full py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] shadow-button"
                          onClick={() => {
                            setShowCheckout(true);
                            setSuccessOrder(false);
                          }}
                        >
                          Tiến hành thanh toán <ArrowRight className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="w-full border border-border hover:bg-muted text-foreground font-bold rounded-full py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                          onClick={() => setShowCheckout(false)}
                        >
                          Quay lại cửa hàng
                        </button>
                      )}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground text-center py-4">
                      Giỏ hàng đang trống. Hãy chọn sản phẩm ưa thích bên phải.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Catalog or Checkout Grid Column (Grid Span 8) */}
            <div className="lg:col-span-8">
              {showCheckout && cart.length > 0 ? (
                /* Interactive Checkout Flow */
                <CheckoutTracker
                  cartItemsCount={cart.length}
                  totalAmount={getCartTotalAmount()}
                  onSuccess={() => {
                    setCart([]);
                    setSuccessOrder(true);
                  }}
                />
              ) : (
                /* Product Catalog List */
                <div className="space-y-6">
                  {/* Grid layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((prod) => (
                        <EcommerceCard
                          key={prod.id}
                          id={prod.id}
                          title={prod.title}
                          price={prod.price}
                          imageSrc={prod.imageSrc}
                          category={prod.category}
                          swatches={prod.swatches}
                          onAddToCart={handleAddToCart}
                        />
                      ))
                    ) : (
                      <div className="col-span-2 bg-card border border-border p-12 rounded-[20px] text-center space-y-3">
                        <p className="text-sm font-bold text-foreground">Không tìm thấy sản phẩm nào</p>
                        <p className="text-xs text-muted-foreground">Vui lòng thử xóa bớt bộ lọc hoặc thay đổi từ khóa tìm kiếm.</p>
                        <button
                          type="button"
                          className="bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-primary/20 active:scale-95"
                          onClick={handleClearFilters}
                        >
                          Đặt lại bộ lọc
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {successOrder && (
                    <div className="bg-primary/10 border border-primary/20 rounded-[16px] p-6 text-left space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-500">
                      <span className="font-display font-bold text-primary text-lg block">Xác nhận thanh toán hoàn tất</span>
                      <p className="text-sm text-muted-foreground">Đơn hàng mô phỏng đã được ghi nhận. Bạn có thể kéo lên để xem tài liệu chi tiết hoặc tiếp tục thêm sản phẩm để trải nghiệm lại.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
          </div>
        ) : (
          /* Editorial Split-screen Layout for Documentation (Blueprint Tab) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            {/* Left Nav Spine (Grid Span 4) */}
            <div className="lg:col-span-4 flex flex-col space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-3 block">Mục lục tài liệu</span>
              {docsData.map((doc, idx) => {
                const isSelected = selectedDocIndex === idx;
                return (
                  <button
                    key={doc.id}
                    type="button"
                    className={cn(
                      "w-full text-left p-4 rounded-[14px] border transition-all flex items-center justify-between cursor-pointer active:scale-99",
                      isSelected
                        ? "bg-card border-primary text-foreground shadow-card-subtle"
                        : "border-transparent hover:bg-card/40 hover:border-border/40 text-muted-foreground"
                    )}
                    onClick={() => setSelectedDocIndex(idx)}
                  >
                    <div className="space-y-1 pr-4">
                      <span className={cn("text-sm font-bold block", isSelected ? "text-primary" : "text-foreground")}>
                        {doc.title}
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                        {doc.subtitle.substring(0, 35)}...
                      </span>
                    </div>
                    <ChevronRight className={cn("h-4 w-4 shrink-0 transition-transform", isSelected ? "text-primary translate-x-0.5" : "text-muted-foreground/40")} />
                  </button>
                );
              })}
            </div>

            {/* Right Document Display Core (Grid Span 8) - Double-Bezel layout */}
            <div className="lg:col-span-8 bg-muted/40 border border-border p-2 rounded-[24px]">
              <div className="bg-card border border-border/40 p-8 sm:p-10 rounded-[18px] shadow-card-subtle space-y-6">
                <div className="space-y-2 pb-4 border-b border-border/60">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    {docsData[selectedDocIndex].title}
                  </h2>
                  <p className="text-xs uppercase tracking-wider font-bold text-secondary">
                    {docsData[selectedDocIndex].subtitle}
                  </p>
                </div>
                
                <div className="prose prose-sm text-foreground max-w-none">
                  {docsData[selectedDocIndex].content}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
