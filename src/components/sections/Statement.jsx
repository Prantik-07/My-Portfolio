import Reveal from "@/components/Reveal";
import ScrollRevealText from "@/components/ScrollRevealText";
import CommitBattery from "@/components/CommitBattery";
import { NumberTicker } from "@/components/ui/number-ticker";
import { profile } from "@/data/profile";

export default function Statement() {
  return (
    <section
      id="about"
      className="border-t pb-10 pt-20 sm:pb-14 sm:pt-28"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="container">
        <Reveal>
          <p className="font-detail mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive)" }}>
            01 — whoami.txt
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <Reveal delay={0.05} className="min-w-0">
            <h2 className="max-w-2xl text-4xl leading-[1.05] sm:text-5xl">
              I build systems that hold up outside the notebook.
            </h2>
            <div className="mt-8 min-w-0">
              <ScrollRevealText
                texts={profile.about.map((t) => t.replace(/\*\*/g, ""))}
                className="max-w-xl break-words text-base leading-relaxed sm:text-lg"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="grid min-w-0 grid-cols-2 gap-3">
            <div className="col-span-2">
              <CommitBattery />
            </div>
            {profile.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={0.2 + i * 0.06}
                className="rounded-2xl border p-4"
                style={{ borderColor: "var(--border)", background: "var(--card)" }}
              >
                <p className="font-heading text-2xl font-semibold sm:text-3xl" style={{ color: "var(--ink)" }}>
                  {stat.label === "Public repos" ? (
                    <>
                      <NumberTicker value={15} />+
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="font-detail mt-1 text-xs uppercase tracking-wide" style={{ color: "var(--text-soft)" }}>
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
