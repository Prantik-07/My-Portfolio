import { Bot, BrainCircuit, Accessibility } from "lucide-react";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

const focusIcons = [Bot, BrainCircuit, Accessibility];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t py-20 sm:py-28"
      style={{
        borderColor: "color-mix(in srgb, var(--bg) 15%, transparent)",
        background: [
          "radial-gradient(60% 40% at 50% 100%, color-mix(in srgb, var(--bg) 30%, var(--ink) 70%) 0%, var(--ink) 100%)",
          "radial-gradient(90% 65% at 50% 88%, color-mix(in srgb, var(--olive) 75%, var(--ink) 25%) 0%, var(--ink) 100%)",
          "var(--ink)",
        ].join(", "),
      }}
    >
      <div className="container">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive-light)" }}>
            03 — Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl" style={{ color: "var(--bg)" }}>
            What I actually work on.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {profile.focusAreas.map((area, i) => {
            const Icon = focusIcons[i];
            return (
              <Reveal
                key={area.title}
                delay={i * 0.08}
                className="flex flex-col justify-between gap-6 rounded-3xl border p-7"
                style={{
                  borderColor: "color-mix(in srgb, var(--bg) 18%, transparent)",
                  background: "color-mix(in srgb, var(--card) 10%, transparent)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{
                    background: "color-mix(in srgb, var(--olive-light) 20%, transparent)",
                    color: "var(--olive-light)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--bg)" }}>
                    {area.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "color-mix(in srgb, var(--bg) 65%, transparent)" }}
                  >
                    {area.description}
                  </p>
                </div>
              </Reveal>
            );
          })}

          <Reveal
            delay={0.24}
            className="flex flex-col gap-4 rounded-3xl border p-7"
            style={{
              borderColor: "color-mix(in srgb, var(--bg) 18%, transparent)",
              background: "color-mix(in srgb, var(--card) 10%, transparent)",
            }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "color-mix(in srgb, var(--bg) 55%, transparent)" }}
            >
              Tech stack
            </span>
            <div className="flex flex-wrap gap-2">
              {profile.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-3.5 py-1.5 text-xs font-medium"
                  style={{
                    borderColor: "color-mix(in srgb, var(--bg) 20%, transparent)",
                    color: "var(--bg)",
                    background: "color-mix(in srgb, var(--card) 8%, transparent)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
