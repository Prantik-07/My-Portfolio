import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveHoverButton({ children, className, href, ...props }) {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      className={cn(
        "group relative inline-block cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center text-sm font-semibold",
        className
      )}
      style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--ink)" }}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div
          className="h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"
          style={{ background: "var(--olive)" }}
        />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100"
        style={{ color: "var(--bg)" }}
      >
        <span>{children}</span>
        <ArrowRight size={16} />
      </div>
    </Tag>
  );
}
