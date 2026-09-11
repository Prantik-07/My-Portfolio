import Reveal from "@/components/Reveal";
import { LogoLoop } from "@/components/ui/logo-loop";
import { profile } from "@/data/profile";

const TECH_ICON_SLUGS = {
  Python: "python",
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  Streamlit: "streamlit",
  Wagtail: "wagtail",
};

const techLogos = profile.techStack.map((tech) => {
  const slug = TECH_ICON_SLUGS[tech];
  return {
    title: tech,
    node: (
      <span
        className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
        style={{ borderColor: "var(--border)", color: "var(--ink)", background: "var(--card)" }}
      >
        {slug && <img src={`https://cdn.simpleicons.org/${slug}`} alt="" className="h-4 w-4" loading="lazy" />}
        {tech}
      </span>
    ),
  };
});

export default function Skills() {
  return (
    <section id="skills" className="border-t py-20 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto w-[80%]">
        <Reveal>
          <LogoLoop
            logos={techLogos}
            speed={24}
            gap={20}
            logoHeight={40}
            fadeOut
            fadeOutColor="var(--bg)"
            pauseOnHover
            scaleOnHover
            ariaLabel="Tech stack"
          />
        </Reveal>
      </div>
    </section>
  );
}
