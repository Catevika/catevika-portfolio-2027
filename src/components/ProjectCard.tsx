import type { MouseEvent } from "react";
import type { ProjectCard } from "../types";

export default function ProjectCard({ project, onSelect }: ProjectCard) {
  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element && !event.target.closest("a, button")) {
      onSelect(project);
    }
  };

  return (
    <article className="glass-card project-card" onClick={handleCardClick}>
      <button
        type="button"
        className="project-image-button"
        aria-label={`Enlarge ${project.title}`}
        onClick={() => onSelect(project)}
      >
        <img
          src={project.picture}
          alt=""
          className={`project-image ${project.imageFit === "contain" ? "project-image-contain" : ""}`}
        />
      </button>
      <div className="project-card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-tags" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="project-tag">
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-actions">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn project-link"
          >
            Live demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="btn project-link"
          >
            Related code
          </a>
        </div>
      </div>
    </article>
  );
}
