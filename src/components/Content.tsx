import Spline from "@splinetool/react-spline";
const Content_Image = () => {
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

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
        <div className="animationTarget content_container">
          <h1>Ferramentas</h1>
          <p>Experiencia com Linux, especialmente Archlinux</p>
        </div>

        {isMobile.any() ? (
          <img src="/Archlinux.png" alt="" />
        ) : (
          <Spline scene="https://prod.spline.design/73N71Qgl8ZoFr2os/scene.splinecode" />
        )}
      </div>
    </section>
  );
};

export default Content_Image;
