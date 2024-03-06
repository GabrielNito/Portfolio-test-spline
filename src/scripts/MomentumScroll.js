export default function MomentumScroll() {
    const body = document.body;
    const root = document.querySelector('#root');
    let scrolledY = 0
    let rootY = 0

    console.log(body.scrollHeight, root.scrollHeight);

    body.style.height = root.scrollHeight + 'px';
    root.style.position = 'fixed';
    root.style.top = 0;
    root.style.left = 0;

    window.addEventListener('scroll', easeScroll);

    function easeScroll() {
        scrolledY = window.scrollY;
    }

    window.requestAnimationFrame(render);

    function render() {
        rootY = li(rootY, scrolledY, 0.05);
        rootY = Math.floor(rootY * 100) / 100;
        root.style.transform = `translateY(-${rootY}px)`;
        window.requestAnimationFrame(render);
    }

    function li(a, b, n) {
        return (1 - n) * a + n * b;
    }
}