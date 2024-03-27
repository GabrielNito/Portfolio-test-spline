export default function scrollToTop() {
  const button = document.querySelector("#scroll_to_top");
  const scroll_me = document.querySelector(".scroll_me");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      button?.classList.add("visible");
      scroll_me?.classList.remove("visible");
      scroll_me?.classList.add("hidden");
    }
    if (window.scrollY < 100) {
      button?.classList.remove("visible");
      scroll_me?.classList.add("visible");
      scroll_me?.classList.remove("hidden");
    }
  });

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
}
