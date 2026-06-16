import type { ReactElement } from "react";
import Header from "./components/Header";
import LandingTxt from "./components/LandingTxt";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
function App(): ReactElement {
  return <div className="grid gap-84 ">
    <Header />
    <LandingTxt />
    <About />
    <Projects />
    <Contacts />
    <Footer />
  </div>
}

export default App;