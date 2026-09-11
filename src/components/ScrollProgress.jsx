import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { profile } from "@/data/profile";

const BAR_HEIGHT = 50;
const BASELINE = 27;
const TRACK_INSET = 26;
const TICKS = Array.from({ length: 51 }, (_, i) => i * 2);

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [now, setNow] = useState(() => new Date());

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
          <div
            className="absolute left-0 top-0 z-0"
            style={{
              width: `${pct}%`,
              height: BAR_HEIGHT,
              background: "color-mix(in srgb, var(--olive) 16%, transparent)",
            }}
          />

          <div
            className="absolute left-0 right-0"
            style={{
              top: BASELINE,
              height: 1,
              background: "color-mix(in srgb, var(--ink) 16%, transparent)",
            }}
          />

          {TICKS.map((t) => {
            const major = t % 10 === 0;
            return (
              <span
                key={`tick-${t}`}
                className="absolute"
                style={{
                  left: `${t}%`,
                  top: major ? BASELINE - 12 : BASELINE - 7,
                  width: 1,
                  height: major ? 12 : 7,
                  background: major
                    ? "var(--text-soft)"
                    : "color-mix(in srgb, var(--ink) 22%, transparent)",
                }}
              />
            );
          })}

          {TICKS.filter((t) => t % 10 === 0).map((t) => {
            const edgeTransform =
              t === 0 ? "translateX(0)" : t === 100 ? "translateX(-100%)" : "translateX(-50%)";
            return (
              <span
                key={`label-${t}`}
                className="absolute hidden text-[10px] font-medium tabular-nums sm:block"
                style={{
                  left: `${t}%`,
                  top: BASELINE + 4,
                  color: "var(--text-soft)",
                  transform: edgeTransform,
                }}
              >
                {t}
              </span>
            );
          })}

          <div className="absolute z-10 -translate-x-1/2" style={{ left: `${pct}%`, top: 6 }}>
            <div
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white shadow-md"
              style={{ background: "var(--olive)" }}
            >
              {pct}%
            </div>
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
          className="hidden text-[11px] font-semibold uppercase tracking-widest sm:inline"
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
