import type { ReactElement } from "react";
import Header from "./components/Header";
import LandingTxt from "./components/LandingTxt";
function App(): ReactElement {
  return <div>
    <Header />
    <LandingTxt />
  </div>
}

export default App;