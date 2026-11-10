import type { ReactElement } from "react";
import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import LandingTxt from "./components/LandingTxt";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App(): ReactElement {
  return (
    <MotionConfig reducedMotion="user">
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
