import { useState } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types";
import ProjectCard from "./ProjectCard";
import ProjectDialog from "./ProjectDialog";
import SectionWave from "./SectionWave";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <SectionWave />
    </section>
  );
}

export default Projects;
