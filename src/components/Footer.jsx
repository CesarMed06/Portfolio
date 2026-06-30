import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__left">
          © 2026 <span>César Medina</span> · Hecho con React & GSAP
        </p>
        <nav className="footer__links" aria-label="Links redes sociales">
          <a href="https://github.com/CesarMed06" target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
          <a href="https://www.linkedin.com/in/c%C3%A9sar-medina-gago/" target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
          <a href="mailto:cmedgag@gmail.com" className="footer__link">Email</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
