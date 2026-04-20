import { useState } from 'react'
import './Home.css'

const projects = [
    {
        title: 'ShirtFinder',
        image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673327/SHIRTFINDER_achfw6.png',
        description:
            'Buscador de camisetas de fútbol con catálogo filtrable, valoraciones, favoritos, foro y chatbot con IA (Gemini).',
        github: 'https://github.com/CesarMed06/ShirtFinder',
    },
    {
        title: 'GoalTasker',
        image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/GOALTASKER_wgkuzk.png',
        description:
            'App de gestión de tareas y objetivos relacionados con el fútbol con seguimiento visual.',
        github: 'https://github.com/CesarMed06/GoalTasker',
    },
    {
        title: 'Bikes for Refugees',
        image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/BIKES-FOR-REFUGEES_muskbp.png',
        description:
            'Réplica visual de la web de Bikes for Refugees Scotland usando solo HTML y CSS.',
        github: 'https://github.com/CesarMed06/bikes-for-refugees',
    },
]

function Home() {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1))
    const next = () => setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1))

    const project = projects[current]

    return (
        <section className="home">
            <div className="home__content">
                <p className="home__eyebrow">Portafolio personal</p>
                <h1 className="home__title">César</h1>
                <h2 className="home__subtitle">Desarrollador Web Full Stack · DAW</h2>
                <p className="home__description">
                    Estudiante de DAW en Sevilla apasionado por crear interfaces limpias y
                    funcionales. Actualmente en segundo año en CEI.
                </p>

                <div className="home__actions">
                    <a
                        href="https://github.com/CesarMed06"
                        target="_blank"
                        rel="noreferrer"
                        className="home__button home__button--primary"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/c%C3%A9sar-medina-gago/"
                        target="_blank"
                        rel="noreferrer"
                        className="home__button home__button--secondary"
                    >
                        LinkedIn
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&to=cmedgag@gmail.com" target="_blank" rel="noreferrer" className="home__button home__button--ghost">
                        Contacto
                    </a>
                </div>
            </div>

            <div className="slider">
                <p className="slider__label">Proyectos destacados</p>

                <div className="slider__card">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="slider__image"
                        width={700}
                        height={394}
                        loading="lazy"
                    />
                    <div className="slider__body">
                        <h3 className="slider__title">{project.title}</h3>
                        <p className="slider__description">{project.description}</p>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="slider__btn"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="slider__controls">
                    <button className="slider__arrow" onClick={prev} aria-label="Anterior">
                        ‹
                    </button>

                    <div className="slider__dots">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                className={`slider__dot ${i === current ? 'active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Ir al proyecto ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button className="slider__arrow" onClick={next} aria-label="Siguiente">
                        ›
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home