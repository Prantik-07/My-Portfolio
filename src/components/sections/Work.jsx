import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.filter((p) => p.featured);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getDistance = () => Math.max(0, track.scrollWidth - section.offsetWidth);

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [showAll]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="overflow-hidden border-t pb-20 pt-10 sm:pb-28 sm:pt-14"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="container">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p
              className="font-detail mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--olive)" }}
            >
              01 — Work
            </p>
            <h2 className="max-w-xl text-4xl sm:text-5xl">Things I've shipped.</h2>
          </div>
          <button
            onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-colors hover:border-[var(--olive)]"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            {showAll ? "Featured only" : "All repos"} <ArrowUpRight size={13} />
          </button>
        </Reveal>
      </div>

      <div ref={trackRef} className="flex w-max gap-5 px-5 will-change-transform sm:px-10">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            className="w-[85vw] max-w-[860px] flex-none"
          />
        ))}
      </div>
    </section>
  );
}
