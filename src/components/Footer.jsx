import GithubIcon from "@/components/icons/GithubIcon";
import { profile } from "@/data/profile";

const links = [
  { to: "#work", label: "Work" },
  { to: "#about", label: "About" },
  { to: "#skills", label: "Skills" },
  { to: "#process", label: "Process" },
  { to: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: "var(--border)" }}>
      <div className="container flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#top" className="font-heading text-lg font-semibold" style={{ color: "var(--ink)" }}>
            {profile.name}
            <span style={{ color: "var(--olive)" }}>.</span>
          </a>
          <p className="mt-2 max-w-xs text-sm" style={{ color: "var(--text-soft)" }}>
            {profile.role} — building systems that hold up outside the notebook.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <a key={l.to} href={l.to} className="text-sm font-medium" style={{ color: "var(--text)" }}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--ink)" }}
        >
          <GithubIcon size={16} />@{profile.handle}
        </a>
      </div>

      <div className="container mt-8 border-t pt-6" style={{ borderColor: "var(--border)" }}>
        <p className="text-xs" style={{ color: "var(--text-soft)" }}>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
