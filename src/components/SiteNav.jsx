import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import BottomDock from "@/components/BottomDock";

export default function SiteNav() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence>{!pastHero && <Navbar key="navbar" />}</AnimatePresence>
      <AnimatePresence>{pastHero && <BottomDock key="dock" />}</AnimatePresence>
    </>
  );
}
