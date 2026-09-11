import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Word({ children, progress, range }) {
  const color = useTransform(progress, range, ["#83886f", "#23281a"]);
  return (
    <motion.span style={{ color }}>
      {children}
      {" "}
    </motion.span>
  );
}

export default function ScrollRevealText({ texts, className, style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  const paragraphs = Array.isArray(texts) ? texts : [texts];
  const count = paragraphs.length;

  return (
    <div ref={ref} className="flex flex-col gap-5">
      {paragraphs.map((text, pIndex) => {
        const pStart = pIndex / count;
        const pEnd = pStart + 1 / count;
        const words = text.split(" ");

        return (
          <p key={pIndex} className={className} style={style}>
            {words.map((word, i) => {
              const start = pStart + (i / words.length) * (pEnd - pStart);
              const end = start + (1 / words.length) * (pEnd - pStart);
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}
