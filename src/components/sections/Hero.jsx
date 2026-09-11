import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import VariableProximity from "@/components/ui/variable-proximity";

export default function Hero() {
  const ref = useRef(null);
  const nameRef = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="top" className="relative flex h-screen flex-col justify-end" ref={ref}>
      <div className="container relative mb-[20vh] flex flex-col items-center gap-8 py-16 text-center sm:py-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-sm font-semibold uppercase tracking-[0.3em] sm:text-base"
          style={{ color: "color-mix(in srgb, var(--bg) 65%, transparent)" }}
        >
          Code × Data × Intelligence
        </motion.p>

        <span className="block overflow-hidden">
          <motion.span
            ref={nameRef}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block text-[15vw] font-semibold uppercase leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[7.5rem]"
            style={{ color: "var(--bg)" }}
          >
            <VariableProximity
              label="Prantik"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={nameRef}
              radius={160}
              falloff="linear"
            />
          </motion.span>
        </span>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest sm:text-base"
          style={{ color: "color-mix(in srgb, var(--bg) 65%, transparent)" }}
        >
          AI/ML Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
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
