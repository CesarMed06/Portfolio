import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../context/LangContext'
import './Projects.css'

const content = {
  es: { eyebrow: 'Mis proyectos', title: 'Proyectos', subtitle: 'Aplicaciones reales construidas durante mi formación, con foco en funcionalidad y experiencia de usuario.', github: 'GitHub', demo: 'Demo' },
  en: { eyebrow: 'My projects', title: 'Projects', subtitle: 'Real applications built during my studies, focused on functionality and user experience.', github: 'GitHub', demo: 'Demo' },
}

const projects = [
  {
    title: 'ShirtFinder',
    image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673327/SHIRTFINDER_achfw6.png',
    description: { es: 'Buscador de camisetas de fútbol con catálogo filtrable, valoraciones, favoritos, foro y chatbot con IA (Gemini).', en: 'Football shirt finder with filterable catalog, ratings, favorites, forum and AI chatbot (Gemini).' },
    tags: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    github: 'https://github.com/CesarMed06/ShirtFinder',
  },
  {
    title: 'GoalTasker',
    image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/GOALTASKER_wgkuzk.png',
    description: { es: 'App de gestión de tareas y objetivos relacionados con el fútbol con seguimiento visual del progreso.', en: 'Football goal & task management app with visual progress tracking.' },
    tags: ['React', 'CSS', 'LocalStorage'],
    github: 'https://github.com/CesarMed06/GoalTasker',
  },
  {
    title: 'Bikes for Refugees',
    image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/BIKES-FOR-REFUGEES_muskbp.png',
    description: { es: 'Réplica visual de la web de Bikes for Refugees Scotland usando solo HTML y CSS.', en: 'Visual replica of the Bikes for Refugees Scotland website using pure HTML and CSS.' },
    tags: ['HTML', 'CSS'],
    github: 'https://github.com/CesarMed06/bikes-for-refugees',
  },
]

function Projects() {
  const { lang } = useLang()
  const ref = useRef(null)
  const tx = content[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' })
      gsap.from('.project-card', { opacity: 0, y: 50, duration: 0.6, ease: 'power3.out', stagger: 0.12, delay: 0.3 })
    }, ref)
    return () => ctx.revert()
  }, [lang])

  return (
    <section className="projects" ref={ref}>
      <div className="page-header">
        <p className="page-eyebrow">{tx.eyebrow}</p>
        <h1 className="page-title">{tx.title}</h1>
        <p className="page-subtitle">{tx.subtitle}</p>
      </div>
      <div className="projects__grid">
        {projects.map(p => (
          <article className="project-card" key={p.title}>
            <div className="project-card__img-wrapper">
              <img src={p.image} alt={p.title} className="project-card__img" width="640" height="360" loading="lazy" />
              <div className="project-card__overlay" aria-hidden="true" />
            </div>
            <div className="project-card__body">
              <h2 className="project-card__title">{p.title}</h2>
              <p className="project-card__description">{p.description[lang]}</p>
              <div className="project-card__tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-card__actions">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link">{tx.github} ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
