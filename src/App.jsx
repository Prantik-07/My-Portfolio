import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "@/lib/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Work from "@/components/sections/Work";
import Statement from "@/components/sections/Statement";
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
      <div className="flex min-h-svh flex-col justify-center items-center">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Work />
          <Statement />
          <Capabilities />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
