import Spline from "@splinetool/react-spline";
import { isMobile } from "../scripts/isMobile";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    if (isMobile.any()) {
      document.querySelector("#about")?.classList.add("mobile");
    }
  }, []);

  return (
    <section id="about" className="section section_2">
      <div className="animationTarget about_container">
        {isMobile.any() ? (
          <img src="/JS-TS-React.png" alt="" />
        ) : (
          <Spline scene="https://prod.spline.design/F7WDKkyfjblqGZpa/scene.splinecode" />
        )}

        <div className="animationTarget content_container">
          <h1>Linguagens</h1>
          <p>Javascript - TypeScript - React.js</p>
        </div>
      </div>

      <div className="animationTarget about_container">
        {isMobile.any() ? (
          <img src="/Archlinux.png" alt="" />
        ) : (
          <Spline scene="https://prod.spline.design/73N71Qgl8ZoFr2os/scene.splinecode" />
        )}
        <div className="animationTarget content_container">
          <h1>Ferramentas</h1>
          <p>Experiencia com Linux, especialmente Archlinux</p>
        </div>
      </div>
    </section>
  );
};

export default About;
