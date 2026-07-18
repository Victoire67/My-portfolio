import type { ReactElement } from "react";
import Header from "./components/Header";
import LandingTxt from "./components/LandingTxt";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App(): ReactElement {
  return <div className="grid gap-84 relative">

    <Header />

    <LandingTxt />

    <div className="grid gap-84 text-black">

      <About />

      <Projects />

    </div>
    <div className="grid">
      <Contacts />
      <Footer />
    </div>

  </div>
}

export default App;
