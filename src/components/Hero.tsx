function Hero() {
	return (
		<section className="hero-container glass-card">
			<div className="hero-sub-container">
				<div className="hero-top">
					<div className="glass-card hero-img-container animate-reveal-radial translate-y-[-50%] md:translate-y-0 md:ml-auto">
						<a href="/about">
							<img
								alt="Profile"
								src="/src/assets/images/Profile.png"
								className="hero-img"
								title="Go to About me"
							/>
						</a>
					</div>

					<div className="-mt-16 hero-content lg:mt-0">
						<div className="hero-headings animate-reveal-down">
							<h2>Dominique Bello</h2>
							<h1 className="text-gradient-gold text-shadow-black/10 text-shadow-lg">
								Full-stack Developer
							</h1>
							<h3 className="hero-stack">MERN Stack </h3>
							<p className="short-note">MongoDB, Express.js, React, Node.js</p>
							<p>
								I build modern web applications with a strong focus on
								maintainability, accessibility, testing and user experience.
							</p>
						</div>
					</div>
				</div>

				<div className="hero-buttons">
					<a href="/projects" className="btn-link">
						<button type="button" className="btn-animated-cta">
							<div className="btn-text">View Projects</div>
						</button>
					</a>
					<a href="/contact" className="btn-link">
						<button type="button" className="btn">
							Contact Me
						</button>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
