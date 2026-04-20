import './Projects.css'

const projects = [
    {
        title: 'ShirtFinder',
        year: '2025',
        image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673327/SHIRTFINDER_achfw6.png',
        description:
            'Buscador de camisetas de fútbol con catálogo filtrable, valoraciones, favoritos, foro y chatbot con IA (Gemini). Proyecto final de 2º DAW.',
        tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT'],
        github: 'https://github.com/CesarMed06/ShirtFinder',
        demo: null,
    },
    {
        title: 'GoalTasker',
        year: '2025',
        image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/GOALTASKER_wgkuzk.png',
        description:
            'App de gestión de tareas y objetivos relacionados con el fútbol. Permite crear tareas, marcar progresos y ver un seguimiento visual.',
        tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
        github: 'https://github.com/CesarMed06/GoalTasker',
        demo: 'https://goal-tasker.vercel.app/',
    },
    {
        title: 'Bikes for Refugees',
        year: '2026',
        image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/BIKES-FOR-REFUGEES_muskbp.png',
        description:
            'Réplica visual de la web de Bikes for Refugees Scotland usando solo HTML y CSS. Incluye layout con Flexbox, accesibilidad (skip link, aria-label) y gestión de imágenes con Cloudinary.',
        tags: ['HTML', 'CSS', 'Accesibilidad'],
        github: 'https://github.com/CesarMed06/bikes-for-refugees',
        demo: null,
    },
]

function Projects() {
    return (
        <section className="projects">
            <div className="projects__header fade-up">
                <p className="projects__eyebrow">Mis trabajos</p>
                <h1 className="projects__title">Proyectos</h1>
                <p className="projects__intro">
                    Proyectos que he desarrollado durante mi formación, ordenados del más
                    reciente al más antiguo.
                </p>
            </div>

            <div className="projects__grid fade-up fade-up--delay-1">
                {projects.map((project) => (
                    <article key={project.title} className="project-card">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-card__image"
                            width={600}
                            height={340}
                            loading="lazy"
                        />

                        <div className="project-card__top">
                            <h2 className="project-card__title">{project.title}</h2>
                            <span className="project-card__year">{project.year}</span>
                        </div>

                        <p className="project-card__description">{project.description}</p>

                        <ul className="project-card__tags">
                            {project.tags.map((tag) => (
                                <li key={tag} className="project-card__tag">
                                    {tag}
                                </li>
                            ))}
                        </ul>

                        <div className="project-card__actions">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="project-card__btn project-card__btn--ghost"
                            >
                                GitHub
                            </a>

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__btn project-card__btn--primary"
                                >
                                    Ver demo
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects