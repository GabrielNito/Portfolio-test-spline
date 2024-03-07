import { useEffect } from "react";

// import MomentumScroll from "./scripts/MomentumScroll";
import cursor from "./scripts/cursor";
import NavBarJS from "./scripts/NavBar";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Content_Image from "./components/Content";

function App() {
  useEffect(() => {
    // MomentumScroll();
    cursor();
    NavBarJS();
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <NavBar />
      <Home />
      <Content_Image />
    </>
  );
}

export default App;
