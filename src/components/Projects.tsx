import { useEffect, useRef, useState } from "react";
import { LuX } from "react-icons/lu";
import { projects } from "../data/projects";
import type { Project } from "../types";
import SectionWave from "./SectionWave";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedProject) {
      dialogRef.current?.showModal();
    }
  }, [selectedProject]);

  const closeDialog = () => dialogRef.current?.close();

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="projects-container">
        <h1
          id="projects-heading"
          className="text-gradient-gold text-shadow-black/10 text-shadow-lg mb-0"
        >
          Featured Projects
        </h1>
        <h2 className="mt-0">Created by Catevika or Customized Tutorials</h2>

        <div className="projects-grid">
          {projects.map((project: Project) => (
            <article
              key={project.title}
              className="glass-card project-card"
              onClick={(event) => {
                if (
                  event.target instanceof Element &&
                  !event.target.closest("a, button")
                ) {
                  setSelectedProject(project);
                }
              }}
            >
              <button
                type="button"
                className="project-image-button"
                aria-label={`Enlarge ${project.title}`}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.picture} alt="" className="project-image" />
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
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onClose={() => setSelectedProject(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
      >
        {selectedProject && (
          <article className="project-dialog-card">
            <button
              type="button"
              className="project-dialog-close"
              aria-label="Close enlarged project"
              onClick={closeDialog}
            >
              <LuX aria-hidden="true" />
            </button>
            <img
              src={selectedProject.picture}
              alt={`${selectedProject.title} screenshot`}
              className="project-dialog-image"
            />
            <div className="project-dialog-content">
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              <p className="project-description">
                {selectedProject.description}
              </p>
              <ul className="project-tags" aria-label="Technologies used">
                {selectedProject.tags.map((tag) => (
                  <li key={tag} className="project-tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="project-actions">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn project-link"
                >
                  Live demo
                </a>
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn project-link"
                >
                  Related code
                </a>
              </div>
            </div>
          </article>
        )}
      </dialog>
      <SectionWave />
    </section>
  );
}

export default Projects;
