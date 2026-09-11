import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "@/lib/SmoothScroll";
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
  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <SmoothScroll>
      <div className="flex min-h-svh flex-col">
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
