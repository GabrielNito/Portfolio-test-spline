export default function MomentumScroll() {
    const body = document.body;
    const root = document.getElementById('root');

    let scroll = { x: 0, y: 0 }
    let distance = { x: 0, y: 0 }

    window.addEventListener('scroll', easeScroll);

    function easeScroll() {
        scroll.x = window.scrollX;
        scroll.y = window.scrollY;
    }

    window.requestAnimationFrame(render);

    function render() {
        distance.x = li(distance.x, scroll.x, 1);
        distance.y = li(distance.y, scroll.y, 1);

        distance.x = Math.floor(distance.x * 100) / 100;
        distance.y = Math.floor(distance.y * 100) / 100;

        root.scroll(distance.x, distance.y)
        window.requestAnimationFrame(render);
    }

    function li(a, b, n) {
        return (1 - n) * a + n * b;
    }
}