import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../context/LangContext'
import './Home.css'

const content = {
  es: {
    eyebrow: 'Portafolio personal',
    subtitle: 'Desarrollador Web Full Stack',
    edu: 'DAW',
    city: 'Sevilla',
    desc: <>Apasionado por la <strong>IA</strong>, el <strong>teletrabajo</strong> y el desarrollo web moderno. Con sueños de trabajar en <strong>Suiza</strong> y crear mi propia <strong>agencia de IA</strong>.</>,
    btn1: 'Ver proyectos',
    btn2: 'LinkedIn',
    btn3: 'GitHub',
    stats: [{ num: '3', label: 'Proyectos reales' }, { num: '2', label: 'Años estudiando' }, { num: '100%', label: 'Dedicación' }],
    sliderLabel: 'Proyectos destacados',
    githubBtn: 'GitHub →',
  },
  en: {
    eyebrow: 'Personal portfolio',
    subtitle: 'Full Stack Web Developer',
    edu: 'Web App Dev',
    city: 'Seville',
    desc: <>Passionate about <strong>AI</strong>, <strong>remote work</strong> and modern web development. Dreaming of working in <strong>Switzerland</strong> and building my own <strong>AI agency</strong>.</>,
    btn1: 'View projects',
    btn2: 'LinkedIn',
    btn3: 'GitHub',
    stats: [{ num: '3', label: 'Real projects' }, { num: '2', label: 'Years studying' }, { num: '100%', label: 'Dedication' }],
    sliderLabel: 'Featured projects',
    githubBtn: 'GitHub →',
  },
}

const projects = [
  { title: 'ShirtFinder', image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673327/SHIRTFINDER_achfw6.png', description: { es: 'Buscador de camisetas de fútbol con catálogo filtrable, valoraciones, favoritos, foro y chatbot con IA (Gemini).', en: 'Football shirt finder with filterable catalog, ratings, favorites, forum and AI chatbot (Gemini).' }, github: 'https://github.com/CesarMed06/ShirtFinder' },
  { title: 'GoalTasker', image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/GOALTASKER_wgkuzk.png', description: { es: 'App de gestión de tareas y objetivos relacionados con el fútbol con seguimiento visual.', en: 'Football goal & task management app with visual progress tracking.' }, github: 'https://github.com/CesarMed06/GoalTasker' },
  { title: 'Bikes for Refugees', image: 'https://res.cloudinary.com/dwldyiruu/image/upload/v1776673326/BIKES-FOR-REFUGEES_muskbp.png', description: { es: 'Réplica visual de la web de Bikes for Refugees Scotland usando solo HTML y CSS.', en: 'Visual replica of the Bikes for Refugees Scotland website using pure HTML and CSS.' }, github: 'https://github.com/CesarMed06/bikes-for-refugees' },
]

function Home() {
  const [current, setCurrent] = useState(0)
  const { lang } = useLang()
  const ref = useRef(null)
  const cardRef = useRef(null)
  const tx = content[lang]

  const prev = () => setCurrent(i => (i === 0 ? projects.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === projects.length - 1 ? 0 : i + 1))

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.home__eyebrow', { opacity: 0, y: 20, duration: 0.6 })
        .from('.home__title', { opacity: 0, y: 50, duration: 0.9 }, '-=0.3')
        .from('.home__subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.5')
        .from('.home__description', { opacity: 0, y: 20, duration: 0.5 }, '-=0.4')
        .from('.home__actions', { opacity: 0, y: 20, duration: 0.5 }, '-=0.4')
        .from('.home__stats', { opacity: 0, y: 20, duration: 0.5 }, '-=0.35')
        .from('.slider', { opacity: 0, x: 40, duration: 0.8, ease: 'power3.out' }, '-=0.7')
    }, ref)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!cardRef.current) return
    gsap.fromTo(cardRef.current, { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' })
  }, [current])

  const p = projects[current]

  return (
    <section className="home" ref={ref}>
      <div className="home__glow" aria-hidden="true" />
      <div className="home__glow-2" aria-hidden="true" />

      <div className="home__left">
        <p className="home__eyebrow">{tx.eyebrow}</p>
        <h1 className="home__title">César</h1>
        <p className="home__subtitle">
          {tx.subtitle}
          <span className="home__subtitle-dot" aria-hidden="true" />
          {tx.edu}
          <span className="home__subtitle-dot" aria-hidden="true" />
          {tx.city}
        </p>
        <p className="home__description">{tx.desc}</p>
        <div className="home__actions">
          <a href="/proyectos" className="home__button home__button--primary">{tx.btn1}</a>
          <a href="https://www.linkedin.com/in/c%C3%A9sar-medina-gagliardi-8804b0291/" target="_blank" rel="noreferrer" className="home__button home__button--secondary">{tx.btn2}</a>
          <a href="https://github.com/CesarMed06" target="_blank" rel="noreferrer" className="home__button home__button--ghost">{tx.btn3}</a>
        </div>
        <div className="home__stats">
          {tx.stats.map((s, i) => (
            <>
              {i > 0 && <div key={`div-${i}`} className="home__stat-divider" aria-hidden="true" />}
              <div key={s.label} className="home__stat">
                <span className="home__stat-num">{s.num}</span>
                <span className="home__stat-label">{s.label}</span>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="home__right">
        <div className="slider">
          <p className="slider__label">{tx.sliderLabel}</p>
          <div className="slider__card" ref={cardRef}>
            <img src={p.image} alt={p.title} className="slider__image" width="640" height="360" loading="eager" />
            <div className="slider__body">
              <h2 className="slider__title">{p.title}</h2>
              <p className="slider__description">{p.description[lang]}</p>
              <a href={p.github} target="_blank" rel="noreferrer" className="slider__btn">{tx.githubBtn}</a>
            </div>
          </div>
          <div className="slider__controls">
            <button className="slider__arrow" onClick={prev} aria-label="Anterior">‹</button>
            <div className="slider__dots">
              {projects.map((_, i) => (
                <button key={i} className={`slider__dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)} aria-label={`Proyecto ${i + 1}`} />
              ))}
            </div>
            <button className="slider__arrow" onClick={next} aria-label="Siguiente">›</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
