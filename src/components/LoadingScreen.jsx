import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WordRotate } from "@/components/ui/word-rotate";

const GREETINGS = [
  { lang: "Hindi", text: "नमस्ते" },
  { lang: "English", text: "Namaste" },
  { lang: "Punjabi", text: "ਨਮਸਤੇ" },
  { lang: "Telugu", text: "నమస్తే" },
  { lang: "Urdu", text: "نمستے" },
];

// Hoisted so this array's identity never changes across renders — WordRotate's
// rotation effect depends on it, and a fresh array every render (e.g. from an
// inline `.map()` in JSX) tore down and restarted its interval on every parent
// re-render, racing it and silently skipping certain words in the cycle.
const WORDS = GREETINGS.map((g) => g.text);

const WORD_DURATION = 500;
const HOLD_AFTER_CYCLE = 300;
const TOTAL_DURATION = GREETINGS.length * WORD_DURATION + HOLD_AFTER_CYCLE;

const FONT_PROBES = [
  '600 1em "Noto Sans Devanagari"',
  '600 1em "Noto Sans Gurmukhi"',
  '600 1em "Noto Sans Telugu"',
  '600 1em "Noto Nastaliq Urdu"',
];

export default function LoadingScreen({ onFinish }) {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    // The Indic scripts' webfonts are large and load lazily; explicitly
    // requesting them and waiting up to 2.5s avoids the rotation cycling
    // past a word before its font has actually finished downloading.
    const ready = "fonts" in document
      ? Promise.all(FONT_PROBES.map((q) => document.fonts.load(q).catch(() => {})))
      : Promise.resolve();
    const timeout = new Promise((resolve) => setTimeout(resolve, 2500));

    Promise.race([ready, timeout]).then(() => {
      if (!cancelled) setFontsReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!fontsReady) return;

    const captionInterval = setInterval(() => {
      setCaptionIndex((i) => (i + 1) % GREETINGS.length);
    }, WORD_DURATION);

    const finishTimer = setTimeout(() => {
      onFinish?.();
    }, TOTAL_DURATION);

    return () => {
      clearInterval(captionInterval);
      clearTimeout(finishTimer);
    };
  }, [fontsReady, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6"
      style={{ background: "var(--olive)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.p
        key={fontsReady ? GREETINGS[captionIndex].lang : "loading"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-xs font-medium uppercase tracking-[0.3em]"
        style={{ color: "var(--olive-light)" }}
      >
        {fontsReady ? GREETINGS[captionIndex].lang : "Loading"}
      </motion.p>

      {fontsReady ? (
        <WordRotate
          words={WORDS}
          duration={WORD_DURATION}
          className="namaste-text text-5xl font-semibold sm:text-7xl"
          motionProps={{
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -16 },
            transition: { duration: 0.15, ease: "easeOut" },
          }}
        />
      ) : (
        <h1 className="namaste-text text-5xl font-semibold opacity-40 sm:text-7xl">Namaste</h1>
      )}

      <div className="mt-4 h-[2px] w-40 overflow-hidden rounded-full" style={{ background: "var(--olive-dark)" }}>
        <motion.div
          className="h-full"
          style={{ background: "var(--bg)" }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: TOTAL_DURATION / 1000, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
