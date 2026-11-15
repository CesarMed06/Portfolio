import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import useSeo from '../hooks/useSeo'
import './NotFound.css'

const content = {
  es: {
    eyebrow: 'Error 404',
    title: 'Página no encontrada',
    text: 'La página que buscas no existe o ha cambiado de sitio. Desde el inicio llegas a todo lo demás.',
    cta: 'Volver al inicio',
    seo: 'La página que buscas no existe.',
  },
  en: {
    eyebrow: 'Error 404',
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved. From the home page you can reach everything else.',
    cta: 'Back to home',
    seo: 'The page you are looking for does not exist.',
  },
}

function NotFound() {
  const { lang } = useLang()
  const tx = content[lang]
  useSeo(`${tx.title} | César Medina`, tx.seo)

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])

  return (
    <section className="notfound">
      <p className="notfound__eyebrow">{tx.eyebrow}</p>
      <h1 className="notfound__title">{tx.title}</h1>
      <p className="notfound__text">{tx.text}</p>
      <Link to="/" className="notfound__cta">{tx.cta}</Link>
    </section>
  )
}

export default NotFound
