import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, UserRound, Briefcase, ListChecks, Mail } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import GithubIcon from "@/components/icons/GithubIcon";
import { profile } from "@/data/profile";

const items = [
  { href: "#top", label: "Top", Icon: Home },
  { href: "#about", label: "About", Icon: UserRound },
  { href: "#work", label: "Work", Icon: Briefcase },
  { href: "#process", label: "Process", Icon: ListChecks },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function BottomDock() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = items
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
    >
      <Dock
        className="backdrop-blur-xl backdrop-saturate-150"
        style={{
          borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
          background: "color-mix(in srgb, var(--card) 55%, transparent)",
          boxShadow:
            "inset 0 1px 0 color-mix(in srgb, var(--bg) 70%, transparent), 0 8px 30px rgba(35, 40, 26, 0.12)",
        }}
      >
        {items.map(({ href, label, Icon }) => {
          const isActive = active === href.slice(1);
          return (
            <DockIcon key={href}>
              <a
                href={href}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                className="flex h-full w-full items-center justify-center rounded-full transition-colors hover:opacity-70"
                style={{
                  color: isActive ? "var(--olive)" : "var(--ink)",
                  background: isActive ? "var(--olive-tint)" : "transparent",
                }}
              >
                <Icon size={18} />
              </a>
            </DockIcon>
          );
        })}

        <div className="mx-1 h-8 w-px self-center" style={{ background: "var(--border)" }} />

        <DockIcon>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-full w-full items-center justify-center rounded-full transition-colors hover:opacity-70"
            style={{ color: "var(--ink)" }}
          >
            <GithubIcon size={18} />
          </a>
        </DockIcon>
      </Dock>
    </motion.div>
  );
}
