export default function NavBar() {
  return (
    <header>
      <nav id="navbar">
        <a id="header_profile_picture" href="/">
          <img
            src="/Logo.svg"
            alt="Logo Website"
            id="profile_picture_image"
          ></img>
        </a>
        <ul className="header_user_menu">
          <a href="/contact">
            Contact
            <span />
          </a>
          <a href="/about">
            About
            <span />
          </a>
          <a href="/user">
            <i className="fa-solid fa-user-large"></i>
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
