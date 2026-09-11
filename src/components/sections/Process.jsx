import Reveal from "@/components/Reveal";
import Stepper, { Step } from "@/components/ui/stepper";
import { profile } from "@/data/profile";

export default function Process() {
  return (
    <section id="process" className="border-t py-20 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="container">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive)" }}>
            04 — Process
          </p>
          <h2 className="text-4xl sm:text-5xl">How it actually gets built.</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Stepper>
            {profile.process.map((item) => (
              <Step key={item.step}>
                <span className="font-heading text-sm font-semibold" style={{ color: "var(--olive)" }}>
                  {item.step}
                </span>
                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl" style={{ color: "var(--ink)" }}>
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: "var(--text)" }}>
                  {item.detail}
                </p>
              </Step>
            ))}
          </Stepper>
        </Reveal>
      </div>
    </section>
  );
}
