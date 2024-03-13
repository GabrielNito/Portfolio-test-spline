import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./css/global.sass";
import "./css/main.sass";
import "./css/Home.sass";
import "./css/NavBar.sass";
import "./css/Content.sass";
import "./css/Projects.sass";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
