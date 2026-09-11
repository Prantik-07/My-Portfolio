import { ArrowUpRight, ArrowUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import GithubIcon from "@/components/icons/GithubIcon";
import { profile } from "@/data/profile";

const exploreLinks = [
  { to: "#work", label: "Work" },
  { to: "#about", label: "About" },
  { to: "#skills", label: "Skills" },
  { to: "#process", label: "Process" },
];

const connectLinks = [
  { to: profile.github, label: "GitHub", external: true },
  { to: `mailto:${profile.email}`, label: "Email" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-t-[2.5rem] py-[3.24rem] sm:rounded-t-[3.5rem] sm:py-[4.05rem]"
      style={{ background: "var(--olive)" }}
    >
      <div className="container">
        <Reveal className="flex items-start justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive-light)" }}>
            05 — Contact
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-colors hover:border-[var(--bg)]"
            style={{ borderColor: "color-mix(in srgb, var(--bg) 30%, transparent)" }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
              style={{ background: "var(--bg)" }}
            />
            <ArrowUp size={16} className="relative z-10 text-[var(--bg)] transition-colors duration-300 group-hover:text-[var(--olive-dark)]" />
          </a>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal delay={0.05}>
            <p className="max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: "var(--olive-light)" }}>
              Open to collaborations, roles, and interesting problems in ML, agentic systems, and automation.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-4 inline-flex flex-wrap items-baseline gap-3 font-heading text-3xl font-semibold leading-tight sm:text-5xl"
              style={{ color: "var(--bg)" }}
            >
              {profile.email}
              <ArrowUpRight
                size={28}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--bg)", color: "var(--olive-dark)" }}
              >
                <GithubIcon size={18} />
                @{profile.handle}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <span className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--olive-light)" }}>
                <span className="h-2 w-2 rounded-full" style={{ background: "#8fd19e" }} />
                Open to opportunities
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive-light)" }}>
                Explore
              </p>
              <nav className="mt-4 flex flex-col gap-2.5">
                {exploreLinks.map((l) => (
                  <a key={l.to} href={l.to} className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: "var(--bg)" }}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive-light)" }}>
                Connect
              </p>
              <nav className="mt-4 flex flex-col gap-2.5">
                {connectLinks.map((l) => (
                  <a
                    key={l.to}
                    href={l.to}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    className="text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: "var(--bg)" }}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-[3.24rem] sm:mt-[4.05rem]">
          <a
            href="#top"
            className="block select-none font-heading font-semibold uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.835rem, 11.34vw, 8.91rem)" }}
          >
            {profile.name.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-200 ease-out hover:-translate-y-3"
                style={{ color: "var(--bg)" }}
              >
                {char}
              </span>
            ))}
            <span
              className="inline-block transition-transform duration-200 ease-out hover:-translate-y-3"
              style={{ color: "var(--olive-dark)" }}
            >
              .
            </span>
          </a>
        </Reveal>

        <div
          className="mt-8 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "color-mix(in srgb, var(--bg) 20%, transparent)", color: "var(--olive-light)" }}
        >
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
          </p>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium transition-opacity hover:opacity-70">
            <GithubIcon size={14} />@{profile.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
