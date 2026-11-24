import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { projects } from "../../data/projects.js";

function Projects() {
  return (
    <section
      className="projects-section"
      id="projetos"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <p className="section-kicker">MEU TRABALHO</p>
        <h2 id="projects-title">
          Projetos em destaque<span>.</span>
        </h2>
        <p>
          Uma seleção de projetos recentes que unem design, tecnologia e
          propósito.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
