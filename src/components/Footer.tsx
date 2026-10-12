function Footer() {
	return (
    <footer id="footer">
      <div className="footer-logo-container">
        <img
          src="/src/assets/images/Catevika.png"
          alt="Catevika Web Dev"
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
        <nav className="footer-menu" aria-label="Footer navigation">
          <p>Menu</p>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <nav className="socials" aria-label="Social media">
          <p>Follow me on</p>
          <a
            href="https://github.com/catevika"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            Github
          </a>
          <a
            href="https://x.com/dominique_bello"
            target="_blank"
            rel="noreferrer"
            aria-label="X (opens in a new tab)"
          >
            X
          </a>
          <a
            href="https://bsky.app/profile/catevika.bsky.social"
            target="_blank"
            rel="noreferrer"
            aria-label="Bluesky (opens in a new tab)"
          >
            Bluesky
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
