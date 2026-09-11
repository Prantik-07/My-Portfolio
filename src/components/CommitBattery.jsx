import { useEffect, useRef, useState } from "react";
import { GitCommitHorizontal } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { profile } from "@/data/profile";

const MILESTONE_STEP = 50;
const REFRESH_MS = 5 * 60 * 1000;

function useTotalCommits(username) {
  const [commits, setCommits] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchCommits() {
      try {
        const res = await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!res.ok) throw new Error("GitHub API error");
        const data = await res.json();
        if (!cancelled && typeof data.total_count === "number") {
          setCommits(data.total_count);
        }
      } catch {
        // keep last known value; widget just shows nothing new
      }
    }

    fetchCommits();
    const id = setInterval(fetchCommits, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [username]);

  return commits;
}

export default function CommitBattery() {
  const username = profile.github.split("/").pop();
  const commits = useTotalCommits(username);
  const circleRef = useRef(null);
  const circumference = 2 * Math.PI * 40;

  useEffect(() => {
    if (!circleRef.current || commits === null) return;
    const milestone = Math.max(MILESTONE_STEP, Math.ceil((commits + 1) / MILESTONE_STEP) * MILESTONE_STEP);
    const pct = Math.min(commits / milestone, 1);
    circleRef.current.style.transition = "stroke-dashoffset 0.6s ease";
    circleRef.current.style.strokeDashoffset = String(circumference - pct * circumference);
  }, [commits, circumference]);

  return (
    <div
      className="relative flex h-full min-h-[220px] flex-col rounded-3xl p-5 shadow-md"
      style={{ background: "linear-gradient(160deg, var(--olive) 0%, var(--olive-dark) 100%)" }}
    >
      <div className="flex items-center justify-between">
        <div className="relative size-14 shrink-0">
          <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden>
            <circle cx={50} cy={50} r={40} className="stroke-white/20" strokeWidth={8} fill="none" />
            <circle
              ref={circleRef}
              cx={50}
              cy={50}
              r={40}
              className="stroke-white"
              strokeWidth={8}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <GitCommitHorizontal className="text-white/90" size={20} strokeWidth={1.75} />
          </div>
        </div>

        <span className="font-detail flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/70">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          Live from GitHub
        </span>
      </div>

      <div className="mt-auto">
        <div className="flex items-baseline gap-1 text-white">
          <NumberTicker value={commits ?? 0} className="text-[40px] font-normal leading-none tabular-nums tracking-tight" />
          <span className="pb-1 text-sm font-medium leading-none text-white/70">commits</span>
        </div>
        <p className="mt-1 text-xs text-white/60">total, all-time · @{username}</p>
      </div>
    </div>
  );
}
