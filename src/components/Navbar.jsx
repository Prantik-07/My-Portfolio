import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { profile } from "@/data/profile";

const links = [
  { to: "#work", label: "Work" },
  { to: "#about", label: "About" },
  { to: "#process", label: "Process" },
];

function useIsDesktop(breakpoint = 640) {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= breakpoint
  );

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isDesktop;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const cardVisible = isDesktop || open;

  return (
    <>
      <motion.button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed right-4 top-16 z-50 flex h-11 w-11 items-center justify-center rounded-full shadow-md backdrop-blur-xl backdrop-saturate-150 sm:hidden"
        style={{
          background: "color-mix(in srgb, var(--card) 55%, transparent)",
          boxShadow:
            "inset 0 1px 0 color-mix(in srgb, var(--bg) 70%, transparent), 0 8px 30px rgba(35, 40, 26, 0.12)",
          color: "var(--ink)",
        }}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </motion.button>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 bg-black/30 transition-opacity duration-300 sm:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: cardVisible ? 0 : -16, opacity: cardVisible ? 1 : 0 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed right-4 top-16 z-40 w-48 rounded-3xl border-none shadow-md backdrop-blur-xl backdrop-saturate-150 sm:right-6 sm:top-20 sm:w-56 ${
          cardVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
          background: "color-mix(in srgb, var(--card) 55%, transparent)",
          boxShadow:
            "inset 0 1px 0 color-mix(in srgb, var(--bg) 70%, transparent), 0 8px 30px rgba(35, 40, 26, 0.12)",
        }}
      >
        <div className="flex flex-col gap-4 px-5 py-5">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="font-heading text-xl font-semibold"
            style={{ color: "var(--ink)" }}
          >
            {profile.name}
            <span style={{ color: "var(--olive)" }}>.</span>
          </a>

          <nav className="flex flex-col gap-2.5">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="group relative w-fit text-sm font-medium"
                style={{ color: "#000" }}
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{ background: "var(--olive)" }}
                />
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 border-t pt-4" style={{ borderColor: "color-mix(in srgb, var(--border) 60%, transparent)" }}>
            <InteractiveHoverButton href="#contact" onClick={() => setOpen(false)} className="w-full px-4 py-2 text-xs">
              Get in touch
            </InteractiveHoverButton>
          </div>
        </div>
      </motion.header>
    </>
  );
}
