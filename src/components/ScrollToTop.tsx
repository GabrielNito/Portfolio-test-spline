import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const button = document.querySelector("#scroll_to_top");
    onscroll = () => {
      if (window.scrollY > 100) {
        button?.classList.add("visible");
      }
      if (window.scrollY < 100) {
        button?.classList.remove("visible");
      }
    };

    button?.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    button?.addEventListener("mouseover", () => {
      button
        ?.querySelector("p")
        ?.setAttribute("style", `right: 125%; scale: 1; opacity: 1`);
    });

    button?.addEventListener("mouseout", () => {
      button
        ?.querySelector("p")
        ?.setAttribute("style", `right: 0; scale: 0; opacity: 0`);
    });
  }, []);

  return (
    <span id="scroll_to_top">
      <i className="fa-solid fa-chevron-up"></i>
      <p>Scroll to Top</p>
    </span>
  );
};

export default ScrollToTop;
