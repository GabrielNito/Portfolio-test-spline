import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import cursor from "./scripts/cursor";
import transitionHidden from "./scripts/transitionHidden";
import NavBarJS from "./scripts/NavBar";

import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  useEffect(() => {
    cursor();
    transitionHidden();
    NavBarJS();
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
