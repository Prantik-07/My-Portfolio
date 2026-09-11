import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "@/lib/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Work from "@/components/sections/Work";
import Statement from "@/components/sections/Statement";
import Capabilities from "@/components/sections/Capabilities";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const heroWrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroWrapRef,
    offset: ["start start", "end start"],
  });
  const gradientY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [loading]);

  return (
    <SmoothScroll>
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>
      <ScrollProgress />
      <SiteNav />
      <div className="flex min-h-svh flex-col justify-center items-center">
        <div ref={heroWrapRef} className="relative w-full overflow-hidden">
          <motion.div
            className="pointer-events-none absolute inset-x-0 -top-[12%] h-[124%]"
            style={{
              y: gradientY,
              background: [
                "radial-gradient(60% 40% at 50% 100%, color-mix(in srgb, var(--bg) 30%, var(--olive-dark) 70%) 0%, var(--olive-dark) 100%)",
                "radial-gradient(90% 65% at 50% 88%, color-mix(in srgb, var(--olive) 90%, var(--olive-dark) 10%) 0%, var(--olive-dark) 100%)",
                "var(--olive-dark)",
              ].join(", "),
            }}
          />
          <Hero />
        </div>
        <main className="w-full min-w-0">
          <Statement />
          <Marquee />
          <Work />
          <Capabilities />
          <Process />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
