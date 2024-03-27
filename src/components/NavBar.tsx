import { useEffect } from "react";
import { isMobile } from "../scripts/isMobile";

export default function NavBar() {
  useEffect(() => {
    if (isMobile.any()) {
      document.querySelectorAll(".navbar_link").forEach((element) => {
        element.classList.add("mobile");
      });
    }
  }, []);

  return (
    <div className="side_navbar">
      <a href="#home" className="navbar_link section_1">
        <i className="fa-solid fa-house" />
        <span className="navbar_span">Home</span>
      </a>
      <a href="#about" className="navbar_link section_2">
        <i className="fa-solid fa-bars-staggered" />
        <span className="navbar_span">About</span>
      </a>
      <a href="#projects" className="navbar_link section_3">
        <i className="fa-solid fa-code" />
        <span className="navbar_span">Projects</span>
      </a>
    </div>
  );
}
