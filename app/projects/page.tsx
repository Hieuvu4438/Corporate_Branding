import { ProjectSwitcher } from "@/components/project-switcher";

export default function Projects() {
  return (
    <div className="flex flex-col flex-1 w-full py-16 lg:py-24 space-y-16">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
          Dự án tiêu biểu
        </span>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl text-balance">
          Case Studies thực tế thiết kế bởi HopeRise
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
          Xem chi tiết giao diện các ứng dụng kỹ thuật số chất lượng cao được thiết kế nhằm đem lại sự hài lòng tối đa.
        </p>
      </section>

      {/* Switcher Component Wrapper */}
      <section className="mx-auto max-w-7xl w-full px-6 lg:px-8">
        <ProjectSwitcher />
      </section>
    </div>
  );
}
