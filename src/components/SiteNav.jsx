import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import BottomDock from "@/components/BottomDock";

export default function SiteNav() {
  const [pastHero, setPastHero] = useState(false);
  const [onContact, setOnContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(([entry]) => setOnContact(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence>{!pastHero && !onContact && <Navbar key="navbar" />}</AnimatePresence>
      <AnimatePresence>{pastHero && !onContact && <BottomDock key="dock" />}</AnimatePresence>
    </>
  );
}
