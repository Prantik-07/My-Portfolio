import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

function Word({ children, i }) {
  return (
    <motion.span
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20" ref={ref}>
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{ background: "var(--olive-light)" }}
      />
      <div className="container relative py-16 sm:py-24">
        <h1 className="max-w-4xl text-[15vw] font-semibold uppercase leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[7.5rem]">
          <span className="block overflow-hidden" style={{ color: "var(--olive)" }}>
            <Word i={0}>{profile.heroHeadline[0]}</Word>
          </span>
          <span className="block overflow-hidden" style={{ color: "var(--ink)" }}>
            <Word i={1}>{profile.heroHeadline[1]}</Word>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-lg text-lg font-medium sm:text-xl"
          style={{ color: "var(--text)" }}
        >
          {profile.heroSub}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 max-w-lg text-sm sm:text-base"
          style={{ color: "var(--text-soft)" }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--olive)", color: "var(--bg)" }}
          >
            See the work
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-110"
              style={{ background: "var(--olive-dark)" }}
            >
              <ArrowRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
