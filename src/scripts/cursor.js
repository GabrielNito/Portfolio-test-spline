export default function cursor() {
    const cursorDot = document.querySelector("#cursor")
    let previousPosition = { x: 0, y: 0 }
    onmousemove = function (e) {
        cursorDot.style.transform = `translate(${e.x}px, ${e.y}px)`
    }
}