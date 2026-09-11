import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "@/lib/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Work from "@/components/sections/Work";
import Statement from "@/components/sections/Statement";
import Skills from "@/components/sections/Skills";
import Capabilities from "@/components/sections/Capabilities";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

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
        <div
          className="w-full"
          style={{
            background: [
              "radial-gradient(60% 40% at 50% 100%, color-mix(in srgb, var(--bg) 30%, var(--ink) 70%) 0%, var(--ink) 100%)",
              "radial-gradient(90% 65% at 50% 88%, color-mix(in srgb, var(--olive) 75%, var(--ink) 25%) 0%, var(--ink) 100%)",
              "var(--ink)",
            ].join(", "),
          }}
        >
          <Hero />
        </div>
        <main className="w-full min-w-0">
          <Statement />
          <Skills />
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
