import { useEffect, useState } from "react";
import { isMobile } from "../scripts/isMobile";

interface Props {
  title: string;
  description: string;
}

const Project_Description_P = ({ title, description }: Props) => {
  return (
    <div className="projects_description_container">
      <h1>{title}</h1>
      <p
        className="projects_description_p"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    const container = document.querySelector(".description-container");

    if (container?.querySelector("h1")?.innerHTML == "Projects") {
      container.classList.remove("fade-out");
    }
  }, []);

  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState({
    title: "Projects",
    description:
      "These are the most important projects that i've done so far.<br />Hover over them to see more about",
  });

  const handleMouseOver = (title: string, description: string) => {
    setShowDescription(false);
    setTimeout(() => {
      setDescription({ title, description });
      setShowDescription(true);
    }, 300);
  };

  useEffect(() => {
    if (isMobile.any()) {
      document.querySelector("#projects")?.classList.add("mobile");
    }
  }, []);

  return (
    <section id="projects">
      <div id="projects_container">
        <div className="projects_columns">
          <span className="projects_boxes color-1" />
          <span className="projects_boxes color-3" />
          <div
            className="project project-1 projects_boxes"
            onClick={() =>
              handleMouseOver(
                "Coming Soon...",
                "Future projects will be displayed here"
              )
            }
          >
            <h1>Coming</h1>
          </div>
          <span className="projects_boxes color-2" />
        </div>

        <div className="projects_columns">
          <span className="projects_boxes" />
          <div
            className="project project-2 projects_boxes"
            onClick={() =>
              handleMouseOver(
                "Coming Soon...",
                "Future projects will be displayed here"
              )
            }
          >
            <h1>Soon...</h1>
          </div>
          <span className="projects_boxes color-2" />
          <span className="projects_boxes color-1" />
        </div>
      </div>

      <div
        className={`description-container ${
          showDescription ? "fade-in" : "fade-out"
        }`}
      >
        <Project_Description_P
          title={description.title}
          description={description.description}
        />
      </div>
    </section>
  );
};

export default Projects;
