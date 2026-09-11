import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import VariableProximity from "@/components/ui/variable-proximity";
import RollInText from "@/components/RollInText";
import { profile } from "@/data/profile";
import portrait from "@/assets/p.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef(null);
  const nameRef = useRef(null);
  const nameRollRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const heroEl = ref.current;
    const nameRollEl = nameRollRef.current;
    if (!heroEl || !nameRollEl) return;

    const ctx = gsap.context(() => {
      const leftParagraphs = leftTextRef.current?.querySelectorAll("p") ?? [];
      const rightParagraphs = rightTextRef.current?.querySelectorAll("p") ?? [];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          end: "+=105%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(nameRollEl, { yPercent: -130, duration: 1, ease: "none" }, 0)
        .to(nameRollEl, { opacity: 0, duration: 0.8, ease: "none" }, 0)
        .to(leftParagraphs, { opacity: 1, x: 0, duration: 1, ease: "none", stagger: 0.15 }, 1)
        .to(rightParagraphs, { opacity: 1, x: 0, duration: 1, ease: "none", stagger: 0.15 }, 1)
        .to({}, { duration: 1 });
    }, heroEl);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative flex h-screen flex-col justify-end" ref={ref}>
      <div className="absolute left-5 top-35 z-10 hidden flex-col gap-1 sm:left-10 sm:flex">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-detail text-sm font-semibold uppercase tracking-[0.3em] sm:text-base"
          style={{ color: "color-mix(in srgb, var(--bg) 65%, transparent)" }}
        >
          Code × Data × Intelligence
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-detail text-base font-semibold uppercase tracking-widest sm:text-lg"
          style={{ color: "color-mix(in srgb, var(--bg) 65%, transparent)" }}
        >
          AI/ML Engineer
        </motion.p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[38%] z-10 mx-auto hidden max-w-5xl justify-between px-8 xl:flex">
        <RollInText
          ref={leftTextRef}
          paragraphs={profile.bio.slice(0, 1)}
          side="left"
          tone="light"
          className="pointer-events-auto max-w-[240px]"
        />
        <RollInText
          ref={rightTextRef}
          paragraphs={profile.bio.slice(1)}
          side="right"
          tone="light"
          className="pointer-events-auto max-w-[240px] translate-y-[30%] text-right"
        />
      </div>

      <div className="container relative z-10 mb-0 flex flex-col items-center gap-8 pb-9 pt-16 text-center sm:pb-9 sm:pt-24">
        <span className="block overflow-hidden">
          <motion.span
            ref={nameRef}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block text-[21.6vw] font-semibold uppercase leading-[0.92] tracking-wide sm:text-[12.96vw] lg:text-[10.8rem]"
            style={{ color: "var(--bg)" }}
          >
            <span ref={nameRollRef} style={{ display: "inline-block" }}>
              <VariableProximity
                label="Prantik."
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={nameRef}
                radius={160}
                falloff="linear"
              />
            </span>
          </motion.span>
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute right-10 bottom-8 z-10 sm:right-10"
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
            <ArrowDown size={16} />
          </span>
        </a>
      </motion.div>

      <motion.img
        src={portrait}
        alt=""
        initial={{ y: 120, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute bottom-0 left-[53%] z-0 w-auto max-w-[85vw] -translate-x-1/2 object-contain"
        style={{ height: "85vh" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "color-mix(in srgb, var(--bg) 55%, transparent)" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
