import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../context/LangContext'
import './Technologies.css'

const content = {
  es: { eyebrow: 'Mi stack', title: 'Tecnologías', intro: 'Herramientas y lenguajes con los que trabajo y aprendo cada día.' },
  en: { eyebrow: 'My stack', title: 'Technologies', intro: 'Tools and languages I work with and learn every day.' },
}

const categories = [
  { es: 'Frontend', en: 'Frontend', techs: [
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'GSAP', icon: 'https://cdn.simpleicons.org/greensock/88CE02' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  ]},
  { es: 'Backend', en: 'Backend', techs: [
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/ffffff' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ]},
  { es: 'Base de datos', en: 'Databases', techs: [
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  ]},
  { es: 'Herramientas', en: 'Tools', techs: [
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/ffffff' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ]},
  { es: 'Inteligencia Artificial', en: 'Artificial Intelligence', techs: [
    { name: 'Gemini API', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
    { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg' },
    { name: 'Prompt Engineering', icon: 'https://cdn.simpleicons.org/anthropic/D4A27F' },
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
      <div className="technologies__header">
        <p className="technologies__eyebrow">{tx.eyebrow}</p>
        <h1 className="technologies__title">{tx.title}</h1>
        <p className="technologies__intro">{tx.intro}</p>
      </div>
      {categories.map(cat => (
        <div className="tech-category" key={cat.en}>
          <p className="tech-category__name">{lang === 'es' ? cat.es : cat.en}</p>
          <div className="tech-grid">
            {cat.techs.map(t => (
              <div className="tech-card" key={t.name}>
                <img src={t.icon} alt={t.name} width="18" height="18" loading="lazy" />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Technologies
