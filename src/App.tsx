import type { ReactElement } from "react";
import Header from "./components/Header";
import LandingTxt from "./components/LandingTxt";
import About from "./components/About";
function App(): ReactElement {
  return <div>
    <Header />
    <LandingTxt />
    <About />
  </div>
}

export default App;