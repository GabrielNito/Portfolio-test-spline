export default function NavBar() {
  return (
    <header>
      <nav id="navbar">
        <a href="/">Gabriel Nito</a>
        <ul className="header_user_menu">
          <a href="/">
            Home
            <span />
          </a>
          <a href="/contact">
            Contact
            <span />
          </a>
          <a href="/about">
            About
            <span />
          </a>
          <a href="#projects">
            Projects
            <span />
          </a>
        </ul>
        <div className="header_hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
