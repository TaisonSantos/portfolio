function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-mark" href="#inicio">
        SN<span>.</span>
      </a>
      <p>
        Feito com cuidado <span aria-hidden="true">✳</span> ©{" "}
        {new Date().getFullYear()} Seu Nome
      </p>
      <a href="#inicio" className="back-to-top">
        Voltar ao topo ↑
      </a>
    </footer>
  );
}

export default Footer;
