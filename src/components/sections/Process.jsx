import { Target, Zap, FlaskConical, ShieldCheck, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

const stepIcons = [Target, Zap, FlaskConical, ShieldCheck, Rocket];

export default function Process() {
  const [gridSteps, featureStep] = [profile.process.slice(0, 4), profile.process[4]];

  return (
    <section id="process" className="border-t py-20 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="container">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive)" }}>
            04 — Process
          </p>
          <h2 className="text-4xl sm:text-5xl">How it actually gets built.</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {gridSteps.map((item, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal
                key={item.step}
                delay={i * 0.08}
                className="flex flex-col justify-between gap-6 rounded-3xl border p-7"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{ background: "color-mix(in srgb, var(--olive) 14%, var(--card))", color: "var(--olive-dark)" }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="font-heading text-sm font-semibold" style={{ color: "var(--text-soft)" }}>
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}

          {featureStep && (
            <Reveal
              delay={0.32}
              className="flex flex-col justify-between gap-6 rounded-3xl p-7 sm:col-span-2 sm:flex-row sm:items-center"
              style={{ background: "var(--olive)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: "color-mix(in srgb, var(--olive-light) 25%, transparent)", color: "var(--olive-light)" }}
                >
                  <Rocket size={20} />
                </div>
                <span className="font-heading text-sm font-semibold" style={{ color: "var(--olive-light)" }}>
                  {featureStep.step}
                </span>
              </div>
              <div className="sm:flex-1">
                <h3 className="text-lg font-semibold" style={{ color: "var(--bg)" }}>
                  {featureStep.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed" style={{ color: "var(--olive-light)" }}>
                  {featureStep.detail}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
