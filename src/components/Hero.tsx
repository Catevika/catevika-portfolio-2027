import HeroBackground from "./HeroBackground";

function Hero() {
  return (
    <section id="hero">
      <HeroBackground />

      <div className="glass-card hero-container">
        <div className="hero-sub-container">
          <div className="hero-top">
            <div className="glass-card hero-img-container animate-reveal-radial">
              <a href="#about">
                <img
                  alt="Profile"
                  src="/src/assets/images/Profile.png"
                  className="hero-img"
                  title="Go to About me"
                />
              </a>
            </div>

            <div className="-mt-16 hero-content lg:-mt-32">
              <div className="hero-headings animate-reveal-down">
                <h2>
                  Dominique <span className="uppercase">Bello</span>
                </h2>
                <h1 className="text-gradient-gold text-shadow-black/10 text-shadow-lg">
                  Full-stack Developer
                </h1>
                <h3 className="hero-stack">MERN Stack </h3>
                <p className="short-note">
                  MongoDB, Express.js, React, Node.js
                </p>
                <p className="hero-paragraph">
                  I build modern web applications with a strong focus on
                  maintainability, accessibility, testing and user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn-link">
              <button type="button" className="btn-animated-cta">
                <div className="btn-text">View Projects</div>
              </button>
            </a>
            <a href="#contact" className="btn-link">
              <button type="button" className="btn">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
