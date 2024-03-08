import Spline from "@splinetool/react-spline";

const Content_Image = () => {
  return (
    <section id="content_image">
      <div className="content_image_container">
        <Spline scene="https://prod.spline.design/F7WDKkyfjblqGZpa/scene.splinecode" />
        <div className="content_container">
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos minus
            esse qui quasi reiciendis excepturi quaerat repudiandae nobis
            dolorum? Laboriosam.
          </p>
        </div>
      </div>

      <div className="content_image_container">
        <div className="content_container">
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos minus
            esse qui quasi reiciendis excepturi quaerat repudiandae nobis
            dolorum? Laboriosam.
          </p>
        </div>
        <Spline scene="https://prod.spline.design/73N71Qgl8ZoFr2os/scene.splinecode" />
      </div>
    </section>
  );
};

export default Content_Image;
