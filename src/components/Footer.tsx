function Footer() {
	return (
    <footer id="footer">
      <div className="footer-logo-container">
        <img
          src="/src/assets/images/Catevika.png"
          alt="Logo"
          className="footer-logo"
        />

        <div className="copyright">
          <p>
            Developed by <span>Catevika Web Dev</span>
          </p>
          <p>&copy; 2027 - All rights reserved</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-menu">
          <p>Menu</p>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="socials">
          <p>Follow me on</p>
          <a
            href="https://github.com/catevika"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://x.com/dominique_bello"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://bsky.app/profile/catevika.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            Bluesky
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
