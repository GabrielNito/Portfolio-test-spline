import { useEffect } from "react";

import cursor from "./scripts/cursor.ts";
import transitionHidden from "./scripts/transitionHidden.ts";
import navbar from "./scripts/navbar.ts";

import NavBar from "./components/NavBar";
import ScrollTop from "./components/ScrollToTop";

import HomeScreen from "./components/HomeScreen";
import About from "./components/About";
import Projects from "./components/Projects";
import { isMobile } from "./scripts/isMobile.ts";

function App() {
  useEffect(() => {
    cursor();
    transitionHidden();
    if (isMobile.any()) {
      return;
    }
    navbar();
  }, []);

  return (
    <>
      <HomeScreen />
      <About />
      <Projects />
      <NavBar />
      <ScrollTop />
    </>
  );
}

export default App;
