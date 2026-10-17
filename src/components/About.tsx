import { professionalJourney } from "../data/professional-journey";
import type { Job } from "../types";
import SectionWave from "./SectionWave";
import SkillsCarousel from "./SkillsCarousel";

function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="about-container">
        <h1
          id="about-heading"
          className="text-gradient-gold text-shadow-black/10 text-shadow-lg mb-0"
        >
          Crafting Digital Experiences
        </h1>
        <h2 className="mt-0">
          Creating engaging and user-friendly web applications
        </h2>
        <div className="about-sub-container">
          {professionalJourney.map((item: Job) => (
            <article key={item.title} className="about-job">
              <h3 className="about-title">{item.title}</h3>
              <p className="about-description">{item.description}</p>
            </article>
          ))}
        </div>
        <SkillsCarousel />
      </div>
      <SectionWave />
    </section>
  );
}

export default About;
