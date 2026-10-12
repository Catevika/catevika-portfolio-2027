import HeroBackground from "./HeroBackground";
import SectionWave from "./SectionWave";

function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading">
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
                <p className="hero-name">
                  Dominique <span className="uppercase">Bello</span>
                </p>
                <h1 id="hero-heading" className="text-gradient-gold text-shadow-black/10 text-shadow-lg">
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
            <a href="#projects" className="btn-animated-cta">
              <span className="btn-text">View Projects</span>
            </a>
            <a href="#contact" className="btn">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <SectionWave />
    </section>
  );
}

export default Hero;
