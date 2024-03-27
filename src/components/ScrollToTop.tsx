import { useEffect } from "react";
import scrollToTop from "../scripts/scrollToTop.js";

const ScrollToTop = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <span id="scroll_to_top">
      <i className="fa-solid fa-chevron-up"></i>
      <p>Scroll to Top</p>
    </span>
  );
};

export default ScrollToTop;
