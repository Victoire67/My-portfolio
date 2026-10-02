import { useEffect, type ReactElement } from "react";
import { MotionConfig, motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Header from "./components/Header";
import LandingTxt from "./components/LandingTxt";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

/** Soft glow that trails the cursor across the whole page (pointer devices only). */
function CursorSpotlight() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 300, damping: 40 });
  const sy = useSpring(y, { stiffness: 300, damping: 40 });
  const background = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, rgba(45,212,191,0.08), transparent 70%)`;

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div aria-hidden="true" style={{ background }} className="pointer-events-none fixed inset-0 z-40 hidden md:block" />;
}

function App(): ReactElement {
  return (
    <MotionConfig reducedMotion="user">
      <CursorSpotlight />
      <Header />
      <main>
        <LandingTxt />
        <About />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
