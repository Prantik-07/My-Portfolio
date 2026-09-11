import Reveal from "@/components/Reveal";
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

        <Reveal
          delay={0.1}
          className="overflow-hidden rounded-3xl border"
          style={{ borderColor: "var(--border)", background: "var(--card)" }}
        >
          <div
            className="flex items-center gap-2 border-b px-6 py-4"
            style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--olive)" }} />
            <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
              #build-log
            </span>
          </div>
          <ul>
            {profile.process.map((item, i) => (
              <li
                key={item.step}
                className="flex flex-col gap-1 border-b px-6 py-6 last:border-b-0 sm:flex-row sm:items-start sm:gap-6"
                style={{ borderColor: "var(--border)" }}
              >
                <span
                  className="font-heading text-sm font-semibold sm:w-10 sm:shrink-0"
                  style={{ color: "var(--olive)" }}
                >
                  {item.step}
                </span>
                <div>
                  <p className="text-base font-semibold" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
