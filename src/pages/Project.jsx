import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { useLang } from '../context/LangContext'
import useSeo from '../hooks/useSeo'
import { projects, categoryLabels, brandLabels, tagColors } from '../data/projects'
import './Project.css'

const ui = {
  es: { back: 'Volver a proyectos', problem: 'El problema', work: 'Qué hice', decisions: 'Decisiones', result: 'Resultado', notFound: 'Ese proyecto no existe.' },
  en: { back: 'Back to projects', problem: 'The problem', work: 'What I did', decisions: 'Decisions', result: 'Result', notFound: 'That project does not exist.' },
}

function Project() {
  const { slug } = useParams()
  const { lang } = useLang()
  const ref = useRef(null)
  const p = projects.find(x => x.slug === slug)
  const tx = ui[lang]
  useSeo(`${p ? p.title : tx.notFound} | César Medina`, p ? p.desc[lang] : '')

  useEffect(() => {
    window.scrollTo(0, 0)
    const ctx = gsap.context(() => {
      gsap.from('.project__head > *', { opacity: 0, y: 24, duration: 0.5, ease: 'power3.out', stagger: 0.08 })
    }, ref)
    return () => ctx.revert()
  }, [slug])

  if (!p) return (
    <section className="project">
      <p className="project__text">{tx.notFound}</p>
      <Link to="/proyectos" className="project__back">← {tx.back}</Link>
    </section>
  )

  const sections = [
    { title: tx.problem, text: p.caseStudy.problem[lang] },
    { title: tx.work, list: p.caseStudy.work[lang] },
    p.caseStudy.decisions && { title: tx.decisions, list: p.caseStudy.decisions[lang] },
  ]

  return (
    <section className="project" ref={ref}>
      <Link to="/proyectos" className="project__back">← {tx.back}</Link>

      <div className="project__head">
        <p className="project__eyebrow">
          {categoryLabels[p.category][lang]}{p.metric && ` · ${p.metric[lang]}`}
        </p>
        <h1 className="project__title">{p.title}</h1>
        <p className="project__desc">{p.desc[lang]}</p>
        <div className="project__tags">
          {p.tags.map(t => <span className="tag" key={t} style={{ '--tag': tagColors[t] }}>{t}</span>)}
        </div>
        <div className="project__actions">
          {p.links.map(l => (
            <a key={l.brand} href={l.href} target="_blank" rel="noreferrer" className="project__link project__link--primary">
              {brandLabels[l.brand][lang]} ↗
            </a>
          ))}
          <a href={p.repo} target="_blank" rel="noreferrer" className="project__link">GitHub ↗</a>
        </div>
      </div>

      <img className="project__cover" src={p.image} alt={p.alt[lang]} width="1280" height="720" />

      {sections.map(s => (
        <div className="project__section" key={s.title}>
          <h2 className="project__section-title">{s.title}</h2>
          {s.text && <p className="project__text">{s.text}</p>}
          {s.list && <ul className="project__list">{s.list.map(i => <li key={i}>{i}</li>)}</ul>}
        </div>
      ))}

      <div className="project__section">
        <h2 className="project__section-title">{tx.result}</h2>
        <p className="project__result">{p.caseStudy.result[lang]}</p>
      </div>
    </section>
  )
}

export default Project
