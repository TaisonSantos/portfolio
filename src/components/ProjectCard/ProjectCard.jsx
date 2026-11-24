import Button from "../Button/Button.jsx";

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" style={{ "--card-order": index }}>
      <div className="project-card__art" aria-hidden="true">
        <span className="art-orbit art-orbit--one" />
        <span className="art-orbit art-orbit--two" />
        <span className="art-window">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="project-card__body">
        <p className="project-card__number">PROJETO 0{index + 1}</p>
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="tag-list" aria-label="Tecnologias usadas">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-card__actions">
          <Button
            href={project.link}
            variant="primary"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">↗</span> Código
          </Button>
          <Button href={project.demo} target="_blank" rel="noreferrer">
            Ver projeto <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
