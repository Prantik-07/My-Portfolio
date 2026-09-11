import { useState } from "react";
import { useLenis } from "lenis/react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useLenis(({ progress: p }) => {
    setProgress(p);
  });

  const pct = Math.round(progress * 100);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-1"
      style={{ background: "color-mix(in srgb, var(--border) 50%, transparent)" }}
    >
      <div className="h-full" style={{ width: `${pct}%`, background: "var(--olive)" }} />
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
  );
}
