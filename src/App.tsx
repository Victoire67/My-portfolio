import type { ReactElement } from "react";
import Header from "./components/Header";
import LandingTxt from "./components/LandingTxt";
import About from "./components/About";
import Projects from "./components/Projects";
function App(): ReactElement {
  return <div className="grid gap-72">
    <Header />
    <LandingTxt />
    <About />
    <Projects />
  </div>
}

export default App;