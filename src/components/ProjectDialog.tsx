import { useEffect, useRef } from "react";
import { LuX } from "react-icons/lu";
import type { ProjectDialog } from "../types";

export default function ProjectDialog({ project, onClose }: ProjectDialog) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (project) {
      dialogRef.current?.showModal();
    }
  }, [project]);

  const closeDialog = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeDialog();
        }
      }}
    >
      {project && (
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
            src={project.picture}
            alt={`${project.title} screenshot`}
            className="project-dialog-image"
          />
          <div className="project-dialog-content">
            <h2 id="project-dialog-title">{project.title}</h2>
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
      )}
    </dialog>
  );
}
