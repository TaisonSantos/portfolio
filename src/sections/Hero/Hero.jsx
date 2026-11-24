import Button from "../../components/Button/Button.jsx";

function Hero() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-section__eyebrow">
        <span className="status-dot" /> Disponível para novos projetos
      </div>
      <h1 id="hero-title">
        Oi, eu sou <span>Tailson Moraes.</span>
      </h1>
      <p className="hero-section__subtitle">
        Desenvolvedor Full Stack criando experiências digitais incríveis.
      </p>
      <p className="hero-section__intro">
        Transformo ideias em produtos digitais rápidos, acessíveis e feitos para
        pessoas.
      </p>
      <div className="hero-section__actions">
        <Button
          href="https://github.com/TaisonSantos"
          variant="primary"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true"><img width="48" height="48" src="https://img.icons8.com/badges/48/github.png" alt="github"/></span> GitHub
        </Button>


          
        <Button
          href="https://www.linkedin.com/in/tailson-moraes-355b49451/"
          variant="primary"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true"><img width="48" height="48" src="https://img.icons8.com/badges/48/linkedin.png" alt="Linkedin"/></span> Linkedin
        </Button>

        <Button
          href="https://www.instagram.com/tailson.dev?cnvx=MTY0ejhmeXd2dTJ0Ng=="
          variant="primary"
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true"><img width="48" height="48" src="https://img.icons8.com/badges/48/instagram-new.png" alt="instagram-new"/></span> instagram
        </Button>



        


        <Button href="mailto:seuemail@exemplo.com">
          Vamos conversar <span aria-hidden="true">↗</span>
        </Button>
      </div>
      <a className="scroll-cue" href="#projetos">
        <span /> Explore meu trabalho
      </a>
    </section>
  );
}

export default Hero;
