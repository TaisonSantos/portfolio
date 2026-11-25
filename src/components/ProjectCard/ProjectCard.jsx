import Button from "../Button/Button.jsx";

const technologyColors = {
  React: "#61dafb",
  "Node.js": "#83cd29",
  MongoDB: "#47a248",
  Stripe: "#8b80ff",
  TypeScript: "#5ca7f2",
  Supabase: "#3ecf8e",
  "Tailwind CSS": "#38bdf8",
  Css: "#a78bfa",
  JavaScript: "#f7df1e",
  HTML: "#ff7043",
  MercadoPagoDeveloper: "#42b5ff",
  OpenAI: "#74c9a5",
  PostgreSQL: "#75a7ff",
};

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" style={{ "--card-order": index }}>
      <div className="project-card__art" aria-hidden="true">
        {project.video ? (
          <video
            className="project-card__video"
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <>
            <span className="art-orbit art-orbit--one" />
            <span className="art-orbit art-orbit--two" />
            <span className="art-window">
              <i />
              <i />
              <i />
            </span>
          </>
        )}
      </div>
      <div className="project-card__body">
        <p className="project-card__number">PROJETO 0{index + 1}</p>
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <ul className="tag-list" aria-label="Tecnologias usadas">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              style={{
                "--technology-color": technologyColors[technology] || "#aab4ca",
              }}
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="project-card__actions">
          <Button
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">↗</span> Código
          </Button>
          <Button
            href={project.demo}
            variant="primary"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
