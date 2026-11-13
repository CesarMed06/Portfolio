import { Fragment, useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import useSeo from '../hooks/useSeo'
import { projects, brandLabels } from '../data/projects'
import './Home.css'
gsap.registerPlugin(ScrollTrigger)

const content = {
  es: {
    eyebrow: 'Portafolio personal',
    seo: 'Portfolio de César Medina, desarrollador full-stack especializado en React, Node.js, Python e IA. Sevilla.',
    subtitle: 'Desarrollador Full-Stack · IA & Datos',
    edu: 'Máster IA y Big Data',
    city: 'Sevilla',
    desc: <>Construyo aplicaciones web de principio a fin: interfaces con <strong>React</strong> y <strong>TypeScript</strong>, APIs en <strong>Node</strong> y <strong>Python</strong>, y modelos de <strong>IA</strong> conectados por API.</>,
    btn1: 'Ver proyectos',
    btn2: 'LinkedIn',
    btn3: 'GitHub',
    stats: [{ value: 7, label: 'Proyectos publicados' }, { value: 5000, suffix: '+', label: 'Descargas del mod Village Diplomacy' }, { value: 4, label: 'Años formándome' }],
    sliderLabel: 'Proyectos destacados',
    prevLabel: 'Anterior',
    nextLabel: 'Siguiente',
    dotLabel: 'Ir al proyecto',
    githubBtn: 'GitHub →',
    demoBtn: 'Demo →',
  },
  en: {
    eyebrow: 'Personal portfolio',
    seo: 'Portfolio of César Medina, full-stack developer focused on React, Node.js, Python and AI. Seville.',
    subtitle: 'Full-Stack Developer · AI & Data',
    edu: 'AI & Big Data Master',
    city: 'Seville',
    desc: <>I build web applications end to end: interfaces with <strong>React</strong> and <strong>TypeScript</strong>, APIs in <strong>Node</strong> and <strong>Python</strong>, and <strong>AI</strong> models wired through APIs.</>,
    btn1: 'View projects',
    btn2: 'LinkedIn',
    btn3: 'GitHub',
    stats: [{ value: 7, label: 'Published projects' }, { value: 5000, suffix: '+', label: 'Village Diplomacy mod downloads' }, { value: 4, label: 'Years learning' }],
    sliderLabel: 'Featured projects',
    prevLabel: 'Previous',
    nextLabel: 'Next',
    dotLabel: 'Go to project',
    githubBtn: 'GitHub →',
    demoBtn: 'Demo →',
  },
}

const featured = projects.filter(p => p.featured)

function Home() {
  const [current, setCurrent] = useState(0)
  const { lang } = useLang()
  const ref = useRef(null)
  const cardRef = useRef(null)
  const tx = content[lang]
  useSeo('César Medina — Desarrollador Full-Stack · IA & Datos', tx.seo)

  const prev = () => setCurrent(i => (i === 0 ? featured.length - 1 : i - 1))
  const next = () => setCurrent(i => (i === featured.length - 1 ? 0 : i + 1))

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

      document.querySelectorAll('.home__stat-num').forEach(el => {
        const target = Number(el.dataset.num)
        if (!target) return
        const locale = el.dataset.locale
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = Math.round(obj.val).toLocaleString(locale) + suffix
          },
          scrollTrigger: { trigger: '.home__stats', start: 'top 75%', toggleActions: 'play none play reset' },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!cardRef.current) return
    gsap.fromTo(cardRef.current, { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' })
  }, [current])

  const p = featured[current]

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
          <Link to="/proyectos" className="home__button home__button--primary">{tx.btn1}</Link>
          <a href="https://www.linkedin.com/in/c%C3%A9sar-medina-gago" target="_blank" rel="noreferrer" className="home__button home__button--secondary">{tx.btn2}</a>
          <a href="https://github.com/CesarMed06" target="_blank" rel="noreferrer" className="home__button home__button--ghost">{tx.btn3}</a>
        </div>
        <div className="home__stats">
          {tx.stats.map((s, i) => (
            <Fragment key={s.label}>
              {i > 0 && <div className="home__stat-divider" aria-hidden="true" />}
              <div className="home__stat">
                <span className="home__stat-num" data-num={s.value} data-suffix={s.suffix} data-locale={lang === 'es' ? 'es-ES' : 'en-US'}>{s.value.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US') + (s.suffix || '')}</span>
                <span className="home__stat-label">{s.label}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="home__right">
        <div className="slider">
          <p className="slider__label">{tx.sliderLabel}</p>
          <div className="slider__card" ref={cardRef} aria-live="polite">
            <img src={p.image} alt={p.alt[lang]} className="slider__image" width="640" height="360" loading="eager" />
            <div className="slider__body">
              <h2 className="slider__title">{p.title}</h2>
              <p className="slider__description">{p.desc[lang]}</p>
              {p.links[0] && (
                <a href={p.links[0].href} target="_blank" rel="noreferrer" className={`slider__btn slider__btn--${p.links[0].brand}`}>
                  {brandLabels[p.links[0].brand][lang]}
                </a>
              )}
              <a href={p.repo} target="_blank" rel="noreferrer" className="slider__btn">{tx.githubBtn}</a>
            </div>
          </div>
          <div className="slider__controls">
            <button className="slider__arrow" onClick={prev} aria-label={tx.prevLabel}>‹</button>
            <div className="slider__dots">
              {featured.map((_, i) => (
                <button key={i} className={`slider__dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)} aria-label={`${tx.dotLabel} ${i + 1}`} />
              ))}
            </div>
            <button className="slider__arrow" onClick={next} aria-label={tx.nextLabel}>›</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
