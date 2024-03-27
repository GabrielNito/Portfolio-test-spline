import { isMobile } from "./isMobile";

export default function cursor() {
  if (!isMobile.any()) {
    document.body.style.cursor = "none";
    const cursor = document.createElement("div");
    cursor.setAttribute("id", "cursor");
    cursor.style.display = "block";
    document.querySelector("#root")?.appendChild(cursor);

    onmousemove = function (e) {
      const keyframes = { transform: `translate(${e.x}px, ${e.y}px)` };
      cursor.style.transform = keyframes.transform;
    };
  }
}
