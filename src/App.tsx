import { useEffect } from "react";

import NavBar from "./components/NavBar";
import NavBarJS from "./scripts/NavBar";
import Home from "./components/Home";
import Content_Image from "./components/Content";

function App() {
  useEffect(() => {
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
