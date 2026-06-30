import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import './Navbar.css'

const FlagES = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="20" height="14" fill="#c60b1e"/>
    <rect y="3.5" width="20" height="7" fill="#ffc400"/>
  </svg>
)

const FlagGB = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="20" height="14" fill="#012169"/>
    <path d="M0,0 L20,14 M20,0 L0,14" stroke="#fff" strokeWidth="2.8"/>
    <path d="M0,0 L20,14 M20,0 L0,14" stroke="#c8102e" strokeWidth="1.8"/>
    <path d="M10,0 V14 M0,7 H20" stroke="#fff" strokeWidth="4.6"/>
    <path d="M10,0 V14 M0,7 H20" stroke="#c8102e" strokeWidth="3"/>
  </svg>
)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggle } = useLang()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setIsOpen(false)
  const links = lang === 'es'
    ? [['/', 'Inicio', true], ['/trayectoria', 'Trayectoria'], ['/proyectos', 'Proyectos'], ['/tecnologias', 'Tecnologías']]
    : [['/', 'Home', true], ['/trayectoria', 'Career'], ['/proyectos', 'Projects'], ['/tecnologias', 'Technologies']]

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo" onClick={close}>César</NavLink>

        <button className={`navbar__toggle${isOpen ? ' is-open' : ''}`}
          onClick={() => setIsOpen(o => !o)} aria-label="Abrir menú" aria-expanded={isOpen}>
          <span /><span /><span />
        </button>

        <nav className={`navbar__nav${isOpen ? ' is-open' : ''}`}>
          {links.map(([to, label, end]) => (
            <NavLink key={to} to={to} end={!!end} onClick={close}
              className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}>
              {label}
            </NavLink>
          ))}
          <button className="navbar__lang" onClick={toggle} aria-label="Cambiar idioma">
            <span className={`navbar__flag${lang === 'es' ? ' active' : ''}`}><FlagES /></span>
            <span className="navbar__lang-sep">/</span>
            <span className={`navbar__flag${lang === 'en' ? ' active' : ''}`}><FlagGB /></span>
          </button>
          <a href="https://mail.google.com/mail/?view=cm&to=cmedgag@gmail.com"
            target="_blank" rel="noreferrer" className="navbar__cta" onClick={close}>
            {lang === 'es' ? 'Contáctame' : 'Contact me'}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
