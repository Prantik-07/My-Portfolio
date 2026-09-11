import Reveal from "@/components/Reveal";
import ScrollRevealText from "@/components/ScrollRevealText";
import { NumberTicker } from "@/components/ui/number-ticker";
import { profile } from "@/data/profile";

export default function Statement() {
  return (
    <section id="about" className="border-t py-20 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="container">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive)" }}>
            02 — whoami.txt
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <Reveal delay={0.05} className="min-w-0">
            <h2 className="max-w-2xl text-4xl leading-[1.05] sm:text-5xl">
              I build systems that hold up outside the notebook.
            </h2>
            <div className="mt-8 min-w-0">
              <ScrollRevealText
                texts={profile.bio}
                className="max-w-xl break-words text-base leading-relaxed sm:text-lg"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-32 w-32 rounded-2xl border object-cover"
              style={{ borderColor: "var(--border)" }}
            />
            <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive)" }}>
                Quick facts
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm" style={{ color: "var(--ink)" }}>
                <li>Handle: @{profile.handle}</li>
                <li>Role: {profile.role}</li>
                <li>On GitHub since {profile.memberSince}</li>
                <li>15+ public repositories</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border sm:grid-cols-4" style={{ borderColor: "var(--border)", background: "var(--border)" }}>
          {profile.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.06}
              className="px-6 py-8 text-left"
              style={{ background: "var(--card)" }}
            >
              <p className="font-heading text-3xl font-semibold sm:text-4xl" style={{ color: "var(--ink)" }}>
                {stat.label === "Public repos" ? (
                  <>
                    <NumberTicker value={15} />+
                  </>
                ) : (
                  stat.value
                )}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide" style={{ color: "var(--text-soft)" }}>
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
