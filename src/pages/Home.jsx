import './Home.css'

function Home() {
    return (
        <section className="home">
            <div className="home__content fade-up">
                <p className="home__eyebrow">Portafolio personal</p>
                <h1 className="home__title">César</h1>
                <h2 className="home__subtitle">Desarrollador Web Full Stack · DAW</h2>
                <p className="home__description">
                    Estudiante de DAW en Sevilla apasionado por el desarrollo de páginas web
                    modernas. Actualmente en segundo año
                    en CEI.
                </p>
                <div className="home__actions">
                    <a href="https://github.com/CesarMed06" target="_blank" rel="noreferrer" className="home__button home__button--primary">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/c%C3%A9sar-medina-gago/" target="_blank" rel="noreferrer" className="home__button home__button--secondary">
                        LinkedIn
                    </a>
                    <a href="https://mail.google.com/mail/u/0/?to=cmedgag@gmail.com&tf=cm" target="_blank" rel="noreferrer" className="home__button home__button--ghost">
                        Contacto
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home