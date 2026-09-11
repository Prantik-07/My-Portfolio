import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ProjectCard({ project, index = 0, className = "" }) {
  const [open, setOpen] = useState(false);
  const words = project.title.split(" ");
  const lastWord = words.pop();
  const leadWords = words.join(" ");

  return (
    <div
      className={`flex flex-col rounded-[32px] border p-7 sm:p-9 ${className}`}
      style={{ borderColor: "var(--border)", background: "var(--card)" }}
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl font-heading text-lg font-bold"
            style={{ background: "color-mix(in srgb, var(--olive) 12%, var(--card))", color: "var(--olive-dark)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-3xl leading-[1.05] sm:text-4xl" style={{ color: "var(--ink)" }}>
            {leadWords && <>{leadWords}<br /></>}
            <span className="font-bold" style={{ color: "var(--olive)" }}>
              {lastWord}.
            </span>
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>
            {project.description}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
          <div
            className="flex items-center gap-1.5 border-b px-4 py-3"
            style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#e5988a" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#e8c98a" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#9dbf8e" }} />
            <div className="ml-3 h-2 flex-1 rounded-full" style={{ background: "var(--border)" }} />
          </div>
          <div
            className="flex h-[200px] flex-col items-center justify-center gap-2 sm:h-[240px]"
            style={{ background: "var(--ink)" }}
          >
            <span
              className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
              style={{ background: "color-mix(in srgb, var(--olive) 35%, transparent)", color: "var(--bg)" }}
            >
              {project.language}
            </span>
            <span className="font-heading text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--bg)" }}>
              {project.name}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-8 flex items-center justify-between gap-4 rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-[var(--olive)]"
        style={{ borderColor: "var(--border)", color: "var(--ink)" }}
        aria-expanded={open}
      >
        See process + deliverables
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform"
          style={{ background: "var(--olive)", color: "var(--bg)", transform: open ? "rotate(180deg)" : "none" }}
        >
          <ChevronDown size={14} />
        </span>
      </button>

      {open && (
        <div className="mt-8 grid gap-8 border-t pt-8 sm:grid-cols-2" style={{ borderColor: "var(--border)" }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-soft)" }}>
              The work
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text)" }}>
              {project.description}
            </p>
            <div className="mt-5 flex items-center gap-5">
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

          {project.topics?.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-soft)" }}>
                Deliverables
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {project.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-xl border px-3 py-2.5 text-center text-xs font-medium"
                    style={{ borderColor: "var(--border)", background: "var(--bg-alt)", color: "var(--text)" }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
