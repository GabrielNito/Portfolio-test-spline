import { mobileDetect } from "./mobileDetect";

export default function cursor() {
    const animateCursor = () => {
        document.body.setAttribute("style", "cursor: none")
        const cursorDot = document.querySelector("#cursor")
        cursorDot.style.display = "block"

        onmousemove = function (e) {
            const keyframes = { transform: `translate(${e.x}px, ${e.y}px)` }
            cursorDot.style.transform = keyframes.transform
        }
    }
    mobileDetect(animateCursor)
}