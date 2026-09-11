import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Capabilities() {
  return (
    <section id="skills" className="border-t py-20 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="container">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive)" }}>
            03 — Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl">What I actually work on.</h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl border sm:grid-cols-3" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
          {profile.focusAreas.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 0.08}
              className="flex flex-col gap-3 px-7 py-10"
              style={{ background: "var(--card)" }}
            >
              <span className="font-heading text-sm font-semibold" style={{ color: "var(--olive)" }}>
                0{i + 1}
              </span>
              <h3 className="text-lg font-semibold" style={{ color: "var(--ink)" }}>
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                {area.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-2.5">
          {profile.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-4 py-2 text-sm font-medium"
              style={{ borderColor: "var(--border)", color: "var(--ink)", background: "var(--card)" }}
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
