import { useEffect } from "react";
import { isMobile } from "../scripts/isMobile";

const HomeScreen = () => {
  useEffect(() => {
    if (isMobile.any()) {
      document.querySelector("#home")?.classList.add("mobile");
    }
  }, []);

  return (
    <section id="home" className="section section_1">
      <div id="home_content">
        <h1 className="animationTarget">
          Hi, I'm <span className="text_gradient">Gabriel Nito</span>
        </h1>
        <h2 className="animationTarget">
          Front-end Developer | Aspiring Cybersecurity Specialist
        </h2>
        <p className="animationTarget">
          A computer network student with a{" "}
          <span className="highlight-text">cybersecurity vision</span>. My focus
          is on{" "}
          <span className="highlight-text">mastering front-end skills</span> as
          I gear up for my first step in the tech world. Let's connect and
          explore the intersection of networks, security, and user-friendly
          design.
        </p>
      </div>
      <span className="scroll_me">
        <i className="fa-solid fa-arrow-down"></i>
      </span>
    </section>
  );
};

export default HomeScreen;
