import { mobileDetect } from "./mobileDetect";

export default function cursor() {
    function cursor_() {
        document.body.setAttribute("style", "cursor: none")
        const cursorDot = document.querySelector("#cursor")
        cursorDot.style.display = "block"
        let previousPosition = { x: 0, y: 0 }
        onmousemove = function (e) {
            cursorDot.style.transform = `translate(${e.x}px, ${e.y}px)`
        }
    }
    mobileDetect(cursor_)
}