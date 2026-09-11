import { useEffect, useMemo, useState } from "react";
import { useLenis } from "lenis/react";
import { profile } from "@/data/profile";

const BAR_HEIGHT = 50;
const TRACK_INSET = 26;
const BAR_COUNT = 60;
const BARS_AREA_HEIGHT = 30;

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [now, setNow] = useState(() => new Date());

  const barHeights = useMemo(
    () => Array.from({ length: BAR_COUNT }, () => 25 + Math.random() * 75),
    []
  );

  useLenis(({ progress: p }) => {
    setProgress(p);
  });

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pct = Math.round(progress * 100);
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex items-stretch border-b backdrop-blur-xl backdrop-saturate-150"
      style={{
        height: BAR_HEIGHT,
        borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
        background: "color-mix(in srgb, var(--card) 85%, transparent)",
      }}
    >
      <div className="flex shrink-0 items-center gap-2 pl-4 pr-3 sm:pl-5">
        <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: "var(--olive)" }} />
        <span
          className="hidden font-heading text-xs font-semibold uppercase tracking-[0.2em] sm:inline"
          style={{ color: "var(--ink)" }}
        >
          {profile.name}
        </span>
      </div>

      <div className="relative min-w-0 flex-1 select-none">
        <div className="absolute inset-y-0" style={{ left: TRACK_INSET, right: TRACK_INSET }}>
          <div className="absolute z-10 -translate-x-1/2" style={{ left: `${pct}%`, top: 6 }}>
            <div
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white shadow-md"
              style={{ background: "var(--olive)" }}
            >
              {pct}%
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 flex items-end gap-[3px]"
            style={{ height: BARS_AREA_HEIGHT }}
          >
            {barHeights.map((h, i) => {
              const barPct = (i / (barHeights.length - 1)) * 100;
              const active = barPct <= pct;
              return (
                <div
                  key={i}
                  className="min-w-[1px] flex-1 rounded-t-sm transition-colors duration-150"
                  style={{
                    height: `${h}%`,
                    background: active
                      ? "var(--olive)"
                      : "color-mix(in srgb, var(--ink) 14%, transparent)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 pl-3 pr-4 sm:pr-5">
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            style={{ background: "#3fae5c" }}
          />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#3fae5c" }} />
        </span>
        <span
          className="font-detail hidden text-[11px] font-semibold uppercase tracking-widest sm:inline"
          style={{ color: "var(--ink)" }}
        >
          Live
        </span>
        <span className="hidden text-[11px] tabular-nums sm:inline" style={{ color: "var(--text-soft)" }}>
          · {time}
        </span>
      </div>
    </div>
  );
}
