import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const project1 = document.querySelector(".project-1");
    const project2 = document.querySelector(".project-2");

    const defaultText = `These are the most important projects that i've done so far.
    <br />
    Hover over them to see more about them`;

    function changeText(description: string) {
      document
        .querySelector("#projects_description_p")
        ?.classList.add("transition");
      setTimeout(() => {
        document.querySelector("#projects_description_p")?.remove();
        const p = document.createElement("p");
        p.setAttribute("id", "projects_description_p");
        p.classList.add("hidden");
        p.innerHTML = description;
        document
          .querySelector("#projects_description_container")
          ?.firstChild?.appendChild(p);
        setTimeout(() => {
          document
            .querySelector("#projects_description_p")
            ?.classList.remove("hidden");
        }, 300);
      }, 300);
    }

    project1?.addEventListener("mouseover", () => {
      changeText(
        "Further projects will be available as soon as they'll be developed"
      );
    });
    project1?.addEventListener("mouseout", () => {
      changeText(defaultText);
    });
    project2?.addEventListener("mouseover", () => {
      changeText(
        "Further projects will be available as soon as they'll be developed"
      );
    });
    project2?.addEventListener("mouseout", () => {
      changeText(defaultText);
    });
  }, []);

  return (
    <section id="projects">
      <div id="projects_container">
        <div className="projects_columns">
          <span className="projects_boxes color-1" />
          <span className="projects_boxes color-3" />
          <div className="project project-1 projects_boxes">
            <h1>Soon...</h1>
          </div>
          <span className="projects_boxes color-2" />
        </div>

        <div className="projects_columns">
          <span className="projects_boxes" />
          <div className="project project-2 projects_boxes">
            <h1>Coming</h1>
          </div>
          <span className="projects_boxes color-2" />
          <span className="projects_boxes color-1" />
        </div>
      </div>

      <div id="projects_description_container">
        <div>
          <h1>Projects</h1>
          <p id="projects_description_p">
            These are the most important projects that i've done so far.
            <br />
            Hover over them to see more about them
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
