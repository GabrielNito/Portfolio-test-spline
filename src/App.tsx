import { useEffect } from "react";
import NavBarJS from "./scripts/NavBar";
// import MomentumScroll from "./scripts/MomentumScroll";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Content_Image from "./components/Content";

function App() {
  useEffect(() => {
    // MomentumScroll();
    NavBarJS();
  }, []);

  return (
    <>
      <NavBar />
      <Home />
      <Content_Image />
    </>
  );
}

export default App;
