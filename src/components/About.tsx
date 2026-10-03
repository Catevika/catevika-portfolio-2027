import { professionalJourney } from "../data/professional-journey";
import { skills } from "../data/skills";
import type { Item, Job, Skill } from "../types";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h2>Professional Journey</h2>
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
                      alt={item.name}
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
    </section>
  );
}

export default About;
