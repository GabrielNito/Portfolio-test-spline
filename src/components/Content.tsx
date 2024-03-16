import Spline from "@splinetool/react-spline";
import { isMobile } from "../scripts/isMobile";

const Content_Image = () => {
  return (
    <section id="content_image">
      <div className="animationTarget content_image_container">
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

      <div className="animationTarget content_image_container">
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

export default Content_Image;
