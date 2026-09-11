import { ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ProjectCard({ project, className = "" }) {
  return (
    <div
      className={`flex flex-col justify-between gap-8 rounded-3xl border p-7 transition-colors hover:border-[var(--olive)] ${className}`}
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <div>
        <div className="mb-5 flex items-center justify-between">
          <span
            className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
            style={{ background: "var(--olive-tint)", color: "var(--olive-dark)" }}
          >
            {project.language}
          </span>
          {project.featured && (
            <span className="text-[11px] font-medium uppercase tracking-wide" style={{ color: "var(--text-soft)" }}>
              Featured
            </span>
          )}
        </div>
        <h3 className="mb-2 font-heading text-xl font-semibold" style={{ color: "var(--ink)" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
          {project.description}
        </p>
        {project.topics?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full px-2.5 py-1 text-[10px] font-medium"
                style={{ background: "var(--bg-alt)", color: "var(--text-soft)" }}
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-5 border-t pt-5" style={{ borderColor: "var(--border)" }}>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
          style={{ color: "var(--ink)" }}
        >
          <GithubIcon size={14} /> Source
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--olive)" }}
          >
            Live <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
