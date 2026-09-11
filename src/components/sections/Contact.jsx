import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import GithubIcon from "@/components/icons/GithubIcon";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="border-t py-24 sm:py-32" style={{ borderColor: "var(--border)", background: "var(--olive)" }}>
      <div className="container">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--olive-light)" }}>
            05 — Contact
          </p>
          <h2 className="max-w-2xl text-4xl leading-[1.05] sm:text-6xl" style={{ color: "var(--bg)" }}>
            Let's build something worth shipping.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg" style={{ color: "var(--olive-light)" }}>
            Open to collaborations, roles, and interesting problems in ML, agentic systems, and
            automation. The fastest way to reach me right now is through GitHub.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
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
        </Reveal>
      </div>
    </section>
  );
}
