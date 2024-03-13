import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      project.addEventListener("click", () => {
        console.log(project);
      });
    });
  }, []);

  return (
    <section id="projects">
      <div id="projects_container">
        <div className="projects_columns">
          <span className="projects_boxes color-1" />
          <span className="projects_boxes color-3" />
          <div className="project projects_boxes">
            <h1>Project</h1>
          </div>
          <span className="projects_boxes color-2" />
        </div>

        <div className="projects_columns">
          <span className="projects_boxes" />
          <div className="project projects_boxes">
            <h1>Project</h1>
          </div>
          <span className="projects_boxes color-2" />
          <span className="projects_boxes color-1" />
        </div>
      </div>
      <div id="projects_description_container">
        <div>
          <h1>Projects</h1>
          <p>
            These are the most important projects that i've done so far.
            <br />
            <span className="animationTarget highlight-text">
              Hover over
            </span>{" "}
            them to see more about them
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
