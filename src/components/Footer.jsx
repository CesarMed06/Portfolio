import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__brand">
                    <p className="footer__name">César Medina Gago</p>
                    <p className="footer__tagline">Desarrollador Web · DAW · Sevilla</p>
                </div>

                <div className="footer__middle">
                    <p className="footer__nav-label">Páginas</p>
                    <nav className="footer__nav">
                        <Link to="/">Inicio</Link>
                        <Link to="/trayectoria">Trayectoria</Link>
                        <Link to="/proyectos">Proyectos</Link>
                        <Link to="/tecnologias">Tecnologías</Link>
                    </nav>
                </div>

                <div className="footer__social">
                    <p className="footer__nav-label">Contacto</p>
                    <div className="footer__links">
                        <a
                            href="https://github.com/CesarMed06"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link"
                        >
                            <img
                                src="https://cdn.simpleicons.org/github/9aa4b2"
                                alt="GitHub"
                                width={18}
                                height={18}
                            />
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/c%C3%A9sar-medina-gago/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>

                        <a
                            href="https://mail.google.com/mail/u/0/?to=cmedgag@gmail.com&tf=cm"
                            target="_blank"
                            rel="noreferrer"
                            className="footer__link"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            cmedgag@gmail.com
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                <p>© 2026 César Medina Gago</p>
            </div>
        </footer>
    )
}

export default Footer