import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    onscroll = () => {
      if (window.scrollY > 100) {
        document.querySelector("#scroll_to_top")?.classList.add("visible");
      }
      if (window.scrollY < 100) {
        document.querySelector("#scroll_to_top")?.classList.remove("visible");
      }
    };

    document.querySelector("#scroll_to_top")?.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <span id="scroll_to_top">
      <i className="fa-solid fa-chevron-up"></i>
    </span>
  );
};

export default ScrollToTop;
