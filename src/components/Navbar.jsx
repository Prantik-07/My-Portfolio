import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { profile } from "@/data/profile";

const links = [
  { to: "#work", label: "Work" },
  { to: "#about", label: "About" },
  { to: "#skills", label: "Skills" },
  { to: "#process", label: "Process" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md w-[80%]"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
      }}
    >
      <div className="mx-auto flex w-[80%] items-center justify-between py-4">
        <a href="#top" className="font-heading text-lg font-semibold" style={{ color: "var(--ink)" }}>
          {profile.name}
          <span style={{ color: "var(--olive)" }}>.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--text)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors hover:border-[var(--olive)]"
            style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium"
            style={{ background: "var(--olive)", color: "var(--bg)" }}
          >
            Get in touch <ArrowUpRight size={13} />
          </a>
        </div>

        <button
          className="flex items-center justify-center rounded-full border p-2 md:hidden"
          style={{ borderColor: "var(--border)", color: "var(--ink)" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t md:hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="mx-auto flex w-[80%] flex-col gap-1 py-3">
              {links.map((l) => (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium"
                style={{ color: "var(--ink)" }}
              >
                <GithubIcon size={14} /> GitHub
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-1 flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium"
                style={{ background: "var(--olive)", color: "var(--bg)" }}
              >
                Get in touch <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
