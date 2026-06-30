import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../context/LangContext'
import './Career.css'

const content = {
  es: {
    eyebrow: 'Mi recorrido',
    title: 'Trayectoria',
    intro: 'Formación y experiencia real relacionadas con mi perfil técnico dentro del ámbito informático.',
    badgeStudy: 'Formación',
    badgeWork: 'Experiencia',
  },
  en: {
    eyebrow: 'My journey',
    title: 'Career',
    intro: 'Relevant education and work experience in the IT field.',
    badgeStudy: 'Education',
    badgeWork: 'Experience',
  },
}

const timelineItems = [
  {
    period: '02/03/2026 - 18/06/2026',
    type: 'work',
    title: { es: 'Desarrollador Web Full Stack · Prácticas', en: 'Full Stack Web Developer · Internship' },
    place: { es: 'Original Merchandising · Remoto', en: 'Original Merchandising · Remote' },
    description: {
      es: 'Desarrollo web en entorno cliente con JavaScript (DOM, eventos, almacenamiento en navegador). Programación server-side e integración de lógica de negocio en el backend. Diseño e implementación de interfaces web con contenido multimedia e interactivo. Despliegue de aplicaciones, control de versiones con Git e integración continua.',
      en: 'Client-side web development with JavaScript (DOM, events, browser storage). Server-side programming and business logic integration. Design and implementation of web interfaces with multimedia and interactive content. Application deployment, version control with Git and continuous integration.',
    },
  },
  {
    period: '2024 - Actualidad',
    type: 'study',
    title: { es: 'Desarrollo de Aplicaciones Web', en: 'Web Application Development' },
    place: { es: 'CEI Sevilla', en: 'CEI Seville' },
  },
  {
    period: '15/03/2024 - 21/06/2024',
    type: 'work',
    title: { es: 'Técnico en Sistemas Microinformáticos y Redes', en: 'Microcomputer Systems & Networks Technician' },
    place: { es: 'IES Sotero Hernández · San Juan de Aznalfarache', en: 'IES Sotero Hernández · San Juan de Aznalfarache' },
    description: {
      es: 'Prácticas centradas en instalación de hardware, instalación de software en Windows y Linux, puesta en marcha de equipos y redes y mantenimiento del sistema informático.',
      en: 'Internship focused on hardware installation, software setup on Windows and Linux, equipment and network commissioning, and IT system maintenance.',
    },
  },
  {
    period: '2022 - 2024',
    type: 'study',
    title: { es: 'Grado Medio en Sistemas Microinformáticos y Redes', en: 'Intermediate Degree in Microcomputer Systems & Networks' },
    place: { es: 'IES Juan de Mairena', en: 'IES Juan de Mairena' },
  },
]

function Career() {
  const { lang } = useLang()
  const ref = useRef(null)
  const tx = content[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.career__header', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' })
      gsap.from('.career__legend', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out', delay: 0.15 })
      gsap.from('.timeline__item', { opacity: 0, x: -30, duration: 0.5, ease: 'power3.out', stagger: 0.12, delay: 0.35 })
    }, ref)
    return () => ctx.revert()
  }, [lang])

  return (
    <section className="career" ref={ref}>
      <title>{tx.title} | César Medina</title>

      <div className="career__header">
        <p className="career__eyebrow">{tx.eyebrow}</p>
        <h1 className="career__title">{tx.title}</h1>
        <p className="career__intro">{tx.intro}</p>
      </div>

      <div className="career__legend">
        <span className="career__badge career__badge--study">{tx.badgeStudy}</span>
        <span className="career__badge career__badge--work">{tx.badgeWork}</span>
      </div>

      <div className="timeline">
        {timelineItems.map((item, index) => (
          <article
            key={index}
            className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
          >
            <span className="timeline__dot" />

            <div className="timeline__card">
              <span className={`timeline__type timeline__type--${item.type}`}>
                {item.type === 'work' ? tx.badgeWork : tx.badgeStudy}
              </span>

              <p className="timeline__period">{item.period}</p>
              <h2 className="timeline__card-title">{item.title[lang]}</h2>
              <p className="timeline__place">{item.place[lang]}</p>

              {item.description && (
                <p className="timeline__description">{item.description[lang]}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Career
