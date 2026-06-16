import type { ReactElement } from "react";
import Header from "./components/Header";
import LandingTxt from "./components/LandingTxt";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
function App(): ReactElement {
  return <div className="grid gap-72 ">
    <Header />
    <LandingTxt />
    <About />
    <Projects />
    <Contacts />
  </div>
}

export default App;