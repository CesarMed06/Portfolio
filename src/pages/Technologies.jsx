import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../context/LangContext'
import './Technologies.css'

const content = {
  es: {
    eyebrow: 'Mi stack', title: 'Tecnologías',
    intro: 'Herramientas y lenguajes con los que trabajo y aprendo cada día.',
    seo: 'Stack de César Medina: React, TypeScript, Node.js, Python, MongoDB, Java y las herramientas de IA que usa a diario.',
    levels: { d: 'Diario', f: 'Habitual', l: 'Aprendiendo' },
  },
  en: {
    eyebrow: 'My stack', title: 'Technologies',
    intro: 'Tools and languages I work with and learn every day.',
    seo: 'César Medina stack: React, TypeScript, Node.js, Python, MongoDB, Java and the AI tooling he uses daily.',
    levels: { d: 'Daily', f: 'Regular', l: 'Learning' },
  },
}

const categories = [
  { es: 'IA y datos', en: 'AI & data', techs: [
    { name: 'Python', lvl: 'f', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'Pandas', lvl: 'l', icon: 'https://cdn.simpleicons.org/pandas/150458' },
    { name: 'Gemini API', lvl: 'l', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
    { name: 'OpenAI', lvl: 'l', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg' },
    { name: 'Llama 3', lvl: 'l', icon: 'https://cdn.simpleicons.org/meta/0467DF' },
  ]},
  { es: 'Backend', en: 'Backend', techs: [
    { name: 'Node.js', lvl: 'f', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', lvl: 'f', icon: 'https://cdn.simpleicons.org/express/ffffff' },
    { name: 'PHP', lvl: 'f', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'Java', lvl: 'f', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Docker', lvl: 'f', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ]},
  { es: 'Frontend', en: 'Frontend', techs: [
    { name: 'HTML5', lvl: 'd', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', lvl: 'd', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', lvl: 'd', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', lvl: 'f', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', lvl: 'd', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Tailwind CSS', lvl: 'f', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'GSAP', lvl: 'f', icon: 'https://cdn.simpleicons.org/greensock/88CE02' },
  ]},
  { es: 'Base de datos', en: 'Databases', techs: [
    { name: 'MySQL', lvl: 'f', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'MongoDB', lvl: 'f', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  ]},
  { es: 'Herramientas', en: 'Tools', techs: [
    { name: 'Git', lvl: 'd', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', lvl: 'd', icon: 'https://cdn.simpleicons.org/github/ffffff' },
    { name: 'VS Code', lvl: 'd', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Figma', lvl: 'f', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Postman', lvl: 'f', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
  ]},
]

function Technologies() {
  const { lang } = useLang()
  const ref = useRef(null)
  const tx = content[lang]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.technologies__header', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' })
      gsap.from('.tech-category', { opacity: 0, y: 30, duration: 0.5, ease: 'power3.out', stagger: 0.1, delay: 0.3 })
    }, ref)
    return () => ctx.revert()
  }, [lang])

  return (
    <section className="technologies" ref={ref}>
      <title>{tx.title} | César Medina</title>
      <meta name="description" content={tx.seo} />
      <div className="technologies__header">
        <p className="technologies__eyebrow">{tx.eyebrow}</p>
        <h1 className="technologies__title">{tx.title}</h1>
        <p className="technologies__intro">{tx.intro}</p>
      </div>
      <div className="tech-legend">
        {Object.keys(tx.levels).map(k => (
          <span className={`tech-legend__item tech-legend__item--${k}`} key={k}>{tx.levels[k]}</span>
        ))}
      </div>
      {categories.map(cat => (
        <div className="tech-category" key={cat.en}>
          <p className="tech-category__name">{lang === 'es' ? cat.es : cat.en}</p>
          <div className="tech-grid">
            {cat.techs.map(t => (
              <div className={`tech-card tech-card--${t.lvl}`} key={t.name}>
                <img src={t.icon} alt={t.name} width="18" height="18" loading="lazy" />
                {t.name}
                <span className={`tech-card__dot tech-card__dot--${t.lvl}`} role="img" aria-label={tx.levels[t.lvl]} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Technologies
