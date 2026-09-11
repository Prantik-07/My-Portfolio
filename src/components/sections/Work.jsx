import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Work() {
  const scrollerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  const visible = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="work" className="border-t py-20 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="container">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--olive)" }}
            >
              01 — Work
            </p>
            <h2 className="max-w-xl text-4xl sm:text-5xl">Things I've shipped.</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-colors hover:border-[var(--olive)]"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              {showAll ? "Featured only" : "All repos"} <ArrowUpRight size={13} />
            </button>
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-[var(--olive)]"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-[var(--olive)]"
              style={{ borderColor: "var(--border)", color: "var(--ink)" }}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 overflow-x-auto px-5 pb-4 sm:px-10"
        >
          {visible.map((project) => (
            <ProjectCard key={project.name} project={project} className="w-[320px] flex-none sm:w-[380px]" />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
