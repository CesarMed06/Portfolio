import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useLang } from '../context/LangContext'
import useSeo from '../hooks/useSeo'
import { projects, categoryLabels, brandLabels, tagColors } from '../data/projects'
import './Projects.css'

const content = {
  es: {
    eyebrow: 'Mis proyectos', title: 'Proyectos',
    subtitle: 'Siete proyectos publicados, con enlace al código y a la demo cuando existe. Filtra por tipo para ver lo que te interesa.',
    seo: 'Siete proyectos de desarrollo full-stack, IA y mods de Minecraft, con código en GitHub y demo en vivo cuando existe.',
    github: 'GitHub', all: 'Todos', filtersLabel: 'Filtrar proyectos',
  },
  en: {
    eyebrow: 'My projects', title: 'Projects',
    subtitle: 'Seven shipped projects, with links to the code and to a live demo where there is one. Filter by type to see what interests you.',
    seo: 'Seven full-stack, AI and Minecraft mod projects, with source code on GitHub and a live demo where there is one.',
    github: 'GitHub', all: 'All', filtersLabel: 'Filter projects',
  },
}

function Projects() {
  const { lang } = useLang()
  const [filter, setFilter] = useState('all')
  const ref = useRef(null)
  const tx = content[lang]
  useSeo(`${tx.title} | César Medina`, tx.seo)
  const shown = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' })
      gsap.from('.projects__filters', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out', delay: 0.2 })
      gsap.from('.project-card', { opacity: 0, y: 40, duration: 0.5, ease: 'power3.out', stagger: 0.08, delay: 0.3 })
    }, ref)
    return () => ctx.revert()
  }, [lang, filter])

  return (
    <section className="projects" ref={ref}>
      <div className="page-header">
        <p className="page-eyebrow">{tx.eyebrow}</p>
        <h1 className="page-title">{tx.title}</h1>
        <p className="page-subtitle">{tx.subtitle}</p>
      </div>

      <div className="projects__filters" role="group" aria-label={tx.filtersLabel}>
        {['all', ...Object.keys(categoryLabels)].map(k => (
          <button
            key={k}
            className={`filter${filter === k ? ' filter--active' : ''}`}
            onClick={() => setFilter(k)}
            aria-pressed={filter === k}
          >
            {k === 'all' ? tx.all : categoryLabels[k][lang]}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {shown.map(p => (
          <article className="project-card" key={p.slug}>
            <Link to={`/proyectos/${p.slug}`} className="project-card__img-wrapper">
              <img src={p.image} alt={p.alt[lang]} className="project-card__img" width="640" height="360" loading="lazy" />
              <span className="project-card__overlay" aria-hidden="true" />
            </Link>
            <div className="project-card__body">
              <div className="project-card__head">
                <h2 className="project-card__title">
                  <Link to={`/proyectos/${p.slug}`}>{p.title}</Link>
                </h2>
                {p.metric && <span className="project-card__metric">{p.metric[lang]}</span>}
              </div>
              <p className="project-card__description">{p.desc[lang]}</p>
              <div className="project-card__tags">
                {p.tags.map(t => <span className="tag" key={t} style={{ '--tag': tagColors[t] }}>{t}</span>)}
              </div>
              <div className="project-card__actions">
                {p.links.map(l => (
                  <a key={l.brand} href={l.href} target="_blank" rel="noreferrer"
                    className={`project-card__link project-card__link--${l.brand}`}>
                    {brandLabels[l.brand][lang]} ↗
                  </a>
                ))}
                <a href={p.repo} target="_blank" rel="noreferrer" className="project-card__link">{tx.github} ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
