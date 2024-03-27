import { isMobile } from "./isMobile";

export default function navbar() {
  const sections = document.querySelectorAll(".section");

  let sections_positions: number[] = [];

  sections.forEach((section) => {
    let rect = section.getBoundingClientRect();
    sections_positions.push(Math.round(rect.top));
  });

  function changeSection(index: number) {
    const sections = document.querySelectorAll(".navbar_link");
    sections.forEach((section) => {
      section.classList.remove("show");
    });
    sections[index].classList.add("show");
    setTimeout(() => {
      sections[index].classList.remove("show");
    }, 1200);
  }
  if (isMobile.any()) {
    document.querySelectorAll(".navbar_link").forEach((section) => {
      section.addEventListener("click", () => {
        section.classList.add("show");
        setTimeout(() => {
          section.classList.remove("show");
        }, 1200);
      });
    });
  }

  function checkIfRepeated(lastIndex: number, currentIndex: number) {
    if (lastIndex !== currentIndex) {
      changeSection(currentIndex);
      last_section_active = currentIndex;
      return;
    }
  }

  let last_section_active: number;

  function checksSection() {
    if (Math.round(window.scrollY) < sections_positions[1] * 0.8) {
      checkIfRepeated(last_section_active, 0);
    } else if (Math.round(window.scrollY) < sections_positions[2] * 0.8) {
      checkIfRepeated(last_section_active, 1);
    } else {
      checkIfRepeated(last_section_active, 2);
    }
  }

  window.addEventListener("scroll", () => {
    checksSection();
  });
}
