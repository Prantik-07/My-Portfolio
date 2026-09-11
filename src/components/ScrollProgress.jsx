import { useState } from "react";
import { useLenis } from "lenis/react";

const sections = ["top", "about", "work", "skills", "process", "contact"];

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useLenis(({ progress: p }) => {
    setProgress(p);

    let index = 0;
    sections.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
        index = i;
      }
    });
    setActiveIndex(index);
  });

  const pct = Math.round(progress * 100);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-50 h-1"
        style={{ background: "color-mix(in srgb, var(--border) 50%, transparent)" }}
      >
        <div
          className="h-full"
          style={{ width: `${pct}%`, background: "var(--olive)" }}
        />
        <div
          className="absolute top-2.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white shadow-md"
          style={{
            left: `clamp(24px, ${pct}%, calc(100% - 24px))`,
            transform: "translateX(-50%)",
            background: "var(--olive)",
          }}
        >
          {pct}%
        </div>
      </div>

      <div
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tabular-nums backdrop-blur-xl backdrop-saturate-150"
        style={{
          borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
          background: "color-mix(in srgb, var(--card) 55%, transparent)",
          color: "var(--ink)",
          boxShadow:
            "inset 0 1px 0 color-mix(in srgb, var(--bg) 70%, transparent), 0 8px 30px rgba(35, 40, 26, 0.12)",
        }}
      >
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
        </span>
        <span style={{ color: "var(--border)" }}>·</span>
        <span>{pct}%</span>
      </div>
    </>
  );
}
