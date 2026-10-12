import { professionalJourney } from "../data/professional-journey";
import { skills } from "../data/skills";
import type { Item, Job, Skill } from "../types";
import SectionWave from "./SectionWave";

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
        <div className="about-skills-container">
          {skills.map((skill: Skill) => (
            <article key={skill.title} className="glass-card about-skill">
              <h3 className="about-skill-title">{skill.title}</h3>
              {skill.items.map((item: Item) => (
                <p key={item.name} className="about-skill-item">
                  {item.icon ? (
                    <img
                      src={item.icon}
                      alt=""
                      className="about-skill-icon"
                    />
                  ) : null}
                  <span>{item.name}</span>
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
      <SectionWave />
    </section>
  );
}

export default About;
