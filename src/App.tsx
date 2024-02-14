import { useEffect } from "react";

import NavBar from "./components/NavBar";
import NavBarJS from "./scripts/NavBar";
import Home from "./components/Home";
import Spline from "@splinetool/react-spline";

function App() {
  useEffect(() => {
    NavBarJS();
  }, []);

  return (
    <>
      <NavBar />
      <Home />
      <Spline
        id="spline_canvas"
        scene="https://prod.spline.design/70RaS4z8xvrh5Jvo/scene.splinecode"
      />
    </>
  );
}

export default App;
